/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array"],function(e,t){var n=e.getObject("dojox.data.css",!0);return n.rules={},n.rules.forEach=function(e,n,r){if(r){t.forEach(r,function(r){t.forEach(r[r.cssRules?"cssRules":"rules"],function(t){if(!t.type||3!==t.type){var s="";r&&r.href&&(s=r.href),e.call(n||this,t,r,s)}})})}},n.findStyleSheets=function(e){var r=[];return t.forEach(e,function(e){var s=n.findStyleSheet(e);s&&t.forEach(s,function(e){-1===t.indexOf(r,e)&&r.push(e)})}),r},n.findStyleSheet=function(e){var n=[];"."===e.charAt(0)&&(e=e.substring(1));var r=function(s){return s.href&&s.href.match(e)?(n.push(s),!0):s.imports?t.some(s.imports,function(e){return r(e)}):t.some(s[s.cssRules?"cssRules":"rules"],function(e){return!(!e.type||3!==e.type||!r(e.styleSheet))})};return t.some(document.styleSheets,r),n},n.determineContext=function(e){var r=[];e=e&&e.length>0?n.findStyleSheets(e):document.styleSheets;var s=function(e){r.push(e),e.imports&&t.forEach(e.imports,function(e){s(e)}),t.forEach(e[e.cssRules?"cssRules":"rules"],function(e){e.type&&3===e.type&&s(e.styleSheet)})};return t.forEach(e,s),r},n});
//# sourceMappingURL=../sourcemaps/data/css.js.map
