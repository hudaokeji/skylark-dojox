/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.collections.tests.Queue"),dojo.require("dojox.collections.Queue"),tests.register("dojox.collections.tests.Queue",[function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);o.assertEqual(4,e.count)},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);e.clear(),o.assertEqual(0,e.count)},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]),t=e.clone();o.assertEqual(e.count,t.count),o.assertEqual(e.toArray().join(),t.toArray().join())},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);o.assertTrue(e.contains("bar")),o.assertFalse(e.contains("faz"))},function(o){for(var e=new dojox.collections.Queue(["foo","bar","test","bull"]).getIterator();!e.atEnd();)e.get();o.assertEqual("bull",e.element)},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);o.assertEqual("foo",e.peek())},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);o.assertEqual("foo",e.dequeue()),o.assertEqual("bar,test,bull",e.toArray().join(","))},function(o){var e=new dojox.collections.Queue(["foo","bar","test","bull"]);e.enqueue("bull"),o.assertEqual("bull",e.toArray().pop())}]);
//# sourceMappingURL=../../sourcemaps/collections/tests/Queue.js.map
