// Pure data adapters. No network, credentials, clock, or Harness dependencies.
// Shape references:
// MiniMax M Plan endpoint and windows: https://platform.minimax.cn/docs/m-plan/faq.md
// https://api-docs.deepseek.com/api/get-user-balance/
// https://docs.z.ai/devpack/extension/usage-query-plugin
// https://github.com/zai-org/zai-coding-plugins/blob/main/plugins/glm-plan-usage/skills/usage-query-skill/scripts/query-usage.mjs
// Team Plan (same monitor, `?type=2` + bigmodel-organization/project headers):
// https://github.com/zai-org/ZCode/blob/main/docs/bigmodel-coding-plan-usage-quota.md
// https://github.com/steipete/CodexBar/blob/main/docs/zai.md
// https://github.com/steipete/CodexBar/blob/main/Sources/CodexBarCore/Resources/Plugins/zai.js

const DASHBOARDS = Object.freeze({
  deepseek: 'https://platform.deepseek.com/usage',
  'glm-cn': 'https://bigmodel.cn/coding-plan/personal/usage',
  'zai-coding-plan': 'https://z.ai/manage-apikey/subscription',
  'minimax-cn': 'https://platform.minimax.cn/console/usage',
  'opencode-go': 'https://opencode.ai/console',
  'zai-api': 'https://z.ai/manage-apikey/billing',
  openai: 'https://platform.openai.com/usage',
  codex: 'https://chatgpt.com/codex/cloud/settings/analytics#usage',
});
const HOSTS = Object.freeze({
  'api.deepseek.com': 'deepseek',
  'api.minimax.cn': 'minimax-cn',
  'api.minimaxi.com': 'minimax-cn',
  'api.openai.com': 'openai',
});
const ROUTES = Object.freeze({
  // DeepSeek quota probes require an explicit, verified endpoint. Native
  // defaults are supplied only by the Host resolver, never by a route name.
  openai: 'openai',
  zai: 'zai-coding-plan',
  'zai-coding-cn': 'glm-cn',
  'minimax-cn': 'minimax-cn',
  'opencode-go': 'opencode-go',
});
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const invalid = () => { throw new Error('invalid-response'); };

/** Explicit endpoint identity always wins over a route's display name.
 * Unknown/custom endpoints must never cause a key to be sent to an official API.
 */
export function classifyProvider({ provider, baseURL } = {}) {
  if (provider === 'openai-codex') {
    if (baseURL !== undefined && baseURL !== null) {
      try {
        const url = new URL(baseURL);
        if (typeof baseURL !== 'string' || baseURL.trim() !== baseURL || url.origin !== 'https://chatgpt.com' || url.username || url.password || !/^\/backend-api\/?$/.test(url.pathname) || url.search || url.hash) return { kind: 'unsupported', dashboardUrl: null };
      } catch { return { kind: 'unsupported', dashboardUrl: null }; }
    }
    return { kind: 'codex', dashboardUrl: DASHBOARDS.codex };
  }
  let kind;
  if (baseURL !== undefined && baseURL !== null) {
    if (typeof baseURL !== 'string' || !baseURL || baseURL.trim() !== baseURL) {
      return { kind: 'unsupported', dashboardUrl: null };
    }
    try {
      const url = new URL(baseURL);
      if (url.protocol === 'https:' && !url.username && !url.password && !url.port) {
        if (url.hostname === 'api.z.ai' || url.hostname === 'open.bigmodel.cn') {
          const path = url.pathname.replace(/\/+$/, '') || '/';
          const noExtras = !url.search && !url.hash;
          if (noExtras && path === '/api/paas/v4') {
            // Domestic Standard API uses separate account endpoints; never route
            // it through a Coding Plan monitor. The international account schema
            // has not been established, so that route remains status-only.
            return url.hostname === 'open.bigmodel.cn'
              ? { kind: 'glm-standard-cn', dashboardUrl: null }
              : { kind: 'unsupported', dashboardUrl: DASHBOARDS['zai-api'], reason: 'zai-api-status-only' };
          }
          if (noExtras && path === '/api/coding/paas/v4') {
            kind = url.hostname === 'api.z.ai' ? 'zai-coding-plan' : 'glm-cn';
          } else {
            // Unknown Z.AI/GLM paths fail closed instead of inheriting a plan by host.
            return { kind: 'unsupported', dashboardUrl: null };
          }
        } else if (url.hostname === 'opencode.ai') {
          if (/^\/zen\/go\/v1\/?$/.test(url.pathname) && !url.search && !url.hash) kind = 'opencode-go';
        } else if (own(HOSTS, url.hostname)) {
          kind = HOSTS[url.hostname];
        }
      }
    } catch { /* Fail closed, including malformed explicit URLs. */ }
  } else if (typeof provider === 'string' && own(ROUTES, provider)) {
    kind = ROUTES[provider];
  }
  return kind
    ? { kind, dashboardUrl: DASHBOARDS[kind] }
    : { kind: 'unsupported', dashboardUrl: null };
}

// GLM Team Plan quota reuses the Coding Plan monitor with `?type=2`, which the
// backend routes to the team subscription. Without it, even a team project key
// with team headers falls through to the personal branch and is rejected.
// Shape reference: https://github.com/zai-org/ZCode/blob/main/packages/services/src/usage-stats/providers/bigmodelUsageQuotaProvider.ts
export const GLM_TEAM_PLAN_KINDS = Object.freeze({ 'glm-cn': 'glm-cn-team', 'zai-coding-plan': 'zai-coding-plan-team' });
const TEAM_PLAN_SCOPES = Object.freeze(['bigmodel-organization', 'bigmodel-project']);

/** Map a personal Coding Plan kind to its Team Plan sibling kind. */
export function teamPlanKind(kind) {
  return own(GLM_TEAM_PLAN_KINDS, kind) ? GLM_TEAM_PLAN_KINDS[kind] : undefined;
}

export function isTeamPlanKind(kind) {
  return Object.values(GLM_TEAM_PLAN_KINDS).includes(kind);
}

/** Headers scope the monitor to one team project. Both IDs are optional: when
 * neither is configured the backend reads the account's default project, which
 * is what a single-team account wants. Values are validated by the settings
 * layer as printable ASCII, so they are safe to place in request headers.
 */
export function teamPlanHeaders({ organizationId, projectId } = {}) {
  const headers = {};
  if (organizationId) headers[TEAM_PLAN_SCOPES[0]] = organizationId;
  if (projectId) headers[TEAM_PLAN_SCOPES[1]] = projectId;
  return headers;
}

/** Recognize the monitor's "no plan" business reply without echoing its text.
 * The Team monitor answers this way for keys that belong to no team plan; it is
 * a definite state, not a transport failure, so it must not be retried as one.
 */
export function isGlmNoPlan(json) {
  if (!object(json)) return false;
  const message = [json.msg, json.message].find(value => typeof value === 'string') ?? '';
  return /不存在\s*coding\s*plan|没有资格|no\s*coding\s*plan/i.test(message);
}

/** A successful envelope with no usable limits. The Team monitor answers this
 * way (verified live: `{code:200, data:{}}`) when no project scope was supplied,
 * so it must be reported as "scope required", never as a zero or a parse error.
 */
export function isGlmEmptyQuota(json) {
  if (!object(json)) return false;
  if (json.success === false || (own(json, 'code') && json.code !== 200 && json.code !== 0)) return false;
  const data = own(json, 'data') ? json.data : json;
  return !object(data) || !Array.isArray(data.limits) || data.limits.length === 0;
}

function money(value, allowNegative) {
  // Keep decimal strings intact: money must not round through binary floats.
  if (typeof value !== 'string' || !/^-?\d+(?:\.\d+)?$/.test(value) || !Number.isFinite(Number(value))) invalid();
  if (!allowNegative && Number(value) < 0) invalid();
  return value;
}

export function parseDeepSeek(json) {
  if (!object(json) || !Array.isArray(json.balance_infos) || !json.balance_infos.length) invalid();
  if (own(json, 'is_available') && typeof json.is_available !== 'boolean') invalid();
  return json.balance_infos.map(row => {
    if (!object(row) || !['CNY', 'USD'].includes(row.currency)) invalid();
    const metric = { type: 'balance', currency: row.currency, amount: money(row.total_balance, true) };
    if (row.granted_balance !== undefined) metric.granted = money(row.granted_balance, false);
    if (row.topped_up_balance !== undefined) metric.toppedUp = money(row.topped_up_balance, false);
    return metric;
  });
}

function optionalCount(row, key) {
  const value = row[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) invalid();
  return value;
}

function durationOf(row) {
  // In the legacy MCP shape unit=5/number=1 is a monthly marker, NOT a
  // one-minute window. Avoid fabricating a fixed 30-day calendar month.
  if (row.type === 'TIME_LIMIT' && row.unit === 5 && row.number === 1) return undefined;
  const seconds = { 1: 86400, 3: 3600, 5: 60, 6: 604800 };
  if (row.unit === undefined || row.unit === null || row.number === undefined || row.number === null) return undefined;
  if (!Number.isInteger(row.unit) || !Number.isSafeInteger(row.number) || row.number <= 0) invalid();
  if (!own(seconds, row.unit)) return undefined;
  const duration = seconds[row.unit] * row.number;
  if (!Number.isSafeInteger(duration)) invalid();
  return duration;
}

/** Normalize monitor quota responses, retaining only understood limit types.
 * percentage is an explicitly reported used percentage, never a remaining %.
 * usage is the total quota; currentValue is USED, not remaining. Counts take
 * precedence when complete; conflicting counts use the larger used value.
 * resetsAt preserves the API's Unix milliseconds, with no timezone guessing.
 */
export function parseGlm(json) {
  if (!object(json)) invalid();
  if ((own(json, 'success') && json.success !== true) || (own(json, 'code') && json.code !== 200)) invalid();
  const data = own(json, 'data') ? json.data : json;
  if (!object(data) || !Array.isArray(data.limits)) invalid();
  const metrics = [];
  for (const row of data.limits) {
    if (!object(row) || typeof row.type !== 'string') invalid();
    if (!['TOKENS_LIMIT', 'CREDIT_LIMIT', 'TIME_LIMIT'].includes(row.type)) continue;
    // The monitor schema requires an actual numeric percentage, including 0.
    // Missing/null/empty-string percentages must never turn into a fake zero.
    if (!Number.isInteger(row.percentage)) invalid();
    const total = optionalCount(row, 'usage');
    const current = optionalCount(row, 'currentValue');
    const remaining = optionalCount(row, 'remaining');
    if (total !== undefined && remaining !== undefined && remaining > total) invalid();
    let used = current;
    if (total !== undefined && remaining !== undefined) {
      used = Math.max(total - remaining, current ?? 0);
    }
    let usedPercent = row.percentage;
    if (total !== undefined && total > 0 && used !== undefined) usedPercent = used / total * 100;
    usedPercent = Math.max(0, Math.min(100, usedPercent));
    const durationSeconds = durationOf(row);
    const metric = {
      type: 'quota-window',
      label: row.type === 'TIME_LIMIT' ? 'mcp' : durationSeconds === 18000 ? 'rolling' : durationSeconds === 604800 ? 'weekly' : 'quota',
      unit: row.type === 'CREDIT_LIMIT' ? 'credits' : row.type === 'TOKENS_LIMIT' ? 'tokens' : 'requests',
      usedPercent,
    };
    if (used !== undefined) metric.used = used;
    if (total !== undefined) metric.total = total;
    if (remaining !== undefined) metric.remaining = remaining;
    else if (total !== undefined && used !== undefined) metric.remaining = Math.max(0, total - used);
    if (durationSeconds !== undefined) metric.durationSeconds = durationSeconds;
    if (row.nextResetTime !== undefined && row.nextResetTime !== null) {
      if (!Number.isSafeInteger(row.nextResetTime) || row.nextResetTime <= 0 || row.nextResetTime > 8640000000000000) invalid();
      metric.resetsAt = row.nextResetTime;
    }
    metrics.push(metric);
  }
  if (!metrics.length) invalid();
  return metrics;
}

function minimaxTimestamp(row, keys) {
  for (const key of keys) {
    if (!own(row, key) || row[key] === null) continue;
    const value = row[key];
    let timestamp;
    if (typeof value === 'number' && Number.isSafeInteger(value)) {
      timestamp = value >= 1_000_000_000_000 ? value : value >= 1_000_000_000 ? value * 1000 : NaN;
    } else if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:?\d{2})$/.test(value)) timestamp = Date.parse(value);
    else invalid();
    if (!Number.isSafeInteger(timestamp) || timestamp <= 0 || timestamp > 8640000000000000) invalid();
    return timestamp;
  }
  return undefined;
}

function minimaxPercent(row, key) {
  if (!own(row, key)) return undefined;
  const value = row[key];
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > 100) invalid();
  return value;
}

/** Normalize the official MiniMax M Plan / Token Plan remains response.
 * The API reports remaining percentages; this plugin's quota contract uses
 * usedPercent. Ambiguously named usage_count fields are intentionally ignored.
 */
export function parseMiniMax(json) {
  if (!object(json)) invalid();
  const envelope = own(json, 'base_resp') ? json.base_resp : null;
  if (envelope !== null) {
    if (!object(envelope) || !Number.isSafeInteger(envelope.status_code)) invalid();
    if (envelope.status_code !== 0) throw new Error('upstream');
  }
  if (own(json, 'status_code') && json.status_code !== 0) {
    if (!Number.isSafeInteger(json.status_code)) invalid();
    throw new Error('upstream');
  }
  const data = own(json, 'data') ? json.data : json;
  if (!object(data) || !Array.isArray(data.model_remains)) invalid();
  const metrics = [];
  for (const row of data.model_remains) {
    if (!object(row)) invalid();
    const model = row.model_name ?? row.model;
    if (model !== undefined && model !== null && (typeof model !== 'string' || model.length > 80 || /[\u0000-\u001f\u007f]/.test(model))) invalid();
    const start = minimaxTimestamp(row, ['start_time', 'current_interval_start_time']);
    const end = minimaxTimestamp(row, ['end_time', 'current_interval_reset_time', 'interval_end_time']);
    const intervalRemaining = minimaxPercent(row, 'current_interval_remaining_percent');
    const weeklyOnlyModel = typeof model === 'string' && /image|video/i.test(model);
    if (intervalRemaining !== undefined && !weeklyOnlyModel) {
      const durationMs = start !== undefined && end !== undefined ? end - start : undefined;
      if (durationMs !== undefined && durationMs <= 0) invalid();
      const metric = {
        type: 'quota-window',
        label: durationMs === 18_000_000 ? 'rolling' : durationMs === undefined ? 'rolling' : 'quota',
        unit: 'percent',
        usedPercent: 100 - intervalRemaining,
        ...(durationMs !== undefined && durationMs % 1000 === 0 ? { durationSeconds: durationMs / 1000 } : {}),
        ...(end !== undefined ? { resetsAt: end } : {}),
        ...(typeof model === 'string' && model ? { model } : {}),
      };
      metrics.push(metric);
    }
    const weeklyStart = minimaxTimestamp(row, ['weekly_start_time']);
    const weeklyEnd = minimaxTimestamp(row, ['weekly_end_time', 'current_weekly_reset_time']);
    const weeklyRemaining = minimaxPercent(row, 'current_weekly_remaining_percent');
    if (weeklyRemaining !== undefined) {
      metrics.push({
        type: 'quota-window', label: 'weekly', unit: 'percent', usedPercent: 100 - weeklyRemaining,
        durationSeconds: 604800,
        ...(weeklyEnd !== undefined ? { resetsAt: weeklyEnd } : {}),
        ...(typeof model === 'string' && model ? { model } : {}),
      });
    }
    // Validate paired weekly timestamps even though only the end is displayed.
    if (weeklyStart !== undefined && weeklyEnd !== undefined && weeklyEnd <= weeklyStart) invalid();
  }
  if (!metrics.length) invalid();
  return metrics;
}

function standardMoney(value) {
  if (typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER) return String(value);
  if (typeof value === 'string' && /^\d+(?:\.\d+)?$/.test(value) && Number.isFinite(Number(value))) return value;
  invalid();
}

function standardCount(value) {
  if (typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) return value;
  if (typeof value === 'string' && /^\d+$/.test(value) && Number.isSafeInteger(Number(value))) return Number(value);
  invalid();
}

function optionalStandardMoney(row, key) {
  if (!own(row, key) || row[key] === null) return undefined;
  return standardMoney(row[key]);
}

function packageText(value, { required = false } = {}) {
  if (value === undefined || value === null) {
    if (required) invalid();
    return undefined;
  }
  if (typeof value === 'string') {
    if ((!value && required) || value.length > 500 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) invalid();
    return value || undefined;
  }
  if (Array.isArray(value) && value.length <= 50 && value.every(part => typeof part === 'string' && part.length <= 200 && !/[\u0000-\u001f\u007f]/.test(part))) return value.filter(Boolean).join(', ') || undefined;
  invalid();
}

function packageExpiration(value) {
  if (value === undefined || value === null || value === '') return undefined;
  if (typeof value !== 'string') invalid();
  const match = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?(Z|[+-]\d{2}:\d{2})?$/.exec(value);
  if (!match) invalid();
  const [, year, month, day, hour, minute, second] = match;
  const wallClock = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
  if (wallClock.getUTCFullYear() !== Number(year) || wallClock.getUTCMonth() !== Number(month) - 1 || wallClock.getUTCDate() !== Number(day) || wallClock.getUTCHours() !== Number(hour) || wallClock.getUTCMinutes() !== Number(minute) || wallClock.getUTCSeconds() !== Number(second)) invalid();
  const normalized = value.replace(' ', 'T');
  const zone = match[8];
  if (!Number.isFinite(Date.parse(zone ? normalized : `${normalized}Z`))) invalid();
  // Preserve the upstream timestamp, including any timezone if supplied.
  // A timezone-unqualified value remains server-local; we do not guess one.
  return value;
}

function packageStatus(row) {
  const status = row.status;
  if (status !== undefined && status !== null && typeof status !== 'string' && !(typeof status === 'number' && Number.isSafeInteger(status) && status >= 0 && status <= 100)) invalid();
  const values = [row.displayStatus, typeof status === 'string' ? status : undefined].filter(value => value !== undefined && value !== null);
  if (values.some(value => typeof value !== 'string' || value.length > 40)) invalid();
  if (values.some(value => ['EXPIRED', 'INVALID', 'DISABLED', 'CANCELLED', 'OVERDUE', '过期', '已过期', '失效', '已失效', '已禁用', '已停用'].includes(value.toUpperCase()))) return 'expired';
  if (values.some(value => ['ACTIVE', 'EFFECTIVE', 'VALID', 'NORMAL', '有效', '生效', '已生效', '生效中', '正常'].includes(value.toUpperCase()))) return 'active';
  return 'unknown';
}

/** Parse one fixed-size page from GLM's Standard API resource-package endpoint.
 * Only display-safe fields are retained; account, order and token identifiers
 * from upstream rows are deliberately discarded.
 */
export function parseGlmResourcePackagePage(json) {
  if (!object(json) || json.code !== 200 || !Array.isArray(json.rows)) invalid();
  const total = standardCount(json.total);
  if (json.rows.length > 50 || json.rows.length > total) invalid();
  const packages = json.rows.map(row => {
    if (!object(row)) invalid();
    const consumeType = row.consumeType;
    if (consumeType !== 'TOKENS' && consumeType !== 'TIMES') invalid();
    const totalAmount = standardCount(row.tokensMagnitude);
    const remaining = standardCount(row.availableBalance);
    if (remaining > totalAmount) invalid();
    const metric = {
      type: 'resource-package',
      name: packageText(row.resourcePackageName, { required: true }),
      remaining,
      total: totalAmount,
      unit: consumeType === 'TOKENS' ? 'tokens' : 'requests',
      status: packageStatus(row),
    };
    const expirationTime = packageExpiration(row.expirationTime);
    const suitableModel = packageText(row.suitableModel);
    const suitableScene = packageText(row.suitableScene);
    const frozen = row.frozenBalance === undefined || row.frozenBalance === null ? undefined : standardCount(row.frozenBalance);
    if (expirationTime) metric.expirationTime = expirationTime;
    if (suitableModel) metric.suitableModel = suitableModel;
    if (suitableScene) metric.suitableScene = suitableScene;
    if (frozen !== undefined) metric.frozen = frozen;
    return metric;
  });
  return { total, packages };
}

/** Normalize the domestic GLM Standard API account-balance envelope. */
export function parseGlmStandardBalance(json) {
  if (!object(json) || json.code !== 200 || json.success !== true || !object(json.data)) invalid();
  const data = json.data;
  const available = data.availableBalance ?? data.balance;
  const metric = { type: 'balance', currency: 'CNY', amount: standardMoney(available), wallet: 'glm-standard' };
  if (data.balance !== undefined && data.balance !== null) metric.accountBalance = standardMoney(data.balance);
  const fields = [
    ['rechargeAmount', 'recharge'],
    ['giveAmount', 'granted'],
    ['totalSpendAmount', 'spent'],
    ['frozenBalance', 'frozen'],
  ];
  for (const [source, target] of fields) {
    const value = optionalStandardMoney(data, source);
    if (value !== undefined) metric[target] = value;
  }
  return metric;
}
