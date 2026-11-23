# Changelog

All notable changes are documented here. Release dates from 0.7.3 use Asia/Shanghai (UTC+08:00); earlier entries retain their recorded UTC dates.

## 0.7.6 — 2026-11-23

- **Renamed to GLM Quota+** (`dsh-glmteam-quota`, repository `icedkong/dsh-glmteam-quota`) as a focused fork of DSH Quota+ (`WXYS1209/dsh-quota-cordis`, MIT; upstream notices retained). The package name, client module id, bundle patch, locale titles, metadata and docs all follow the new name; the settings entry id (`provider-quota`) and service names are unchanged. Company rules still refresh from the upstream public rule source.
- Add **GLM Team Plan** quota as an opt-in sibling row for each GLM Coding Plan route (China `open.bigmodel.cn` and Global `api.z.ai`). It reuses the route's own API key against the official monitor with `?type=2`, which the backend routes to the team subscription, and sends the optional `bigmodel-organization` / `bigmodel-project` scope headers exactly as ZCode does (`docs/bigmodel-coding-plan-usage-quota.md`, `bigmodelUsageQuotaProvider.ts`). Live probe with a team key confirmed the request shape: the personal monitor rejects the key ("当前用户不存在coding plan"), the team monitor accepts `type=2` but answers an empty success until an organization/project scope is supplied.
- Enable it under **Quotas → GLM / Z.AI → Additional settings → GLM Team Plan** and enter both the organization and project IDs: the team monitor never picks a default project, and an empty success without a scope is reported as `team-scope-required` instead of a parse error or a fake zero. IDs accept up to 128 printable ASCII characters, both or neither, are stored in plugin config, are part of the team row's cache identity and never appear in quota rows.
- The team row inherits the route's key, dashboard link and any blocked state, has its own cache identity and per-row refresh, and is labelled "团队版 / Team". Definite "no plan" replies from either monitor are reported as a state (`no-plan`, worded per personal/team row) instead of a generic upstream error, so a team key on the personal row no longer shows "unrecognized response".
- Show the Team Plan where it matters: the composer dock prefers whichever of a provider's personal/team rows carries quota (so a team key no longer shows "no personal plan"), and the quota popup becomes a **剩余额度 / Remaining quota** card with a 个人版 / 团队版 switch, one refresh for both plans and a 更多 link to the official dashboard. Each window shows remaining %, a clock-style countdown for the 5-hour pool or the reset date for longer pools, and a remaining bar. The dock itself collapses to a single 5-hour energy ring (remaining % inside, tone-coloured); providers without a 5-hour window keep the text summary.
- Remove the **Models / 模型** tab from this plugin's settings page: provider and model editing duplicated DSH's official Models page. The page now opens on **Quotas**, and the provider manager is no longer instantiated (no route-host/company-rule requests or event subscriptions). Quota lookup never depended on it.
- Add `saveGlmTeamPlans` to the settings endpoint with the existing CSRF, payload-shape and readback checks; keep DSH compatibility `>=0.2.2-rc.1 <0.2.3-0`.

## 0.7.5 — 2026-11-20

- Rename the plugin to **DSH Quota+**; the descriptor now lives in the plugin description, page subtitle and README rather than the title. Rework that description to foreground the quota/usage dashboard, multi-provider model management, and the enhancements on top of DSH’s official model settings (authorization, model selection, reasoning effort). Unify the terminology on 模型提供商 / 提供商 (model provider / provider) across the UI, README, security notes and provider-rule documentation.
- The settings page is titled **DSH Quota+**, with tabs in the order **模型 / Models**, **额度 / Quotas**, **设置 / Settings**; the page opens on Models. The plugin title is brand-only and the descriptor lives in the description and page subtitle.

## 0.7.4 — 2026-11-19

- Keep one **Fetch available models** action: query supported platform endpoints first, report result source and credential scope, then fall back to DSH's built-in catalog when safe. Do not replace a successful empty result, retry a failed custom endpoint through DSH, or fall back after cancellation.
- Follow the DSH Host proxy for fixed platform listing endpoints; keep validated, DNS-pinned direct HTTPS for custom endpoints. Distinguish connection, platform, and authentication failures. Codex and OpenAI using ChatGPT subscription authorization still use catalog fallback.
- Add per-model reasoning effort settings where the Host schema supports them: inherit, disable, or customize. A blank platform value uses its level name, except a supported blank `off` preserves protocol behavior. Saving does not change the current conversation's selection.
- Group the OpenCode and OpenCode Go routes under **OpenCode** using a version-matched built-in model hostname when no route endpoint exists. Show the grouping source; explicit endpoints still take precedence. Resolve installed versions from the Host profile anchor, not a shell-only variable.
- Use a gauge icon for the settings navigation where DSH exposes its icon slot, and refresh the package and README artwork.
- Move runtime modules/data into `src/` and `src/data/`, keep the published company rules URL unchanged, and include new modules and assets in package checks. Retain DSH compatibility `>=0.2.2-rc.1 <0.2.3-0`.

## 0.7.3 — 2026-11-19

- Add company-grouped provider/model management with inline editing, folded connection settings, model search and a discovery dialog; selection remains explicit and changes require Save.
- Expand company coverage to 29 families with local marks/search and reviewed rule updates. Sort saved settings/authentication first, then localized names, with unknown endpoints last; include native DeepSeek account/API-key routes.
- Fix Host endpoint metadata and SDK schema-method handling. DeepSeek grouping and quota checks share validated endpoint resolution; invalid, uncertain or relay routes cannot trigger official balance probes or expose old official balances.
- Add UTC today-to-date OpenAI spend alongside yesterday and 7d/30d windows, with matching API-key breakdowns, including single-key results.
- Add domestic GLM Standard API balance/resource packages as Preview with bounded official-endpoint queries; international Standard API remains status-only.
- Display Codex Credits separately with precise stored values, compact two-decimal presentation and distinct unavailable/unknown states; Credits remain Preview pending live-account validation.
- Build Codex login into this plugin using DSH native authorization, without an extra OAuth UI plugin. Login remains explicitly user-triggered and is safely disabled when the native capability is missing; source/synthetic coverage does not constitute new live-account OAuth acceptance.
- Retain DSH compatibility `>=0.2.2-rc.1 <0.2.3-0`, recommend the rc.5 audit baseline, refresh its public catalog and unify version reporting. New source/synthetic checks do not replace historical live-account acceptance or re-test every older SDK.

## 0.7.2 — 2026-11-16

- Add Global Z.AI GLM Coding Plan quota lookup for DSH's built-in `zai` provider, using the official `api.z.ai/api/monitor/usage/quota/limit` endpoint and raw-key authorization.
- Keep Standard API and custom Z.AI routes non-querying; Coding Plan monitor data is subscription quota, not cash balance or account spend.
- Link the built-in route to the official subscription usage page; note that live global-account and non-Personal tier behavior remain unverified.
- Add regression coverage for provider identity, endpoint/auth, normalized quota response, and Standard/custom-route isolation.
- Add selectable OpenAI organization spend ranges for the last 1, 7, or 30 complete UTC days (excluding today; 1d is yesterday), with matching API-key breakdowns and a bordered no-record state.
- Preserve month-to-date organization totals for the agent query and document that completed-day Costs data can lag or be backfilled.

## 0.7.1 — 2026-11-13

- Mark MiniMax China M Plan remaining quota as verified after live-account acceptance.
- Refresh the published security policy wording and DSH compatibility note.

## 0.7.0 — 2026-11-13

- Added read-only MiniMax China M Plan quota through the official `/v1/token_plan/remains` endpoint; recognizes DSH's built-in `minimax-cn` default `https://api.minimaxi.com/anthropic` as well as `api.minimax.cn`; only reported remaining percentages are normalized, and ambiguous count fields are ignored.
- Classifies registered-only official provider routes without guessing credentials; MiniMax shows a missing-credential status rather than unsupported when only registry metadata is available.
- Added read-only OpenCode Go subscription usage (rolling / weekly / monthly percentages and reset timestamps), restricted to the built-in `opencode-go` provider or the exact Go API base path; generic OpenCode Zen routes are never sent to this endpoint.
- OpenAI organization Costs now includes UTC daily spend alongside month-to-date totals and marks missing records per currency; API-key breakdowns can show best-effort names from the official project-key endpoint, while retaining ID fallback.
- MiniMax M Plan uses the official CN remains URL and Bearer-key auth. MiniMax CN route recognition was confirmed on the live DSH page; live M Plan subscription-account response validation remains pending. OpenCode Go has synthetic-test coverage only; live subscription-account verification remains pending.

## 0.6.0 — 2026-11-10

First public-ready release.

- Provider discovery from the Harness provider directory, settings and credential service; unsupported relays and auth styles report a reason instead of a fake number.
- DeepSeek API-key balances (available / recharge / granted) and DeepSeek in-app account wallets, kept strictly separate.
- GLM Coding Plan (China open.bigmodel.cn and global api.z.ai) subscription windows: legacy token, credit and MCP shapes, adaptive reset countdown.
- Built-in `openai-codex`: read-only native grant lookup, main rate-limit windows only, explicit renewal guidance; never reads refresh tokens, CLI files, or sends inference probes.
- OpenAI API: Admin key entered in the quota page “API extras” tab and stored in DSH credentials (never in the profile, never echoed). Month-to-date organization spend from the official Costs API with full pagination, per-currency decimal sums, per-API-key breakdown, organization-level unattributed costs listed separately.
- Quota page tabs (Overview / Color settings / API extras), adaptive date formats, in-page popup above the composer, per-key colored subscription summary.
- Editable remaining-quota color thresholds persisted via configEditor; defaults green 50% / orange 25%.
- Hardened Admin-key resolution: only dedicated DSH credential references (`OPENAI_ADMIN_KEY_DSH`, `OPENAI_ADMIN_KEY`, `OPENAI_ADMIN_API_KEY`); no local-file fallback.
- UTC month-start zero-length range returns a known empty result without a request; stream read failures report `network`, malformed payloads report `invalid-response`.
- Agent tools `provider_quota`, `quota_color_settings`; all normalized results are credential-free.

Verification notes for 0.6.0 (2026-11-10, Desktop `0.2.2-rc.1`):

- Live queries verified: DeepSeek API-key and in-app account balances, GLM Coding Plan (China) credit windows, OpenAI organization month-to-date spend with per-API-key breakdown, and built-in `openai-codex` subscription windows.
- Provider discovery is generic; only the providers above are verified end to end. Global Z.AI is implemented but unverified with a real account.
- The quota page (Overview / Color settings / API extras tabs), composer summary and upward popup were registered and functional in Desktop; visual polish was reviewed manually on the live page.
- Unauthenticated requests to the plugin's HTTP endpoints return 401/403.

## 0.5.x and earlier

Local development iterations (2026-11-05 → 2026-11-10): initial Host/Client plugin, GLM/DeepSeek/OpenAI adapters, native Codex usage, editable thresholds, popup UX, streaming-GET bridge fix, account grant isolation.
