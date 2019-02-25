/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/dom-construct","dojo/ready","dijit/registry","doh/runner","dojox/mobile/EdgeToEdgeList","dojox/mobile/RoundRectList","dojox/mobile/ListItem","dojox/mobile","dojox/mobile/View","dojox/mobile/compat","dojox/mobile/parser"],function(e,o,t,i,d,n,l){var r,s;function a(e){return t.byId(e)}function u(o){var t=new s({select:"single"});i.assertNotEqual(null,t);var d=new l({label:r+" 1",checked:!0});return t.addChild(d),d=new l({label:r+" 2"}),t.addChild(d),e.place(t.domNode,o,"replace"),t.startup(),t}function c(e){var o=new s({select:"single"},e),t=new l({label:r+" 1",checked:!0});return o.addChild(t),t=new l({label:r+" 2"}),o.addChild(t),o.startup(),o}function g(e){i.assertNotEqual(null,e);var o=e.getChildren(),t=o.length;i.assertEqual(2,t,e.toString()),i.assertTrue(o[0].checked,o[0].toString())}IsEdgeToEdgeList?(r="Edge To Edge",s=d):(r="Round Rect",s=n),o(function(){i.register("dojox.mobile.test.doh.EdgeToEdgeListTests",[function(){var e=a("view1-list1"),o=u("view1-list2"),t=c("view1-list3");g(e),g(o),g(t)},function(){var e=a("view2-list1"),o=u("view2-list2"),i=c("view2-list3");t.byId("view1").performTransition("view2",1,"none"),g(e),g(o),g(i)}]),i.run()})});
//# sourceMappingURL=../../../sourcemaps/mobile/tests/doh/ListTests.js.map
