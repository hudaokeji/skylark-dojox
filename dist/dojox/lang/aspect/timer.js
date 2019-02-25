/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.timer"),function(){var n=dojox.lang.aspect,o=0,e=function(n){this.name=n||"DojoAopTimer #"+ ++o,this.inCall=0};dojo.extend(e,{before:function(){this.inCall++||console.time(this.name)},after:function(){--this.inCall||console.timeEnd(this.name)}}),n.timer=function(n){return new e(n)}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/timer.js.map
