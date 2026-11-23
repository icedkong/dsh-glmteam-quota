import { createHash } from 'node:crypto';
import { PLUGIN_VERSION } from './version.js';
import { classifyProvider, isGlmEmptyQuota, isGlmNoPlan, isTeamPlanKind, parseDeepSeek, parseGlm, parseGlmResourcePackagePage, parseGlmStandardBalance, parseMiniMax, teamPlanHeaders, teamPlanKind } from './adapters.js';
import { resolveOpenAIAdminKey } from './openai-admin.js';
import { queryOpenAICosts } from './openai-costs.js';
import { queryOpenAIKeyNames } from './openai-key-names.js';
import { queryOpenCodeUsage } from './opencode-usage.js';
import { resolveNativeCodexCredential, queryCodexUsage } from './codex-usage.js';
import { DEFAULT_COLOR_THRESHOLDS, validateColorThresholds } from './quota-settings.js';
import { resolveProviderBaseURL } from './route-hosts.js';

const ENDPOINTS = Object.freeze({
  deepseek: 'https://api.deepseek.com/user/balance',
  'glm-cn': 'https://open.bigmodel.cn/api/monitor/usage/quota/limit',
  'zai-coding-plan': 'https://api.z.ai/api/monitor/usage/quota/limit',
  // GLM Team Plan: the same monitor, routed to the team subscription by type=2.
  'glm-cn-team': 'https://open.bigmodel.cn/api/monitor/usage/quota/limit?type=2',
  'zai-coding-plan-team': 'https://api.z.ai/api/monitor/usage/quota/limit?type=2',
  'minimax-cn': 'https://www.minimax.cn/v1/token_plan/remains',
  'glm-standard-balance': 'https://open.bigmodel.cn/api/biz/account/query-customer-account-report',
  'glm-standard-packages': 'https://open.bigmodel.cn/api/biz/tokenAccounts/list/my?pageNum=1&pageSize=50&filterEnabled=false',
});
const RESOURCE_PACKAGE_PAGE_SIZE = 50;
const MAX_RESOURCE_PACKAGE_PAGES = 10;
function resourcePackageUrl(pageNum) {
  return `https://open.bigmodel.cn/api/biz/tokenAccounts/list/my?pageNum=${pageNum}&pageSize=${RESOURCE_PACKAGE_PAGE_SIZE}&filterEnabled=false`;
}
const RESOURCE_PACKAGE_URLS = new Set(Array.from({ length: MAX_RESOURCE_PACKAGE_PAGES }, (_, index) => resourcePackageUrl(index + 1)));
const ALLOWED_ENDPOINTS = new Set([...Object.values(ENDPOINTS), ...RESOURCE_PACKAGE_URLS]);
const BEARER_ENDPOINTS = new Set([
  ENDPOINTS.deepseek,
  ENDPOINTS['minimax-cn'],
  ENDPOINTS['glm-standard-balance'],
  ...RESOURCE_PACKAGE_URLS,
]);
const TTL = 120_000;
const own = (object, key) => Object.prototype.hasOwnProperty.call(object ?? {}, key);
const hash = value => createHash('sha256').update(value).digest('hex');
function atPath(value, path) {
  for (const key of path) {
    if (!own(value, key)) return undefined;
    value = value[key];
  }
  return value;
}
function credentialRef(value) {
  return typeof value === 'string' && /^[A-Za-z_][A-Za-z0-9_]*$/.test(value) ? value : undefined;
}
function safeName(value, fallback) {
  return typeof value === 'string' && value.length > 0 ? value.slice(0, 100) : fallback;
}
function keyValue(value) {
  return typeof value === 'string' && /^[\x21-\x7e]{1,8192}$/.test(value) ? value : undefined;
}
function failure(code) {
  return Object.assign(new Error(code), { code });
}

async function readGlmResourcePackages(key, options) {
  const first = parseGlmResourcePackagePage(await readJson(ENDPOINTS['glm-standard-packages'], key, options));
  if (first.total > RESOURCE_PACKAGE_PAGE_SIZE * MAX_RESOURCE_PACKAGE_PAGES) throw failure('invalid-response');
  const pageCount = Math.max(1, Math.ceil(first.total / RESOURCE_PACKAGE_PAGE_SIZE));
  const otherPages = await Promise.all(Array.from({ length: pageCount - 1 }, (_, index) =>
    readJson(resourcePackageUrl(index + 2), key, options).then(parseGlmResourcePackagePage)));
  const pages = [first, ...otherPages];
  if (pages.some(page => page.total !== first.total)) throw failure('invalid-response');
  const packages = pages.flatMap(page => page.packages);
  if (packages.length !== first.total) throw failure('invalid-response');
  return packages;
}

// Only fixed HTTPS destinations are ever contacted. Redirects and upstream error bodies
// are deliberately not exposed to the UI or logs. Extra headers are for fixed-scope
// routing only (GLM Team Plan organization/project) and carry no credentials.
export async function readJson(url, key, { fetcher = fetch, signal, headers: extraHeaders } = {}) {
  if (!ALLOWED_ENDPOINTS.has(url)) throw failure('unsupported');
  const combined = AbortSignal.any([AbortSignal.timeout(12_000), ...(signal ? [signal] : [])]);
  let response;
  try {
    // DeepSeek and MiniMax require Bearer; GLM monitors (including the official
    // Z.AI Coding Plan usage plugin) expect the configured key as a raw token.
    const bearerAuth = BEARER_ENDPOINTS.has(url);
    response = await fetcher(url, {
      method: 'GET', redirect: 'error', signal: combined,
      headers: { ...(extraHeaders ?? {}), Authorization: bearerAuth ? `Bearer ${key}` : key, Accept: 'application/json' },
    });
  } catch {
    throw failure(combined.aborted ? 'timeout' : 'network');
  }
  if (!response.ok) {
    await response.body?.cancel().catch(() => {});
    throw failure(response.status === 401 ? 'unauthorized' : response.status === 403 ? 'forbidden' : response.status === 429 ? 'rate-limited' : 'upstream');
  }
  const reader = response.body?.getReader();
  if (!reader) throw failure('invalid-response');
  const chunks = [];
  let length = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 1_048_576) {
        await reader.cancel();
        throw failure('invalid-response');
      }
      chunks.push(value);
    }
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch (error) {
    throw failure(error.code === 'invalid-response' ? 'invalid-response' : combined.aborted ? 'timeout' : 'invalid-response');
  } finally {
    reader.releaseLock();
  }
}

export class QuotaManager {
  constructor(services, { fetcher = fetch, now = Date.now, version = 'unknown', adminKeyResolver = () => resolveOpenAIAdminKey(services.credentials), colorThresholdsProvider = () => DEFAULT_COLOR_THRESHOLDS, teamPlansProvider = () => ({}) } = {}) {
    this.services = services;
    this.colorThresholdsProvider = colorThresholdsProvider;
    this.teamPlansProvider = teamPlansProvider;
    this.adminKeyResolver = adminKeyResolver;
    this.fetcher = fetcher;
    this.now = now;
    this.version = version;
    this.cache = new Map();
    this.inflight = new Map();
    this.controller = new AbortController();
    this.disposed = false;
  }
  dispose() {
    this.disposed = true;
    this.controller.abort();
    this.cache.clear();
    return Promise.allSettled([...this.inflight.values()]);
  }
  async accountIdentity() {
    const account = this.services.deepseekAccount;
    // The account service may legitimately have no profile/user ID yet. Its
    // Host-only session snapshot is bound to the current grant. Fingerprint it
    // locally, never sending or retaining the token or fingerprint in results.
    if (typeof account.getPlatformSession === 'function') {
      const session = await account.getPlatformSession();
      return typeof session?.token === 'string' && session.token ? `grant:${hash(session.token)}` : undefined;
    }
    // Older service implementations can provide only a stable account identity.
    const info = await account.getDeviceIdentity();
    return info.userId ? `account:${String(info.userId)}` : undefined;
  }
  async resolveKey(row) {
    const credentials = this.services.credentials;
    if (row.explicitRef) return keyValue((await credentials.resolve(row.explicitRef))?.value);
    if (row.nativeRecord) {
      const info = await credentials.describeRecord(row.nativeRecord);
      if (info.configured) {
        if (info.kind !== 'api-key') throw failure('unsupported-auth');
        const record = await credentials.readRecord(row.nativeRecord);
        if (record?.kind === 'api-key') {
          if (keyValue(record.key)) return record.key;
          for (const ref of row.refs) if (keyValue(record.env?.[ref])) return record.env[ref];
        }
        throw failure('missing-credential');
      }
    }
    for (const ref of row.refs) {
      const key = keyValue((await credentials.resolve(ref))?.value);
      if (key) return key;
    }
    return undefined;
  }
  // A Team Plan row is a sibling of a personal Coding Plan row: same provider
  // key and dashboard, but the monitor is asked for the team subscription. It
  // exists only when the user enabled it in settings. The organization/project
  // scope stays on the Host and never reaches the client.
  teamRow(row) {
    const kind = teamPlanKind(row.kind);
    if (!kind) return null;
    let plans;
    try { plans = this.teamPlansProvider(); } catch { return null; }
    const plan = plans?.[row.kind];
    if (!plan || typeof plan !== 'object') return null;
    return {
      id: `${row.id}::team`, name: row.name, kind,
      ...(row.dashboardUrl ? { dashboardUrl: row.dashboardUrl } : {}),
      ...(row.blocked ? { blocked: row.blocked } : {}),
      explicitRef: row.explicitRef, refs: row.refs,
      ...(row.nativeRecord ? { nativeRecord: row.nativeRecord } : {}),
      teamPlan: {
        organizationId: typeof plan.organizationId === 'string' ? plan.organizationId : '',
        projectId: typeof plan.projectId === 'string' ? plan.projectId : '',
      },
    };
  }
  async discover() {
    const { llm, settings, credentials, deepseekAccount, launchEnvironment } = this.services;
    const directory = await llm.listConfigurableProviders();
    const registered = new Map((await llm.listProviders()).map(row => [row.id, row]));
    const documents = new Map((await settings.describe({ redactSecrets: true })).map(doc => [String(doc.ns), doc.value]));
    const rows = [];
    const seen = new Set();
    for (const entry of directory) {
      if (seen.has(entry.provider)) continue;
      seen.add(entry.provider);
      const doc = documents.get(entry.settingsNs);
      if (!doc) continue;
      const path = entry.settingsPath ?? [];
      const profile = atPath(doc, path);
      if (!profile || typeof profile !== 'object' || Array.isArray(profile)) continue;
      if (entry.provider === 'deepseek-account') {
        if (deepseekAccount && (await deepseekAccount.getState()).status !== 'signed-out') {
          rows.push({ id: entry.provider, name: entry.displayName || 'DeepSeek Account', kind: 'account', dashboardUrl: 'https://platform.deepseek.com/usage' });
          seen.add(entry.provider);
        }
        continue;
      }
      const explicitRef = credentialRef(profile.apiKeyEnv);
      const refs = (entry.nativeAuth?.env ?? []).map(credentialRef).filter(Boolean);
      // Whole-section built-ins are always mounted, unlike saved pi-ai profiles.
      // Omit their pristine setup posture unless their credential is actually present.
      if (path.length === 0 && explicitRef && !(await credentials.describe(explicitRef)).configured) continue;
      let classification;
      try {
        const baseURL = await resolveProviderBaseURL(entry, profile, credentials, { launchEnvironment });
        classification = classifyProvider({ provider: entry.provider, baseURL });
      } catch {
        // Uncertain/invalid endpoint metadata must not trigger route-name
        // defaults, API-key resolution, cached balances, or a provider request.
        classification = { kind: 'unsupported', dashboardUrl: null };
      }
      const authHeaders = Object.keys(profile.headers ?? {}).some(name => /authorization|api[-_]?key|auth[-_]?token/i.test(name));
      const row = {
        id: entry.provider,
        name: safeName(profile.displayName || entry.displayName, entry.provider),
        ...classification,
        ...(entry.provider === 'opencode' && classification.kind === 'unsupported' ? { blocked: 'opencode-go-only', dashboardUrl: 'https://opencode.ai/console' } : {}),
        ...(authHeaders || classification.kind === 'codex' && (explicitRef || path[0] !== 'providers' || entry.nativeAuth?.oauth !== true) ? { blocked: 'unsupported-auth' } : {}),
        ...(profile.apiKeyEnv && !explicitRef ? { blocked: 'missing-credential' } : {}),
        explicitRef, refs,
        ...(path[0] === 'providers' ? { nativeRecord: `llm-pi-ai/${entry.provider}` } : {}),
        diagnostic: Boolean(entry.error),
      };
      rows.push(row);
      const team = this.teamRow(row);
      if (team) rows.push(team);
      seen.add(entry.provider);
    }
    // Registered-only known routes can still be classified, but are queried only
    // when the registry exposes a safe credential reference for them.
    for (const entry of registered.values()) {
      if (seen.has(entry.id) || entry.id === 'deepseek-account') continue;
      const classification = classifyProvider({ provider: entry.id, baseURL: entry.baseURL ?? entry.defaultBaseURL });
      const refs = (entry.nativeAuth?.env ?? []).map(credentialRef).filter(Boolean);
      const row = { id: entry.id, name: safeName(entry.name, entry.id), ...classification, refs };
      rows.push(row);
      const team = this.teamRow(row);
      if (team) rows.push(team);
    }
    return rows;
  }
  async readRow(row, refresh) {
    const base = { id: row.id, name: row.name, kind: row.kind, ...(row.dashboardUrl ? { dashboardUrl: row.dashboardUrl } : {}), ...(row.reason ? { reason: row.reason } : {}), metrics: [] };
    if (row.blocked && row.kind !== 'openai') return { ...base, status: row.blocked, source: 'none' };
    if (row.kind === 'unsupported') return { ...base, status: 'unsupported', source: 'none' };
    let identity;
    let accountIdentity;
    let codexCredential;
    let key;
    const cacheable = row.kind !== 'account';
    try {
      if (row.kind === 'account') {
        accountIdentity = await this.accountIdentity();
        if (!accountIdentity) return { ...base, status: 'account-changed', source: 'harness-account' };
        // The account service does not return a grant-bound identity with a balance.
        // Never cache or merge across calls, including A→B→A sign-in transitions.
        identity = Symbol('account-query');
      } else if (row.kind === 'codex') {
        codexCredential = await resolveNativeCodexCredential(this.services.credentials, { now: this.now() });
        identity = `codex:${hash(JSON.stringify([codexCredential.access, codexCredential.accountId]))}`;
      } else if (row.kind === 'openai') {
        key = await this.adminKeyResolver();
        if (!key) return { ...base, status: 'admin-key-required', source: 'none' };
        const date = new Date(this.now());
        const day = Math.floor(this.now() / 86_400_000);
        identity = `openai:${hash(key)}:${date.getUTCFullYear()}-${date.getUTCMonth()}:${day}`;
      } else {
        key = await this.resolveKey(row);
        if (!key) return { ...base, status: 'missing-credential', source: 'none' };
        // A team row's cache is scoped to its organization/project so a changed
        // scope never serves the previous project's quota from cache.
        identity = isTeamPlanKind(row.kind)
          ? `${row.kind}:${hash(`${key}\u0000${row.teamPlan.organizationId}\u0000${row.teamPlan.projectId}`)}`
          : `${row.kind}:${hash(key)}`;
      }
    } catch (error) {
      const adminError = ['invalid-admin-key', 'admin-credential-error'].includes(error.code) ? error.code : 'admin-credential-error';
      const codexError = ['codex-auth-required', 'codex-auth-expired', 'unsupported-auth'].includes(error.code) ? error.code : 'unsupported-auth';
      return { ...base, status: row.kind === 'account' ? 'account-changed' : row.kind === 'codex' ? codexError : row.kind === 'openai' ? adminError : error.code === 'unsupported-auth' ? 'unsupported-auth' : 'missing-credential', source: row.kind === 'account' ? 'harness-account' : row.kind === 'codex' ? 'codex-usage' : 'none' };
    }
    const cached = this.cache.get(identity);
    const time = this.now();
    // Manual refresh bypasses success TTL, but has a 10s cooldown; errors back off 2m.
    if (cached && time < cached.nextAttemptAt && (!refresh || cached.status !== 'ok' || time - cached.attemptedAt < 10_000)) return { ...base, ...cached.value };
    const existing = this.inflight.get(identity);
    if (existing) return { ...base, ...await existing };
    const operation = (async () => {
      const source = row.kind === 'account' ? 'harness-account' : row.kind === 'codex' ? 'codex-usage' : row.kind === 'openai' ? 'official-costs' : row.kind === 'opencode-go' ? 'opencode-usage' : row.kind === 'minimax-cn' ? 'minimax-plan' : isTeamPlanKind(row.kind) ? 'glm-team-plan-usage' : row.kind === 'zai-coding-plan' ? 'zai-plan-usage' : row.kind === 'glm-standard-cn' ? 'glm-standard-api' : row.kind === 'deepseek' ? 'official-balance' : 'provider-monitor';
      try {
        let metrics;
        if (row.kind === 'codex') {
          metrics = await queryCodexUsage({ credential: codexCredential, fetcher: this.fetcher, signal: this.controller.signal });
          const after = await resolveNativeCodexCredential(this.services.credentials, { now: this.now() });
          const afterIdentity = `codex:${hash(JSON.stringify([after.access, after.accountId]))}`;
          if (afterIdentity !== identity) throw failure('account-changed');
        } else if (row.kind === 'openai') {
          metrics = await queryOpenAICosts({ key, fetcher: this.fetcher, now: this.now(), signal: this.controller.signal, groupByApiKey: true });
          const keys = metrics.flatMap(metric => [
            ...(metric.breakdown ?? []),
            ...Object.values(metric.ranges ?? {}).flatMap(range => range.breakdown ?? []),
          ]).filter(entry => entry.apiKeyId && entry.projectId);
          let names = new Map();
          try { names = await queryOpenAIKeyNames({ key, entries: keys, fetcher: this.fetcher, signal: this.controller.signal }); } catch { /* Name enrichment is optional; preserve Costs results. */ }
          const enrichBreakdown = entries => entries.map(entry => {
            const { projectId, ...safe } = entry;
            const apiKeyName = entry.apiKeyId && projectId ? names.get(`${projectId}\u0000${entry.apiKeyId}`) : undefined;
            return { ...safe, ...(apiKeyName ? { apiKeyName } : {}) };
          });
          metrics = metrics.map(metric => ({
            ...metric,
            ...(metric.breakdown ? { breakdown: enrichBreakdown(metric.breakdown) } : {}),
            ...(metric.ranges ? { ranges: Object.fromEntries(Object.entries(metric.ranges).map(([name, range]) => [name, {
              ...range,
              ...(range.breakdown ? { breakdown: enrichBreakdown(range.breakdown) } : {}),
            }])) } : {}),
          }));
        } else if (row.kind === 'opencode-go') {
          metrics = await queryOpenCodeUsage({ key, fetcher: this.fetcher, now: this.now(), signal: this.controller.signal });
        } else if (row.kind === 'account') {
          const result = await this.services.deepseekAccount.getBalance({ version: this.version, locale: 'zh', timezoneOffsetSeconds: -new Date().getTimezoneOffset() * 60 });
          const after = await this.accountIdentity();
          if (!after || after !== accountIdentity) throw failure('account-changed');
          if (!result || result.status !== 'ready') throw failure('upstream');
          // Bonus wallets are separate from recharge wallets: never silently double-count.
          metrics = result.value.map(wallet => ({ type: 'balance', currency: wallet.currency, amount: wallet.balance, wallet: 'recharge' }));
          metrics.push(...(result.bonusWallets ?? []).map(wallet => ({ type: 'balance', currency: wallet.currency, amount: wallet.balance, wallet: 'bonus' })));
          if (metrics.length === 0) throw failure('invalid-response');
        } else if (row.kind === 'glm-standard-cn') {
          const options = { fetcher: this.fetcher, signal: this.controller.signal };
          const [balanceJson, packages] = await Promise.all([
            readJson(ENDPOINTS['glm-standard-balance'], key, options),
            readGlmResourcePackages(key, options),
          ]);
          metrics = [parseGlmStandardBalance(balanceJson), ...packages];
        } else if (isTeamPlanKind(row.kind)) {
          const json = await readJson(ENDPOINTS[row.kind], key, { fetcher: this.fetcher, signal: this.controller.signal, headers: teamPlanHeaders(row.teamPlan) });
          // Definite states, not outages: the key has no team plan, or the monitor
          // answered an empty success because no project scope was supplied (it
          // never picks a default project). Report them instead of a retryable error.
          if (isGlmNoPlan(json)) throw failure('no-plan');
          if (isGlmEmptyQuota(json)) throw failure(row.teamPlan.organizationId || row.teamPlan.projectId ? 'no-plan' : 'team-scope-required');
          metrics = parseGlm(json);
        } else {
          const json = await readJson(ENDPOINTS[row.kind], key, { fetcher: this.fetcher, signal: this.controller.signal });
          // The personal monitor rejects team keys with a "no coding plan" business
          // reply; surface it as a state so the user is not sent chasing an error.
          if ((row.kind === 'glm-cn' || row.kind === 'zai-coding-plan') && isGlmNoPlan(json)) throw failure('no-plan');
          metrics = row.kind === 'deepseek' ? parseDeepSeek(json) : row.kind === 'minimax-cn' ? parseMiniMax(json) : parseGlm(json);
        }
        if (this.disposed) throw failure('disposed');
        const value = { status: 'ok', source, metrics, fetchedAt: this.now(), stale: false };
        if (cacheable) this.cache.set(identity, { value, status: 'ok', attemptedAt: time, nextAttemptAt: this.now() + (row.kind === 'openai' ? 900_000 : TTL), touchedAt: this.now() });
        return value;
      } catch (error) {
        const allowed = ['unauthorized', 'forbidden', 'rate-limited', 'timeout', 'network', 'network-connect', 'network-read', 'invalid-response', 'upstream', 'no-plan', 'team-scope-required', 'disposed', 'account-changed', 'codex-auth-required', 'codex-auth-expired', 'unsupported-auth'];
        const status = allowed.includes(error.code || error.message) ? error.code || error.message : 'upstream';
        if (row.kind === 'codex') {
          let scopeFailure = ['account-changed', 'codex-auth-required', 'codex-auth-expired', 'unsupported-auth'].includes(status) ? status : null;
          if (!scopeFailure) {
            try {
              const current = await resolveNativeCodexCredential(this.services.credentials, { now: this.now() });
              if (`codex:${hash(JSON.stringify([current.access, current.accountId]))}` !== identity) scopeFailure = 'account-changed';
            } catch (cause) { scopeFailure = ['codex-auth-required', 'codex-auth-expired', 'unsupported-auth'].includes(cause.code) ? cause.code : 'unsupported-auth'; }
          }
          if (scopeFailure) {
            this.cache.delete(identity);
            return { status: scopeFailure, source, metrics: [], stale: false };
          }
        }
        const previous = cached?.value;
        const value = { status, source, metrics: previous?.metrics ?? [], ...(previous?.fetchedAt ? { fetchedAt: previous.fetchedAt } : {}), stale: Boolean(previous?.metrics?.length) };
        if (!this.disposed && cacheable) this.cache.set(identity, { value, status, attemptedAt: time, nextAttemptAt: this.now() + TTL, touchedAt: this.now() });
        return value;
      }
    })();
    this.inflight.set(identity, operation);
    try { return { ...base, ...await operation }; }
    finally { this.inflight.delete(identity); }
  }
  async snapshot({ refresh = false, provider } = {}) {
    if (this.disposed) throw failure('disposed');
    const discovered = await this.discover();
    // Bound concurrency without adding a queue/timer that can outlive the plugin.
    const selected = provider ? discovered.filter(row => row.id === provider) : discovered;
    const rows = new Array(selected.length);
    let cursor = 0;
    await Promise.all(Array.from({ length: Math.min(4, selected.length) }, async () => {
      for (;;) {
        const index = cursor++;
        if (index >= selected.length) break;
        rows[index] = await this.readRow(selected[index], refresh);
      }
    }));
    for (const [id, item] of this.cache) if (this.now() - item.touchedAt > 3_600_000) this.cache.delete(id);
    const defaultProvider = this.services.agentDefaultModel?.currentSelection()?.provider;
    return { rows, checkedAt: this.now(), refreshAfterMs: TTL, pluginVersion: PLUGIN_VERSION, colorThresholds: validateColorThresholds(this.colorThresholdsProvider()), ...(defaultProvider ? { defaultProvider } : {}) };
  }
}
