/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo"],function(e){e.deprecated("dojox.embed.flashVars","Will be removed in 2.0","2.0");var r={serialize:function(r,a){var i=function(e){return"string"==typeof e&&(e=(e=(e=e.replace(/;/g,"_sc_")).replace(/\./g,"_pr_")).replace(/\:/g,"_cl_")),e},n=dojox.embed.flashVars.serialize,o="";if(e.isArray(a)){for(var t=0;t<a.length;t++)o+=n(r+"."+t,i(a[t]))+";";return o.replace(/;{2,}/g,";")}if(e.isObject(a)){for(var l in a)o+=n(r+"."+l,i(a[l]))+";";return o.replace(/;{2,}/g,";")}return r+":"+a}};return e.setObject("dojox.embed.flashVars",r),r});
//# sourceMappingURL=../sourcemaps/embed/flashVars.js.map
