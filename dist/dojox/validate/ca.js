/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base","./regexp","./us"],function(e,n,r,t){var i=e.getObject("ca",!0,n);return e.mixin(i,{isPhoneNumber:function(e){return t.isPhoneNumber(e)},isProvince:function(e){return new RegExp("^"+r.ca.province()+"$","i").test(e)},isSocialInsuranceNumber:function(e){return n.isNumberFormat(e,{format:["###-###-###","### ### ###","#########"]})},isPostalCode:function(e){return new RegExp("^"+r.ca.postalCode()+"$","i").test(e)}}),i});
//# sourceMappingURL=../sourcemaps/validate/ca.js.map
