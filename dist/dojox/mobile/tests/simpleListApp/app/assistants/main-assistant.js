/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("MainAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup"),this.controller.parse(),console.log("In main assistant setup 2");var t=[{label:"Row 1"},{label:"Row 2"}],e=[{label:"Row 3"},{label:"Row 4"},{label:"Row 5"},{label:"Row 6"}],o=dijit.byId("listWidget");o.set("items",t);var i=this;dojo.connect(o,"onSelect",function(t,e,o){try{console.log("selected data item  ",t),i.controller.query(".listInfo")[0].innerHTML="Selected ("+e+") '"+t.label+"'"}catch(t){console.log("caught ",t)}}),this.connect(dijit.byId("btn1"),"onClick",function(){dijit.byId("listWidget").set("items",t)}),this.connect(dijit.byId("btn2"),"onClick",function(){dijit.byId("listWidget").set("items",e)})},activate:function(){console.log("In main assistant activate")}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/simpleListApp/app/assistants/main-assistant.js.map
