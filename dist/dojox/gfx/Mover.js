/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/on","dojo/touch","dojo/_base/event"],function(t,o,s,e,i,h){return s("dojox.gfx.Mover",null,{constructor:function(o,s,n){this.shape=o,this.lastX=s.clientX,this.lastY=s.clientY;var a=this.host=n,r=document,v=e(r,i.move,t.hitch(this,"onFirstMove"));this.events=[e(r,i.move,t.hitch(this,"onMouseMove")),e(r,i.release,t.hitch(this,"destroy")),e(r,"dragstart",t.hitch(h,"stop")),e(r,"selectstart",t.hitch(h,"stop")),v],a&&a.onMoveStart&&a.onMoveStart(this)},onMouseMove:function(t){var o=t.clientX,s=t.clientY;this.host.onMove(this,{dx:o-this.lastX,dy:s-this.lastY}),this.lastX=o,this.lastY=s,h.stop(t)},onFirstMove:function(){this.host.onFirstMove(this),this.events.pop().remove()},destroy:function(){o.forEach(this.events,function(t){t.remove()});var t=this.host;t&&t.onMoveStop&&t.onMoveStop(this),this.events=this.shape=null}})});
//# sourceMappingURL=../sourcemaps/gfx/Mover.js.map
