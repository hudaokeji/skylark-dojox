/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry","dojox/mvc/at"],function(o,n,e,t){var c=[],i=null,d=function(o,n){e.byId(o).set("target",t("rel:",n)),console.log("setRef done.")};return{init:function(){},beforeActivate:function(){var e;i=this.loadedModels.names,e=n.connect(o.byId("shipto"),"click",function(){d("addrGroup","ShipTo")}),c.push(e),e=n.connect(o.byId("billto"),"click",function(){d("addrGroup","BillTo")}),c.push(e),e=n.connect(o.byId("reset1"),"click",function(){i.reset(),console.log("reset done. ")}),c.push(e)},afterDeactivate:function(){for(var o=c.pop();o;)n.disconnect(o),o=c.pop()},destroy:function(){for(var o=c.pop();o;)n.disconnect(o),o=c.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/views/simple.js.map
