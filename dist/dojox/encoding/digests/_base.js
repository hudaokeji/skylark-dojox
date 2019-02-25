/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(r){var o=r.getObject("dojox.encoding.digests",!0);o.outputTypes={Base64:0,Hex:1,String:2,Raw:3},o.addWords=function(r,o){var n=(65535&r)+(65535&o);return(r>>16)+(o>>16)+(n>>16)<<16|65535&n};return o.stringToWord=function(r){for(var o=[],n=0,t=8*r.length;n<t;n+=8)o[n>>5]|=(255&r.charCodeAt(n/8))<<n%32;return o},o.wordToString=function(r){for(var o=[],n=0,t=32*r.length;n<t;n+=8)o.push(String.fromCharCode(r[n>>5]>>>n%32&255));return o.join("")},o.wordToHex=function(r){for(var o="0123456789abcdef",n=[],t=0,e=4*r.length;t<e;t++)n.push(o.charAt(r[t>>2]>>t%4*8+4&15)+o.charAt(r[t>>2]>>t%4*8&15));return n.join("")},o.wordToBase64=function(r){for(var o=[],n=0,t=4*r.length;n<t;n+=3)for(var e=(r[n>>2]>>n%4*8&255)<<16|(r[n+1>>2]>>(n+1)%4*8&255)<<8|r[n+2>>2]>>(n+2)%4*8&255,a=0;a<4;a++)8*n+6*a>32*r.length?o.push("="):o.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>6*(3-a)&63));return o.join("")},o.stringToUtf8=function(r){for(var o,n,t="",e=-1;++e<r.length;)o=r.charCodeAt(e),n=e+1<r.length?r.charCodeAt(e+1):0,55296<=o&&o<=56319&&56320<=n&&n<=57343&&(o=65536+((1023&o)<<10)+(1023&n),e++),o<=127?t+=String.fromCharCode(o):o<=2047?t+=String.fromCharCode(192|o>>>6&31,128|63&o):o<=65535?t+=String.fromCharCode(224|o>>>12&15,128|o>>>6&63,128|63&o):o<=2097151&&(t+=String.fromCharCode(240|o>>>18&7,128|o>>>12&63,128|o>>>6&63,128|63&o));return t},o});
//# sourceMappingURL=../../sourcemaps/encoding/digests/_base.js.map
