/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(){return dojo.experimental("dojox.timing.Streamer"),dojox.timing.Streamer=function(t,n,i,o,u){var e=[];this.interval=i||1e3,this.minimumSize=o||10,this.inputFunction=t||function(t){},this.outputFunction=n||function(t){};var r=new dojox.timing.Timer(this.interval);this.setInterval=function(t){this.interval=t,r.setInterval(t)},this.onTick=function(t){},this.start=function(){if("function"!=typeof this.inputFunction||"function"!=typeof this.outputFunction)throw new Error("You cannot start a Streamer without an input and an output function.");r.start()},this.onStart=function(){},this.stop=function(){r.stop()},this.onStop=function(){},r.onTick=this.tick,r.onStart=this.onStart,r.onStop=this.onStop,u&&e.concat(u)}});
//# sourceMappingURL=../sourcemaps/timing/Streamer.js.map
