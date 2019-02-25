/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.oo.mixin"),dojo.experimental("dojox.lang.oo.mixin"),dojo.require("dojox.lang.oo.Filter"),dojo.require("dojox.lang.oo.Decorator"),function(){var o=dojox.lang.oo,n=o.Filter,r=o.Decorator,i={},e=function(o){return o},t=function(o,n,r){return n},a=function(o,n,r,i){o[n]=r},u=dojo._extraNames,c=u.length,f=o.applyDecorator=function(o,n,i,e){return i instanceof r?(0,i.decorator)(n,i=f(o,n,i.value,e),e):o(n,i,e)};o.__mixin=function(o,n,r,e,t){var a,l,d,x,j,g;for(a in n)d=n[a],a in i&&i[a]===d||!(l=e(a,o,n,d))||l in o&&l in i&&i[l]===d||(j=o[l])!==(x=f(r,l,d,j))&&t(o,l,x,j);if(c)for(g=0;g<c;++g)d=n[a=u[g]],a in i&&i[a]===d||!(l=e(a,o,n,d))||l in o&&l in i&&i[l]===d||(j=o[l])!==(x=f(r,l,d,j))&&t(o,l,x,j);return o},o.mixin=function(i,u){for(var c,f,l=1,d=arguments.length;l<d;++l)(u=arguments[l])instanceof n?(f=u.filter,u=u.bag):f=e,u instanceof r?(c=u.decorator,u=u.value):c=t,o.__mixin(i,u,c,f,a);return i}}();
//# sourceMappingURL=../../sourcemaps/lang/oo/mixin.js.map
