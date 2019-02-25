/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define("dojox/rpc/Service",["dojo","dojox","dojo/AdapterRegistry","dojo/_base/url"],function(e,r){return e.declare("dojox.rpc.Service",null,{constructor:function(r,t){var a,n=this;function i(r){for(var t in r._baseUrl=new e._Url(e.isBrowser?location.href:e.config.baseUrl,a||".")+"",n._smd=r,n._smd.services){for(var i=t.split("."),o=n,s=0;s<i.length-1;s++)o=o[i[s]]||(o[i[s]]={});o[i[i.length-1]]=n._generateService(t,n._smd.services[t])}}if(r)if(e.isString(r)||r instanceof e._Url){a=r instanceof e._Url?r+"":r;var o=e._getText(a);if(!o)throw new Error("Unable to load SMD from "+r);i(e.fromJson(o))}else i(r);this._options=t||{},this._requestId=0},_generateService:function(t,a){if(this[a])throw new Error("WARNING: "+t+" already exists for service. Unable to generate function");a.name=t;var n=e.hitch(this,"_executeMethod",a),i=r.rpc.transportRegistry.match(a.transport||this._smd.transport);i.getExecutor&&(n=i.getExecutor(n,a,this));var o=a.returns||(a._schema={}),s="/"+t+"/";return o._service=n,n.servicePath=s,n._schema=o,n.id=r.rpc.Service._nextId++,n},_getRequest:function(t,a){var n=this._smd,i=r.rpc.envelopeRegistry.match(t.envelope||n.envelope||"NONE"),o=(t.parameters||[]).concat(n.parameters||[]);if(i.namedParams){if(1==a.length&&e.isObject(a[0]))a=a[0];else{for(var s={},c=0;c<t.parameters.length;c++)void 0===a[c]&&t.parameters[c].optional||(s[t.parameters[c].name]=a[c]);a=s}if(t.strictParameters||n.strictParameters)for(c in a){for(var p=!1,l=0;l<o.length;l++)o[l].name==c&&(p=!0);p||delete a[c]}for(c=0;c<o.length;c++){var u=o[c];if(!u.optional&&u.name&&!a[u.name])if(u.default)a[u.name]=u.default;else if(!(u.name in a))throw new Error("Required parameter "+u.name+" was omitted")}}else o&&o[0]&&o[0].name&&1==a.length&&e.isObject(a[0])&&(a=!1===i.namedParams?r.rpc.toOrdered(o,a):a[0]);e.isObject(this._options)&&(a=e.mixin(a,this._options));var m=t._schema||t.returns,f=i.serialize.apply(this,[n,t,a]);f._envDef=i;var d=t.contentType||n.contentType||f.contentType;return e.mixin(f,{sync:r.rpc._sync,contentType:d,headers:t.headers||n.headers||f.headers||{},target:f.target||r.rpc.getTarget(n,t),transport:t.transport||n.transport||f.transport,envelope:t.envelope||n.envelope||f.envelope,timeout:t.timeout||n.timeout,callbackParamName:t.callbackParamName||n.callbackParamName,rpcObjectParamName:t.rpcObjectParamName||n.rpcObjectParamName,schema:m,handleAs:f.handleAs||"auto",preventCache:t.preventCache||n.preventCache,frameDoc:this._options.frameDoc||void 0})},_executeMethod:function(e){var t,a=[];for(t=1;t<arguments.length;t++)a.push(arguments[t]);var n=this._getRequest(e,a),i=r.rpc.transportRegistry.match(n.transport).fire(n);return i.addBoth(function(e){return n._envDef.deserialize.call(this,e)}),i}}),r.rpc.getTarget=function(r,t){var a=r._baseUrl;return r.target&&(a=new e._Url(a,r.target)+""),t.target&&(a=new e._Url(a,t.target)+""),a},r.rpc.toOrdered=function(r,t){if(e.isArray(t))return t;for(var a=[],n=0;n<r.length;n++)a.push(t[r[n].name]);return a},r.rpc.transportRegistry=new e.AdapterRegistry(!0),r.rpc.envelopeRegistry=new e.AdapterRegistry(!0),r.rpc.envelopeRegistry.register("URL",function(e){return"URL"==e},{serialize:function(r,t,a){return{data:e.objectToQuery(a),transport:"POST"}},deserialize:function(e){return e},namedParams:!0}),r.rpc.envelopeRegistry.register("JSON",function(e){return"JSON"==e},{serialize:function(r,t,a){return{data:e.toJson(a),handleAs:"json",contentType:"application/json"}},deserialize:function(e){return e}}),r.rpc.envelopeRegistry.register("PATH",function(e){return"PATH"==e},{serialize:function(t,a,n){var i,o=r.rpc.getTarget(t,a);if(e.isArray(n))for(i=0;i<n.length;i++)o+="/"+n[i];else for(i in n)o+="/"+i+"/"+n[i];return{data:"",target:o}},deserialize:function(e){return e}}),r.rpc.transportRegistry.register("POST",function(e){return"POST"==e},{fire:function(r){return r.url=r.target,r.postData=r.data,e.rawXhrPost(r)}}),r.rpc.transportRegistry.register("GET",function(e){return"GET"==e},{fire:function(r){return r.url=r.target+(r.data?"?"+(r.rpcObjectParamName?r.rpcObjectParamName+"=":"")+r.data:""),e.xhrGet(r)}}),r.rpc.transportRegistry.register("JSONP",function(e){return"JSONP"==e},{fire:function(r){return r.url=r.target+(-1==r.target.indexOf("?")?"?":"&")+(r.rpcObjectParamName?r.rpcObjectParamName+"=":"")+r.data,r.callbackParamName=r.callbackParamName||"callback",e.io.script.get(r)}}),r.rpc.Service._nextId=1,e._contentHandlers.auto=function(r){var t=e._contentHandlers,a=r.getResponseHeader("Content-Type");return a?a.match(/\/.*json/)?t.json(r):a.match(/\/javascript/)?t.javascript(r):a.match(/\/xml/)?t.xml(r):t.text(r):t.text(r)},r.rpc.Service});
//# sourceMappingURL=../sourcemaps/rpc/Service.js.map
