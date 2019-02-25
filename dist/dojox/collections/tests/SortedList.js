/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.collections.tests.SortedList"),dojo.require("dojox.collections.SortedList"),tests.register("dojox.collections.tests.SortedList",[function(a){var o=new dojox.collections.SortedList;a.assertTrue(o instanceof dojox.collections.SortedList)},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),a.assertEqual("bar",o.item("foo").valueOf())},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.clear(),a.assertEqual(0,o.count)},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange");var d=o.clone();a.assertTrue(d.contains("baz"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertTrue(o.contains("baz")),a.assertFalse(o.contains("faz"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertTrue(o.containsKey("buck")),a.assertFalse(o.containsKey("faz"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertTrue(o.containsValue("shot")),a.assertFalse(o.containsValue("faz"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual("foo,baz,buck,apple",o.getKeyList().join(","))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual("bar,fab,shot,orange",o.getValueList().join(","))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange");var d=["bek"];o.copyTo(d,0),a.assertEqual("bar,fab,shot,orange,bek",d.join(","))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual("shot",o.getByIndex(2))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual("apple",o.getKey(0))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual(0,o.indexOfKey("apple"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),a.assertEqual(3,o.indexOfValue("bar"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),o.remove("baz"),a.assertEqual(3,o.count),a.assertEqual(void 0,o.item("baz"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),o.removeAt(2),a.assertEqual(void 0,o.item("buck"))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),o.replace("buck","dollar"),a.assertEqual(o.item("buck").valueOf(),"dollar")},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange"),o.setByIndex(0,"bar"),a.assertEqual("bar",o.getByIndex(0))},function(a){var o=new dojox.collections.SortedList;o.add("foo","bar"),o.add("baz","fab"),o.add("buck","shot"),o.add("apple","orange");var d=[];o.forEach(function(a){d.push(a)}),a.assertEqual("orange,fab,shot,bar",d.join())}]);
//# sourceMappingURL=../../sourcemaps/collections/tests/SortedList.js.map
