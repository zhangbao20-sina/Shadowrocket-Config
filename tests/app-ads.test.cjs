// Synthetic fixtures only; these do not replace device/App verification.
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(root, "Scripts/Xianyu/ad-filter.js"), "utf8");
let checks = 0;
function check(fn) { fn(); checks++; }
const host = "https://acs.m.goofish.com/gw/";
function run(endpoint, body, status = 200, prefix = host) {
  const out = [];
  vm.runInNewContext(script, {
    $request: {url: prefix + endpoint + "/1.0/"},
    $response: {body: typeof body === "string" ? body : JSON.stringify(body), status},
    $done: value => out.push(JSON.parse(JSON.stringify(value)))
  }, {timeout: 500});
  assert.equal(out.length, 1, "script must complete exactly once");
  return out[0];
}
for (const endpoint of ["mtop.taobao.idlehome.home.nextfresh", "mtop.taobao.idle.local.home"]) {
  const ordinary = [{data:{bizType:"item"}}, {data:{bizType:"homepage"}}, null, {}, {data:{bizType:"unknown"}}];
  check(() => {
    const body = {data:{sections:[...ordinary, {data:{bizType:"AD"}}, {data:{bizType:"mamaAD"}}]}, ret:["SUCCESS::OK"]};
    const result = JSON.parse(run(endpoint, body).body);
    assert.deepEqual(result.data.sections, ordinary);
    assert.deepEqual(result.ret, body.ret);
  });
  check(() => assert.deepEqual(run(endpoint, {data:{sections:ordinary}}), {}));
  check(() => assert.deepEqual(run(endpoint, {data:{sections:"unexpected"}}), {}));
}
const search = "mtop.taobao.idlemtopsearch.search";
function searchItem(mark) { return {data:{item:{main:{clickParam:{args:{biz_type:mark}}}}}}; }
check(() => {
  const keep = [searchItem("item"), searchItem("unknown"), {}, null];
  const result = JSON.parse(run(search, {data:{resultList:[...keep,searchItem("AD")]}}, 200, "https://g-acs.m.goofish.com/gw/").body);
  assert.deepEqual(result.data.resultList, keep);
});
check(() => {
  const result = JSON.parse(run("mtop.taobao.idle.item.recommend",
    {data:{cardList:[{cardData:{bizType:"mamaAD"}},{cardData:{bizType:"item"}},{}]}}).body);
  assert.deepEqual(result.data.cardList, [{cardData:{bizType:"item"}},{}]);
});
for (const body of ["", "<html>Error</html>", "null", "{}", '{"data":null}', '{"data":[]}', '{"data":{}}']) {
  check(() => assert.deepEqual(run(search, body), {}));
}
const adBody = {data:{sections:[{data:{bizType:"AD"}}]}};
for (const status of [401,500,"HTTP/1.1 403 Forbidden"]) {
  check(() => assert.deepEqual(run("mtop.taobao.idlehome.home.nextfresh", adBody, status), {}));
}
check(() => assert.deepEqual(run("mtop.taobao.idlehome.home.nextfresh", {...adBody,ret:["FAIL_SYS_SESSION_EXPIRED"]}), {}));
check(() => assert.deepEqual(run("mtop.taobao.idlehome.home.nextfresh", adBody, 200, "https://example.com/gw/"), {}));
for (const endpoint of ["mtop.taobao.idle.order.list", "mtop.taobao.idlemtopsearch.search.shade", "mtop.taobao.idlehome.home.nextfresh.extra"]) {
  check(() => assert.deepEqual(run(endpoint, adBody), {}));
}
function readModule(file) {
  const content = fs.readFileSync(path.join(root, "Modules", file), "utf8");
  const rewrites = content.split("\n").filter(l => l.startsWith("^")).map(l => new RegExp(l.split(" - ")[0]));
  const patterns = content.split("\n").filter(l => l.includes("type=http-response")).map(l => new RegExp(l.match(/pattern=(.*?),requires-body=/)[1]));
  check(() => assert.ok(content.includes("hostname = %APPEND% ")));
  check(() => assert.ok(!/^\[(General|Proxy Group|Rule)\]/m.test(content)));
  check(() => assert.ok(!content.match(/hostname =.*\*/))); // %APPEND% is not a wildcard.
  check(() => assert.ok(!content.includes("[Map Local]") && !content.includes("jsonjq-response-body")));
  return {rewrites,patterns};
}
const amap = readModule("Amap-Local.sgmodule");
const idle = readModule("Xianyu-Local.sgmodule");
for (const url of [
 "https://m5.amap.com/ws/valueadded/alimama/splash_screen?x=1",
 "https://amap-aos-info-nogw.amap.com/ws/aos/alimama/splash_screen_rt?x=1"
]) check(() => assert.ok(amap.rewrites.some(r=>r.test(url))));
for (const url of [
 "https://m5.amap.com/ws/valueadded/weather",
 "https://m5.amap.com/ws/shield/dsp/app/startup/init?x=1",
 "https://m5.amap.com/ws/direction/driving",
 "https://bluedot.is.autonavi.com/clls/wloc",
 "https://gs-loc.apple.com/wloc-settings/save",
 "https://m5.amap.com.evil.test/ws/aos/alimama/splash_screen",
 "https://m5.amap.com/ws/aos/alimama/splash_screen_extra",
 "https://maps.googleapis.com/maps/api/directions",
 "https://static.okg.com/test.jpg",
 "https://generativelanguage.googleapis.com/v1"
]) check(() => assert.ok(!amap.rewrites.some(r=>r.test(url))));
for (const h of ["acs", "g-acs"]) {
 check(() => assert.ok(idle.rewrites.some(r=>r.test("https://"+h+".m.goofish.com/gw/mtop.taobao.idlecommerce.splash.ads/1.0/"))));
 check(() => assert.ok(idle.patterns.some(r=>r.test("https://"+h+".m.goofish.com/gw/"+search+"/1.0/"))));
}
for (const endpoint of ["mtop.taobao.idlemtopsearch.search.shade", "mtop.taobao.idle.order.list", "mtop.taobao.idle.chat.send"]) {
 check(() => assert.ok(![...idle.rewrites,...idle.patterns].some(r=>r.test(host+endpoint+"/1.0/"))));
}
console.log(checks+" checks passed (synthetic responses and URL boundaries)");
