/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(n,e,t,o,a){var i=n.getObject("dojox.form.manager",!0),r=i.actionAdapter,s=i.inspectorAdapter;return a("dojox.form.manager._ClassMixin",null,{gatherClassState:function(n,e){return this.inspect(s(function(e,o){return t.contains(o,n)}),e)},addClass:function(n,e){return this.inspect(r(function(e,o){t.add(o,n)}),e),this},removeClass:function(n,e){return this.inspect(r(function(e,o){t.remove(o,n)}),e),this}})});
//# sourceMappingURL=../../sourcemaps/form/manager/_ClassMixin.js.map
