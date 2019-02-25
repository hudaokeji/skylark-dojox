/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojox/app/main","dojox/json/ref","dojo/sniff"],function(o,n,e){require(["dojo/text!./config.json"],function(i){var d=n.fromJson(i);(window.innerWidth||document.documentElement.clientWidth)<=600&&e.add("phone",!0),e.add("ie9orLess",e("ie")&&e("ie")<=9),o(d)})});
//# sourceMappingURL=../../../sourcemaps/app/tests/scrollableTestApp/src.js.map
