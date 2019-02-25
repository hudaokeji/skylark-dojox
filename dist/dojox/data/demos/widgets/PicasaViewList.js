/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.demos.widgets.PicasaViewList"),dojo.require("dijit._Templated"),dojo.require("dijit._Widget"),dojo.require("dojox.data.demos.widgets.PicasaView"),dojo.declare("dojox.data.demos.widgets.PicasaViewList",[dijit._Widget,dijit._Templated],{templateString:dojo.cache("dojox","data/demos/widgets/templates/PicasaViewList.html"),listNode:null,postCreate:function(){this.fViewWidgets=[]},clearList:function(){for(;this.list.firstChild;)this.list.removeChild(this.list.firstChild);for(var i=0;i<this.fViewWidgets.length;i++)this.fViewWidgets[i].destroy();this.fViewWidgets=[]},addView:function(i){var e=new dojox.data.demos.widgets.PicasaView(i);this.fViewWidgets.push(e),this.list.appendChild(e.domNode)}});
//# sourceMappingURL=../../../sourcemaps/data/demos/widgets/PicasaViewList.js.map
