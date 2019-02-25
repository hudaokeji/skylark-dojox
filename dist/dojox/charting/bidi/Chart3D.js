/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style","dojo/dom-attr","./_bidiutils"],function(i,r,t,e){return i(null,{direction:"",isMirrored:!1,postscript:function(i,r,e,n,s){var o="ltr";t.has(i,"direction")&&(o=t.get(i,"direction")),this.chartBaseDirection=s||o},generate:function(){return this.inherited(arguments),this.isMirrored=!1,this},applyMirroring:function(i,t,n){return this.isMirrored&&e.reverseMatrix(i,t,n,"rtl"==this.dir),r.set(this.node,"direction","ltr"),this},setDir:function(i){return"rtl"!=i&&"ltr"!=i||(this.dir!=i&&(this.isMirrored=!0),this.dir=i),this},isRightToLeft:function(){return"rtl"==this.dir}})});
//# sourceMappingURL=../../sourcemaps/charting/bidi/Chart3D.js.map
