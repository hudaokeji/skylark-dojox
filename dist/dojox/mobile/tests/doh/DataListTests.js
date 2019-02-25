/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var fruits11,fruits12,fruits13,fruits21,fruits22,fruits23;require(["dojo/_base/lang","dojo/data/ItemFileWriteStore","dojo/dom-construct","dojo/ready","dijit/registry","doh/runner","dojox/mobile/EdgeToEdgeDataList","dojox/mobile/RoundRectDataList","dojox/mobile","dojox/mobile/View","dojox/mobile/compat","dojox/mobile/parser"],function(e,t,o,i,a,r,d,s){var n,l,u;IsEdgeToEdgeList?(n="mblEdgeToEdgeList",l=d,u="dojox.mobile.test.doh.EdgeToEdgeDataListTests"):(n="mblRoundRectList",l=s,u="dojox.mobile.test.doh.RoundRectDataListTests");var m={items:[{label:"Apple",moveTo:"dummy"},{label:"Banana",moveTo:"dummy"},{label:"Cherry",moveTo:"dummy"}]};function f(e){return a.byId(e)}function c(e,t){var i=new l({store:e,query:{label:"*"}});return r.assertNotEqual(null,i),o.place(i.domNode,t,"replace"),i.startup(),i}function v(e,t){var o=new l({store:e,query:{label:"*"}},t);return o.startup(),o}function g(e,t){r.assertNotEqual(null,t),r.assertEqual(n,t.domNode.className,t.toString()),r.assertEqual(m.items.length,t.domNode.children.length,"length id="+t.domNode.id);var o=e.newItem({label:"Date",moveTo:"dummy"});r.assertEqual(e._arrayOfTopLevelItems.length,t.domNode.children.length,"new length id="+t.domNode.id),e.deleteItem(o),r.assertEqual(e._arrayOfTopLevelItems.length,t.domNode.children.length,"delete length id="+t.domNode.id)}fruits11=new t({data:e.clone(m)}),fruits12=new t({data:e.clone(m)}),fruits13=new t({data:e.clone(m)}),fruits21=new t({data:e.clone(m)}),fruits22=new t({data:e.clone(m)}),fruits23=new t({data:e.clone(m)}),i(function(){r.register(u,[function(){var e=f("view1-dataList1"),t=c(fruits12,"view1-dataList2"),o=v(fruits13,"view1-dataList3");g(fruits11,e),g(fruits12,t),g(fruits13,o)},function(){var e=f("view2-dataList1"),t=c(fruits22,"view2-dataList2"),o=v(fruits23,"view2-dataList3");a.byId("view1").performTransition("view2",1,"none"),g(fruits21,e),g(fruits22,t),g(fruits23,o)}]),r.run()})});
//# sourceMappingURL=../../../sourcemaps/mobile/tests/doh/DataListTests.js.map
