/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define("dojox/rpc/ProxiedPath",["dojo","dojox","dojox/rpc/Service"],function(r,e){e.rpc.envelopeRegistry.register("PROXIED-PATH",function(r){return"PROXIED-PATH"==r},{serialize:function(o,n,t){var i,c=e.rpc.getTarget(o,n);if(r.isArray(t))for(i=0;i<t.length;i++)c+="/"+(null==t[i]?"":t[i]);else for(i in t)c+="/"+i+"/"+t[i];return{data:"",target:(n.proxyUrl||o.proxyUrl)+"?url="+encodeURIComponent(c)}},deserialize:function(r){return r}})});
//# sourceMappingURL=../sourcemaps/rpc/ProxiedPath.js.map
