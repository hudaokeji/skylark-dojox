/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.oo_mixin"),dojo.require("dojox.lang.functional.object"),dojo.require("dojox.lang.oo.mixin"),dojo.require("dojox.lang.oo.rearrange"),function(){var o=dojox.lang.functional,e=dojox.lang.oo,n={a:1,b:2,c:3},r={c:1,d:2,e:3,f:4},s=e.mixin({},e.filter(r,{d:"a",e:"b",f:""})),i=dojo.clone(n),t=dojo.clone(r);e.mixin(i,r),e.mixin(t,n),e.rearrange(r,{d:"a",e:"b",f:""}),tests.register("dojox.lang.tests.oo_mixin",[function(e){e.assertEqual(o.keys(i).sort(),o.keys(t).sort())},function(e){e.assertEqual(o.keys(n).sort(),o.keys(s).sort())},function(e){e.assertEqual(o.keys(r).sort(),o.keys(s).sort())}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/oo_mixin.js.map
