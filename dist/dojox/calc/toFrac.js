/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojox/calc/_Executor"],function(r,n){var a;function t(r){function t(r){var a=Math.floor(1/r),t=n.approx(1/a);if(t==r)return{n:1,d:a};var o=a+1;if((t=n.approx(1/o))==r)return{n:1,d:o};if(a>=50)return null;var f=a+o;if((t=n.approx(2/f))==r)return{n:2,d:f};if(a>=34)return null;var u=r<t,i=2*f+(u?1:-1);if((t=n.approx(4/i))==r)return{n:4,d:i};var p=r<t;if(u&&!p||!u&&p){var e=f+i>>1;if((t=n.approx(3/e))==r)return{n:3,d:e}}if(a>=20)return null;for(var d=f+2*a,v=d+2,h=5;d<=100;h++){d+=a,v+=o;var M=u?v+d+1>>1:d,l=u?v:v+d-1>>1;M=p?M+l>>1:M,l=p?l:M+l>>1;for(var c=M;c<=l;c++)if(!(!1&h&&!1&c)){if((t=n.approx(h/c))==r)return{n:h,d:c};if(t<r)break}}return null}for(var o in r=Math.abs(r),a){var f=a[o],u=r/f,i=Math.floor(u);if(0==(u=n.approx(u-i)))return{mt:o,m:f,n:i,d:1};var p=t(u);if(p)return{mt:o,m:f,n:i*p.d+p.n,d:p.d}}return null}return function(){var r=[5,6,7,10,11,13,14,15,17,19,21,22,23,26,29,30,31,33,34,35,37,38,39,41,42,43,46,47,51,53,55,57,58,59,61,62,65,66,67,69,70,71,73,74,77,78,79,82,83,85,86,87,89,91,93,94,95,97];for(var n in a={1:1,"√(2)":Math.sqrt(2),"√(3)":Math.sqrt(3),pi:Math.PI},r){var t=r[n];a["√("+t+")"]=Math.sqrt(t)}a["√(pi)"]=Math.sqrt(Math.PI)}(),r.mixin(n,{toFrac:function(r){var n=t(r);return n?(r<0?"-":"")+(1==n.m?"":1==n.n?"":n.n+"*")+(1==n.m?n.n:n.mt)+(1==n.d?"":"/"+n.d):r},pow:function(r,n){if(r>0||(a=n,Math.floor(a)==a))return Math.pow(r,n);var a,o=t(n);return r>=0?o&&1==o.m?Math.pow(Math.pow(r,1/o.d),n<0?-o.n:o.n):Math.pow(r,n):o&&1&o.d?Math.pow(Math.pow(-Math.pow(-r,1/o.d),n<0?-o.n:o.n),o.m):NaN}})});
//# sourceMappingURL=../sourcemaps/calc/toFrac.js.map
