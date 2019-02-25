/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/fx","dojo/fx","./_base","dojo/_base/array","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/_base/connect"],function(e,o,t,n,r,d,a,i,s,l){e.experimental("dojox.fx.style");var c=function(e){return d.map(r._allowedProperties,function(o){return e[o]})},m=function(o,t,n){o=a.byId(o);var s=i.getComputedStyle(o),l=c(s);e[n?"addClass":"removeClass"](o,t);var m=c(s);e[n?"removeClass":"addClass"](o,t);var p={},f=0;return d.forEach(r._allowedProperties,function(e){l[f]!=m[f]&&(p[e]=parseInt(m[f])),f++}),p},p={addClass:function(e,n,r){e=a.byId(e);var d,i=(d=e,function(){s.add(d,n),d.style.cssText=p}),c=m(e,n,!0),p=e.style.cssText,f=t.animateProperty(o.mixin({node:e,properties:c},r));return l.connect(f,"onEnd",f,i),f},removeClass:function(e,n,r){e=a.byId(e);var d,i=(d=e,function(){s.remove(d,n),d.style.cssText=p}),c=m(e,n),p=e.style.cssText,f=t.animateProperty(o.mixin({node:e,properties:c},r));return l.connect(f,"onEnd",f,i),f},toggleClass:function(e,o,t,n){return void 0===t&&(t=!s.contains(e,o)),r[t?"addClass":"removeClass"](e,o,n)},_allowedProperties:["width","height","left","top","backgroundColor","color","borderBottomWidth","borderTopWidth","borderLeftWidth","borderRightWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginTop","marginRight","marginBottom","lineHeight","letterSpacing","fontSize"]};return o.mixin(r,p),p});
//# sourceMappingURL=../sourcemaps/fx/style.js.map
