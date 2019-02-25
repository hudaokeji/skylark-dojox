/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.collections.tests.Set"),dojo.require("dojox.collections.Set"),function(){var e=dojox.collections.Set,a=["apple","bear","candy","donut","epiphite","frank"],t=["bear","epiphite","google","happy","joy"];tests.register("dojox.collections.tests.Set",[function(o){var r=e.union(a,t);o.assertEqual("apple,bear,candy,donut,epiphite,frank,google,happy,joy",r.toArray().join(","))},function(o){var r=e.intersection(a,t);o.assertEqual("bear,epiphite",r.toArray().join(",")),o.assertEqual("bear",e.intersection(["bear","apple"],["bear"]))},function(o){var r=e.difference(a,t);o.assertEqual("apple,candy,donut,frank",r.toArray().join(","))},function(t){t.assertFalse(e.isSubSet(a,["bear","candy"])),t.assertTrue(e.isSubSet(["bear","candy"],a))},function(t){t.assertTrue(e.isSuperSet(a,["bear","candy"])),t.assertFalse(e.isSuperSet(["bear","candy"],a))}])}();
//# sourceMappingURL=../../sourcemaps/collections/tests/Set.js.map
