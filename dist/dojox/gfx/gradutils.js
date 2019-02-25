/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","dojo/_base/lang","./matrix","dojo/_base/Color"],function(r,o,t,e){var n=r.gradutils={};return n.getColor=function(r,o){var n;if(r){switch(r.type){case"linear":var l=Math.atan2(r.y2-r.y1,r.x2-r.x1),a=t.rotate(-l),f=t.project(r.x2-r.x1,r.y2-r.y1),i=t.multiplyPoint(f,o),c=t.multiplyPoint(f,r.x1,r.y1),s=t.multiplyPoint(f,r.x2,r.y2),u=t.multiplyPoint(a,s.x-c.x,s.y-c.y).x;n=t.multiplyPoint(a,i.x-c.x,i.y-c.y).x/u;break;case"radial":var y=o.x-r.cx,x=o.y-r.cy;n=Math.sqrt(y*y+x*x)/r.r}return function(r,o){if(r<=0)return o[0].color;var t=o.length;if(r>=1)return o[t-1].color;for(var n=0;n<t;++n){var l=o[n];if(l.offset>=r){if(n){var a=o[n-1];return e.blendColors(new e(a.color),new e(l.color),(r-a.offset)/(l.offset-a.offset))}return l.color}}return o[t-1].color}(n,r.colors)}return new e(r||[0,0,0,0])},n.reverse=function(r){if(r)switch(r.type){case"linear":case"radial":if((r=o.delegate(r)).colors){for(var t,e=r.colors,n=e.length,l=0,a=r.colors=new Array(e.length);l<n;++l)t=e[l],a[l]={offset:1-t.offset,color:t.color};a.sort(function(r,o){return r.offset-o.offset})}}return r},n});
//# sourceMappingURL=../sourcemaps/gfx/gradutils.js.map
