/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry"],function(t,i,e){var l=[],o=null,s=function(){e.byId("firstInput1").set("value",o[0].First),e.byId("lastInput1").set("value",o[0].Last),e.byId("emailInput1").set("value",o[0].Email),e.byId("shiptostreetInput1").set("value",o[0].ShipTo.Street),e.byId("shiptocityInput1").set("value",o[0].ShipTo.City),e.byId("shiptostateInput1").set("value",o[0].ShipTo.State),e.byId("shiptozipInput1").set("value",o[0].ShipTo.Zip),e.byId("billtostreetInput1").set("value",o[0].BillTo.Street),e.byId("billtocityInput1").set("value",o[0].BillTo.City),e.byId("billtostateInput1").set("value",o[0].BillTo.State),e.byId("billtozipInput1").set("value",o[0].BillTo.Zip)};return{init:function(){var e;o=this.loadedModels.names,e=i.connect(t.byId("shipto"),"click",function(){t.byId("billtodiv").style.display="none",t.byId("shiptodiv").style.display=""}),l.push(e),e=i.connect(t.byId("billto"),"click",function(){t.byId("billtodiv").style.display="",t.byId("shiptodiv").style.display="none"}),l.push(e),e=i.connect(t.byId("reset1"),"click",function(){s()}),l.push(e),t.byId("billtodiv").style.display="none",s()},destroy:function(){for(var t=l.pop();t;)i.disconnect(t),t=l.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/domOrderByConstraint/simple/simple.js.map
