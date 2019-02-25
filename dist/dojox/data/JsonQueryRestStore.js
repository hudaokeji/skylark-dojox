/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/data/JsonRestStore","dojox/data/util/JsonQuery","dojox/data/ClientFilter","dojox/json/query"],function(e,o,t){return e("dojox.data.JsonQueryRestStore",[o,t],{matchesQuery:function(e,o){return e.__id&&-1==e.__id.indexOf("#")&&this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/data/JsonQueryRestStore.js.map
