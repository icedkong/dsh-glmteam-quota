import { QuotaManager } from './src/manager.js';
import { CodexOAuthController } from './src/codex-oauth.js';
import { resolveDshRuntimeVersion, resolveHostDshInstallation } from './src/version.js';
import { describeOpenAIAdminKey, resolveOpenAIAdminKey } from './src/openai-admin.js';
import { CompanyDomainAliasSettings, GlmTeamPlanSettings, QuotaColorSettings } from './src/quota-settings.js';
import { readProviderRouteHosts, nativeDeepSeekEndpointEnvironment } from './src/route-hosts.js';
import { CompanyRulesManager } from './src/company-rules.js';
import { createCompanyRulesCache } from './src/company-rules-storage.js';
import { runModelDiscovery } from './src/model-discovery-operation.js';
import { loadModelCatalogGrouping } from './src/model-catalog-grouping.js';

export const name = 'provider-quota';
export const inject = ['llm', 'settings', 'credentials', 'connection', 'tools'];
const ADMIN_KEY_REF = 'OPENAI_ADMIN_KEY_DSH';
const validAdminKey = value => typeof value === 'string' && /^sk-admin-[A-Za-z0-9_-]{8,8192}$/.test(value);
async function readSettingsPayload(request, parentSignal = request.signal) {
  const reader = request.body?.getReader();
  if (!reader) throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
  const signal = AbortSignal.any([parentSignal, AbortSignal.timeout(5000)]);
  if (signal.aborted) {
    try { Promise.resolve(reader.cancel()).catch(() => {}); } catch {}
    try { reader.releaseLock(); } catch {}
    throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
  }
  const chunks = [];
  let size = 0;
  try {
    for (;;) {
      const item = await new Promise((resolve, reject) => {
        const abort = () => { signal.removeEventListener('abort', abort); reject(new Error('invalid-request')); };
        if (signal.aborted) { reject(new Error('invalid-request')); return; }
        signal.addEventListener('abort', abort, { once: true });
        reader.read().then(value => { signal.removeEventListener('abort', abort); resolve(value); }, () => { signal.removeEventListener('abort', abort); reject(new Error('invalid-request')); });
      });
      if (item.done) break;
      size += item.value.byteLength;
      if (size > 16_384) throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
      chunks.push(item.value);
    }
    const value = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('invalid-request');
    return value;
  } catch { throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' }); }
  finally {
    try { Promise.resolve(reader.cancel()).catch(() => {}); } catch {}
    try { reader.releaseLock(); } catch {}
  }
}

// The SDK HTTP bridge preserves Host/Origin but uses http://dsh.internal as
// Request.url. Compare browser origins to Host, not that synthetic carrier URL.
function sameOriginOAuthRequest(request) {
  const site = request.headers.get('Sec-Fetch-Site');
  if (site && !['same-origin', 'none'].includes(site)) return false;
  const origin = request.headers.get('Origin');
  if (origin === null) return true; // Authenticated non-browser clients still need CSRF for writes.
  try {
    const parsed = new URL(origin);
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.origin !== origin || parsed.username || parsed.password) return false;
    const carrier = new URL(request.url);
    const host = request.headers.get('Host') ?? (carrier.hostname !== 'dsh.internal' ? carrier.host : null);
    if (!host || /[\\/@?#\s]/.test(host)) return false;
    const authority = new URL(`${parsed.protocol}//${host}`);
    return authority.host === parsed.host && !authority.username && !authority.password && authority.pathname === '/' && !authority.search && !authority.hash;
  } catch { return false; }
}

export function apply(ctx, config = {}) {
  const editor = ctx.get('configEditor');
  const entry = ctx.fiber?.entry;
  const colors = new QuotaColorSettings(config.colorThresholds, editor && entry ? async colorThresholds => {
    await editor.edit(entry, current => ({ ...current, colorThresholds }));
  } : undefined);
  const domainAliases = new CompanyDomainAliasSettings(config.domainAliases, editor && entry ? async value => {
    await editor.edit(entry, current => ({ ...current, domainAliases: value }));
  } : undefined);
  const teamPlans = new GlmTeamPlanSettings(config.glmTeamPlans, editor && entry ? async value => {
    await editor.edit(entry, current => ({ ...current, glmTeamPlans: value }));
  } : undefined);
  const launchEnvironment = nativeDeepSeekEndpointEnvironment(ctx.get('launchEnvironment'), () => process.env.DEEPSEEK_BASE_URL);
  const installation = resolveHostDshInstallation(ctx.get('profileContext'));
  const catalogGrouping = loadModelCatalogGrouping(installation);
  const manager = new QuotaManager({
    llm: ctx.llm, settings: ctx.settings, credentials: ctx.credentials, launchEnvironment,
    deepseekAccount: ctx.get('deepseekAccount'), agentDefaultModel: ctx.get('agentDefaultModel'),
  }, { version: resolveDshRuntimeVersion({ installation }), colorThresholdsProvider: () => colors.read().colorThresholds, teamPlansProvider: () => teamPlans.value });
  ctx.effect(() => () => manager.dispose());
  ctx.provide('providerQuota', manager);
  const codexOAuth = new CodexOAuthController({
    llm: ctx.llm, settings: ctx.settings, credentials: ctx.credentials,
    authorization: () => ctx.get('authorization'),
  });
  ctx.effect(() => () => codexOAuth.dispose());
  ctx.provide('providerQuotaCodexOAuth', codexOAuth);
  const codexOAuthFetch = async request => {
    const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' };
    if (!sameOriginOAuthRequest(request)) return Response.json({ error: 'forbidden' }, { status: 403, headers });
    try {
      if (request.method === 'GET') return Response.json(await codexOAuth.read(), { headers });
      if (request.method !== 'POST') return Response.json({ error: 'invalid-request' }, { status: 405, headers });
      if (!codexOAuth.csrfMatches(request.headers.get('X-Quota-Codex-CSRF')) || !/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') ?? '')) {
        return Response.json({ error: 'forbidden' }, { status: 403, headers });
      }
      const raw = await readSettingsPayload(request);
      return Response.json(await codexOAuth.mutate(raw), { headers });
    } catch (cause) {
      const safe = new Set(['invalid-request', 'invalid-mode', 'invalid-callback', 'flow-unavailable', 'route-missing', 'api-key-override', 'endpoint-override', 'busy', 'attempt-mismatch', 'prompt-mismatch', 'not-active', 'conflict', 'auth-failed', 'not-committed', 'unsupported-prompt', 'unsafe-auth-link', 'expired', 'timeout']);
      const error = safe.has(cause?.code) ? cause.code : 'service-unavailable';
      const status = ['invalid-request', 'invalid-mode', 'invalid-callback'].includes(error) ? 400 : error === 'service-unavailable' ? 503 : 409;
      return Response.json({ error }, { status, headers });
    }
  };
  // GET has no body; stream POSTs so the SDK's aggregate JSON buffer is never
  // allocated before our 16 KiB / five-second mutation-body fence runs.
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-codex-oauth', methods: ['GET'], requestBody: 'buffered', fetch: codexOAuthFetch,
  }));
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-codex-oauth/action', methods: ['POST'], requestBody: 'streaming', fetch: codexOAuthFetch,
  }));
  const discoveryLifetime = new AbortController();
  ctx.effect(() => () => discoveryLifetime.abort());
  let activeDiscoveries = 0;
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-model-discovery', methods: ['POST'], requestBody: 'streaming',
    async fetch(request) {
      const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
      if (request.method !== 'POST') return Response.json({ error: 'invalid-request' }, { status: 405, headers });
      if (!sameOriginOAuthRequest(request) || !colors.csrfMatches(request.headers.get('X-Quota-Settings-CSRF')) || !/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') ?? '')) {
        return Response.json({ error: 'forbidden' }, { status: 403, headers });
      }
      if (activeDiscoveries >= 4) return Response.json({ error: 'busy' }, { status: 429, headers });
      activeDiscoveries++;
      try {
        const signal = AbortSignal.any([request.signal, discoveryLifetime.signal, AbortSignal.timeout(15_000)]);
        signal.throwIfAborted();
        const raw = await readSettingsPayload(request, signal);
        const work = runModelDiscovery({ llm: ctx.llm, settings: ctx.settings, credentials: ctx.credentials }, raw, { signal });
        // Bound service calls which don't expose cancellation; the same signal
        // fences subsequent credential lookups and fetches inside the operation.
        let stop;
        try {
          const deadline = new Promise((_, reject) => {
            stop = () => reject(Object.assign(new Error('discovery stopped'), { code: request.signal.aborted || discoveryLifetime.signal.aborted ? 'cancelled' : 'timeout' }));
            if (signal.aborted) stop();
            else signal.addEventListener('abort', stop, { once: true });
          });
          return Response.json(await Promise.race([work, deadline]), { headers });
        } finally { signal.removeEventListener('abort', stop); }
      } catch (cause) {
        const error = ['invalid-request', 'unsupported', 'timeout', 'cancelled'].includes(cause?.code) ? cause.code : 'failed';
        return Response.json({ error }, { status: error === 'invalid-request' ? 400 : error === 'timeout' ? 504 : 503, headers });
      } finally { activeDiscoveries--; }
    },
  }));
  const companyRules = new CompanyRulesManager({ cache: createCompanyRulesCache(ctx) });
  ctx.provide('providerCompanyRules', companyRules);
  ctx.effect(() => () => companyRules.dispose());
  const companyRulesOperation = async (args = {}) => {
    if (!args || typeof args !== 'object' || Array.isArray(args) || Object.keys(args).some(key => key !== 'action')) throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
    const action = args.action === undefined ? 'read' : args.action;
    if (action === 'read') return companyRules.read();
    if (action === 'refresh') return companyRules.refresh();
    throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
  };
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-company-rules', methods: ['GET', 'POST'], requestBody: 'buffered',
    async fetch(request) {
      const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
      try {
        if (request.method === 'GET') return Response.json({ ...await companyRulesOperation(), csrf: colors.browserRead().csrf }, { headers });
        if (!colors.csrfMatches(request.headers.get('X-Quota-Settings-CSRF')) || !/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') ?? '')) return Response.json({ error: 'forbidden' }, { status: 403, headers });
        const raw = await readSettingsPayload(request);
        if (raw.action !== 'refresh' || Object.keys(raw).some(key => key !== 'action')) throw Object.assign(new Error('invalid-request'), { code: 'invalid-request' });
        return Response.json({ ...await companyRulesOperation(raw), csrf: colors.browserRead().csrf }, { headers });
      } catch (cause) {
        const invalid = cause?.code === 'invalid-request';
        return Response.json({ error: invalid ? 'invalid-request' : 'rules-unavailable' }, { status: invalid ? 400 : 503, headers });
      }
    },
  }));
  ctx.effect(() => ctx.tools.register({
    name: 'provider_company_rules',
    description: 'Read provider grouping rules and update status, or refresh from the single bundled public rule-source URL. Read may check for updates in the background; refresh shares a 60-second cooldown. No provider domains, credentials, or configurable URLs are sent.',
    deferLoading: true,
    parameters: { type: 'object', properties: { action: { type: 'string', enum: ['read', 'refresh'], description: 'Default read. Refresh checks the fixed public source and retains last-known-good rules on failure.' } }, additionalProperties: false },
    output: { schema: { type: 'object', additionalProperties: true }, render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }] },
    timeoutMs: 15_000,
    isConcurrencySafe: () => true,
    async execute(args) {
      try { return await companyRulesOperation(args); }
      catch (cause) { return { error: cause?.code === 'invalid-request' ? 'invalid-request' : 'rules-unavailable' }; }
    },
  }));
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-route-hosts', methods: ['GET'], requestBody: 'buffered',
    async fetch(request) {
      const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
      try {
        return Response.json(await readProviderRouteHosts({ llm: ctx.llm, settings: ctx.settings, credentials: ctx.credentials, launchEnvironment, deepseekAccount: ctx.get('deepseekAccount'), catalogGrouping }, { signal: request.signal }), { headers });
      } catch {
        return Response.json({ error: 'route-hosts-unavailable' }, { status: 503, headers });
      }
    },
  }));
  const colorOperation = async ({ action = 'read', greenMin, orangeMin } = {}) => {
    if (action === 'read') return colors.read();
    if (action !== 'set') throw Object.assign(new Error('invalid-thresholds'), { code: 'invalid-thresholds' });
    return colors.save({ greenMin, orangeMin });
  };
  const adminStatus = async () => {
    try { return await describeOpenAIAdminKey(ctx.credentials); }
    catch (cause) {
      const code = ['invalid-admin-key', 'admin-credential-error'].includes(cause?.code) ? cause.code : 'admin-credential-error';
      // An unavailable optional credential reference must not prevent users from
      // viewing or saving unrelated color thresholds.
      return { configured: false, source: null, error: code };
    }
  };
  const settingsSnapshot = async () => ({ ...colors.browserRead(), ...domainAliases.read(), ...teamPlans.read(), adminKey: await adminStatus() });
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota-settings', methods: ['GET', 'POST'], requestBody: 'buffered',
    async fetch(request) {
      const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
      try {
        if (request.method === 'GET') return Response.json(await settingsSnapshot(), { headers });
        if (!colors.csrfMatches(request.headers.get('X-Quota-Settings-CSRF')) || !/^application\/json(?:\s*;|$)/i.test(request.headers.get('Content-Type') ?? '')) return Response.json({ error: 'forbidden' }, { status: 403, headers });
        const raw = await readSettingsPayload(request);
        if (raw.action === 'saveDomainAliases') {
          if (!Object.hasOwn(raw, 'domainAliases') || Object.keys(raw).some(key => !['action', 'domainAliases'].includes(key))) throw Object.assign(new Error('invalid-domain-aliases'), { code: 'invalid-domain-aliases' });
          await domainAliases.save(raw.domainAliases);
          return Response.json({ ...(await settingsSnapshot()), saved: true, savedItem: 'domainAliases' }, { headers });
        }
        if (raw.action === 'saveAdminKey') {
          if (Object.keys(raw).some(key => !['action', 'adminKey'].includes(key)) || !validAdminKey(raw.adminKey)) throw Object.assign(new Error('invalid-admin-key'), { code: 'invalid-admin-key' });
          await ctx.credentials.set(ADMIN_KEY_REF, raw.adminKey);
          const status = await adminStatus();
          if (!status.configured) throw Object.assign(new Error('save-failed'), { code: 'save-failed' });
          return Response.json({ ...(await settingsSnapshot()), saved: true, savedItem: 'adminKey' }, { headers });
        }
        if (raw.action === 'saveGlmTeamPlans') {
          if (!Object.hasOwn(raw, 'glmTeamPlans') || Object.keys(raw).some(key => !['action', 'glmTeamPlans'].includes(key))) throw Object.assign(new Error('invalid-team-plan'), { code: 'invalid-team-plan' });
          await teamPlans.save(raw.glmTeamPlans);
          return Response.json({ ...(await settingsSnapshot()), saved: true, savedItem: 'glmTeamPlans' }, { headers });
        }
        const value = raw.action === undefined ? raw : (() => { throw Object.assign(new Error('invalid-thresholds'), { code: 'invalid-thresholds' }); })();
        await colorOperation({ action: 'set', ...value });
        return Response.json({ ...(await settingsSnapshot()), saved: true, savedItem: 'colorThresholds' }, { headers });
      } catch (cause) {
        const allowed = ['invalid-thresholds', 'invalid-domain-aliases', 'invalid-team-plan', 'invalid-admin-key', 'admin-credential-error', 'invalid-request', 'settings-unavailable', 'settings-conflict', 'save-failed'];
        const code = allowed.includes(cause?.code) ? cause.code : 'save-failed';
        return Response.json({ error: code }, { status: ['invalid-thresholds', 'invalid-domain-aliases', 'invalid-team-plan', 'invalid-admin-key', 'invalid-request'].includes(code) ? 400 : code === 'settings-conflict' ? 409 : 503, headers });
      }
    },
  }));
  ctx.effect(() => ctx.tools.register({
    name: 'quota_color_settings',
    description: 'Read or persist remaining-quota color thresholds for every session in the current profile. Colors stay fixed green/orange/red; only percentage boundaries change.',
    deferLoading: true,
    parameters: { type: 'object', properties: {
      action: { type: 'string', enum: ['read', 'set'], description: 'Default read. Set persists both boundaries.' },
      greenMin: { type: 'integer', description: 'For set: green when remaining percentage is at least this value; 1–100 and greater than orangeMin.' },
      orangeMin: { type: 'integer', description: 'For set: orange at or above this value but below greenMin; 0–99. Below this is red.' },
    }, additionalProperties: false },
    output: { schema: { type: 'object', additionalProperties: true }, render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }] },
    timeoutMs: 15_000,
    isConcurrencySafe: args => args?.action !== 'set',
    async execute(args) {
      try { return { ok: true, ...await colorOperation(args ?? {}) }; }
      catch (cause) { return { ok: false, error: ['invalid-thresholds', 'settings-unavailable', 'settings-conflict', 'save-failed'].includes(cause?.code) ? cause.code : 'save-failed' }; }
    },
  }));
  const operation = async ({ refresh = false, provider } = {}) => {
    if (typeof refresh !== 'boolean' || (provider !== undefined && (typeof provider !== 'string' || provider.length > 200))) throw new Error('Invalid quota request');
    return manager.snapshot({ refresh, provider });
  };
  ctx.effect(() => ctx.connection.fetch.register({
    path: '/api/provider-quota', methods: ['GET', 'POST'], requestBody: 'buffered',
    async fetch(request) {
      const url = new URL(request.url);
      if (request.method === 'POST' && Number(request.headers.get('content-length') || 0) > 1024) return new Response(null, { status: 413 });
      try {
        const result = await operation({ refresh: request.method === 'POST', provider: url.searchParams.get('provider') || undefined });
        return Response.json(result, { headers: { 'Cache-Control': 'no-store' } });
      } catch {
        return Response.json({ error: 'quota-service-unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
      }
    },
  }));
  ctx.effect(() => ctx.tools.register({
    name: 'provider_quota',
    description: 'Read balances and subscription quota windows for providers configured in this app. Returns normalized balances, subscription windows, OpenAI organization month-to-date API spend, freshness and per-provider errors; never returns credentials. Spend is not remaining balance.',
    parameters: {
      type: 'object', properties: {
        provider: { type: 'string', description: 'Optional exact provider route ID from an earlier result; omit for all configured providers.' },
        refresh: { type: 'boolean', description: 'Request a refresh instead of a recent success cache. Default false; cooldowns and error backoff still apply.' },
      }, additionalProperties: false,
    },
    output: {
      schema: { type: 'object', additionalProperties: true },
      render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }],
    },
    timeoutMs: 60_000,
    isConcurrencySafe: () => true,
    execute: args => operation(args ?? {}),
  }));
}
