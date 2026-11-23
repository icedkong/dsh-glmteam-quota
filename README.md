<div align="center">

<img src="docs/icon.png" alt="GLM Quota+ plugin icon" width="160">

# GLM Quota+

**A quota and usage dashboard for DeepSeek Harness Desktop: multi-provider balances, subscription quotas (including the **GLM Team Plan**) and OpenAI organization spend. A single 5-hour energy ring in the composer opens a remaining-quota card where you switch between the personal and team plan. No npm runtime dependencies or install scripts.**

[![Stars](https://img.shields.io/github/stars/icedkong/dsh-glmteam-quota?style=flat&label=stars&color=f59e0b)](https://github.com/icedkong/dsh-glmteam-quota/stargazers)
[![License](https://img.shields.io/badge/license-MIT-0891b2)](LICENSE)
[![upstream](https://img.shields.io/badge/fork%20of-DSH%20Quota%2B-3859FF?logo=github)](https://github.com/WXYS1209/dsh-quota-cordis)

[中文说明](<README.zh.md>) &nbsp;|&nbsp; [GitHub](https://github.com/icedkong/dsh-glmteam-quota) &nbsp;|&nbsp; [Upstream](https://github.com/WXYS1209/dsh-quota-cordis) &nbsp;|&nbsp; [MIT](<LICENSE>)

</div>

## Tribute

**GLM Quota+ is a fork of [DSH Quota+](https://github.com/WXYS1209/dsh-quota-cordis)** by [WXYS1209](https://github.com/WXYS1209).

Most of what you see here — the DeepSeek / GLM / MiniMax / OpenCode / Codex / OpenAI quota adapters, the "fail closed rather than leak credentials to a relay" security model, CSRF and read-back checks, several hundred tests and the release engineering — comes from upstream. This repository only adds one scenario upstream did not cover and trims the interface to personal taste.

Upstream's full commit history, MIT license and copyright notices are preserved. If this plugin helps you, please star the [upstream repository](https://github.com/WXYS1209/dsh-quota-cordis) first; it is still maintained, and shared data such as company rules keeps refreshing from upstream.

## What this fork changes (relative to upstream 0.7.5)

### Added

- **GLM Team Plan quota.** An opt-in "Team" sibling row for each GLM Coding Plan route: the official `quota/limit` monitor with `?type=2` and optional `bigmodel-organization` / `bigmodel-project` scope headers — the same request ZCode makes (its source was consulted, and the shape was verified with a real team account). Enable it under Quotas → GLM / Z.AI → Additional settings → GLM Team Plan and enter the organization and project IDs.
- **Definite states instead of "unrecognized response".** The personal monitor rejects a team key with "no coding plan"; the team monitor returns empty data until a project scope is supplied. Both now read as "no personal plan" and "scope required" instead of a red error.
- **Remaining-quota card.** The composer popup is a "Remaining quota" card: a clock-style countdown for the 5-hour pool, the reset date for longer pools, bars filled by remaining amount, a Personal | Team switch and a "More ›" link to the official dashboard.
- **5-hour energy ring.** The composer summary collapses into one ring that mirrors DSH's built-in ContextMeter (14 px, same spacing and hover state), showing the 5-hour pool's remaining share, coloured by your green / orange / red thresholds.
- `scripts/probe-glm-team.mjs`: probe the raw personal/team monitor replies with your own key for troubleshooting (never prints the key).

### Trimmed and polished

- **The Models tab is removed.** Upstream ships a provider/model manager inside the settings page that duplicates DSH's official Models page. This fork keeps only the Quotas and Settings tabs, opens on Quotas, and no longer instantiates that manager (fewer pointless requests and subscriptions).
- Unsaved Team Plan input **survives window switches** (upstream's other forms reload on focus).
- New name and icon: GLM Quota+, package `dsh-glmteam-quota`, matching the repository.
- Untouched: the security model, endpoint allow-lists, the company-rule data source (still upstream's public rule file) and the agent tools (`provider_quota`, `quota_color_settings`, `provider_company_rules`).

## Install

This documentation covers **0.1.0**. The DSH range is inherited from upstream: `>=0.2.2-rc.1 <0.2.3-0`; the source-audited baseline is **0.2.2-rc.5**.

```sh
dsh plugin --profile desktop add https://github.com/icedkong/dsh-glmteam-quota.git
# or a local checkout
dsh plugin --profile desktop add /path/to/checkout
```

After updating plugin code, restart DSH and fully refresh the page. The form's **Reload** button refreshes data, not code.

If upstream's `dsh-quota-cordis` is installed, remove it first — both register the same `provider-quota` entry and cannot be enabled together. Settings live in the DSH profile's `cordis.patch.yml` under the unchanged entry id, so they survive the swap.

## Features

The settings page is titled **GLM Quota+**, with **Quotas** and **Settings** tabs; providers and models are managed on DSH’s official Models page:

- **Quotas:** dashboard for multi-provider balances, subscription quotas (including the GLM Team Plan) and OpenAI organization spend.
- **Settings:** configurable remaining-quota thresholds.
- **Composer energy ring:** the current provider's 5-hour pool; click to open the remaining-quota card.
- **Agent tools:** `provider_quota`, `quota_color_settings` and `provider_company_rules`.

## Provider support

| Provider | Display | Status |
|---|---|---|
| DeepSeek API | Available, recharge and granted balance | Upstream accepted |
| DeepSeek account | Separate recharge and bonus wallets | Upstream accepted |
| GLM Coding Plan — China | Subscription windows | Upstream accepted |
| GLM Coding Plan — Global | Subscription windows | Preview |
| **GLM Team Plan — China / Global** | Sibling row: `?type=2` team monitor + organization/project scope | **Verified with a real team account** |
| GLM Standard API — China | CNY balance and resource packages | Preview |
| Z.AI Standard API — Global | Detection/status only | No balance query |
| OpenAI API | Organization spend: UTC today, yesterday, 7d/30d; API-key breakdown | Upstream accepted |
| OpenAI Codex | Subscription windows and reported Credits | Windows accepted upstream; Credits preview |
| OpenCode Go | Reported 5-hour/weekly/monthly windows | Preview |
| MiniMax China M Plan | Remaining quota | Upstream accepted |
| Other providers/relays | Status and reason | No quota adapter |

Missing data is not shown as zero; Credits are usage units, not an API cash balance.

## Usage notes

- **GLM Team Plan quota is opt-in.** Open Quotas → GLM / Z.AI → Additional settings → GLM Team Plan, tick the Coding Plan route, enter both the organization and project IDs and save. The plugin queries the official `?type=2` team monitor with the route's own key; it never picks a default project, so an empty scope is reported as "scope required". The IDs are the `bigmodel-organization` / `bigmodel-project` header values the official team usage page sends — visible in the browser's network panel. They are stored in plugin config, travel only as request headers and never appear in quota rows.
- **OpenAI spend needs a separate organization Admin key**, not an inference key. Enter it in OpenAI details; cost data may arrive late or be revised.
- **Codex login reuses DSH native authorization**; no extra OAuth UI plugin. Login starts only on an explicit click and is safely unavailable if the native capability is missing.

## Privacy and maintenance

Credentials stay on the local Host and never enter quota results. Quota queries are read-only, use fixed official HTTPS destinations and reject redirects. Native DeepSeek endpoint checks fail closed on invalid, uncertain or relay addresses; no official balance probe or stale official balance is substituted. The quota adapter does not read CLI credentials, cookies or refresh tokens, and does not refresh grants or run inference.

See [security boundaries](<SECURITY.md>) and [provider-rule coverage/maintenance](<docs/COMPANY_COVERAGE.md>) for endpoint precedence, private-state handling and rule updates.

## Development

- `index.js` / `client.js` — Host and browser entry points.
- `src/` — runtime modules; bundled data lives in `src/data/`.
- `company-rules.json` — provider-rule data (kept in sync with upstream), also fetched online at runtime, so it stays at the repository root.
- `locale/`, `icon.png`, `cordis.patch.yml` — package resources.
- `test/`, `scripts/`, `docs/` — tests, maintenance scripts and documentation. `node --test` runs the whole suite.

Tests do not replace real-browser/provider acceptance. Release notes: [Changelog](<CHANGELOG.md>).
