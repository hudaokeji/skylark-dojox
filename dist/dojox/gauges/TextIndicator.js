/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./_Indicator"],function(i,t){return i("dojox.gauges.TextIndicator",[t],{x:0,y:0,align:"middle",fixedPrecision:!0,precision:0,draw:function(i,t){var e,s=this.value;s<this._gauge.min&&(s=this._gauge.min),s>this._gauge.max&&(s=this._gauge.max);var a=this._gauge?this._gauge._getNumberModule():null;e=a?this.fixedPrecision?a.format(s,{places:this.precision}):a.format(s):this.fixedPrecision?s.toFixed(this.precision):s.toString();var h=this.x?this.x:0,n=this.y?this.y:0,o=this.align?this.align:"middle";this.shape?this.shape.setShape({x:h,y:n,text:e,align:o}):this.shape=i.createText({x:h,y:n,text:e,align:o}),this.shape.setFill(this.color),this.font&&this.shape.setFont(this.font)}})});
//# sourceMappingURL=../sourcemaps/gauges/TextIndicator.js.map
