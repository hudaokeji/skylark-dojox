/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base"],function(e,n){var t=e.getObject("filter.integers",!0,n);return e.mixin(t,{add:function(e,n){return e=parseInt(e,10),n=parseInt(n,10),isNaN(n)?e:e+n},get_digit:function(e,n){return e=parseInt(e,10),(n=parseInt(n,10)-1)>=0&&(e=n<(e+="").length?parseInt(e.charAt(n),10):0),isNaN(e)?0:e}}),t});
//# sourceMappingURL=../../sourcemaps/dtl/filter/integers.js.map
