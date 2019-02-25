/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr"],function(t,o,e){return t("dojox.mobile.dh.UrlDataSource",null,{text:"",_url:"",constructor:function(t){this._url=t},getData:function(){var t=e.get({url:this._url,handleAs:"text"});return t.addCallback(o.hitch(this,function(t,o){this.text=t})),t.addErrback(function(t){console.log("Failed to load "+this._url+"\n"+(t.description||t))}),t}})});
//# sourceMappingURL=../../sourcemaps/mobile/dh/UrlDataSource.js.map
