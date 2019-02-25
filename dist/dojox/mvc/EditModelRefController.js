/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","./getPlainValue","./getStateful","./ModelRefController"],function(e,o,t,i,l){return e("dojox.mvc.EditModelRefController",l,{getStatefulOptions:null,getPlainValueOptions:null,holdModelUntilCommit:!1,originalModel:null,sourceModel:null,_refOriginalModelProp:"originalModel",_refSourceModelProp:"sourceModel",_refEditModelProp:"model",postscript:function(e,o){for(var t in{getStatefulOptions:1,getPlainValueOptions:1,holdModelUntilCommit:1}){var i=(e||{})[t];void 0!==i&&(this[t]=i)}this.inherited(arguments)},set:function(e,o){var t,i;e==this._refSourceModelProp&&(t=this,this[this._refSourceModelProp]!==(i=o)&&(t.set(t._refOriginalModelProp,t.holdModelUntilCommit?i:t.cloneModel(i)),t.set(t._refEditModelProp,t.holdModelUntilCommit?t.cloneModel(i):i))),this.inherited(arguments)},cloneModel:function(e){var l=o.isFunction((e||{}).set)&&o.isFunction((e||{}).watch)?t(e,this.getPlainValueOptions):e;return i(l,this.getStatefulOptions)},commit:function(){this.set(this.holdModelUntilCommit?this._refSourceModelProp:this._refOriginalModelProp,this.cloneModel(this.get(this._refEditModelProp)))},reset:function(){this.set(this.holdModelUntilCommit?this._refEditModelProp:this._refSourceModelProp,this.cloneModel(this.get(this._refOriginalModelProp)))},hasControllerProperty:function(e){return this.inherited(arguments)||e==this._refOriginalModelProp||e==this._refSourceModelProp}})});
//# sourceMappingURL=../sourcemaps/mvc/EditModelRefController.js.map
