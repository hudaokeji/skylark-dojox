/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.demos.WidgetRepeater"),dojo.require("dojo.parser"),dojo.require("dijit._Widget"),dojo.require("dijit._Templated"),dojo.require("dijit._Container"),dojo.declare("dojox.wire.demos.WidgetRepeater",[dijit._Widget,dijit._Templated,dijit._Container],{templateString:"<div class='WidgetRepeater' dojoAttachPoint='repeaterNode'></div>",widget:null,repeater:null,createNew:function(e){try{dojo.isString(this.widget)&&(this.widget=dojo.getObject(this.widget)),this.addChild(new this.widget(e)),this.repeaterNode.appendChild(document.createElement("br"))}catch(e){console.debug(e)}}});
//# sourceMappingURL=../../sourcemaps/wire/demos/WidgetRepeater.js.map
