/*
 * 闲鱼精确广告过滤 / Shadowrocket
 * Maintainer: zhangbao20-sina
 * SPDX-License-Identifier: GPL-3.0-only
 * Based on endpoint and data-shape references from fmz200/wool_scripts:
 * Scripts/xianyu/xianyu_ads.js (blob 779fda417ed6b2d637543fa62fd126fe9646c05a).
 * Narrowed to explicit advertisement markers. Normal recommendations and
 * unrecognized response formats pass through. No network or storage access.
 */
(function () {
  try {
    if (typeof $request === "undefined" || typeof $response === "undefined") {
      return $done({});
    }
    var url = $request.url || "";
    var match = /^https?:\/\/(?:g-)?acs\.m\.goofish\.com\/gw\/(mtop\.[a-z.]+)(?:\/|\?|$)/.exec(url);
    if (!match || typeof $response.body !== "string" || !$response.body.trim()) {
      return $done({});
    }
    var status = $response.statusCode || $response.status;
    if (status && !/^(?:HTTP\/[\d.]+\s+)?2\d\d(?:\s|$)/.test(String(status))) {
      return $done({});
    }
    var obj = JSON.parse($response.body);
    if (!obj || !obj.data || typeof obj.data !== "object" || Array.isArray(obj.data)) {
      return $done({});
    }
    if (Array.isArray(obj.ret) && obj.ret.some(function (v) {
      return typeof v === "string" && !/^SUCCESS(?:::|$)/.test(v);
    })) return $done({});
    var changed = false;
    function isAd(value) {
      return value === "AD" || value === "mamaAD";
    }
    function filterAt(parent, key, predicate) {
      if (!parent || !Array.isArray(parent[key])) return;
      var before = parent[key];
      var after = before.filter(function (item) { return !predicate(item); });
      if (after.length !== before.length) {
        parent[key] = after;
        changed = true;
      }
    }
    switch (match[1]) {
      case "mtop.taobao.idlehome.home.nextfresh":
      case "mtop.taobao.idle.local.home":
        filterAt(obj.data, "sections", function (item) {
          return item && item.data && isAd(item.data.bizType);
        });
        break;
      case "mtop.taobao.idlemtopsearch.search":
        filterAt(obj.data, "resultList", function (item) {
          var args = item && item.data && item.data.item && item.data.item.main &&
            item.data.item.main.clickParam && item.data.item.main.clickParam.args;
          return args && isAd(args.biz_type);
        });
        break;
      case "mtop.taobao.idle.item.recommend":
        filterAt(obj.data, "cardList", function (item) {
          return item && item.cardData && isAd(item.cardData.bizType);
        });
        break;
      default:
        return $done({});
    }
    return $done(changed ? { body: JSON.stringify(obj) } : {});
  } catch (_) {
    return $done({});
  }
})();
