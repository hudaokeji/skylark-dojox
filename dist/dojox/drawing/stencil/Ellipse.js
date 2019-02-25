/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(t,e,i,s){var r=e.declare(i,function(t){},{type:"dojox.drawing.stencil.Ellipse",anchorType:"group",baseRender:!0,dataToPoints:function(t){var e=(t=t||this.data).cx-t.rx,i=t.cy-t.ry,s=2*t.rx,r=2*t.ry;return this.points=[{x:e,y:i},{x:e+s,y:i},{x:e+s,y:i+r},{x:e,y:i+r}],this.points},pointsToData:function(t){var e=(t=t||this.points)[0],i=t[2];return this.data={cx:e.x+(i.x-e.x)/2,cy:e.y+(i.y-e.y)/2,rx:.5*(i.x-e.x),ry:.5*(i.y-e.y)},this.data},_create:function(t,e,i){this.remove(this[t]),this[t]=this.container.createEllipse(e).setStroke(i).setFill(i.fill),this._setNodeAtts(this[t])},render:function(){this.onBeforeRender(this),this.renderHit&&this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)}});return t.setObject("dojox.drawing.stencil.Ellipse",r),s.register({name:"dojox.drawing.stencil.Ellipse"},"stencil"),r});
//# sourceMappingURL=../../sourcemaps/drawing/stencil/Ellipse.js.map
