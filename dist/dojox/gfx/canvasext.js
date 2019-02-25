/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","./canvas"],function(e,t){var n=e.canvasext={};return t.Surface.extend({getImageData:function(e){return"pendingRender"in this&&this._render(!0),this.rawNode.getContext("2d").getImageData(e.x,e.y,e.width,e.height)},getContext:function(){return this.rawNode.getContext("2d")}}),n});
//# sourceMappingURL=../sourcemaps/gfx/canvasext.js.map
