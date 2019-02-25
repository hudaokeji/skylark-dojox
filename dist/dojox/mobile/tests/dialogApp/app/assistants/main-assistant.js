/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("MainAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup"),this.controller.parse();var o=this.controller.query(".appInfoArea")[0];function t(t){o.innerHTML="Value selected: "+t}o.innerHTML="This app has the following info: \n"+dojo.toJson(dojox.mobile.app.info,!0);var e=this.controller;console.log("btn1 = ",dijit.byId("btn1")),dojo.connect(dijit.byId("btn1"),"onClick",function(){console.log("Clicked btn1"),e.showAlertDialog({title:"First Dialog",text:"This is a simple text message",onChoose:t,buttons:[{label:"Tap Me!",value:"tapped",class:"mblBlueButton"}]})}),dojo.connect(dijit.byId("btn2"),"onClick",function(){console.log("Clicked btn2"),e.showAlertDialog({title:"Second Dialog",text:"These two buttons return different values, 'value one' and 'value two'",onChoose:t,buttons:[{label:"Im Am Button 1",value:"value one",class:"mblBlueButton"},{label:"Im Am Button 2",value:"value two",class:"mblBlueButton"}]})})},activate:function(){console.log("In main assistant activate")}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/dialogApp/app/assistants/main-assistant.js.map
