/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojox/calendar/Calendar","dojox/calendar/MonthColumnView","dojox/calendar/VerticalRenderer","dojox/calendar/Mouse","dojox/calendar/Keyboard","dojo/text!./CalendarMonthColumn.html"],function(t,e,n,i,o,a,s,r,h){return t("demo.ExtendedCalendar",i,{templateString:h,verticalRenderer:a,_createDefaultViews:function(){return this.inherited(arguments),this.monthColumnView=t([o,r,s])({verticalRenderer:a}),this.monthColumnView.on("columnHeaderClick",e.hitch(this,function(t){this.set("dateInterval","month"),this.set("dateIntervalSteps",1),this.set("date",t.date)})),[this.columnView,this.matrixView,this.monthColumnView]},_computeCurrentView:function(t,e,n){return n>62?this.monthColumnView:this.inherited(arguments)},_configureView:function(t,e,n,i){if("monthColumns"==t.viewKind){var o=n[0].getMonth(),a=this.newDate(n[0]);a.setMonth(o<6?0:6),t.set("startDate",a),t.set("columnCount",6)}else this.inherited(arguments)},configureButtons:function(){this.inherited(arguments),this.sixMonthButton&&this.own(n(this.sixMonthButton,"click",e.hitch(this,function(){this.set("dateIntervalSteps",6),this.set("dateInterval","month")})))},matrixViewRowHeaderClick:function(t){this.set("dateInterval","week"),this.set("dateIntervalSteps",1),this.set("date",t.date)}})});
//# sourceMappingURL=../../sourcemaps/calendar/tests/ExtendedCalendar.js.map
