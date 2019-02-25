/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.oo.Decorator"),function(){var o=dojox.lang.oo,n=o.Decorator=function(o,n){this.value=o,this.decorator="object"==typeof n?function(){return n.exec.apply(n,arguments)}:n};o.makeDecorator=function(o){return function(r){return new n(r,o)}}}();
//# sourceMappingURL=../../sourcemaps/lang/oo/Decorator.js.map
