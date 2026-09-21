# Third-Party Modules

本目录用于存放**有明确开源许可、可以合法再分发**的第三方 Shadowrocket / Surge 兼容模块镜像。镜像的目的主要是固定本仓库 Raw 地址、减少上游路径变化造成的失效，并不改变原作者身份。

| 本地文件 | 上游项目 | 许可 | 本地处理 |
|---|---|---|---|
| `AWAvenue-Ads-Rule-Shadowrocket.module` | TG-Twilight/AWAvenue-Ads-Rule | GPL-3.0 | 保留上游规则，增加本仓库更新地址 |
| `StartupAds.sgmodule` | blackmatrix7/ios_rule_script | GPL-2.0 | 保留模块规则；仅把 `startup.js` 的 script-path 改为本仓库镜像 |
| `FanQieNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 | 保留规则，增加本仓库更新地址 |
| `QiMaoNovel.sgmodule` | fmz200/wool_scripts | GPL-3.0 | 保留规则，增加本仓库更新地址 |

## Shadowrocket Raw 地址

- AWAvenue: `https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/ThirdParty/AWAvenue-Ads-Rule-Shadowrocket.module`
- 开屏去广告: `https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/ThirdParty/StartupAds.sgmodule`
- 番茄小说: `https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/ThirdParty/FanQieNovel.sgmodule`
- 七猫小说: `https://raw.githubusercontent.com/zhangbao20-sina/Shadowrocket-Config/main/Modules/ThirdParty/QiMaoNovel.sgmodule`

## 未直接镜像的模块

截图中使用的 `红果短剧`、`苹果助手`、`HK Call`、`UK Call`、`US Call` 等可在 LOWERTOP/Shadowrocket-First 找到对应上游，但在本次检查时该仓库根目录未发现明确的仓库级 LICENSE 文件。因此本仓库暂不复制这些文件，只保留上游来源说明，避免把“公开可见”误当成“允许再分发”。

`APP启动页去广告 ultra+` 可找到多个第三方镜像，但来源链较复杂，且没有确认到稳定的 GitHub 原始项目与明确再分发许可，所以同样不纳入本地镜像。

详细来源、许可与修改记录见仓库根目录 `THIRD_PARTY_NOTICES.md`。
