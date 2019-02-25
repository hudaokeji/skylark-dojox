/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/dom-style","dojo/_base/declare"],function(n,t,e){return e("dojox.form.manager._DisplayMixin",null,{gatherDisplayState:function(n){return this.inspectAttachedPoints(function(n,e){return"none"!=t.get(e,"display")},n)},show:function(n,e){return arguments.length<2&&(e=!0),this.inspectAttachedPoints(function(n,e,i){t.set(e,"display",i?"":"none")},n,e),this},hide:function(n){return this.show(n,!1)}})});
//# sourceMappingURL=../../sourcemaps/form/manager/_DisplayMixin.js.map
