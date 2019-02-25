/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dojo/dom-class","dojo/dom-style"],function(o,t,e,n){return o(null,{buildRendering:function(){this.inherited(arguments),this.isLeftToRight()||(this.containerNode.style.left="auto",n.set(this.containerNode,{position:"absolute",top:0,right:0}),e.remove(this.previousButton,"mblComboBoxMenuItem"),e.add(this.previousButton,"mblComboBoxMenuItemRtl"),e.remove(this.nextButton,"mblComboBoxMenuItem"),e.add(this.nextButton,"mblComboBoxMenuItemRtl"))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/_ComboBoxMenu.js.map
