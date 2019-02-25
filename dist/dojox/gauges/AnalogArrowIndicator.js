/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./AnalogIndicatorBase"],function(t,e){return t("dojox.gauges.AnalogArrowIndicator",[e],{_getShapes:function(t){if(!this._gauge)return null;var e=this.color?this.color:"black",o={color:this.strokeColor?this.strokeColor:e,width:1};this.color.type&&!this.strokeColor&&(o.color=this.color.colors[0].color);var h=Math.floor(this.width/2),i=5*this.width,r=1&this.width,l=[],s=[{x:-h,y:0},{x:-h,y:-this.length+i},{x:-2*h,y:-this.length+i},{x:0,y:-this.length},{x:2*h+r,y:-this.length+i},{x:h+r,y:-this.length+i},{x:h+r,y:0},{x:-h,y:0}];return l[0]=t.createPolyline(s).setStroke(o).setFill(e),l[1]=t.createLine({x1:-h,y1:0,x2:-h,y2:-this.length+i}).setStroke({color:this.highlight}),l[2]=t.createLine({x1:-h-3,y1:-this.length+i,x2:0,y2:-this.length}).setStroke({color:this.highlight}),l[3]=t.createCircle({cx:0,cy:0,r:this.width}).setStroke(o).setFill(e),l}})});
//# sourceMappingURL=../sourcemaps/gauges/AnalogArrowIndicator.js.map
