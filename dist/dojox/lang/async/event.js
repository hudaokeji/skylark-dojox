/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.async.event"),function(){var n=dojo,o=dojox.lang.async.event;o.from=function(o,e){return function(){var c,r=function(){c&&(n.disconnect(c),c=null)},t=new n.Deferred(r);return c=n.connect(o,e,function(n){r(),t.callback(n)}),t}},o.failOn=function(o,e){return function(){var c,r=function(){c&&(n.disconnect(c),c=null)},t=new n.Deferred(r);return c=n.connect(o,e,function(n){r(),t.errback(new Error(n))}),t}}}();
//# sourceMappingURL=../../sourcemaps/lang/async/event.js.map
