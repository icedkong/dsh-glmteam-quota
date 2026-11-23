import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../client.js', import.meta.url), 'utf8');
const enMeta = JSON.parse(await readFile(new URL('../locale/en.json', import.meta.url), 'utf8')).meta;
const zhMeta = JSON.parse(await readFile(new URL('../locale/zh.json', import.meta.url), 'utf8')).meta;
const packageManifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const pureBlock = source.split('// BEGIN PURE LAYOUT')[1]?.split('// END PURE LAYOUT')[0];
assert.ok(pureBlock);
// Execute only arithmetic / classification helpers. No React, DOM or browser
// emulation: these checks do not assert real-page layout or visual success.
const { placeQuotaPopup, quotaTone, codexCreditsPresentation, formatCodexCreditsAmount, formatQuotaDate, formatQuotaCountdown, quotaBarTone, dockMetricItems, validColorThresholds, parseThresholdDraft, validProviderRouteId, normalizeDiscoveredModel, dedupeDiscoveredModels, providerModelsError, providerModelIssue, modelProviderRegistrableDomain, modelProviderCompanyFromUrl, modelProviderRouteHost, modelProviderGroupHostnames, providerIconKeyForGroupKey, modelProviderGroupRouteCounts, modelProviderRulesSnapshot, modelProviderCompanyCoverage, filterModelProviderCompanyGroups, BUNDLED_CLIENT_COMPANY_RULES, groupModelProvidersByCompany, hasSavedProviderSettings, providerRowSavedState } = vm.runInNewContext(`${pureBlock}\n({placeQuotaPopup,quotaTone,codexCreditsPresentation,formatCodexCreditsAmount,formatQuotaDate,formatQuotaCountdown,quotaBarTone,dockMetricItems,validColorThresholds,parseThresholdDraft,validProviderRouteId,normalizeDiscoveredModel,dedupeDiscoveredModels,providerModelsError,providerModelIssue,modelProviderRegistrableDomain,modelProviderCompanyFromUrl,modelProviderRouteHost,modelProviderGroupHostnames,providerIconKeyForGroupKey,modelProviderGroupRouteCounts,modelProviderRulesSnapshot,modelProviderCompanyCoverage,filterModelProviderCompanyGroups,BUNDLED_CLIENT_COMPANY_RULES,groupModelProvidersByCompany,hasSavedProviderSettings,providerRowSavedState})`, { URL });
const viewport = { left: 0, top: 0, width: 1280, height: 800 };
const rect = { left: 400, right: 700, top: 740, bottom: 768 };
const normalize = value => JSON.parse(JSON.stringify(value));
const managerStart = source.indexOf('function createProviderManager(context,');
const managerEnd = source.indexOf('function providerGroupSummary(group)', managerStart);
assert.ok(managerStart >= 0 && managerEnd > managerStart);
const createProviderManager = vm.runInNewContext(`${pureBlock}\n${source.slice(managerStart, managerEnd)}\ncreateProviderManager`, { URL, AbortController });
const getAtPath = (value, path) => path.reduce((current, key) => current == null ? undefined : current[key], value);
function providerManagerContext(options = {}) {
  const {
    registered = { ok: true, value: [] },
    directory = { ok: true, value: [] },
    settingsSnapshot = { view: { writable: true, namespaces: [] } },
    settingsEnsure = async () => {},
    credentialsDescribe = async () => ({ ok: true, value: {} }),
    settingsSchema = {},
  } = options;
  const resolve = value => typeof value === 'function' ? value() : value;
  const defaultRemote = {
    llm: { listProviders: () => resolve(registered), listConfigurableProviders: () => resolve(directory) },
    credentials: { describe: refs => credentialsDescribe(refs), set: async () => ({ ok: true }) },
    settings: { mutate: async () => ({ ok: true, value: {} }) },
  };
  const remote = Object.hasOwn(options, 'remote') ? options.remote : defaultRemote;
  const defaultModules = {
    manifest: {
      modules: [
        { id: 'dsh-glmteam-quota', inject: ['@deepseek-ai/dsh-api-remotes'] },
        { id: '@deepseek-ai/dsh-api-remotes', inject: [] },
      ],
      plugins: [{ id: '@deepseek-ai/dsh-api-remotes' }],
    },
    importError: () => undefined,
    entries: { state: { getSnapshot: () => ({ failures: [] }) } },
  };
  const modules = Object.hasOwn(options, 'modules') ? options.modules : defaultModules;
  const defaultLoader = { entries: () => [{ options: { name: '@deepseek-ai/dsh-api-remotes' }, fiber: { state: 2 } }] };
  const loader = Object.hasOwn(options, 'loader') ? options.loader : defaultLoader;
  const reflectGet = name => {
    if (typeof options.reflectGet === 'function') return options.reflectGet(name);
    if (name === 'modules') return modules;
    if (name === 'loader') return loader;
    if (name === 'remote') return remote;
    if (name === 'remote.llm') return remote?.llm;
    if (name === 'remote.credentials') return remote?.credentials;
    if (name === 'remote.settings') return remote?.settings;
    return undefined;
  };
  return {
    remote,
    reflect: { get: reflectGet },
    configForms: { describe: () => ({ ensure: settingsEnsure, getSnapshot: () => resolve(settingsSnapshot) }) },
    settingsSchema: {
      getPath: getAtPath,
      rehydrate: value => value,
      nodeAtPath: () => ({ type: 'object' }),
      // Match DSH SettingsSchemaService: hasPath delegates through its receiver.
      hasPath(value, path) {
        if (path.length === 0) return value !== undefined;
        const parent = this.getPath(value, path.slice(0, -1));
        const key = path[path.length - 1];
        if (Array.isArray(parent)) return Number(key) < parent.length;
        if (typeof parent !== 'object' || parent === null) return false;
        return key in parent;
      },
      ...settingsSchema,
    },
  };
}

test('saved-state processing preserves the SDK hasPath receiver for saved and empty user-layer paths', async () => {
  const entries = ['saved', 'default'].map(provider => ({ provider, settingsNs: 'pi', settingsPath: ['providers', provider] }));
  const value = { providers: { saved: {}, default: {} } };
  const user = { providers: { saved: {} } };
  const context = providerManagerContext({ directory: { ok: true, value: entries }, settingsSnapshot: { view: { writable: true, namespaces: [{ ns: 'pi', value, base: value, user }] } } });
  const unboundHasPath = context.settingsSchema.hasPath;
  assert.throws(() => unboundHasPath(user, ['providers', 'saved']), /getPath/, 'fixture must expose the real SDK receiver requirement');
  const manager = createProviderManager(context);
  try {
    await manager.load();
    assert.equal(manager.getSnapshot().status, 'ready');
    assert.equal(manager.getSnapshot().errorStage, null);
    assert.deepEqual(normalize(manager.getSnapshot().entries.map(row => row.savedConfiguration)), [true, false]);
  } finally { manager.dispose(); }
});

test('saved settings include whole-section user overrides without promoting defaults or changing editability', async () => {
  const entries = [
    { provider: 'whole-saved', settingsNs: 'whole-saved', settingsPath: [] },
    { provider: 'whole-default', settingsNs: 'whole-default', settingsPath: [] },
    { provider: 'nested', settingsNs: 'pi', settingsPath: ['providers', 'nested'] },
  ];
  const context = providerManagerContext({ directory: { ok: true, value: entries }, registered: { ok: true, value: [...entries.map(entry => ({ id: entry.provider })), { id: 'registered-only' }] }, settingsSnapshot: { view: { writable: true, namespaces: [
    { ns: 'whole-saved', value: {}, base: {}, user: { retryPolicy: { mode: 'normal' } } },
    { ns: 'whole-default', value: { defaultSetting: true }, base: { defaultSetting: true }, user: {} },
    { ns: 'pi', value: { providers: { nested: {} } }, base: {}, user: { providers: { nested: {} } } },
  ] } } });
  const manager = createProviderManager(context);
  try {
    await manager.load();
    assert.equal(manager.getSnapshot().status, 'ready');
    const rows = new Map(manager.getSnapshot().entries.map(row => [row.entry.provider, row]));
    assert.equal(rows.get('whole-saved').savedConfiguration, true);
    assert.equal(rows.get('whole-default').savedConfiguration, false);
    assert.equal(rows.get('nested').savedConfiguration, true);
    assert.equal(rows.get('registered-only').savedConfiguration, false);
    assert.equal(rows.get('whole-saved').supported, false, 'saving metadata does not make whole-section routes editable');
    assert.equal(rows.get('whole-saved').configured, false, 'do not change existing form modes');
  } finally { manager.dispose(); }
});

test('native authentication sort flags are strict, full-identity bound and removed after sign-out refresh', async () => {
  const entries = [
    { provider: 'deepseek-account', settingsNs: 'llm-deepseek-account', settingsPath: [] },
    { provider: 'deepseek-account', settingsNs: 'another-owner', settingsPath: [] },
    { provider: 'malformed-optional-auth', settingsNs: 'third-owner', settingsPath: [] },
  ];
  let stored = true;
  const manager = createProviderManager(providerManagerContext({ directory: { ok: true, value: entries }, settingsSnapshot: { view: { writable: true, namespaces: entries.map(entry => ({ ns: entry.settingsNs, value: {}, base: {}, user: {} })) } } }), {
    readRouteHosts: async () => ({ routes: entries.map((entry, index) => ({ ...entry, hostname: 'api.deepseek.com', ...(index === 0 && stored ? { authConfigured: true } : index === 2 ? { authConfigured: 'true' } : {}) })) }),
  });
  try {
    await manager.load();
    assert.deepEqual(normalize(manager.getSnapshot().entries.map(row => row.savedConfiguration)), [true, false, false]);
    stored = false;
    await manager.load();
    assert.deepEqual(normalize(manager.getSnapshot().entries.map(row => row.savedConfiguration)), [false, false, false]);
  } finally { manager.dispose(); }
});

test('a public configured credential counts as saved authentication, while activity and base templates alone do not', async () => {
  let configured = true;
  const entry = { provider: 'work', settingsNs: 'pi', settingsPath: ['providers', 'work'] };
  const value = { providers: { work: { apiKeyEnv: 'WORK_KEY' } } };
  const manager = createProviderManager(providerManagerContext({ directory: { ok: true, value: [entry] }, registered: { ok: true, value: [{ id: 'work' }] }, settingsSnapshot: { view: { writable: true, namespaces: [{ ns: 'pi', value, base: value, user: {} }] } }, credentialsDescribe: async () => ({ ok: true, value: { WORK_KEY: { configured, source: 'process' } } }) }));
  try {
    await manager.load();
    assert.equal(manager.getSnapshot().entries[0].savedConfiguration, true);
    configured = false;
    await manager.load();
    assert.equal(manager.getSnapshot().entries[0].savedConfiguration, false);
    assert.equal(manager.getSnapshot().entries[0].entry.active, true);
  } finally { manager.dispose(); }
});

test('custom provider route IDs use a conservative lowercase slug', () => {
  for (const value of ['acme', 'acme-gateway', 'x1', 'provider-2-api']) assert.equal(validProviderRouteId(value), true);
  for (const value of ['', 'A', '-acme', 'acme-', 'two--parts', 'has space', 'a_b', 'acme/route', '1provider']) assert.equal(validProviderRouteId(value), false, value);
  assert.equal(validProviderRouteId(null), false);
});

test('discovered models are sanitized, deduplicated and manually validated before saving', () => {
  const candidates = dedupeDiscoveredModels([
    { id: ' model-a ', name: ' Model A ', contextWindow: 8192, maxTokens: 1024, inputModalities: ['text', 'image', 'text', 'secret'], apiKey: 'must-not-survive' },
    { id: 'model-a', name: 'Later duplicate' },
    { id: '', name: 'invalid' },
    { id: 'model-b', contextWindow: 1.5, maxTokens: Number.MAX_SAFE_INTEGER + 1, inputModalities: ['video', 'audio', 'unknown'] },
    null,
  ]);
  assert.deepEqual(normalize(candidates), [
    { id: 'model-a', name: 'Model A', contextWindow: 8192, maxTokens: 1024, input: ['text', 'image'] },
    { id: 'model-b' },
  ]);
  assert.equal(normalizeDiscoveredModel({ id: ' ' }), null);
  assert.equal(providerModelsError(candidates, true), null);
  assert.equal(providerModelsError([], true), 'required');
  assert.equal(providerModelsError([{ id: 'duplicate' }, { id: ' duplicate ' }]), 'duplicate');
  assert.equal(providerModelsError([{ id: 'bad', contextWindow: 0 }]), 'capacity');
  assert.equal(providerModelsError([{ id: 'bad', input: ['secret'] }]), 'modalities');
  assert.equal(providerModelsError([{ id: 'bad', input: ['video'] }]), 'modalities');
  assert.deepEqual(normalize(providerModelIssue([{ id: '' }], true)), { kind: 'id', index: 0, field: 'id' });
  assert.deepEqual(normalize(providerModelIssue([{ id: 'same' }, { id: 'same' }])), { kind: 'duplicate', index: 1, field: 'id' });
  assert.deepEqual(normalize(providerModelIssue([{ id: 'model', contextWindow: 0 }])), { kind: 'capacity', index: 0, field: 'contextWindow' });
  assert.deepEqual(normalize(providerModelIssue([{ id: 'model', input: ['video'] }])), { kind: 'modalities', index: 0, field: 'input' });
});

test('visible dates use slash separators and year-month-day order independently of locale', () => {
  const date = new Date(2026, 10, 10, 15, 20).getTime();
  assert.equal(formatQuotaDate(date), '2026/11/10 15:20');
  assert.equal(formatQuotaDate(date, { includeYear: false }), '11/10 15:20');
  assert.equal(formatQuotaDate(date, { dateOnly: true }), '2026/11/10');
});

test('billing date preserves UTC while using the same slash-separated YMD format', () => {
  assert.equal(formatQuotaDate(Date.UTC(2026, 0, 2, 0, 5), { utc: true }), '2026/01/02 00:05');
  assert.equal(formatQuotaDate(Date.UTC(2024, 1, 29), { utc: true, dateOnly: true }), '2024/02/29');
});

test('reset countdown uses adaptive minute, hour-minute, and day-hour-minute precision', () => {
  const now = Date.UTC(2026, 10, 10, 0, 0);
  assert.equal(formatQuotaCountdown(now + (4 * 60 + 5) * 60000, now), '4h5m');
  assert.equal(formatQuotaCountdown(now + 59 * 60000 + 30000, now), '1h0m');
  assert.equal(formatQuotaCountdown(now + 1000, now), '1m');
  assert.equal(formatQuotaCountdown(now + (23 * 60 + 59) * 60000, now), '23h59m');
  assert.equal(formatQuotaCountdown(now + (24 * 60) * 60000, now), '1d0h0m');
  assert.equal(formatQuotaCountdown(now + (167 * 60 + 55) * 60000, now), '6d23h55m');
  assert.equal(formatQuotaCountdown(now, now), '0m');
  assert.equal(formatQuotaCountdown(now - 100000, now), '0m');
});

test('invalid dates and countdowns never produce a fabricated timestamp or NaN text', () => {
  for (const value of [NaN, Infinity, null, undefined, '2026/11/10']) {
    assert.equal(formatQuotaDate(value), '—');
    assert.equal(formatQuotaCountdown(value, Date.now()), '—');
  }
  assert.equal(formatQuotaDate(8640000000000001), '—');
});

test('remaining-quota bar colors respect the default 50 and 25 percent boundaries', () => {
  for (const value of [100, 75.00001, 75, 50.00001, 50]) assert.equal(quotaBarTone(value), 'success');
  for (const value of [49.99999, 40, 25]) assert.equal(quotaBarTone(value), 'warn');
  for (const value of [24.99999, 1, 0]) assert.equal(quotaBarTone(value), 'error');
  assert.equal(quotaBarTone(NaN), 'idle');
});

test('dock colors five-hour 60 percent and weekly 10 percent independently', () => {
  const metrics = Object.freeze([
    Object.freeze({ type: 'quota-window', label: 'rolling', usedPercent: 40 }),
    Object.freeze({ type: 'quota-window', label: 'weekly', usedPercent: 90 }),
  ]);
  const items = dockMetricItems(metrics);
  assert.deepEqual(normalize(items.map(item => [item.metric.label, item.remainingPercent, item.tone])), [['rolling', 60, 'success'], ['weekly', 10, 'error']]);
  assert.equal(metrics[0].usedPercent, 40);
  assert.equal(metrics[1].usedPercent, 90);
});

test('all subscription windows, including MCP, retain their own green orange or red tone', () => {
  const items = dockMetricItems([
    { type: 'quota-window', label: 'rolling', usedPercent: 25 },
    { type: 'quota-window', label: 'weekly', usedPercent: 75 },
    { type: 'quota-window', label: 'mcp', usedPercent: 100 },
  ]);
  assert.deepEqual(normalize(items.map(item => item.tone)), ['success', 'warn', 'error']);
});

test('cash and spend remain neutral; invalid quota percentages do not invent a colored reading', () => {
  const items = dockMetricItems([
    { type: 'balance', amount: '0', currency: 'CNY' },
    { type: 'spend', amount: '2.57', currency: 'USD' },
    { type: 'quota-window', label: 'weekly', usedPercent: NaN },
    { type: 'unrecognized' },
  ]);
  assert.deepEqual(normalize(items.map(item => [item.metric.type, item.tone])), [['balance', null], ['spend', null]]);
  assert.deepEqual(normalize(dockMetricItems([])), []);
});

test('each dock item has its own color span and weekly naming is consistent', () => {
  const dock = source.split('function Dock(props)')[1].split("ctx.slots.inject('settings.section'")[0];
  assert.ok(dock.includes('segments.map((segment, index)'));
  assert.ok(dock.includes("className: 'pq-summary-item', 'data-tone': segment.tone"));
  assert.ok(dock.includes("className: 'pq-summary-separator'"));
  assert.ok(source.includes("weekly: '周限'"));
  assert.ok(!source.includes("weekly: '本周'"));
  for (const tone of ['success', 'warn', 'error']) assert.ok(source.includes(`.pq-summary-item[data-tone=${tone}]{color:var(--dsw-alias-state-${tone}-primary)}`));
});

test('reset countdown refreshes while mounted with no extra provider queries', () => {
  const reset = source.split('function ResetTime({ value })')[1].split('function number(value)')[0];
  assert.ok(reset.includes('setInterval(update, 15_000)'));
  assert.ok(reset.includes('clearInterval(clock)'));
  assert.ok(reset.includes("document.removeEventListener('visibilitychange', update)"));
  assert.equal(reset.includes('fetch('), false);
  assert.equal(reset.includes('load('), false);
  assert.ok(source.includes('const tone = quotaBarTone(100 - used, colorThresholds)'));
  assert.ok(!source.includes('toLocaleDateString('));
  assert.ok(!source.includes('toLocaleString('));
  assert.ok(source.includes("next: '重置于'"));
  assert.ok(!source.includes("next: '重制于'"));
});

test('bottom trigger produces an above-only bounded overlay, not extra document-flow height', () => {
  assert.deepEqual(normalize(placeQuotaPopup(rect, viewport)), { left: 280, width: 420, top: 732, maxHeight: 600, above: true });
});

test('narrow viewport clamps width and horizontal edges without overflowing', () => {
  const result = placeQuotaPopup({ left: 10, right: 290, top: 560, bottom: 588 }, { left: 0, top: 0, width: 320, height: 600 });
  assert.equal(result.width, 296);
  assert.equal(result.left, 12);
  assert.equal(result.above, true);
  assert.ok(result.top - result.maxHeight >= 12);
});

test('visual viewport offset and right-edge clamping use one consistent coordinate space', () => {
  const view = { left: 40, top: 200, width: 360, height: 500 };
  const result = placeQuotaPopup({ left: 350, right: 430, top: 650, bottom: 680 }, view);
  assert.equal(result.left, 52);
  assert.equal(result.width, 336);
  assert.ok(result.left + result.width <= view.left + view.width - 12);
  assert.ok(result.top - result.maxHeight >= view.top + 12);
});

test('near-top trigger uses viewport fallback without pushing the dock down', () => {
  const result = placeQuotaPopup({ left: 20, right: 180, top: 30, bottom: 58 }, { left: 0, top: 0, width: 360, height: 220 });
  assert.equal(result.above, false);
  assert.equal(result.top, 12);
  assert.equal(result.maxHeight, 196);
});

test('detached, hidden, invalid and entirely offscreen anchors cannot keep an orphan popup', () => {
  for (const anchor of [null, { ...rect, top: NaN }, { ...rect, top: 900, bottom: 928 }, { ...rect, top: -40, bottom: 0 }, { ...rect, left: 1400, right: 1600 }, { ...rect, right: rect.left }, { ...rect, bottom: rect.top }]) assert.equal(placeQuotaPopup(anchor, viewport), null);
  assert.equal(placeQuotaPopup(rect, { ...viewport, width: 24 }), null);
  assert.equal(placeQuotaPopup(rect, { ...viewport, height: 24 }), null);
});

test('above placement never exceeds viewport bounds across responsive sizes', () => {
  for (const width of [200, 320, 520, 800, 1600]) {
    for (const height of [200, 400, 800, 1200]) {
      for (const x of [0, width / 2, width - 20]) {
        const view = { left: 0, top: 0, width, height };
        const anchor = { left: x, right: Math.min(width, x + 150), top: height - 50, bottom: height - 22 };
        const placed = placeQuotaPopup(anchor, view);
        assert.ok(placed);
        assert.ok(placed.left >= 12);
        assert.ok(placed.left + placed.width <= width - 12);
        assert.ok(placed.maxHeight <= height - 24);
        if (placed.above) assert.ok(placed.top - placed.maxHeight >= 12);
        else assert.ok(placed.top + placed.maxHeight <= height - 12);
      }
    }
  }
});

test('status tones distinguish exhausted quota, query errors, stale readings and harmless zero bonus', () => {
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'quota-window', usedPercent: 96 }] }), 'error');
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'quota-window', usedPercent: 75 }] }), 'warn');
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'quota-window', usedPercent: 85 }] }), 'error');
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'balance', amount: '0', wallet: 'bonus' }] }), 'success');
  assert.equal(quotaTone({ status: 'network', stale: true, metrics: [] }), 'warn');
  assert.equal(quotaTone({ status: 'unauthorized', metrics: [] }), 'error');
  assert.equal(quotaTone({ status: 'unsupported', metrics: [] }), 'idle');
});

test('dock contributes only a dialog trigger; details mount in the root overlay slot', () => {
  const dock = source.split('function Dock(props)')[1].split("ctx.slots.inject('settings.section'")[0];
  assert.ok(dock.includes("'aria-haspopup': 'dialog'"));
  assert.ok(dock.includes("'aria-expanded': isOpen"));
  assert.ok(!dock.includes("h('details'"));
  assert.ok(!dock.includes('h(Row'));
  assert.ok(source.includes("name: 'shell.overlay', id: 'provider-quota.popup'"));
  assert.ok(source.includes('position:fixed'));
  assert.ok(source.includes("transform: position.above ? 'translateY(-100%)' : 'none'"));
  assert.ok(source.includes('height:30px'));
});

test('outside click, focus, Escape and animation tracking all have paired disposal', () => {
  for (const event of ['pointerdown', 'focusin', 'keydown', 'visibilitychange']) {
    assert.ok(source.includes(`document.addEventListener('${event}'`));
    assert.ok(source.includes(`document.removeEventListener('${event}'`));
  }
  assert.ok(source.includes('window.cancelAnimationFrame(frame)'));
  assert.ok(source.includes("event.key === 'Escape'"));
  assert.ok(source.includes('event.stopPropagation()'));
  assert.ok(source.includes('anchor.focus({ preventScroll: true })'));
});

test('styling stays theme-token-only and UI never creates a second app or uses raw HTML', () => {
  const css = source.match(/const css = `([\s\S]*?)`;/)[1];
  const codexCss = source.match(/const codexCss = `([\s\S]*?)`;/)[1];
  for (const stylesheet of [css, codexCss]) {
    assert.equal(/#[a-f\d]{3,8}\b/i.test(stylesheet), false);
    for (const match of stylesheet.matchAll(/var\((--[^,)]+)/g)) assert.ok(match[1].startsWith('--dsw-alias-'));
  }
  assert.equal(source.includes('dangerouslySetInnerHTML'), false);
  assert.equal(source.includes('document.body'), false);
  assert.equal(source.includes('@deepseek-ai/dsh-client-ui-primitives'), false);
  assert.ok(source.includes("'aria-modal': false"));
});

test('bundle metadata gives a concise quota overview in both locales', () => {
  for (const meta of [enMeta, zhMeta]) {
    assert.equal(meta.title, 'GLM Quota+');
    assert.match(meta.description, /quota|额度/i);
    assert.match(meta.description, /GLM/i);
    assert.match(meta.description, /OpenAI/i);
    // Model editing moved to the official page; the descriptor must not promise it.
    assert.doesNotMatch(meta.description, /model management|模型管理/i);
  }
  assert.ok(enMeta.description.length <= 180);
  assert.ok(zhMeta.description.length <= 100);
});

test('custom green and orange boundaries are inclusive and shared across windows', () => {
  const thresholds = Object.freeze({ greenMin: 60, orangeMin: 10 });
  for (const remaining of [100, 60.001, 60]) assert.equal(quotaBarTone(remaining, thresholds), 'success');
  for (const remaining of [59.999, 30, 10]) assert.equal(quotaBarTone(remaining, thresholds), 'warn');
  for (const remaining of [9.999, 0]) assert.equal(quotaBarTone(remaining, thresholds), 'error');
  const items = dockMetricItems([
    { type: 'quota-window', label: 'rolling', usedPercent: 40 },
    { type: 'quota-window', label: 'weekly', usedPercent: 90 },
    { type: 'quota-window', label: 'quota', usedPercent: 91 },
  ], thresholds);
  assert.deepEqual(normalize(items.map(item => [item.metric.label, item.tone])), [['rolling', 'success'], ['weekly', 'warn'], ['quota', 'error']]);
  assert.equal(items[2].metric.label, 'quota'); // Unknown duration is not relabeled as five hours.
  assert.equal(quotaTone({ status: 'ok', metrics: items.map(item => item.metric) }, thresholds), 'error');
});

test('threshold parser rejects blank, fractional, reversed and out-of-range fields', () => {
  for (const [green, orange] of [['', '25'], ['75', ''], [' ', '0'], ['75.5', '25'], ['1e2', '25'], ['75', '75'], ['25', '75'], ['101', '25'], ['75', '-1'], ['0', '0']]) {
    assert.equal(parseThresholdDraft(green, orange), null, `${green}/${orange}`);
  }
  assert.deepEqual(normalize(parseThresholdDraft('75', '25')), { greenMin: 75, orangeMin: 25 });
  assert.deepEqual(normalize(parseThresholdDraft(' 100 ', '0')), { greenMin: 100, orangeMin: 0 });
  assert.deepEqual(normalize(parseThresholdDraft('1', '0')), { greenMin: 1, orangeMin: 0 });
  for (const value of [null, {}, { greenMin: '75', orangeMin: 25 }, { greenMin: 75, orangeMin: 75 }, { greenMin: 75.5, orangeMin: 25 }, { greenMin: 75, orangeMin: NaN }]) assert.equal(validColorThresholds(value), false);
});

test('invalid configuration falls back safely and edge threshold pairs remain usable', () => {
  assert.equal(quotaBarTone(75, { greenMin: 20, orangeMin: 80 }), 'success');
  assert.equal(quotaBarTone(25, null), 'warn');
  assert.equal(quotaBarTone(0, { greenMin: 100, orangeMin: 0 }), 'warn');
  assert.equal(quotaBarTone(100, { greenMin: 100, orangeMin: 0 }), 'success');
  assert.equal(quotaBarTone(NaN, { greenMin: 60, orangeMin: 10 }), 'idle');
});

test('custom subscription thresholds never recolor cash or spending metrics', () => {
  const thresholds = { greenMin: 100, orangeMin: 99 };
  const cash = { status: 'ok', metrics: [{ type: 'balance', amount: '10', currency: 'USD' }, { type: 'spend', amount: '100', currency: 'USD' }] };
  assert.deepEqual(normalize(dockMetricItems(cash.metrics, thresholds).map(item => item.tone)), [null, null]);
  assert.equal(quotaTone(cash, thresholds), quotaTone(cash));
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'balance', amount: '0', wallet: 'recharge' }] }, thresholds), 'error');
  assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'balance', amount: '0', wallet: 'bonus' }] }, thresholds), 'success');
});

test('quota page color settings use explicit save and verified readback; defaults only edit draft', () => {
  const settings = source.split('function QuotaSettings()')[1].split('function Page()')[0];
  assert.equal(source.includes("name: 'settings.plugins.tab', id: 'local-provider-quota-settings'"), false);
  assert.ok(source.includes("settingsTitle: '订阅颜色阈值'"));
  assert.ok(settings.includes("new URL('api/provider-quota-settings', document.baseURI)"));
  assert.ok(settings.includes("'X-Quota-Settings-CSRF': csrfRef.current"));
  assert.ok(settings.includes("method: payload ? 'POST' : 'GET'"));
  assert.ok(settings.includes("written.saved !== true"));
  assert.ok(settings.includes('confirmed = await fetchSettings()'));
  assert.ok(settings.includes('confirmed.colorThresholds.greenMin !== candidate.greenMin'));
  assert.ok(settings.includes("setNotice(candidate ? 'saved' : null)"));
  const defaults = settings.split("String(DEFAULT_COLOR_THRESHOLDS.greenMin)")[1].split("t('defaults')")[0];
  assert.equal(defaults.includes('run('), false);
  assert.equal(defaults.includes('fetch('), false);
  assert.equal(source.includes('localStorage'), false);
  assert.equal(source.includes('sessionStorage'), false);
  assert.equal(/type:\s*['"]color['"]/.test(settings), false);
  assert.equal(settings.includes('setInterval('), false);
});

test('client manifest requests Remote and configForms dependencies used by model management', () => {
  const inject = packageManifest.dsh.client.inject;
  assert.ok(inject.includes('@deepseek-ai/dsh-api-remotes'));
  assert.ok(inject.includes('@deepseek-ai/dsh-client-ui-settings'));
  assert.ok(inject.includes('configForms'));
});

test('quota and settings tabs are separate and accessible; model editing stays on the official page', () => {
  const page = source.split('function Page()')[1].split('function PopupSurface')[0];
  assert.ok(source.includes("providerSettingsTab: '额度'"));
  assert.ok(source.includes("empty: '尚未发现已配置的提供商。请在官方「模型」设置中添加提供商。'"));
  assert.ok(source.includes("empty: 'No configured providers found. Add one in the official Models settings.'"));
  assert.ok(source.includes("colorsTab: '设置'"));
  assert.ok(page.includes("React.useState('providers')"));
  assert.ok(page.includes("const tabs = ['providers', 'colors']"));
  assert.ok(page.includes("role: 'tablist'"));
  assert.ok(page.includes("role: 'tab'"));
  assert.ok(page.includes("'aria-selected': tab === id"));
  assert.ok(page.includes("tabIndex: tab === id ? 0 : -1"));
  assert.ok(page.indexOf("id: 'pq-panel-providers'") < page.indexOf("id: 'pq-panel-colors'"), 'panel order follows the tab order');
  assert.ok(page.includes("id: 'pq-panel-colors', role: 'tabpanel'"));
  assert.ok(page.includes("tab === 'colors' ? h(QuotaSettings) : null"));
  assert.ok(page.includes("h(ProviderSettings, { rows, loading: state.loading, error: state.error, colorThresholds: state.data?.colorThresholds })"));
  assert.equal(page.includes("id: 'pq-panel-apiExtra'"), false);
  for (const key of ['ArrowLeft', 'ArrowRight', 'Home', 'End']) assert.ok(page.includes(`'${key}'`));
  assert.ok(page.includes('tabRefs.current[target]?.focus()'));
  assert.equal(source.includes("ctx.slots.inject('settings.plugins.tab'"), false);
  // No Models tab: the provider manager is neither mounted nor instantiated.
  assert.ok(!page.includes('ProviderManager'));
  assert.ok(!page.includes('pq-panel-models'));
  assert.ok(!source.includes('createProviderManager(ctx,'));
});

test('provider company mapping groups known routes into institution cells', () => {
  const providers = source.split('function ProviderSettings({ rows, loading, error, colorThresholds })')[1].split('function Page()')[0];
  assert.ok(source.includes("case 'openai': case 'codex': return 'openai'"));
  assert.ok(source.includes("case 'deepseek': case 'account': return 'deepseek'"));
  assert.ok(source.includes("case 'glm-cn': case 'glm-standard-cn': case 'zai-coding-plan': case 'glm-cn-team': case 'zai-coding-plan-team': return 'glm'"));
  assert.ok(source.includes("if (isTeamPlanKind(row.kind)) return `${providerName({ ...row, kind: row.kind.slice(0, -'team'.length) })} · ${t('teamPlan')}`"));
  // The dock and popup must consider the Team Plan sibling of the current provider.
  assert.ok(source.includes("const row = preferredRow(state.data?.rows ?? [], provider);"));
  assert.ok(source.includes("const rows = providerRows(state.data?.rows ?? [], opened.provider);"));
  assert.ok(source.includes("return candidates.find(row => row.metrics.length > 0) ?? candidates[0] ?? null;"));
  assert.ok(source.includes("const team = rows.find(item => item.id === `${provider}::team`);"));
  // The popup is a remaining-quota card with a personal/team switch; the dock is one 5-hour ring.
  assert.ok(source.includes("rows.length > 1 ? h('div', { className: 'pq-seg', role: 'group', 'aria-label': t('planSwitch') }"));
  assert.ok(source.includes("t(isTeamPlanKind(item.kind) ? 'teamPlan' : 'personalPlan')))) : null),"));
  assert.ok(source.includes("tiles.length ? t('remainingQuota') : providerName(row)"));
  assert.ok(source.includes("h(QuotaTile, { key: `tile-${index}`, metric, colorThresholds: state.data?.colorThresholds, now })"));
  assert.ok(source.includes("const ringMetric = row.metrics.find(metric => metric.type === 'quota-window' && isRollingWindow(metric));"));
  assert.ok(source.includes("h(QuotaRing, { metric: ringMetric, colorThresholds }), h('span', null, `${percent(remainingOf(ringMetric))}%`))"));
  assert.ok(source.includes("h('svg', { className: 'pq-ring', viewBox: '0 0 14 14', width: 14, height: 14"), 'ring mirrors the built-in ContextMeter geometry');
  assert.ok(!source.includes("pq-ring-text"), 'the ring carries no percentage text');
  assert.ok(source.includes("function isRollingWindow(metric) { return metric.label === 'rolling' || metric.durationSeconds === 18_000; }"));
  assert.ok(source.includes("remainingQuota: '剩余额度', more: '更多', planSwitch: '切换套餐'"));
  assert.ok(source.includes("remainingQuota: 'Remaining quota', more: 'More', planSwitch: 'Switch plan'"));
  // Unsaved Team Plan edits survive a window switch: visibility refresh keeps the draft.
  assert.ok(source.includes("const refresh = () => { if (document.visibilityState === 'visible') read(undefined, { resetDraft: false }); };"));
  assert.ok(source.includes("setData(body); if (resetDraft) setDraft(draftFrom(body.glmTeamPlans));"));
  assert.ok(source.includes("if (row.reason === 'zai-api-status-only') return 'glm'"));
  assert.ok(source.includes("default: return 'other'"));
  assert.ok(providers.includes("const routes = rows.filter(row => providerCompany(row) === option.key)"));
  assert.ok(providers.includes("option.key === 'other'"));
  assert.ok(providers.includes("title: providerName(row), routes: [row]"));
  assert.ok(!source.includes("id: 'pq-panel-overview'"));
});

test('provider management component is retained but unmounted; its focus restoration code stays intact', () => {
  const settings = source.split('function ProviderSettings({ rows, loading, error, colorThresholds })')[1].split('function Page()')[0];
  assert.equal(settings.includes('showManager'), false);
  assert.equal(settings.includes('ProviderManager'), false);
  assert.ok(settings.includes('previousSelectedKey.current !== selectedKey'));
  const providerManager = source.split('function ProviderManager({ manager })')[1].split('function ProviderManagerEditor')[0];
  assert.ok(providerManager.includes('fallback?.isConnected ? fallback : headingRef.current'));
  assert.ok(providerManager.includes('React.useEffect(() => { void manager.load(); }, [manager])'));
  assert.ok(providerManager.includes('headingRef.current?.focus({ preventScroll: true })'));
  assert.ok(providerManager.includes('focusLauncher(`company:${previous}`)'));
  assert.ok(providerManager.includes('if (!editorWasOpenRef.current) return;'));
  assert.ok(providerManager.includes('focusLauncher(returnFocusKeyRef.current)'));
  assert.ok(providerManager.includes("ref: launcherRefFor('add')"));
  assert.ok(providerManager.includes('returnFocusKeyRef.current = focusKey'));
  assert.ok(providerManager.includes("ref: removeCancelRef"));
  assert.ok(providerManager.includes('removalConfirmationRef.current?.focus({ preventScroll: true })'));
  assert.ok(providerManager.includes("setNotice('providerManagerSaved')"));
  assert.ok(providerManager.includes('errorDiagnostic ? h('));
  for (const stage of ['providers', 'directory', 'settings', 'processing']) assert.ok(providerManager.includes(`${stage}: 'providerManagerLoadStage${stage[0].toUpperCase()}${stage.slice(1)}'`));
  assert.ok(providerManager.includes('state.errorCode ?'));
  assert.ok(providerManager.includes("state.remoteDiagnostics ? h('details'"));
  assert.ok(providerManager.includes('diagnosticStatusKeys[field]?.[state.remoteDiagnostics[field]]'));
  assert.ok(providerManager.includes("h('summary', null, t('providerManagerDiagTitle'))"));
  assert.equal(providerManager.includes('t(state.remoteDiagnostics[field])'), false);
  assert.ok(source.includes("providerManagerLoadStageSettings: '设置读取'"));
  assert.ok(source.includes("providerManagerLoadStageSettings: 'settings access'"));
  assert.ok(source.includes("providerManagerLoadCauseRemoteError: 'Remote 返回失败'"));
  assert.ok(source.includes("providerManagerLoadCauseRemoteError: 'Remote returned a failure'"));
  assert.ok(source.includes("providerManagerLoadRemoteCodeLabel: 'Remote 错误代码：'"));
  assert.ok(source.includes("providerManagerLoadRemoteCodeLabel: 'Remote error code: '"));
  assert.ok(source.includes("providerManagerLoadFailed: '无法读取提供商目录或设置。请重新载入；若问题仍存在，请展开下方“安全运行时诊断”并分享状态（不含密钥或原始错误详情）。'"));
  assert.ok(source.includes("providerManagerLoadFailed: 'Could not read the provider directory or settings. Reload and try again; if it persists, expand “Safe runtime diagnostics” below and share the status values (no credentials or raw error details).'"));
  assert.equal(providerManager.includes('state.error.message'), false);
  assert.ok(source.includes("ref: backButtonRef, tabIndex: -1, className: 'pq-manager-inline-title'"));
  assert.equal(source.includes("t('providerManagerEditorBack')"), false);
  assert.ok(providerManager.includes("isEditing ? renderEditor() : null"));
  assert.ok(providerManager.includes('JSON.stringify([row.entry.settingsNs, row.entry.provider])'));
  const page = source.split('function Page()')[1].split('function PopupSurface')[0];
  assert.ok(!page.includes("id: 'pq-panel-models'"), 'the Models tab is gone');
  assert.equal(page.includes("h(ProviderManager, { manager: providerManager })"), false, 'the manager component is never mounted');
  assert.equal(page.includes(', manager: providerManager })'), false);
});

test('model management opens company cells before showing provider configurations', () => {
  const providerManager = source.split('function ProviderManager({ manager })')[1].split('function ProviderManagerEditor')[0];
  assert.ok(source.includes('.pq-manager{max-width:980px;padding:0}'));
  assert.ok(providerManager.includes("const companyGroups = sortModelProviderCompanyGroups(groupModelProvidersByCompany(state.entries, t('companyUnclassified'), family => ctx.locale.resolveText(family.names), currentCompanyRules.companies)"));
  assert.equal(source.includes('CompanyDomainAliasEditor'), false);
  assert.equal(source.includes('设置公司域名别名'), false);
  assert.equal(source.includes('saveDomainAliases'), false);
  assert.equal(source.includes('domainAliases'), false);
  assert.ok(providerManager.includes("!row.supported ? h('p'"));
  assert.ok(providerManager.includes("t('providerManagerReadOnlyRoute')"));
  assert.ok(providerManager.includes("row.supported ? h('div', { className: 'pq-manager-actions pq-manager-route-actions'"));
  assert.ok(providerManager.includes('state.routeHostsError'));
  assert.ok(providerManager.includes("className: 'pq-provider-cell-list'"));
  assert.ok(providerManager.includes("className: 'pq-provider-cell'"));
  assert.ok(providerManager.includes('onClick: () => openCompany(group)'));
  assert.ok(providerManager.includes('selectedCompany.entries.map(renderProviderEntry)'));
  assert.ok(providerManager.includes("className: 'pq-manager-card pq-manager-provider-entry'"));
  assert.ok(providerManager.includes("t(row.configured ? 'providerManagerEdit' : 'providerManagerAdd')"));
  assert.ok(providerManager.includes("t('providerManagerRemove')"));
  assert.ok(source.split('function ProviderManagerEditor')[1].includes('credentialLabel'));
  assert.ok(providerManager.includes("t(selectedCompany ? 'providerManagerCompanyIntro' : 'providerManagerIntro')"));
  assert.ok(providerManager.includes('const addableInView = companyAddable'));
  assert.ok(providerManager.includes('addOpen && selectedCompany ? h('));
  assert.ok(providerManager.includes('selectedCompany && companyAddable.length ? h('));
  assert.ok(providerManager.includes("t('providerManagerAddCustom')"));
  assert.ok(providerManager.includes("openCustom('add-custom')"));
  assert.equal(providerManager.includes('!selectedCompany || companyAddable.length ?'), false);
  assert.ok(providerManager.includes('ref: launcherRefFor(`company:${group.key}`)'));
  assert.equal(providerManager.includes('pq-manager-provider-cell'), false);
  assert.equal(providerManager.includes('const providerIconGroup'), false);
  assert.ok(source.includes("providerManagerCompanyCellHint: '点击查看路由和配置'"));
  assert.ok(source.includes("providerManagerCompanyCellHint: 'Select to view routes and settings'"));
  assert.ok(source.includes("providerManagerIntro: '各路由按生效请求主机名自动归并为提供商卡片。"));
  assert.ok(source.includes("providerManagerIntro: 'Routes are grouped automatically into provider tiles by their effective request hostname."));
  assert.ok(providerManager.includes("className: 'pq-provider-cell-hosts'"));
  assert.ok(providerManager.includes("'aria-label': `${title}. ${routeSummary}."));
  assert.equal(providerManager.includes('pq-provider-grouping-details'), false);
  assert.ok(source.includes("providerManagerAddCustom: '新增自定义提供商'"));
  assert.ok(source.includes("providerManagerAddCustom: 'Add custom provider'"));
});

test('company overview replaces rule diagnostics with accessible local search and keeps selection independent of filtering', () => {
  const providerManager = source.split('function ProviderManager({ manager })')[1].split('function ProviderManagerEditor')[0];
  assert.equal(source.includes('分组规则与管理提示'), false);
  assert.equal(source.includes('Grouping and configuration details'), false);
  assert.equal(source.includes('pq-provider-grouping-details'), false);
  assert.equal(providerManager.includes('companyRulesRefresh'), false);
  assert.equal(providerManager.includes('companyCoverage'), false);
  assert.equal(providerManager.includes('companyRulesErrorKey'), false);
  assert.ok(providerManager.includes("const [companyQuery, setCompanyQuery] = React.useState('')"));
  assert.ok(providerManager.includes('const companySearchId = React.useId()'));
  assert.ok(providerManager.includes('const companySearchStatusId = React.useId()'));
  assert.ok(providerManager.includes("!selectedCompany ? h('div', { className: 'pq-company-search', role: 'search'"));
  assert.ok(providerManager.includes("h('label', { htmlFor: companySearchId }"));
  assert.ok(providerManager.includes("type: 'search', value: companyQuery, maxLength: 200"));
  assert.ok(providerManager.includes("onChange: event => setCompanyQuery(event.target.value.slice(0, 200))"));
  assert.ok(providerManager.includes("'aria-describedby': companyGroups.length ? companySearchStatusId : undefined"));
  assert.ok(providerManager.includes("role: 'status', 'aria-live': 'polite', 'aria-atomic': true"));
  assert.ok(providerManager.includes("setCompanyQuery(''); companySearchRef.current?.focus({ preventScroll: true })"));
  assert.ok(providerManager.includes("state.status === 'ready' && companyGroups.length > 0 && !visibleCompanyGroups.length"));
  assert.ok(providerManager.includes("t('providerManagerCompanySearchEmpty')"));
  assert.ok(providerManager.includes('...visibleCompanyGroups.map(group =>'));
  assert.ok(providerManager.includes('const selectedCompany = providerEditorCompany(companyGroups, selectedCompanyKey, target, formMode, editingCompanyRef.current)'));
  const backToCompanies = providerManager.split('const backToCompanies = () => {')[1].split('const openCustom')[0];
  assert.equal(backToCompanies.includes('setCompanyQuery'), false, 'back keeps the overview query and editor draft lifecycle unchanged');
  const filterHelper = pureBlock.split('function filterModelProviderCompanyGroups(')[1];
  assert.equal(/\b(?:fetch|requestCompanyRules|manager\.load|readRouteHosts)\s*\(/.test(filterHelper), false);
  assert.ok(source.includes("providerManagerCompanySearchLabel: '搜索提供商'"));
  assert.ok(source.includes("providerManagerCompanySearchLabel: 'Search providers'"));
});

test('company search matches bilingual names, product/provider labels and verified or current hostnames', () => {
  const rows = [
    { routeHostname: 'api.kimi.com', entry: { provider: 'kimi-coding', displayName: 'Kimi For Coding' }, profile: { displayName: 'Work Kimi' } },
    { routeHostname: 'api.deepseek.com', entry: { provider: 'deepseek', displayName: 'DeepSeek' } },
    { routeHostname: 'api.customvendor.net', entry: { provider: 'custom-relay', displayName: 'Relay A' } },
    { routeHostname: 'opencode.ai', entry: { provider: 'opencode-go', displayName: 'OpenCode Go' }, profile: { displayName: '编程工具' } },
    { routeHostname: 'ai-gateway.vercel.sh', entry: { provider: 'vercel-ai-gateway', displayName: 'Vercel AI Gateway' } },
    { routeHostname: null, entry: { provider: 'azure', displayName: 'Azure' } },
  ];
  const groups = groupModelProvidersByCompany(rows, 'Unknown', company => company.names.zh);
  const keys = query => normalize(filterModelProviderCompanyGroups(groups, query).map(group => group.key));
  for (const query of ['Kimi', '  ＫＩＭＩ  ', 'Moonshot AI', '月之暗面', 'kimi-coding', 'moonshot.cn', 'moonshot.ai', 'API.KIMI.COM', 'Kimi moonshot.cn']) {
    assert.deepEqual(keys(query), ['company:moonshot-ai'], query);
  }
  assert.deepEqual(keys('OpenCode'), ['company:anomaly']);
  assert.deepEqual(keys('编程'), ['company:anomaly']);
  assert.deepEqual(keys('vErCeL.CoM'), ['company:vercel'], 'verified selector domains are searchable even when not the current host');
  assert.deepEqual(keys('ai-gateway.vercel.sh'), ['company:vercel']);
  assert.deepEqual(keys('customvendor.net'), ['domain:customvendor.net']);
  assert.deepEqual(keys('Azure'), ['unclassified'], 'a provider label can find its existing group without guessing company identity');
  assert.deepEqual(keys('DeepSeek Moonshot'), [], 'every whitespace-separated token must match the same group');
  assert.deepEqual(keys('definitely-no-company'), []);
  assert.deepEqual(keys('[a-z]'), [], 'search terms are literal strings, not regular expressions');
});

test('company search supports future rule names and exact hosts as data, without static company-ID aliases', () => {
  const companies = [{ id: 'future-company', names: { en: 'Future Company', zh: '未来公司' }, domains: [], hostSuffixes: ['models.future-platform.com'], exactHosts: ['gateway.other-platform.net'], icon: null }];
  const groups = groupModelProvidersByCompany([{ routeHostname: 'api.models.future-platform.com' }], 'Unknown', company => company.names.en, companies);
  for (const query of ['未来公司', 'Future Company', 'models.future-platform.com', 'gateway.other-platform.net']) {
    assert.deepEqual(normalize(filterModelProviderCompanyGroups(groups, query, companies).map(group => group.key)), ['company:future-company']);
  }
  assert.equal(filterModelProviderCompanyGroups(groups, '未来公司').length, 0, 'runtime rules are explicit input, not inferred from unrelated IDs');
});

test('company search is bounded, non-mutating and ignores URL query strings, credential references and other profile data', () => {
  const row = { routeHostname: 'api.kimi.com', entry: { provider: 'kimi-coding', displayName: 'Kimi For Coding' }, profile: { displayName: 'Work account', baseURL: 'https://api.kimi.com/path?token=private-query-marker', apiKeyEnv: 'private-credential-marker', other: 'private-config-marker' } };
  const groups = groupModelProvidersByCompany([row]);
  const before = JSON.stringify(groups);
  assert.equal(filterModelProviderCompanyGroups(groups, ''), groups);
  assert.equal(filterModelProviderCompanyGroups(groups, '   \t\n '), groups);
  assert.equal(filterModelProviderCompanyGroups(groups, null), groups);
  assert.equal(filterModelProviderCompanyGroups(groups, `kimi${' '.repeat(201)}should-be-truncated`).length, 1);
  for (const query of ['private-query-marker', 'private-credential-marker', 'private-config-marker']) assert.equal(filterModelProviderCompanyGroups(groups, query).length, 0);
  assert.equal(filterModelProviderCompanyGroups(groups, 'kimi')[0], groups[0], 'matching preserves group and route objects');
  assert.equal(groups[0].entries[0], row);
  assert.equal(JSON.stringify(groups), before);
});

test('bundled public suffix data and its MPL license are part of the package', () => {
  assert.ok(packageManifest.files.includes('src'));
  assert.ok(packageManifest.files.includes('LICENSES'));
  assert.ok(source.includes('Public Suffix List 2026-11-17_16-14-34_UTC'));
  assert.ok(source.includes('This data is distributed under MPL-2.0'));
});

test('automatic company grouping uses Host hostnames and curated official families without manual aliases', () => {
  assert.equal(modelProviderCompanyFromUrl('https://api.example.co.uk:8443/v1/models?x=1'), 'example.co.uk');
  assert.equal(modelProviderCompanyFromUrl('ftp://api.example.com/v1'), null);
  assert.equal(modelProviderCompanyFromUrl('https://user:pass@example.com/v1'), null);
  assert.equal(modelProviderRegistrableDomain('co.uk'), null);
  assert.equal(modelProviderRegistrableDomain('api.foo.blogspot.com'), 'foo.blogspot.com');
  assert.equal(modelProviderRegistrableDomain('www.city.kawasaki.jp'), 'city.kawasaki.jp');
  assert.equal(modelProviderRegistrableDomain('127.0.0.1'), null);
  assert.equal(modelProviderRouteHost({ entry: { defaultBaseURL: 'https://api.example.com:8443/v1?token=secret' }, profile: {} }), 'api.example.com');
  assert.equal(modelProviderRouteHost({ entry: { defaultBaseURL: 'https://fallback.example.com' }, profile: { baseURL: 'https://user:pass@route.example.com/path' } }), null);
  assert.equal(modelProviderRouteHost({ routeHostname: null, entry: { defaultBaseURL: 'https://api.openai.com/v1' } }), null);
  assert.equal(modelProviderRouteHost({ routeHostname: 'api.relay.example.net', profile: { baseURL: 'https://api.openai.com/v1' } }), 'api.relay.example.net');
  for (const value of ['user:pass@api.openai.com', 'api.openai.com/path', 'api.openai.com?key=secret', 'api.openai.com:8443', 'api.openai.com#secret', 'api.openai.com\\secret']) {
    assert.equal(modelProviderRouteHost({ routeHostname: value }), null, value);
  }
  const cases = [
    ['api.openai.com', 'company:openai'], ['chatgpt.com', 'company:openai'],
    ['api.deepseek.com', 'company:deepseek'], ['api.minimaxi.com', 'company:minimax'],
    ['api.minimax.cn', 'company:minimax'], ['api.minimax.io', 'company:minimax'],
    ['api.moonshot.ai', 'company:moonshot-ai'], ['api.moonshot.cn', 'company:moonshot-ai'],
    ['api.anthropic.com', 'company:anthropic'], ['claude.ai', 'company:anthropic'],
    ['generativelanguage.googleapis.com', 'company:google-gemini'], ['gemini.google.com', 'company:google-gemini'],
    ['api.z.ai', 'company:zhipu-ai'], ['open.bigmodel.cn', 'company:zhipu-ai'],
    ['api.x.ai', 'company:spacexsi-grok'], ['grok.com', 'company:spacexsi-grok'],
    ['one.foo.co.uk', 'domain:foo.co.uk'], ['two.foo.co.uk', 'domain:foo.co.uk'],
    ['api.openai.com.evil.example', 'domain:evil.example'], [null, 'unclassified'],
  ];
  const rows = cases.map(([routeHostname], index) => ({ routeHostname, entry: { provider: `custom-${index}`, defaultBaseURL: 'https://api.openai.com/v1' }, configured: true }));
  const groups = groupModelProvidersByCompany(rows, 'Unclassified');
  for (let i = 0; i < cases.length; i++) {
    assert.equal(groups.find(group => group.entries.includes(rows[i])).key, cases[i][1]);
  }
  assert.deepEqual(normalize(modelProviderGroupHostnames(groups.find(group => group.key === 'company:zhipu-ai'))), ['api.z.ai', 'open.bigmodel.cn']);
  assert.equal(groups.at(-1).key, 'unclassified');
  assert.deepEqual(normalize(modelProviderGroupRouteCounts({ entries: [
    { configured: true, entry: {} }, { configured: false, entry: { active: true } }, { configured: false, entry: { active: false } },
  ] })), { configured: 2, catalog: 1 });
});

test('curated company tiles use only explicit local brand marks', () => {
  for (const [groupKey, expected] of [
    ['company:openai', 'openai'], ['company:deepseek', 'deepseek'], ['company:moonshot-ai', 'kimi'], ['company:anthropic', 'anthropic'],
    ['company:google-gemini', 'google'], ['company:minimax', 'minimax'], ['company:zhipu-ai', 'glm'],
    ['company:spacexsi-grok', 'xai'], ['company:earendil', 'pi'], ['company:anomaly', 'opencode'], ['company:microsoft', 'microsoft'],
  ]) assert.equal(providerIconKeyForGroupKey(groupKey), expected);
  for (const groupKey of ['company:unknown', 'alias:custom.com', 'domain:example.com', 'unclassified']) {
    assert.equal(providerIconKeyForGroupKey(groupKey), null, groupKey);
  }
  assert.equal(providerIconKeyForGroupKey('openai:account'), 'openai');
  assert.equal(source.includes('分组规则与管理提示'), false);
  assert.equal(source.includes('Grouping and configuration details'), false);
  assert.ok(source.includes("companyAnthropic: 'Anthropic'"));
  assert.ok(source.includes("companyGoogleGemini: 'Google'"));
  assert.ok(source.includes("companyZhipuAi: '智谱 AI'"));
  assert.ok(source.includes("companySpaceXsiGrok: 'SpaceXSI'"));
  assert.equal(BUNDLED_CLIENT_COMPANY_RULES.companies.find(company => company.id === 'zhipu-ai').names.zh, '智谱 AI');
  assert.equal(providerIconKeyForGroupKey('company:new-company', 'google'), 'google');
  assert.equal(providerIconKeyForGroupKey('company:new-company', 'https://untrusted.example/logo.svg'), null);
  assert.equal(providerIconKeyForGroupKey('company:openai', null), null);
  assert.ok(source.includes('modelProviderGroupHostnames(group)'));
  assert.ok(source.includes('CC0 does not grant trademark rights'));
});

test('provider manager separates settings from credentials and preserves drafts on conflicts', () => {
  const manager = source.split('function createProviderManager(context,')[1].split('function providerGroupSummary')[0];
  assert.ok(manager.includes("readReflectedService('remote.llm')"));
  assert.ok(manager.includes("reflect.get('modules')"));
  assert.ok(manager.includes('listProviders.call(remoteLlm)'));
  assert.ok(manager.includes('listConfigurableProviders.call(remoteLlm)'));
  assert.ok(manager.includes('inspectRemoteOutcome'));
  assert.ok(manager.includes('safeRemoteErrorCodes'));
  assert.ok(manager.includes("readReflectedService('remote.settings').value"));
  assert.ok(manager.includes("result.error.code === 'settings/conflict' ? 'conflict' : 'refused'"));
  assert.ok(manager.includes("readReflectedService('remote.credentials').value"));
  assert.equal(manager.includes('context.remote?.llm'), false);
  assert.equal(manager.includes('context.remote.settings'), false);
  assert.equal(manager.includes('context.remote.credentials'), false);
  // The manager is no longer instantiated since the Models tab was removed.
  assert.equal(source.includes("createProviderManager(ctx,"), false);
  assert.ok(!manager.includes('credentials.unset'));

  const editor = source.split('function ProviderManagerEditor({ manager, target, mode, onBack, onSaved })')[1].split('function ProviderSettings')[0];
  assert.ok(editor.includes('apiKeyEnv: keyRef'));
  assert.ok(editor.includes("openedProfile.apiKeyEnv.trim().length ? openedProfile.apiKeyEnv : undefined"));
  assert.ok(editor.includes('React.useRef(Boolean(initialKeyRef))'));
  assert.ok(editor.includes('const canKey = !keylessNativeAuth && (keyNode !== undefined || credentialReferenceCommittedRef.current)'));
  assert.ok(editor.includes("typeof currentProfile.apiKeyEnv === 'string' && currentProfile.apiKeyEnv.trim().length"));
  assert.ok(editor.includes('if (typedKey) credentialReferenceCommittedRef.current = true'));
  assert.ok(editor.includes('!canKey && (keylessNativeAuth || !credentialReferenceCommittedRef.current)'));
  assert.ok(editor.includes('manager.writeSettings(namespaceId, ops, openedRevision.current)'));
  assert.ok(editor.includes("setFormError(result.kind === 'conflict' ? 'providerManagerConflict' : 'providerManagerSaveFailed')"));
  assert.ok(editor.includes('if (!profileCommittedRef.current)'));
  assert.ok(editor.includes('!profileCommittedRef.current && Number.isFinite(openedRevision.current)'));
  assert.ok(editor.includes('const routeTaken = isNewCustom && !profileCommittedRef.current && routeId.length > 0'));
  assert.ok(editor.includes('if (!profileCommittedRef.current && !isNewCustom && profileNode === undefined)'));
  assert.ok(editor.includes('(isCustomRoute && profileNode === undefined && !profileCommittedRef.current)'));
  assert.ok(editor.includes('setFormError(profileCommittedRef.current ? \'providerManagerCredentialSaveFailed\' : \'providerManagerUiCredentialWriteFailed\')'));
  assert.ok(editor.includes('manager.storeCredential(keyRef, typedKey)'));
  assert.ok(editor.includes("type: 'password'"));
  assert.ok(editor.includes('manager.discoverModels(namespaceId, request, controller.signal)'));
  assert.ok(editor.includes('dedupeDiscoveredModels(result.models)'));
  assert.ok(editor.includes('selectedCandidates.has(model.id)'));
  assert.ok(editor.includes('setDiscoveryCompleted({ source: result.source, reason: result.reason, scope: result.scope })'));
  assert.ok(editor.includes("t(discoveryCompleted ? 'providerManagerUiDiscoveryNone' : 'providerManagerUiDiscoveryHelp')"));
  assert.ok(editor.includes("className: 'pq-model-dialog-body', 'aria-busy': discoveryBusy"));
  assert.ok(editor.includes("'providerManagerUiNoModelsYet'"));
  assert.ok(editor.includes("'aria-invalid': invalid('id')"));
  assert.ok(editor.includes("'aria-describedby': describedBy('contextWindow')"));
  assert.ok(editor.includes("'aria-invalid': invalid('input')"));
  assert.ok(editor.includes("onChange: event => { setKeyDraft(event.target.value); setFormError(null); }"));
  assert.ok(!editor.includes('localStorage'));
  assert.ok(!editor.includes('sessionStorage'));
});

test('provider editor follows official compact rows with primary auth and folded connection controls', () => {
  const editor = source.split('function ProviderManagerEditor({ manager, target, mode, onBack, onSaved })')[1].split('function ProviderSettings')[0];
  assert.ok(editor.indexOf("className: 'pq-manager-form-section'") < editor.indexOf("className: 'pq-manager-connection'"));
  assert.ok(editor.indexOf("className: 'pq-manager-connection'") < editor.indexOf("className: 'pq-manager-model-section'"));
  assert.ok(editor.includes('open: connectionOpen'));
  assert.ok(editor.includes("keylessNativeAuth ? h('p'"));
  assert.ok(editor.includes('providerModelDraftRow(model, `model-${nextModelDraftKey.current++}`)'));
  assert.ok(editor.includes('modelRows.map(providerModelDraftValue)'));
  assert.ok(editor.includes('key: row.draftKey'));
  assert.equal(editor.includes('key: index'), false);
  assert.ok(editor.includes("className: 'pq-manager-model-advanced', hidden: !expanded, disabled"));
  assert.ok(editor.includes("'aria-expanded': expanded, 'aria-controls': advancedId"));
  assert.ok(source.includes('@container pq-model-row (max-width:440px)'));
  assert.ok(source.includes('.pq-manager-model-advanced[hidden]{display:none}'));
});

test('model filtering retains original draft indexes and error actions reveal hidden advanced fields', () => {
  const editor = source.split('function ProviderManagerEditor({ manager, target, mode, onBack, onSaved })')[1].split('function ProviderSettings')[0];
  assert.ok(editor.includes('visibleModelRows.map(({ row, index })'));
  const update = editor.split('function updateModel(index, values)')[1].split('function revealModel')[0];
  assert.ok(update.indexOf("setModelQuery('')") >= 0);
  assert.ok(update.indexOf("setModelQuery('')") < update.indexOf('setModelRows('));
  assert.ok(editor.includes('modelIssue?.index === index'));
  assert.ok(editor.includes('revealModel(modelRows[modelIssue.index], modelIssue.field)'));
  assert.ok(editor.includes("pendingModelFocus.current = `${row.draftKey}:${field}`"));
  assert.ok(editor.includes("setModelQuery('')"));
  assert.ok(editor.includes('new Set(current).add(row.draftKey)'));
  assert.ok(editor.includes('modelFieldRefs.current.get(key)'));
  assert.ok(editor.includes("ref: fieldRef('contextWindow')"));
  assert.ok(editor.includes("ref: fieldRef('input'), tabIndex: -1"));
  assert.ok(editor.includes('revealModel(added[0])'));
  assert.ok(editor.includes('onClick: () => removeModel(index)'));
});

test('inherited catalog previews cannot masquerade as the retained custom draft or leak UI keys into saves', () => {
  const editor = source.split('function ProviderManagerEditor({ manager, target, mode, onBack, onSaved })')[1].split('function ProviderSettings')[0];
  assert.ok(editor.includes("schema.getPath(namespace.base, [...path, 'models'])"));
  assert.ok(editor.includes('useDefaultCatalog && Array.isArray(inheritedCatalog) ? inheritedCatalog.map'));
  assert.ok(editor.includes('providerModelDraftRow(model, `inherited-${index}`)'));
  assert.ok(editor.includes('new Set(shownModelRows.map(row => row.id.trim())'));
  assert.ok(editor.includes('new Set((useDefaultCatalog ? shownModelRows : modelRows).map'));
  assert.ok(editor.includes('const inheritedBase = useDefaultCatalog ? shownModelRows.map(row => makeModelDraft(row.source)) : null'));
  assert.ok(editor.includes('setModelRows(current => [...(inheritedBase ?? current), ...added])'));
  assert.ok(editor.includes('const disabled = editorDisabled || useDefaultCatalog'));
  assert.ok(editor.includes('const nextModels = useDefaultCatalog ? undefined : modelValue'));
  assert.ok(editor.includes("setModelDraftNotice('providerManagerModelDraftNotice')"));
  assert.ok(editor.includes('manager.writeSettings(namespaceId, ops, openedRevision.current)'));
  assert.ok(editor.includes('manager.storeCredential(keyRef, typedKey)'));
});

test('discovery search preserves explicit selection and only joins selected unadded models to the draft', () => {
  const editor = source.split('function ProviderManagerEditor({ manager, target, mode, onBack, onSaved })')[1].split('function ProviderSettings')[0];
  assert.ok(editor.includes('filterProviderModelDraftRows(candidates, candidateQuery)'));
  assert.ok(editor.includes('visibleCandidates.map(({ row: model })'));
  assert.ok(editor.includes('selectedCandidates.has(model.id) && !addedModelIds.has(model.id)'));
  assert.ok(editor.includes('candidates.filter(model => selectedCandidates.has(model.id) && !currentIds.has(model.id))'));
  assert.ok(editor.includes('onChange: event => setCandidateQuery(event.target.value.slice(0, 200))'));
  assert.ok(editor.includes('disabled: profileDisabled || discoveryBusy || selectedCandidateCount === 0'));
  assert.ok(source.includes("providerManagerNativeAuthShort: '原生账户授权'"));
  assert.ok(source.includes("providerManagerNativeAuthShort: 'Native account authorization'"));
});

test('provider manager load reports safe failure categories and allowlisted Remote codes', async () => {
  const secret = 'never expose this credential or exception text';
  const malformedNamespace = { ns: 'demo', schema: {}, value: {}, user: {}, base: {}, revision: 1 };
  const cases = [
    { name: 'Remote namespace missing', context: { remote: {} }, stage: 'providers', reason: 'llm-namespace-unavailable' },
    { name: 'provider method missing', context: { remote: { llm: { listConfigurableProviders: () => ({ ok: true, value: [] }) } } }, stage: 'providers', reason: 'method-unavailable' },
    { name: 'provider list rejection', context: { registered: () => Promise.reject(new Error(secret)) }, stage: 'providers', reason: 'call-rejected' },
    { name: 'provider list Remote error', context: { registered: { ok: false, error: { message: secret } } }, stage: 'providers', reason: 'remote-error' },
    { name: 'provider list allowlisted code', context: { registered: { ok: false, error: { code: 'gateway/service-unavailable', message: secret, details: secret } } }, stage: 'providers', reason: 'remote-error', errorCode: 'gateway/service-unavailable' },
    { name: 'provider list untrusted code', context: { registered: { ok: false, error: { code: secret, message: secret } } }, stage: 'providers', reason: 'remote-error' },
    { name: 'provider list malformed envelope', context: { registered: { ok: 'true', value: [], error: { message: secret } } }, stage: 'providers', reason: 'invalid-envelope' },
    { name: 'provider list malformed value', context: { registered: { ok: true, value: {} } }, stage: 'providers', reason: 'invalid-value' },
    { name: 'configurable-provider list rejection', context: { directory: () => Promise.reject(new Error(secret)) }, stage: 'directory', reason: 'call-rejected' },
    { name: 'configurable-provider list Remote error', context: { directory: { ok: false, error: { message: secret } } }, stage: 'directory', reason: 'remote-error' },
    { name: 'configurable-provider list malformed value', context: { directory: { ok: true, value: {} } }, stage: 'directory', reason: 'invalid-value' },
    { name: 'settings mirror ensure rejection', context: { settingsEnsure: () => Promise.reject(new Error(secret)) }, stage: 'settings', reason: 'settings-rejected' },
    { name: 'settings mirror view absent', context: { settingsSnapshot: { view: null, debug: secret } }, stage: 'settings', reason: 'invalid-envelope' },
    { name: 'settings mirror namespace list absent', context: { settingsSnapshot: { view: { writable: true }, debug: secret } }, stage: 'settings', reason: 'invalid-envelope' },
    { name: 'malformed provider directory', context: { directory: { ok: true, value: [null] } }, stage: 'processing', reason: 'local-processing' },
    {
      name: 'settings schema processing exception',
      context: {
        directory: { ok: true, value: [{ provider: 'demo', settingsNs: 'demo', settingsPath: ['providers', 'demo'], declared: true }] },
        settingsSnapshot: { view: { writable: true, namespaces: [malformedNamespace] } },
        settingsSchema: { rehydrate: () => { throw new Error(secret); } },
      },
      stage: 'processing',
      reason: 'local-processing',
    },
  ];
  for (const { name, context, stage, reason, errorCode = null } of cases) {
    const manager = createProviderManager(providerManagerContext(context));
    await manager.load();
    const snapshot = manager.getSnapshot();
    assert.equal(snapshot.status, 'error', name);
    assert.equal(snapshot.error, true, name);
    assert.equal(snapshot.errorStage, stage, name);
    assert.equal(snapshot.errorReason, reason, name);
    assert.equal(snapshot.errorCode, errorCode, name);
    assert.equal(JSON.stringify(snapshot).includes(secret), false, `${name} leaked private detail`);
  }
});

test('provider manager diagnoses the Remote module graph with allowlisted states only', async () => {
  const secret = 'raw import error, exception detail, secret key, or untrusted package text';
  const makeModules = ({ dependency = true, apiModule = true, pluginEntry = true, importFailed = false, reconciliationFailed = false } = {}) => ({
    manifest: {
      modules: [
        { id: 'dsh-glmteam-quota', inject: dependency ? ['@deepseek-ai/dsh-api-remotes'] : [] },
        ...(apiModule ? [{ id: '@deepseek-ai/dsh-api-remotes', inject: [] }] : []),
      ],
      plugins: pluginEntry ? [{ id: '@deepseek-ai/dsh-api-remotes' }] : [],
    },
    importError: () => importFailed ? new Error(secret) : undefined,
    entries: { state: { getSnapshot: () => ({ failures: reconciliationFailed ? [{ id: '@deepseek-ai/dsh-api-remotes', error: new Error(secret) }] : [] }) } },
  });
  const cases = [
    { name: 'module graph service missing', options: { modules: null, remote: {} }, reason: 'client-module-graph-unavailable', status: { clientModules: 'absent-or-inactive', apiRemotesDependency: 'unknown', apiRemotesModule: 'unknown', apiRemotesEntry: 'unknown', apiRemotesImport: 'unknown', apiRemotesEntryState: 'unknown' } },
    { name: 'API Remotes dependency absent', options: { modules: makeModules({ dependency: false }), remote: {} }, reason: 'api-remotes-dependency-missing', status: { apiRemotesDependency: 'not-declared' } },
    { name: 'API Remotes module absent', options: { modules: makeModules({ apiModule: false }), remote: {} }, reason: 'api-remotes-module-missing', status: { apiRemotesModule: 'absent' } },
    { name: 'API Remotes plugin row absent', options: { modules: makeModules({ pluginEntry: false }), remote: {} }, reason: 'api-remotes-entry-missing', status: { apiRemotesEntry: 'absent' } },
    { name: 'API Remotes module import failed', options: { modules: makeModules({ importFailed: true }), remote: {} }, reason: 'api-remotes-import-failed', status: { apiRemotesImport: 'import-failed' } },
    { name: 'API Remotes activation failed', options: { modules: makeModules(), loader: { entries: () => [{ options: { name: '@deepseek-ai/dsh-api-remotes' }, fiber: { state: 3 } }] }, remote: {} }, reason: 'api-remotes-activation-failed', status: { apiRemotesEntryState: 'activation-failed' } },
    { name: 'API Remotes reconciliation failure', options: { modules: makeModules({ reconciliationFailed: true }), remote: {} }, reason: 'api-remotes-activation-failed', status: { apiRemotesEntryState: 'activation-failed' } },
    { name: 'API Remotes loader entry absent', options: { modules: makeModules(), loader: { entries: () => [] }, remote: {} }, reason: 'api-remotes-loader-entry-missing', status: { apiRemotesEntryState: 'missing' } },
    { name: 'API Remotes still loading', options: { modules: makeModules(), loader: { entries: () => [{ options: { name: '@deepseek-ai/dsh-api-remotes' }, fiber: { state: 1 } }] }, remote: {} }, reason: 'api-remotes-entry-pending', status: { apiRemotesEntryState: 'loading' } },
    { name: 'Remote root absent or inactive', options: { remote: null }, reason: 'remote-root-unavailable', status: { remoteRoot: 'absent-or-inactive' } },
    { name: 'LLM namespace absent or inactive', options: { remote: {} }, reason: 'llm-namespace-unavailable', status: { llmNamespace: 'absent-or-inactive' } },
  ];
  for (const { name, options, reason, status } of cases) {
    const manager = createProviderManager(providerManagerContext(options));
    await manager.load();
    const snapshot = manager.getSnapshot();
    assert.equal(snapshot.errorReason, reason, name);
    assert.deepEqual(normalize(snapshot.remoteDiagnostics), normalize({
      clientModules: 'available', apiRemotesDependency: 'declared', apiRemotesModule: 'present',
      apiRemotesEntry: 'present', apiRemotesImport: 'no-recorded-failure', apiRemotesEntryState: 'active',
      remoteRoot: options.remote === null ? 'absent-or-inactive' : 'present',
      llmNamespace: options.remote?.llm ? 'present' : 'absent-or-inactive',
      ...status,
    }), name);
    assert.equal(JSON.stringify(snapshot).includes(secret), false, `${name} exposed untrusted diagnostic content`);
  }

  const root = {};
  const llmAccessContext = providerManagerContext({ remote: root });
  const llmAccessGet = llmAccessContext.reflect.get;
  llmAccessContext.reflect.get = name => name === 'remote.llm' ? (() => { throw new Error(secret); })() : llmAccessGet(name);
  const llmAccessManager = createProviderManager(llmAccessContext);
  await llmAccessManager.load();
  assert.equal(llmAccessManager.getSnapshot().errorReason, 'llm-namespace-access-error');
  assert.equal(JSON.stringify(llmAccessManager.getSnapshot()).includes(secret), false);

  const rootAccessContext = providerManagerContext({ remote: {} });
  const rootAccessGet = rootAccessContext.reflect.get;
  rootAccessContext.reflect.get = name => name === 'remote' ? (() => { throw new Error(secret); })() : rootAccessGet(name);
  const rootAccessManager = createProviderManager(rootAccessContext);
  await rootAccessManager.load();
  assert.equal(rootAccessManager.getSnapshot().errorReason, 'remote-root-access-error');
  assert.equal(JSON.stringify(rootAccessManager.getSnapshot()).includes(secret), false);

  const invalidGraphManager = createProviderManager(providerManagerContext({ remote: {}, modules: { manifest: { modules: 'invalid', plugins: [] } } }));
  await invalidGraphManager.load();
  assert.equal(invalidGraphManager.getSnapshot().remoteDiagnostics.clientModules, 'invalid');
  assert.equal(invalidGraphManager.getSnapshot().errorReason, 'client-module-graph-unavailable');

  const inaccessibleGraphManager = createProviderManager(providerManagerContext({ remote: {}, modules: { get manifest() { throw new Error(secret); } } }));
  await inaccessibleGraphManager.load();
  assert.equal(inaccessibleGraphManager.getSnapshot().remoteDiagnostics.clientModules, 'access-error');
  assert.equal(JSON.stringify(inaccessibleGraphManager.getSnapshot()).includes(secret), false);

  const moduleReadContext = providerManagerContext({ remote: {} });
  const moduleReadGet = moduleReadContext.reflect.get;
  moduleReadContext.reflect.get = name => name === 'modules' ? (() => { throw new Error(secret); })() : moduleReadGet(name);
  const moduleReadManager = createProviderManager(moduleReadContext);
  await moduleReadManager.load();
  assert.equal(moduleReadManager.getSnapshot().remoteDiagnostics.clientModules, 'access-error');
  assert.equal(JSON.stringify(moduleReadManager.getSnapshot()).includes(secret), false);
});

test('provider manager uses reflected namespaces and retries after LLM becomes active', async () => {
  const secret = 'no-inject access failed';
  const remote = {};
  Object.defineProperty(remote, 'llm', { get() { throw new Error(secret); } });
  const context = providerManagerContext({ remote });
  const reflectGet = context.reflect.get;
  const llm = {
    listProviders: () => ({ ok: true, value: [] }),
    listConfigurableProviders: () => ({ ok: true, value: [] }),
  };
  context.reflect.get = name => name === 'remote.llm' ? llm : reflectGet(name);
  const manager = createProviderManager(context);
  await manager.load();
  assert.equal(manager.getSnapshot().status, 'ready', 'reflection avoids direct no-inject property access');
  assert.equal(JSON.stringify(manager.getSnapshot()).includes(secret), false);

  const lateRemote = {};
  const lateContext = providerManagerContext({ remote: lateRemote });
  const lateManager = createProviderManager(lateContext);
  await lateManager.load();
  assert.equal(lateManager.getSnapshot().errorReason, 'llm-namespace-unavailable');
  lateRemote.llm = llm;
  await lateManager.retryAfterRemoteReady();
  assert.equal(lateManager.getSnapshot().status, 'ready', 'the remote.llm injection retries an earlier readiness failure');

  const failedContext = providerManagerContext({ registered: () => Promise.reject(new Error(secret)) });
  const failedManager = createProviderManager(failedContext);
  await failedManager.load();
  assert.equal(failedManager.getSnapshot().errorReason, 'call-rejected');
  assert.equal(failedManager.retryAfterRemoteReady(), undefined, 'unrelated RPC failures remain explicit user retries');
});

test('provider manager keeps directory usable when optional credential status lookup fails', async () => {
  const secret = 'credential service exception must stay private';
  const profile = { apiKeyEnv: 'DEMO_API_KEY_REF', models: [] };
  const namespace = {
    ns: 'demo', schema: {}, value: { providers: { demo: profile } },
    user: { providers: { demo: profile } }, base: { providers: {} }, revision: 7,
  };
  const failures = [
    { name: 'rejected', describe: () => Promise.reject(new Error(secret)) },
    { name: 'not-ok response', describe: () => Promise.resolve({ ok: false, error: { message: secret } }) },
  ];
  for (const { name, describe } of failures) {
    const manager = createProviderManager(providerManagerContext({
      registered: { ok: true, value: [{ id: 'demo', name: 'Demo' }] },
      directory: { ok: true, value: [{ provider: 'demo', displayName: 'Demo', settingsNs: 'demo', settingsPath: ['providers', 'demo'], declared: true }] },
      settingsSnapshot: { view: { writable: true, namespaces: [namespace] } },
      credentialsDescribe: describe,
    }));
    await manager.load();
    const snapshot = manager.getSnapshot();
    assert.equal(snapshot.status, 'ready', name);
    assert.equal(snapshot.error, false, name);
    assert.equal(snapshot.errorStage, null, name);
    assert.equal(snapshot.credentialError, true, name);
    assert.equal(snapshot.entries.length, 1, name);
    assert.equal(JSON.stringify(snapshot).includes(secret), false, `${name} failure leaked private detail`);
  }
});

function routeHostManagerFixture(readRouteHosts, rulesOptions = {}) {
  const directory = [
    { provider: 'custom-name', displayName: 'Custom', settingsNs: 'demo', settingsPath: ['providers', 'custom'], defaultBaseURL: 'https://api.openai.com/v1', baseURLEnv: ['ENDPOINT_URL'] },
    { provider: 'custom-name', displayName: 'Other scope', settingsNs: 'other', settingsPath: [], defaultBaseURL: 'https://api.openai.com/v1' },
  ];
  const namespaces = [
    { ns: 'demo', schema: {}, value: { providers: { custom: { models: [] } } }, user: {}, base: {}, revision: 1 },
    { ns: 'other', schema: {}, value: {}, user: {}, base: {}, revision: 1 },
  ];
  const manager = createProviderManager(providerManagerContext({
    registered: { ok: true, value: [{ id: 'custom-name', name: 'Custom' }, { id: 'registered-only', name: 'Registered only' }] },
    directory: { ok: true, value: directory }, settingsSnapshot: { view: { writable: true, namespaces } },
  }), { readRouteHosts, ...rulesOptions });
  return { manager, directory };
}

test('model manager matches Host hostnames by full route identity, including read-only and registered-only routes', async () => {
  const { manager } = routeHostManagerFixture(async () => ({ routes: [
    { provider: 'custom-name', settingsNs: 'demo', settingsPath: ['providers', 'custom'], hostname: 'relay.example.net' },
    { provider: 'custom-name', settingsNs: 'other', settingsPath: [], hostname: 'api.deepseek.com' },
  ] }));
  try {
    await manager.load();
    const snapshot = manager.getSnapshot();
    assert.equal(snapshot.routeHostsError, false);
    assert.equal(snapshot.entries.length, 3);
    assert.deepEqual(normalize(snapshot.entries.map(row => row.routeHostname)), ['relay.example.net', 'api.deepseek.com', null]);
    assert.deepEqual(normalize(snapshot.entries.map(row => row.supported)), [true, false, false]);
    const groups = groupModelProvidersByCompany(snapshot.entries);
    assert.equal(groups.find(group => group.key === 'company:openai'), undefined, 'catalog defaults cannot override Host relay metadata');
    assert.equal(groups.find(group => group.key === 'company:deepseek').entries[0].supported, false);
    assert.equal(groups.find(group => group.key === 'unclassified').entries[0].entry.provider, 'registered-only');
  } finally { manager.dispose(); }
});

test('the model manager binds catalog grouping hints to the exact route and does not replace actual hostnames', async () => {
  const { manager } = routeHostManagerFixture(async () => ({ routes: [
    { provider: 'custom-name', settingsNs: 'demo', settingsPath: ['providers', 'custom'], hostname: null, groupingHostname: 'opencode.ai', groupingSource: 'model-catalog' },
    { provider: 'custom-name', settingsNs: 'other', settingsPath: [], hostname: 'api.deepseek.com', groupingHostname: 'opencode.ai', groupingSource: 'model-catalog' },
  ] }));
  try {
    await manager.load();
    const { routeHostsError, entries } = manager.getSnapshot();
    assert.equal(routeHostsError, false);
    assert.equal(entries[0].routeHostname, null);
    assert.equal(entries[0].groupingHostname, 'opencode.ai');
    assert.equal(entries[0].groupingSource, 'model-catalog');
    assert.equal(entries[1].routeHostname, 'api.deepseek.com');
    assert.equal(Object.hasOwn(entries[1], 'groupingHostname'), false);
    assert.equal(Object.hasOwn(entries[2], 'groupingHostname'), false);
    assert.equal(modelProviderRouteHost(entries[0]), null);
    assert.equal(groupModelProvidersByCompany(entries).find(group => group.key === 'company:anomaly').entries[0], entries[0]);
    assert.equal(modelProviderCompanyCoverage(entries).noHostRoutes, 2);
  } finally { manager.dispose(); }
});

test('invalid or incomplete catalog grouping hints are dropped without discarding valid route inventory', async () => {
  const base = { provider: 'custom-name', settingsNs: 'demo', settingsPath: ['providers', 'custom'], hostname: null };
  for (const hint of [
    { groupingHostname: 'opencode.ai' },
    { groupingHostname: 'opencode.ai', groupingSource: 'unknown' },
    { groupingHostname: 'https://user:private-password@opencode.ai/private', groupingSource: 'model-catalog' },
  ]) {
    const { manager } = routeHostManagerFixture(async () => ({ routes: [
      { ...base, ...hint },
      { provider: 'custom-name', settingsNs: 'other', settingsPath: [], hostname: 'api.deepseek.com' },
    ] }));
    try {
      await manager.load();
      const { routeHostsError, entries } = manager.getSnapshot();
      assert.equal(routeHostsError, false);
      assert.equal(Object.hasOwn(entries[0], 'groupingHostname'), false);
      assert.equal(Object.hasOwn(entries[0], 'groupingSource'), false);
      assert.equal(entries[1].routeHostname, 'api.deepseek.com');
    } finally { manager.dispose(); }
  }
});

test('failed, incomplete or malformed Host metadata stays unclassified without blocking management or leaking errors', async () => {
  const privateText = 'https://user:private-password@api.openai.com/private?token=private-token';
  const base = { provider: 'custom-name', settingsNs: 'demo', settingsPath: ['providers', 'custom'], hostname: 'api.openai.com' };
  const cases = [
    async () => { throw new Error(privateText); },
    async () => ({ routes: [] }),
    async () => ({ routes: [{ ...base, hostname: privateText }] }),
    async () => ({ routes: [{ ...base, hostname: 'api.openai.com/private' }] }),
    async () => ({ routes: [base, base] }),
    async () => ({ routes: [{ ...base, settingsPath: null }] }),
  ];
  for (const readRouteHosts of cases) {
    const { manager } = routeHostManagerFixture(readRouteHosts);
    try {
      await manager.load();
      const snapshot = manager.getSnapshot();
      assert.equal(snapshot.status, 'ready');
      assert.equal(snapshot.routeHostsError, true);
      assert.equal(snapshot.entries.every(row => row.routeHostname === null), true);
      assert.equal(groupModelProvidersByCompany(snapshot.entries)[0].key, 'unclassified');
      assert.equal(JSON.stringify(snapshot).includes('private-password'), false);
      assert.equal(JSON.stringify(snapshot).includes('private-token'), false);
    } finally { manager.dispose(); }
  }
});

test('refresh failures discard old hostname brands, and superseded metadata reads are aborted', async () => {
  let call = 0;
  let release;
  let pendingSignal;
  const { manager } = routeHostManagerFixture(signal => {
    call++;
    if (call === 1) return { routes: [
      { provider: 'custom-name', settingsNs: 'demo', settingsPath: ['providers', 'custom'], hostname: 'api.openai.com' },
      { provider: 'custom-name', settingsNs: 'other', settingsPath: [], hostname: null, groupingHostname: 'opencode.ai', groupingSource: 'model-catalog' },
    ] };
    if (call === 2) return Promise.reject(new Error('private metadata failure'));
    pendingSignal = signal;
    return new Promise(resolve => { release = resolve; });
  });
  await manager.load();
  assert.equal(manager.getSnapshot().entries[0].routeHostname, 'api.openai.com');
  assert.equal(manager.getSnapshot().entries[1].groupingHostname, 'opencode.ai');
  await manager.load();
  assert.equal(manager.getSnapshot().entries[0].routeHostname, null);
  assert.equal(Object.hasOwn(manager.getSnapshot().entries[1], 'groupingHostname'), false);
  const pending = manager.load();
  await Promise.resolve();
  manager.dispose();
  assert.equal(pendingSignal.aborted, true);
  release({ routes: [] });
  await pending;
  assert.notEqual(manager.getSnapshot().status, 'ready', 'disposed metadata cannot publish a new snapshot');
});

function companyRulesFixture(extra = {}) {
  return { rules: normalize(BUNDLED_CLIENT_COMPANY_RULES), source: 'bundled', lastCheckedAt: null, lastUpdatedAt: null, error: null, refreshing: false, persistent: true, ...extra };
}

test('browser fallback is generated from the independent JSON rule source and dynamic rules add companies without client changes', async () => {
  const fileRules = JSON.parse(await readFile(new URL('../company-rules.json', import.meta.url), 'utf8'));
  assert.deepEqual(normalize(BUNDLED_CLIENT_COMPANY_RULES), fileRules);
  const candidate = companyRulesFixture({ source: 'online' });
  candidate.rules.revision++;
  candidate.rules.companies.push({ id: 'new-company', names: { en: 'New Company', zh: '新公司' }, domains: ['newcompany.com'], icon: null, evidence: ['https://newcompany.com/'] });
  const snapshot = modelProviderRulesSnapshot(candidate);
  assert.ok(snapshot);
  const row = { routeHostname: 'api.newcompany.com', entry: { provider: 'custom' } };
  assert.equal(groupModelProvidersByCompany([row])[0].key, 'domain:newcompany.com');
  const group = groupModelProvidersByCompany([row], 'Unknown', company => company.names.zh, snapshot.rules.companies)[0];
  assert.equal(group.key, 'company:new-company');
  assert.equal(group.title, '新公司');
  assert.equal(group.icon, null);
  assert.equal(providerIconKeyForGroupKey(group.key, group.icon), null);
  // The browser no longer drives company-rule refresh; the Host route serves the agent tool only.
  assert.equal(source.includes("JSON.stringify({ action: 'refresh' })"), false);
  assert.equal(source.includes("t('companyRulesPrivacy')"), false);
  assert.equal(source.includes('dangerouslySetInnerHTML'), false);
});

test('exact service hosts and restricted cloud suffixes do not brand arbitrary shared-hosting tenants', () => {
  const snapshot = modelProviderRulesSnapshot(companyRulesFixture());
  assert.ok(snapshot);
  const groupKey = host => groupModelProvidersByCompany([{ routeHostname: host }], 'Unknown', company => company.names.en, snapshot.rules.companies)[0].key;
  assert.equal(groupKey('ai-gateway.vercel.sh'), 'company:vercel');
  assert.equal(groupKey('tenant.vercel.sh'), 'domain:vercel.sh');
  assert.equal(groupKey('tenant.ai-gateway.vercel.sh'), 'domain:vercel.sh');
  assert.equal(groupKey('bedrock-runtime.us-east-1.amazonaws.com'), 'company:amazon-web-services');
  assert.equal(groupKey('unrelated.s3.amazonaws.com').startsWith('company:'), false);
  assert.equal(groupKey('resource.openai.azure.com'), 'company:microsoft');
  assert.equal(groupKey('resource.services.ai.azure.com'), 'company:microsoft');
  assert.equal(groupKey('unrelated.azure.com'), 'domain:azure.com');
  assert.equal(groupKey('token-plan.cn-beijing.maas.aliyuncs.com'), 'company:alibaba-cloud');
  assert.equal(groupKey('tenant-owned-bucket.oss-cn-hangzhou.aliyuncs.com'), 'domain:aliyuncs.com');
  assert.equal(groupKey('customer.cn-hangzhou.fc.aliyuncs.com'), 'domain:aliyuncs.com');
  assert.equal(groupKey('api.kimi.com'), 'company:moonshot-ai');
  assert.equal(groupKey('api.ant-ling.com'), 'company:ant-group');
  assert.equal(groupKey('radius.pi.dev'), 'company:earendil');
  assert.equal(groupKey('opencode.ai'), 'company:anomaly');
  assert.equal(groupKey('api.groq.com'), 'company:groq');
  assert.equal(groupKey('api.x.ai'), 'company:spacexsi-grok');
});

test('new registered domains are detected locally then covered by newer rule data without changing company IDs in code', () => {
  const rows = [
    { routeHostname: 'api.deepseek.com' }, { routeHostname: 'api.deepseek.com' },
    { routeHostname: 'api.future-provider.com' }, { routeHostname: 'other.future-provider.com' },
    { routeHostname: null, entry: { provider: 'openai' } },
  ];
  assert.deepEqual(normalize(modelProviderCompanyCoverage(rows)), {
    totalHosts: 3, coveredHosts: 1, unmatchedHosts: ['api.future-provider.com', 'other.future-provider.com'],
    unmatchedDomains: ['future-provider.com'], noHostRoutes: 1,
  });
  const future = companyRulesFixture({ source: 'online' }); future.rules.revision++;
  future.rules.companies.push({ id: 'future-provider', names: { en: 'Future Provider', zh: 'Future Provider' }, domains: ['future-provider.com'], icon: null, evidence: ['https://future-provider.com/'] });
  const snapshot = modelProviderRulesSnapshot(future);
  assert.ok(snapshot);
  assert.deepEqual(normalize(modelProviderCompanyCoverage(rows, snapshot.rules.companies)), {
    totalHosts: 3, coveredHosts: 3, unmatchedHosts: [], unmatchedDomains: [], noHostRoutes: 1,
  });
  assert.equal(groupModelProvidersByCompany(rows, 'Unknown', company => company.names.en, snapshot.rules.companies).find(group => group.key === 'company:future-provider').entries.length, 2);
  assert.equal(source.includes("t('companyRulesPendingHosts')"), false);
  assert.equal(source.includes("t('companyRulesPendingHelp')"), false);
});

test('browser rule validation rejects exact host conflicts, empty selectors and private suffixes while permitting exact-only companies', () => {
  const exactOnly = companyRulesFixture();
  exactOnly.rules.companies.push({ id: 'future-exact', names: { en: 'Future Exact', zh: 'Future Exact' }, domains: [], exactHosts: ['api.future-exact.com'], icon: null, evidence: ['https://future-exact.com/'] });
  assert.ok(modelProviderRulesSnapshot(exactOnly));
  for (const modify of [
    company => { company.exactHosts = []; },
    company => { company.exactHosts = ['api.openai.com']; },
    company => { company.exactHosts = ['resource.openai.azure.com']; },
    company => { company.exactHosts = ['api.future-exact.com/path']; },
    company => { company.exactHosts = ['127.0.0.1']; },
    company => { company.exactHosts = ['api.internal']; },
    company => { company.hostSuffixes = ['github.io']; },
  ]) {
    const value = normalize(exactOnly); modify(value.rules.companies.at(-1));
    assert.equal(modelProviderRulesSnapshot(value), null);
  }
});

test('invalid rules metadata cannot introduce remote icons, unsafe names, broad suffixes or remove the bundled minimum version', () => {
  for (const modify of [
    value => { value.rules.revision--; },
    value => { value.rules.schemaVersion = 2; },
    value => { value.rules.companies[0].icon = 'https://external.example/logo.svg'; },
    value => { value.rules.companies[0].names.en = String.fromCodePoint(0x202e) + 'Fake'; },
    value => { value.rules.companies[0].domains = ['co.uk']; },
    value => { value.rules.companies[0].hostSuffixes = ['github.io']; },
    value => { value.rules.companies[1].domains = ['openai.com']; },
    value => { value.error = 'private upstream error'; },
    value => { value.lastCheckedAt = 'bad'; },
  ]) {
    const value = companyRulesFixture(); modify(value);
    assert.equal(modelProviderRulesSnapshot(value), null);
  }
});

test('rule refresh retains last valid mappings on rejected transport, malformed data or rollback and never stores CSRF in state', async () => {
  let next = companyRulesFixture({ source: 'online' });
  next.rules.revision++;
  const original = normalize(next);
  const { manager } = routeHostManagerFixture(async () => ({ routes: [] }), {
    readCompanyRules: async () => ({ ...original, csrf: 'browser-only-token' }),
    refreshCompanyRules: async () => { if (next instanceof Error) throw next; return next; },
  });
  try {
    await manager.load();
    assert.equal(manager.getSnapshot().companyRules.rules.revision, original.rules.revision);
    assert.equal(JSON.stringify(manager.getSnapshot().companyRules).includes('browser-only-token'), false);
    await manager.refreshCompanyRules();
    assert.equal(manager.getSnapshot().companyRulesRefreshResult, 'current');
    for (const bad of [new Error('private failed response'), { rules: {} }, companyRulesFixture()]) {
      next = bad;
      await manager.refreshCompanyRules();
      assert.equal(manager.getSnapshot().companyRules.rules.revision, original.rules.revision);
      assert.equal(manager.getSnapshot().companyRulesError, true);
      assert.equal(manager.getSnapshot().companyRulesRefreshing, false);
    }
    next = companyRulesFixture({ error: 'not-published' }); next.rules.revision = original.rules.revision;
    await manager.refreshCompanyRules();
    assert.equal(manager.getSnapshot().companyRules.error, 'not-published');
    assert.equal(manager.getSnapshot().companyRulesError, false);
    assert.equal(manager.getSnapshot().companyRulesRefreshResult, null);
    next = companyRulesFixture({ source: 'online' }); next.rules.revision = original.rules.revision + 1;
    await manager.refreshCompanyRules();
    assert.equal(manager.getSnapshot().companyRulesRefreshResult, 'updated');
  } finally { manager.dispose(); }
});

test('a stale normal rules read cannot overwrite a newer manual refresh', async () => {
  let release;
  const fresh = companyRulesFixture({ source: 'online' }); fresh.rules.revision += 2;
  const { manager } = routeHostManagerFixture(async () => ({ routes: [] }), {
    readCompanyRules: () => new Promise(resolve => { release = resolve; }),
    refreshCompanyRules: async () => fresh,
  });
  try {
    const loading = manager.load();
    await Promise.resolve();
    await manager.refreshCompanyRules();
    release(companyRulesFixture());
    await loading;
    assert.equal(manager.getSnapshot().companyRules.rules.revision, fresh.rules.revision);
  } finally { manager.dispose(); }
});

test('configuration removal never deletes credentials and explains adapter/credential retention', () => {
  const providerManager = source.split('function ProviderManager({ manager })')[1].split('function ProviderManagerEditor')[0];
  const removal = providerManager.split('const confirmRemoval = async row => {')[1].split('const renderProviderEntry = row => {')[0];
  assert.ok(removal.includes("{ op: 'unset', path: row.path }"));
  assert.ok(!removal.includes('credential'));
  assert.ok(!removal.includes('credentials.unset'));
  assert.ok(providerManager.includes("t('providerManagerUiRemoveConfirmNote')"));
  assert.ok(providerManager.includes("providerManagerUiRemoveConflict"));
  assert.ok(providerManager.includes('focusLauncher(`remove:${row.entry.provider}`)'));
  assert.ok(providerManager.includes('ref: removalConfirmationRef'));
  assert.ok(source.includes("providerManagerRemove: 'Remove configuration'"));
  assert.ok(source.includes('Removing this configuration does not uninstall its adapter or clear saved credentials.'));
  assert.equal(source.includes('providerManagerUiRemoveCredentialNote'), false);
});

test('provider settings use clickable organization cells with OpenAI details nested inside its cell', () => {
  const page = source.split('function Page()')[1].split('function PopupSurface')[0];
  const providers = source.split('function ProviderSettings({ rows, loading, error, colorThresholds })')[1].split('function Page()')[0];
  const extra = source.split('function OpenAIExtraSettings({ routes })')[1].split('function ProviderSettings')[0];
  assert.ok(page.includes("const tabs = ['providers', 'colors']"));
  assert.ok(page.includes("h(ProviderSettings, { rows, loading: state.loading, error: state.error, colorThresholds: state.data?.colorThresholds })"));
  assert.ok(providers.includes("const routes = rows.filter(row => providerCompany(row) === option.key)"));
  assert.ok(providers.includes("option.key === 'other'"));
  assert.ok(providers.includes("title: providerName(row), routes: [row]"));
  assert.ok(providers.includes("React.useEffect(() => { if (previousSelectedKey.current !== selectedKey)"));
  assert.ok(providers.includes("error ? null : h('p', { role: 'status', className: 'pq-muted' }, t(loading ? 'loading' : 'empty'))"));
  assert.ok(providers.includes("ref: viewFocusRef"));
  assert.ok(source.includes('.pq-page h3.pq-provider-detail-title{'));
  assert.ok(providers.includes("className: 'pq-provider-cell'"));
  assert.ok(providers.includes("onClick: () => setSelectedKey(group.key)"));
  assert.ok(providers.includes("h(OpenAIExtraSettings, { routes: adminRoutes })"));
  assert.ok(providers.indexOf("h('h4', { className: 'pq-provider-routes-title' }") < providers.indexOf("h(OpenAIExtraSettings, { routes: adminRoutes })"));
  assert.ok(providers.includes("h(Row, { row, loading, compact: true, colorThresholds })"));
  assert.ok(extra.includes("new URL('api/provider-quota-settings'"));
  assert.ok(extra.includes("action: 'saveAdminKey', adminKey: secret"));
  assert.ok(extra.includes("type: 'password'"));
  assert.ok(extra.includes("setKeyDraft('')"));
  assert.ok(extra.includes('const hasKeyInput = keyDraft.trim().length > 0'));
  assert.ok(extra.includes('disabled: busy || !hasKeyInput'));
  assert.ok(extra.includes('const secret = keyDraft.trim()'));
  assert.equal(extra.includes('const valid = /^sk-admin-'), false);
  assert.equal(extra.includes('localStorage'), false);
  assert.equal(extra.includes('sessionStorage'), false);
  assert.ok(extra.includes("const [keyDraft, setKeyDraft] = React.useState('')"));
  assert.ok(!extra.includes("useState(data?.adminKey"));
});

test('provider cells render bundled institution marks and a custom-provider fallback', () => {
  const icons = source.split('const PROVIDER_MARKS = Object.freeze({')[1].split('function ProviderIcon')[0];
  const providers = source.split('function ProviderSettings({ rows, loading, error, colorThresholds })')[1].split('function Page()')[0];
  for (const key of ['openai:', 'deepseek:', 'glm:', 'minimax:', 'opencode:']) assert.ok(icons.includes(key));
  assert.ok(providers.includes('h(ProviderIcon, { group })'));
  assert.ok(source.includes('function providerGroupSummary(group)'));
  assert.ok(source.includes("t('lowestRemaining')"));
  assert.ok(providers.includes('providerGroupSummary(group)'));
  assert.ok(source.includes('pq-provider-icon-fallback'));
  assert.ok(icons.includes("color: '#4D6BFE'"));
  assert.equal(icons.includes('https://'), false);
});

test('Admin Key status distinguishes checking, missing and configured states and links to key settings', () => {
  const extra = source.split('function OpenAIExtraSettings({ routes })')[1].split('function Page()')[0];
  assert.ok(extra.includes('data || busy ? h(\'p\''));
  assert.ok(extra.includes('pq-admin-key-configured'));
  assert.ok(extra.includes("adminKeyConfigured ? { 'data-tone': 'success' } : {}"));
  assert.ok(extra.includes("t(!data ? 'adminChecking' : adminKeyConfigured ? 'adminConfigured' : 'adminMissing')"));
  assert.ok(source.includes('.pq-dot{width:6px;height:6px;border-radius:50%;flex:none;background:var(--dsw-alias-state-idle-primary)}'));
  assert.ok(source.includes('.pq-admin-key-configured{color:var(--dsw-alias-state-success-primary)}'));
  assert.ok(extra.includes("href: 'https://platform.openai.com/settings/organization/admin-keys'"));
  assert.ok(extra.includes("target: '_blank', rel: 'noopener noreferrer'"));
  assert.ok(source.includes("adminHowToGetKey: '在 OpenAI Platform 的 Organization → Settings → Admin keys 中创建（需组织所有者权限）：'"));
  assert.ok(source.includes("adminHowToGetKey: 'Create one in OpenAI Platform → Organization → Settings → Admin keys (organization owner access required):'"));
});

test('OpenAI spend card selects today and complete UTC-day ranges with matching key breakdowns', async () => {
  const metric = source.split('function Metric({ metric, colorThresholds })')[1].split('function Row({ row')[0];
  assert.ok(metric.includes('React.useState(\'7d\')'));
  assert.ok(metric.includes("['0d', '1d', '7d', '30d']"));
  assert.ok(metric.includes('const rangeHelpId = React.useId()'));
  assert.ok(metric.includes("'aria-describedby': rangeHelpId"));
  assert.ok(metric.includes("className: 'pq-muted', id: rangeHelpId"));
  assert.ok(source.includes("range0d: '0d'"));
  assert.ok(metric.includes('metric.ranges?.[range]'));
  assert.ok(metric.includes('selected.breakdown'));
  assert.ok(metric.includes('breakdown.length > 0'));
  assert.equal(metric.includes('breakdown.length > 1'), false);
  assert.ok(metric.includes("selected.noRecords ? h('div', { className: 'pq-breakdown-list' }"));
  assert.ok(metric.includes("role: 'status'"));
  assert.ok(source.includes('.pq-breakdown-list .pq-breakdown{margin-top:0;padding:8px 10px;border:1px solid'));
  assert.ok(metric.includes("t('completeUtcDays')"));
  assert.ok(metric.includes("t('spendRange')"));
  assert.ok(metric.includes("t('rangeAnnouncement')"));
  assert.ok(metric.includes("'aria-live': 'polite'"));
  assert.ok(metric.includes("t('costsLag')"));
  assert.ok(metric.includes("t('apiSpend')"));
  assert.ok(source.includes('Costs data may lag or be backfilled'));
  assert.ok(source.includes('数据可能延迟或回填'));
  assert.ok(source.includes('0d 为 UTC 今日（00:00 至查询时刻）；1d 为昨天，7d/30d 为截至昨天的完整 UTC 日。'));
  assert.ok(source.includes('0d is today in UTC (00:00 through query time)'));
  assert.ok(source.includes('today-so-far and completed-day totals may change'));
  assert.ok(!source.includes('不含今天'));
  assert.ok(metric.includes("entry.apiKeyName || (entry.apiKeyId ? `${t('apiKey')} ${entry.apiKeyId}` : t('apiKeyUnattributed'))"));
  assert.ok(!metric.includes('metric.daily'));
  assert.ok(!metric.includes("t('todaySpend')"));
  assert.ok(!metric.includes("t('period')"));
  assert.ok(!metric.includes('SpendTrend'));
  assert.ok(!source.includes('function SpendTrend'));
  assert.ok(!source.includes('pq-chart-'));
  assert.ok(metric.includes('role: \'list\''));
  // The grouped request and 30-day aggregation live in the Host costs module.
  const costs = await readFile(new URL('../src/openai-costs.js', import.meta.url), 'utf8');
  assert.ok(costs.includes("url.searchParams.append('group_by', 'api_key_id')"));
  assert.ok(costs.includes("ranges,\n      ...(monthRecords.get(currency) === undefined ? { noRecords: true } : {})"));
  assert.ok(costs.includes('apiKeyId: apiKeyId || null'));
  assert.ok(costs.includes('historyStart = Math.max(0, historyEnd - 30 * dayMs)'));
});

test('OpenAI details conditionally embed the safe Codex authorization panel', () => {
  const provider = source.split('function ProviderSettings({ rows, loading, error, colorThresholds })')[1].split('function Page()')[0];
  const panel = source.split('function CodexAuthorizationPanel()')[1].split('function providerGroupSummary')[0];
  assert.ok(provider.includes("selected.key === 'openai' ? selected.routes.filter(row => row.kind === 'codex') : []"));
  assert.ok(provider.includes('codexRoutes.length ? h(CodexAuthorizationPanel) : null'));
  assert.ok(panel.includes("new URL(payload ? 'api/provider-quota-codex-oauth/action' : 'api/provider-quota-codex-oauth', document.baseURI)"));
  assert.ok(panel.includes("credentials: 'same-origin'"));
  assert.ok(panel.includes("'X-Quota-Codex-CSRF': current.csrf"));
  assert.ok(panel.includes("redirect: 'error'"));
  const errorGuard = panel.indexOf('if (!response.ok) {');
  const snapshotParse = panel.indexOf('const data = await response.json()');
  assert.ok(errorGuard >= 0 && snapshotParse > errorGuard);
  assert.ok(panel.includes('try { failure = (await response.json())?.error; } catch'));
  assert.ok(panel.includes("response.status === 404 ? 'pluginUnavailable'"));
  assert.ok(panel.includes('safeCodexOfficialLink(attempt?.authUrl)'));
  assert.ok(panel.includes('validCodexCallback(value)'));
  assert.ok(panel.includes("onClick: () => request({ action: 'start', mode: 'browser' })"));
  assert.ok(panel.includes("onClick: () => request({ action: 'start', mode: 'device_code' })"));
  assert.equal(panel.includes('client-ready'), false);
  assert.ok(source.includes('var(--dsw-alias-state-success-primary)'));
  assert.equal(source.includes('@deepseek-ai/dsh-client-ui-primitives'), false);
});

test('main page, popup and dock use snapshot thresholds; palette stays fixed to theme tokens', () => {
  assert.ok(source.includes('colorThresholds: state.data?.colorThresholds'));
  assert.ok(source.includes('dockMetricItems(row.metrics, colorThresholds)'));
  assert.ok(source.includes('quotaTone(row, colorThresholds)'));
  assert.ok(source.includes('h(Metric, { key: `metric-${index}`, metric, colorThresholds })'));
  assert.ok(source.includes('h(Status, { row, colorThresholds })'));
  assert.ok(source.includes('colorThresholds: data.colorThresholds, checkedAt: data.checkedAt'));
  for (const tone of ['success', 'warn', 'error']) assert.ok(source.includes(`--dsw-alias-state-${tone}-primary`));
  assert.equal(source.includes('greenColor'), false);
  assert.equal(source.includes('orangeColor'), false);
  assert.equal(source.includes('redColor'), false);
});

test('Codex Credits preserve decimal precision, real zero and negative balances without currency conversion', () => {
  for (const amount of ['0', '-0.00', '-2.50', '0.000000000000000001', '99999999999999999999.123456789012345678900']) {
    assert.deepEqual(normalize(codexCreditsPresentation({ type: 'credits', unit: 'credits', state: 'balance', amount })), { state: 'balance', amount });
  }
  for (const state of ['unlimited', 'available', 'unavailable', 'unknown']) {
    assert.deepEqual(normalize(codexCreditsPresentation({ type: 'credits', unit: 'credits', state, amount: '999' })), { state });
  }
});

test('Codex Credits display at most two rounded decimals without trailing zeros or floating-point loss', () => {
  for (const [amount, expected] of [
    ['123.456789', '123.46'], ['123.450000', '123.45'], ['123.4', '123.4'], ['123.0000', '123'],
    ['000123.4500', '123.45'], ['9.999', '10'], ['1.005', '1.01'], ['-1.005', '-1.01'],
    ['0', '0'], ['-0.0000', '0'], ['0.0049', '0'], ['0.005', '0.01'], ['-0.0049', '0'], ['-0.005', '-0.01'],
    ['99999999999999999999.995', '100000000000000000000'],
  ]) {
    assert.equal(formatCodexCreditsAmount(amount), expected, amount);
    assert.equal(codexCreditsPresentation({ type: 'credits', unit: 'credits', state: 'balance', amount }).amount, amount, 'display rounding must not modify the exact value');
  }
  for (const amount of [undefined, null, '', '1e3', '1\n', 123]) assert.equal(formatCodexCreditsAmount(amount), '—');
});

test('Codex Credits never turn missing or malformed values into a fabricated zero', () => {
  for (const metric of [
    undefined, {}, { type: 'balance', unit: 'credits', state: 'balance', amount: '12' },
    ...[undefined, null, 0, 12, '', ' ', '+1', '.5', '1.', '1e3', '1\n', 'NaN', 'Infinity', '12 USD', '<script>', '1'.repeat(129)].map(amount => ({ type: 'credits', unit: 'credits', state: 'balance', amount })),
    { type: 'credits', unit: 'USD', state: 'balance', amount: '12' },
    { type: 'credits', unit: 'credits', state: '__proto__', amount: '12' },
  ]) assert.deepEqual(normalize(codexCreditsPresentation(metric)), { state: 'unknown' });
});

test('Codex Credits do not color a healthy subscription as exhausted or distort dock quota percentages', () => {
  const windows = [{ type: 'quota-window', label: 'rolling', usedPercent: 10 }, { type: 'quota-window', label: 'weekly', usedPercent: 40 }];
  for (const credits of [
    { type: 'credits', unit: 'credits', state: 'balance', amount: '0' },
    { type: 'credits', unit: 'credits', state: 'balance', amount: '-2.5' },
    { type: 'credits', unit: 'credits', state: 'unlimited' },
    { type: 'credits', unit: 'credits', state: 'unknown' },
  ]) {
    const metrics = [...windows, credits];
    assert.equal(quotaTone({ status: 'ok', metrics }), 'success');
    assert.deepEqual(normalize(dockMetricItems(metrics)), normalize(dockMetricItems(windows)));
    assert.equal(quotaTone({ status: 'ok', metrics: [{ type: 'quota-window', usedPercent: 100 }, credits] }), 'error');
  }
});

test('Codex card renders Credits independently of money, percentage bars and purchasing controls', () => {
  const credits = source.split("if (metric.type === 'credits') {")[1]?.split("if (metric.type === 'spend') {")[0];
  assert.ok(credits);
  assert.ok(credits.includes('codexCreditsPresentation(metric)'));
  assert.ok(credits.includes("className: 'pq-metric pq-codex-credits'"));
  assert.ok(credits.includes('formatCodexCreditsAmount(credits.amount)'));
  assert.equal(credits.includes('`${credits.amount} Credits`'), false);
  assert.ok(credits.includes("'pq-credits-value'"));
  assert.ok(credits.includes("title: credits.state === 'balance' ? credits.amount : value"));
  assert.ok(source.includes('.pq-credits-value{font-size:20px;'));
  assert.ok(credits.includes("t('codexCreditsNote')"));
  assert.ok(credits.includes("'aria-live': 'polite'"));
  assert.equal(/money\(|currency|progressbar|usedPercent|load\(|fetch\(|purchase|recharge/.test(credits), false);
  for (const key of ['codexCreditsUnlimited', 'codexCreditsAvailable', 'codexCreditsUnavailable', 'codexCreditsNotProvided']) assert.ok(credits.includes(key));
  assert.ok(source.includes("codexCredits: 'Credits 余额'"));
  assert.ok(source.includes("codexCredits: 'Credits balance'"));
  assert.ok(source.includes('非 OpenAI API 余额'));
  assert.ok(source.includes('not an OpenAI API balance'));
});

test('Codex grant-state guidance remains fixed and never triggers login', () => {
  assert.ok(source.includes("case 'openai': case 'codex': return 'openai'"));
  assert.ok(source.includes("opencode-go-only"));
  for (const key of ['codex-usage', 'codex-auth-required', 'codex-auth-expired']) assert.ok(source.includes(`'${key}':`));
  assert.ok(source.includes('本插件不会自动续期或发起推理'));
  assert.equal(quotaTone({ status: 'codex-auth-required', metrics: [] }), 'idle');
  assert.equal(quotaTone({ status: 'codex-auth-expired', metrics: [] }), 'idle');
  assert.equal(source.includes('authorization.begin'), false);
  const codexPanel = source.split('function CodexAuthorizationPanel()')[1].split('function providerGroupSummary')[0];
  const mountEffect = codexPanel.split('React.useEffect(() => {')[1].split('}, []);')[0];
  assert.ok(mountEffect.includes('request();'));
  assert.equal(mountEffect.includes("action: 'start'"), false);
});

test('Z.AI Coding Plan is distinguished from Standard API billing rows', () => {
  assert.ok(source.includes("if (row.reason === 'zai-api-status-only') return t('zai-api-status-only-short')"));
  assert.ok(source.includes("['glm-cn', 'zai-coding-plan', 'glm-cn-team', 'zai-coding-plan-team', 'codex', 'opencode-go', 'minimax-cn'].includes(row.kind)"));
  assert.ok(source.includes("zaiPlan: 'GLM Coding · Global'"));
  assert.ok(source.includes("'zai-api-status-only': 'This is an international Z.AI Standard API route (/api/paas/v4), not a Coding Plan endpoint."));
  assert.ok(source.includes("'zai-api-status-only': '这是 Z.AI 国际普通 API 路由（/api/paas/v4），不是 Coding Plan"));
  assert.ok(source.includes("t(row.reason === 'zai-api-status-only' ? 'zai-api-billing-dashboard' : row.kind === 'zai-coding-plan' ? 'zai-plan-dashboard' : 'dashboard')"));
  assert.ok(source.includes("'zai-plan-dashboard': 'Plan usage'"));
  assert.ok(source.includes("'zai-plan-dashboard': '套餐用量'"));
  assert.ok(source.includes("'zai-api-billing-dashboard': 'Billing console'"));
  assert.ok(source.includes("'zai-api-billing-dashboard': '账单控制台'"));
  assert.ok(source.includes("if (row.kind === 'glm-standard-cn') return t('kindBalance')"));
  assert.ok(source.includes("h(ResourcePackage, { key: `package-${index}`, metric, colorThresholds })"));
  assert.ok(source.includes("metric.wallet === 'glm-standard' ? 'availableBalance'"));
  assert.ok(source.includes("packageActive: 'Active'"));
  assert.ok(source.includes("metric.status === 'expired' ? 'expiredPackageBalance'"));
  assert.ok(source.includes("expiredPackageBalance: 'Expired package balance (not usable)'"));
  assert.ok(source.includes("t('resourcePackages')"));
  assert.ok(source.includes("expiresServerLocal: 'Expires (provider time; timezone unspecified)'"));
  assert.ok(source.includes("gridColumn: '1 / -1'"));
  assert.ok(source.includes("'glm-standard-api': 'GLM Standard API account and package endpoints'"));
  assert.ok(source.includes("'glm-standard-api': 'GLM 普通 API 账户与资源包接口'"));
});
