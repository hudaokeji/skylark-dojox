/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style"],function(n,t,e){var o=2,r=3,i=0,u=1;function a(n,t,a,c,d){e.set(n,"clip",null==t?"auto":"rect("+function(n,t,e,a){var c=[0,t,0,0];return n==r?c=[0,t,e,t]:n==i?c=[e,t,e,0]:n==u&&(c=[0,0,e,0]),null!=a&&(c[n]=n==o||n==u?a:(n%2?t:e)-a),c}(t,a,c,d).join("px,")+"px)")}function c(o,r){var i=r.next.node,u=r.rotatorBox.w,c=r.rotatorBox.h;return e.set(i,{display:"",zIndex:(e.get(r.current.node,"zIndex")||1)+1}),a(i,o,u,c),new t.Animation(n.mixin({node:i,curve:[0,o%2?u:c],onAnimate:function(n){a(i,o,u,c,parseInt(n))}},r))}var exports={wipeDown:function(n){return c(o,n)},wipeRight:function(n){return c(r,n)},wipeUp:function(n){return c(i,n)},wipeLeft:function(n){return c(u,n)}};return n.mixin(n.getObject("dojox.widget.rotator"),exports),exports});
//# sourceMappingURL=../../sourcemaps/widget/rotator/Wipe.js.map
