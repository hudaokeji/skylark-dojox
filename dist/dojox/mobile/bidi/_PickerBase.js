/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct"],function(e,i){return e(null,{buildRendering:function(){if(this.inherited(arguments),!this.isLeftToRight())for(var e=this.domNode.children.length;e>0;e--)i.place(this.domNode.children[0],this.domNode.children[e-1],"after")}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/_PickerBase.js.map
