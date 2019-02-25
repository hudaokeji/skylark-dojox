/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.storage.WhatWGStorageProvider"),dojo.require("dojox.storage.Provider"),dojo.require("dojox.storage.manager"),dojo.declare("dojox.storage.WhatWGStorageProvider",[dojox.storage.Provider],{initialized:!1,_domain:null,_available:null,_statusHandler:null,_allNamespaces:null,_storageEventListener:null,initialize:function(){1!=dojo.config.disableWhatWGStorage&&(this._domain=location.hostname,this.initialized=!0,dojox.storage.manager.loaded())},isAvailable:function(){try{globalStorage[location.hostname]}catch(t){return this._available=!1,this._available}return this._available=!0,this._available},put:function(t,e,o,i){if(0==this.isValidKey(t))throw new Error("Invalid key given: "+t);i=i||this.DEFAULT_NAMESPACE,t=this.getFullKey(t,i),this._statusHandler=o,e=dojo.isString(e)?"string:"+e:dojo.toJson(e);var r=dojo.hitch(this,function(e){window.removeEventListener("storage",r,!1),o&&o.call(null,this.SUCCESS,t,null,i)});window.addEventListener("storage",r,!1);try{globalStorage[this._domain].setItem(t,e)}catch(e){this._statusHandler.call(null,this.FAILED,t,e.toString(),i)}},get:function(t,e){if(0==this.isValidKey(t))throw new Error("Invalid key given: "+t);e=e||this.DEFAULT_NAMESPACE,t=this.getFullKey(t,e);var o=globalStorage[this._domain].getItem(t);return null==o||""==o?null:(o=o.value,o=dojo.isString(o)&&/^string:/.test(o)?o.substring("string:".length):dojo.fromJson(o))},getNamespaces:function(){for(var t=[this.DEFAULT_NAMESPACE],e={},o=globalStorage[this._domain],i=/^__([^_]*)_/,r=0;r<o.length;r++){var a=o.key(r);if(1==i.test(a)){var n=a.match(i)[1];void 0===e[n]&&(e[n]=!0,t.push(n))}}return t},getKeys:function(t){if(t=t||this.DEFAULT_NAMESPACE,0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);var e;e=t==this.DEFAULT_NAMESPACE?new RegExp("^([^_]{2}.*)$"):new RegExp("^__"+t+"_(.*)$");for(var o=globalStorage[this._domain],i=[],r=0;r<o.length;r++){var a=o.key(r);1==e.test(a)&&(a=a.match(e)[1],i.push(a))}return i},clear:function(t){if(t=t||this.DEFAULT_NAMESPACE,0==this.isValidKey(t))throw new Error("Invalid namespace given: "+t);var e;e=t==this.DEFAULT_NAMESPACE?new RegExp("^[^_]{2}"):new RegExp("^__"+t+"_");for(var o=globalStorage[this._domain],i=[],r=0;r<o.length;r++)1==e.test(o.key(r))&&(i[i.length]=o.key(r));dojo.forEach(i,dojo.hitch(o,"removeItem"))},remove:function(t,e){t=this.getFullKey(t,e),globalStorage[this._domain].removeItem(t)},isPermanent:function(){return!0},getMaximumSize:function(){return this.SIZE_NO_LIMIT},hasSettingsUI:function(){return!1},showSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},hideSettingsUI:function(){throw new Error(this.declaredClass+" does not support a storage settings user-interface")},getFullKey:function(t,e){if(e=e||this.DEFAULT_NAMESPACE,0==this.isValidKey(e))throw new Error("Invalid namespace given: "+e);return e==this.DEFAULT_NAMESPACE?t:"__"+e+"_"+t}}),dojox.storage.manager.register("dojox.storage.WhatWGStorageProvider",new dojox.storage.WhatWGStorageProvider);
//# sourceMappingURL=../sourcemaps/storage/WhatWGStorageProvider.js.map
