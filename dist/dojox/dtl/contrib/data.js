/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","../_base","dojo/_base/array"],function(t,e,n,r){var i=e.getObject("contrib.data",!0,n),a=!0;return i._BoundItem=e.extend(function(t,e){this.item=t,this.store=e},{get:function(n){var o=this.store,s=this.item;if("getLabel"==n)return o.getLabel(s);if("getAttributes"==n)return o.getAttributes(s);if("getIdentity"==n)return o.getIdentity?o.getIdentity(s):"Store has no identity API";if(o.hasAttribute(s,n)||("s"==n.slice(-1)&&(a&&(a=!1,t.deprecated("You no longer need an extra s to call getValues, it can be figured out automatically")),n=n.slice(0,-1)),o.hasAttribute(s,n))){var u=o.getValues(s,n);if(u)return e.isArray(u)?((u=r.map(u,function(t){return e.isObject(t)&&o.isItem(t)?new i._BoundItem(t,o):t})).get=i._get,u):new i._BoundItem(u,o)}}}),i._BoundItem.prototype.get.safe=!0,i.BindDataNode=e.extend(function(t,e,r,i){this.items=t&&new n._Filter(t),this.query=e&&new n._Filter(e),this.store=new n._Filter(r),this.alias=i},{render:function(t,e){var n=this.items&&this.items.resolve(t),r=this.query&&this.query.resolve(t),a=this.store.resolve(t);if(!a||!a.getFeatures)throw new Error("data_bind didn't receive a store");if(r){var o=!1;if(a.fetch({query:r,sync:!0,scope:this,onComplete:function(t){o=!0,n=t}}),!o)throw new Error("The bind_data tag only works with a query if the store executed synchronously")}var s=[];if(n)for(var u,d=0;u=n[d];d++)s.push(new i._BoundItem(u,a));return t[this.alias]=s,e},unrender:function(t,e){return e},clone:function(){return this}}),e.mixin(i,{_get:function(t){if(this.length)return this[0]instanceof i._BoundItem?this[0].get(t):this[0][t]},bind_data:function(t,e){var n=e.contents.split();if("to"!=n[2]||"as"!=n[4]||!n[5])throw new Error("data_bind expects the format: 'data_bind items to store as varName'");return new i.BindDataNode(n[1],null,n[3],n[5])},bind_query:function(t,e){var n=e.contents.split();if("to"!=n[2]||"as"!=n[4]||!n[5])throw new Error("data_bind expects the format: 'bind_query query to store as varName'");return new i.BindDataNode(null,n[1],n[3],n[5])}}),i._get.safe=!0,n.register.tags("dojox.dtl.contrib",{data:["bind_data","bind_query"]}),i});
//# sourceMappingURL=../../sourcemaps/dtl/contrib/data.js.map
