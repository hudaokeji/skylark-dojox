/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("ThirdAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In third assistant setup"),this.controller.parse();var t=this;this.connect(dijit.byId("btn3"),"onClick",function(){t.controller.stageController.popScenesTo("main","From Third Scene")}),this.connect(dijit.byId("btn4"),"onClick",function(){t.controller.stageController.popScene("From Third Scene")})},activate:function(t){console.log("In third assistant activate");var e=this.controller.query(".inputData")[0];e.innerHTML=t?"Scene got the data: "+t:"Scene did not receive data"}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/multiSceneApp/app/assistants/third-assistant.js.map
