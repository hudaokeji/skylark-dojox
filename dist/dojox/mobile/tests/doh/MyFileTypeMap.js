/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(e){var n=e.getObject("dojox.mobile.tests.doh.MyFileTypeMap",!0);return n.map={html:"html",json:"json",mydata:"json"},n.add=function(e,n){this.map[e]=n},n.getContentType=function(e){var n=(e||"").replace(/.*\./,"");return this.map[n]},console.log("This is MyFileTypeMap"),window._MyFileTypeMapFlag=!0,n});
//# sourceMappingURL=../../../sourcemaps/mobile/tests/doh/MyFileTypeMap.js.map
