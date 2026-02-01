# 简历链接 + 个人主页落地方案

> **当前版本**：V2.3 (2026.01) - 策略深度修正版
> **历史版本**：
> - V2.2: 数据深化与稳定性叙事
> - V2.1: 增加 `achievements.html` 业绩成就页
> - V2.0: Product + Wiki + Blog 三页架构
> - V1.0: 单页简历扩充版（已归档至 `docs/portfolio/`）

---

## 一、V2.2 站点架构（当前线上版）

我们已升级为包含**四个核心页面**的完整数字资产站，互联互通：

| 页面 | 文件路径 | 风格定位 | 内容核心 |
| :--- | :--- | :--- | :--- |
| **🏠 产品主页** | `docs/index.html` | **Product (SaaS 官网)** | 流量入口。展示"明星产品"（巡检助手、S0 引擎），视觉冲击强，引导点击。 |
| **📚 资产知识库** | `docs/wiki.html` | **Wiki (GitBook)** | 核心资产沉淀。左侧导航树 + 右侧文档；直接暴露 **System Prompt**、**Mermaid** 与代码逻辑。 |
| **💡 深度思考** | `docs/blog.html` | **Blog (深度叙事)** | 专家人设构建。以"解决问题"为视角的深度复盘文章（如《如何用 Agent 取代表哥表姐》）。 |
| **🏆 业绩成就** | `docs/achievements.html` | **Impact (可视化报告)** | 商业价值证明。**相对提升可视化图**（人效、ROI、回收率），**策略稳定性**叙事，及 **7 条业务线**全景展示。 |

- **GitHub Pages 配置**：Source 选 `/docs`，Branch 选 `main`。访问根路径即进入 V2.2 产品主页。
- **简历链接**：站点右上角统一保留 `我的简历 ↗`，指向 `1.resume/` 下的 PDF/HTML。

---

## 二、迭代记录 (Changelog)

### V2.3 (Current) - 策略深度修正
- **Strategic Refinement**: 深度修正了 Offline、Credit Card、Recharge 三条业务线的策略描述。
- **Offline**: 强调"全局视角（产品/内部/外部）"，去除"刚性/激进"话术，体现风控经营体系的完备性。
- **Credit Card**: 明确"风险-意愿-能力"三维分层，补充"优质意愿客户引导分期增收"的商业逻辑。
- **Recharge**: 强调"极致低成本"与"主营业务零打扰"的底线思维。

### V2.2 - 数据深化与稳定性叙事
- **Data**: 细化回收率提升数据。CL（主力）展示 Peak +3.0% / Avg +2.3%；TT（BNPL）作为第二主力展示 Peak +5.3%。
- **Narrative**: 在"业务规模"板块强化"策略稳定性"（Anti-fragility）叙事，即"体量翻倍 vs 策略稳健"。
- **Structure**: 将 TT BNPL 提升为 "Core Product II"。

### V2.1 - 业绩成就页上线
- **New Page**: 新增 `docs/achievements.html`。
- **Visuals**: 引入 CSS 动态条形图展示相对提升（脱敏）。
- **Scope**: 展示 7 条业务线与 5 个 0-1 创新项目。

---

## 三、V1.0 方案（Legacy / 备份）

*注：以下方案已作为历史版本归档，仅作备份参考。*

- **单页 HTML**：原 `docs/index.html` 已被 V2.0 覆盖；旧版逻辑保留在 `docs/portfolio/index.html`（访问路径 `.../portfolio/`）。
- **内容源**：`docs/portfolio-landing.md`（Markdown 版内容）。


- **位置**：教育背景之后、工作经历之前，或简历最末（当前采用**工作经历之后、主要项目之前**，便于 HR 先看经历再点链接）。
- **文案**（已写入 `1.resume/袁鹏-简历-更新版.md`）：

```markdown
## 个人主页

通过以下链接可查看完整项目说明、业务贡献与结构化数字资产体系：[链接待填：GitHub Pages 或 Faces 地址]
```

- **你需做的**：把 `[链接待填：GitHub Pages 或 Faces 地址]` 替换为实际 URL（见下文四、五）。

---

## 四、文件与链接汇总

| 文件 | 说明 |
|------|------|
| `docs/index.html` | **根路径个人主页**（Product Style）；GitHub Pages 选 /docs 时，根 URL 即此页 |
| `docs/wiki.html` | 资产知识库页面 |
| `docs/blog.html` | 深度思考博客页面 |
| `docs/achievements.html` | **[NEW]** 业绩成就页面 |
| `docs/achievements-v1-initial.html` | V2.1 版本备份 |
| `1.resume/袁鹏-简历-v3.7-标准版.html` | 标准版 HTML，浏览器打开可打印为 PDF |
| `docs/portfolio-落地方案.md` | 本落地方案（含迭代记录） |

---

*落地方案由 Mr.Y 整理，便于先上线方案一、再按需扩展方案二/三及双轨链接。*

— **Mr.Y**
