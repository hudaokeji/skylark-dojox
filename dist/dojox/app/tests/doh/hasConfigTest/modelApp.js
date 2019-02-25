/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/window","dojox/app/main","dojox/json/ref","dojo/text!./config.json","dojox/app/utils/config","dojo/sniff"],function(o,n,d,e,i,t){var j=d.fromJson(e),a=!1;(window.innerWidth||document.documentElement.clientWidth)>600&&(a=!0),t.add("testTrue",!0),t.add("phone",!a),n(j)});
//# sourceMappingURL=../../../../sourcemaps/app/tests/doh/hasConfigTest/modelApp.js.map
