# 个人站点 · 专用于 GitHub 发布

本文件夹是**主站相关文件的克隆**，专门用于推送到 GitHub 仓库（如 `jerr-yuan/-risk-digital-assets`），保持结构清爽、不含内部协作文档。

## 用途

- 用 **GitHub Desktop** 或命令行，把**本文件夹内的全部内容**推送到你的 GitHub 仓库。
- **详细步骤**：见项目内 [docs/GitHub主站上传使用教程.md](../docs/GitHub主站上传使用教程.md)（复制、提交、推送、开 Pages 五步）。
- 推送后，在仓库 **Settings → Pages** 中：Source 选 **Deploy from a branch**，Branch 选 **main**，Folder 选 **/ (root)**，保存即可发布站点。
- 站点地址示例：`https://jerr-yuan.github.io/-risk-digital-assets/`

## 结构说明

| 内容 | 说明 |
|------|------|
| `index.html` / `wiki.html` / `blog.html` / `achievements.html` | 主站四页（产品主页、业绩成就、资产知识库、深度思考） |
| `portfolio-main.html` | **[New]** 作品集聚合页（含项目、资源、模板） |
| `1.resume/袁鹏-简历-v3.8-标准版.html` | **[New]** 简历页 v3.8，站内「我的简历」指向此处 |
| `portfolio-*.md`、`核心指标贡献评估规则.md` | 作品集内容源文档（Markdown） |

## 与主项目的同步

- **同步规则**：本文件夹始终保持与 `docs/` 和 `1.resume/` 的**最新同步**。
- 若在主项目中更新了内容，请重新复制到本文件夹后再推送到 GitHub。

— **Mr.Y**
