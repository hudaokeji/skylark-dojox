/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.curry"),dojo.require("dojox.lang.functional.curry"),function(){var a=dojox.lang.functional,r=a.curry("+")(5),t=a.curry("_-3"),u=a.lambda("100*a + 10*b + c");tests.register("dojox.lang.tests.curry",[function(r){r.assertEqual(a.curry("+")(1,2),3)},function(r){r.assertEqual(a.curry("+")(1)(2),3)},function(r){r.assertEqual(a.curry("+")(1,2,3),3)},function(a){a.assertEqual(r(1),6)},function(a){a.assertEqual(r(3),8)},function(a){a.assertEqual(r(5),10)},function(a){a.assertEqual(t(1),-2)},function(a){a.assertEqual(t(3),0)},function(a){a.assertEqual(t(5),2)},function(r){r.assertEqual(a.partial(u,1,2,3)(),123)},function(r){r.assertEqual(a.partial(u,1,2,a.arg)(3),123)},function(r){r.assertEqual(a.partial(u,1,a.arg,3)(2),123)},function(r){r.assertEqual(a.partial(u,1,a.arg,a.arg)(2,3),123)},function(r){r.assertEqual(a.partial(u,a.arg,2,3)(1),123)},function(r){r.assertEqual(a.partial(u,a.arg,2,a.arg)(1,3),123)},function(r){r.assertEqual(a.partial(u,a.arg,a.arg,3)(1,2),123)},function(r){r.assertEqual(a.partial(u,a.arg,a.arg,a.arg)(1,2,3),123)}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/curry.js.map
