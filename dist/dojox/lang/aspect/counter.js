/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.counter"),function(){var o=dojox.lang.aspect,n=function(){this.reset()};dojo.extend(n,{before:function(){++this.calls},afterThrowing:function(){++this.errors},reset:function(){this.calls=this.errors=0}}),o.counter=function(){return new n}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/counter.js.map
