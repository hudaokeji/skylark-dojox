/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry","dojox/mvc/at"],function(o,n,t,c){var i=[],e=null,d=function(o,n){t.byId(o).set("target",c("rel:",n))};return{init:function(){var t;e=this.loadedModels.names,t=n.connect(o.byId("shipto"),"click",function(){d("addrGroup","ShipTo")}),i.push(t),t=n.connect(o.byId("billto"),"click",function(){d("addrGroup","BillTo")}),i.push(t),t=n.connect(o.byId("reset1"),"click",function(){e.reset()}),i.push(t)},destroy:function(){for(var o=i.pop();o;)n.disconnect(o),o=i.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/simpleModelApp/simple/simple.js.map
