/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/json","dijit/registry"],function(e,o,d){return{switchToData:function(){e.byId("outerModelArea").style.display="";try{e.byId("modelArea").focus(),e.byId("viewArea").style.display="none",d.byId("modelArea").set("value",o.stringify(d.byId("view").get("children")))}catch(e){console.log(e)}},switchToGenerated:function(){e.byId("outerModelArea").style.display="none",e.byId("viewArea").style.display=""}}});
//# sourceMappingURL=../../../../sourcemaps/mvc/tests/mobile/demo/MobileDemoGenerateActions.js.map
