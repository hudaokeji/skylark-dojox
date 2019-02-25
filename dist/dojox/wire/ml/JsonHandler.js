/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.ml.JsonHandler"),dojo.require("dojox.wire.ml.RestHandler"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.JsonHandler",dojox.wire.ml.RestHandler,{contentType:"text/json",handleAs:"json",headers:{Accept:"*/json"},_getContent:function(o,e){var r=null;if("POST"==o||"PUT"==o){var d=e?e[0]:void 0;d&&(r=dojo.isString(d)?d:dojo.toJson(d))}return r}});
//# sourceMappingURL=../../sourcemaps/wire/ml/JsonHandler.js.map
