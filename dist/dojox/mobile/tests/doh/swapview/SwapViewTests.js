/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/connect","dojo/dom-construct","dojo/dom-class","dojo/ready","dijit/registry","doh/runner","dojox/mobile/SwapView","dojox/mobile","dojox/mobile/compat","dojox/mobile/parser"],function(e,o,t,a,n,r,i){var d="mblView",s="mblSwapView";function u(e,t,a,n){var i=new dojox.mobile.SwapView({id:t,selected:a,innerHTML:n});return r.assertNotEqual(null,i),o.place(i.domNode,e,"replace"),i.startup(),i}function l(e,o){var t=new i({selected:o},e);return t.startup(),t}function c(e,o){r.assertNotEqual(null,e,"IconContainer: Did not instantiate."),r.assertTrue(t.contains(e.domNode,d),d),r.assertTrue(t.contains(e.domNode,s),s),r.assertEqual(o?"":"none",e.domNode.style.display,"widget.domNode.style.display")}a(function(){1===WIDGET_PROGRAMMATICALLY?(u("fooPlace","foo",!0,"<h1>SwapView 1</h1>"),u("barPlace","bar",!1,"<h1>SwapView 2</h1>")):2===WIDGET_PROGRAMMATICALLY&&(l("foo",!0),l("bar",!1)),r.register("dojox.mobile.test.doh.SwapViewTests",[{name:"SwapView Verification1",timeout:4e3,runTest:function(){n.byId("foo"),n.byId("bar");var e=new r.Deferred;return setTimeout(e.getTestCallback(function(){var e=n.byId("foo"),o=n.byId("bar");c(e,!0),c(o,!1),e.goTo(1)}),1e3),e}},{name:"SwapView Verification2",timeout:4e3,runTest:function(){var e=new r.Deferred;return setTimeout(e.getTestCallback(function(){var e=n.byId("foo"),o=n.byId("bar");c(e,!1),c(o,!0)}),1e3),e}}]),r.run()})});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/swapview/SwapViewTests.js.map
