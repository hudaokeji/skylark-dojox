/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("MainAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup"),this.controller.query(".appInfoArea")[0].innerHTML="This app has the following info: \n"+dojo.toJson(dojox.mobile.app.info,!0).split("\t").join("  "),this.controller.parse();var o=this,e=dijit.byId("secondSceneLauncher");console.log("launcher = ",e," node = ",this.domNode),this.connect(e.domNode,"onclick",function(){console.log("launching the second scene"),o.controller.stageController.pushScene("second","Came from Main Scene")})},activate:function(o){console.log("In main assistant activate");var e=this.controller.query(".inputData")[0];e.innerHTML=o?"Scene got the data: "+o:"Scene did not receive data"}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/multiSceneApp/app/assistants/main-assistant.js.map
