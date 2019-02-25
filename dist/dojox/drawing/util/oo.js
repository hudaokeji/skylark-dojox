/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define([],function(){return{declare:function(){var t,o,r=0,e=arguments;for(var n in e.length<2&&console.error("drawing.util.oo.declare; not enough arguments"),2==e.length?(t=e[0],o=e[1]):(o=(e=Array.prototype.slice.call(arguments)).pop(),t=e.pop(),r=1),o)t.prototype[n]=o[n];return r&&(e.unshift(t),t=this.extend.apply(this,e)),t},extend:function(){var t=arguments,o=t[0];t.length<2&&console.error("drawing.util.oo.extend; not enough arguments");for(var r=function(){for(var r=1;r<t.length;r++)t[r].prototype.constructor.apply(this,arguments);o.prototype.constructor.apply(this,arguments)},e=1;e<t.length;e++)for(var n in t[e].prototype)r.prototype[n]=t[e].prototype[n];for(n in o.prototype)r.prototype[n]=o.prototype[n];return r}}});
//# sourceMappingURL=../../sourcemaps/drawing/util/oo.js.map
