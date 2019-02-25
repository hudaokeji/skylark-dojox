/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(a,l,n){return l.mixin(n,{repeat:function(l,r,e,o){o=o||a.global,r=n.lambda(r);var b=new Array(l),t=1;for(b[0]=e;t<l;b[t]=e=r.call(o,e),++t);return b},until:function(l,r,e,o){o=o||a.global,r=n.lambda(r),l=n.lambda(l);for(var b=[];!l.call(o,e);b.push(e),e=r.call(o,e));return b}}),n});
//# sourceMappingURL=../../sourcemaps/lang/functional/sequence.js.map
