/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../../util/oo","../_Plugin"],function(o,r,i){var t=r.declare(i,function(r){r.gap&&(this.major=r.gap),this.majorColor=r.majorColor||this.majorColor,this.minorColor=r.minorColor||this.minorColor,this.setGrid(),o.connect(this.canvas,"setZoom",this,"setZoom")},{type:"dojox.drawing.plugins.drawing.Grid",gap:100,major:100,minor:0,majorColor:"#00ffff",minorColor:"#d7ffff",zoom:1,setZoom:function(o){this.zoom=o,this.setGrid()},setGrid:function(o){var r,i,t,n,s=Math.floor(this.major*this.zoom),e=this.minor?Math.floor(this.minor*this.zoom):s;this.grid&&this.grid.removeShape();var a=this.canvas.underlay.createGroup(),h=this.majorColor,m=this.minorColor,d=function(o,r,i,t,n){a.createLine({x1:o,y1:r,x2:i,y2:t}).setStroke({style:"Solid",width:1,cap:"round",color:n})};for(t=1,n=1e3/e;t<n;t++)d(r=0,i=e*t,2e3,i,i%s?m:h);for(t=1,n=2e3/e;t<n;t++)d(r=e*t,i=0,r,1e3,r%s?m:h);return a.moveToBack(),this.grid=a,this.util.attr(a,"id","grid"),a}});return o.setObject("dojox.drawing.plugins.drawing.Grid",t),t});
//# sourceMappingURL=../../../sourcemaps/drawing/plugins/drawing/Grid.js.map
