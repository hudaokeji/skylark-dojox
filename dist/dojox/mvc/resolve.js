/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dijit/registry","dojo/Stateful"],function(e,t){return e.setObject("dojox.mvc.resolve",function(r,i){if("string"==typeof r){var o=r.match(/^(expr|rel|widget):(.*)$/)||[];try{r="rel"==o[1]?e.getObject(o[2]||"",!1,i):"widget"==o[1]?t.byId(o[2]):e.getObject(o[2]||r,!1,i)}catch(e){}}return r})});
//# sourceMappingURL=../sourcemaps/mvc/resolve.js.map
