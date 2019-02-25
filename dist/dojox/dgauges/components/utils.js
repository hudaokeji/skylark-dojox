/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/Color"],function(t,i){var r={};return t.mixin(r,{brightness:function(i,r){var o=t.mixin(null,i);return o.r=Math.max(Math.min(o.r+r,255),0),o.g=Math.max(Math.min(o.g+r,255),0),o.b=Math.max(Math.min(o.b+r,255),0),o},createGradient:function(t){for(var i,r={colors:[]},o=0;o<t.length;o++)o%2==0?i={offset:t[o]}:(i.color=t[o],r.colors.push(i));return r},_setter:function(t,i,r){for(var o=0;o<i.length;o++)t[i[o]]=r[o]},genericCircularGauge:function(t,o,e,n,a,c,l,s,u,h,g){s||(s="clockwise"),u||(u={family:"Helvetica",style:"normal",size:"10pt",color:"#555555"}),h||(h="inside"),g||(g=function(t,o,e){var n,a,c=o.tickStroke;if(c){n={color:c.color?c.color:"#000000",width:c.width?c.width:.5};var l=new i(c.color).toRgb();a={color:c.color?r.brightness({r:l[0],g:l[1],b:l[2]},51):"#000000",width:c.width?.6*c.width:.3}}return t.createLine({x1:e.isMinor?2:0,y1:0,x2:e.isMinor?8:10,y2:0}).setStroke(e.isMinor?a:n)}),this._setter(t,["originX","originY","radius","startAngle","endAngle","orientation","font","labelPosition","tickShapeFunc"],[e,n,a,c,l,s,u,h,g]),o.set("interactionArea","gauge"),o.set("indicatorShapeFunc",function(i,r){return i.createPolyline([0,-5,r.scale.radius-6,0,0,5,0,-5]).setStroke({color:"#333333",width:.25}).setFill(t._gauge.indicatorColor)})}}),r});
//# sourceMappingURL=../../sourcemaps/dgauges/components/utils.js.map
