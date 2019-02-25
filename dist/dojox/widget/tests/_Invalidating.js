/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","../_Invalidating","dijit/_WidgetBase"],function(i,t,n,a){i.register("tests._Invalidating",[function(i){var e=new(t("MyWidget",[a,n],{constructor:function(){this.invalidatingProperties=["a"],this.addInvalidatingProperties(["b"])}}));e.startup(),i.is(["a","b"],e.invalidatingProperties)}])});
//# sourceMappingURL=../../sourcemaps/widget/tests/_Invalidating.js.map
