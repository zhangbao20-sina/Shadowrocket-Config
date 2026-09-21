# 🚀 Shadowrocket-Config

<p align="center">
  <b>个人使用的 Shadowrocket 本地规则与模块仓库</b><br>
  <sub>国内流量优先直连 · 海外流量按规则分流 · 关键业务独立策略组</sub>
</p>

<p align="center">
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf">
    <img src="https://img.shields.io/badge/一键导入-完整配置-1677FF?style=for-the-badge&logo=rocket&logoColor=white" alt="一键导入完整配置">
  </a>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-Talkatone模块-00A86B?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 Talkatone 模块">
  </a>
</p>

---

## 📦 仓库内容

| 文件 | 用途 |
|---|---|
| `Config/Shadowrocket.conf` | 完整 Shadowrocket 本地配置 |
| `Modules/Talkatone.sgmodule` | Talkatone 去广告模块，不再负责节点分流 |

---

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

YouTube 当前保持稳定优先，本轮没有调整：

- YouTube 原有域名分流结构保留
- YouTubeNoAds 模块保持独立
- DNS 不因 YouTube 模块而调整

这样可以减少一次修改多个变量导致去广告模块失效后难以定位的问题。

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

---

## ⚠️ 说明

这是个人使用配置，默认行为按本人的网络环境和使用习惯优化，并不以通用公共规则集为目标。

修改规则前建议一次只改一个功能模块并实际测试，尤其是：

- DNS
- QUIC / UDP 443
- YouTube MITM
- Talkatone 出口节点

这样更容易定位问题和回退。
