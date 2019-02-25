/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("FlickrSearchSelectionAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){this.controller.parse();var e=dijit.byId("browseFlickrList");e.set("items",[{label:"Interesting Photos",scene:"flickr-image-view",type:"interesting"},{label:"Search for Group",scene:"flickr-search-group",type:"group"},{label:"Search for Text",scene:"flickr-image-thumb-view",type:"text"},{label:"Search Tags",scene:"flickr-image-thumb-view",type:"tag"}]);var t=this;dojo.connect(e,"onSelect",function(e,i,o){t.controller.stageController.pushScene(e.scene,{type:e.type})})},activate:function(){}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/imageControlsApp/app/assistants/flickr-search-selection-assistant.js.map
