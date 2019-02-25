/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/window","dojox/app/main","dojox/json/ref","dojo/sniff"],function(o,e,i,n){o.global.modelApp={},modelApp.list={identifier:"label",items:[]};require(["dojo/text!./config.json"],function(o){var d=i.fromJson(o);window.innerWidth||document.documentElement.clientWidth;n.add("ie9orLess",n("ie")&&n("ie")<=9),e(d)})});
//# sourceMappingURL=../../../sourcemaps/app/tests/notNestedTestApp/src.js.map
