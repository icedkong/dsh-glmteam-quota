// Diagnostic probe for the BigModel / Z.AI Coding Plan monitors used by this plugin.
// Reads the API key from the environment and never prints it. Responses may contain
// quota data only; review before sharing. Mirrors src/manager.js request shapes:
//   personal: GET /api/monitor/usage/quota/limit            Authorization: <raw key>
//   team:     GET /api/monitor/usage/quota/limit?type=2     + bigmodel-organization / bigmodel-project
// Usage:
//   ZAI_CODING_CN_API_KEY=... node scripts/probe-glm-team.mjs
//   GLM_TEAM_ORGANIZATION_ID=... GLM_TEAM_PROJECT_ID=... node scripts/probe-glm-team.mjs
//   GLM_HOST=https://api.z.ai node scripts/probe-glm-team.mjs        # global Z.AI
import { styleText } from 'node:util';

const key = process.env.ZAI_CODING_CN_API_KEY ?? process.env.BIGMODEL_API_KEY;
if (!key) {
  console.error(styleText('red', 'Set ZAI_CODING_CN_API_KEY (or BIGMODEL_API_KEY) to the GLM API key this plugin should query.'));
  process.exit(2);
}
const host = (process.env.GLM_HOST ?? 'https://open.bigmodel.cn').replace(/\/+$/, '');
const organizationId = process.env.GLM_TEAM_ORGANIZATION_ID?.trim();
const projectId = process.env.GLM_TEAM_PROJECT_ID?.trim();
const quota = '/api/monitor/usage/quota/limit';
const cases = [
  ['personal', quota, {}],
  ['team · type=2, no scope headers (default project)', `${quota}?type=2`, {}],
];
if (organizationId && projectId) cases.push(['team · type=2 + organization/project', `${quota}?type=2`, { 'bigmodel-organization': organizationId, 'bigmodel-project': projectId }]);
else if (organizationId || projectId) console.error(styleText('yellow', 'GLM_TEAM_ORGANIZATION_ID and GLM_TEAM_PROJECT_ID must both be set; skipping the scoped probe.'));

console.log(`host: ${host}\nkey:  ${'*'.repeat(6)}…${key.slice(-4)} (len ${key.length})`);
for (const [label, path, headers] of cases) {
  const started = Date.now();
  try {
    const response = await fetch(host + path, { method: 'GET', redirect: 'error', headers: { Authorization: key, Accept: 'application/json', ...headers }, signal: AbortSignal.timeout(12_000) });
    const text = await response.text();
    let body;
    try { body = JSON.stringify(JSON.parse(text), null, 2); } catch { body = text; }
    console.log(`\n== ${label}\n   GET ${path}${Object.keys(headers).length ? `  ${Object.entries(headers).map(([k, v]) => `${k}=${v}`).join(' ')}` : ''}\n   HTTP ${response.status} · ${Date.now() - started} ms\n${body.slice(0, 4000)}`);
  } catch (error) {
    console.log(`\n== ${label}\n   GET ${path}\n   failed: ${error?.name ?? 'Error'}${error?.cause?.code ? ` (${error.cause.code})` : ''}`);
  }
}
