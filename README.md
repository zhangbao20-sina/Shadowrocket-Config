# 🚀 Shadowrocket-Config

<p align="center">
  <b>个人维护的 Shadowrocket 本地规则、模块与第三方上游镜像仓库</b><br>
  <sub>国内流量优先直连 · 海外流量按规则分流 · 关键业务独立策略组</sub>
</p>

---

## 🚀 功能区域｜快速操作

<p align="center">
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf">
    <img src="https://img.shields.io/badge/一键导入-完整配置-1677FF?style=for-the-badge&logo=rocket&logoColor=white" alt="一键导入完整配置">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-Talkatone-00A86B?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 Talkatone">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="一键安装 YouTubeNoAds">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FHongGuo-Local.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-红果短剧_Local-EF4444?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 红果短剧 Local">
  </a>
</p>

> **README 维护约定：** 以后凡是新增到本仓库、可由 Shadowrocket 直接导入或安装的正式配置 / 模块，都同步加入本页顶部“快速操作”按钮和下面的“可安装内容”区域，避免模块已经存在但 README 没有入口。

---

## 🧩 功能区域｜可安装内容

| 项目 | 作用 | 操作 |
|---|---|---|
| **完整配置** | 本地分流、策略组、DNS、MITM 基础配置 | [一键导入](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf) |
| **Talkatone** | Talkatone 本地适配与去广告 | [一键安装](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule) |
| **YouTubeNoAds** | YouTube / YouTube Music 去广告与增强 | [一键安装](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule) |
| **红果短剧 Local** | 红果短剧广告拦截与兼容放行 | [一键安装](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FHongGuo-Local.sgmodule) |

### 完整配置

[![导入完整配置](https://img.shields.io/badge/打开_Shadowrocket-导入完整配置-1677FF?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

### Talkatone

[![安装 Talkatone](https://img.shields.io/badge/打开_Shadowrocket-安装_Talkatone-00A86B?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

模块只负责较明确的广告处理；业务分流由本地配置中的 `TALKATONE_NODE` 管理。

### YouTubeNoAds

[![安装 YouTubeNoAds](https://img.shields.io/badge/打开_Shadowrocket-安装_YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

依赖脚本已经镜像到本仓库固定 Raw 地址，减少上游路径变化带来的失效风险。

### 红果短剧 Local

[![安装 红果短剧 Local](https://img.shields.io/badge/打开_Shadowrocket-安装_红果短剧_Local-EF4444?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FHongGuo-Local.sgmodule)

**Raw 地址**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

个人维护版，当前只使用规则层拦截，不使用 MITM、JavaScript 或响应改写；以稳定、低冲突为优先。

---

## 📚 展示与说明区域｜仓库结构

| 路径 | 内容 |
|---|---|
| `Config/Shadowrocket.conf` | 完整 Shadowrocket 本地配置 |
| `Modules/Talkatone.sgmodule` | Talkatone 本地适配模块 |
| `Modules/YouTubeNoAds.sgmodule` | YouTube / YouTube Music 去广告与增强 |
| `Modules/HongGuo-Local.sgmodule` | 红果短剧个人维护版 |
| `Modules/ThirdParty/` | 经许可镜像的第三方模块 |
| `Scripts/YouTube/` | Maasea YouTube 脚本与许可证 |
| `Scripts/ThirdParty/` | 第三方模块依赖脚本镜像 |
| `THIRD_PARTY_NOTICES.md` | 第三方来源、许可、修改范围与维护说明 |
| `LICENSES/` | 第三方许可证副本 |

---

## 🧭 展示与说明区域｜来源与维护规范

本仓库按来源和维护责任分为三类：

| 类型 | 含义 | 示例 |
|---|---|---|
| **本地维护** | 根据个人网络环境与实测结果长期维护 | 本地配置、Talkatone、红果短剧 Local |
| **许可镜像** | 上游存在明确开源许可，保留来源和许可证后本地镜像 | AWAvenue、blackmatrix7、fmz200、Maasea |
| **仅引用上游** | 可找到公开代码，但许可或来源链不够明确，因此不直接复制 | 部分第三方模块 |

### 当前许可镜像

| 模块 | 本地路径 | 上游 | 许可 |
|---|---|---|---|
| AWAvenue Ads Rule | `Modules/ThirdParty/AWAvenue-Ads-Rule-Shadowrocket.module` | TG-Twilight/AWAvenue-Ads-Rule | GPL-3.0 |
| 开屏去广告 | `Modules/ThirdParty/StartupAds.sgmodule` | blackmatrix7/ios_rule_script | GPL-2.0 |
| 番茄小说 | `Modules/ThirdParty/FanQieNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 |
| 七猫小说 | `Modules/ThirdParty/QiMaoNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 |
| YouTube 脚本 | `Scripts/YouTube/` | Maasea/sgmodule | Apache-2.0 |

红果短剧使用 `HongGuo-Local.sgmodule` 独立维护，并保留公开参考来源说明；它不是 LOWERTOP 原文件的官方镜像。完整第三方记录见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

---

## 🔄 功能区域｜远程更新

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

## ⚙️ 配置说明｜当前分流设计

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

## 🤖 配置说明｜Gemini

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

## ☎️ 模块说明｜Talkatone

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

## ▶️ 模块说明｜YouTube

YouTube 当前仍以稳定优先：

- YouTube 原有域名分流结构保留
- YouTubeNoAds 模块保持独立
- 模块脚本改为本仓库固定 Raw 地址
- 脚本逻辑保持 Maasea 当前上游版本，不做自行精简
- 模块参数跟随上游当前写法，使用 `max-size=-1`
- DNS 不因 YouTube 模块而调整

这样既减少第三方 Raw 地址变化带来的风险，也避免同时修改脚本逻辑、DNS 和分流规则导致问题难以定位。

---

## 🌐 配置说明｜DNS

当前 DNS 设置维持现状，本轮没有改动。

包括：

- AliDNS / DNSPod DoH
- Cloudflare / Google fallback DNS
- DNS 53 劫持
- IPv6
- `private-ip-answer = false`

此前曾出现修改 DNS 后 YouTube 模块异常，因此 DNS 暂时作为稳定基准保留。

---

## 🚧 配置说明｜UDP / 443

当前仍保留：

```text
AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT-NO-DROP
```

本轮不修改全局 UDP/443 阻断。

原因是本地规则仍处于实际测试阶段，先保持现有行为，避免同时改变 QUIC / HTTP3 路径带来新的变量。

---

## 🛡️ 安全说明｜MITM 证书

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

## 📱 使用说明｜导入后的设置

导入完整配置后：

1. 打开 Shadowrocket → **配置**
2. 选择刚导入的 `Shadowrocket.conf`
3. 点击 **使用配置**
4. 首页全局路由选择 **配置**
5. 进入配置的 **代理分组**
6. 分别为 YouTube / Gemini / TikTok / Talkatone / Maps 手动选择节点
7. Yahoo 无需手动选择，会自动测速台湾节点

---

## 🧪 使用说明｜当前测试重点

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

## 🔗 展示与说明｜原生 Shadowrocket URL Scheme

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

## ⚠️ 展示与说明｜使用说明

这是个人使用配置，默认行为按本人的网络环境和使用习惯优化，并不以通用公共规则集为目标。

修改规则前建议一次只改一个功能模块并实际测试，尤其是：

- DNS
- QUIC / UDP 443
- YouTube MITM
- Talkatone 出口节点

这样更容易定位问题和回退。

---

## ⚖️ 展示与说明｜署名、许可与使用边界

本仓库遵循以下原则：保留原作者署名和原始项目链接；遵守上游许可证；明确标注本地修改；不把公开可见等同于允许再分发；不上传私钥、凭证或订阅密钥；上游作者如对镜像、署名或使用方式有新的明确要求，以其最新要求为准。

第三方模块的功能、稳定性和兼容性由实际版本决定。本仓库的“镜像”只表示保存一份可追溯副本，并不代表对第三方服务、App 或上游项目拥有任何隶属关系或官方身份。
