# 🚀 Shadowrocket-Config

<p align="center">
  <strong>个人维护的 Shadowrocket 本地规则、模块与第三方上游镜像仓库</strong><br>
  <sub>国内流量优先直连 · 海外流量按规则分流 · 关键业务独立策略组</sub><br><br>
  <sub>📱 iPhone / iPad · 🌐 GitHub Web · 💻 Desktop 友好阅读</sub>
</p>

<p align="center">
  <a href="#-快速安装">快速安装</a> ·
  <a href="#-使用说明">使用说明</a> ·
  <a href="#-远程更新">远程更新</a> ·
  <a href="#-配置说明">配置说明</a> ·
  <a href="#-来源与许可">来源与许可</a>
</p>

---

## 🚀 快速安装

> 建议在 iPhone / iPad 上使用 Safari 打开本页并点击按钮。  
> 为适配移动端，按钮采用单列布局，避免横向挤压和误触。

<p align="center">
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf">
    <img src="https://img.shields.io/badge/一键导入-完整配置-1677FF?style=for-the-badge&logo=rocket&logoColor=white" alt="一键导入完整配置">
  </a>
  <br><br>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-Talkatone-00A86B?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 Talkatone">
  </a>
  <br><br>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="一键安装 YouTubeNoAds">
  </a>
  <br><br>
  <a href="https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FHongGuo-Local.sgmodule">
    <img src="https://img.shields.io/badge/一键安装-红果短剧_Local-EF4444?style=for-the-badge&logo=rocket&logoColor=white" alt="一键安装 红果短剧 Local">
  </a>
</p>

> **README 维护约定**  
> 以后新增任何正式可安装配置 / 模块时，都必须同步加入：顶部快速安装、独立模块说明、固定 Raw 地址与远程更新说明。移动端继续坚持“少表格、短段落、长地址折叠、操作按钮单列”的排版规则。

---

## 🧩 可安装内容

### 📦 完整配置

用于本地分流、策略组、DNS、MITM 基础设置及业务策略管理。

[![导入完整配置](https://img.shields.io/badge/打开_Shadowrocket-导入完整配置-1677FF?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Fconfig%2Fadd%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FConfig%2FShadowrocket.conf)

<details>
<summary><strong>查看 Raw 地址与原生 URL Scheme</strong></summary>

**Raw**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

**Shadowrocket URL Scheme**

```text
shadowrocket://config/add/https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

</details>

---

### ☎️ Talkatone Local

个人维护版。模块只负责较明确的广告拦截；业务分流统一由本地配置 `TALKATONE_NODE` 管理，不在模块内指定 PROXY / DIRECT，也不启用 MITM 或响应改写。

[![安装 Talkatone](https://img.shields.io/badge/打开_Shadowrocket-安装_Talkatone-00A86B?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FTalkatone.sgmodule)

<details>
<summary><strong>查看 Raw 地址、Scheme 与维护说明</strong></summary>

**Raw**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

**Shadowrocket URL Scheme**

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

该模块为本仓库个人维护版本。  
业务分流统一由本地配置中的 `TALKATONE_NODE` 管理；模块仅保留广告相关规则。

</details>

---

### ▶️ YouTubeNoAds

用于 YouTube / YouTube Music 去广告与增强。依赖脚本已镜像到本仓库固定 Raw 地址，降低第三方路径变化造成的失效风险。

[![安装 YouTubeNoAds](https://img.shields.io/badge/打开_Shadowrocket-安装_YouTubeNoAds-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FYouTubeNoAds.sgmodule)

<details>
<summary><strong>查看 Raw 地址、Scheme 与脚本说明</strong></summary>

**Raw**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

**Shadowrocket URL Scheme**

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

**本地脚本**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Scripts/YouTube/youtube.response.js
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Scripts/YouTube/youtube.request.js
```

上游为 `Maasea/sgmodule`，本地镜像保留 Apache-2.0 许可证。

</details>

---

### 🍅 红果短剧 Local

个人维护版。当前只使用规则层广告拦截与兼容放行，不启用 MITM、JavaScript 或响应改写，以稳定和低冲突为优先。

[![安装 红果短剧 Local](https://img.shields.io/badge/打开_Shadowrocket-安装_红果短剧_Local-EF4444?style=for-the-badge)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket%3A%2F%2Finstall%3Fmodule%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fzhangbao20-sina%2FShadowrocket-Config%2Fmain%2FModules%2FHongGuo-Local.sgmodule)

<details>
<summary><strong>查看 Raw 地址、Scheme 与维护说明</strong></summary>

**Raw**

```text
https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

**Shadowrocket URL Scheme**

```text
shadowrocket://install?module=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

该模块为本仓库独立维护版本，不是 LOWERTOP 原文件的官方镜像。  
公开参考来源、规则取舍与署名说明记录在 `THIRD_PARTY_NOTICES.md`。

</details>

---

## 📱 使用说明

导入完整配置后：

1. 打开 Shadowrocket → **配置**。
2. 选择并启用 `Shadowrocket.conf`。
3. 首页“全局路由”选择 **配置**。
4. 在代理分组中分别为 YouTube、Gemini、TikTok、Talkatone、Google Maps 手动选择节点。
5. Yahoo 保持自动测速台湾节点，无需手动指定。

> 模块可以按需单独安装；不需要的模块不要开启。  
> 如果某个 App 出现异常，优先一次只停用一个模块进行排查。

---

## 🔄 远程更新

仓库中的正式配置和本地维护模块均使用固定 Raw 地址。以后继续更新 `main` 分支中的同一路径，手机端无需重新寻找安装链接。

<details>
<summary><strong>查看各项目更新地址</strong></summary>

**完整配置**

```text
update-url = https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Config/Shadowrocket.conf
```

**Talkatone**

```text
#!url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
#!update-url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/Talkatone.sgmodule
```

**YouTubeNoAds**

```text
#!url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
#!update-url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/YouTubeNoAds.sgmodule
```

**红果短剧 Local**

```text
#!url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
#!update-url=https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/HongGuo-Local.sgmodule
```

</details>

> 远程更新依赖公开 Raw 地址。不要把 MITM 私钥、账户密码、订阅密钥或其他敏感信息提交到公开仓库。

---

## ⚙️ 配置说明

### 策略组

YouTube、Gemini、TikTok、Talkatone、Google Maps 使用独立 `select` 策略组，避免节点改名或同名节点抢先匹配。

Yahoo 保留 `url-test` 自动选择台湾节点。

### Gemini

Gemini 使用更精确的 AI 服务域名匹配，不再把整个 `googleapis.com` 或 `gstatic.com` 纳入 Gemini 专用策略。

<details>
<summary><strong>查看 Gemini 精确域名示例</strong></summary>

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

</details>

### DNS

当前继续维持既有 DNS 方案，不因 YouTube 或其他模块调整 DNS，减少同时修改多个变量导致的排障困难。

### UDP / 443

当前继续保留：

```text
AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT-NO-DROP
```

本地规则仍处于实际使用测试阶段，因此暂不同时调整 QUIC / HTTP3 行为。

---

## 🛡️ 安全说明

公开仓库版本不会包含 MITM 私钥证书：

```text
ca-p12
ca-passphrase
```

仓库配置可以保留 MITM 功能设置，但私钥证书应始终由个人设备本地生成、安装和保管。

---

## 🧪 当前测试重点

- Gemini 网页与 App / Google AI Studio
- YouTube 播放与 YouTubeNoAds
- Talkatone 登录、短信与通话
- 红果短剧广告拦截与视频播放
- Google Maps / TikTok
- Yahoo Mail 台湾节点自动选择

---

## 🧭 来源与许可

本仓库按维护责任分为三类：

**本地维护**  
根据个人网络环境与实际测试长期维护，例如完整配置、Talkatone Local 和红果短剧 Local。

**许可镜像**  
上游存在明确开源许可，保留作者、来源与许可证后保存本地副本，例如 Maasea、AWAvenue、blackmatrix7、fmz200。

**仅引用上游**  
公开可见但许可范围或来源链不够明确的内容，只记录参考来源，不直接完整复制。

<details>
<summary><strong>查看当前许可镜像</strong></summary>

- `Scripts/YouTube/` → Maasea/sgmodule → Apache-2.0
- `Modules/ThirdParty/AWAvenue-Ads-Rule-Shadowrocket.module` → TG-Twilight/AWAvenue-Ads-Rule → GPL-3.0
- `Modules/ThirdParty/StartupAds.sgmodule` → blackmatrix7/ios_rule_script → GPL-2.0
- `Modules/ThirdParty/FanQieNovel.sgmodule` → fmz200/wool_scripts → GPL-3.0
- `Modules/ThirdParty/QiMaoNovel.sgmodule` → fmz200/wool_scripts → GPL-3.0

完整来源、修改范围与许可证记录见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

</details>

---

## 📂 仓库结构

<details>
<summary><strong>展开目录说明</strong></summary>

```text
Shadowrocket-Config/
├── Config/
│   └── Shadowrocket.conf
├── Modules/
│   ├── Talkatone.sgmodule
│   ├── YouTubeNoAds.sgmodule
│   ├── HongGuo-Local.sgmodule
│   └── ThirdParty/
├── Scripts/
│   ├── YouTube/
│   └── ThirdParty/
├── LICENSES/
├── THIRD_PARTY_NOTICES.md
└── README.md
```

</details>

---

## ⚖️ 使用与维护说明

这是个人使用配置，默认行为根据本人的网络环境、使用习惯和实际测试结果优化，并不以通用公共规则集为目标。

第三方代码的作者身份、著作权与许可归各自项目所有。本仓库的整理、镜像或兼容修改不改变原作者身份，也不代表与对应 App、服务或上游项目存在官方隶属关系。

如上游许可证、作者要求或项目状态发生变化，以其最新公开要求为准，并相应调整或移除本地镜像。
