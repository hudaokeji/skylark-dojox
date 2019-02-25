/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/sniff","dojo/_base/event","dojo/_base/lang","dojo/_base/array","dojo/cldr/supplemental","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/date","dojo/date/locale","dojo/_base/fx","dojo/fx","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./StoreMixin","./StoreManager","dojox/widget/_Invalidating","dojox/widget/Selection","dojox/calendar/time","dojo/i18n!./nls/buttons"],function(t,e,i,n,a,s,o,r,d,h,l,u,c,m,f,v,g,_,w,I,D,p,R,y,C){return t("dojox.calendar.CalendarBase",[g,_,w,I,p,R],{baseClass:"dojoxCalendar",datePackage:u,startDate:null,endDate:null,date:null,minDate:null,maxDate:null,dateInterval:"week",dateIntervalSteps:1,viewContainer:null,firstDayOfWeek:-1,formatItemTimeFunc:null,editable:!0,moveEnabled:!0,resizeEnabled:!0,columnView:null,matrixView:null,columnViewProps:null,matrixViewProps:null,createOnGridClick:!1,createItemFunc:null,currentView:null,_currentViewIndex:-1,views:null,_calendar:"gregorian",constructor:function(t){this.views=[],this.invalidatingProperties=["store","items","startDate","endDate","views","date","minDate","maxDate","dateInterval","dateIntervalSteps","firstDayOfWeek"],t=t||{},this._calendar=t.datePackage?t.datePackage.substr(t.datePackage.lastIndexOf(".")+1):this._calendar,this.dateModule=t.datePackage?n.getObject(t.datePackage,!1):u,this.dateClassObj=this.dateModule.Date||Date,this.dateLocaleModule=t.datePackage?n.getObject(t.datePackage+".locale",!1):c,this.invalidateRendering(),this.storeManager=new D({owner:this,_ownerItemsProperty:"items"}),this.storeManager.on("layoutInvalidated",n.hitch(this,this._refreshItemsRendering)),this.storeManager.on("dataLoaded",n.hitch(this,function(t){this.set("items",t)})),this.decorationStoreManager=new D({owner:this,_ownerItemsProperty:"decorationItems"}),this.decorationStoreManager.on("layoutInvalidated",n.hitch(this,this._refreshDecorationItemsRendering)),this.decorationStoreManager.on("dataLoaded",n.hitch(this,function(t){this.set("decorationItems",t)}))},buildRendering:function(){this.inherited(arguments),null!=this.views&&0!=this.views.length||this.set("views",this._createDefaultViews())},_applyAttributes:function(){this._applyAttr=!0,this.inherited(arguments),delete this._applyAttr},_setStartDateAttr:function(t){this._set("startDate",t),this._timeRangeInvalidated=!0,this._startDateChanged=!0},_setEndDateAttr:function(t){this._set("endDate",t),this._timeRangeInvalidated=!0,this._endDateChanged=!0},_setDateAttr:function(t){this._set("date",t),this._timeRangeInvalidated=!0,this._dateChanged=!0},_setDateIntervalAttr:function(t){this._set("dateInterval",t),this._timeRangeInvalidated=!0},_setDateIntervalStepsAttr:function(t){this._set("dateIntervalSteps",t),this._timeRangeInvalidated=!0},_setFirstDayOfWeekAttr:function(t){this._set("firstDayOfWeek",t),null!=this.get("date")&&"week"==this.get("dateInterval")&&(this._timeRangeInvalidated=!0)},_setTextDirAttr:function(t){a.forEach(this.views,function(e){e.set("textDir",t)})},refreshRendering:function(){this.inherited(arguments),this._validateProperties()},_refreshItemsRendering:function(){this.currentView&&this.currentView._refreshItemsRendering()},_refreshDecorationItemsRendering:function(){this.currentView&&this.currentView._refreshDecorationItemsRendering()},resize:function(t){t&&l.setMarginBox(this.domNode,t),this.currentView&&this.currentView.resize()},_validateProperties:function(){var t=this.dateModule,e=this.get("startDate"),i=this.get("endDate"),s=this.get("date");(this.firstDayOfWeek<-1||this.firstDayOfWeek>6)&&this._set("firstDayOfWeek",0);var o=this.get("minDate"),r=this.get("maxDate");if(o&&r&&t.compare(o,r)>0){var d=o;this._set("minDate",r),this._set("maxDate",d)}if(null!=s||null==e&&null==i){null==this.date&&(this._set("date",new this.dateClassObj),this._timeRangeInvalidated=!0);var h=this.get("dateInterval");"day"!=h&&"week"!=h&&"month"!=h&&(this._set("dateInterval","day"),this._timeRangeInvalidated=!0);var l=this.get("dateIntervalSteps");n.isString(l)&&(l=parseInt(l),this._set("dateIntervalSteps",l)),l<=0&&(this.set("dateIntervalSteps",1),this._timeRangeInvalidated=!0)}else null==e&&(e=new this.dateClassObj,this._set("startDate",e),this._timeRangeInvalidated=!0),null==i&&(i=new this.dateClassObj,this._set("endDate",i),this._timeRangeInvalidated=!0),t.compare(e,i)>0&&(i=t.add(e,"day",1),this._set("endDate",i),this._timeRangeInvalidated=!0);if(this._timeRangeInvalidated){this._timeRangeInvalidated=!1;var u=this.computeTimeInterval();if(null!=this._timeInterval&&0==t.compare(this._timeInterval[0],u[0])&&0==t.compare(this._timeInterval[1],u[1]))return void(this._dateChanged?(this._dateChanged=!1,null!=this.lastValidDate&&this._set("date",this.lastValidDate)):(this._startDateChanged||this._endDateChanged)&&(this._startDateChanged=!1,this._endDateChanged=!1,this._set("startDate",this._lastValidStartDate),this._set("endDate",this._lastValidEndDate)));this._dateChanged?(this._lastValidDate=this.get("date"),this._dateChanged=!1):(this._startDateChanged||this._endDateChanged)&&(this._lastValidStartDate=this.get("startDate"),this._lastValidEndDate=this.get("endDate"),this._startDateChanged=!1,this._endDateChanged=!1),this.onTimeIntervalChange({oldStartTime:null==this._timeInterval?null:this._timeInterval[0],oldEndTime:null==this._timeInterval?null:this._timeInterval[1],startTime:u[0],endTime:u[1]}),this._timeInterval=u;var c=this.dateModule.difference(this._timeInterval[0],this._timeInterval[1],"day"),m=this._computeCurrentView(u[0],u[1],c),f=a.indexOf(this.views,m);if(null==m||-1==f)return;this._performViewTransition(m,f,u,c)}},_performViewTransition:function(t,i,a,s){var o=this.currentView;if(this.animateRange&&(!e("ie")||e("ie")>8))if(o){o.beforeDeactivate();var r=this.isLeftToRight(),d="left"==this._animRangeInDir||null==this._animRangeInDir,h="left"==this._animRangeOutDir||null==this._animRangeOutDir;this._animateRange(this.currentView.domNode,h&&r,!1,0,h?-100:100,n.hitch(this,function(){o.afterDeactivate(),t.beforeActivate(),this.animateRangeTimer=setTimeout(n.hitch(this,function(){this._applyViewChange(t,i,a,s),this._animateRange(this.currentView.domNode,d&&r,!0,d?-100:100,0,function(){t.afterActivate()}),this._animRangeInDir=null,this._animRangeOutDir=null}),100)}))}else t.beforeActivate(),this._applyViewChange(t,i,a,s),t.afterActivate();else o&&o.beforeDeactivate(),t.beforeActivate(),this._applyViewChange(t,i,a,s),o&&o.afterDeactivate(),t.afterActivate()},onViewConfigurationChange:function(t){},_applyViewChange:function(t,i,n,a){this._configureView(t,i,n,a),this.onViewConfigurationChange(t),i!=this._currentViewIndex&&(null==this.currentView?(t.set("items",this.items),t.set("decorationItems",this.decorationItems),this.set("currentView",t)):null==this.items||0==this.items.length?(this.set("currentView",t),this.animateRange&&(!e("ie")||e("ie")>8)&&d.set(this.currentView.domNode,"opacity",0),t.set("items",this.items),t.set("decorationItems",this.decorationItems)):(this.currentView=t,t.set("items",this.items),t.set("decorationItems",this.decorationItems),this.set("currentView",t),this.animateRange&&(!e("ie")||e("ie")>8)&&d.set(this.currentView.domNode,"opacity",0)))},_timeInterval:null,computeTimeInterval:function(){var t=this.get("date"),e=this.get("minDate"),i=this.get("maxDate"),n=this.dateModule;if(null==t){var a=this.get("startDate"),s=n.add(this.get("endDate"),"day",1);if(null!=e||null!=i){var o=this.dateModule.difference(a,s,"day");n.compare(e,a)>0&&(a=e,s=n.add(a,"day",o)),n.compare(i,s)<0&&(s=i,a=n.add(s,"day",-o)),n.compare(e,a)>0&&(a=e,s=i)}return[this.floorToDay(a),this.floorToDay(s)]}var r=this._computeTimeIntervalImpl(t);if(null!=e){var d=this._computeTimeIntervalImpl(e);n.compare(d[0],r[0])>0&&(r=d)}if(null!=i){var h=this._computeTimeIntervalImpl(i);n.compare(h[1],r[1])<0&&(r=h)}return r},_computeTimeIntervalImpl:function(t){var e,i=this.dateModule,n=this.floorToDay(t),a=this.get("dateInterval"),s=this.get("dateIntervalSteps");switch(a){case"day":e=i.add(n,"day",s);break;case"week":n=this.floorToWeek(n),e=i.add(n,"week",s);break;case"month":n.setDate(1),e=i.add(n,"month",s);break;default:e=i.add(n,"day",1)}return[n,e]},onTimeIntervalChange:function(t){},views:null,_setViewsAttr:function(t){if(!this._applyAttr)for(var e=0;e<this.views.length;e++)this._onViewRemoved(this.views[e]);if(null!=t)for(e=0;e<t.length;e++)this._onViewAdded(t[e]);this._set("views",null==t?[]:t.concat())},_getViewsAttr:function(){return this.views.concat()},_createDefaultViews:function(){},addView:function(t,e){(e<=0||e>this.views.length)&&(e=this.views.length),this.views.splice(e,t),this._onViewAdded(t)},removeView:function(t){index<0||index>=this.views.length||(this._onViewRemoved(this.views[index]),this.views.splice(index,1))},_onViewAdded:function(t){t.owner=this,t.buttonContainer=this.buttonContainer,t._calendar=this._calendar,t.datePackage=this.datePackage,t.dateModule=this.dateModule,t.dateClassObj=this.dateClassObj,t.dateLocaleModule=this.dateLocaleModule,d.set(t.domNode,"display","none"),r.add(t.domNode,"view"),h.place(t.domNode,this.viewContainer),this.onViewAdded(t)},onViewAdded:function(t){},_onViewRemoved:function(t){t.owner=null,t.buttonContainer=null,r.remove(t.domNode,"view"),this.viewContainer.removeChild(t.domNode),this.onViewRemoved(t)},onViewRemoved:function(t){},_setCurrentViewAttr:function(t){var e=a.indexOf(this.views,t);if(-1!=e){var i=this.get("currentView");this._currentViewIndex=e,this._set("currentView",t),this._showView(i,t),this.onCurrentViewChange({oldView:i,newView:t})}},_getCurrentViewAttr:function(){return this.views[this._currentViewIndex]},onCurrentViewChange:function(t){},_configureView:function(t,e,i,n){var a=this.dateModule;if("columns"==t.viewKind)t.set("startDate",i[0]),t.set("columnCount",n);else if("matrix"==t.viewKind)if(n>7){var s=this.floorToWeek(i[0]),o=this.floorToWeek(i[1]);0!=a.compare(o,i[1])&&(o=this.dateModule.add(o,"week",1)),n=this.dateModule.difference(s,o,"day"),t.set("startDate",s),t.set("columnCount",7),t.set("rowCount",Math.ceil(n/7)),t.set("refStartTime",i[0]),t.set("refEndTime",i[1])}else t.set("startDate",i[0]),t.set("columnCount",n),t.set("rowCount",1),t.set("refStartTime",null),t.set("refEndTime",null)},_computeCurrentView:function(t,e,i){return i<=7?this.columnView:this.matrixView},matrixViewRowHeaderClick:function(t){var e=this.matrixView.getExpandedRowIndex();if(e==t.index)this.matrixView.collapseRow();else if(-1==e)this.matrixView.expandRow(t.index);else{var i=this.matrixView.on("expandAnimationEnd",n.hitch(this,function(){i.remove(),this.matrixView.expandRow(t.index)}));this.matrixView.collapseRow()}},columnViewColumnHeaderClick:function(t){0==this.dateModule.compare(t.date,this._timeInterval[0])&&"day"==this.dateInterval&&1==this.dateIntervalSteps?this.set("dateInterval","week"):(this.set("date",t.date),this.set("dateInterval","day"),this.set("dateIntervalSteps",1))},viewChangeDuration:0,_showView:function(t,i){null!=t&&d.set(t.domNode,"display","none"),null!=i&&(d.set(i.domNode,"display","block"),i.resize(),(!e("ie")||e("ie")>7)&&d.set(i.domNode,"opacity","1"))},_setItemsAttr:function(t){this._set("items",t),this.currentView&&(this.currentView.set("items",t),this._isEditing||this.currentView.invalidateRendering())},_setDecorationItemsAttr:function(t){this._set("decorationItems",t),this.currentView&&(this.currentView.set("decorationItems",t),this.currentView.invalidateRendering())},_setDecorationStoreAttr:function(t){this._set("decorationStore",t),this.decorationStore=t,this.decorationStoreManager.set("store",t)},floorToDay:function(t,e){return y.floorToDay(t,e,this.dateClassObj)},floorToWeek:function(t){return y.floorToWeek(t,this.dateClassObj,this.dateModule,this.firstDayOfWeek,this.locale)},newDate:function(t){return y.newDate(t,this.dateClassObj)},isToday:function(t){return y.isToday(t,this.dateClassObj)},isStartOfDay:function(t){return y.isStartOfDay(t,this.dateClassObj,this.dateModule)},floorDate:function(t,e,i,n){return y.floor(t,e,i,n,this.classFuncObj)},isOverlapping:function(t,e,i,n,a,s){return y.isOverlapping(t,e,i,n,a,s)},animateRange:!0,animationRangeDuration:400,_animateRange:function(t,e,i,n,a,s){this.animateRangeTimer&&(clearTimeout(this.animateRangeTimer),delete this.animateRangeTimer);var o=i?m.fadeIn:m.fadeOut;d.set(t,{left:n+"px",right:-n+"px"}),f.combine([m.animateProperty({node:t,properties:{left:a,right:-a},duration:this.animationRangeDuration/2,onEnd:s}),o({node:t,duration:this.animationRangeDuration/2})]).play()},_animRangeOutDir:null,_animRangeOutDir:null,nextRange:function(){this._animRangeOutDir="left",this._animRangeInDir="right",this._navigate(1)},previousRange:function(){this._animRangeOutDir="right",this._animRangeInDir="left",this._navigate(-1)},_navigate:function(t){var e=this.get("date"),i=this.dateModule;if(null==e){var n=this.get("startDate"),a=this.get("endDate"),s=i.difference(n,a,"day");1==t?(a=i.add(a,"day",1),this.set("startDate",a),this.set("endDate",i.add(a,"day",s))):(n=i.add(n,"day",-1),this.set("startDate",i.add(n,"day",-s)),this.set("endDate",n))}else{var o=this.get("dateInterval"),r=this.get("dateIntervalSteps");this.set("date",i.add(e,o,t*r))}},goToday:function(){this.set("date",this.floorToDay(new this.dateClassObj,!0)),this.set("dateInterval","day"),this.set("dateIntervalSteps",1)},postCreate:function(){this.inherited(arguments),this.configureButtons()},configureButtons:function(){var t=!this.isLeftToRight();if(this.previousButton&&(this.previousButton.set("label",C[t?"nextButton":"previousButton"]),this.own(v(this.previousButton,"click",n.hitch(this,this.previousRange)))),this.nextButton&&(this.nextButton.set("label",C[t?"previousButton":"nextButton"]),this.own(v(this.nextButton,"click",n.hitch(this,this.nextRange)))),t&&this.previousButton&&this.nextButton){var e=this.previousButton;this.previousButton=this.nextButton,this.nextButton=e}this.todayButton&&(this.todayButton.set("label",C.todayButton),this.own(v(this.todayButton,"click",n.hitch(this,this.todayButtonClick)))),this.dayButton&&(this.dayButton.set("label",C.dayButton),this.own(v(this.dayButton,"click",n.hitch(this,this.dayButtonClick)))),this.weekButton&&(this.weekButton.set("label",C.weekButton),this.own(v(this.weekButton,"click",n.hitch(this,this.weekButtonClick)))),this.fourDaysButton&&(this.fourDaysButton.set("label",C.fourDaysButton),this.own(v(this.fourDaysButton,"click",n.hitch(this,this.fourDaysButtonClick)))),this.monthButton&&(this.monthButton.set("label",C.monthButton),this.own(v(this.monthButton,"click",n.hitch(this,this.monthButtonClick))))},todayButtonClick:function(t){this.goToday()},dayButtonClick:function(t){null==this.get("date")&&this.set("date",this.floorToDay(new this.dateClassObj,!0)),this.set("dateInterval","day"),this.set("dateIntervalSteps",1)},weekButtonClick:function(t){this.set("dateInterval","week"),this.set("dateIntervalSteps",1)},fourDaysButtonClick:function(t){this.set("dateInterval","day"),this.set("dateIntervalSteps",4)},monthButtonClick:function(t){this.set("dateInterval","month"),this.set("dateIntervalSteps",1)},updateRenderers:function(t,e){this.currentView&&this.currentView.updateRenderers(t,e)},getIdentity:function(t){return t?t.id:null},_setHoveredItem:function(t,e){if(this.hoveredItem&&t&&this.hoveredItem.id!=t.id||null==t||null==this.hoveredItem){var i=this.hoveredItem;this.hoveredItem=t,this.updateRenderers([i,this.hoveredItem],!0),t&&e&&this.currentView._updateEditingCapabilities(t._item?t._item:t,e)}},hoveredItem:null,isItemHovered:function(t){return null!=this.hoveredItem&&this.hoveredItem.id==t.id},isItemEditable:function(t,e){return this.editable},isItemMoveEnabled:function(t,e){return this.isItemEditable(t,e)&&this.moveEnabled},isItemResizeEnabled:function(t,e){return this.isItemEditable(t,e)&&this.resizeEnabled},onGridClick:function(t){},onGridDoubleClick:function(t){},onItemClick:function(t){},onItemDoubleClick:function(t){},onItemContextMenu:function(t){},onItemEditBegin:function(t){},onItemEditEnd:function(t){},onItemEditBeginGesture:function(t){},onItemEditMoveGesture:function(t){},onItemEditResizeGesture:function(t){},onItemEditEndGesture:function(t){},onItemRollOver:function(t){},onItemRollOut:function(t){},onColumnHeaderClick:function(t){},onRowHeaderClick:function(t){},onExpandRendererClick:function(t){},_onRendererCreated:function(t){this.onRendererCreated(t)},onRendererCreated:function(t){},_onRendererRecycled:function(t){this.onRendererRecycled(t)},onRendererRecycled:function(t){},_onRendererReused:function(t){this.onRendererReused(t)},onRendererReused:function(t){},_onRendererDestroyed:function(t){this.onRendererDestroyed(t)},onRendererDestroyed:function(t){},_onRenderersLayoutDone:function(t){this.onRenderersLayoutDone(t)},onRenderersLayoutDone:function(t){}})});
//# sourceMappingURL=../sourcemaps/calendar/CalendarBase.js.map
