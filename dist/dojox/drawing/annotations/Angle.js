/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../util/oo","../util/positioning"],function(t,e,i){return e.declare(function(t){this.stencil=t.stencil,this.util=t.stencil.util,this.mouse=t.stencil.mouse,this.stencil.connectMult([["onDrag",this,"showAngle"],["onUp",this,"hideAngle"],["onTransformBegin",this,"showAngle"],["onTransform",this,"showAngle"],["onTransformEnd",this,"hideAngle"]])},{type:"dojox.drawing.tools.custom",angle:0,showAngle:function(){if(this.stencil.selected||!this.stencil.created)if(this.stencil.getRadius()<this.stencil.minimumSize)this.hideAngle();else{var e=this.getAngleNode(),s=this.stencil.pointsToData(),n=i.angle({x:s.x1,y:s.y1},{x:s.x2,y:s.y2}),o=this.mouse.scrollOffset(),l=this.stencil.getTransform(),h=l.dx/this.mouse.zoom,a=l.dy/this.mouse.zoom;n.x/=this.mouse.zoom,n.y/=this.mouse.zoom;var c=this.stencil._offX+n.x-o.left+h,d=this.stencil._offY+n.y-o.top+a;t.style(e,{left:c+"px",top:d+"px",align:n.align});var g=this.stencil.getAngle();this.stencil.style.zAxis&&"vector"==this.stencil.shortType?e.innerHTML=this.stencil.data.cosphi>0?"out of":"into":"line"==this.stencil.shortType?e.innerHTML=this.stencil.style.zAxis?"out of":Math.ceil(g%180):e.innerHTML=Math.ceil(g)}},getAngleNode:function(){return this._angleNode||(this._angleNode=t.create("span",null,t.body()),t.addClass(this._angleNode,"textAnnotation"),t.style(this._angleNode,"opacity",1)),this._angleNode},hideAngle:function(){this._angleNode&&t.style(this._angleNode,"opacity")>.9&&(t.fadeOut({node:this._angleNode,duration:500,onEnd:function(e){t.destroy(e)}}).play(),this._angleNode=null)}})});
//# sourceMappingURL=../../sourcemaps/drawing/annotations/Angle.js.map
