/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.object"),dojo.require("dojox.lang.functional.object"),function(){var o=dojox.lang.functional,t={a:1,b:2,c:3},n=function(o,t){this.push("["+t+"] = "+o)},a=function(t){return o.forIn(t,n,[]).sort().join(", ")};tests.register("dojox.lang.tests.object",[function(n){n.assertEqual(o.keys(t).sort(),["a","b","c"])},function(n){n.assertEqual(o.values(t).sort(),[1,2,3])},function(o){o.assertEqual(a(t),"[a] = 1, [b] = 2, [c] = 3")},function(n){n.assertEqual(a(o.filterIn(t,"%2")),"[a] = 1, [c] = 3")},function(n){n.assertEqual(a(o.mapIn(t,"+3")),"[a] = 4, [b] = 5, [c] = 6")}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/object.js.map
