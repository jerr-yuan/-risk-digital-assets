# 个人主页 · 作品集（Portfolio）

本目录为**线上个人网站**的源内容与单页 HTML，与 [portfolio-landing.md](../portfolio-landing.md) 统一维护。

## 内容结构

- **index.md**：与 `../portfolio-landing.md` 一致的 Markdown 源（图表链接为 `../portfolio-qbr-recovery-chart.html`）。
- **index.html**：单页 HTML，可直接用浏览器打开或部署到 GitHub Pages。

## GitHub Pages 配置

1. 仓库 **Settings → Pages**。
2. **Source** 选 **Deploy from a branch**。
3. **Branch** 选 `main`，**Folder** 选 **/docs**。
4. 保存后，站点根目录为 `docs/`。个人主页 URL：
   - `https://<username>.github.io/<repo>/portfolio/` 或
   - `https://<username>.github.io/<repo>/portfolio/index.html`

若希望根路径即为个人主页，可将本目录下的 `index.html` 复制为 `docs/index.html`，并修改其中图表链接为 `portfolio-qbr-recovery-chart.html`（因根为 docs/ 时该文件与 index.html 同层）。

## 与 Faces 的同步

内容与 [portfolio-landing-faces-paste.txt](../portfolio-landing-faces-paste.txt) 对齐；在 Faces 后台粘贴或分段更新即可。

— Mr.Y
