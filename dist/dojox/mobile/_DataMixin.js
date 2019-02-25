/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred"],function(e,t,o,n,s){return e.deprecated("dojox/mobile/_DataMixin","Use dojox/mobile/_StoreMixin instead","2.0"),o("dojox.mobile._DataMixin",null,{store:null,query:null,queryOptions:null,setStore:function(e,o,n){return e===this.store?null:(this.store=e,this._setQuery(o,n),e&&e.getFeatures()["dojo.data.api.Notification"]&&(t.forEach(this._conn||[],this.disconnect,this),this._conn=[this.connect(e,"onSet","onSet"),this.connect(e,"onNew","onNew"),this.connect(e,"onDelete","onDelete"),this.connect(e,"close","onStoreClose")]),this.refresh())},setQuery:function(e,t){return this._setQuery(e,t),this.refresh()},_setQuery:function(e,t){this.query=e,this.queryOptions=t||this.queryOptions},refresh:function(){if(!this.store)return null;var e=new s,t=n.hitch(this,function(t,o){this.onComplete(t,o),e.resolve()}),o=n.hitch(this,function(t,o){this.onError(t,o),e.resolve()}),r=this.query;return this.store.fetch({query:r,queryOptions:this.queryOptions,onComplete:t,onError:o,start:r&&r.start,count:r&&r.count}),e}})});
//# sourceMappingURL=../sourcemaps/mobile/_DataMixin.js.map
