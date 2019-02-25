/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("MainAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup"),this.controller.parse();var e=dijit.byId("listWidget");e.set("items",[{label:"Simple ImageView Test",scene:"image-view"},{label:"Flickr ImageView Test",scene:"flickr-image-view"},{label:"Browse Flickr",scene:"flickr-search-selection"}]);var s=this;dojo.connect(e,"onSelect",function(e,i,t){s.controller.stageController.pushScene(e.scene)})},activate:function(){console.log("In main assistant activate")}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/imageControlsApp/app/assistants/main-assistant.js.map
