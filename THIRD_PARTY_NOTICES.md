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

当前仓库中的 `Modules/Talkatone.sgmodule` 是此前已经存在的本地适配版本；应继续保留对 LOWERTOP 的来源说明，并在后续确认授权范围后再决定是否扩大镜像。

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

## 免责声明

模块和规则可能因为 App 接口、广告 SDK、Shadowrocket 版本或上游脚本更新而失效。启用 MITM 的模块应只添加必要域名，并由使用者自行安装和信任本机证书。对来源不明的脚本，不应仅因“别人能用”就直接纳入长期配置。
