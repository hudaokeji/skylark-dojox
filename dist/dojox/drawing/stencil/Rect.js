/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(t,e,i,s){var n=e.declare(i,function(t){this.points.length},{type:"dojox.drawing.stencil.Rect",anchorType:"group",baseRender:!0,dataToPoints:function(t){return t=t||this.data,this.points=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],this.points},pointsToData:function(t){var e=(t=t||this.points)[0],i=t[2];return this.data={x:e.x,y:e.y,width:i.x-e.x,height:i.y-e.y,r:this.data.r||0},this.data},_create:function(t,e,i){this.remove(this[t]),this[t]=this.container.createRect(e).setStroke(i).setFill(i.fill),this._setNodeAtts(this[t])},render:function(){this.onBeforeRender(this),this.renderHit&&this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)}});return t.setObject("dojox.drawing.stencil.Rect",n),s.register({name:"dojox.drawing.stencil.Rect"},"stencil"),n});
//# sourceMappingURL=../../sourcemaps/drawing/stencil/Rect.js.map
