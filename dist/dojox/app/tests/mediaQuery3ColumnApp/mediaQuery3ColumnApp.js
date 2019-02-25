/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/window","dojox/app/main","dojox/json/ref","dojo/text!./config.json","dojo/sniff"],function(o,i,n,d,e){var t=n.fromJson(d);e.add("ie9orLess",e("ie")&&e("ie")<=9),e.add("isInitiallySmall",(window.innerWidth||document.documentElement.clientWidth)<=560),i(t)});
//# sourceMappingURL=../../../sourcemaps/app/tests/mediaQuery3ColumnApp/mediaQuery3ColumnApp.js.map
