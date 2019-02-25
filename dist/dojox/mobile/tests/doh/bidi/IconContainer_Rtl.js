/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.addOnLoad(function(){doh.register("dojox.mobile.test.doh.IconContainer",[{name:"IconContainer Verification",timeout:4e3,runTest:function(){var e=new doh.Deferred;return setTimeout(e.getTestCallback(function(){var e=dijit.byId("dojox_mobile_IconContainer_0");doh.assertEqual("mblIconContainer mblIconContainerRtl",e.domNode.className)})),e}},{name:"IconItem Verification",timeout:4e3,runTest:function(){var e=new doh.Deferred,o=dijit.byId("dojox_mobile_IconItem_0");return doh.assertEqual("none",o.paneWidget.domNode.style.display),fireOnMouseDown(o.domNode),fireOnMouseUp(o.domNode),o=dijit.byId("dojox_mobile_IconItem_1"),doh.assertEqual("none",o.paneWidget.domNode.style.display),fireOnMouseDown(o.domNode),fireOnMouseUp(o.domNode),setTimeout(e.getTestCallback(function(){verifyIconItem("dojox_mobile_IconItem_0","app1","",/icon3.png/i),verifyIconItem("dojox_mobile_IconItem_1","app2","",/icon3.png/i)}),2e3),e}},{name:"IconContainer set",timeout:4e3,runTest:function(){var e=dijit.byId("dojox_mobile_IconContainer_0");e.set({transition:"slide",pressedIconOpacity:"0.8"}),doh.assertEqual(.8,e.get("pressedIconOpacity")),doh.assertEqual("slide",e.get("transition"))}},{name:"IconItem set",timeout:1e3,runTest:function(){var e=dijit.byId("dojox_mobile_IconItem_1");e.set({icon:"../../images/icon1.png"}),doh.assertEqual("../../images/icon1.png",e.get("icon")),doh.assertTrue(-1!=e.domNode.childNodes[0].childNodes[0].childNodes[0].src.search(/icon1.png/i))}}]),doh.run()});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/bidi/IconContainer_Rtl.js.map
