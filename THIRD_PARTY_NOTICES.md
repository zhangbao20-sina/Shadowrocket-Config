# Third-Party Notices / 第三方来源与许可说明

本仓库包含个人维护配置、个人改写模块以及经许可镜像的第三方开源内容。**第三方代码的著作权与作者身份属于各自原作者，本仓库不以整理、镜像或修改为由主张原始作者身份。**

## 维护原则

1. 只有在上游仓库存在明确开源许可时，才把第三方完整代码镜像到本仓库。
2. 镜像文件保留原作者、主页、原始来源等元数据；本仓库只新增自己的固定 Raw / update URL 或做必要兼容修改。
3. 对任何修改都在本文件中说明，不把修改版冒充上游原版。
4. 未发现明确许可的公开代码，不因“能访问、能复制”就默认拥有再分发授权；这类项目仅做来源链接，不直接搬运。
5. 如果上游许可证、作者要求或项目状态发生变化，应以上游最新要求为准，并及时调整或移除镜像。
6. 本仓库不上传 MITM 私钥、账户凭证、订阅密钥等敏感信息。

## 已镜像项目

### Maasea/sgmodule — YouTubeNoAds
- 上游：https://github.com/Maasea/sgmodule
- 许可：Apache-2.0
- 本地位置：`Modules/YouTubeNoAds.sgmodule`、`Scripts/YouTube/`
- 说明：YouTube 脚本已在此前版本镜像；许可证随脚本目录保留。

### blackmatrix7/ios_rule_script — 开屏去广告
- 上游模块：https://github.com/blackmatrix7/ios_rule_script/blob/master/script/startup/startup.sgmodule
- 上游脚本：https://github.com/blackmatrix7/ios_rule_script/blob/master/script/startup/startup.js
- 许可：GPL-2.0
- 上游模块 blob：`9e6ac2b695fe23d2283b9c2a95ea448ed079ad72`
- 上游脚本 blob：`673c6b861ddc7e7d0ad4b85fca26d3e7a7d1d779`
- 本地位置：`Modules/ThirdParty/StartupAds.sgmodule`、`Scripts/ThirdParty/blackmatrix7/startup.js`
- 本地修改：把模块内 `script-path` 从上游 Raw 地址改为本仓库脚本镜像地址；规则与脚本主体保持上游内容。
- 许可证副本：`LICENSES/GPL-2.0.txt`

### fmz200/wool_scripts — 番茄小说 / 七猫小说
- 上游：https://github.com/fmz200/wool_scripts
- 许可：GPL-3.0
- 番茄小说 blob：`96680e83c3bb78facb252485f3342c84bc8eb998`
- 七猫小说 blob：`53e9f8854732c30e33306e3343b990eefa384207`
- 本地位置：`Modules/ThirdParty/FanQieNovel.sgmodule`、`Modules/ThirdParty/QiMaoNovel.sgmodule`
- 本地修改：仅增加本仓库固定 `#!url` / `#!update-url` 与来源说明，规则主体保持上游内容。
- 许可证副本：`LICENSES/GPL-3.0.txt`

### TG-Twilight/AWAvenue-Ads-Rule — AWAvenue Ads Rule
- 上游：https://github.com/TG-Twilight/AWAvenue-Ads-Rule
- 许可：GPL-3.0
- 上游文件：`Filters/AWAvenue-Ads-Rule-Shadowrocket.module`
- 上游 blob：`d73799591e4c30c61911ccd194f7b08150c45678`
- 本地位置：`Modules/ThirdParty/AWAvenue-Ads-Rule-Shadowrocket.module`
- 本地修改：仅增加本仓库固定 `#!url` / `#!update-url` 与来源说明，规则主体保持上游内容。
- 许可证副本：`LICENSES/GPL-3.0.txt`

## 只引用、不镜像的上游

### LOWERTOP/Shadowrocket-First
截图中的 Talkatone、红果短剧、苹果助手、香港 / 英国 / 美国 Wi-Fi Calling 等模块可在该仓库找到。检查日期：2026-09-22。该仓库根目录当时未发现明确的仓库级 LICENSE，因此本仓库不把这些文件作为“原样第三方镜像”批量复制。

上游：https://github.com/LOWERTOP/Shadowrocket-First

`Modules/Talkatone.sgmodule` 当前按 **Talkatone Local** 个人维护版本管理，模块本身不再展示第三方品牌式标题或作者字段。由于该文件的历史演变曾参考公开规则项目，本说明文件继续保留来源链记录，仅用于著作权与维护可追溯性，不代表当前模块是第三方官方镜像。

### Talkatone Local — 本地独立维护

- 本地位置：`Modules/Talkatone.sgmodule`
- 维护者：`zhangbao20-sina`
- 性质：个人维护适配版。
- 当前结构：模块只负责广告相关规则；Talkatone 功能域名、业务分流和 IP 段统一交由本地配置 `TALKATONE_NODE`。
- 不使用：MITM、URL Rewrite、响应改写。
- 兼容策略：不阻断 Firebase、Crashlytics、Adjust 等共享服务，减少对登录、推送、通话或其它 App 的潜在影响。
- 历史来源链：该模块早期版本曾参考 LOWERTOP/Shadowrocket-First 的 Talkatone 公开规则；本条仅用于来源可追溯，不作为当前模块的作者展示信息。

### 红果短剧 Local — 本地独立维护

- 本地位置：`Modules/HongGuo-Local.sgmodule`
- 维护者：`zhangbao20-sina`
- 性质：个人维护适配版，不是 LOWERTOP 原文件的官方镜像。
- 公开参考之一：https://github.com/LOWERTOP/Shadowrocket-First/blob/main/HongGuo.module
- 网络复查：同时参考了 AWAvenue Ads Rule、v2fly/domain-list-community 及其他公开广告规则中对相关域名的分类。
- 取舍：保留 `p3-ad-sign.byteimg.com` 精确直连例外；采用 `REJECT` 而不是 `REJECT-DROP`；增加已被多个来源交叉确认的 `ads*-normal-l*.zijieapi.com`；暂不启用仅在少数来源出现的 `v11-reading-video.qznovelvod.com`。
- 不使用：MITM、JavaScript、响应重写。
- 署名原则：保留参考来源，不把公开参考项目的作者身份或项目名称冒充为本地原创。

### APP 启动页去广告 ultra+
GitHub 上存在多个转存或修订副本，常见头部指向 whatshub / yfamilys 等站点，但本次没有确认到稳定、明确许可的原始 GitHub 上游，因此不复制到本仓库。这样做是为了避免把第三方转存再次当作“原作者代码”传播。

## 闲鱼 / 高德 — 单 App 适配模块（2026-09-27）

- 本地模块：`Modules/Xianyu-Local.sgmodule`、`Modules/Amap-Local.sgmodule`。
- 本地脚本：`Scripts/Xianyu/ad-filter.js`；高德模块无远程脚本依赖。
- 主要来源：[fmz200/wool_scripts](https://github.com/fmz200/wool_scripts)，GPL-3.0，许可证副本沿用 `LICENSES/GPL-3.0.txt`。
- 闲鱼模块参考：`Shadowrocket/module/split/partX/XianYu.srmodule`，blob `b063577a3a2d256274d84800db46840e7083f910`。
- 闲鱼响应结构参考：`Scripts/xianyu/xianyu_ads.js`，blob `779fda417ed6b2d637543fa62fd126fe9646c05a`。
- 高德模块参考：`Shadowrocket/module/split/partG/AutoNavi.srmodule`，blob `66175628d62404525b7ff81a6b813e23b012395c`。
- 接口交叉参考：[闲鱼](https://github.com/ddgksf2013/Rewrite/blob/master/AdBlock/GoofishAds.conf)、[高德](https://github.com/ddgksf2013/Rewrite/blob/master/AdBlock/AmapAds.conf)。署名 ddgksf2013；没有镜像该项目的完整规则或混淆脚本，也不把其内容宣称为 GPL 授权。
- 适配与维护：`zhangbao20-sina`；这些是明确缩小范围的适配版，不是原作者模块的完整镜像。

### 修改范围

- 使用 Shadowrocket 原生 `[URL Rewrite]` 和 `[Script]`；空 JSON 使用 `reject-dict`。追加具体 MITM 主机名，保留现有模块的解密列表。
- 闲鱼开屏匹配限定两个具体主机、具体接口及路径边界；信息流脚本只移除 `AD` / `mamaAD` 明确标记。保留普通商品、未知卡片和正常推荐；不清空频道、搜索热词或个人主页。
- 闲鱼脚本重新实现格式检查、错误回退及一次完成逻辑，限制为四类接口；未引入第三方网络请求或凭证存储。
- 高德仅取开屏接口，未带入原规则中的整段 `/ws/valueadded/`、初始化接口清空、定位/日志域名封锁、天气移除或整套界面净化。
- 不引入广泛 AMDC 拦截，不改变 Gemini / Google Maps / YouTube / OKX 分流和 DNS；不修改 WLOC。
- 不使用远程第三方运行脚本。本地新增与改写部分按 GPL-3.0 发布，保留上述来源链。

### 验证范围

`node tests/app-ads.test.cjs`：50 项模拟响应与 URL 边界检查，覆盖明确广告过滤、普通及未知内容保留、空/异常响应放行、路径边界和其他业务不匹配。

以上不是 iOS / Shadowrocket / 实际 App 的端到端验证；开屏缓存、App 接口版本及启动耗时仍待设备实测。

## 米家 — 仅去开屏版 / 源模块版（2026-09-27）

- 上游作者：奶思；项目：[fmz200/wool_scripts](https://github.com/fmz200/wool_scripts)。
- 上游文件：[Mijia.srmodule](https://github.com/fmz200/wool_scripts/blob/main/Shadowrocket/module/split/partM/Mijia.srmodule)，blob `42ca586b374d50502b8ef17a974a3433bf75a772`。
- 许可：GPL-3.0，许可证副本：`LICENSES/GPL-3.0.txt`。
- 源模块版：`Modules/ThirdParty/Mijia.sgmodule`。所有规则段保持上游原样，仅调整显示名称并添加本仓库固定更新地址、镜像与许可说明；保留原作者及上游元数据。
- 仅去开屏版：`Modules/Mijia-Splash.sgmodule`。从上游精简，只保留普通、实时两个开屏接口及 MITM 主机；为接口添加路径边界，移除其他推荐过滤及广告 SDK 域名拦截。精简修改按 GPL-3.0 发布。
- 两版均无脚本依赖，README 在同一米家介绍栏提供不同安装入口。二选一启用。
- 验证：源版规则段一致性、精简版 URL 正反例及链接目标静态检查；米家 11.8.203（build 11.8.203.304）手机效果和启动耗时待实测。

## 免责声明

模块和规则可能因为 App 接口、广告 SDK、Shadowrocket 版本或上游脚本更新而失效。启用 MITM 的模块应只添加必要域名，并由使用者自行安装和信任本机证书。对来源不明的脚本，不应仅因“别人能用”就直接纳入长期配置。
