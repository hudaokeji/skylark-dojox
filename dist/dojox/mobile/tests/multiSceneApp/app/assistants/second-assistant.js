/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("SecondAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In second assistant setup"),this.controller.parse();var t=this;this.connect(dijit.byId("btn1"),"onClick",function(){t.controller.stageController.popScene("Button 1")}),this.connect(dijit.byId("btn2"),"onClick",function(){t.controller.stageController.pushScene("third","Came from second scene")})},activate:function(t){console.log("In main assistant activate");var e=this.controller.query(".inputData")[0];e.innerHTML=t?"Scene got the data: "+t:"Scene did not receive data"}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/multiSceneApp/app/assistants/second-assistant.js.map
