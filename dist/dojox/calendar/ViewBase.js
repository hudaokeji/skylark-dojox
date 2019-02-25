/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/window","dojo/_base/event","dojo/_base/html","dojo/sniff","dojo/query","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/on","dojo/date","dojo/date/locale","dojo/when","dijit/_WidgetBase","dojox/widget/_Invalidating","dojox/widget/Selection","dojox/calendar/time","./StoreMixin","./StoreManager","./RendererManager"],function(e,t,i,n,r,s,o,d,a,h,l,u,m,c,f,_,g,I,v,T,p,E,D,S){return e("dojox.calendar.ViewBase",[I,E,v,T],{datePackage:f,_calendar:"gregorian",viewKind:null,_layoutStep:1,_layoutUnit:"day",resizeCursor:"n-resize",formatItemTimeFunc:null,_cssDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_getFormatItemTimeFuncAttr:function(){return this.formatItemTimeFunc?this.formatItemTimeFunc:null!=this.owner?this.owner.get("formatItemTimeFunc"):void 0},_viewHandles:null,doubleTapDelay:300,constructor:function(e){e=e||{},this._calendar=e.datePackage?e.datePackage.substr(e.datePackage.lastIndexOf(".")+1):this._calendar,this.dateModule=e.datePackage?t.getObject(e.datePackage,!1):f,this.dateClassObj=this.dateModule.Date||Date,this.dateLocaleModule=e.datePackage?t.getObject(e.datePackage+".locale",!1):_,this._viewHandles=[],this.storeManager=new D({owner:this,_ownerItemsProperty:"items"}),this.storeManager.on("layoutInvalidated",t.hitch(this,this._refreshItemsRendering)),this.storeManager.on("dataLoaded",t.hitch(this,function(e){this.set("items",e)})),this.rendererManager=new S({owner:this}),this.rendererManager.on("rendererCreated",t.hitch(this,this._onRendererCreated)),this.rendererManager.on("rendererReused",t.hitch(this,this._onRendererReused)),this.rendererManager.on("rendererRecycled",t.hitch(this,this._onRendererRecycled)),this.rendererManager.on("rendererDestroyed",t.hitch(this,this._onRendererDestroyed)),this.rendererManager.on("layoutInvalidated",t.hitch(this,this._refreshItemsRendering)),this.rendererManager.on("renderersInvalidated",t.hitch(this,function(e){this.updateRenderers(e)})),this.decorationStoreManager=new D({owner:this,_ownerItemsProperty:"decorationItems"}),this.decorationStoreManager.on("layoutInvalidated",t.hitch(this,this._refreshDecorationItemsRendering)),this.decorationStoreManager.on("dataLoaded",t.hitch(this,function(e){this.set("decorationItems",e)})),this.decorationRendererManager=new S({owner:this})},destroy:function(e){for(this.rendererManager.destroy(),this.decorationRendererManager.destroy();this._viewHandles.length>0;)this._viewHandles.pop().remove();this.inherited(arguments)},resize:function(e){e&&m.setMarginBox(this.domNode,e)},beforeActivate:function(){},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},_getTopOwner:function(){for(var e=this;void 0!=e.owner;)e=e.owner;return e},_createRenderData:function(){},_validateProperties:function(){},_setText:function(e,t,i){if(null!=t)if(!i&&e.hasChildNodes())e.childNodes[0].childNodes[0].nodeValue=t;else{for(;e.hasChildNodes();)e.removeChild(e.lastChild);var r=n.doc.createElement("span");o("dojo-bidi")&&this.applyTextDir(r,t),i?r.innerHTML=t:r.appendChild(n.doc.createTextNode(t)),e.appendChild(r)}},isAscendantHasClass:function(e,t,i){for(;e!=t&&e!=document;){if(l.contains(e,i))return!0;e=e.parentNode}return!1},isWeekEnd:function(e){return _.isWeekend(e)},getWeekNumberLabel:function(e){return e.toGregorian&&(e=e.toGregorian()),_.format(e,{selector:"date",datePattern:"w"})},addAndFloor:function(e,t,i){var n=this.dateModule.add(e,t,i);return n=23==n.getHours()?this.dateModule.add(n,"hour",2):p.floorToDay(n,!0,this.dateClassObj)},floorToDay:function(e,t){return p.floorToDay(e,t,this.dateClassObj)},floorToMonth:function(e,t){return p.floorToMonth(e,t,this.dateClassObj)},floorDate:function(e,t,i,n){return p.floor(e,t,i,n,this.dateClassObj)},isToday:function(e){return p.isToday(e,this.dateClassObj)},isStartOfDay:function(e){return p.isStartOfDay(e,this.dateClassObj,this.dateModule)},isOverlapping:function(e,t,i,n,r,s){return p.isOverlapping(e,t,i,n,r,s)},computeRangeOverlap:function(e,t,i,n,r,s){var o=e.dateModule;if(null==t||null==n||null==i||null==r)return null;var d=o.compare(t,r),a=o.compare(n,i);if(s){if(0==d||1==d||0==a||1==a)return null}else if(1==d||1==a)return null;return[this.newDate(o.compare(t,n)>0?t:n,e),this.newDate(o.compare(i,r)>0?r:i,e)]},isSameDay:function(e,t){return null!=e&&null!=t&&(e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate())},computeProjectionOnDate:function(e,i,n,r){var s=e.dateModule,o=e.minHours,d=e.maxHours;if(r<=0||-1==s.compare(n,i))return 0;var a,h=function(e){return 3600*e.getHours()+60*e.getMinutes()+e.getSeconds()},l=this.floorToDay(i,!1,e);if(n.getDate()!=l.getDate())if(n.getMonth()==l.getMonth()){if(n.getDate()<l.getDate())return 0;if(n.getDate()>l.getDate()&&d<24)return r}else if(n.getFullYear()==l.getFullYear()){if(n.getMonth()<l.getMonth())return 0;if(n.getMonth()>l.getMonth())return r}else{if(n.getFullYear()<l.getFullYear())return 0;if(n.getFullYear()>l.getFullYear())return r}if(this.isSameDay(i,n)||d>24){var u,m=t.clone(i),c=0;null!=o&&0!=o&&(m.setHours(o),c=h(m)),(m=t.clone(i)).setHours(d),u=null==d||24==d?86400:d>24?86400+h(m):h(m);var f=0;if((f=d>24&&i.getDate()!=n.getDate()?86400+h(n):h(n))<c)return 0;if(f>u)return r;a=r*(f-=c)/(u-c)}else{if(n.getDate()<i.getDate()&&n.getMonth()==i.getMonth())return 0;var _=this.floorToDay(n),g=e.dateModule.add(i,"day",1);g=this.floorToDay(g,!1,e),a=1==s.compare(_,i)&&0==s.compare(_,g)||1==s.compare(_,g)?r:0}return a},getTime:function(e,t,i,n){return null},getSubColumn:function(e,t,i,n){return null},getSubColumnIndex:function(e){if(this.subColumns)for(var t=0;t<this.subColumns.length;t++)if(this.subColumns[t]==e)return t;return-1},newDate:function(e){return p.newDate(e,this.dateClassObj)},_isItemInView:function(e){var t=this.renderData,i=t.dateModule;return-1!=i.compare(e.startTime,t.startTime)&&1!=i.compare(e.endTime,t.endTime)},_ensureItemInView:function(e){var t=this.renderData,i=t.dateModule,n=Math.abs(i.difference(e.startTime,e.endTime,"millisecond")),r=!1;return-1==i.compare(e.startTime,t.startTime)?(e.startTime=t.startTime,e.endTime=i.add(e.startTime,"millisecond",n),r=!0):1==i.compare(e.endTime,t.endTime)&&(e.endTime=t.endTime,e.startTime=i.add(e.endTime,"millisecond",-n),r=!0),r},scrollable:!0,autoScroll:!0,_autoScroll:function(e,t,i){return!1},scrollMethod:"auto",_setScrollMethodAttr:function(e){if(this.scrollMethod!=e){this.scrollMethod=e,void 0!==this._domScroll&&(this._domScroll?h.set(this.sheetContainer,this._cssPrefix+"transform","translateY(0px)"):this.scrollContainer.scrollTop=0),delete this._domScroll;var t=this._getScrollPosition();delete this._scrollPos,this._setScrollPosition(t)}},_startAutoScroll:function(e){var i=this._scrollProps;i||(i=this._scrollProps={}),i.scrollStep=e,i.isScrolling||(i.isScrolling=!0,i.scrollTimer=setInterval(t.hitch(this,this._onScrollTimer_tick),10))},_stopAutoScroll:function(){var e=this._scrollProps;e&&e.isScrolling&&(clearInterval(e.scrollTimer),e.scrollTimer=null),this._scrollProps=null},_onScrollTimer_tick:function(e){},_scrollPos:0,_hscrollPos:0,getCSSPrefix:function(){return o("ie")?"-ms-":o("webkit")?"-webkit-":o("mozilla")?"-moz-":o("opera")?"-o-":""},_hScrollNodes:null,_setScrollPositionBase:function(e,t){if(!(t&&this._scrollPos==e||!t&&this._hScrollPos==e)){if(void 0===this._domScroll){var n=this.get("scrollMethod");this._domScroll="auto"===n?!o("ios")&&!o("android")&&!o("webkit"):"dom"===n}var r=0;if(t){var s=m.getMarginBox(this.scrollContainer);r=m.getMarginBox(this.sheetContainer).h-s.h}else{var d=m.getMarginBox(this.grid);r=m.getMarginBox(this.gridTable).w-d.w}e<0?e=0:e>r&&(e=r),t?this._scrollPos=e:this._hScrollPos=e;var a=!this.isLeftToRight();if(this._domScroll)t?this.scrollContainer.scrollTop=e:i.forEach(this._hScrollNodes,function(t){h.set(t,"left",(a?1:-1)*e+"px")},this);else{this._cssPrefix||(this._cssPrefix=this.getCSSPrefix());var l=this._cssPrefix+"transform";if(t)h.set(this.sheetContainer,l,"translateY(-"+e+"px)");else{var u="translateX("+(a?"":"-")+e+"px)";i.forEach(this._hScrollNodes,function(e){h.set(e,l,u)},this)}}}},_setScrollPosition:function(e){this._setScrollPositionBase(e,!0)},_getScrollPosition:function(){return this._scrollPos},_setHScrollPosition:function(e){this._setScrollPositionBase(e,!1)},_setHScrollPositionImpl:function(e,t,n){var r=t?null:"translateX(-"+e+"px)";i.forEach(this._hScrollNodes,function(i){t?(i.scrollLeft=e,h.set(i,"left",-e+"px")):h.set(i,cssProp,r)},this)},_hScrollPos:0,_getHScrollPosition:function(){return this._hScrollPos},scrollView:function(e){},ensureVisibility:function(e,t,i,n,r){},_getStoreAttr:function(){return this.owner?this.owner.get("store"):this.store},_setItemsAttr:function(e){this._set("items",e),this.displayedItemsInvalidated=!0},_refreshItemsRendering:function(){var e=this.renderData;this._computeVisibleItems(e),this._layoutRenderers(e)},_refreshDecorationItemsRendering:function(){var e=this.renderData;this._computeVisibleItems(e),this._layoutDecorationRenderers(e)},invalidateLayout:function(){this._layoutRenderers(this.renderData),this._layoutDecorationRenderers(this.renderData)},_setDecorationItemsAttr:function(e){this._set("decorationItems",e),this.displayedDecorationItemsInvalidated=!0},_getDecorationStoreAttr:function(){return this.owner?this.owner.get("decorationStore"):this.decorationStore},_setDecorationStoreAttr:function(e){this.decorationStore=e,this.decorationStoreManager.set("store",e)},computeOverlapping:function(e,i){if(0==e.length)return{numLanes:0,addedPassRes:[1]};for(var n=[],r=0;r<e.length;r++){var s=e[r];this._layoutPass1(s,n)}var o=null;return i&&(o=t.hitch(this,i)(n)),{numLanes:n.length,addedPassRes:o}},_layoutPass1:function(e,t){for(var i=!0,n=0;n<t.length;n++){var r=t[n];i=!1;for(var s=0;s<r.length&&!i;s++)r[s].start<e.end&&e.start<r[s].end&&(i=!0,r[s].extent=1);if(!i)return e.lane=n,e.extent=-1,void r.push(e)}t.push([e]),e.lane=t.length-1,e.extent=-1},_layoutInterval:function(e,t,i,n,r){},layoutPriorityFunction:null,_sortItemsFunction:function(e,t){var i=this.dateModule.compare(e.startTime,t.startTime);return 0==i&&(i=-1*this.dateModule.compare(e.endTime,t.endTime)),i},_layoutRenderers:function(e){this._layoutRenderersImpl(e,this.rendererManager,e.items,"dataItems")},_layoutDecorationRenderers:function(e){this._layoutRenderersImpl(e,this.decorationRendererManager,e.decorationItems,"decorationItems")},_layoutRenderersImpl:function(e,n,r,s){if(r){n.recycleItemRenderers();for(var o,d,a=e.dateModule,h=this.newDate(e.startTime),l=t.clone(h),u=(r=r.concat(),[]),m={},c=0;-1==a.compare(h,e.endTime)&&r.length>0;){o=this.addAndFloor(h,this._layoutUnit,this._layoutStep);var f=t.clone(o);e.minHours&&l.setHours(e.minHours),void 0!=e.maxHours&&24!=e.maxHours&&(e.maxHours<24&&(f=a.add(o,"day",-1)),(f=this.floorToDay(f,!0,e)).setHours(e.maxHours-(e.maxHours<24?0:24))),d=i.filter(r,function(t){var i=this.isOverlapping(e,t.startTime,t.endTime,l,f);return i?(m[t.id]=!0,u.push(t)):m[t.id]?delete m[t.id]:u.push(t),i},this),r=u,u=[],d.length>0&&(d.sort(t.hitch(this,this.layoutPriorityFunction?this.layoutPriorityFunction:this._sortItemsFunction)),this._layoutInterval(e,c,l,f,d,s)),h=o,l=t.clone(h),c++}this._onRenderersLayoutDone(this)}},_recycleItemRenderers:function(e){this.rendererManager.recycleItemRenderers(e)},getRenderers:function(e){return this.rendererManager.getRenderers(e)},itemToRendererKindFunc:null,_itemToRendererKind:function(e){return this.itemToRendererKindFunc?this.itemToRendererKindFunc(e):this._defaultItemToRendererKindFunc(e)},_defaultItemToRendererKindFunc:function(e){return null},_createRenderer:function(e,t,i,n){return this.rendererManager.createRenderer(e,t,i,n)},_onRendererCreated:function(e){e.source==this&&this.onRendererCreated(e),null!=this.owner&&this.owner._onRendererCreated(e)},onRendererCreated:function(e){},_onRendererRecycled:function(e){e.source==this&&this.onRendererRecycled(e),null!=this.owner&&this.owner._onRendererRecycled(e)},onRendererRecycled:function(e){},_onRendererReused:function(e){e.source==this&&this.onRendererReused(e),null!=this.owner&&this.owner._onRendererReused(e)},onRendererReused:function(e){},_onRendererDestroyed:function(e){e.source==this&&this.onRendererDestroyed(e),null!=this.owner&&this.owner._onRendererDestroyed(e)},onRendererDestroyed:function(e){},_onRenderersLayoutDone:function(e){this.onRenderersLayoutDone(e),null!=this.owner&&this.owner._onRenderersLayoutDone(e)},onRenderersLayoutDone:function(e){},_recycleRenderer:function(e,t){this.rendererManager.recycleRenderer(e,t)},_destroyRenderer:function(e){this.rendererManager.destroyRenderer(e)},_destroyRenderersByKind:function(e){this.rendererManager.destroyRenderersByKind(e)},_updateEditingCapabilities:function(e,t){var i=this.isItemMoveEnabled(e,t.rendererKind),n=this.isItemResizeEnabled(e,t.rendererKind),r=!1;i!=t.get("moveEnabled")&&(t.set("moveEnabled",i),r=!0),n!=t.get("resizeEnabled")&&(t.set("resizeEnabled",n),r=!0),r&&t.updateRendering()},updateRenderers:function(e,i){if(null!=e)for(var n=t.isArray(e)?e:[e],r=0;r<n.length;r++){var s=n[r];if(null!=s&&null!=s.id){var o=this.rendererManager.itemToRenderer[s.id];if(null!=o)for(var d=this.isItemSelected(s),a=this.isItemHovered(s),h=this.isItemBeingEdited(s),l=!!this.showFocus&&this.isItemFocused(s),u=0;u<o.length;u++){var m=o[u].renderer;m.set("hovered",a),m.set("selected",d),m.set("edited",h),m.set("focused",l),m.set("storeState",this.getItemStoreState(s)),this.applyRendererZIndex(s,o[u],a,d,h,l),i||(m.set("item",s),m.updateRendering&&m.updateRendering())}}}},applyRendererZIndex:function(e,t,i,n,r,s){h.set(t.container,{zIndex:r||n?20:void 0==e.lane?0:e.lane})},getIdentity:function(e){return this.owner?this.owner.getIdentity(e):e.id},_setHoveredItem:function(e,t){if(this.owner)this.owner._setHoveredItem(e,t);else if(this.hoveredItem&&e&&this.hoveredItem.id!=e.id||null==e||null==this.hoveredItem){var i=this.hoveredItem;this.hoveredItem=e,this.updateRenderers([i,this.hoveredItem],!0),e&&t&&this._updateEditingCapabilities(e._item?e._item:e,t)}},hoveredItem:null,isItemHovered:function(e){return this._isEditing&&this._edProps?e.id==this._edProps.editedItem.id:this.owner?this.owner.isItemHovered(e):null!=this.hoveredItem&&this.hoveredItem.id==e.id},isItemFocused:function(e){return!!this._isItemFocused&&this._isItemFocused(e)},_setSelectionModeAttr:function(e){this.owner?this.owner.set("selectionMode",e):this.inherited(arguments)},_getSelectionModeAttr:function(e){return this.owner?this.owner.get("selectionMode"):this.inherited(arguments)},_setSelectedItemAttr:function(e){this.owner?this.owner.set("selectedItem",e):this.inherited(arguments)},_getSelectedItemAttr:function(e){return this.owner?this.owner.get("selectedItem"):this.selectedItem},_setSelectedItemsAttr:function(e){this.owner?this.owner.set("selectedItems",e):this.inherited(arguments)},_getSelectedItemsAttr:function(){return this.owner?this.owner.get("selectedItems"):this.inherited(arguments)},isItemSelected:function(e){return this.owner?this.owner.isItemSelected(e):this.inherited(arguments)},selectFromEvent:function(e,t,i,n){this.owner?this.owner.selectFromEvent(e,t,i,n):this.inherited(arguments)},setItemSelected:function(e,t){this.owner?this.owner.setItemSelected(e,t):this.inherited(arguments)},createItemFunc:null,_getCreateItemFuncAttr:function(){return this.owner?this.owner.get("createItemFunc"):this.createItemFunc},createOnGridClick:!1,_getCreateOnGridClickAttr:function(){return this.owner?this.owner.get("createOnGridClick"):this.createOnGridClick},_gridMouseDown:!1,_tempIdCount:0,_tempItemsMap:null,_onGridMouseDown:function(e){if(this._gridMouseDown=!0,this.showFocus=!1,this._isEditing&&this._endItemEditing("mouse",!1),this._doEndItemEditing(this.owner,"mouse"),this.set("focusedItem",null),this.selectFromEvent(e,null,null,!0),this._setTabIndexAttr&&this[this._setTabIndexAttr].focus(),this._onRendererHandleMouseDown){var t=this.get("createItemFunc");if(!t)return;var i=this._createdEvent=t(this,this.getTime(e),e,this.getSubColumn(e)),n=this.get("store");if(!i||null==n)return;if(void 0==n.getIdentity(i)){var r="_tempId_"+this._tempIdCount++;i[n.idProperty]=r,null==this._tempItemsMap&&(this._tempItemsMap={}),this._tempItemsMap[r]=!0}var s=this.itemToRenderItem(i,n);s._item=i,this._setItemStoreState(i,"unstored");var o=this._getTopOwner(),d=o.get("items");o.set("items",d?d.concat([s]):[s]),this._refreshItemsRendering();var a=this.getRenderers(i);if(a&&a.length>0){var h=a[0];h&&(this._onRendererHandleMouseDown(e,h.renderer,"resizeEnd"),this._startItemEditing(s,"mouse"))}}},_onGridMouseMove:function(e){},_onGridMouseUp:function(e){},_onGridTouchStart:function(e){var i=this._edProps;this._gridProps={event:e,fromItem:this.isAscendantHasClass(e.target,this.eventContainer,"dojoxCalendarEvent")},this._isEditing&&(this._gridProps&&(this._gridProps.editingOnStart=!0),t.mixin(i,this._getTouchesOnRenderers(e,i.editedItem)),0==i.touchesLen&&(i&&i.endEditingTimer&&(clearTimeout(i.endEditingTimer),i.endEditingTimer=null),this._endItemEditing("touch",!1))),this._doEndItemEditing(this.owner,"touch"),r.stop(e)},_doEndItemEditing:function(e,t){if(e&&e._isEditing){var i=e._edProps;i&&i.endEditingTimer&&(clearTimeout(i.endEditingTimer),i.endEditingTimer=null),e._endItemEditing(t,!1)}},_onGridTouchEnd:function(e){},_onGridTouchMove:function(e){},__fixEvt:function(e){return e},_dispatchCalendarEvt:function(e,t){return e=this.__fixEvt(e),this[t](e),this.owner&&this.owner[t](e),e},_onGridClick:function(e){e.triggerEvent||(e={date:this.getTime(e),triggerEvent:e}),this._dispatchCalendarEvt(e,"onGridClick")},onGridClick:function(e){},_onGridDoubleClick:function(e){e.triggerEvent||(e={date:this.getTime(e),triggerEvent:e}),this._dispatchCalendarEvt(e,"onGridDoubleClick")},onGridDoubleClick:function(e){},_onItemClick:function(e){this._dispatchCalendarEvt(e,"onItemClick")},onItemClick:function(e){},_onItemDoubleClick:function(e){this._dispatchCalendarEvt(e,"onItemDoubleClick")},onItemDoubleClick:function(e){},_onItemContextMenu:function(e){this._dispatchCalendarEvt(e,"onItemContextMenu")},onItemContextMenu:function(e){},_getStartEndRenderers:function(e){var t=this.rendererManager.itemToRenderer[e.id];if(null==t)return null;if(1==t.length){var i=t[0].renderer;return[i,i]}for(var n=this.renderData,r=!1,s=!1,o=[],d=0;d<t.length;d++){var a=t[d].renderer;if(r||(r=0==n.dateModule.compare(a.item.range[0],a.item.startTime),o[0]=a),s||(s=0==n.dateModule.compare(a.item.range[1],a.item.endTime),o[1]=a),r&&s)break}return o},editable:!0,moveEnabled:!0,resizeEnabled:!0,isItemEditable:function(e,t){return"storing"!=this.getItemStoreState(e)&&this.editable&&(!this.owner||this.owner.isItemEditable(e,t))},isItemMoveEnabled:function(e,t){return this.isItemEditable(e,t)&&this.moveEnabled&&(!this.owner||this.owner.isItemMoveEnabled(e,t))},isItemResizeEnabled:function(e,t){return this.isItemEditable(e,t)&&this.resizeEnabled&&(!this.owner||this.owner.isItemResizeEnabled(e,t))},_isEditing:!1,isItemBeingEdited:function(e){return this._isEditing&&this._edProps&&this._edProps.editedItem&&this._edProps.editedItem.id==e.id},_setEditingProperties:function(e){this._edProps=e},_startItemEditing:function(e,n){this._isEditing=!0,this._getTopOwner()._isEditing=!0;var r=this._edProps;if(r.editedItem=e,r.storeItem=e._item,r.eventSource=n,r.secItem=this._secondarySheet?this._findRenderItem(e.id,this._secondarySheet.renderData.items):null,r.ownerItem=this.owner?this._findRenderItem(e.id,this.items):null,!r.liveLayout){r.editSaveStartTime=e.startTime,r.editSaveEndTime=e.endTime,r.editItemToRenderer=this.rendererManager.itemToRenderer,r.editItems=this.renderData.items,r.editRendererList=this.rendererManager.rendererList,this.renderData.items=[r.editedItem];var s=r.editedItem.id;this.rendererManager.itemToRenderer={},this.rendererManager.rendererList=[];var o=r.editItemToRenderer[s];r.editRendererIndices=[],i.forEach(o,t.hitch(this,function(e,t){null==this.rendererManager.itemToRenderer[s]?this.rendererManager.itemToRenderer[s]=[e]:this.rendererManager.itemToRenderer[s].push(e),this.rendererManager.rendererList.push(e)})),r.editRendererList=i.filter(r.editRendererList,function(e){return null!=e&&e.renderer.item.id!=s}),delete r.editItemToRenderer[s]}this._layoutRenderers(this.renderData),this._onItemEditBegin({item:e,storeItem:r.storeItem,eventSource:n})},_onItemEditBegin:function(e){this._editStartTimeSave=this.newDate(e.item.startTime),this._editEndTimeSave=this.newDate(e.item.endTime),this._dispatchCalendarEvt(e,"onItemEditBegin")},onItemEditBegin:function(e){},_endItemEditing:function(e,n){this._editingGesture&&this._endItemEditingGesture(e),this._isEditing=!1,this._getTopOwner()._isEditing=!1;var r=this._edProps;i.forEach(r.handles,function(e){e.remove()}),r.liveLayout||(this.renderData.items=r.editItems,this.rendererManager.rendererList=r.editRendererList.concat(this.rendererManager.rendererList),t.mixin(this.rendererManager.itemToRenderer,r.editItemToRenderer)),this._onItemEditEnd(t.mixin(this._createItemEditEvent(),{item:r.editedItem,storeItem:r.storeItem,eventSource:e,completed:!n})),this._layoutRenderers(this.renderData),this._edProps=null},_onItemEditEnd:function(e){if(this._dispatchCalendarEvt(e,"onItemEditEnd"),!e.isDefaultPrevented()){var i=this.get("store"),n=this.renderItemToItem(e.item,i),r=this._getItemStoreStateObj(e.item);if(null!=r&&"unstored"==r.state)if(e.completed){n=t.mixin(r.item,n),this._setItemStoreState(n,"storing");var s=i.getIdentity(n),o=null;this._tempItemsMap&&this._tempItemsMap[s]&&(o={temporaryId:s},delete this._tempItemsMap[s],delete n[i.idProperty]),g(i.add(n,o),t.hitch(this,function(e){(t.isObject(e)?i.getIdentity(e):e)!=s&&this._removeRenderItem(s)}))}else this._removeRenderItem(r.id);else e.completed?(this._setItemStoreState(n,"storing"),i.put(n)):(e.item.startTime=this._editStartTimeSave,e.item.endTime=this._editEndTimeSave)}},_removeRenderItem:function(e){for(var t=this._getTopOwner(),i=t.get("items"),n=!1,r=i.length-1;r>=0;r--)if(i[r].id==e){i.splice(r,1),n=!0;break}this._cleanItemStoreState(e),n&&(t.set("items",i),this.invalidateLayout())},onItemEditEnd:function(e){},_createItemEditEvent:function(){var e={cancelable:!0,bubbles:!1,__defaultPrevent:!1,preventDefault:function(){this.__defaultPrevented=!0},isDefaultPrevented:function(){return this.__defaultPrevented}};return e},_startItemEditingGesture:function(e,i,n,r){var s=this._edProps;if(s&&null!=s.editedItem){this._editingGesture=!0;var o=s.editedItem;s.editKind=i,this._onItemEditBeginGesture(this.__fixEvt(t.mixin(this._createItemEditEvent(),{item:o,storeItem:s.storeItem,startTime:o.startTime,endTime:o.endTime,editKind:i,rendererKind:s.rendererKind,triggerEvent:r,dates:e,eventSource:n}))),s.itemBeginDispatched=!0}},_onItemEditBeginGesture:function(e){var t=this._edProps,i=t.editedItem,n=e.dates;t.editingTimeFrom=[],t.editingTimeFrom[0]=n[0],t.editingItemRefTime=[],t.editingItemRefTime[0]=this.newDate("resizeEnd"==t.editKind?i.endTime:i.startTime),"resizeBoth"==t.editKind&&(t.editingTimeFrom[1]=n[1],t.editingItemRefTime[1]=this.newDate(i.endTime));var r=this.renderData.dateModule;if(t.inViewOnce=this._isItemInView(i),("label"==t.rendererKind||this.roundToDay)&&(t._itemEditBeginSave=this.newDate(i.startTime),t._itemEditEndSave=this.newDate(i.endTime)),t._initDuration=r.difference(i.startTime,i.endTime,i.allDay?"day":"millisecond"),this._dispatchCalendarEvt(e,"onItemEditBeginGesture"),!e.isDefaultPrevented()&&"mouse"==e.eventSource){var s="move"==e.editKind?"move":this.resizeCursor;t.editLayer=u.create("div",{style:"position: absolute; left:0; right:0; bottom:0; top:0; z-index:30; tabIndex:-1; background-image:url('"+this._blankGif+"'); cursor: "+s,onresizestart:function(e){return!1},onselectstart:function(e){return!1}},this.domNode),t.editLayer.focus()}},onItemEditBeginGesture:function(e){},_waDojoxAddIssue:function(e,t,i){var n=this.renderData.dateModule;if("gregorian"!=this._calendar&&i<0){var r=e.toGregorian();return r=f.add(r,t,i),new this.renderData.dateClassObj(r)}return n.add(e,t,i)},_computeItemEditingTimes:function(e,t,i,n,r){var s=this.renderData.dateModule,o=this._edProps;if("move"==t){var d=s.difference(o.editingTimeFrom[0],n[0],"millisecond");n[0]=this._waDojoxAddIssue(o.editingItemRefTime[0],"millisecond",d)}return n},_moveOrResizeItemGesture:function(e,i,n,r){if(this._isEditing&&null!=e[0]){var s=this._edProps,o=s.editedItem,d=this.renderData.dateModule,a=s.editKind,h=[e[0]];"resizeBoth"==a&&(h[1]=e[1]);var l=(h=this._computeItemEditingTimes(o,s.editKind,s.rendererKind,h,i))[0],u=!1,m=t.clone(o.startTime),c=t.clone(o.endTime),f=o.subColumn,_="keyboard"!=s.eventSource&&this.allowStartEndSwap;if("move"==a){if(null!=r&&o.subColumn!=r&&this.allowSubColumnMove){o.subColumn=r;var g=this.get("store"),I=this.renderItemToItem(o,g);t.mixin(o,this.itemToRenderItem(I,g)),u=!0}if(0!=d.compare(o.startTime,l)){var v=d.difference(o.startTime,o.endTime,"millisecond");o.startTime=this.newDate(l),o.endTime=d.add(o.startTime,"millisecond",v),u=!0}}else if("resizeStart"==a)0!=d.compare(o.startTime,l)&&(-1!=d.compare(o.endTime,l)?o.startTime=this.newDate(l):_?(o.startTime=this.newDate(o.endTime),o.endTime=this.newDate(l),s.editKind=a="resizeEnd","touch"==i&&(s.resizeEndTouchIndex=s.resizeStartTouchIndex,s.resizeStartTouchIndex=-1)):(o.startTime=this.newDate(o.endTime),o.startTime.setHours(l.getHours()),o.startTime.setMinutes(l.getMinutes()),o.startTime.setSeconds(l.getSeconds())),u=!0);else if("resizeEnd"==a)0!=d.compare(o.endTime,l)&&(1!=d.compare(o.startTime,l)?o.endTime=this.newDate(l):_?(o.endTime=this.newDate(o.startTime),o.startTime=this.newDate(l),s.editKind=a="resizeStart","touch"==i&&(s.resizeStartTouchIndex=s.resizeEndTouchIndex,s.resizeEndTouchIndex=-1)):(o.endTime=this.newDate(o.startTime),o.endTime.setHours(l.getHours()),o.endTime.setMinutes(l.getMinutes()),o.endTime.setSeconds(l.getSeconds())),u=!0);else{if("resizeBoth"!=a)return!1;u=!0;var T=this.newDate(l),p=this.newDate(h[1]);if(-1!=d.compare(T,p))if(_){var E=T;T=p,p=E}else u=!1;u&&(o.startTime=T,o.endTime=p)}if(!u)return!1;var D=t.mixin(this._createItemEditEvent(),{item:o,storeItem:s.storeItem,startTime:o.startTime,endTime:o.endTime,editKind:a,rendererKind:s.rendererKind,triggerEvent:n,eventSource:i});if("move"==a?this._onItemEditMoveGesture(D):this._onItemEditResizeGesture(D),1==d.compare(o.startTime,o.endTime)){var S=o.startTime;o.startTime=o.endTime,o.endTime=S}return(u=f!=o.subColumn||0!=d.compare(m,o.startTime)||0!=d.compare(c,o.endTime))&&(this._layoutRenderers(this.renderData),s.liveLayout&&null!=s.secItem?(s.secItem.startTime=o.startTime,s.secItem.endTime=o.endTime,this._secondarySheet._layoutRenderers(this._secondarySheet.renderData)):null!=s.ownerItem&&this.owner.liveLayout&&(s.ownerItem.startTime=o.startTime,s.ownerItem.endTime=o.endTime,this.owner._layoutRenderers(this.owner.renderData)),!0)}},_findRenderItem:function(e,t){t=t||this.renderData.items;for(var i=0;i<t.length;i++)if(t[i].id==e)return t[i];return null},_onItemEditMoveGesture:function(e){if(this._dispatchCalendarEvt(e,"onItemEditMoveGesture"),!e.isDefaultPrevented()){var t,i,n=e.source._edProps,r=this.renderData,s=r.dateModule;"label"==n.rendererKind||this.roundToDay&&!e.item.allDay?((t=this.floorToDay(e.item.startTime,!1,r)).setHours(n._itemEditBeginSave.getHours()),t.setMinutes(n._itemEditBeginSave.getMinutes()),i=s.add(t,"millisecond",n._initDuration)):e.item.allDay?(t=this.floorToDay(e.item.startTime,!0),i=s.add(t,"day",n._initDuration)):(t=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps),i=s.add(t,"millisecond",n._initDuration)),e.item.startTime=t,e.item.endTime=i,n.inViewOnce||(n.inViewOnce=this._isItemInView(e.item)),n.inViewOnce&&this.stayInView&&this._ensureItemInView(e.item)}},_DAY_IN_MILLISECONDS:864e5,onItemEditMoveGesture:function(e){},_onItemEditResizeGesture:function(e){if(this._dispatchCalendarEvt(e,"onItemEditResizeGesture"),!e.isDefaultPrevented()){var t=e.source._edProps,i=this.renderData,n=i.dateModule,r=e.item.startTime,s=e.item.endTime;"resizeStart"==e.editKind?e.item.allDay?r=this.floorToDay(e.item.startTime,!1,this.renderData):this.roundToDay?((r=this.floorToDay(e.item.startTime,!1,i)).setHours(t._itemEditBeginSave.getHours()),r.setMinutes(t._itemEditBeginSave.getMinutes())):r=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps):"resizeEnd"==e.editKind?e.item.allDay?this.isStartOfDay(e.item.endTime)||(s=this.floorToDay(e.item.endTime,!1,this.renderData),s=n.add(s,"day",1)):this.roundToDay?((s=this.floorToDay(e.item.endTime,!1,i)).setHours(t._itemEditEndSave.getHours()),s.setMinutes(t._itemEditEndSave.getMinutes())):(s=this.floorDate(e.item.endTime,this.snapUnit,this.snapSteps),"mouse"==e.eventSource&&(s=n.add(s,this.snapUnit,this.snapSteps))):(r=this.floorDate(e.item.startTime,this.snapUnit,this.snapSteps),s=this.floorDate(e.item.endTime,this.snapUnit,this.snapSteps),s=n.add(s,this.snapUnit,this.snapSteps)),e.item.startTime=r,e.item.endTime=s;var o=e.item.allDay||t._initDuration>=this._DAY_IN_MILLISECONDS&&!this.allowResizeLessThan24H;this.ensureMinimalDuration(this.renderData,e.item,o?"day":this.minDurationUnit,o?1:this.minDurationSteps,e.editKind),t.inViewOnce||(t.inViewOnce=this._isItemInView(e.item)),t.inViewOnce&&this.stayInView&&this._ensureItemInView(e.item)}},onItemEditResizeGesture:function(e){},_endItemEditingGesture:function(e,i){if(this._isEditing){this._editingGesture=!1;var n=this._edProps,r=n.editedItem;n.itemBeginDispatched=!1,this._onItemEditEndGesture(t.mixin(this._createItemEditEvent(),{item:r,storeItem:n.storeItem,startTime:r.startTime,endTime:r.endTime,editKind:n.editKind,rendererKind:n.rendererKind,triggerEvent:i,eventSource:e}))}},_onItemEditEndGesture:function(e){var i=this._edProps;delete i._itemEditBeginSave,delete i._itemEditEndSave,this._dispatchCalendarEvt(e,"onItemEditEndGesture"),e.isDefaultPrevented()||i.editLayer&&(o("ie")&&(i.editLayer.style.cursor="default"),setTimeout(t.hitch(this,function(){this.domNode&&(this.domNode.focus(),i.editLayer.parentNode.removeChild(i.editLayer),i.editLayer=null)}),10))},onItemEditEndGesture:function(e){},ensureMinimalDuration:function(e,t,i,n,r){var s,o=e.dateModule;"resizeStart"==r?(s=o.add(t.endTime,i,-n),1==o.compare(t.startTime,s)&&(t.startTime=s)):(s=o.add(t.startTime,i,n),-1==o.compare(t.endTime,s)&&(t.endTime=s))},doubleTapDelay:300,snapUnit:"minute",snapSteps:15,minDurationUnit:"hour",minDurationSteps:1,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1,allowSubColumnMove:!0})});
//# sourceMappingURL=../sourcemaps/calendar/ViewBase.js.map
