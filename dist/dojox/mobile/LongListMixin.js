/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/sniff","dojo/dom-construct","dojo/dom-geometry","dijit/registry","./common","./viewRegistry"],function(t,i,e,s,h,o,d,n,a){return e("dojox.mobile.LongListMixin",null,{pageSize:20,maxPages:5,unloadPages:1,startup:function(){this._started||(this.inherited(arguments),this.editable||(this._sv=a.getEnclosingScrollable(this.domNode),this._sv&&(this._items=this.getChildren(),this._clearItems(),this.containerNode=h.create("div",null,this.domNode),this.connect(this._sv,"scrollTo",i.hitch(this,this._loadItems),!0),this.connect(this._sv,"slideTo",i.hitch(this,this._loadItems),!0),this._topDiv=h.create("div",null,this.domNode,"first"),this._bottomDiv=h.create("div",null,this.domNode,"last"),this._reloadItems())))},_loadItems:function(t){var i=this._sv,e=i.getDim().d.h;if(!(e<=0)){for(var s=-i.getPos().y,h=t?-t.y:s,o=Math.min(s,h),d=Math.max(s,h)+e;this._loadedYMin>o&&this._addBefore(););for(;this._loadedYMax<d&&this._addAfter(););}},_reloadItems:function(){this._clearItems(),this._loadedYMin=this._loadedYMax=0,this._firstIndex=0,this._lastIndex=-1,this._topDiv.style.height="0px",this._loadItems()},_clearItems:function(){var i=this.containerNode;t.forEach(d.findWidgets(i),function(t){i.removeChild(t.domNode)})},_addBefore:function(){var t,i,e=o.getMarginBox(this.containerNode);for(i=0,t=this._firstIndex-1;i<this.pageSize&&t>=0;i++,t--){var s=this._items[t];h.place(s.domNode,this.containerNode,"first"),s._started||s.startup(),this._firstIndex=t}var d=o.getMarginBox(this.containerNode);if(this._adjustTopDiv(e,d),this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){var n=this.unloadPages*this.pageSize;for(t=0;t<n;t++)this.containerNode.removeChild(this._items[this._lastIndex-t].domNode);this._lastIndex-=n,d=o.getMarginBox(this.containerNode)}return this._adjustBottomDiv(d),i==this.pageSize},_addAfter:function(){var t,i,e=null;for(i=0,t=this._lastIndex+1;i<this.pageSize&&t<this._items.length;i++,t++){var s=this._items[t];h.place(s.domNode,this.containerNode),s._started||s.startup(),this._lastIndex=t}if(this._lastIndex-this._firstIndex>=this.maxPages*this.pageSize){e=o.getMarginBox(this.containerNode);var d=this.unloadPages*this.pageSize;for(t=0;t<d;t++)this.containerNode.removeChild(this._items[this._firstIndex+t].domNode);this._firstIndex+=d}var n=o.getMarginBox(this.containerNode);return e&&this._adjustTopDiv(e,n),this._adjustBottomDiv(n),i==this.pageSize},_adjustTopDiv:function(t,i){this._loadedYMin-=i.h-t.h,this._topDiv.style.height=this._loadedYMin+"px"},_adjustBottomDiv:function(t){var i=this._lastIndex>0?(this._loadedYMin+t.h)/this._lastIndex:0;i*=this._items.length-1-this._lastIndex,this._bottomDiv.style.height=i+"px",this._loadedYMax=this._loadedYMin+t.h},_childrenChanged:function(){this._qs_timer||(this._qs_timer=this.defer(function(){delete this._qs_timer,this._reloadItems()}))},resize:function(){this.inherited(arguments),this._items&&this._loadItems()},addChild:function(t,i){this._items?("number"==typeof i?this._items.splice(i,0,t):this._items.push(t),this._childrenChanged()):this.inherited(arguments)},removeChild:function(t){this._items?(this._items.splice("number"==typeof t?t:this._items.indexOf(t),1),this._childrenChanged()):this.inherited(arguments)},getChildren:function(){return this._items?this._items.slice(0):this.inherited(arguments)},_getSiblingOfChild:function(t,i){if(this._items){var e=this._items.indexOf(t);return e>=0&&(e=i>0?e++:e--),this._items[e]}return this.inherited(arguments)},generateList:function(i){this._items&&!this.append&&(t.forEach(this.getChildren(),function(t){t.destroyRecursive()}),this._items=[]),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mobile/LongListMixin.js.map
