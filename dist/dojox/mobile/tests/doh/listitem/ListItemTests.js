/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var WIDGET_CLASSNAME1="mblListItem",WIDGET_ANCHOR_CLASSNAME1="mblListItemAnchor",WIDGET_ANCHOR_CLASSNAME2="mblListItemAnchorNoIcon",WIDGET_ICON_CLASSNAME1="mblListItemIcon",WIDGET_RIGHTICON_CLASSNAME1="mblListItemRightIcon",WIDGET_DOMBUTTON_ARROW="mblDomButtonArrow",WIDGET_DOMBUTTON_BLUEPLUS="mblDomButtonBluePlus",WIDGET_DOMBUTTON_CHECKBOX_ON="mblDomButtonCheckboxOn";require(["dojo/_base/connect","dojo/dom-class","dojo/ready","dijit/registry","dojo/string","doh/runner","dojox/mobile/ListItem","dojox/mobile/RoundRectList","dojox/mobile/EdgeToEdgeList","dojox/mobile","dojox/mobile/View","dojox/mobile/compat","dojox/mobile/parser"],function(e,i,t,o,n,d,r){function m(e,i){var t;return parentWidget=o.byId(e),d.assertNotEqual(null,parentWidget,"No parentWidget id="+e),t=new r({id:i[0],icon:"../../images/i-icon-1.png",rightText:"Off",moveTo:"bar",label:"u1space"}),parentWidget.addChild(t),t=new r({id:i[1],label:"u2space"}),parentWidget.addChild(t),t=new r({id:i[2],rightIcon:"mblDomButtonBluePlus",label:"Wi-Fi"}),parentWidget.addChild(t),t=new r({id:i[3],rightIcon:"mblDomButtonCheckboxOn",label:"VPN"}),parentWidget.addChild(t),t=new r({id:i[4],variableHeight:"true",style:"font-size:10px",label:'<div>1. <a href="#" class="lnk">Dojo: Traditional Karate-do Spirit</a><br>Sarah Connor Hardcover<br>Eligible for FREE Super Saver Shipping<br><font color="red">$14.50 (50%)</font> In Stock<br># (531)</div>'}),parentWidget.addChild(t),parentWidget}function a(e){var i;return(i=new r({icon:"../../images/i-icon-1.png",rightText:"Off",moveTo:"bar"},e[0])).startup(),(i=new r({},e[1])).startup(),(i=new r({rightIcon:"mblDomButtonBluePlus"},e[2])).startup(),(i=new r({rightIcon:"mblDomButtonCheckboxOn"},e[3])).startup(),(i=new r({variableHeight:"true"},e[4])).startup(),i}function s(e){c(e[0],!1,WIDGET_DOMBUTTON_ARROW,"","Off","u1space"),c(e[1],!0,"","","","u2space"),c(e[2],!0,WIDGET_DOMBUTTON_BLUEPLUS,"","","Wi-Fi"),c(e[3],!0,WIDGET_DOMBUTTON_CHECKBOX_ON,"","","VPN"),c(e[4],!0,"","","","")}function c(e,t,r,m,a,s){var c=o.byId(e);if(doh.assertNotEqual(null,c,"ListItem: Did not instantiate."),d.assertTrue(i.contains(c.domNode,WIDGET_CLASSNAME1),WIDGET_CLASSNAME1+" id="+c.domNode.id),t||(d.assertTrue(c.iconNode,"iconNode: There is no iconNode. id="+c.domNode.id),d.assertTrue(i.contains(c.iconNode,WIDGET_ICON_CLASSNAME1),WIDGET_ICON_CLASSNAME1+" id="+c.domNode.id),6!=dojo.isIE&&d.assertTrue(!!c.iconNode.src,"iconNode: There is no src in iconNode. id="+c.domNode.id)),r&&(d.assertTrue(c.rightIconNode,"rightIconNode: There is no rightIconNode. id="+c.domNode.id),d.assertEqual(WIDGET_RIGHTICON_CLASSNAME1,c.rightIconNode.className),d.assertTrue(i.contains(c.rightIconNode.childNodes[0],r),r+" id="+c.domNode.id)),m&&(d.assertTrue(c.rightIconNode2,"rightIconNode2: There is no rightIconNode2. id="+c.domNode.id),d.assertTrue(i.contains(c.rightIconNode2,m),m+" id="+c.domNode.id)),a&&(d.assertTrue(c.rightTextNode,"rightTextNode: There is no rightTextNode. id="+c.domNode.id),d.assertEqual(a,c.rightTextNode.innerHTML)),s){d.assertTrue(c.labelNode,"box: There is no box. id="+c.domNode.id);var l=n.trim(c.labelNode.innerHTML.replace(/\r\n/g,""));d.assertEqual(s,l,"id="+c.domNode.id)}}t(function(){d.register("dojox.mobile.test.doh.Heading",[{name:"ListItem Verification1",timeout:4e3,runTest:function(){m("view1-RoundRectList2",["view1-item6","view1-item7","view1-item8","view1-item9","view1-item10"]),a(["view1-item11","view1-item12","view1-item13","view1-item14","view1-item15"]),s(["view1-item1","view1-item2","view1-item3","view1-item4","view1-item5"]),s(["view1-item6","view1-item7","view1-item8","view1-item9","view1-item10"]),s(["view1-item11","view1-item12","view1-item13","view1-item14","view1-item15"])}},{name:"ListItem Verification2",timeout:4e3,runTest:function(){m("view2-RoundRectList2",["view2-item6","view2-item7","view2-item8","view2-item9","view2-item10"]),a(["view2-item11","view2-item12","view2-item13","view2-item14","view2-item15"]);var i=new d.Deferred,t=e.subscribe("/dojox/mobile/afterTransitionIn",i.getTestCallback(function(i){"view2"==i.id&&e.unsubscribe(t),s(["view2-item1","view2-item2","view2-item3","view2-item4","view2-item5"]),s(["view2-item6","view2-item7","view2-item8","view2-item9","view2-item10"]),s(["view2-item11","view2-item12","view2-item13","view2-item14","view2-item15"])}));return o.byId("view1").performTransition("view2",1,"none"),i}}]),d.run()})});
//# sourceMappingURL=../../../../sourcemaps/mobile/tests/doh/listitem/ListItemTests.js.map
