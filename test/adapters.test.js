import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyProvider, isGlmEmptyQuota, isGlmNoPlan, isTeamPlanKind, parseDeepSeek, parseGlm, parseGlmResourcePackagePage, parseGlmStandardBalance, parseMiniMax, teamPlanHeaders, teamPlanKind } from '../src/adapters.js';

const quota = (limits, extra = {}) => ({ success: true, code: 200, data: { limits }, ...extra });
const credit = (extra = {}) => ({ type: 'CREDIT_LIMIT', unit: 3, number: 5, percentage: 42, ...extra });
const fails = fn => assert.throws(fn, { message: 'invalid-response' });

test('only explicit known official routes are recognized without a URL', () => {
  for (const [provider, kind] of Object.entries({
    openai: 'openai',
    zai: 'zai-coding-plan', 'zai-coding-cn': 'glm-cn', 'minimax-cn': 'minimax-cn', 'opencode-go': 'opencode-go',
  })) {
    const result = classifyProvider({ provider });
    assert.equal(result.kind, kind);
    assert.ok(result.dashboardUrl.startsWith('https://'));
  }
  for (const provider of ['deepseek', 'deepseek-official', 'glm', 'zhipu', 'OpenAI', 'my-openai', 'deepseek-account', 'zai-standard', '__proto__', 'constructor', 'opencode', undefined]) {
    assert.deepEqual(classifyProvider({ provider }), { kind: 'unsupported', dashboardUrl: null });
  }
  assert.deepEqual(classifyProvider({ provider: 'zai' }), { kind: 'zai-coding-plan', dashboardUrl: 'https://z.ai/manage-apikey/subscription' });
});

test('official HTTPS endpoint determines provider even for custom route names', () => {
  for (const [baseURL, kind] of [
    ['https://api.deepseek.com/v1', 'deepseek'],
    ['https://open.bigmodel.cn/api/coding/paas/v4', 'glm-cn'],
    ['https://api.openai.com:443/v1', 'openai'],
    ['https://api.minimax.cn/v1', 'minimax-cn'],
    ['https://api.minimax.cn/anthropic', 'minimax-cn'],
    ['https://api.minimaxi.com/anthropic', 'minimax-cn'],

  ]) assert.equal(classifyProvider({ provider: 'custom', baseURL }).kind, kind);
  for (const [provider, baseURL] of [
    ['zai', 'https://api.z.ai/api/paas/v4'],
    ['zai-api', 'https://api.z.ai/api/paas/v4'],
  ]) assert.deepEqual(classifyProvider({ provider, baseURL }), { kind: 'unsupported', dashboardUrl: 'https://z.ai/manage-apikey/billing', reason: 'zai-api-status-only' });
  for (const [provider, baseURL] of [
    ['custom', 'https://open.bigmodel.cn/api/paas/v4'],
    ['zai-api', 'https://open.bigmodel.cn/api/paas/v4'],
  ]) assert.deepEqual(classifyProvider({ provider, baseURL }), { kind: 'glm-standard-cn', dashboardUrl: null });
  for (const [provider, baseURL, kind] of [
    ['zai', 'https://api.z.ai/api/coding/paas/v4', 'zai-coding-plan'],
    ['custom', 'https://api.z.ai/api/coding/paas/v4', 'zai-coding-plan'],
    ['custom', 'https://open.bigmodel.cn/api/coding/paas/v4', 'glm-cn'],
  ]) assert.equal(classifyProvider({ provider, baseURL }).kind, kind);
  for (const [provider, baseURL] of [
    ['zai', 'https://api.z.ai/api/anthropic'],
    ['custom', 'https://api.z.ai/custom/v1'],
    ['custom', 'https://open.bigmodel.cn/api/coding/paas/v4?model=glm-4'],
  ]) assert.equal(classifyProvider({ provider, baseURL }).kind, 'unsupported');
  assert.deepEqual(classifyProvider({ provider: 'zai', baseURL: 'https://relay.example/v1' }), { kind: 'unsupported', dashboardUrl: null });
  assert.equal(classifyProvider({ provider: 'custom', baseURL: 'https://opencode.ai/zen/go/v1' }).kind, 'opencode-go');
  assert.equal(classifyProvider({ provider: 'custom', baseURL: 'https://opencode.ai/zen/v1' }).kind, 'unsupported');
  assert.equal(classifyProvider({ provider: 'opencode-go', baseURL: 'https://opencode.ai/zen/go/v1?next=https://evil.example' }).kind, 'unsupported');
});

test('explicit unsafe or unknown URLs cannot fall back to an official route', () => {
  for (const baseURL of [
    '', 'not-a-url', 'http://api.openai.com/v1', 'https://api.openai.com:8443/v1',
    'https://user@api.openai.com/v1', 'https://user:pass@api.z.ai',
    'https://api.openai.com.attacker.example/v1', 'https://api.openai.com@attacker.example/v1',
    'https://attacker.example/api.openai.com', 'https://proxy.example/v1',
    'https://api.openai.com./v1', ' https://api.openai.com/v1', 42,
  ]) assert.equal(classifyProvider({ provider: 'openai', baseURL }).kind, 'unsupported', String(baseURL));
});

test('DeepSeek preserves precision, currencies, recharge, and granted balances', () => {
  assert.deepEqual(parseDeepSeek({ is_available: true, balance_infos: [
    { currency: 'CNY', total_balance: '126.800000000000000001', granted_balance: '6.80', topped_up_balance: '120.00' },
    { currency: 'USD', total_balance: '0.00' },
  ] }), [
    { type: 'balance', currency: 'CNY', amount: '126.800000000000000001', granted: '6.80', toppedUp: '120.00' },
    { type: 'balance', currency: 'USD', amount: '0.00' },
  ]);
});

test('negative available balance is real debt, not a parsing failure', () => {
  assert.deepEqual(parseDeepSeek({ is_available: false, balance_infos: [{ currency: 'USD', total_balance: '-0.012' }] }),
    [{ type: 'balance', currency: 'USD', amount: '-0.012' }]);
});

test('DeepSeek rejects missing, malformed, or silently coercible balances', () => {
  for (const value of [null, '', ' ', 'NaN', 'Infinity', '1e3', '1,000', 0, false]) {
    fails(() => parseDeepSeek({ balance_infos: [{ currency: 'CNY', total_balance: value }] }));
  }
  for (const response of [null, [], {}, { balance_infos: [] }, { balance_infos: [null] },
    { balance_infos: [{ currency: 'EUR', total_balance: '1' }] },
    { is_available: 'false', balance_infos: [{ currency: 'CNY', total_balance: '1' }] },
    { balance_infos: [{ currency: 'CNY', total_balance: '1', granted_balance: '-2' }] },
    { balance_infos: [{ currency: 'CNY', total_balance: '1', topped_up_balance: null }] },
  ]) fails(() => parseDeepSeek(response));
});

test('current credit shape has explicit rolling and weekly windows, regardless of order', () => {
  const reset = 1793856000000;
  const weekly = credit({ unit: 6, number: 1, percentage: 68, usage: 10000, currentValue: 6800, remaining: 3200 });
  const rolling = credit({ percentage: 42, usage: 2000, currentValue: 840, remaining: 1160, nextResetTime: reset });
  assert.deepEqual(parseGlm(quota([weekly, rolling])), [
    { type: 'quota-window', label: 'weekly', unit: 'credits', usedPercent: 68, used: 6800, total: 10000, remaining: 3200, durationSeconds: 604800 },
    { type: 'quota-window', label: 'rolling', unit: 'credits', usedPercent: 42, used: 840, total: 2000, remaining: 1160, durationSeconds: 18000, resetsAt: reset },
  ]);
});

test('legacy token and MCP shapes retain their semantics without assuming a calendar-month length', () => {
  assert.deepEqual(parseGlm(quota([
    { type: 'TOKENS_LIMIT', unit: 3, number: 5, percentage: 20 },
    { type: 'TIME_LIMIT', unit: 5, number: 1, percentage: 30, usage: 100, currentValue: 30 },
  ])), [
    { type: 'quota-window', label: 'rolling', unit: 'tokens', usedPercent: 20, durationSeconds: 18000 },
    { type: 'quota-window', label: 'mcp', unit: 'requests', usedPercent: 30, used: 30, total: 100, remaining: 70 },
  ]);
});

test('zero reported usage is preserved, never inferred from null or missing', () => {
  assert.equal(parseGlm(quota([credit({ percentage: 0 })]))[0].usedPercent, 0);
  assert.equal(parseGlm(quota([credit({ percentage: 0, currentValue: 0, usage: 2000 })]))[0].used, 0);
  for (const percentage of [undefined, null, '', '0', false, NaN, Infinity, 1.5]) {
    fails(() => parseGlm(quota([credit({ percentage })])));
  }
});

test('currentValue is USED, and counts override a stale reported percentage', () => {
  const metric = parseGlm(quota([credit({ percentage: 90, usage: 100, currentValue: 25 })]))[0];
  assert.equal(metric.usedPercent, 25);
  assert.equal(metric.used, 25);
  assert.equal(metric.remaining, 75);
});

test('remaining counts compute used; conflicting counts choose conservative used value', () => {
  assert.equal(parseGlm(quota([credit({ usage: 100, remaining: 75 })]))[0].usedPercent, 25);
  const metric = parseGlm(quota([credit({ usage: 100, remaining: 75, currentValue: 30 })]))[0];
  assert.equal(metric.usedPercent, 30);
  assert.equal(metric.used, 30);
  assert.equal(metric.remaining, 75); // Preserve explicitly returned count; do not rewrite upstream data.
});

test('overage is bounded for progress bars but its actual count is retained', () => {
  const metric = parseGlm(quota([credit({ usage: 100, currentValue: 120 })]))[0];
  assert.equal(metric.usedPercent, 100);
  assert.equal(metric.used, 120);
  assert.equal(metric.remaining, 0);
  assert.equal(parseGlm(quota([credit({ percentage: -5 })]))[0].usedPercent, 0);
  assert.equal(parseGlm(quota([credit({ percentage: 105 })]))[0].usedPercent, 100);
});

test('known duration units map explicitly; unknown durations never use reset ordering', () => {
  for (const [unit, number, durationSeconds, label] of [
    [5, 300, 18000, 'rolling'], [1, 7, 604800, 'weekly'], [3, 1, 3600, 'quota'],
  ]) {
    const result = parseGlm(quota([credit({ unit, number })]))[0];
    assert.equal(result.durationSeconds, durationSeconds);
    assert.equal(result.label, label);
  }
  const results = parseGlm(quota([
    credit({ unit: 99, number: 1, nextResetTime: 1793900000000 }),
    credit({ unit: undefined, number: undefined, nextResetTime: 1793800000000 }),
  ]));
  assert.deepEqual(results.map(row => row.label), ['quota', 'quota']);
  assert.ok(results.every(row => !('durationSeconds' in row)));
});

test('a recognized direct limits object is supported alongside API envelopes', () => {
  assert.equal(parseGlm({ limits: [credit()] })[0].usedPercent, 42);
  assert.equal(parseGlm({ code: 200, data: { limits: [credit()] } })[0].usedPercent, 42);
});

test('error envelopes, empty limits, and wholly unknown responses fail safely', () => {
  for (const response of [null, [], {}, { limits: [] }, { limits: null },
    quota([credit()], { success: false }), quota([credit()], { code: 500 }),
    { code: '200', data: { limits: [credit()] } },
    { limits: [{ type: 'FUTURE_LIMIT', mysteriousField: true }] },
    { limits: [null] }, { limits: [{}] }, { data: null, limits: [credit()] },
  ]) fails(() => parseGlm(response));
});

test('mixed responses preserve recognized quota, skipping unsupported types without inventing metrics', () => {
  const response = quota([{ type: 'FUTURE_LIMIT', percentage: null }, credit()]);
  assert.equal(parseGlm(response).length, 1);
});

test('malformed recognized counts, duration metadata, and timestamps are rejected', () => {
  for (const extra of [
    { usage: '100' }, { usage: -1 }, { remaining: Infinity }, { currentValue: false },
    { currentValue: Number.MAX_SAFE_INTEGER + 1 }, { usage: 100, remaining: 101 },
    { unit: '3' }, { number: -1 }, { number: 1.5 }, { number: Number.MAX_SAFE_INTEGER },
    { nextResetTime: '1793856000000' }, { nextResetTime: 0 }, { nextResetTime: Infinity },
  ]) fails(() => parseGlm(quota([credit(extra)])));
});

test('parsers do not mutate upstream objects or arrays', () => {
  const input = quota([credit({ usage: 100, remaining: 50 })]);
  const before = structuredClone(input);
  Object.freeze(input.data.limits[0]);
  Object.freeze(input.data.limits);
  Object.freeze(input.data);
  Object.freeze(input);
  parseGlm(input);
  assert.deepEqual(input, before);
});

test('optional null counts do not become zeros; total zero does not divide by zero', () => {
  const metric = parseGlm(quota([credit({ usage: null, currentValue: null, remaining: null })]))[0];
  assert.equal(metric.usedPercent, 42);
  assert.ok(!('used' in metric));
  assert.ok(!('remaining' in metric));
  assert.equal(parseGlm(quota([credit({ usage: 0, currentValue: 0, percentage: 0 })]))[0].usedPercent, 0);
});

// These fixtures are deliberately synthetic and contain no real credentials or account data.
// They exercise known response shapes; successful tests are not a claim of live supplier API compatibility.

test('MiniMax maps reported remaining percentages and window resets without inferring ambiguous counts', () => {
  const response = {
    base_resp: { status_code: 0, status_msg: 'success' },
    data: { model_remains: [
      {
        model_name: 'general', start_time: 1781834400000, end_time: 1781852400000,
        current_interval_remaining_percent: 98, current_interval_total_count: 1000, current_interval_usage_count: 0,
        weekly_start_time: 1781452800000, weekly_end_time: 1782057600000,
        current_weekly_remaining_percent: 67, current_weekly_total_count: 5000, current_weekly_usage_count: 0,
      },
      { model_name: 'video', weekly_end_time: 1782057600000, current_weekly_remaining_percent: 100 },
    ] },
  };
  assert.deepEqual(parseMiniMax(response), [
    { type: 'quota-window', label: 'rolling', unit: 'percent', usedPercent: 2, durationSeconds: 18000, resetsAt: 1781852400000, model: 'general' },
    { type: 'quota-window', label: 'weekly', unit: 'percent', usedPercent: 33, durationSeconds: 604800, resetsAt: 1782057600000, model: 'general' },
    { type: 'quota-window', label: 'weekly', unit: 'percent', usedPercent: 0, durationSeconds: 604800, resetsAt: 1782057600000, model: 'video' },
  ]);
});

test('MiniMax accepts direct payloads and preserves explicit zero/exhausted percentages', () => {
  const metrics = parseMiniMax({ model_remains: [
    { model: 'text', start_time: '2026-06-18T12:00:00+08:00', end_time: '2026-06-18T17:00:00+08:00', current_interval_remaining_percent: 0 },
    { model_name: 'image', current_interval_remaining_percent: 20, current_weekly_remaining_percent: 100 },
    { model_name: 'audio', weekly_end_time: 1782057600, current_weekly_remaining_percent: 50 },
  ] });
  assert.deepEqual(metrics.map(({ label, usedPercent, model }) => ({ label, usedPercent, model })), [
    { label: 'rolling', usedPercent: 100, model: 'text' },
    { label: 'weekly', usedPercent: 0, model: 'image' },
    { label: 'weekly', usedPercent: 50, model: 'audio' },
  ]);
  assert.equal(metrics[0].durationSeconds, 18000);
  assert.equal(metrics[0].resetsAt, Date.parse('2026-06-18T17:00:00+08:00'));
  assert.equal(metrics[2].resetsAt, 1782057600000);
});

test('MiniMax refuses unsuccessful envelopes, malformed percentages, and count-only responses', () => {
  for (const response of [
    null, {}, { data: { model_remains: [] } },
    { base_resp: { status_code: 1002, status_msg: 'limit' }, model_remains: [] },
    { status_code: 1004, model_remains: [] },
    { model_remains: [{ current_interval_remaining_percent: '0' }] },
    { model_remains: [{ current_weekly_remaining_percent: 101 }] },
    { model_remains: [{ current_interval_total_count: 100, current_interval_usage_count: 0 }] },
    { model_remains: [{ start_time: 20, end_time: 10, current_interval_remaining_percent: 50 }] },
    { model_remains: [{ model_name: 'bad\nname', current_weekly_remaining_percent: 50 }] },
  ]) {
    if (response?.base_resp || response?.status_code) assert.throws(() => parseMiniMax(response), { message: 'upstream' });
    else fails(() => parseMiniMax(response));
  }
});

test('GLM Standard API account balance preserves supplied amounts and separates fields', () => {
  assert.deepEqual(parseGlmStandardBalance({
    code: 200, success: true, data: {
      balance: 18.75, availableBalance: 8.5, rechargeAmount: 10, giveAmount: 0.25,
      totalSpendAmount: 1.5, frozenBalance: 0,
    },
  }), {
    type: 'balance', currency: 'CNY', amount: '8.5', wallet: 'glm-standard', accountBalance: '18.75',
    recharge: '10', granted: '0.25', spent: '1.5', frozen: '0',
  });
  assert.deepEqual(parseGlmStandardBalance({ code: 200, success: true, data: { balance: '0.00000042' } }).amount, '0.00000042');
  for (const response of [null, {}, { code: 200, success: false, data: {} }, { code: 500, success: true, data: {} }, { code: 200, success: true, data: { availableBalance: 'NaN' } }]) fails(() => parseGlmStandardBalance(response));
});

test('GLM Standard API packages distinguish token and request units without retaining identifiers', () => {
  const page = parseGlmResourcePackagePage({
    code: 200, total: 2, rows: [
      { resourcePackageName: 'Token Bundle', consumeType: 'TOKENS', tokensMagnitude: 1000, tokenBalance: 950, availableBalance: 950, frozenBalance: 0, status: 'EFFECTIVE', displayStatus: 'ACTIVE', expirationTime: '2026-12-11T16:17:58', suitableModel: ['GLM-4'], suitableScene: 'Coding', customerId: 'private-customer', orderNo: 'private-order', tokenNo: 'private-token' },
      { resourcePackageName: 'Request Bundle', consumeType: 'TIMES', tokensMagnitude: 20, availableBalance: 0, status: 'EXPIRED', displayStatus: 'EXPIRED', expirationTime: '2025-01-01T00:00:00' },
    ],
  });
  assert.deepEqual(page, {
    total: 2,
    packages: [
      { type: 'resource-package', name: 'Token Bundle', remaining: 950, total: 1000, unit: 'tokens', status: 'active', expirationTime: '2026-12-11T16:17:58', suitableModel: 'GLM-4', suitableScene: 'Coding', frozen: 0 },
      { type: 'resource-package', name: 'Request Bundle', remaining: 0, total: 20, unit: 'requests', status: 'expired', expirationTime: '2025-01-01T00:00:00' },
    ],
  });
  const safeJson = JSON.stringify(page);
  for (const secret of ['private-customer', 'private-order', 'private-token']) assert.equal(safeJson.includes(secret), false);
  for (const response of [null, {}, { code: 500, total: 0, rows: [] }, { code: 200, total: 2, rows: [{ resourcePackageName: 'bad', consumeType: 'OTHER', tokensMagnitude: 10, availableBalance: 1 }] }, { code: 200, total: 1, rows: [{ resourcePackageName: 'bad', consumeType: 'TIMES', tokensMagnitude: 10, availableBalance: 11 }] }, { code: 200, total: 1, rows: [{ resourcePackageName: 'bad', consumeType: 'TIMES', tokensMagnitude: 10, availableBalance: 1, expirationTime: '2026-02-30T00:00:00' }] }]) fails(() => parseGlmResourcePackagePage(response));
  const localized = parseGlmResourcePackagePage({ code: 200, total: 1, rows: [{ resourcePackageName: 'Local time', consumeType: 'TIMES', tokensMagnitude: 10, availableBalance: 5, status: 1, displayStatus: '有效', expirationTime: '2026-12-11 16:17:58' }] });
  assert.equal(localized.packages[0].status, 'active');
  assert.equal(localized.packages[0].expirationTime, '2026-12-11 16:17:58');
});

test('GLM Team Plan helpers map kinds, scope headers and recognize the no-plan reply', () => {
  assert.equal(teamPlanKind('glm-cn'), 'glm-cn-team');
  assert.equal(teamPlanKind('zai-coding-plan'), 'zai-coding-plan-team');
  assert.equal(teamPlanKind('glm-cn-team'), undefined);
  assert.equal(teamPlanKind('deepseek'), undefined);
  assert.equal(teamPlanKind(undefined), undefined);
  assert.equal(isTeamPlanKind('glm-cn-team'), true);
  assert.equal(isTeamPlanKind('zai-coding-plan-team'), true);
  assert.equal(isTeamPlanKind('glm-cn'), false);
  assert.deepEqual(teamPlanHeaders({ organizationId: 'org', projectId: 'proj' }), { 'bigmodel-organization': 'org', 'bigmodel-project': 'proj' });
  assert.deepEqual(teamPlanHeaders({ organizationId: '', projectId: '' }), {});
  assert.deepEqual(teamPlanHeaders(undefined), {});
  // Half scopes pass through untouched; the settings layer rejects them earlier.
  assert.deepEqual(teamPlanHeaders({ organizationId: 'org' }), { 'bigmodel-organization': 'org' });
  assert.equal(isGlmNoPlan({ code: 400, msg: '当前用户不存在coding plan', success: false }), true);
  assert.equal(isGlmNoPlan({ code: 403, msg: '没有资格' }), true);
  assert.equal(isGlmNoPlan({ message: 'No coding plan found' }), true);
  assert.equal(isGlmNoPlan({ code: 200, data: { limits: [] } }), false);
  assert.equal(isGlmNoPlan({ msg: 123 }), false);
  assert.equal(isGlmNoPlan({ msg: '操作成功' }), false);
  assert.equal(isGlmNoPlan(null), false);
  assert.equal(isGlmNoPlan('x'), false);
  // Live-verified Team monitor reply without a project scope: success, empty data.
  assert.equal(isGlmEmptyQuota({ code: 200, msg: '操作成功', data: {}, success: true }), true);
  assert.equal(isGlmEmptyQuota({ code: 200, data: { limits: [] }, success: true }), true);
  assert.equal(isGlmEmptyQuota({ code: 200, data: { limits: [{ type: 'TOKENS_LIMIT', unit: 3, number: 5, percentage: 1 }] } }), false);
  assert.equal(isGlmEmptyQuota({ code: 500, msg: '当前用户不存在coding plan', success: false }), false);
  assert.equal(isGlmEmptyQuota({ code: 200, success: false }), false);
  assert.equal(isGlmEmptyQuota(null), false);
  // The team monitor answers in the personal monitor's shape; parseGlm applies unchanged.
  const metric = parseGlm({ code: 200, data: { limits: [{ type: 'TOKENS_LIMIT', unit: 6, number: 1, percentage: 25 }] } })[0];
  assert.equal(metric.label, 'weekly');
  assert.equal(metric.usedPercent, 25);
});
