/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry"],function(t,i,e){var l=[],o=null,s=function(){e.byId("firstInput1-3").set("value",o[0].First),e.byId("lastInput1-3").set("value",o[0].Last),e.byId("emailInput1-3").set("value",o[0].Email),e.byId("shiptostreetInput1-3").set("value",o[0].ShipTo.Street),e.byId("shiptocityInput1-3").set("value",o[0].ShipTo.City),e.byId("shiptostateInput1-3").set("value",o[0].ShipTo.State),e.byId("shiptozipInput1-3").set("value",o[0].ShipTo.Zip),e.byId("billtostreetInput1-3").set("value",o[0].BillTo.Street),e.byId("billtocityInput1-3").set("value",o[0].BillTo.City),e.byId("billtostateInput1-3").set("value",o[0].BillTo.State),e.byId("billtozipInput1-3").set("value",o[0].BillTo.Zip)};return{init:function(){var e;o=this.loadedModels.names3,e=i.connect(t.byId("shipto-3"),"click",function(){t.byId("billtodiv-3").style.display="none",t.byId("shiptodiv-3").style.display=""}),l.push(e),e=i.connect(t.byId("billto-3"),"click",function(){t.byId("billtodiv-3").style.display="",t.byId("shiptodiv-3").style.display="none"}),l.push(e),e=i.connect(t.byId("reset1-3"),"click",function(){s()}),l.push(e),t.byId("billtodiv-3").style.display="none",s()},destroy:function(){for(var t=l.pop();t;)i.disconnect(t),t=l.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/simpleModelApp/simple/simple3.js.map
