/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(h){var r=h.getObject("dojox.encoding.base64",!0),e="=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return r.encode=function(h){for(var r=[],t=h.length,a=t%3,s=t-a,u=0;u<s;){var c=h[u++]<<16|h[u++]<<8|h[u++];r.push(n.charAt(c>>>18&63)),r.push(n.charAt(c>>>12&63)),r.push(n.charAt(c>>>6&63)),r.push(n.charAt(63&c))}switch(a){case 2:c=h[u++]<<16|h[u++]<<8;r.push(n.charAt(c>>>18&63)),r.push(n.charAt(c>>>12&63)),r.push(n.charAt(c>>>6&63)),r.push(e);break;case 1:c=h[u++]<<16;r.push(n.charAt(c>>>18&63)),r.push(n.charAt(c>>>12&63)),r.push(e),r.push(e)}return r.join("")},r.decode=function(h){for(var r=h.split(""),t=[],a=r.length;r[--a]==e;);for(var s=0;s<a;){var u=n.indexOf(r[s++])<<18;s<=a&&(u|=n.indexOf(r[s++])<<12),s<=a&&(u|=n.indexOf(r[s++])<<6),s<=a&&(u|=n.indexOf(r[s++])),t.push(u>>>16&255),t.push(u>>>8&255),t.push(255&u)}for(;0==t[t.length-1];)t.pop();return t},r});
//# sourceMappingURL=../sourcemaps/encoding/base64.js.map
