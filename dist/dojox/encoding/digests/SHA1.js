/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(r){var t=8,n=(1<<t)-1;function e(r,t){return r<<t|r>>>32-t}function u(r,t,n,e){return r<20?t&n|~t&e:r<40?t^n^e:r<60?t&n|t&e|n&e:t^n^e}function a(r){return r<20?1518500249:r<40?1859775393:r<60?-1894007588:-899497514}function o(t,n){t[n>>5]|=128<<24-n%32,t[15+(n+64>>9<<4)]=n;for(var o=new Array(80),d=1732584193,s=-271733879,c=-1732584194,f=271733878,h=-1009589776,i=0;i<t.length;i+=16){for(var p=d,v=s,g=c,l=f,y=h,A=0;A<80;A++){o[A]=A<16?t[i+A]:e(o[A-3]^o[A-8]^o[A-14]^o[A-16],1);var W=r.addWords(r.addWords(e(d,5),u(A,s,c,f)),r.addWords(r.addWords(h,o[A]),a(A)));h=f,f=c,c=e(s,30),s=d,d=W}d=r.addWords(d,p),s=r.addWords(s,v),c=r.addWords(c,g),f=r.addWords(f,l),h=r.addWords(h,y)}return[d,s,c,f,h]}function d(r){for(var e=[],u=0,a=r.length*t;u<a;u+=t)e[u>>5]|=(r.charCodeAt(u/t)&n)<<32-t-u%32;return e}function s(r){for(var t="0123456789abcdef",n=[],e=0,u=4*r.length;e<u;e++)n.push(t.charAt(r[e>>2]>>8*(3-e%4)+4&15),t.charAt(r[e>>2]>>8*(3-e%4)&15));return n.join("")}function c(r){for(var e=[],u=0,a=32*r.length;u<a;u+=t)e.push(String.fromCharCode(r[u>>5]>>>32-t-u%32&n));return e.join("")}function f(r){for(var t=[],n=0,e=4*r.length;n<e;n+=3)for(var u=(r[n>>2]>>8*(3-n%4)&255)<<16|(r[n+1>>2]>>8*(3-(n+1)%4)&255)<<8|r[n+2>>2]>>8*(3-(n+2)%4)&255,a=0;a<4;a++)8*n+6*a>32*r.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(u>>6*(3-a)&63));return t.join("")}return r.SHA1=function(n,e){var u=e||r.outputTypes.Base64,a=o(d(n),n.length*t);switch(u){case r.outputTypes.Raw:return a;case r.outputTypes.Hex:return s(a);case r.outputTypes.String:return c(a);default:return f(a)}},r.SHA1._hmac=function(n,e,u){var a=u||r.outputTypes.Base64,h=function(r,n){var e=d(n);e.length>16&&(e=o(e,n.length*t));for(var u=new Array(16),a=new Array(16),s=0;s<16;s++)u[s]=909522486^e[s],a[s]=1549556828^e[s];var c=o(u.concat(d(r)),512+r.length*t);return o(a.concat(c),672)}(n,e);switch(a){case r.outputTypes.Raw:return h;case r.outputTypes.Hex:return s(h);case r.outputTypes.String:return c(h);default:return f(h)}},r.SHA1});
//# sourceMappingURL=../../sourcemaps/encoding/digests/SHA1.js.map
