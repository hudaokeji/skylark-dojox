/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class"],function(i,t){return i(null,{buildRendering:function(){this.inherited(arguments),!this.isLeftToRight()&&this.rightAlign&&t.add(this.domNode,"mblFormLayoutRightAlignRtl")}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/FormLayout.js.map
