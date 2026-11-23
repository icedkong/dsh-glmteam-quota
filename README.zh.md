<div align="center">

<img src="docs/icon.png" alt="GLM Quota+ 插件图标" width="160">

# GLM Quota+

**面向 DeepSeek Harness Desktop 的额度与用量面板：多提供商余额、订阅额度（含 **GLM 团队版套餐**）与 OpenAI 组织支出。输入框内一枚 5 小时能量环，点开即可切换个人版 / 团队版。无 npm 运行时依赖或安装脚本。**

[![Stars](https://img.shields.io/github/stars/icedkong/dsh-glmteam-quota?style=flat&label=stars&color=f59e0b)](https://github.com/icedkong/dsh-glmteam-quota/stargazers)
[![License](https://img.shields.io/badge/license-MIT-0891b2)](LICENSE)

[English](<README.md>) &nbsp;|&nbsp; [GitHub](https://github.com/icedkong/dsh-glmteam-quota) &nbsp;|&nbsp; [MIT](<LICENSE>)

> 本项目 fork 自 [WXYS1209/dsh-quota-cordis](https://github.com/WXYS1209/dsh-quota-cordis)（DSH Quota+，MIT），在其基础上加入 GLM 团队版套餐额度并精简界面；上游版权与许可声明予以保留。

</div>

## 安装

本说明对应 **0.7.6**。DSH 兼容声明仍为 `>=0.2.2-rc.1 <0.2.3-0`；推荐及源码核对基线为 **0.2.2-rc.5**，未逐一重测全部早期 RC。

```sh
dsh plugin --profile desktop add https://github.com/icedkong/dsh-glmteam-quota.git
# 或从本地仓库安装
dsh plugin --profile desktop add /path/to/checkout
```

更新插件代码后需重启 DSH 并完整刷新页面；表单的**重新载入**只刷新数据，不更新代码。

## 功能

设置页标题为 **GLM Quota+**，包含**额度**、**设置**两个标签；提供商与模型请在 DSH 官方「模型」页管理：

- **额度**：多提供商余额、订阅额度与 OpenAI 组织支出的展示面板。
- **设置**：自定义剩余额度阈值。
- **输入框摘要**：当前提供商的紧凑状态与向上展开的浮层。
- **Agent 工具**：`provider_quota`、`quota_color_settings`、`provider_company_rules`。

## 提供商支持

| 提供商 | 展示内容 | 状态 |
|---|---|---|
| DeepSeek API | 可用、充值、赠送余额 | 历史验收 |
| DeepSeek 账户 | 充值与赠送钱包分列 | 历史验收 |
| GLM Coding Plan 国内版 | 订阅窗口 | 历史验收 |
| GLM Coding Plan 国际版 | 订阅窗口 | 预览 |
| GLM 团队版套餐（国内 / 国际） | 可选的并列行：`?type=2` 团队接口，可选组织 / 项目范围 | 预览（按 ZCode 源码核对） |
| GLM Standard API 国内版 | CNY 余额与资源包 | 预览 |
| Z.AI Standard API 国际版 | 识别与状态 | 不查询余额 |
| OpenAI API | UTC 今日、昨天、7d/30d 组织支出及 API Key 细分 | 历史验收 |
| OpenAI Codex | 订阅窗口与已报告的 Credits | 窗口历史验收；Credits 预览 |
| OpenCode Go | 已报告的五小时/周/月窗口 | 预览 |
| MiniMax 中国 M Plan | 剩余额度 | 历史验收 |
| 其他提供商/中转 | 状态和原因 | 无额度适配器 |

缺失数据不当成零；Credits 是用量积分，不是 API 现金余额。

## 使用说明

- **OpenAI 支出需单独的组织级 Admin Key**，不能使用推理 Key；在 OpenAI 详情中设置。支出可能延迟或被修订。
- **GLM 团队版套餐额度需手动启用。** 打开「额度 → GLM / Z.AI → 其他设置 → GLM 团队版套餐」，勾选对应的 Coding Plan 路由并保存。插件使用该路由自身的 Key 请求官方 `?type=2` 团队接口，与 ZCode 的请求方式一致。请同时填写组织 ID 与项目 ID：接口不会自动选择默认项目，未指定范围时返回空数据，额度行会提示需要配置范围。官网团队用量页发送的就是这两个 ID（`bigmodel-organization` / `bigmodel-project` 请求头）。ID 保存在插件配置中，仅作为 `bigmodel-organization` / `bigmodel-project` 请求头发送，不会出现在额度行里。Key 不属于任何团队套餐时会明确提示，而不是当作接口故障。
- 提供商归属优先按 Host 确认的实际端点；没有路由地址时，版本匹配且模型端点一致的内置目录可提供单独标明来源的展示域名，不改变请求地址。已有用户设置或认证记录的提供商优先，组内按当前语言名称排序，未知端点始终最后。仅默认启用不算已保存。编辑在原卡片内展开，模型发现使用弹窗并明确选择；最终点击**保存**才持久化，不切换当前/默认模型。
- **推理档位**在 Host 支持的模型编辑项中可继承、禁用或自定义。已选档位的平台参数可留空，默认使用同名值；支持留空的 `off` 保留协议默认行为。会话实际用哪一档仍由 DSH 原生模型选择器决定。
- **获取可用模型**对受支持的列表接口（OpenAI 兼容、Anthropic、Gemini）优先查询平台，并标明来源和凭据范围。实时发现失败或不支持时，仅在可安全回退的路由上使用 DSH 内置目录，不重复请求失败的自定义端点；平台成功返回空列表不回退。固定平台端点遵循 DSH Host 的出站代理配置；自定义端点需通过公网 HTTPS 直连。OpenAI 实时列表使用 API Key，不使用 ChatGPT 订阅授权；Codex 使用 DSH 内置目录。
- **Codex 登录已内置于本插件，复用 DSH 原生授权能力，无需额外 OAuth UI 插件。** 只有明确点击登录才发起授权；缺少原生能力时安全禁用登录。已有原生授权的额度/Credits 查询不依赖在此登录。新登录集成仅有源码/合成验证，尚未新增真实账户 OAuth 验收。

## 隐私与维护

凭据仅在本机 Host 使用，不进入额度结果。额度查询只读，仅访问固定官方 HTTPS 地址并拒绝重定向。原生 DeepSeek 地址无效、无法确认或属于中转时安全停止，不代用官方余额查询或旧缓存。额度适配器不读取 CLI 凭据、Cookie 或刷新令牌，不刷新授权，也不发起推理。

端点优先级、状态处理与规则维护细节见[安全说明](<SECURITY.md>)和[提供商规则覆盖](<docs/COMPANY_COVERAGE.md>)。

## 开发

- `index.js` / `client.js`：Host 与浏览器入口。
- `src/`：运行时模块；内置数据位于 `src/data/`。
- `company-rules.json`：对外发布的提供商规则数据，运行时也会在线拉取，因此保留在仓库根目录。
- `locale/`、`icon.png`、`cordis.patch.yml`：插件包资源。
- `test/`、`scripts/`、`docs/`：测试、维护脚本与文档。

```sh
npm run check
npm test
npm run test:company-coverage
```

测试不能替代真实页面/提供商验收。更新记录见[Changelog](<CHANGELOG.md>)。
