/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array"],function(n,t){var o=n.getObject("dojox.mvc",!0);return n.mixin(o,{bind:function(t,o,a,e,i,r){var u;return t.watch(o,function(t,o,c){u=n.isFunction(i)?i(c):c,r&&u==a.get(e)||a.set(e,u)})},bindInputs:function(n,o){var a=[];return t.forEach(n,function(n){a.push(n.watch("value",o))}),a}})});
//# sourceMappingURL=../sourcemaps/mvc/Bind.js.map
