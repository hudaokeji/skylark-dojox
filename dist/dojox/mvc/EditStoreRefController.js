/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./getPlainValue","./EditModelRefController","./StoreRefController"],function(t,e,s,r,i,n){return t("dojox.mvc.EditStoreRefController",[n,i],{getPlainValueOptions:null,_removals:[],_resultsWatchHandle:null,_refSourceModelProp:"sourceModel",queryStore:function(t,r){if((this.store||{}).query){this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),this._removals=[];var i=this,n=this.inherited(arguments),o=s(n,function(t){if(!i._beingDestroyed)return e.isArray(t)&&(i._resultsWatchHandle=t.watchElements(function(t,e,s){[].push.apply(i._removals,e)})),t});for(var l in o.then&&(o=e.delegate(o)),n)isNaN(l)&&n.hasOwnProperty(l)&&e.isFunction(n[l])&&(o[l]=n[l]);return o}},getStore:function(t,e){return this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),this.inherited(arguments)},commit:function(){if(this._removals){for(var t=0;t<this._removals.length;t++)this.store.remove(this.store.getIdentity(this._removals[t]));this._removals=[]}var s=r(this.get(this._refEditModelProp),this.getPlainValueOptions);if(e.isArray(s))for(t=0;t<s.length;t++)this.store.put(s[t]);else this.store.put(s);this.inherited(arguments)},reset:function(){this.inherited(arguments),this._removals=[]},destroy:function(){this._resultsWatchHandle&&this._resultsWatchHandle.unwatch(),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mvc/EditStoreRefController.js.map
