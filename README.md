# DramaFlow Publisher - Cloudflare 测试部署版

这个包基于你上传的 `drama_flow_publisher_v_2_1_ui_prototype.jsx` 做了一个 Cloudflare 测试网页，新增：

- 登录页
- 测试访问密码
- 登录后显示原 V2.1 UI 原型
- 右上角 YouTube 频道授权按钮
- Cloudflare Pages Functions：`/api/youtube/auth-url` 和 `/api/youtube/callback`

## 1. 本地运行

```bash
npm install
npm run dev
```

默认测试密码：

```text
123456
```

## 2. Cloudflare Pages 部署设置

在 Cloudflare Pages 中连接 GitHub 仓库后，设置：

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

## 3. Cloudflare 环境变量

Cloudflare Pages 项目里进入：

```text
Settings → Variables and Secrets
```

添加：

```text
GOOGLE_CLIENT_ID=你的 Google OAuth Client ID
GOOGLE_CLIENT_SECRET=你的 Google OAuth Client Secret
GOOGLE_REDIRECT_URI=https://你的项目.pages.dev/api/youtube/callback
```

`GOOGLE_CLIENT_SECRET` 请用 Secret / Encrypt，不要放到前端代码里。

## 4. Google Cloud OAuth 回调地址

Google Cloud Console → API和服务 → 凭据 → OAuth 客户端 ID。

Authorized redirect URIs 添加：

```text
https://你的项目.pages.dev/api/youtube/callback
```

如果后面绑定自定义域名，也要再加：

```text
https://你的域名/api/youtube/callback
```

## 5. 测试流程

```text
打开 Cloudflare Pages 网址
↓
输入测试密码 123456
↓
进入后台
↓
右上角点击“授权YouTube频道”
↓
跳转 Google 授权
↓
授权成功后回到首页，显示“已完成授权回调”
```

## 6. 当前版本说明

当前只是跑通 Cloudflare + Google OAuth 的第一版测试。

还没有保存 token 到 D1，也还没有真实同步 YouTube 视频池。下一步建议加：

```text
Cloudflare D1
youtube_tokens 表
channels sync 接口
videos sync 接口
版权解禁中心真实数据
```
