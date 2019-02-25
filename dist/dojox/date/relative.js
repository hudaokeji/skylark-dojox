/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["..","dojo/_base/lang","dojo/date/locale","dojo/i18n"],function(e,t,a,r){var o=t.getObject("date.relative",!0,e),l=dojo.delegate,n=a._getGregorianBundle,c=a.format;function d(e){return(e=new Date(e)).setHours(0,0,0,0),e}return o.format=function(e,t){var a=d((t=t||{}).relativeDate||new Date),o=a.getTime()-d(e).getTime(),i={locale:t.locale};if(0===o)return c(e,l(i,{selector:"time"}));if(o<=5184e5&&o>0&&!1!==t.weekCheck)return c(e,l(i,{selector:"date",datePattern:"EEE"}))+" "+c(e,l(i,{selector:"time",formatLength:"short"}));if(e.getFullYear()==a.getFullYear()){var u=n(r.normalizeLocale(t.locale));return c(e,l(i,{selector:"date",datePattern:u["dateFormatItem-MMMd"]}))}return c(e,l(i,{selector:"date",formatLength:"medium",locale:t.locale}))},o});
//# sourceMappingURL=../sourcemaps/date/relative.js.map
