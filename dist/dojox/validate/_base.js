/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/regexp","dojo/number","./regexp"],function(e,n,t,r){var i=e.getObject("dojox.validate",!0);return i.isText=function(e,n){return n="object"==typeof n?n:{},!/^\s*$/.test(e)&&(("number"!=typeof n.length||n.length==e.length)&&(!("number"==typeof n.minlength&&n.minlength>e.length)&&!("number"==typeof n.maxlength&&n.maxlength<e.length)))},i._isInRangeCache={},i.isInRange=function(e,n){if(e=t.parse(e,n),isNaN(e))return!1;var r="number"==typeof(n="object"==typeof n?n:{}).max?n.max:1/0,a="number"==typeof n.min?n.min:-1/0,o="string"==typeof n.decimal?n.decimal:".",g=i._isInRangeCache,m=e+"max"+r+"min"+a+"dec"+o;return void 0!==g[m]?g[m]:(g[m]=!(e<a||e>r),g[m])},i.isNumberFormat=function(e,n){return new RegExp("^"+r.numberFormat(n)+"$","i").test(e)},i.isValidLuhn=function(n){var t,r,i=0;e.isString(n)||(n=String(n)),t=(n=n.replace(/[- ]/g,"")).length%2;for(var a=0;a<n.length;a++)r=parseInt(n.charAt(a)),a%2==t&&(r*=2),r>9&&(r-=9),i+=r;return!(i%10)},i});
//# sourceMappingURL=../sourcemaps/validate/_base.js.map
