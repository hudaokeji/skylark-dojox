/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(n,t,e,o,a,r){function i(n,t){var i={node:t.current.node,duration:t.duration,easing:t.easing},d={node:t.next.node,duration:t.duration,easing:t.easing},u=t.rotatorBox,c=n%2,s=c?"left":"top",f=(c?u.w:u.h)*(n<2?-1:1),p={},x={};return a.set(d.node,{display:"",opacity:0}),p[s]={start:0,end:-f},x[s]={start:f,end:0},r.combine([o.animateProperty(e.mixin({properties:p},i)),o.fadeOut(i),o.animateProperty(e.mixin({properties:x},d)),o.fadeIn(d)])}function d(n,t){a.set(n,"zIndex",t)}var u={panFade:function(o){var u=o.wrap,c=o.rotator.panes,s=c.length,f=s,p=o.current.idx,x=o.next.idx,h=Math.abs(x-p),m=Math.abs(s-Math.max(p,x)+Math.min(p,x))%s,g=p<x,b=3,j=[],y=[],l=o.duration;if((!u&&!g||u&&(g&&h>m||!g&&h<m))&&(b=1),o.continuous){o.quick&&(l=Math.round(l/(u?Math.min(m,h):h))),d(c[p].node,f--);for(var v=3==b;;){var M=p;v?++p>=s&&(p=0):--p<0&&(p=s-1);var F=c[M],w=c[p];if(d(w.node,f--),j.push(i(b,e.mixin({easing:function(n){return n}},o,{current:F,next:w,duration:l}))),v&&p==x||!v&&p==x)break;y.push(w.node)}var _=r.chain(j),I=t.connect(_,"onEnd",function(){t.disconnect(I),n.forEach(y,function(n){a.set(n,{display:"none",left:0,opacity:1,top:0,zIndex:0})})});return _}return i(b,o)},panFadeDown:function(n){return i(0,n)},panFadeRight:function(n){return i(1,n)},panFadeUp:function(n){return i(2,n)},panFadeLeft:function(n){return i(3,n)}};return e.mixin(e.getObject("dojox.widget.rotator"),u),u});
//# sourceMappingURL=../../sourcemaps/widget/rotator/PanFade.js.map
