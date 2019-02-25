/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../Calendar","dojo/when","dojo/store/JsonRest"],function(e,t,n,o){e.register("tests.unitTest_Store",[function(e){var s=new t;n(s.set("store",new o({target:"/"}),function(){e.f(!0,"ok fct must not have been called")},function(){e.t(!0,"failure fct must have been called")}));s.startup()}])});
//# sourceMappingURL=../../sourcemaps/calendar/tests/unitTest_Store.js.map
