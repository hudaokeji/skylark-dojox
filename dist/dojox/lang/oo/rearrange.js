/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.oo.rearrange"),function(){var o=dojo._extraNames,e=o.length,r=Object.prototype.toString,n={};dojox.lang.oo.rearrange=function(t,a){var i,d,l,g;for(i in a)(d=a[i])&&"[object String]"!=r.call(d)||(l=t[i],i in n&&n[i]===l||(delete t[i]||(t[i]=void 0),d&&(t[d]=l)));if(e)for(g=0;g<e;++g)(d=a[i=o[g]])&&"[object String]"!=r.call(d)||(l=t[i],i in n&&n[i]===l||(delete t[i]||(t[i]=void 0),d&&(t[d]=l)));return t}}();
//# sourceMappingURL=../../sourcemaps/lang/oo/rearrange.js.map
