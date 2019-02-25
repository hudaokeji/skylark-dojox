/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dijit/Calendar"],function(e,a,t){return e("demo.DatePicker",t,{minDate:null,maxDate:null,getClassForDate:function(e,a){if(this.minDate&&this.maxDate){var t=this.dateModule;if(t.compare(e,this.minDate)>=0&&t.compare(e,this.maxDate)<=0)return"Highlighted"}return null}})});
//# sourceMappingURL=../../sourcemaps/calendar/tests/DatePicker.js.map
