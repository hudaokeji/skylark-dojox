/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./AnalogIndicatorBase"],function(t,o){return t("dojox.gauges.AnalogNeedleIndicator",[o],{_getShapes:function(t){if(!this._gauge)return null;var o=Math.floor(this.width/2),e=[],r=this.color?this.color:"black",s={color:this.strokeColor?this.strokeColor:r,width:this.strokeWidth?this.strokeWidth:1};r.type&&!this.strokeColor&&(s.color=r.colors[0].color);var i=Math.sqrt(2)*o;return e[0]=t.createPath().setStroke(s).setFill(r).moveTo(i,-i).arcTo(2*o,2*o,0,0,0,-i,-i).lineTo(0,-this.length).closePath(),e[1]=t.createCircle({cx:0,cy:0,r:this.width}).setStroke(s).setFill(r),e}})});
//# sourceMappingURL=../sourcemaps/gauges/AnalogNeedleIndicator.js.map
