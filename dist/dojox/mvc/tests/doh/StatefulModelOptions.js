/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojox/mvc/StatefulModel"],function(o,p){o.register("dojox.mvc.tests.doh.StatefulModelOptions",[function(){var e=new p({data:{prop1:"String",prop2:10,prop3:void 0,prop4:null}});o.is("String",e.prop1.get("value"),"prop1 should be String"),o.is(10,e.prop2.get("value"),"prop2 should be 10"),o.is(void 0,e.prop3.get("value"),"prop3 should be undefined"),o.is(null,e.prop4.get("value"),"prop4 should be null")}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/StatefulModelOptions.js.map
