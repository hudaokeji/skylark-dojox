/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/dom-class","dijit/registry","doh/runner"],function(e,n,i,t,r,o){return new function(){this.fireOnClick=function(e){var n;"string"==typeof e?n=r.byId(e).domNode:n=e;10===i("ie")||!i("ie")&&i("trident")>6?(this.fireOnEvent(n,"MSPointerDown"),this.fireOnEvent(n,"MSPointerUp")):(this.fireOnEvent(n,"mousedown"),this.fireOnEvent(n,"mouseup"))},this.fireOnEvent=function(e,n){if(i("ie")<9)e.fireEvent("on"+n);else{var t=document.createEvent("Events");t.initEvent(n,!0,!0),e.dispatchEvent(t)}},this.verifyImageSrc=function(e,n,t,r){t=t||"",r=r||"",!i("ie")&&n&&e&&doh.assertTrue(-1!=e.src.search(n),t+"search "+n.toString()+r)}}});
//# sourceMappingURL=../../../sourcemaps/mobile/tests/doh/TestHelper.js.map
