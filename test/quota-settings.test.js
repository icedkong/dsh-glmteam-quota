import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_COLOR_THRESHOLDS, validateColorThresholds, validateCompanyDomainAliases, validateGlmTeamPlans, QuotaColorSettings, CompanyDomainAliasSettings, GlmTeamPlanSettings } from '../src/quota-settings.js';
import { apply } from '../index.js';

function fixture() {
  const state = { config: { unrelated: { keep: true } }, saves: 0, error: null, adminKey: undefined, legacyAdminKey: undefined };
  const entry = { id: 'fake-owned-entry' };
  const effects = [], routes = new Map(), tools = new Map();
  const editor = { async edit(target, change) {
    assert.equal(target, entry);
    if (state.error) throw state.error;
    state.config = change(state.config, {});
    state.saves++;
  } };
  const credentials = {
    async resolve(ref) { if (ref === 'OPENAI_ADMIN_KEY_DSH' && state.adminKey) return { value: state.adminKey, source: 'provider-managed' }; if (ref === 'OPENAI_ADMIN_KEY' && state.legacyAdminKey) return { value: state.legacyAdminKey, source: 'provider-managed' }; return undefined; },
    async describe(ref) { const configured = ref === 'OPENAI_ADMIN_KEY_DSH' ? Boolean(state.adminKey) : ref === 'OPENAI_ADMIN_KEY' && Boolean(state.legacyAdminKey); return { configured, source: configured ? 'provider-managed' : undefined, writable: true }; },
    async set(ref, value) { assert.equal(ref, 'OPENAI_ADMIN_KEY_DSH'); state.adminKey = value; },
    async unset(ref) { assert.equal(ref, 'OPENAI_ADMIN_KEY_DSH'); state.adminKey = undefined; },
  };
  const ctx = {
    fiber: { entry },
    get: key => key === 'configEditor' ? editor : undefined,
    llm: { listProviders: () => [], listConfigurableProviders: () => [] },
    settings: { describe: () => [] }, credentials, provide: () => {},
    connection: { fetch: { register: route => { routes.set(route.path, route); return async () => {}; } } },
    tools: { register: tool => { tools.set(tool.name, tool); return () => {}; } },
    effect: fn => effects.push(fn()),
  };
  // Tests use only in-memory credentials and never touch a local file.
  apply(ctx, state.config);
  const route = routes.get('/api/provider-quota-settings');
  return { state, routes, credentials, tool: tools.get('quota_color_settings'), route,
    async browser() { return (await route.fetch(new Request('http://localhost/api/provider-quota-settings'))).json(); },
    post(value, csrf, type = 'application/json') {
      return route.fetch(new Request('http://localhost/api/provider-quota-settings', { method: 'POST', headers: { 'Content-Type': type, ...(csrf ? { 'X-Quota-Settings-CSRF': csrf } : {}) }, body: JSON.stringify(value) }));
    },
    async close() { for (const cleanup of effects.reverse()) if (typeof cleanup === 'function') await cleanup(); },
  };
}
async function using(run) { const h = fixture(); try { await run(h); } finally { await h.close(); } }

test('default thresholds are green 50 and orange 25; custom boundaries retain a fixed palette', () => {
  assert.deepEqual(validateColorThresholds(), { greenMin: 50, orangeMin: 25 });
  for (const policy of [{ greenMin: 100, orangeMin: 0 }, { greenMin: 80, orangeMin: 20 }, { greenMin: 1, orangeMin: 0 }]) assert.deepEqual(validateColorThresholds(policy), policy);
  assert.deepEqual(DEFAULT_COLOR_THRESHOLDS, { greenMin: 50, orangeMin: 25 });
});

test('invalid, equal, fractional, empty or color-changing threshold payloads cannot persist', () => {
  for (const value of [null, [], {}, { greenMin: '75', orangeMin: 25 }, { greenMin: 75, orangeMin: '' }, { greenMin: 25, orangeMin: 25 }, { greenMin: 10, orangeMin: 20 }, { greenMin: 101, orangeMin: 25 }, { greenMin: 75, orangeMin: -1 }, { greenMin: 75.5, orangeMin: 25 }, { greenMin: NaN, orangeMin: 25 }, { greenMin: 75, orangeMin: 25, greenColor: 'blue' }]) assert.throws(() => validateColorThresholds(value), /invalid-thresholds/);
});

test('company domain aliases normalize hosts and reject ambiguous or unsafe inputs', () => {
  assert.deepEqual(validateCompanyDomainAliases([{ label: '  Brand  ', domains: ['API.Example.com.', 'other.example.net'] }]), [
    { label: 'Brand', domains: ['api.example.com', 'other.example.net'] },
  ]);
  for (const value of [
    null, {}, [{ label: 'Brand', domains: [] }], [{ label: '', domains: ['example.com'] }],
    [{ label: 'Brand', domains: ['example.com', 'EXAMPLE.COM'] }],
    [{ label: 'Brand', domains: ['example.com'] }, { label: ' brand ', domains: ['example.net'] }],
    [{ label: 'Brand', domains: ['https://example.com/path'] }], [{ label: 'Brand', domains: ['127.0.0.1'] }],
    [{ label: 'Brand', domains: ['example.com:443'] }], [{ label: 'Brand|Other', domains: ['example.com'] }],
    [{ label: 'Brand\nOther', domains: ['example.com'] }], [{ label: 'Brand', domains: ['example.com'], extra: true }],
  ]) assert.throws(() => validateCompanyDomainAliases(value), /invalid-domain-aliases/);
});

test('company domain alias settings do not claim a failed write or mutate stored state', async () => {
  const readonly = new CompanyDomainAliasSettings();
  assert.equal(readonly.read().writable, false);
  await assert.rejects(readonly.save([{ label: 'Brand', domains: ['example.com'] }]), /settings-unavailable/);
  const failed = new CompanyDomainAliasSettings([], async () => { throw Error('private-profile-content'); });
  await assert.rejects(failed.save([{ label: 'Brand', domains: ['example.com'] }]), error => error.message === 'save-failed');
  assert.deepEqual(failed.read().domainAliases, []);
});

test('settings cannot claim saved when storage is unavailable or rejects a write', async () => {
  const readonly = new QuotaColorSettings();
  assert.equal(readonly.read().writable, false);
  await assert.rejects(readonly.save({ greenMin: 80, orangeMin: 20 }), /settings-unavailable/);
  const failed = new QuotaColorSettings(undefined, async () => { throw Error('private-profile-content'); });
  await assert.rejects(failed.save({ greenMin: 80, orangeMin: 20 }), error => error.message === 'save-failed');
  assert.deepEqual(failed.read().colorThresholds, { greenMin: 50, orangeMin: 25 });
});

test('shared Host threshold operation uses configEditor and preserves unrelated configuration', async () => using(async h => {
  const initial = await h.tool.execute({ action: 'read' });
  assert.equal(initial.ok, true);
  assert.equal(initial.writable, true);
  assert.equal(Object.hasOwn(initial, 'csrf'), false);
  const saved = await h.tool.execute({ action: 'set', greenMin: 80, orangeMin: 20 });
  assert.equal(saved.saved, true);
  assert.deepEqual(h.state.config, { unrelated: { keep: true }, colorThresholds: { greenMin: 80, orangeMin: 20 } });
  assert.deepEqual((await h.browser()).colorThresholds, saved.colorThresholds);
  assert.equal(h.state.saves, 1);
  assert.equal(h.route.requestBody, 'buffered');
}));

test('settings page and agent share threshold validation and successful persisted values', async () => using(async h => {
  const initial = await h.browser();
  const response = await h.post({ greenMin: 90, orangeMin: 30 }, initial.csrf);
  assert.equal(response.status, 200);
  const saved = await response.json();
  assert.equal(saved.saved, true);
  assert.deepEqual((await h.tool.execute({ action: 'read' })).colorThresholds, saved.colorThresholds);
  assert.deepEqual(h.state.config.colorThresholds, { greenMin: 90, orangeMin: 30 });
  const invalid = await h.post({ greenMin: 10, orangeMin: 20 }, initial.csrf);
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { error: 'invalid-thresholds' });
  assert.deepEqual(await h.tool.execute({ action: 'set', greenMin: 10, orangeMin: 20 }), { ok: false, error: 'invalid-thresholds' });
  assert.equal(h.state.saves, 1);
}));

test('domain alias settings persist through configEditor, survive reread, and merge with color settings', async () => using(async h => {
  const initial = await h.browser();
  assert.deepEqual(initial.domainAliases, []);
  const aliases = [{ label: 'Acme', domains: ['api.acme.example', 'acme-ai.example'] }];
  const response = await h.post({ action: 'saveDomainAliases', domainAliases: aliases }, initial.csrf);
  assert.equal(response.status, 200);
  const saved = await response.json();
  assert.equal(saved.saved, true);
  assert.equal(saved.savedItem, 'domainAliases');
  assert.deepEqual(saved.domainAliases, aliases);
  assert.deepEqual(h.state.config.domainAliases, aliases);
  assert.deepEqual((await h.browser()).domainAliases, aliases);
  const colors = await h.post({ greenMin: 80, orangeMin: 20 }, saved.csrf);
  assert.equal(colors.status, 200);
  assert.deepEqual(h.state.config, { unrelated: { keep: true }, domainAliases: aliases, colorThresholds: { greenMin: 80, orangeMin: 20 } });
  assert.equal(h.state.saves, 2);
}));

test('domain alias API validates CSRF, payload shape, and configuration conflicts', async () => using(async h => {
  const initial = await h.browser();
  const missingCsrf = await h.post({ action: 'saveDomainAliases', domainAliases: [{ label: 'Brand', domains: ['example.com'] }] }, undefined);
  assert.equal(missingCsrf.status, 403);
  const invalid = await h.post({ action: 'saveDomainAliases', domainAliases: [{ label: 'Brand', domains: ['https://example.com/path'] }] }, initial.csrf);
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { error: 'invalid-domain-aliases' });
  const missingValue = await h.post({ action: 'saveDomainAliases' }, initial.csrf);
  assert.equal(missingValue.status, 400);
  const extra = await h.post({ action: 'saveDomainAliases', domainAliases: [], unexpected: true }, initial.csrf);
  assert.equal(extra.status, 400);
  h.state.error = Object.assign(new Error('private profile path'), { code: 'CONFIG_CONFLICT' });
  const conflict = await h.post({ action: 'saveDomainAliases', domainAliases: [{ label: 'Brand', domains: ['example.com'] }] }, initial.csrf);
  assert.equal(conflict.status, 409);
  const conflictBody = await conflict.json();
  assert.deepEqual(conflictBody, { error: 'settings-conflict' });
  assert.equal(h.state.saves, 0);
  assert.equal(JSON.stringify(conflictBody).includes('private profile path'), false);
}));

test('forged settings requests cannot change profile values', async () => using(async h => {
  const browser = await h.browser();
  for (const [csrf, type] of [[undefined, 'application/json'], ['x'.repeat(43), 'application/json'], [browser.csrf, 'text/plain']]) {
    const response = await h.post({ greenMin: 80, orangeMin: 20 }, csrf, type);
    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), { error: 'forbidden' });
  }
  assert.equal(h.state.saves, 0);
}));

test('threshold save conflicts are fixed errors and do not overwrite active values', async () => using(async h => {
  const browser = await h.browser();
  h.state.error = Object.assign(new Error('private config path'), { code: 'CONFIG_CONFLICT' });
  const response = await h.post({ greenMin: 80, orangeMin: 20 }, browser.csrf);
  assert.equal(response.status, 409);
  assert.deepEqual(await response.json(), { error: 'settings-conflict' });
  assert.deepEqual((await h.tool.execute()).colorThresholds, { greenMin: 50, orangeMin: 25 });
}));

test('quota snapshots expose the same current color policy but never the settings CSRF token', async () => using(async h => {
  const browser = await h.browser();
  await h.tool.execute({ action: 'set', greenMin: 85, orangeMin: 15 });
  const quota = await h.routes.get('/api/provider-quota').fetch(new Request('http://localhost/api/provider-quota'));
  const snapshot = await quota.json();
  assert.deepEqual(snapshot.colorThresholds, { greenMin: 85, orangeMin: 15 });
  assert.equal(JSON.stringify(snapshot).includes(browser.csrf), false);
}));

test('OpenAI Admin Key status exposes only presence/source and never its value', async () => using(async h => {
  const absent = await h.browser();
  assert.deepEqual(absent.adminKey, { configured: false, source: null });
  h.state.legacyAdminKey = 'sk-admin-legacy-ref-fixture';
  assert.deepEqual((await h.browser()).adminKey, { configured: true, source: 'credential-ref' });
  h.state.adminKey = 'sk-admin-stored-key-fixture';
  const stored = await h.browser();
  assert.deepEqual(stored.adminKey, { configured: true, source: 'credential-store' });
  assert.equal(JSON.stringify(stored).includes(h.state.adminKey), false);
}));

test('OpenAI Admin Key is entered through the API extras settings endpoint and saved only to DSH credentials', async () => using(async h => {
  const secret = 'sk-admin-fixture-secret-for-settings';
  const before = await h.browser();
  assert.deepEqual(before.adminKey, { configured: false, source: null });
  const response = await h.post({ action: 'saveAdminKey', adminKey: secret }, before.csrf);
  assert.equal(response.status, 200);
  const saved = await response.json();
  assert.equal(saved.saved, true);
  assert.equal(saved.savedItem, 'adminKey');
  assert.deepEqual(saved.adminKey, { configured: true, source: 'credential-store' });
  assert.equal(JSON.stringify(saved).includes(secret), false);
  assert.equal(h.state.adminKey, secret);
  assert.equal(JSON.stringify(h.state.config).includes(secret), false);
  assert.deepEqual(h.state.config, { unrelated: { keep: true } });
}));

test('Admin key saved in DSH credentials overrides a legacy dedicated credential reference', async () => using(async h => {
  h.state.legacyAdminKey = 'sk-admin-legacy-ref-fixture';
  const initial = await h.browser();
  assert.deepEqual(initial.adminKey, { configured: true, source: 'credential-ref' });
  const newKey = 'sk-admin-new-dsh-key-fixture';
  const response = await h.post({ action: 'saveAdminKey', adminKey: newKey }, initial.csrf);
  assert.equal(response.status, 200);
  assert.deepEqual((await response.json()).adminKey, { configured: true, source: 'credential-store' });
  assert.equal((await h.credentials.resolve('OPENAI_ADMIN_KEY_DSH')).value, newKey);
  assert.equal(h.state.legacyAdminKey, 'sk-admin-legacy-ref-fixture');
}));

test('Admin form rejects inference keys and malformed values without echo or profile writes', async () => using(async h => {
  const initial = await h.browser();
  for (const key of ['sk-proj-inference-fixture', 'sk-admin-short']) {
    const response = await h.post({ action: 'saveAdminKey', adminKey: key }, initial.csrf);
    assert.equal(response.status, 400);
    const payload = await response.json();
    assert.deepEqual(payload, { error: 'invalid-admin-key' });
    assert.equal(JSON.stringify(payload).includes(key), false);
  }
  assert.equal(h.state.adminKey, undefined);
  assert.deepEqual(h.state.config, { unrelated: { keep: true } });
}));

test('Admin form requires CSRF and stores secrets only through the credentials service', async () => using(async h => {
  const response = await h.post({ action: 'saveAdminKey', adminKey: 'sk-admin-valid-fixture-key' }, undefined);
  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { error: 'forbidden' });
  assert.equal(h.state.adminKey, undefined);
  assert.equal(h.state.saves, 0);
}));

test('GLM Team Plan settings validate scope IDs, never leak into other config keys and persist through the settings route', async () => {
  assert.deepEqual(validateGlmTeamPlans(undefined), {});
  assert.deepEqual(validateGlmTeamPlans({}), {});
  assert.deepEqual(validateGlmTeamPlans({ 'glm-cn': { organizationId: ' org-1 ', projectId: 'proj-1' } }), { 'glm-cn': { organizationId: 'org-1', projectId: 'proj-1' } });
  assert.deepEqual(validateGlmTeamPlans({ 'zai-coding-plan': {} }), { 'zai-coding-plan': { organizationId: '', projectId: '' } });
  assert.deepEqual(validateGlmTeamPlans({ 'zai-coding-plan': { organizationId: null, projectId: undefined } }), { 'zai-coding-plan': { organizationId: '', projectId: '' } });
  for (const bad of [[], null, 'x', 1, { deepseek: { organizationId: '', projectId: '' } }, { 'glm-cn-team': { organizationId: '', projectId: '' } },
    { 'glm-cn': { organizationId: 'a', projectId: '' } }, { 'glm-cn': { organizationId: '', projectId: 'b' } },
    { 'glm-cn': { organizationId: 'a b', projectId: 'c' } }, { 'glm-cn': { organizationId: '中文', projectId: 'c' } }, { 'glm-cn': { organizationId: 'a\nb', projectId: 'c' } }, { 'glm-cn': { organizationId: 'a\tb', projectId: 'c' } },
    { 'glm-cn': { organizationId: 'a', projectId: 'c', extra: 1 } }, { 'glm-cn': { organizationId: 'x'.repeat(129), projectId: 'c' } },
    { 'glm-cn': { organizationId: 1, projectId: 'c' } }, { 'glm-cn': null }, { 'glm-cn': [] }, { 'glm-cn': 'a' }]) {
    assert.throws(() => validateGlmTeamPlans(bad), { code: 'invalid-team-plan' }, JSON.stringify(bad));
  }
  const f = fixture();
  try {
    const browser = await f.browser();
    assert.deepEqual(browser.glmTeamPlans, {});
    assert.equal(browser.writable, true);
    const csrf = browser.csrf;
    const saved = await f.post({ action: 'saveGlmTeamPlans', glmTeamPlans: { 'glm-cn': { organizationId: ' org-9 ', projectId: 'proj-9' } } }, csrf);
    assert.equal(saved.status, 200);
    const body = await saved.json();
    assert.equal(body.saved, true);
    assert.equal(body.savedItem, 'glmTeamPlans');
    assert.deepEqual(body.glmTeamPlans, { 'glm-cn': { organizationId: 'org-9', projectId: 'proj-9' } });
    assert.deepEqual(f.state.config.glmTeamPlans, { 'glm-cn': { organizationId: 'org-9', projectId: 'proj-9' } });
    assert.equal(f.state.config.unrelated.keep, true);
    assert.deepEqual((await f.browser()).glmTeamPlans, { 'glm-cn': { organizationId: 'org-9', projectId: 'proj-9' } });
    // Turning it off is an empty payload; validation, CSRF and extra keys never write.
    const off = await f.post({ action: 'saveGlmTeamPlans', glmTeamPlans: {} }, csrf);
    assert.equal(off.status, 200);
    assert.deepEqual(f.state.config.glmTeamPlans, {});
    const writes = f.state.saves;
    const invalid = await f.post({ action: 'saveGlmTeamPlans', glmTeamPlans: { 'glm-cn': { organizationId: 'a', projectId: '' } } }, csrf);
    assert.equal(invalid.status, 400);
    assert.equal((await invalid.json()).error, 'invalid-team-plan');
    const missing = await f.post({ action: 'saveGlmTeamPlans' }, csrf);
    assert.equal(missing.status, 400);
    const extra = await f.post({ action: 'saveGlmTeamPlans', glmTeamPlans: {}, colorThresholds: { greenMin: 90, orangeMin: 10 } }, csrf);
    assert.equal(extra.status, 400);
    assert.equal((await extra.json()).error, 'invalid-team-plan');
    const noCsrf = await f.post({ action: 'saveGlmTeamPlans', glmTeamPlans: { 'glm-cn': { organizationId: 'a', projectId: 'b' } } });
    assert.equal(noCsrf.status, 403);
    assert.equal(f.state.saves, writes);
    assert.deepEqual(f.state.config.glmTeamPlans, {});
    assert.deepEqual(f.state.config.colorThresholds, undefined);
  } finally { await f.close(); }
});

test('GlmTeamPlanSettings reads copies, writes validated values and refuses without a writer', async () => {
  const writes = [];
  const settings = new GlmTeamPlanSettings({ 'glm-cn': { organizationId: 'a', projectId: 'b' } }, async value => { writes.push(value); });
  const read = settings.read();
  assert.deepEqual(read, { glmTeamPlans: { 'glm-cn': { organizationId: 'a', projectId: 'b' } } });
  read.glmTeamPlans['glm-cn'].organizationId = 'changed';
  assert.equal(settings.read().glmTeamPlans['glm-cn'].organizationId, 'a');
  assert.equal((await settings.save({})).saved, true);
  assert.deepEqual(writes, [{}]);
  assert.deepEqual(settings.read(), { glmTeamPlans: {} });
  await assert.rejects(settings.save({ 'glm-cn': { organizationId: 'a', projectId: '' } }), { code: 'invalid-team-plan' });
  assert.deepEqual(writes, [{}]);
  await assert.rejects(new GlmTeamPlanSettings().save({}), { code: 'settings-unavailable' });
  await assert.rejects(new GlmTeamPlanSettings({}, async () => { throw Object.assign(new Error('x'), { code: 'edit-conflict' }); }).save({}), { code: 'settings-conflict' });
  await assert.rejects(new GlmTeamPlanSettings({}, async () => { throw new Error('x'); }).save({}), { code: 'save-failed' });
  assert.throws(() => new GlmTeamPlanSettings({ 'glm-cn': { organizationId: 'a' } }), { code: 'invalid-team-plan' });
});
