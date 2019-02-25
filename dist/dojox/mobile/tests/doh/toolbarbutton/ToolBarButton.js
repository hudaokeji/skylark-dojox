/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.addOnLoad(function(){doh.register("dojox.mobile.test.ToolBarButton",[function(){var o=dijit.byId("btn1");doh.assertEqual("Edit",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_0"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhitePlus mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_1"),doh.assertEqual("Edit",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_2"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhitePlus mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_3"),doh.assertEqual("Speaker",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_4"),doh.assertEqual("Done",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_5"),doh.assertEqual("Update All",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_6"),doh.assertEqual("mblToolBarButton mblToolBarButtonHasLeftArrow",o.domNode.className,"id= "+o.domNode.id),doh.assertEqual("Bookmarks",o.labelNode.innerHTML),o=dijit.byId("dojox_mobile_ToolBarButton_7"),doh.assertEqual("Done",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_8"),doh.assertEqual("Done",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_9"),doh.assertEqual("New Folder",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_10"),doh.assertEqual("New",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_11"),doh.assertEqual("Toggle",o.labelNode.innerHTML,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_12"),dojo.isIE||doh.assertTrue(-1!=o.iconNode.src.search(/a-icon-12.png/),"a-icon-12.png","id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_13"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblSpriteIcon",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),verifyRect(o.iconNode.childNodes[0],"29px","29px","58px","0px"),doh.assertEqual("-29px",o.iconNode.childNodes[0].style.top,"id= "+o.domNode.id),doh.assertEqual("0px",o.iconNode.childNodes[0].style.left,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_14"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhitePlus mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_15"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhiteSearch mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_16"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhitePlus mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_17"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertEqual("mblImageIcon",o.iconNode.className,"id= "+o.domNode.id),dojo.isIE||doh.assertTrue(-1!=o.iconNode.src.search(/tab-icon-15h.png/),"tab-icon-15h.png"),o=dijit.byId("dojox_mobile_ToolBarButton_18"),doh.assertEqual("mblToolBarButton mblToolBarButtonHasLeftArrow",o.domNode.className,"id= "+o.domNode.id),doh.assertEqual("Top",o.labelNode.innerHTML),o=dijit.byId("dojox_mobile_ToolBarButton_19"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhiteSearch mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_20"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhiteUpArrow mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_21"),doh.assertTrue(o.iconNode,"there is no iconNode. id= "+o.domNode.id),doh.assertTrue(o.iconNode.childNodes,"there is no iconNode.childNodes. id= "+o.domNode.id),doh.assertEqual("mblDomButtonWhiteDownArrow mblDomButton",o.iconNode.childNodes[0].className,"id= "+o.domNode.id),o=dijit.byId("dojox_mobile_ToolBarButton_22"),doh.assertTrue(dojo.style(o.bodyNode,"height")>0,"the height of button's body should be larger than 0! (left arrow) id= "+o.domNode.id+" actual height: "+dojo.style(o.bodyNode,"height")),o=dijit.byId("dojox_mobile_ToolBarButton_23"),doh.assertTrue(dojo.style(o.bodyNode,"height")>0,"the height of button's body should be larger than 0! (right arrow) id= "+o.domNode.id+" actual height: "+dojo.style(o.bodyNode,"height")),o=dijit.byId("dojox_mobile_ToolBarButton_24");var d=dojo.getMarginBox(o.bodyNode),e=dojo.getMarginBox(o.arrowNode);doh.assertTrue(d.l>e.l-(dojo.isFF?2:0),"The body should not cover the arrow! (left arrow) id= "+o.domNode.id+" bodyBox.l: "+d.l+" arrowBox.l: "+e.l),o=dijit.byId("dojox_mobile_ToolBarButton_25"),d=dojo.getMarginBox(o.bodyNode),e=dojo.getMarginBox(o.arrowNode),doh.assertTrue(e.l+e.w>d.l+d.w,"The body should not cover the arrow! (right arrow) id= "+o.domNode.id)},function(){demoWidget=dijit.byId("dojox_mobile_ToolBarButton_4"),demoWidget.set({label:"New Value"}),doh.assertEqual("New Value",demoWidget.labelNode.innerHTML,"id= "+demoWidget.domNode.id),demoWidget=dijit.byId("dojox_mobile_ToolBarButton_2"),demoWidget.set({icon:"mblDomButtonBlueCirclePlus"}),doh.assertTrue(demoWidget.iconNode,"there is no iconNode. id= "+demoWidget.domNode.id),doh.assertTrue(demoWidget.iconNode.childNodes,"there is no iconNode.childNodes. id= "+demoWidget.domNode.id),doh.assertEqual("mblDomButtonBlueCirclePlus mblDomButton",demoWidget.iconNode.childNodes[0].className,"id= "+demoWidget.domNode.id)}]),doh.run()});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/toolbarbutton/ToolBarButton.js.map
