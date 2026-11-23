import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const source = await readFile(new URL('../client.js', import.meta.url), 'utf8');
const pureBlock = source.split('// BEGIN PURE LAYOUT')[1]?.split('// END PURE LAYOUT')[0];
assert.ok(pureBlock, 'production grouping helpers must remain pure and testable');
const {
  modelProviderCatalogGroupingHost, modelProviderRequestUrlForRow, modelProviderRouteHost, modelProviderCompanyCoverage,
  modelProviderGroupHostnames, groupModelProvidersByCompany, filterModelProviderCompanyGroups,
} = vm.runInNewContext(`${pureBlock}\n({modelProviderCatalogGroupingHost,modelProviderRequestUrlForRow,modelProviderRouteHost,modelProviderCompanyCoverage,modelProviderGroupHostnames,groupModelProvidersByCompany,filterModelProviderCompanyGroups})`, { URL });
const normalize = value => JSON.parse(JSON.stringify(value));
const catalogRow = provider => Object.freeze({ entry: { provider }, routeHostname: null, groupingHostname: 'opencode.ai', groupingSource: 'model-catalog' });

test('two OpenCode routes share a display grouping and are searchable by domain without fabricating a request endpoint', () => {
  const rows = [catalogRow('opencode'), catalogRow('opencode-go')];
  const groups = groupModelProvidersByCompany(rows);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].key, 'company:anomaly');
  assert.equal(groups[0].title, 'OpenCode');
  assert.equal(groups[0].icon, 'opencode');
  assert.deepEqual(normalize(groups[0].entries.map(row => row.entry.provider)), ['opencode', 'opencode-go']);
  assert.deepEqual(normalize(modelProviderGroupHostnames(groups[0])), ['opencode.ai']);
  assert.equal(filterModelProviderCompanyGroups(groups, 'opencode.ai opencode-go')[0], groups[0]);
  for (const row of rows) {
    assert.equal(modelProviderRequestUrlForRow(row), undefined);
    assert.equal(modelProviderRouteHost(row), null);
  }
  assert.deepEqual(normalize(modelProviderCompanyCoverage(rows)), { totalHosts: 0, coveredHosts: 0, unmatchedHosts: [], unmatchedDomains: [], noHostRoutes: 2 });
});

test('a real endpoint wins over catalog grouping, with no implicit hostname on legacy or uncertain rows', () => {
  const catalog = catalogRow('opencode-go');
  const rows = [
    { ...catalog, routeHostname: 'relay.example.net' },
    { ...catalog, groupingSource: undefined },
    { ...catalog, groupingHostname: 'opencode.ai/inference/go/v1' },
    { ...catalog, groupingHostname: '127.0.0.1' },
    { ...catalog, groupingHostname: 'opencode.invalid' },
    { ...catalog, routeHostname: undefined },
    { entry: catalog.entry, routeHostname: null },
  ];
  assert.equal(modelProviderRouteHost(rows[0]), 'relay.example.net');
  assert.equal(groupModelProvidersByCompany([rows[0]])[0].key, 'domain:example.net');
  for (const row of rows) assert.equal(modelProviderCatalogGroupingHost(row), null);
  for (const row of rows.slice(1)) assert.equal(groupModelProvidersByCompany([row])[0].key, 'unclassified');
});

test('catalog source is labeled for overview chips and individual affected rows', () => {
  assert.match(source, /title: 'GLM Quota\+'/);
  assert.match(source, /providerManagerCatalogGroupingSource: '来自内置模型目录，仅用于归组'/);
  assert.match(source, /providerManagerCatalogGroupingSource: 'Built-in model catalog; for grouping only'/);
  assert.match(source, /catalogGroupingHost \? h\('p', \{ className: 'pq-manager-meta' \}, `\$\{catalogGroupingHost\} · \$\{t\('providerManagerCatalogGroupingSource'\)\}`\)/);
  assert.match(source, /requestHosts\.has\(host\) \? host : `\$\{host\} · \$\{t\('providerManagerCatalogGroupingSource'\)\}`/);
});
