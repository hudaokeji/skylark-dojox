/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define([],function(){return function(t,e,r,u){function n(r,n){n=n||t.outputTypes.Base64;var o=t.digest(t.toWord(r),8*r.length,u,e);switch(n){case t.outputTypes.Raw:return o;case t.outputTypes.Hex:return t.toHex(o);case t.outputTypes.String:return t._toString(o);default:return t.toBase64(o)}}return n.hmac=function(n,o,a){a=a||t.outputTypes.Base64;var s=t.toWord(o);s.length>16&&(s=t.digest(s,8*o.length,u,e));for(var c=r/32,p=new Array(c),i=new Array(c),g=0;g<c;g++)p[g]=909522486^s[g],i[g]=1549556828^s[g];var d=t.digest(p.concat(t.toWord(n)),r+8*n.length,u,e),y=t.digest(i.concat(d),r+e,u,e);switch(a){case t.outputTypes.Raw:return y;case t.outputTypes.Hex:return t.toHex(y);case t.outputTypes.String:return t._toString(y);default:return t.toBase64(y)}},n._hmac=n.hmac,n}});
//# sourceMappingURL=../../sourcemaps/encoding/digests/_sha2.js.map
