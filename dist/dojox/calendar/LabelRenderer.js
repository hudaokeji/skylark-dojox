/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/LabelRenderer.html"],function(e,i,t,a,n){return e("dojox.calendar.LabelRenderer",[i,t,a],{templateString:n,_orientation:"horizontal",resizeEnabled:!1,visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:45,endTimeLabel:30},_isElementVisible:function(e,i,t,a){switch(e){case"startTimeLabel":if(this.item.allDay&&this.item.range[0].getTime()!==this.item.startTime.getTime())return!1}return this.inherited(arguments)},_displayValue:"inline",postCreate:function(){this.inherited(arguments),this._applyAttributes()}})});
//# sourceMappingURL=../sourcemaps/calendar/LabelRenderer.js.map
