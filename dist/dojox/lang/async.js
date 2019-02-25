/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.async"),function(){var n=dojo,c=n.Deferred,a=n.forEach,r=n.some,t=dojox.lang.async,e=Array.prototype.slice,o=Object.prototype.toString;t.seq=function(n){var r="[object Array]"==o.call(n)?n:arguments;return function(n){var t=new c;return a(r,function(n){t.addCallback(n)}),t.callback(n),t}},t.par=function(n){var t="[object Array]"==o.call(n)?n:arguments;return function(n){var e=new Array(t.length),o=function(){a(e,function(n){n instanceof c&&n.fired<0&&n.cancel()})},l=new c(o),u=t.length;return a(t,function(c,a){var r;try{r=c(n)}catch(n){r=n}e[a]=r}),r(e,function(n){return n instanceof Error&&(o(),l.errback(n),!0)})||a(e,function(n,a){n instanceof c?n.addCallbacks(function(n){e[a]=n,--u||l.callback(e)},function(n){o(),l.errback(n)}):--u}),u||l.callback(e),l}},t.any=function(n){var t="[object Array]"==o.call(n)?n:arguments;return function(e){var o=new Array(t.length),l=!0;return cancel=function(n){a(o,function(a,r){r!=n&&a instanceof c&&a.fired<0&&a.cancel()})},n=new c(cancel),a(t,function(n,c){var a;try{a=n(e)}catch(n){a=n}o[c]=a}),r(o,function(a,r){return!(a instanceof c)&&(cancel(r),n.callback(a),!0)})||a(o,function(c,a){c.addBoth(function(c){l&&(l=!1,cancel(a),n.callback(c))})}),n}},t.select=function(n,a){var r="[object Array]"==o.call(a)?a:e.call(arguments,1);return function(a){return(new c).addCallback(n).addCallback(function(n){return"number"==typeof n&&n>=0&&n<r.length?r[n](a):new Error("async.select: out of range")}).callback(a)}},t.ifThen=function(n,a,r){return function(t){return(new c).addCallback(n).addCallback(function(n){return(n?a:r)(t)}).callback(t)}},t.loop=function(n,a){return function(r){var t,e=new c(function(){t.cancel()});function o(n){e.errback(n)}function l(n){return n?t.addCallback(a).addCallback(u):e.callback(n),n}function u(a){(t=(new c).addCallback(n).addCallback(l).addErrback(o)).callback(a)}return u(r),e}}}();
//# sourceMappingURL=../sourcemaps/lang/async.js.map
