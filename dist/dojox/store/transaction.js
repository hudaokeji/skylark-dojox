/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/store/Memory","dojo/store/Cache","dojo/when","dojo/aspect","dojo/_base/lang"],function(r,e,t,o,n){var i,a={},u=1;return function(d){var c=(d=d||{}).masterStore,f=d.cachingStore,v=c.id||c.storeName||c.name||(c.id=u++);v&&(a[v]=c);var m=d.transactionLogStore||i||(i=new r),s=!0;function l(r){return function e(o,n){var i=this;if(s){var a=c[r](o,n);return t(a,null,function(r){i.errorHandler(r)&&(s=!1,n.error=r,e.call(i,o,n),s=!0)}),a}var u="remove"===r?o:i.getIdentity(o);if(void 0!==u)var d=f.get(u);return t(d,function(e){return t(m.add({objectId:u,method:r,target:o,previous:e,options:n,storeId:v}),function(){return o})})}}return o.before(c,"notify",function(r,e){r?f.put(r):f.remove(e)}),new e(n.delegate(c,{put:l("put"),add:l("add"),remove:l("remove"),errorHandler:function(r){return console.error(r),!0},commit:function(){s=!0;var r=this;return m.query({}).map(function(e){var t,o=e.method,n=a[e.storeId],i=e.target;try{t=n[o](i,e.options)}catch(a){if(!0===(t=r.errorHandler(a)))return a;!1===t&&("add"===o?f.remove(e.objectId):f.put(i),n.notify&&n.notify("add"===o?null:e.previous,"remove"===o?void 0:e.objectId)),t=a}return m.remove(e.id),t})},transaction:function(){s=!1;var r=this;return{commit:function(){return r.commit()}}}}),f,d)}});
//# sourceMappingURL=../sourcemaps/store/transaction.js.map
