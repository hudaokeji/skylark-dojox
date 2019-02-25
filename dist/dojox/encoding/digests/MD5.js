/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(r){var t=8;function n(t,n,e,o,u,d){return r.addWords((a=r.addWords(r.addWords(n,t),r.addWords(o,d)))<<(s=u)|a>>>32-s,e);var a,s}function e(r,t,e,o,u,d,a){return n(t&e|~t&o,r,t,u,d,a)}function o(r,t,e,o,u,d,a){return n(t&o|e&~o,r,t,u,d,a)}function u(r,t,e,o,u,d,a){return n(t^e^o,r,t,u,d,a)}function d(r,t,e,o,u,d,a){return n(e^(t|~o),r,t,u,d,a)}function a(t,n){t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;for(var a=1732584193,s=-271733879,c=-1732584194,i=271733878,T=0;T<t.length;T+=16){var p=a,f=s,g=c,W=i;s=d(s=d(s=d(s=d(s=u(s=u(s=u(s=u(s=o(s=o(s=o(s=o(s=e(s=e(s=e(s=e(s,c=e(c,i=e(i,a=e(a,s,c,i,t[T+0],7,-680876936),s,c,t[T+1],12,-389564586),a,s,t[T+2],17,606105819),i,a,t[T+3],22,-1044525330),c=e(c,i=e(i,a=e(a,s,c,i,t[T+4],7,-176418897),s,c,t[T+5],12,1200080426),a,s,t[T+6],17,-1473231341),i,a,t[T+7],22,-45705983),c=e(c,i=e(i,a=e(a,s,c,i,t[T+8],7,1770035416),s,c,t[T+9],12,-1958414417),a,s,t[T+10],17,-42063),i,a,t[T+11],22,-1990404162),c=e(c,i=e(i,a=e(a,s,c,i,t[T+12],7,1804603682),s,c,t[T+13],12,-40341101),a,s,t[T+14],17,-1502002290),i,a,t[T+15],22,1236535329),c=o(c,i=o(i,a=o(a,s,c,i,t[T+1],5,-165796510),s,c,t[T+6],9,-1069501632),a,s,t[T+11],14,643717713),i,a,t[T+0],20,-373897302),c=o(c,i=o(i,a=o(a,s,c,i,t[T+5],5,-701558691),s,c,t[T+10],9,38016083),a,s,t[T+15],14,-660478335),i,a,t[T+4],20,-405537848),c=o(c,i=o(i,a=o(a,s,c,i,t[T+9],5,568446438),s,c,t[T+14],9,-1019803690),a,s,t[T+3],14,-187363961),i,a,t[T+8],20,1163531501),c=o(c,i=o(i,a=o(a,s,c,i,t[T+13],5,-1444681467),s,c,t[T+2],9,-51403784),a,s,t[T+7],14,1735328473),i,a,t[T+12],20,-1926607734),c=u(c,i=u(i,a=u(a,s,c,i,t[T+5],4,-378558),s,c,t[T+8],11,-2022574463),a,s,t[T+11],16,1839030562),i,a,t[T+14],23,-35309556),c=u(c,i=u(i,a=u(a,s,c,i,t[T+1],4,-1530992060),s,c,t[T+4],11,1272893353),a,s,t[T+7],16,-155497632),i,a,t[T+10],23,-1094730640),c=u(c,i=u(i,a=u(a,s,c,i,t[T+13],4,681279174),s,c,t[T+0],11,-358537222),a,s,t[T+3],16,-722521979),i,a,t[T+6],23,76029189),c=u(c,i=u(i,a=u(a,s,c,i,t[T+9],4,-640364487),s,c,t[T+12],11,-421815835),a,s,t[T+15],16,530742520),i,a,t[T+2],23,-995338651),c=d(c,i=d(i,a=d(a,s,c,i,t[T+0],6,-198630844),s,c,t[T+7],10,1126891415),a,s,t[T+14],15,-1416354905),i,a,t[T+5],21,-57434055),c=d(c,i=d(i,a=d(a,s,c,i,t[T+12],6,1700485571),s,c,t[T+3],10,-1894986606),a,s,t[T+10],15,-1051523),i,a,t[T+1],21,-2054922799),c=d(c,i=d(i,a=d(a,s,c,i,t[T+8],6,1873313359),s,c,t[T+15],10,-30611744),a,s,t[T+6],15,-1560198380),i,a,t[T+13],21,1309151649),c=d(c,i=d(i,a=d(a,s,c,i,t[T+4],6,-145523070),s,c,t[T+11],10,-1120210379),a,s,t[T+2],15,718787259),i,a,t[T+9],21,-343485551),a=r.addWords(a,p),s=r.addWords(s,f),c=r.addWords(c,g),i=r.addWords(i,W)}return[a,s,c,i]}return r.MD5=function(n,e){var o=e||r.outputTypes.Base64,u=a(r.stringToWord(n),n.length*t);switch(o){case r.outputTypes.Raw:return u;case r.outputTypes.Hex:return r.wordToHex(u);case r.outputTypes.String:return r.wordToString(u);default:return r.wordToBase64(u)}},r.MD5._hmac=function(n,e,o){var u=o||r.outputTypes.Base64,d=function(n,e){var o=r.stringToWord(e);o.length>16&&(o=a(o,e.length*t));for(var u=[],d=[],s=0;s<16;s++)u[s]=909522486^o[s],d[s]=1549556828^o[s];var c=a(u.concat(r.stringToWord(n)),512+n.length*t);return a(d.concat(c),640)}(n,e);switch(u){case r.outputTypes.Raw:return d;case r.outputTypes.Hex:return r.wordToHex(d);case r.outputTypes.String:return r.wordToString(d);default:return r.wordToBase64(d)}},r.MD5});
//# sourceMappingURL=../../sourcemaps/encoding/digests/MD5.js.map
