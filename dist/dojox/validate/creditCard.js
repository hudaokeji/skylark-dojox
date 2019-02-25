/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base"],function(r,e){return e._cardInfo={mc:"5[1-5][0-9]{14}",ec:"5[1-5][0-9]{14}",vi:"4(?:[0-9]{12}|[0-9]{15})",ax:"3[47][0-9]{13}",dc:"3(?:0[0-5][0-9]{11}|[68][0-9]{12})",bl:"3(?:0[0-5][0-9]{11}|[68][0-9]{12})",di:"6011[0-9]{12}",jcb:"(?:3[0-9]{15}|(2131|1800)[0-9]{11})",er:"2(?:014|149)[0-9]{11}"},e.isValidCreditCard=function(r,a){return("er"==a.toLowerCase()||e.isValidLuhn(r))&&e.isValidCreditCardNumber(r,a.toLowerCase())},e.isValidCreditCardNumber=function(r,a){r=String(r).replace(/[- ]/g,"");var i=e._cardInfo,t=[];if(a){var n="^"+i[a.toLowerCase()]+"$";return!!n&&!!r.match(n)}for(var c in i)r.match("^"+i[c]+"$")&&t.push(c);return!!t.length&&t.join("|")},e.isValidCvv=function(a,i){var t;switch(r.isString(a)||(a=String(a)),i.toLowerCase()){case"mc":case"ec":case"vi":case"di":t="###";break;case"ax":t="####"}return!!t&&a.length&&e.isNumberFormat(a,{format:t})},e});
//# sourceMappingURL=../sourcemaps/validate/creditCard.js.map
