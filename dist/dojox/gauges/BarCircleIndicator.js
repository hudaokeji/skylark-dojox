/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/gfx","./BarLineIndicator"],function(t,o,e){return t("dojox.gauges.BarCircleIndicator",[e],{_getShapes:function(t){var e=this.color?this.color:"black",r={color:this.strokeColor?this.strokeColor:e,width:1};this.color.type&&!this.strokeColor&&(r.color=this.color.colors[0].color);var i=this._gauge.dataY+this.offset+this.length/2,s=this.value;s<this._gauge.min&&(s=this._gauge.min),s>this._gauge.max&&(s=this._gauge.max);var a=this._gauge._getPosition(s),h=[t.createCircle({cx:0,cy:i,r:this.length/2}).setFill(e).setStroke(r)];return h[0].setTransform(o.matrix.translate(a,0)),h}})});
//# sourceMappingURL=../sourcemaps/gauges/BarCircleIndicator.js.map
