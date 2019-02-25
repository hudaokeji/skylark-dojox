/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.misc"),dojo.require("dojox.lang.functional.zip"),function(){var a=dojox.lang.functional,n=a.lambda("100*a + 10*b + c");tests.register("dojox.lang.tests.misc",[function(n){n.assertEqual(a.zip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]])},function(n){n.assertEqual(a.zip([1,2],[3,4],[5,6]),[[1,3,5],[2,4,6]])},function(n){n.assertEqual(a.unzip([[1,4],[2,5],[3,6]]),[[1,2,3],[4,5,6]])},function(n){n.assertEqual(a.unzip([[1,3,5],[2,4,6]]),[[1,2],[3,4],[5,6]])},function(s){s.assertEqual(a.mixer(n,[1,2,0])(3,1,2),123)},function(s){s.assertEqual(a.flip(n)(3,2,1),123)},function(n){n.assertEqual(a.lambda(["+5","*3"])(8),29)},function(n){n.assertEqual(a.lambda(["+5","*3"].reverse())(8),39)}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/misc.js.map
