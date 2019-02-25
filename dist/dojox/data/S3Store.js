/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/data/JsonRestStore","dojox/rpc/ProxiedPath"],function(e,t,o){return e("dojox.data.S3Store",t,{_processResults:function(e){for(var t=e.getElementsByTagName("Key"),o=[],a=this,n=0;n<t.length;n++){var r={_loadObject:function(e,t){return function(t){delete this._loadObject,a.service(e).addCallback(t)}}(t[n].firstChild.nodeValue)};o.push(r)}return{totalCount:o.length,items:o}}})});
//# sourceMappingURL=../sourcemaps/data/S3Store.js.map
