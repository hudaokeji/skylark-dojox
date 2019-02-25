/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.addOnLoad(function(){doh.register("dojox.mobile.test.doh.RoundRectDataList",[{name:"RoundRectDataList Verification",timeout:4e3,runTest:function(){var t=new doh.Deferred;return setTimeout(t.getTestCallback(function(){verifyListItem("dojox_mobile_ListItem_0","Wi-Fi","","mblDomButtonArrow",!0,!0,!1,!1,/i-icon-1.png/i),verifyListItem("dojox_mobile_ListItem_3","General","","mblDomButtonArrow",!0,!0,!1,!1,/i-icon-4.png/i,!0)}),500),t}},{name:"RoundRectDataList Verification2",timeout:1e4,runTest:function(){var t=new doh.Deferred;return setTimeout(t.getTestCallback(function(){add1(),add1(),add1(),verifyListItem("dojox_mobile_ListItem_12","New Item","","mblDomButtonArrow",!1,!0,!1,!1),delete1(),demoWidget=dijit.byId("dojox_mobile_ListItem_12"),doh.assertTrue(!demoWidget),verifyListItem("dojox_mobile_ListItem_11","New Item","","mblDomButtonArrow",!1,!0,!1,!1)}),1500),t}},{name:"RoundRectDataList Verification3",timeout:1e4,runTest:function(){var t=new doh.Deferred;return setTimeout(t.getTestCallback(function(){switchTo(store2),verifyListItem("dojox_mobile_ListItem_13","Apple","","mblDomButtonArrow",!1,!0,!1,!1)}),2500),t}}]),doh.run()});
//# sourceMappingURL=../../../sourcemaps/mobile/tests/doh/RoundRectDataList.js.map
