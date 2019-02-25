/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare"],function(r){return r(null,{showScrollBar:function(){this.inherited(arguments),!this.isLeftToRight()&&this._scrollBarWrapperV&&(this._scrollBarWrapperV.style.right="auto",this._scrollBarWrapperV.style.left="2px")}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Scrollable.js.map
