/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.zip"),function(){var n=dojox.lang.functional;dojo.mixin(n,{zip:function(){for(var n,o,r=arguments[0].length,i=arguments.length,t=1,a=new Array(r);t<i;r=Math.min(r,arguments[t++].length));for(t=0;t<r;++t){for(o=new Array(i),n=0;n<i;o[n]=arguments[n][t],++n);a[t]=o}return a},unzip:function(o){return n.zip.apply(null,o)}})}();
//# sourceMappingURL=../../sourcemaps/lang/functional/zip.js.map
