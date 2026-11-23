import { randomBytes, timingSafeEqual } from 'node:crypto';
import { GLM_TEAM_PLAN_KINDS } from './adapters.js';

export const DEFAULT_COLOR_THRESHOLDS = Object.freeze({ greenMin: 50, orangeMin: 25 });
const fail = code => { throw Object.assign(new Error(code), { code }); };
export function validateColorThresholds(value = DEFAULT_COLOR_THRESHOLDS) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail('invalid-thresholds');
  const { greenMin, orangeMin } = value;
  if (!Number.isInteger(greenMin) || !Number.isInteger(orangeMin) || orangeMin < 0 || greenMin > 100 || orangeMin >= greenMin) fail('invalid-thresholds');
  if (Object.keys(value).some(key => !['greenMin', 'orangeMin'].includes(key))) fail('invalid-thresholds');
  return { greenMin, orangeMin };
}

function normalizeAliasDomain(value) {
  if (typeof value !== 'string' || !value || value.length > 253 || value.trim() !== value || value.includes(':')) fail('invalid-domain-aliases');
  let parsed;
  try { parsed = new URL(`https://${value}/`); }
  catch { fail('invalid-domain-aliases'); }
  const host = parsed.hostname.toLowerCase().replace(/\.$/, '');
  const labels = host.split('.');
  const numericAddress = labels.length === 4 && labels.every(label => label.length > 0 && [...label].every(character => character >= '0' && character <= '9'));
  if (!host || parsed.username || parsed.password || parsed.port || parsed.host !== parsed.hostname || parsed.pathname !== '/' || parsed.search || parsed.hash || host.startsWith('[') || numericAddress || labels.length < 2 || labels.some(label => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) fail('invalid-domain-aliases');
  return host;
}

export function validateCompanyDomainAliases(value = []) {
  if (!Array.isArray(value) || value.length > 20) fail('invalid-domain-aliases');
  const labels = new Set();
  const domains = new Set();
  return value.map(alias => {
    if (!alias || typeof alias !== 'object' || Array.isArray(alias) || Object.keys(alias).some(key => !['label', 'domains'].includes(key))) fail('invalid-domain-aliases');
    const label = typeof alias.label === 'string' ? alias.label.trim() : '';
    if (!label || label.length > 80 || /[|\r\n]/.test(label) || labels.has(label.toLocaleLowerCase()) || !Array.isArray(alias.domains) || alias.domains.length < 1 || alias.domains.length > 20) fail('invalid-domain-aliases');
    labels.add(label.toLocaleLowerCase());
    const roots = alias.domains.map(normalizeAliasDomain);
    if (new Set(roots).size !== roots.length || roots.some(domain => domains.has(domain))) fail('invalid-domain-aliases');
    for (const domain of roots) domains.add(domain);
    return { label, domains: roots };
  });
}

export class QuotaColorSettings {
  constructor(value, persist) {
    this.value = validateColorThresholds(value);
    this.persist = persist;
    this.csrf = randomBytes(32).toString('base64url');
  }
  read() { return { colorThresholds: { ...this.value }, writable: typeof this.persist === 'function' }; }
  browserRead() { return { ...this.read(), csrf: this.csrf }; }
  csrfMatches(value) {
    return typeof value === 'string' && /^[A-Za-z0-9_-]{43}$/.test(value) && timingSafeEqual(Buffer.from(value), Buffer.from(this.csrf));
  }
  async save(value) {
    const validated = validateColorThresholds(value);
    if (typeof this.persist !== 'function') fail('settings-unavailable');
    try { await this.persist(validated); }
    catch (cause) {
      fail(typeof cause?.code === 'string' && /conflict/i.test(cause.code) ? 'settings-conflict' : 'save-failed');
    }
    this.value = validated;
    return { ...this.read(), saved: true };
  }
}

export class CompanyDomainAliasSettings {
  constructor(value = [], persist) {
    this.value = validateCompanyDomainAliases(value);
    this.persist = persist;
  }
  read() { return { domainAliases: this.value.map(alias => ({ ...alias, domains: [...alias.domains] })), writable: typeof this.persist === 'function' }; }
  async save(value) {
    const validated = validateCompanyDomainAliases(value);
    if (typeof this.persist !== 'function') fail('settings-unavailable');
    try { await this.persist(validated); }
    catch (cause) {
      fail(typeof cause?.code === 'string' && /conflict/i.test(cause.code) ? 'settings-conflict' : 'save-failed');
    }
    this.value = validated;
    return { ...this.read(), saved: true };
  }
}

// Organization and project IDs are opaque server identifiers that travel in
// request headers, so only printable ASCII is accepted; they are never URLs,
// keys or paths. Both or neither: a half-configured scope could silently read
// an unintended team project. An entry with both empty means "enabled, let the
// server pick the account's default project".
const TEAM_PLAN_ID_MAX_LENGTH = 128;
function teamPlanId(value) {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') fail('invalid-team-plan');
  const trimmed = value.trim();
  if (trimmed.length > TEAM_PLAN_ID_MAX_LENGTH || /[^\x21-\x7e]/.test(trimmed)) fail('invalid-team-plan');
  return trimmed;
}

export function validateGlmTeamPlans(value = {}) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail('invalid-team-plan');
  const result = {};
  for (const [kind, plan] of Object.entries(value)) {
    if (!Object.prototype.hasOwnProperty.call(GLM_TEAM_PLAN_KINDS, kind)) fail('invalid-team-plan');
    if (!plan || typeof plan !== 'object' || Array.isArray(plan) || Object.keys(plan).some(key => !['organizationId', 'projectId'].includes(key))) fail('invalid-team-plan');
    const organizationId = teamPlanId(plan.organizationId);
    const projectId = teamPlanId(plan.projectId);
    if (Boolean(organizationId) !== Boolean(projectId)) fail('invalid-team-plan');
    result[kind] = { organizationId, projectId };
  }
  return result;
}

export class GlmTeamPlanSettings {
  constructor(value = {}, persist) {
    this.value = validateGlmTeamPlans(value);
    this.persist = persist;
  }
  read() { return { glmTeamPlans: Object.fromEntries(Object.entries(this.value).map(([kind, plan]) => [kind, { ...plan }])) }; }
  async save(value) {
    const validated = validateGlmTeamPlans(value);
    if (typeof this.persist !== 'function') fail('settings-unavailable');
    try { await this.persist(validated); }
    catch (cause) {
      fail(typeof cause?.code === 'string' && /conflict/i.test(cause.code) ? 'settings-conflict' : 'save-failed');
    }
    this.value = validated;
    return { ...this.read(), saved: true };
  }
}

export async function readSmallSettingsBody(request) {
  if (Number(request.headers.get('content-length') ?? 0) > 1024) fail('invalid-thresholds');
  const reader = request.body?.getReader();
  if (!reader) fail('invalid-thresholds');
  const signal = AbortSignal.any([request.signal, AbortSignal.timeout(5000)]);
  let size = 0;
  const parts = [];
  try {
    for (;;) {
      const result = await new Promise((resolve, reject) => {
        const abort = () => { signal.removeEventListener('abort', abort); reject(new Error('invalid-thresholds')); };
        if (signal.aborted) { reject(new Error('invalid-thresholds')); return; }
        signal.addEventListener('abort', abort, { once: true });
        reader.read().then(value => { signal.removeEventListener('abort', abort); resolve(value); }, () => { signal.removeEventListener('abort', abort); reject(new Error('invalid-thresholds')); });
      });
      if (result.done) break;
      size += result.value.byteLength;
      if (size > 1024) fail('invalid-thresholds');
      parts.push(result.value);
    }
    return validateColorThresholds(JSON.parse(Buffer.concat(parts).toString('utf8')));
  } catch { fail('invalid-thresholds'); }
  finally {
    try { Promise.resolve(reader.cancel()).catch(() => {}); } catch {}
    try { reader.releaseLock(); } catch {}
  }
}
