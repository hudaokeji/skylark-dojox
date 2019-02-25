/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.memoizerGuard"),function(){var e=dojox.lang.aspect;e.memoizerGuard=function(o){return{after:function(){!function(o){var n,t=e.getContext().instance;(n=t.__memoizerCache)&&(0==arguments.length?delete t.__memoizerCache:dojo.isArray(o)?dojo.forEach(o,function(e){delete n[e]}):delete n[o])}(o)}}}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/memoizerGuard.js.map
