/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(e){return dojo.experimental("dojox.timing.doLater"),e.doLater=function(o,r,t){if(o)return!1;var a=e.doLater.caller,n=e.doLater.caller.arguments;return t=t||100,r=r||dojo.global,setTimeout(function(){a.apply(r,n)},t),!0},e.doLater});
//# sourceMappingURL=../sourcemaps/timing/doLater.js.map
