import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QuotaManager, readJson } from '../src/manager.js';
import { apply, inject } from '../index.js';

const balance = amount => ({ balance_infos: [{ currency: 'CNY', total_balance: amount, granted_balance: '0.00', topped_up_balance: amount }] });
function fixture({ providers = { deepseek: { apiKeyEnv: 'CUSTOM_KEY' } }, keys = { CUSTOM_KEY: 'secret-fixture-A' }, records = {}, whole = false, teamPlans = {} } = {}) {
  let now = 1000000;
  const state = { providers, keys, records, teamPlans, requests: [], response: balance('20.00'), code: 200 };
  const services = {
    llm: {
      listProviders: () => Object.keys(state.providers).map(id => ({ id, name: id })),
      listConfigurableProviders: () => [
        ...Object.keys(state.providers).map(provider => ({ provider, displayName: provider, settingsNs: 'pi', settingsPath: ['providers', provider], defaultBaseURL: provider === 'deepseek' ? 'https://api.deepseek.com' : provider === 'minimax-cn' ? 'https://api.minimaxi.com/anthropic' : undefined, nativeAuth: { env: ['NATIVE_KEY'] } })),
        { provider: 'dormant', displayName: 'Dormant', settingsNs: 'pi', settingsPath: ['providers', 'dormant'] },
        ...(whole ? [{ provider: 'deepseek-official', displayName: 'DeepSeek', settingsNs: 'official', settingsPath: [] }] : []),
      ],
    },
    settings: { describe: ({ redactSecrets }) => { assert.equal(redactSecrets, true); return [{ ns: 'pi', value: { providers: state.providers } }, ...(whole ? [{ ns: 'official', value: { apiKeyEnv: 'ABSENT_KEY' } }] : [])]; } },
    credentials: {
      resolve: ref => state.keys[ref] ? { value: state.keys[ref] } : undefined,
      describe: ref => ({ configured: Boolean(state.keys[ref]) }),
      describeRecord: key => ({ configured: Boolean(state.records[key]), kind: state.records[key]?.kind }),
      readRecord: key => state.records[key],
    },
    agentDefaultModel: { currentSelection: () => ({ provider: Object.keys(state.providers)[0], model: 'test' }) },
  };
  const fetcher = async (url, options) => {
    state.requests.push({ url, options });
    return Response.json(state.response, { status: state.code });
  };
  const manager = new QuotaManager(services, { fetcher, now: () => now, adminKeyResolver: async () => undefined, teamPlansProvider: () => state.teamPlans });
  return { state, services, manager, advance: milliseconds => { now += milliseconds; } };
}

test('discovers saved app routes, not dormant catalog entries or missing pristine built-ins', async () => {
  const f = fixture({ whole: true });
  try {
    const result = await f.manager.snapshot();
    assert.deepEqual(result.rows.map(row => row.id), ['deepseek']);
    assert.equal(result.defaultProvider, 'deepseek');
    assert.equal(result.rows[0].status, 'ok');
  } finally { await f.manager.dispose(); }
});

test('resolves the custom configured ref; neither credentials nor internal URLs appear in normalized output', async () => {
  const f = fixture();
  try {
    const result = await f.manager.snapshot();
    assert.equal(f.state.requests[0].options.headers.Authorization, 'Bearer secret-fixture-A');
    const serialized = JSON.stringify(result);
    for (const secret of ['secret-fixture-A', 'CUSTOM_KEY', 'Authorization', '/user/balance', 'nativeRecord']) assert.equal(serialized.includes(secret), false);
    assert.equal(result.rows[0].metrics[0].amount, '20.00');
  } finally { await f.manager.dispose(); }
});

test('success TTL, manual cooldown and credential rotation keep snapshots isolated', async () => {
  const f = fixture();
  try {
    await f.manager.snapshot();
    await f.manager.snapshot({ refresh: true });
    assert.equal(f.state.requests.length, 1);
    f.advance(10001);
    await f.manager.snapshot({ refresh: true });
    assert.equal(f.state.requests.length, 2);
    f.state.keys.CUSTOM_KEY = 'secret-fixture-B';
    f.state.response = balance('30.00');
    const result = await f.manager.snapshot();
    assert.equal(f.state.requests.length, 3);
    assert.equal(result.rows[0].metrics[0].amount, '30.00');
    delete f.state.keys.CUSTOM_KEY;
    const missing = await f.manager.snapshot();
    assert.equal(missing.rows[0].status, 'missing-credential');
    assert.deepEqual(missing.rows[0].metrics, []);
  } finally { await f.manager.dispose(); }
});

test('failure retains only same-credential success, marks stale and respects backoff', async () => {
  const f = fixture();
  try {
    await f.manager.snapshot();
    f.advance(120001);
    f.state.code = 401;
    f.state.response = { error: 'secret-upstream-message' };
    const failed = await f.manager.snapshot();
    assert.equal(failed.rows[0].status, 'unauthorized');
    assert.equal(failed.rows[0].stale, true);
    assert.equal(failed.rows[0].metrics[0].amount, '20.00');
    await f.manager.snapshot({ refresh: true });
    assert.equal(f.state.requests.length, 2);
    assert.equal(JSON.stringify(failed).includes('secret-upstream-message'), false);
    f.state.keys.CUSTOM_KEY = 'rotated-key';
    const rotated = await f.manager.snapshot();
    assert.deepEqual(rotated.rows[0].metrics, []);
    assert.equal(rotated.rows[0].stale, false);
  } finally { await f.manager.dispose(); }
});

test('general OpenCode Zen never sends its key to the Go-only usage endpoint', async () => {
  const f = fixture({ providers: { opencode: { apiKeyEnv: 'CUSTOM_KEY' } } });
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].id, 'opencode');
    assert.equal(result.rows[0].status, 'opencode-go-only');
    assert.equal(result.rows[0].dashboardUrl, 'https://opencode.ai/console');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('OpenCode Go uses its official read-only usage endpoint and maps percent windows', async () => {
  const f = fixture({ providers: { 'opencode-go': { apiKeyEnv: 'CUSTOM_KEY' } } });
  f.state.response = { usage: { rolling: { percent: 11, resetsAt: '2026-12-17T17:10:09.580Z' }, weekly: { percent: 4 }, monthly: { percent: 2 } } };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'opencode-go');
    assert.equal(result.rows[0].source, 'opencode-usage');
    assert.equal(result.rows[0].metrics[0].usedPercent, 11);
    assert.equal(f.state.requests.length, 1);
    assert.equal(f.state.requests[0].url, 'https://opencode.ai/zen/go/v1/usage');
    assert.equal(f.state.requests[0].options.headers.Authorization, 'Bearer secret-fixture-A');
  } finally { await f.manager.dispose(); }
});

test('MiniMax CN queries only the official remains endpoint with Bearer auth and maps M Plan windows', async () => {
  const f = fixture({ providers: { 'minimax-cn': { apiKeyEnv: 'CUSTOM_KEY' } } });
  f.state.response = {
    base_resp: { status_code: 0, status_msg: 'success' },
    model_remains: [{
      model_name: 'general', start_time: 1781834400000, end_time: 1781852400000,
      current_interval_remaining_percent: 68, weekly_start_time: 1781452800000,
      weekly_end_time: 1782057600000, current_weekly_remaining_percent: 41,
    }],
  };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'minimax-cn');
    assert.equal(result.rows[0].source, 'minimax-plan');
    assert.deepEqual(result.rows[0].metrics.map(({ label, usedPercent }) => ({ label, usedPercent })), [
      { label: 'rolling', usedPercent: 32 }, { label: 'weekly', usedPercent: 59 },
    ]);
    assert.equal(f.state.requests.length, 1);
    assert.equal(f.state.requests[0].url, 'https://www.minimax.cn/v1/token_plan/remains');
    assert.equal(f.state.requests[0].options.headers.Authorization, 'Bearer secret-fixture-A');
    assert.equal(JSON.stringify(result).includes('secret-fixture-A'), false);
  } finally { await f.manager.dispose(); }
});

test('registered-only MiniMax CN route is classified, but never queried without credential metadata', async () => {
  const f = fixture({ providers: { 'minimax-cn': {} } });
  f.services.llm.listConfigurableProviders = () => [];
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'minimax-cn');
    assert.equal(result.rows[0].status, 'missing-credential');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('MiniMax HTTP-200 error envelope is not treated as an empty successful quota', async () => {
  const f = fixture({ providers: { 'minimax-cn': { apiKeyEnv: 'CUSTOM_KEY' } } });
  f.state.response = { base_resp: { status_code: 1004, status_msg: 'secret upstream error' }, model_remains: [] };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].status, 'upstream');
    assert.deepEqual(result.rows[0].metrics, []);
    assert.equal(JSON.stringify(result).includes('secret upstream error'), false);
  } finally { await f.manager.dispose(); }
});

test('MiniMax CN route never sends its key to an explicit custom relay', async () => {
  const f = fixture({ providers: { 'minimax-cn': { baseURL: 'https://relay.example/v1', apiKeyEnv: 'CUSTOM_KEY' } } });
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'unsupported');
    assert.equal(result.rows[0].status, 'unsupported');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('unknown relay, OpenAI and custom authentication do not send any network request', async () => {
  const f = fixture({ providers: {
    relay: { baseURL: 'https://relay.example/v1', apiKeyEnv: 'CUSTOM_KEY' },
    openai: { baseURL: 'https://api.openai.com/v1', apiKeyEnv: 'CUSTOM_KEY' },
    deepseek: { apiKeyEnv: 'CUSTOM_KEY', headers: { 'x-api-key': '[redacted]' } },
  } });
  try {
    const result = await f.manager.snapshot();
    assert.deepEqual(result.rows.map(row => row.status), ['unsupported', 'admin-key-required', 'unsupported-auth']);
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('explicit missing key does not silently fall back to native environment', async () => {
  const f = fixture({ keys: { NATIVE_KEY: 'wrong-fallback' } });
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].status, 'missing-credential');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('native API-key record is supported while OAuth grants are never read', async () => {
  const f = fixture({ providers: { deepseek: {} }, records: { 'llm-pi-ai/deepseek': { kind: 'api-key', key: 'stored-record-key' } } });
  try {
    const good = await f.manager.snapshot();
    assert.equal(good.rows[0].status, 'ok');
    assert.equal(f.state.requests[0].options.headers.Authorization, 'Bearer stored-record-key');
    f.state.records['llm-pi-ai/deepseek'] = { kind: 'grant', payload: 'must-not-read' };
    f.services.credentials.readRecord = () => { throw Error('grant was read'); };
    const unsupported = await f.manager.snapshot();
    assert.equal(unsupported.rows[0].status, 'unsupported-auth');
    assert.equal(f.state.requests.length, 1);
  } finally { await f.manager.dispose(); }
});

test('native Base URL overrides cannot accidentally send a relay key to official endpoints', async () => {
  const f = fixture({ keys: { CUSTOM_KEY: 'relay-key', CUSTOM_BASE_URL: 'https://relay.example/v1' } });
  const old = f.services.llm.listConfigurableProviders;
  f.services.llm.listConfigurableProviders = () => old().map(row => ({ ...row, baseURLEnv: ['CUSTOM_BASE_URL'] }));
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].status, 'unsupported');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('same-name custom DeepSeek routes need an actual endpoint before official quota probing', async () => {
  const f = fixture({ providers: { 'deepseek-official': { apiKeyEnv: 'CUSTOM_KEY' } }, keys: { CUSTOM_KEY: 'relay-secret', DEEPSEEK_BASE_URL: 'https://relay.example/v1' } });
  try {
    const overridden = await f.manager.snapshot();
    assert.equal(overridden.rows[0].kind, 'unsupported');
    assert.equal(f.state.requests.length, 0);
    f.state.providers['deepseek-official'].baseURL = 'https://api.deepseek.com/v1';
    const configured = await f.manager.snapshot();
    assert.equal(configured.rows[0].kind, 'deepseek');
    assert.equal(configured.rows[0].status, 'ok');
    assert.equal(f.state.requests.length, 1);
  } finally { await f.manager.dispose(); }
});

test('a failed endpoint override read never falls back to an official quota destination', async () => {
  const f = fixture();
  const original = f.services.llm.listConfigurableProviders;
  f.services.llm.listConfigurableProviders = () => original().map(row => ({ ...row, baseURLEnv: ['BROKEN_BASE_URL'] }));
  f.services.credentials.resolve = () => { throw Error('private endpoint store failure'); };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].status, 'unsupported');
    assert.deepEqual(result.rows[0].metrics, []);
    assert.equal(JSON.stringify(result).includes('private endpoint store failure'), false);
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('GLM Coding Plan China uses its fixed official monitor host', async () => {
  const f = fixture({ providers: {
    'zai-coding-cn': { baseURL: 'https://open.bigmodel.cn/api/coding/paas/v4', apiKeyEnv: 'CN_KEY' },
  }, keys: { CN_KEY: 'cn-secret' } });
  f.state.response = { code: 200, data: { limits: [{ type: 'CREDIT_LIMIT', percentage: 40, usage: 2000, currentValue: 800, unit: 3, number: 5 }] } };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'glm-cn');
    assert.equal(result.rows[0].metrics[0].usedPercent, 40);
    assert.equal(f.state.requests.length, 1);
    assert.equal(f.state.requests[0].url, 'https://open.bigmodel.cn/api/monitor/usage/quota/limit');
    assert.equal(f.state.requests[0].options.headers.Authorization, 'cn-secret');
  } finally { await f.manager.dispose(); }
});

test('DSH built-in Z.AI Coding Plan queries the official global quota monitor with raw key auth', async () => {
  for (const baseURL of [undefined, 'https://api.z.ai/api/coding/paas/v4']) {
    const f = fixture({ providers: {
      zai: { baseURL, apiKeyEnv: 'ZAI_API_KEY' },
    }, keys: { ZAI_API_KEY: 'zai-plan-secret' } });
    f.state.response = { code: 200, data: { limits: [
      { type: 'TOKENS_LIMIT', unit: 3, number: 5, percentage: 20 },
      { type: 'TIME_LIMIT', unit: 5, number: 1, percentage: 30, usage: 100, currentValue: 30 },
    ] } };
    try {
      const result = await f.manager.snapshot();
      assert.equal(result.rows[0].kind, 'zai-coding-plan');
      assert.equal(result.rows[0].status, 'ok');
      assert.equal(result.rows[0].source, 'zai-plan-usage');
      assert.equal(result.rows[0].dashboardUrl, 'https://z.ai/manage-apikey/subscription');
      assert.deepEqual(result.rows[0].metrics.map(metric => metric.label), ['rolling', 'mcp']);
      assert.equal(f.state.requests.length, 1);
      assert.equal(f.state.requests[0].url, 'https://api.z.ai/api/monitor/usage/quota/limit');
      assert.equal(f.state.requests[0].options.headers.Authorization, 'zai-plan-secret');
      assert.equal(JSON.stringify(result).includes('zai-plan-secret'), false);
    } finally { await f.manager.dispose(); }
  }
});

test('GLM Team Plan rows appear only when enabled and query the type=2 team monitor with scope headers', async () => {
  const f = fixture({ providers: {
    'zai-coding-cn': { baseURL: 'https://open.bigmodel.cn/api/coding/paas/v4', apiKeyEnv: 'CN_KEY' },
  }, keys: { CN_KEY: 'team-secret' } });
  f.state.response = { code: 200, data: { limits: [
    { type: 'TOKENS_LIMIT', unit: 3, number: 5, percentage: 10 },
    { type: 'TOKENS_LIMIT', unit: 6, number: 1, percentage: 20 },
  ] } };
  try {
    let result = await f.manager.snapshot();
    assert.deepEqual(result.rows.map(row => row.id), ['zai-coding-cn']);
    f.state.teamPlans = { 'glm-cn': { organizationId: 'org-123', projectId: 'proj-456' } };
    result = await f.manager.snapshot();
    assert.deepEqual(result.rows.map(row => [row.id, row.kind]), [['zai-coding-cn', 'glm-cn'], ['zai-coding-cn::team', 'glm-cn-team']]);
    const team = result.rows[1];
    assert.equal(team.status, 'ok');
    assert.equal(team.source, 'glm-team-plan-usage');
    assert.equal(team.name, 'zai-coding-cn');
    assert.equal(team.dashboardUrl, 'https://bigmodel.cn/coding-plan/personal/usage');
    assert.deepEqual(team.metrics.map(metric => [metric.label, metric.usedPercent]), [['rolling', 10], ['weekly', 20]]);
    const teamRequest = f.state.requests.find(request => request.url.endsWith('?type=2'));
    assert.equal(teamRequest.url, 'https://open.bigmodel.cn/api/monitor/usage/quota/limit?type=2');
    assert.equal(teamRequest.options.headers.Authorization, 'team-secret');
    assert.equal(teamRequest.options.headers['bigmodel-organization'], 'org-123');
    assert.equal(teamRequest.options.headers['bigmodel-project'], 'proj-456');
    // The personal row keeps its unscoped request; only one request per row.
    const personal = f.state.requests.filter(request => !request.url.endsWith('?type=2'));
    assert.equal(personal.length, 1);
    assert.equal(personal[0].url, 'https://open.bigmodel.cn/api/monitor/usage/quota/limit');
    assert.equal(personal[0].options.headers['bigmodel-organization'], undefined);
    assert.equal(f.state.requests.length, 2);
    // Scope identifiers and credentials never reach the client snapshot.
    const serialized = JSON.stringify(result);
    for (const value of ['org-123', 'proj-456', 'team-secret', 'teamPlan', 'bigmodel-organization']) assert.equal(serialized.includes(value), false);
    // Per-provider refresh addresses the team row by its own id and hits its cache.
    const only = await f.manager.snapshot({ refresh: true, provider: 'zai-coding-cn::team' });
    assert.deepEqual(only.rows.map(row => row.id), ['zai-coding-cn::team']);
    assert.equal(only.rows[0].status, 'ok');
    // A provider with no team configuration yields no team row.
    f.state.teamPlans = {};
    assert.deepEqual((await f.manager.snapshot()).rows.map(row => row.id), ['zai-coding-cn']);
    f.state.teamPlans = { 'zai-coding-plan': { organizationId: '', projectId: '' } };
    assert.deepEqual((await f.manager.snapshot()).rows.map(row => row.id), ['zai-coding-cn']);
  } finally { await f.manager.dispose(); }
});

test('GLM Team Plan: no-plan and empty replies are states, not outages; an empty success without IDs asks for the scope', async () => {
  const f = fixture({ providers: { zai: { apiKeyEnv: 'ZAI_API_KEY' } }, keys: { ZAI_API_KEY: 'zai-secret' } });
  f.state.teamPlans = { 'zai-coding-plan': { organizationId: '', projectId: '' } };
  f.state.response = { code: 400, msg: '当前用户不存在coding plan', success: false };
  try {
    const result = await f.manager.snapshot();
    assert.deepEqual(result.rows.map(row => [row.id, row.kind]), [['zai', 'zai-coding-plan'], ['zai::team', 'zai-coding-plan-team']]);
    assert.equal(result.rows[0].status, 'no-plan', 'the personal monitor rejects a team key the same way');
    const team = result.rows[1];
    assert.equal(team.status, 'no-plan');
    assert.equal(team.source, 'glm-team-plan-usage');
    assert.deepEqual(team.metrics, []);
    assert.equal(team.dashboardUrl, 'https://z.ai/manage-apikey/subscription');
    const request = f.state.requests.find(item => item.url.startsWith('https://api.z.ai/') && item.url.endsWith('?type=2'));
    assert.equal(f.state.requests.length, 2);
    assert.equal(request.url, 'https://api.z.ai/api/monitor/usage/quota/limit?type=2');
    assert.equal(request.options.headers.Authorization, 'zai-secret');
    assert.equal(request.options.headers['bigmodel-organization'], undefined);
    assert.equal(request.options.headers['bigmodel-project'], undefined);
    // Upstream error text is mapped to a status, never echoed.
    assert.equal(JSON.stringify(result).includes('coding plan'), false);
    // Live-verified shapes: an empty success is a scope request without IDs and
    // "no plan" with them; the personal row keeps its generic parse failure.
    f.state.response = { code: 200, msg: '操作成功', data: {}, success: true };
    f.advance(120_001);
    let empty = await f.manager.snapshot();
    assert.deepEqual(empty.rows.map(row => row.status), ['invalid-response', 'team-scope-required']);
    assert.equal(empty.rows[1].source, 'glm-team-plan-usage');
    f.state.teamPlans = { 'zai-coding-plan': { organizationId: 'org', projectId: 'proj' } };
    empty = await f.manager.snapshot();
    assert.equal(empty.rows[1].status, 'no-plan');
    const scoped = f.state.requests.at(-1);
    assert.equal(scoped.url, 'https://api.z.ai/api/monitor/usage/quota/limit?type=2');
    assert.equal(scoped.options.headers['bigmodel-organization'], 'org');
    assert.equal(scoped.options.headers['bigmodel-project'], 'proj');
    assert.equal(JSON.stringify(empty).includes('org'), false);
    // Transport failures on the team monitor keep the ordinary error mapping.
    f.state.code = 403;
    f.advance(120_001);
    const forbidden = await f.manager.snapshot();
    assert.equal(forbidden.rows[1].status, 'forbidden');
  } finally { await f.manager.dispose(); }
});

test('GLM Team Plan rows inherit a blocked route, skip unknown kinds and survive a throwing settings provider', async () => {
  const blocked = fixture({ providers: { 'zai-coding-cn': { baseURL: 'https://open.bigmodel.cn/api/coding/paas/v4', apiKeyEnv: 'not a ref' } }, teamPlans: { 'glm-cn': { organizationId: 'org', projectId: 'proj' } } });
  try {
    const result = await blocked.manager.snapshot();
    assert.deepEqual(result.rows.map(row => [row.id, row.status]), [['zai-coding-cn', 'missing-credential'], ['zai-coding-cn::team', 'missing-credential']]);
    assert.equal(blocked.state.requests.length, 0);
  } finally { await blocked.manager.dispose(); }
  const other = fixture({ providers: { deepseek: { apiKeyEnv: 'CUSTOM_KEY' } }, teamPlans: { 'glm-cn': { organizationId: '', projectId: '' } } });
  try {
    assert.deepEqual((await other.manager.snapshot()).rows.map(row => row.id), ['deepseek']);
  } finally { await other.manager.dispose(); }
  const throwing = fixture({ providers: { zai: { apiKeyEnv: 'ZAI_API_KEY' } }, keys: { ZAI_API_KEY: 'k' } });
  throwing.manager.teamPlansProvider = () => { throw new Error('settings unavailable'); };
  try {
    assert.deepEqual((await throwing.manager.snapshot()).rows.map(row => row.id), ['zai']);
  } finally { await throwing.manager.dispose(); }
});

test('domestic GLM Standard API uses only the supplied balance and resource endpoints with Bearer auth', async () => {
  const f = fixture({ providers: {
    'zai-api': { baseURL: 'https://open.bigmodel.cn/api/paas/v4', apiKeyEnv: 'ZAI_API_KEY' },
  }, keys: { ZAI_API_KEY: 'zai-standard-secret' } });
  const balanceUrl = 'https://open.bigmodel.cn/api/biz/account/query-customer-account-report';
  const packagesUrl = 'https://open.bigmodel.cn/api/biz/tokenAccounts/list/my?pageNum=1&pageSize=50&filterEnabled=false';
  const payloads = {
    [balanceUrl]: { code: 200, msg: 'ok', success: true, data: { balance: 8.66, availableBalance: 8.66, rechargeAmount: 10, giveAmount: 0.25, totalSpendAmount: 1.59, frozenBalance: 0 } },
    [packagesUrl]: { code: 200, total: 1, rows: [{ resourcePackageName: 'Token Bundle', consumeType: 'TOKENS', tokensMagnitude: 1000, tokenBalance: 950, availableBalance: 950, status: 'EFFECTIVE', displayStatus: 'ACTIVE', expirationTime: '2026-12-11T16:17:58', suitableModel: 'GLM-4', suitableScene: 'Coding', customerId: 'customer-private', orderNo: 'order-private', tokenNo: 'token-private' }] },
  };
  f.manager.fetcher = async (url, options) => {
    f.state.requests.push({ url, options });
    return Response.json(payloads[url]);
  };
  try {
    const result = await f.manager.snapshot();
    const row = result.rows[0];
    assert.equal(row.kind, 'glm-standard-cn');
    assert.equal(row.status, 'ok');
    assert.equal(row.source, 'glm-standard-api');
    assert.deepEqual(row.metrics.map(metric => metric.type), ['balance', 'resource-package']);
    assert.equal(row.metrics[0].amount, '8.66');
    assert.equal(row.metrics[0].spent, '1.59');
    assert.equal(row.metrics[1].remaining, 950);
    assert.equal(row.metrics[1].unit, 'tokens');
    assert.deepEqual(f.state.requests.map(request => request.url).sort(), [balanceUrl, packagesUrl].sort());
    assert(f.state.requests.every(request => request.options.headers.Authorization === 'Bearer zai-standard-secret'));
    const serialized = JSON.stringify(result);
    for (const secret of ['zai-standard-secret', 'customer-private', 'order-private', 'token-private']) assert.equal(serialized.includes(secret), false);
  } finally { await f.manager.dispose(); }
});

test('international Z.AI Standard API remains status-only without endpoint evidence', async () => {
  const f = fixture({ providers: {
    'zai-api': { baseURL: 'https://api.z.ai/api/paas/v4', apiKeyEnv: 'ZAI_API_KEY' },
  }, keys: { ZAI_API_KEY: 'zai-standard-secret' } });
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].kind, 'unsupported');
    assert.equal(result.rows[0].status, 'unsupported');
    assert.equal(result.rows[0].reason, 'zai-api-status-only');
    assert.equal(result.rows[0].dashboardUrl, 'https://z.ai/manage-apikey/billing');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('GLM Standard API package paging is bounded and validates complete page sets', async () => {
  const f = fixture({ providers: {
    'zai-api': { baseURL: 'https://open.bigmodel.cn/api/paas/v4', apiKeyEnv: 'ZAI_API_KEY' },
  }, keys: { ZAI_API_KEY: 'zai-standard-secret' } });
  const firstUrl = 'https://open.bigmodel.cn/api/biz/tokenAccounts/list/my?pageNum=1&pageSize=50&filterEnabled=false';
  const secondUrl = 'https://open.bigmodel.cn/api/biz/tokenAccounts/list/my?pageNum=2&pageSize=50&filterEnabled=false';
  const row = index => ({ resourcePackageName: `Bundle ${index}`, consumeType: 'TIMES', tokensMagnitude: 10, availableBalance: 5, status: 'EFFECTIVE', displayStatus: 'ACTIVE' });
  const payloads = {
    'https://open.bigmodel.cn/api/biz/account/query-customer-account-report': { code: 200, success: true, data: { availableBalance: 1 } },
    [firstUrl]: { code: 200, total: 51, rows: Array.from({ length: 50 }, (_, index) => row(index + 1)) },
    [secondUrl]: { code: 200, total: 51, rows: [row(51)] },
  };
  f.manager.fetcher = async (url, options) => {
    f.state.requests.push({ url, options });
    return Response.json(payloads[url]);
  };
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].status, 'ok');
    assert.equal(result.rows[0].metrics.filter(metric => metric.type === 'resource-package').length, 51);
    assert(f.state.requests.some(request => request.url === secondUrl));
    assert(f.state.requests.every(request => request.options.headers.Authorization === 'Bearer zai-standard-secret'));
  } finally { await f.manager.dispose(); }
});

test('an explicit Standard API URL overrides the built-in Z.AI Coding Plan route ID', async () => {
  const f = fixture({ providers: {
    zai: { baseURL: 'https://api.z.ai/api/paas/v4', apiKeyEnv: 'ZAI_API_KEY' },
  }, keys: { ZAI_API_KEY: 'zai-standard-secret' } });
  try {
    const result = await f.manager.snapshot();
    assert.equal(result.rows[0].reason, 'zai-api-status-only');
    assert.equal(f.state.requests.length, 0);
  } finally { await f.manager.dispose(); }
});

test('simultaneous consumers share a single in-flight account query', async () => {
  const f = fixture();
  let release;
  f.manager.fetcher = async (...args) => {
    f.state.requests.push(args);
    await new Promise(resolve => { release = resolve; });
    return Response.json(balance('5.00'));
  };
  try {
    const one = f.manager.snapshot();
    const two = f.manager.snapshot();
    // Yield event-loop work, without sleeping or creating timers.
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(f.state.requests.length, 1);
    release();
    assert.deepEqual((await one).rows, (await two).rows);
  } finally { await f.manager.dispose(); }
});

test('account wallets remain separate, and account queries never cache across calls', async () => {
  const f = fixture({ providers: {} });
  let identity = 'account-one', calls = 0;
  f.services.llm.listConfigurableProviders = () => [{ provider: 'deepseek-account', displayName: 'Account', settingsNs: 'account', settingsPath: [] }];
  f.services.settings.describe = () => [{ ns: 'account', value: {} }];
  f.services.deepseekAccount = {
    getState: () => ({ status: 'credential-stored' }),
    getDeviceIdentity: () => ({ userId: identity }),
    getBalance: () => { calls++; return { status: 'ready', value: [{ currency: 'CNY', balance: '10.00' }], bonusWallets: [{ currency: 'CNY', balance: '2.00' }] }; },
  };
  try {
    const result = await f.manager.snapshot();
    assert.deepEqual(result.rows[0].metrics.map(metric => metric.wallet), ['recharge', 'bonus']);
    await f.manager.snapshot();
    assert.equal(calls, 2);
    assert.equal(f.manager.cache.size, 0);
    identity = 'account-two';
    await f.manager.snapshot();
    assert.equal(calls, 3);
    f.services.deepseekAccount.getState = () => ({ status: 'signed-out' });
    assert.deepEqual((await f.manager.snapshot()).rows, []);
  } finally { await f.manager.dispose(); }
});

test('network helper rejects arbitrary destinations and redirects without disclosing errors', async () => {
  let calls = 0;
  await assert.rejects(readJson('https://evil.example', 'secret', { fetcher: () => { calls++; } }), /unsupported/);
  assert.equal(calls, 0);
  await assert.rejects(readJson('https://api.deepseek.com/user/balance', 'secret', { fetcher: (_url, opts) => {
    assert.equal(opts.redirect, 'error');
    throw Error('secret-in-error');
  } }), error => error.message === 'network');
  await assert.rejects(readJson('https://api.deepseek.com/user/balance', 'secret', { fetcher: () => new Response('x'.repeat(1048577)) }), /invalid-response/);
});

test('one shared operation backs both authenticated Fetch and the agent tool', async () => {
  const f = fixture();
  let route, tool;
  const effects = [];
  const ctx = {
    ...f.services,
    get: key => f.services[key],
    provide: () => {},
    connection: { fetch: { register: value => { route = value; return async () => {}; } } },
    tools: { register: value => { tool = value; return () => {}; } },
    effect: fn => effects.push(fn()),
  };
  assert.deepEqual(inject, ['llm', 'settings', 'credentials', 'connection', 'tools']);
  // Use an unsupported route: registration parity requires no real network.
  f.state.providers = { relay: { baseURL: 'https://relay.example' } };
  apply(ctx);
  try {
    assert.equal(route.path, '/api/provider-quota');
    assert.deepEqual(route.methods, ['GET', 'POST']);
    const toolResult = await tool.execute({ provider: 'relay' });
    const uiResult = await (await route.fetch(new Request('http://127.0.0.1/api/provider-quota?provider=relay', { method: 'POST' }))).json();
    assert.deepEqual(toolResult.rows, uiResult.rows);
    assert.equal(uiResult.rows[0].status, 'unsupported');
  } finally {
    for (const cleanup of effects.reverse()) if (typeof cleanup === 'function') await cleanup();
    await f.manager.dispose();
  }
});
