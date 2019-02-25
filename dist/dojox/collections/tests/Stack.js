/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.collections.tests.Stack"),dojo.require("dojox.collections.Stack"),tests.register("dojox.collections.tests.Stack",[function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);o.assertEqual(4,t.count)},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);t.clear(),o.assertEqual(0,t.count)},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]),e=t.clone();o.assertEqual(t.count,e.count),o.assertEqual(t.toArray().join(),e.toArray().join())},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);o.assertTrue(t.contains("bar")),o.assertFalse(t.contains("faz"))},function(o){for(var t=new dojox.collections.Stack(["foo","bar","test","bull"]).getIterator();!t.atEnd();)t.get();o.assertEqual("bull",t.element)},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);o.assertEqual("bull",t.peek())},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);o.assertEqual("bull",t.pop()),o.assertEqual("test",t.pop())},function(o){var t=new dojox.collections.Stack(["foo","bar","test","bull"]);t.push("bug"),o.assertEqual("bug",t.peek())}]);
//# sourceMappingURL=../../sourcemaps/collections/tests/Stack.js.map
