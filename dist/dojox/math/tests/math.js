/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.math.tests.math"),dojo.require("dojox.math"),function(){function a(a){return Math.floor(a*(1<<30))/(1<<30)}tests.register("dojox.math.tests.factorial",[function(a){a.assertEqual(1,dojox.math.factorial(0))},function(a){a.assertEqual(1,dojox.math.factorial(1))},function(a){a.assertEqual(2,dojox.math.factorial(2))},function(a){a.assertEqual(120,dojox.math.factorial(5))},function(t){t.assertEqual(a(119.9998047504966),a(dojox.math.factorial(5-1/1048576)))},function(t){t.assertEqual(a(120.00019524984087),a(dojox.math.factorial(5+1/1048576)))},function(a){a.assertEqual(Math.sqrt(Math.PI),dojox.math.factorial(-.5))},function(t){t.assertEqual(a(Math.sqrt(Math.PI)/2),a(dojox.math.factorial(.5)))},function(t){t.assertEqual(a(2*-Math.sqrt(Math.PI)),a(dojox.math.factorial(-1.5)))},function(t){t.assertEqual(a(4*Math.sqrt(Math.PI)/3),a(dojox.math.factorial(-2.5)))},function(t){t.assertEqual(a(15*Math.sqrt(Math.PI)/8),a(dojox.math.factorial(2.5)))},function(a){a.assertEqual(NaN,dojox.math.factorial(-1))},function(a){a.assertEqual(NaN,dojox.math.factorial(-2))}])}();
//# sourceMappingURL=../../sourcemaps/math/tests/math.js.map
