/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox","dojox/data/JsonRestStore"],function(t,e){var r=t.declare("dojox.data.CouchDBRestStore",e.data.JsonRestStore,{save:function(t){for(var e=this.inherited(arguments),r=this.service.servicePath,o=0;o<e.length;o++)!function(t,n){e[o].deferred.addCallback(function(e){return e&&(t.__id=r+e.id,t._rev=e.rev),e})}(e[o].content)},fetch:function(t){return t.query=t.query||"_all_docs?",t.start&&(t.query=(t.query?t.query+"&":"")+"skip="+t.start,delete t.start),t.count&&(t.query=(t.query?t.query+"&":"")+"limit="+t.count,delete t.count),this.inherited(arguments)},_processResults:function(t){var r=t.rows;if(r){for(var o=this.service.servicePath,n=0;n<r.length;n++){var i=r[n].value;i.__id=o+r[n].id,i._id=r[n].id,i._loadObject=e.rpc.JsonRest._loader,r[n]=i}return{totalCount:t.total_rows,items:t.rows}}return{items:t}}});return r.getStores=function(r){var o={};return t.xhrGet({url:r+"_all_dbs",handleAs:"json",sync:!0}).addBoth(function(t){for(var n=0;n<t.length;n++)o[t[n]]=new e.data.CouchDBRestStore({target:r+t[n],idAttribute:"_id"});return o}),o},r});
//# sourceMappingURL=../sourcemaps/data/CouchDBRestStore.js.map
