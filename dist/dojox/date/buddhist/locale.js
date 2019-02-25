/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../..","dojo/_base/lang","dojo/_base/array","dojo/date","dojo/i18n","dojo/regexp","dojo/string","./Date","dojo/i18n!dojo/cldr/nls/buddhist"],function(e,a,r,t,o,s,n,c){var i=a.getObject("date.buddhist.locale",!0,e);function d(e,a,r,o,s){return s.replace(/([a-z])\1*/gi,function(r){var o,c,i=r.charAt(0),d=r.length,u=["abbr","wide","narrow"];switch(i){case"G":o=a.eraAbbr[0];break;case"y":o=String(e.getFullYear());break;case"M":var l=e.getMonth();if(d<3)o=l+1,c=!0;else{var m=["months","format",u[d-3]].join("-");o=a[m][l]}break;case"d":o=e.getDate(!0),c=!0;break;case"E":var b=e.getDay();if(d<3)o=b+1,c=!0;else{var f=["days","format",u[d-3]].join("-");o=a[f][b]}break;case"a":var h=e.getHours()<12?"am":"pm";o=a["dayPeriods-format-wide-"+h];break;case"h":case"H":case"K":case"k":var g=e.getHours();switch(i){case"h":o=g%12||12;break;case"H":o=g;break;case"K":o=g%12;break;case"k":o=g||24}c=!0;break;case"m":o=e.getMinutes(),c=!0;break;case"s":o=e.getSeconds(),c=!0;break;case"S":o=Math.round(e.getMilliseconds()*Math.pow(10,d-3)),c=!0;break;case"z":if(o=t.getTimezoneName(e.toGregorian()))break;d=4;case"Z":var k=e.toGregorian().getTimezoneOffset(),p=[k<=0?"+":"-",n.pad(Math.floor(Math.abs(k)/60),2),n.pad(Math.abs(k)%60,2)];4==d&&(p.splice(0,0,"GMT"),p.splice(3,0,":")),o=p.join("");break;default:throw new Error("dojox.date.buddhist.locale.formatPattern: invalid pattern char: "+s)}return c&&(o=n.pad(o,d)),o})}function u(e,a,t,o){var s=function(e){return e};a=a||s,t=t||s,o=o||s;var n=e.match(/(''|[^'])+/g),c="'"==e.charAt(0);return r.forEach(n,function(e,r){e?(n[r]=(c?t:a)(e),c=!c):n[r]=""}),o(n.join(""))}function l(e,a,r,t){t=s.escapeString(t);o.normalizeLocale(r.locale);return t.replace(/([a-z])\1*/gi,function(t){var o,s=t.charAt(0),n=t.length,c="";switch(r.strict?(n>1&&(c="0{"+(n-1)+"}"),n>2&&"0{"+(n-2)+"}"):(c="0?","0{0,2}"),s){case"y":o="\\d+";break;case"M":o=n>2?"\\S+":c+"[1-9]|1[0-2]";break;case"d":o="[12]\\d|"+c+"[1-9]|3[01]";break;case"E":o="\\S+";break;case"h":o=c+"[1-9]|1[0-2]";break;case"k":o=c+"\\d|1[01]";break;case"H":o=c+"\\d|1\\d|2[0-3]";break;case"K":o=c+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":o=c+"\\d|[0-5]\\d";break;case"S":o="\\d{"+n+"}";break;case"a":var i=r.am||a["dayPeriods-format-wide-am"],d=r.pm||a["dayPeriods-format-wide-pm"];r.strict?o=i+"|"+d:(o=i+"|"+d,i!=i.toLowerCase()&&(o+="|"+i.toLowerCase()),d!=d.toLowerCase()&&(o+="|"+d.toLowerCase()));break;default:o=".*"}return e&&e.push(t),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}i.format=function(e,r){r=r||{};var t=o.normalizeLocale(r.locale),s=r.formatLength||"short",n=i._getBuddhistBundle(t),c=[],l=a.hitch(this,d,e,n,t,r.fullYear);if("year"==r.selector)return e.getFullYear();if("time"!=r.selector){var m=r.datePattern||n["dateFormat-"+s];m&&c.push(u(m,l))}if("date"!=r.selector){var b=r.timePattern||n["timeFormat-"+s];b&&c.push(u(b,l))}return c.join(" ")},i.regexp=function(e){return i._parseInfo(e).regexp},i._parseInfo=function(e){e=e||{};var r=o.normalizeLocale(e.locale),t=i._getBuddhistBundle(r),s=e.formatLength||"short",n=e.datePattern||t["dateFormat-"+s],c=e.timePattern||t["timeFormat-"+s],d=[];return{regexp:u("date"==e.selector?n:"time"==e.selector?c:void 0===c?n:n+" "+c,a.hitch(this,l,d,t,e)),tokens:d,bundle:t}},i.parse=function(e,a){e=e.replace(/[\u200E\u200F\u202A-\u202E]/g,""),a||(a={});var t=i._parseInfo(a),s=t.tokens,n=t.bundle,d=new RegExp("^"+t.regexp+"$").exec(e);o.normalizeLocale(a.locale);if(!d)return null;var u=[2513,0,1,0,0,0,0],l="",m=["abbr","wide","narrow"],b=(r.every(d,function(e,t){if(!t)return!0;var o=s[t-1],c=o.length;switch(o.charAt(0)){case"y":u[0]=Number(e);break;case"M":if(c>2){var i=n["months-format-"+m[c-3]].concat();if(a.strict||(e=e.replace(".","").toLowerCase(),i=r.map(i,function(e){return e?e.replace(".","").toLowerCase():e})),-1==(e=r.indexOf(i,e)))return!1;c}else e--;u[1]=Number(e);break;case"D":u[1]=0;case"d":u[2]=Number(e);break;case"a":var d=a.am||n["dayPeriods-format-wide-am"],b=a.pm||n["dayPeriods-format-wide-pm"];if(!a.strict){var f=/\./g;e=e.replace(f,"").toLowerCase(),d=d.replace(f,"").toLowerCase(),b=b.replace(f,"").toLowerCase()}if(a.strict&&e!=d&&e!=b)return!1;l=e==b?"p":e==d?"a":"";break;case"K":24==e&&(e=0);case"h":case"H":case"k":u[3]=Number(e);break;case"m":u[4]=Number(e);break;case"s":u[5]=Number(e);break;case"S":u[6]=Number(e)}return!0}),+u[3]);return"p"===l&&b<12?u[3]=b+12:"a"===l&&12==b&&(u[3]=0),new c(u[0],u[1],u[2],u[3],u[4],u[5],u[6])};var m=[];return i.addCustomFormats=function(e,a){m.push({pkg:e,name:a})},i._getBuddhistBundle=function(e){var t={};return r.forEach(m,function(r){var s=o.getLocalization(r.pkg,r.name,e);t=a.mixin(t,s)},this),t},i.addCustomFormats("dojo.cldr","buddhist"),i.getNames=function(e,a,r,t,o){var s,n=i._getBuddhistBundle(t),c=[e,r,a];"standAlone"==r&&(1==(s=n[c.join("-")])[0]&&(s=void 0));return c[1]="format",(s||n[c.join("-")]).concat()},i});
//# sourceMappingURL=../../sourcemaps/date/buddhist/locale.js.map
