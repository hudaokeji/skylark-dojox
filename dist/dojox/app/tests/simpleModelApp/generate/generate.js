/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry","dojox/mvc"],function(e,o,n,t){var d=null,r=[];return{init:function(){var a;a=o.connect(e.byId("generate1"),"click",function(){!function(){try{var o=dojo.fromJson(e.byId("modelArea").value);d=t.newStatefulModel({data:o}),n.byId("view").set("ref",d),e.byId("outerModelArea").style.display="none",e.byId("viewArea").style.display=""}catch(e){console.error("Error parsing json from model: "+e)}}()}),r.push(a),a=o.connect(e.byId("updateModel"),"click",function(){e.byId("modelArea").focus(),e.byId("viewArea").style.display="none",e.byId("outerModelArea").style.display="",n.byId("modelArea").set("value",dojo.toJson(d.toPlainObject(),!0))}),r.push(a)},beforeActivate:function(){},destroy:function(){for(var e=r.pop();e;)o.disconnect(e),e=r.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/simpleModelApp/generate/generate.js.map
