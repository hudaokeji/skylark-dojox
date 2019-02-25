/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojox/mvc/getStateful"],function(e,r,t,o){return function(a,n,d){var s,u={},i=new r,c=function(e){var r={};for(var t in e)"_"!==t.charAt(0)&&(r[t]=e[t]);return r};if(n.store)s={store:n.store.store,query:n.query?c(n.query):n.store.query?c(n.store.query):{}};else if(n.datastore){try{var l=require("dojo/store/DataStore")}catch(e){throw new Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies")}s={store:new l({store:n.datastore.store}),query:c(n.query)}}else n.data?(n.data&&e.isString(n.data)&&(n.data=e.getObject(n.data)),s={data:n.data,query:{}}):console.warn("mvcModel: Missing parameters.");var y=a[d].type?a[d].type:"dojox/mvc/EditStoreRefListController";try{var f=require(y)}catch(e){throw new Error(y+" must be listed in the dependencies")}var h,q=new f(s);try{if(q.queryStore)h=q.queryStore(s.query);else{var v=q._refSourceModelProp||q._refModelProp||"model";q.set(v,o(s.data)),h=q}}catch(e){return i.reject("load mvc model error."),i.promise}return t(h,e.hitch(this,function(){return u=q,i.resolve(u),u}),function(){i.reject("load model error.")}),i}});
//# sourceMappingURL=../../sourcemaps/app/utils/mvcModel.js.map
