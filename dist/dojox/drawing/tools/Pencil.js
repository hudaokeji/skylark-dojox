/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Path"],function(t,i,s,e){var n=i.declare(e,function(){this._started=!1},{draws:!0,minDist:15,onDown:function(t){this._started=!0;var i={x:t.x,y:t.y};this.points=[i],this.lastPoint=i,this.revertRenderHit=this.renderHit,this.renderHit=!1,this.closePath=!1},onDrag:function(t){if(this._started&&!(this.minDist>this.util.distance(t.x,t.y,this.lastPoint.x,this.lastPoint.y))){var i={x:t.x,y:t.y};this.points.push(i),this.render(),this.checkClosePoint(this.points[0],t),this.lastPoint=i}},onUp:function(t){if(this._started){if(!this.points||this.points.length<2)return this._started=!1,void(this.points=[]);var i=this.getBounds();if(i.w<this.minimumSize&&i.h<this.minimumSize)return this.remove(this.hit,this.shape,this.closeGuide),this._started=!1,void this.setPoints([]);this.checkClosePoint(this.points[0],t,!0)&&(this.closePath=!0),this.renderHit=this.revertRenderHit,this.renderedOnce=!0,this.render(),this.onRender(this)}}});return t.setObject("dojox.drawing.tools.Pencil",n),n.setup={name:"dojox.drawing.tools.Pencil",tooltip:"Pencil Tool",iconClass:"iconLine"},s.register(n.setup,"tool"),n});
//# sourceMappingURL=../../sourcemaps/drawing/tools/Pencil.js.map
