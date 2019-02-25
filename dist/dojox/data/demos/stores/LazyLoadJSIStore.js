/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.demos.stores.LazyLoadJSIStore"),dojo.require("dojo.data.ItemFileReadStore"),dojo.declare("dojox.data.demos.stores.LazyLoadJSIStore",dojo.data.ItemFileReadStore,{constructor:function(e){},isItemLoaded:function(e){return"stub"!==this.getValue(e,"type")},loadItem:function(e){var o=e.item;this._assertIsItem(o);var t=this.getValue(o,"name"),a=this.getValue(o,"parent"),r="";a&&(r+=a+"/");var d=this,s={url:r+=t+"/data.json",handleAs:"json-comment-optional"},n=dojo.xhrGet(s);n.addCallback(function(r){for(var s in delete o.type,delete o.parent,r)dojo.isArray(r[s])?o[s]=r[s]:o[s]=[r[s]];d._arrayOfAllItems[o[d._itemNumPropName]]=o;var n=d.getAttributes(o);for(s in n)for(var l=o[n[s]],i=0;i<l.length;i++){var m=l[i];if("object"==typeof m&&m.stub){var u={type:["stub"],name:[m.stub],parent:[t]};a&&(u.parent[0]=a+"/"+u.parent[0]),d._arrayOfAllItems.push(u),u[d._storeRefPropName]=d,u[d._itemNumPropName]=d._arrayOfAllItems.length-1,l[i]=u}}if(e.onItem){var p=e.scope?e.scope:dojo.global;e.onItem.call(p,o)}}),n.addErrback(function(o){if(e.onError){var t=e.scope?e.scope:dojo.global;e.onError.call(t,o)}})}});
//# sourceMappingURL=../../../sourcemaps/data/demos/stores/LazyLoadJSIStore.js.map
