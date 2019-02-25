/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define("dojox/rpc/Client",["dojo","dojox"],function(e,r){return e.getObject("rpc.Client",!0,r),e._defaultXhr=e.xhr,e.xhr=function(t,n){var d=n.headers=n.headers||{};return d["Client-Id"]=r.rpc.Client.clientId,d["Seq-Id"]=r._reqSeqId=(r._reqSeqId||0)+1,e._defaultXhr.apply(e,arguments)},r.rpc.Client.clientId=(Math.random()+"").substring(2,14)+((new Date).getTime()+"").substring(8,13),r.rpc.Client});
//# sourceMappingURL=../sourcemaps/rpc/Client.js.map
