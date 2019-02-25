/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","../../math/BigInteger","../../math/random/Simple"],function(n,t,e,r){n.experimental("dojox.encoding.crypto.RSAKey");var o=function(){return new r};return t("dojox.encoding.crypto.RSAKey",null,{constructor:function(n){this.rngf=n||o,this.e=0,this.n=this.d=this.p=this.q=this.dmp1=this.dmq1=this.coeff=null},setPublic:function(n,t){if(!(n&&t&&n.length&&t.length))throw new Error("Invalid RSA public key");this.n=new e(n,16),this.e=parseInt(t,16)},encrypt:function(n){var t=function(n,t,r){if(t<n.length+11)throw new Error("Message too long for RSA");for(var o=new Array(t),i=n.length;i&&t;)o[--t]=n.charCodeAt(--i);o[--t]=0;for(var h=r(),s=[0];t>2;){for(s[0]=0;0==s[0];)h.nextBytes(s);o[--t]=s[0]}return o[--t]=2,o[--t]=0,h.destroy(),new e(o)}(n,this.n.bitLength()+7>>3,this.rngf);if(!t)return null;var r=t.modPowInt(this.e,this.n);if(!r)return null;var o=r.toString(16);return o.length%2?"0"+o:o}})});
//# sourceMappingURL=../../sourcemaps/encoding/crypto/RSAKey.js.map
