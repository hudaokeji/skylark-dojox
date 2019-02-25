/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.mobile.app._Widget"),dojo.experimental("dojox.mobile.app._Widget"),dojo.require("dijit._WidgetBase"),dojo.declare("dojox.mobile.app._Widget",dijit._WidgetBase,{getScroll:function(){return{x:dojo.global.scrollX,y:dojo.global.scrollY}},connect:function(o,e,i){return"dblclick"!=e.toLowerCase()&&"ondblclick"!=e.toLowerCase()||!dojo.global.Mojo?this.inherited(arguments):this.connect(o,Mojo.Event.tap,i)}});
//# sourceMappingURL=../../sourcemaps/mobile/app/_Widget.js.map
