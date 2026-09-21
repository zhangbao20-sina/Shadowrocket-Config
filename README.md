# 🚀 Shadowrocket-Config

<p align="center">
  <b>个人维护的 Shadowrocket 本地规则、模块与第三方上游镜像仓库</b><br>
  <sub>国内流量优先直连 · 海外流量按规则分流 · 关键业务独立策略组</sub>
</p>

<p align="center">
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf">
    <img src="https://img.shields.io/badge/一键导入-完整配置-1677FF?style=for-the-badge&logo=rocket&logoColor=white" alt="一键导入完整配置">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-Talkatone模块-00A86B?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 Talkatone 模块">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="一键安装 YouTubeNoAds 模块">
  </a>
</p>

---

## 📦 仓库内容

| 文件 | 用途 |
|---|---|
| `Config/Shadowrocket.conf` | 完整 Shadowrocket 本地配置 |
| `Modules/Talkatone.sgmodule` | Talkatone 本地适配模块，不再负责节点分流 |
| `Modules/YouTubeNoAds.sgmodule` | YouTube / YouTube Music 去广告与增强模块 |
| `Modules/HongGuo-Local.sgmodule` | 红果短剧个人维护版：广告拦截与兼容放行，不使用 MITM/脚本 |
| `Modules/ThirdParty/` | 经许可镜像的第三方模块，统一保留上游来源与许可 |
| `Scripts/YouTube/` | Maasea YouTube 脚本与许可证 |
| `Scripts/ThirdParty/` | 第三方模块依赖脚本的本地镜像 |
| `THIRD_PARTY_NOTICES.md` | 第三方来源、许可、修改范围与不镜像项目说明 |
| `LICENSES/` | 第三方 GPL 许可证副本 |

---


## 🧭 模块来源与维护规范

本仓库把模块分为三类：

- **本地维护**：针对本人的网络环境和使用习惯调整，例如本地配置、Talkatone 适配。
- **许可镜像**：上游有明确开源许可证，保留原作者与来源后镜像到固定 Raw 地址，例如 AWAvenue、blackmatrix7 开屏去广告、fmz200 番茄小说 / 七猫小说。
- **仅引用上游**：能找到公开代码，但未确认明确再分发许可或来源链不清晰的模块，不复制进仓库，只记录原始来源。

这样做的目的不是“把别人代码变成自己的”，而是把**来源、许可、修改范围和维护责任写清楚**。完整记录见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

### 当前新增的第三方镜像

| 模块 | 本地路径 | 上游 | 许可 |
|---|---|---|---|
| AWAvenue Ads Rule | `Modules/ThirdParty/AWAvenue-Ads-Rule-Shadowrocket.module` | TG-Twilight/AWAvenue-Ads-Rule | GPL-3.0 |
| 开屏去广告 | `Modules/ThirdParty/StartupAds.sgmodule` | blackmatrix7/ios_rule_script | GPL-2.0 |
| 番茄小说 | `Modules/ThirdParty/FanQieNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 |
| 七猫小说 | `Modules/ThirdParty/QiMaoNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 |

> 红果短剧已改为 `HongGuo-Local.sgmodule` 个人维护版：保留公开来源与参考说明，但不作为 LOWERTOP 原文件的完整镜像。苹果助手、HK / UK / US Call 等模块，以及 APP 启动页去广告 ultra+，仍只记录来源、不直接镜像。

## ⚡ 一键导入

### 完整本地配置

> iPhone / iPad 上使用 Safari 打开下面按钮，允许浏览器唤起 Shadowrocket。

[![导入 Shadowrocket](https://img.shields.io/badge/打开_Shadowrocket-导入完整配置-1677FF?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

### Talkatone 模块

[![安装 Talkatone](https://img.shields.io/badge/打开_Shadowrocket-安装_Talkatone-00A86B?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

### 红果短剧 Local

本仓库提供独立维护的红果短剧模块，不依赖第三方 Raw 地址：

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

当前版本仅使用规则层拦截，不启用 MITM、JavaScript 或响应改写。规则经网络复查后采用稳定优先策略：保留 `p3-ad-sign.byteimg.com` 精确直连例外，并拦截已被多个公开规则源重复识别的红果/字节广告资源。详细参考与取舍见模块头部注释及 `THIRD_PARTY_NOTICES.md`。

### YouTubeNoAds 模块

[![安装 YouTubeNoAds](https://img.shields.io/badge/打开_Shadowrocket-安装_YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

模块调用的两份 JavaScript 也已镜像到本仓库固定 Raw 地址，避免运行时依赖第三方仓库路径。

---

## 🔄 远程更新

本仓库已经按 **固定 Raw 地址** 配置远程更新。以后只要继续更新 `main` 分支中的同一路径，手机端无需重新找安装链接。

### 完整本地配置

`Config/Shadowrocket.conf` 已在 `[General]` 中加入：

```text
update-url = https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

首次通过上方“一键导入完整配置”安装后，后续可直接在 Shadowrocket 的配置页面对该配置执行**更新**，即可重新拉取 GitHub 上的最新版。

### Talkatone 模块

`Modules/Talkatone.sgmodule` 已加入：

```text
#!url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
#!update-url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

以后模块内容在 GitHub 更新后，可直接在 Shadowrocket 的模块页面更新，不需要删除后重新安装。

### YouTubeNoAds 模块

`Modules/YouTubeNoAds.sgmodule` 同样使用固定更新地址：

```text
#!url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
#!update-url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

脚本固定使用：

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Scripts/YouTube/youtube.response.js
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Scripts/YouTube/youtube.request.js
```

上游为 `Maasea/sgmodule`，本地镜像保留 Apache-2.0 许可证；同步上游时建议两份脚本一起更新并重新实测。

> 远程更新依赖公开可访问的 Raw 地址，因此仓库需要保持 Public；不要把 MITM 私钥、密码、订阅密钥等敏感内容提交到这个公开仓库。

---

## 🎯 当前分流设计

### 手动选择节点

以下业务不再通过节点名称正则自动绑定节点，避免：

- 节点改名后规则失效
- 多个节点名称相似时抢先匹配
- 自建节点更换名称后需要同步改配置

当前均使用独立 `select` 策略组，可在 Shadowrocket 中手动选择：

- YouTube → `YOUTUBE_NODE`
- Gemini → `GEMINI_NODE`
- TikTok → `TIKTOK_NODE`
- Talkatone → `TALKATONE_NODE`
- Google Maps → `MAPS_NODE`

### Yahoo 保持自动选择

Yahoo 单独保留：

```text
YAHOO_NODE = url-test
```

自动匹配台湾节点并测速选择，不再写死具体节点名称。

---

## 🤖 Gemini 优化

原配置中的 Gemini 规则过宽，容易把其他 Google 服务一起拉进 Gemini 节点。

当前已经移除 Gemini 专用策略中的：

```text
DOMAIN-SUFFIX,googleapis.com
DOMAIN-SUFFIX,gstatic.com
```

改为 Gemini / AI Studio 相关域名精准匹配，例如：

```text
gemini.google.com
aistudio.google.com
ai.google.dev
generativelanguage.googleapis.com
gemini-pa.googleapis.com
alkaliminer-pa.googleapis.com
proactivebackend-pa.googleapis.com
aida.googleapis.com
```

未命中的普通 Google 流量继续交由后面的 Google 通用规则处理。

---

## ☎️ Talkatone 优化

Talkatone 现在采用 **本地配置负责分流，模块只负责去广告** 的结构。

### 本地配置

核心业务统一走：

```text
TALKATONE_NODE
```

包括：

- `talkatone.com`
- `tktn.at`
- `tktn.be`
- `tenor.com`
- `ip-api.com`
- 已知 Talkatone IP 段

### Talkatone 模块

模块已经删除：

- 节点检测参数
- 代理分流参数
- PROXY / DIRECT 功能分流
- Talkatone IP 分流

并移除了部分可能影响其他 App 或 Talkatone 正常功能的共享服务阻断，例如 Firebase / Crashlytics / Adjust 等。

模块现在只保留较明确的广告、竞价与展示类请求拦截。

---

## ▶️ YouTube

YouTube 当前仍以稳定优先：

- YouTube 原有域名分流结构保留
- YouTubeNoAds 模块保持独立
- 模块脚本改为本仓库固定 Raw 地址
- 脚本逻辑保持 Maasea 当前上游版本，不做自行精简
- 模块参数跟随上游当前写法，使用 `max-size=-1`
- DNS 不因 YouTube 模块而调整

这样既减少第三方 Raw 地址变化带来的风险，也避免同时修改脚本逻辑、DNS 和分流规则导致问题难以定位。

---

## 🌐 DNS

当前 DNS 设置维持现状，本轮没有改动。

包括：

- AliDNS / DNSPod DoH
- Cloudflare / Google fallback DNS
- DNS 53 劫持
- IPv6
- `private-ip-answer = false`

此前曾出现修改 DNS 后 YouTube 模块异常，因此 DNS 暂时作为稳定基准保留。

---

## 🚧 UDP / 443

当前仍保留：

```text
AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT-NO-DROP
```

本轮不修改全局 UDP/443 阻断。

原因是本地规则仍处于实际测试阶段，先保持现有行为，避免同时改变 QUIC / HTTP3 路径带来新的变量。

---

## 🛡️ MITM 证书说明

公开仓库版本 **不会包含 MITM 私钥证书**，因此以下敏感字段不会上传：

```text
ca-p12
ca-passphrase
```

这是有意的安全处理。

仓库配置仍保留：

```text
[MITM]
h2 = true
enable = true
```

如需要 MITM / HTTPS 解密功能，请在自己的 Shadowrocket 内生成并安装本机证书，不要把私钥证书上传到公开仓库。

---

## 📱 导入后的设置

导入完整配置后：

1. 打开 Shadowrocket → **配置**
2. 选择刚导入的 `Shadowrocket.conf`
3. 点击 **使用配置**
4. 首页全局路由选择 **配置**
5. 进入配置的 **代理分组**
6. 分别为 YouTube / Gemini / TikTok / Talkatone / Maps 手动选择节点
7. Yahoo 无需手动选择，会自动测速台湾节点

---

## 🧪 当前测试重点

建议优先测试：

- Gemini 网页与 App
- Google AI Studio
- YouTube 播放与 YouTubeNoAds
- Talkatone 登录 / 收发短信 / 通话
- Google Maps
- TikTok
- Yahoo Mail

确认这些业务稳定后，再继续评估全局 UDP/443 是否需要缩小范围。

---

## 🔗 原生 Shadowrocket URL Scheme

完整配置：

```text
shadowrocket://config/add/https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

Talkatone 模块：

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

YouTubeNoAds 模块：

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

红果短剧 Local：

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

---

## ⚠️ 说明

这是个人使用配置，默认行为按本人的网络环境和使用习惯优化，并不以通用公共规则集为目标。

修改规则前建议一次只改一个功能模块并实际测试，尤其是：

- DNS
- QUIC / UDP 443
- YouTube MITM
- Talkatone 出口节点

这样更容易定位问题和回退。

---

## ⚖️ 署名、许可与使用边界

本仓库遵循以下原则：保留原作者署名和原始项目链接；遵守上游许可证；明确标注本地修改；不把公开可见等同于允许再分发；不上传私钥、凭证或订阅密钥；上游作者如对镜像、署名或使用方式有新的明确要求，以其最新要求为准。

第三方模块的功能、稳定性和兼容性由实际版本决定。本仓库的“镜像”只表示保存一份可追溯副本，并不代表对第三方服务、App 或上游项目拥有任何隶属关系或官方身份。
