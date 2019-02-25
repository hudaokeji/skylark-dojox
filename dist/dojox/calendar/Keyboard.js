/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/on","dojo/_base/event","dojo/keys"],function(e,t,i,s,d,n){return i("dojox.calendar.Keyboard",null,{keyboardUpDownUnit:"minute",keyboardUpDownSteps:15,keyboardLeftRightUnit:"day",keyboardLeftRightSteps:1,allDayKeyboardUpDownUnit:"day",allDayKeyboardUpDownSteps:7,allDayKeyboardLeftRightUnit:"day",allDayKeyboardLeftRightSteps:1,postCreate:function(){this.inherited(arguments),this._viewHandles.push(s(this.domNode,"keydown",t.hitch(this,this._onKeyDown)))},resizeModifier:"ctrl",maxScrollAnimationDuration:1e3,tabIndex:"0",focusedItem:null,_isItemFocused:function(e){return null!=this.focusedItem&&this.focusedItem.id==e.id},_setFocusedItemAttr:function(e){if(e!=this.focusedItem){var t=this.focusedItem;this._set("focusedItem",e),this.updateRenderers([t,this.focusedItem],!0),this.onFocusChange({oldValue:t,newValue:e})}null!=e&&(null!=this.owner&&null!=this.owner.get("focusedItem")&&this.owner.set("focusedItem",null),null!=this._secondarySheet&&null!=this._secondarySheet.set("focusedItem")&&this._secondarySheet.set("focusedItem",null))},onFocusChange:function(e){},showFocus:!1,_focusNextItem:function(i){if(!this.renderData||!this.renderData.items||0==this.renderData.items.length)return null;var s=-1,d=this.renderData.items,n=d.length-1,o=this.get("focusedItem");null==o?s=i>0?0:n:(e.some(d,t.hitch(this,function(e,t){var i=e.id==o.id;return i&&(s=t),i})),s=this._focusNextItemImpl(i,s,n));for(var r=!1,h=-1;h!=s&&(!r||0!=s);){r||0!=s||(r=!0);var a=d[s];if(null!=this.itemToRenderer[a.id])return void this.set("focusedItem",a);h=s,s=this._focusNextItemImpl(i,s,n)}},_focusNextItemImpl:function(e,t,i){if(-1==t)t=e>0?0:i;else{if(0==t&&-1==e||t==i&&1==e)return t;t=e>0?++t:--t}return t},_handlePrevNextKeyCode:function(e,t){this.isLeftToRight()||(t=1==t?-1:1),this.showFocus=!0,this._focusNextItem(t);var i=this.get("focusedItem");!e.ctrlKey&&i&&this.set("selectedItem",i),i&&this.ensureVisibility(i.startTime,i.endTime,"both",void 0,this.maxScrollAnimationDuration)},_checkDir:function(e,t){return this.isLeftToRight()&&e==t||!this.isLeftToRight()&&e==("left"==t?"right":"left")},_keyboardItemEditing:function(e,t){d.stop(e);var i,s,n=this._edProps;n.editedItem.allDay||this.roundToDay||"label"==n.rendererKind?(i="up"==t||"down"==t?this.allDayKeyboardUpDownUnit:this.allDayKeyboardLeftRightUnit,s="up"==t||"down"==t?this.allDayKeyboardUpDownSteps:this.allDayKeyboardLeftRightSteps):(i="up"==t||"down"==t?this.keyboardUpDownUnit:this.keyboardLeftRightUnit,s="up"==t||"down"==t?this.keyboardUpDownSteps:this.keyboardLeftRightSteps),("up"==t||this._checkDir(t,"left"))&&(s=-s);var o=e[this.resizeModifier+"Key"]?"resizeEnd":"move",r="resizeEnd"==o?n.editedItem.endTime:n.editedItem.startTime,h=r,a=n.editedItem.subColumn;if("move"==o&&this.subColumns&&this.subColumns.length>1){var l=this.getSubColumnIndex(a),u=!0;-1!=l&&(this._checkDir(t,"left")?0==l?a=this.subColumns[this.subColumns.length-1]:(u=!1,a=this.subColumns[l-1]):this._checkDir(t,"right")&&(l==this.subColumns.length-1?a=this.subColumns[0]:(u=!1,a=this.subColumns[l+1])),u&&(h=this.renderData.dateModule.add(r,i,s)))}else h=this.renderData.dateModule.add(r,i,s);this._startItemEditingGesture([r],o,"keyboard",e),this._moveOrResizeItemGesture([h],"keyboard",e,a),this._endItemEditingGesture(o,"keyboard",e,!1),"move"==o&&-1==this.renderData.dateModule.compare(h,r)?this.ensureVisibility(n.editedItem.startTime,n.editedItem.endTime,"start"):this.ensureVisibility(n.editedItem.startTime,n.editedItem.endTime,"end")},_onKeyDown:function(e){var t=this.get("focusedItem");switch(e.keyCode){case n.ESCAPE:this._isEditing&&(this._editingGesture&&this._endItemEditingGesture("keyboard",e,!0),this._endItemEditing("keyboard",!0),this._edProps=null);break;case n.SPACE:d.stop(e),null!=t&&this.setItemSelected(t,!e.ctrlKey||!this.isItemSelected(t));break;case n.ENTER:if(d.stop(e),null!=t)if(this._isEditing)this._endItemEditing("keyboard",!1);else{var i=this.itemToRenderer[t.id];i&&i.length>0&&this.isItemEditable(t,i[0].kind)&&(this._edProps={renderer:i[0],rendererKind:i[0].kind,tempEditedItem:t,liveLayout:this.liveLayout},this.set("selectedItem",t),this._startItemEditing(t,"keyboard"))}break;case n.LEFT_ARROW:d.stop(e),this._isEditing?this._keyboardItemEditing(e,"left"):this._handlePrevNextKeyCode(e,-1);break;case n.RIGHT_ARROW:d.stop(e),this._isEditing?this._keyboardItemEditing(e,"right"):this._handlePrevNextKeyCode(e,1);break;case n.UP_ARROW:this._isEditing?this._keyboardItemEditing(e,"up"):this.scrollable&&this.scrollView(-1);break;case n.DOWN_ARROW:this._isEditing?this._keyboardItemEditing(e,"down"):this.scrollable&&this.scrollView(1)}}})});
//# sourceMappingURL=../sourcemaps/calendar/Keyboard.js.map
