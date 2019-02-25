/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.async.timeout"),function(){var n=dojo,o=dojox.lang.async.timeout;o.from=function(o){return function(){var e,t=function(){e&&(clearTimeout(e),e=null)},r=new n.Deferred(t);return e=setTimeout(function(){t(),r.callback(o)},o),r}},o.failOn=function(o){return function(){var e,t=function(){e&&(clearTimeout(e),e=null)},r=new n.Deferred(t);return e=setTimeout(function(){t(),r.errback(o)},o),r}}}();
//# sourceMappingURL=../../sourcemaps/lang/async/timeout.js.map
