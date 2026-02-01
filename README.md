# 个人站点 · 专用于 GitHub 发布

本文件夹是**主站相关文件的克隆**，专门用于推送到 GitHub 仓库（如 `jerr-yuan/-risk-digital-assets`），保持结构清爽、不含内部协作文档。

## 用途

- 用 **GitHub Desktop** 或命令行，把**本文件夹内的全部内容**推送到你的 GitHub 仓库。
- 推送后，在仓库 **Settings → Pages** 中：Source 选 **Deploy from a branch**，Branch 选 **main**，Folder 选 **/ (root)**，保存即可发布站点。
- 站点地址示例：`https://jerr-yuan.github.io/-risk-digital-assets/`

## 结构说明

| 内容 | 说明 |
|------|------|
| `index.html` / `wiki.html` / `blog.html` / `achievements.html` | 主站四页（产品主页、资产知识库、深度思考、业绩成就） |
| `1.resume/袁鹏-简历-v3.7-标准版.html` | 简历页，站内「我的简历」指向此处 |
| `portfolio/` | 作品集单页历史版 |
| `portfolio-*.md`、`时代意义简历-方案.md`、`核心指标贡献评估规则.md` | 作品集与方案文档（Markdown） |

## 与主项目的同步

- 主站源文件在项目中的 `docs/` 和 `1.resume/`；本文件夹为**只含主站相关文件的副本**。
- 若在 `docs/` 或 `1.resume/` 中更新了内容，需要**重新复制到本文件夹**后再推送到 GitHub，或按你的习惯用脚本/手动同步。

— **Mr.Y**
