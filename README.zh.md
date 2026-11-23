<div align="center">

<img src="docs/icon.png" alt="GLM Quota+ 插件图标" width="160">

# GLM Quota+

**面向 DeepSeek Harness Desktop 的额度与用量面板：多提供商余额、订阅额度（含 **GLM 团队版套餐**）与 OpenAI 组织支出。输入框内一枚 5 小时能量环，点开即可在个人版 / 团队版之间切换。无 npm 运行时依赖或安装脚本。**

[![Stars](https://img.shields.io/github/stars/icedkong/dsh-glmteam-quota?style=flat&label=stars&color=f59e0b)](https://github.com/icedkong/dsh-glmteam-quota/stargazers)
[![License](https://img.shields.io/badge/license-MIT-0891b2)](LICENSE)
[![upstream](https://img.shields.io/badge/fork%20of-DSH%20Quota%2B-3859FF?logo=github)](https://github.com/WXYS1209/dsh-quota-cordis)

[English](<README.md>) &nbsp;|&nbsp; [GitHub](https://github.com/icedkong/dsh-glmteam-quota) &nbsp;|&nbsp; [上游仓库](https://github.com/WXYS1209/dsh-quota-cordis) &nbsp;|&nbsp; [MIT](<LICENSE>)

</div>

## 致敬

**GLM Quota+ 是 [DSH Quota+](https://github.com/WXYS1209/dsh-quota-cordis) 的分支**，原作者 [WXYS1209](https://github.com/WXYS1209)。

你在这个插件里看到的大部分东西——DeepSeek / GLM / MiniMax / OpenCode / Codex / OpenAI 的额度适配、对中转端点“宁可不查也不乱发凭据”的安全边界、CSRF 与回读校验、几百个测试、发布工程——全部来自上游。本仓库只是站在这些工作之上，补了一个上游没有的场景，并按个人口味精简了界面。

本仓库保留了上游的完整提交历史、MIT 许可与版权声明。如果这个插件对你有帮助，请先去给 [上游仓库](https://github.com/WXYS1209/dsh-quota-cordis) 点一个 star；上游仍在维护，公司规则等公共数据也继续从上游拉取。

## 本分支的改动（相对上游 0.7.5）

### 新增

- **GLM 团队版套餐额度。** 为每条 GLM Coding Plan 路由增加一条可选的「团队版」并列行：复用官方 `quota/limit` 接口并加 `?type=2`，按需附带 `bigmodel-organization` / `bigmodel-project` 请求头——与 ZCode 的请求方式一致（实现前核对了其源码，并用真实团队账号验证）。在「额度 → GLM / Z.AI → 其他设置 → GLM 团队版套餐」中启用并填写组织 / 项目 ID。
- **明确的状态而非“响应无法识别”。** 个人接口对团队 Key 返回“不存在 coding plan”、团队接口在未指定项目时返回空数据——这两种情况现在分别显示为「无个人套餐」「需要配置组织 / 项目 ID」，不再当作接口故障标红。
- **剩余额度卡片。** 点开输入框下方的额度弹窗，会看到「剩余额度」卡片：五小时池带时钟式倒计时、周池带重置日期、按剩余量填充的进度条，以及「个人版 | 团队版」切换和「更多 ›」跳转官方控制台。
- **5 小时能量环。** 输入框下方的概览收成一枚与 DSH 内置「上下文」模块同规格的圆环（14px，同一套间距与悬停态），只显示五小时池剩余比例，颜色跟随你的绿 / 橙 / 红阈值。
- `scripts/probe-glm-team.mjs`：用你自己的 Key 探测个人 / 团队接口的原始返回，便于排查（不打印 Key）。

### 优化与精简

- **移除了「模型」标签。** 上游在设置页内置了一套提供商 / 模型管理，与 DSH 官方「模型」页功能重复；本分支只保留「额度」「设置」两个标签，打开即到「额度」，也不再创建那套管理器（少掉一批无用的网络请求与事件订阅）。
- 团队版设置的**未保存输入在切换窗口后保留**（上游其他表单是切回窗口即重载）。
- 插件图标与名称更换为 GLM Quota+；包名 `dsh-glmteam-quota`，与仓库名一致。
- 没有改动的部分：安全模型、端点白名单、公司规则数据源（仍指向上游公开规则文件）、Agent 工具（`provider_quota`、`quota_color_settings`、`provider_company_rules`）全部沿用上游。

## 安装

本说明对应 **0.1.0**。DSH 兼容声明沿用上游：`>=0.2.2-rc.1 <0.2.3-0`；源码核对基线为 **0.2.2-rc.5**。

```sh
dsh plugin --profile desktop add https://github.com/icedkong/dsh-glmteam-quota.git
# 或从本地仓库安装
dsh plugin --profile desktop add /path/to/checkout
```

更新插件代码后需重启 DSH 并完整刷新页面；表单的**重新载入**只刷新数据，不更新代码。

如果之前装过上游的 `dsh-quota-cordis`，请先卸载再安装本分支——两者注册同一个 `provider-quota` 入口，不能同时启用。设置保存在 DSH profile 的 `cordis.patch.yml` 中，入口 id 不变，卸载重装后会自动保留。

## 功能

设置页标题为 **GLM Quota+**，包含**额度**、**设置**两个标签；提供商与模型请在 DSH 官方「模型」页管理：

- **额度**：多提供商余额、订阅额度（含 GLM 团队版）与 OpenAI 组织支出的展示面板。
- **设置**：自定义剩余额度阈值。
- **输入框能量环**：当前提供商五小时池剩余比例，点开为剩余额度卡片。
- **Agent 工具**：`provider_quota`、`quota_color_settings`、`provider_company_rules`。

## 提供商支持

| 提供商 | 展示内容 | 状态 |
|---|---|---|
| DeepSeek API | 可用、充值、赠送余额 | 上游历史验收 |
| DeepSeek 账户 | 充值与赠送钱包分列 | 上游历史验收 |
| GLM Coding Plan 国内版 | 订阅窗口 | 上游历史验收 |
| GLM Coding Plan 国际版 | 订阅窗口 | 预览 |
| **GLM 团队版套餐（国内 / 国际）** | 并列行：`?type=2` 团队接口 + 组织 / 项目范围头 | **真实团队账号验证** |
| GLM Standard API 国内版 | CNY 余额与资源包 | 预览 |
| Z.AI Standard API 国际版 | 识别与状态 | 不查询余额 |
| OpenAI API | UTC 今日、昨天、7d/30d 组织支出及 API Key 细分 | 上游历史验收 |
| OpenAI Codex | 订阅窗口与已报告的 Credits | 窗口上游验收；Credits 预览 |
| OpenCode Go | 已报告的五小时/周/月窗口 | 预览 |
| MiniMax 中国 M Plan | 剩余额度 | 上游历史验收 |
| 其他提供商/中转 | 状态和原因 | 无额度适配器 |

缺失数据不当成零；Credits 是用量积分，不是 API 现金余额。

## 使用说明

- **GLM 团队版套餐额度需手动启用。** 打开「额度 → GLM / Z.AI → 其他设置 → GLM 团队版套餐」，勾选对应的 Coding Plan 路由，填写组织 ID 与项目 ID 并保存。插件使用该路由自身的 Key 请求官方 `?type=2` 团队接口；接口不会自动选择默认项目，未指定范围时返回空数据，额度行会提示需要配置范围。这两个 ID 就是官网团队用量页发送的 `bigmodel-organization` / `bigmodel-project` 请求头的值，可在浏览器开发者工具的网络面板中查看。ID 保存在插件配置中，仅作为请求头发送，不会出现在额度行里。
- **OpenAI 支出需单独的组织级 Admin Key**，不能使用推理 Key；在 OpenAI 详情中设置。支出可能延迟或被修订。
- **Codex 登录复用 DSH 原生授权能力**，无需额外 OAuth UI 插件。只有明确点击登录才发起授权；缺少原生能力时安全禁用。

## 隐私与维护

凭据仅在本机 Host 使用，不进入额度结果。额度查询只读，仅访问固定官方 HTTPS 地址并拒绝重定向。原生 DeepSeek 地址无效、无法确认或属于中转时安全停止，不代用官方余额查询或旧缓存。额度适配器不读取 CLI 凭据、Cookie 或刷新令牌，不刷新授权，也不发起推理。

端点优先级、状态处理与规则维护细节见[安全说明](<SECURITY.md>)和[提供商规则覆盖](<docs/COMPANY_COVERAGE.md>)。

## 开发

- `index.js` / `client.js`：Host 与浏览器入口。
- `src/`：运行时模块；内置数据位于 `src/data/`。
- `company-rules.json`：提供商规则数据（与上游同步），运行时也会在线拉取，因此保留在仓库根目录。
- `locale/`、`icon.png`、`cordis.patch.yml`：插件包资源。
- `test/`、`scripts/`、`docs/`：测试、维护脚本与文档。`node --test` 运行全部测试。
