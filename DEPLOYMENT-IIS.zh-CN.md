# Windows Server + IIS 部署

本项目生成的是纯静态站点。Node.js 只用于构建，线上运行时不需要常驻 Node 进程、反向代理或 iisnode。

## 前置条件

- Windows Server 上已安装 Node.js。
- IIS 已启用“静态内容”功能。
- 安装 Microsoft IIS URL Rewrite 2 模块。`public/web.config` 用它完成 SPA 回退路由；未安装时 IIS 会因不识别 `<rewrite>` 节而报错。
- 建议为站点配置 HTTPS。普通制卡功能可在 HTTP 下运行，但 Service Worker、离线缓存和 PWA 安装需要 HTTPS（localhost 除外）。

## 构建

在仓库根目录的 PowerShell 中执行：

```powershell
corepack enable
corepack yarn install --frozen-lockfile
corepack yarn build
```

成品位于 `dist` 目录。不要把源码目录直接设为 IIS 站点根目录。

## IIS 站点路径

当前 Vite `base` 是 `/ygocarder/`，因此推荐把应用发布在同名路径：

1. 将 `dist` 内的全部文件复制到例如 `C:\inetpub\wwwroot\ygocarder`。
2. 在 IIS 管理器中将该目录转换为应用程序，别名为 `ygocarder`。
3. 应用程序池可使用“无托管代码”；不需要 ASP.NET。
4. 确保 IIS 应用程序池身份对目录拥有“读取和执行”权限。
5. 访问 `https://你的域名/ygocarder/`。

如果必须部署在域名根路径，先将 `vite.config.ts` 中的 `base` 改为 `/`，并将 `public/manifest.json` 的 `start_url` 和 `scope` 改为 `/`，然后重新构建。

## 发布后检查

- 首页能加载，刷新任意前端路径不返回 404。
- 浏览器开发者工具的 Network 中，`asset/font/Yu-Gi-Oh-DFKaiW5-A-SC.ttf` 返回 200，类型为 `font/ttf`。
- 选择“简中”后，导出一张卡片，确认卡名、效果文和种族/类型行使用简中楷体，卡号后缀为 `SC`。
- 使用 HTTPS 时，检查 Application 面板中的 Service Worker 和 Cache Storage。
