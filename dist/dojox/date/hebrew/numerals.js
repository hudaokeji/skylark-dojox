/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../..","dojo/_base/lang","dojo/_base/array"],function(e,r,t){var n=r.getObject("date.hebrew.numerals",!0,e),a=function(e,r){if(e=e.replace("יה","טו").replace("יו","טז"),!r){var t=e.length;t>1?e=e.substr(0,t-1)+'"'+e.charAt(t-1):e+="׳"}return e},o=function(e){var r=0;return t.forEach(e,function(e){var t;-1!=(t="אבגדהוזחט".indexOf(e))?r+=++t:-1!=(t="יכלמנסעפצ".indexOf(e))?r+=10*++t:-1!=(t="קרשת".indexOf(e))&&(r+=100*++t)}),r},i=function(e){for(var r="",t=4,n=9;e;)if(e>=100*t)r+="קרשת".charAt(t-1),e-=100*t;else if(t>1)t--;else if(e>=10*n)r+="יכלמנסעפצ".charAt(n-1),e-=10*n;else{if(n>1){n--;continue}e>0&&(r+="אבגדהוזחט".charAt(e-1),e=0)}return r};return n.getYearHebrewLetters=function(e){return a(i(e%1e3))},n.parseYearHebrewLetters=function(e){return o(e)+5e3},n.getDayHebrewLetters=function(e,r){return a(i(e),r)},n.parseDayHebrewLetters=function(e){return o(e)},n.getMonthHebrewLetters=function(e){return a(i(e+1))},n.parseMonthHebrewLetters=function(e){var r=n.parseDayHebrewLetters(e)-1;if(-1==r||r>12)throw new Error("The month name is incorrect , month = "+r);return r},n});
//# sourceMappingURL=../../sourcemaps/date/hebrew/numerals.js.map
