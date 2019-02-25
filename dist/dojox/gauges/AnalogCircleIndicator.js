/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./AnalogIndicatorBase"],function(o,r){return o("dojox.gauges.AnalogCircleIndicator",[r],{_getShapes:function(o){var r=this.color?this.color:"black",t={color:this.strokeColor?this.strokeColor:r,width:1};return this.color.type&&!this.strokeColor&&(t.color=this.color.colors[0].color),[o.createCircle({cx:0,cy:-this.offset,r:this.length}).setFill(r).setStroke(t)]}})});
//# sourceMappingURL=../sourcemaps/gauges/AnalogCircleIndicator.js.map
