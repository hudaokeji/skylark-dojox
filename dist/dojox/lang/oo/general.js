/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.oo.general"),dojo.require("dojox.lang.oo.Decorator"),function(){var n=dojox.lang.oo,o=n.makeDecorator,t=n.general,r=dojo.isFunction;t.augment=o(function(n,o,t){return void 0===t?o:t}),t.override=o(function(n,o,t){return void 0!==t?o:t}),t.shuffle=o(function(n,o,t){return r(t)?function(){return t.apply(this,o.apply(this,arguments))}:t}),t.wrap=o(function(n,o,t){return function(){return o.call(this,t,arguments)}}),t.tap=o(function(n,o,t){return function(){return o.apply(this,arguments),this}}),t.before=o(function(n,o,t){return r(t)?function(){return o.apply(this,arguments),t.apply(this,arguments)}:o}),t.after=o(function(n,o,t){return r(t)?function(){return t.apply(this,arguments),o.apply(this,arguments)}:o})}();
//# sourceMappingURL=../../sourcemaps/lang/oo/general.js.map
