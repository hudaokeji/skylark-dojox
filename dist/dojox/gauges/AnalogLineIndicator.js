/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./AnalogIndicatorBase"],function(e,t){return e("dojox.gauges.AnalogLineIndicator",[t],{_getShapes:function(e){var t=this.direction,i=this.length;return"inside"==t&&(i=-i),[e.createLine({x1:0,y1:-this.offset,x2:0,y2:-i-this.offset}).setStroke({color:this.color,width:this.width})]}})});
//# sourceMappingURL=../sourcemaps/gauges/AnalogLineIndicator.js.map
