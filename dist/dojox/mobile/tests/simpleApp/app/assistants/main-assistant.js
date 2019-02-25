/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("MainAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup"),this.controller.query(".appInfoArea")[0].innerHTML="This app has the following info: \n"+dojo.toJson(dojox.mobile.app.info,!0)},activate:function(){console.log("In main assistant activate")}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/simpleApp/app/assistants/main-assistant.js.map
