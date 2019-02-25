/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.profiler"),function(){var o=dojox.lang.aspect,n=function(o){this.args=o?[o]:[],this.inCall=0};dojo.extend(n,{before:function(){this.inCall++||console.profile.apply(console,this.args)},after:function(){--this.inCall||console.profileEnd()}}),o.profiler=function(o){return new n(o)}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/profiler.js.map
