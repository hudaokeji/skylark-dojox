/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.memoizer"),function(){var e=dojox.lang.aspect,r={around:function(r){var t,n,a=e.getContext(),o=a.joinPoint,i=a.instance;if((t=i.__memoizerCache)&&(t=t[o.targetName])&&r in t)return t[r];var m=e.proceed.apply(null,arguments);return(t=i.__memoizerCache)||(t=i.__memoizerCache={}),(n=t[o.targetName])||(n=t[o.targetName]={}),n[r]=m}};e.memoizer=function(t){return 0==arguments.length?r:function(r){return{around:function(){var t,n,a=e.getContext(),o=a.joinPoint,i=a.instance,m=r.apply(i,arguments);if((t=i.__memoizerCache)&&(t=t[o.targetName])&&m in t)return t[m];var c=e.proceed.apply(null,arguments);return(t=i.__memoizerCache)||(t=i.__memoizerCache={}),(n=t[o.targetName])||(n=t[o.targetName]={}),n[m]=c}}}(t)}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/memoizer.js.map
