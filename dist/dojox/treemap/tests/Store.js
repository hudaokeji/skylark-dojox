/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","../TreeMap","dojo/store/JsonRest","dojo/when"],function(e,t,o,n,a){e.register("dojox.treemap.tests.Store",[function(e){var t=new o;a(t.set("store",new n({target:"/"}),function(){e.f(!0,"ok fct must not have been called")},function(){e.t(!0,"failure fct must have been called")}));t.startup()}])});
//# sourceMappingURL=../../sourcemaps/treemap/tests/Store.js.map
