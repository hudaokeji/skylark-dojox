/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class"],function(t,e){return t(null,{buildRendering:function(){if(this.inherited(arguments),!this.isLeftToRight()){if(this.closeButton){var t=Math.round(this.closeButtonNode.offsetHeight/2);this.closeButtonNode.style.left=-t+"px"}this.center&&e.add(this.domNode,"mblProgressIndicatorCenterRtl"),e.add(this.containerNode,"mblProgContainerRtl")}}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/ProgressIndicator.js.map
