/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/Deferred","dojo/when"],function(e,r,t){return function(o,s,a){var d,n,u,i={},l=new r,y=function(e){var r={};for(var t in e)"_"!==t.charAt(0)&&(r[t]=e[t]);return r};if(s.store){if(!s.store.params)throw new Error("Invalid store for model ["+a+"]");if(s.store.params.data||s.store.params.store)d={store:s.store.store,query:s.query?y(s.query):s.store.query?y(s.store.query):{}};else if(s.store.params.url){try{n=require("dojo/store/DataStore")}catch(e){throw new Error("dojo/store/DataStore must be listed in the dependencies")}d={store:new n({store:s.store.store}),query:s.query?y(s.query):s.store.query?y(s.store.query):{}}}else s.store.store&&(d={store:s.store.store,query:s.query?y(s.query):s.store.query?y(s.store.query):{}})}else if(s.datastore){try{n=require("dojo/store/DataStore")}catch(e){throw new Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies")}d={store:new n({store:s.datastore.store}),query:y(s.query)}}else s.data?(s.data&&e.isString(s.data)&&(s.data=e.getObject(s.data)),d={data:s.data,query:{}}):console.warn("simpleModel: Missing parameters.");try{u=d.store?d.store.query():d.data}catch(e){return l.reject("load simple model error."),l.promise}return u.then?(t(u,e.hitch(this,function(e){return i=e,l.resolve(i),i}),function(){loadModelLoaderDeferred.reject("load model error.")}),l):(i=u,l.resolve(i),i)}});
//# sourceMappingURL=../../sourcemaps/app/utils/simpleModel.js.map
