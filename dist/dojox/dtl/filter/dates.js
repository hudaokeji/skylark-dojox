/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","../utils/date"],function(t,e,n){var i=t.getObject("filter.dates",!0,e);return t.mixin(i,{_toDate:function(t){return t instanceof Date?t:(t=new Date(t)).getTime()==new Date(0).getTime()?"":t},date:function(t,e){return(t=i._toDate(t))?(e=e||"N j, Y",n.format(t,e)):""},time:function(t,e){return(t=i._toDate(t))?(e=e||"P",n.format(t,e)):""},timesince:function(t,e){if(!(t=i._toDate(t)))return"";var r=n.timesince;return e?r(e,t):r(t)},timeuntil:function(t,e){if(!(t=i._toDate(t)))return"";var r=n.timesince;return r(e||new Date,t)}}),i});
//# sourceMappingURL=../../sourcemaps/dtl/filter/dates.js.map
