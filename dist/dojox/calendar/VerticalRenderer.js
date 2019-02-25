/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/VerticalRenderer.html"],function(e,t,i,r,a){return e("dojox.calendar.VerticalRenderer",[t,i,r],{templateString:a,postCreate:function(){this.inherited(arguments),this._applyAttributes()},_isElementVisible:function(e,t,i,r){var a;switch(e){case"startTimeLabel":if(a=this.item.startTime,this.item.allDay||this.owner.isStartOfDay(a))return!1;break;case"endTimeLabel":if(a=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(a))return!1}return this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/calendar/VerticalRenderer.js.map
