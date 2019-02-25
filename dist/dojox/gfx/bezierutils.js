/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(n){var t=n.bezierutils={},r=(t.tAtLength=function(n,t){var r=0,i=6==n.length,a=0,o=0,c=i?u:f,h=function(u,f){for(var l=0,v=0;v<u.length-2;v+=2)l+=e(u[v],u[v+1],u[v+2],u[v+3]);if(l-(i?e(n[0],n[1],n[4],n[5]):e(n[0],n[1],n[6],n[7]))>f||a+l>t+f){++o;var g=c(u,.5);if(h(g[0],f),Math.abs(a-t)<=f)return;h(g[1],f)}else a+=l,r+=1/(1<<o)};return t&&h(n,.5),r},t.computeLength=function(n){for(var t=6==n.length,f=0,a=0;a<n.length-2;a+=2)f+=e(n[a],n[a+1],n[a+2],n[a+3]);if(f-(t?e(n[0],n[1],n[4],n[5]):e(n[0],n[1],n[6],n[7]))>.1){var o=t?u(n,.5):i(n,.5),c=r(o[0],t);return c+=r(o[1],t)}return f}),e=t.distance=function(n,t,r,e){return Math.sqrt((r-n)*(r-n)+(e-t)*(e-t))},u=function(n,t){var r=1-t,e=r*r,u=t*t,i=n[0],f=n[1],a=n[2],o=n[3],c=n[4],h=n[5],l=e*i+2*r*t*a+u*c,v=e*f+2*r*t*o+u*h;return[[i,f,r*i+t*a,r*f+t*o,l,v],[l,v,r*a+t*c,r*o+t*h,c,h]]},i=function(n,t){var r=1-t,e=r*r,u=e*r,i=t*t,f=i*t,a=n[0],o=n[1],c=n[2],h=n[3],l=n[4],v=n[5],g=n[6],s=n[7],b=u*a+3*e*t*c+3*r*i*l+f*g,d=u*o+3*e*t*h+3*r*i*v+f*s;return[[a,o,r*a+t*c,r*o+t*h,e*a+2*r*t*c+i*l,e*o+2*r*t*h+i*v,b,d],[b,d,e*c+2*r*t*l+i*g,e*h+2*r*t*v+i*s,r*l+t*g,r*v+t*s,g,s]]},f=t.splitBezierAtT=function(n,t){return 6==n.length?u(n,t):i(n,t)};return t});
//# sourceMappingURL=../sourcemaps/gfx/bezierutils.js.map
