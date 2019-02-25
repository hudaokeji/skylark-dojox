/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/Color","dojo/touch","dojo/when","dojo/on","dojo/query","dojo/dom-construct","dojo/dom-geometry","dojo/dom-class","dojo/dom-style","./_utils","dijit/_WidgetBase","dojox/widget/_Invalidating","dojox/widget/Selection","dojo/_base/sniff","dojo/uacss"],function(e,t,r,o,i,n,s,a,h,d,l,u,c,_,g,p,f,m){return r("dojox.treemap.TreeMap",[g,p,f],{baseClass:"dojoxTreeMap",store:null,query:{},queryOptions:null,itemToRenderer:null,_dataChanged:!1,rootItem:null,_rootItemChanged:!1,tooltipAttr:"",areaAttr:"",_areaChanged:!1,labelAttr:"label",labelThreshold:NaN,colorAttr:"",colorModel:null,_coloringChanged:!1,groupAttrs:[],groupFuncs:null,_groupFuncs:null,_groupingChanged:!1,constructor:function(){this.itemToRenderer={},this.invalidatingProperties=["colorModel","groupAttrs","groupFuncs","areaAttr","areaFunc","labelAttr","labelFunc","labelThreshold","tooltipAttr","tooltipFunc","colorAttr","colorFunc","rootItem"]},getIdentity:function(e){return e.__treeID?e.__treeID:this.store.getIdentity(e)},resize:function(e){e&&(l.setMarginBox(this.domNode,e),this.invalidateRendering())},postCreate:function(){this.inherited(arguments),this.own(a(this.domNode,"mouseover",t.hitch(this,this._onMouseOver))),this.own(a(this.domNode,"mouseout",t.hitch(this,this._onMouseOut))),this.own(a(this.domNode,n.release,t.hitch(this,this._onMouseUp))),this.domNode.setAttribute("role","presentation"),this.domNode.setAttribute("aria-label","treemap")},buildRendering:function(){this.inherited(arguments),this.refreshRendering()},refreshRendering:function(){var e=!1;if(this._dataChanged&&(this._dataChanged=!1,this._groupingChanged=!0,this._coloringChanged=!0),this._groupingChanged&&(this._groupingChanged=!1,this._set("rootItem",null),this._updateTreeMapHierarchy(),e=!0),this._rootItemChanged&&(this._rootItemChanged=!1,e=!0),this._coloringChanged&&(this._coloringChanged=!1,null!=this.colorModel&&null!=this._data&&this.colorModel.initialize&&this.colorModel.initialize(this._data,t.hitch(this,function(e){return this.colorFunc(e,this.store)}))),this._areaChanged&&(this._areaChanged=!1,this._removeAreaForGroup()),void 0!=this.domNode&&null!=this._items){e&&d.empty(this.domNode);var r,o=this.rootItem;if(null!=o){var i=this._getRenderer(o);i&&(this._isLeaf(o)&&(o=i.parentItem),r=i.parentItem)}var n=l.getMarginBox(this.domNode);null!=o?this._buildRenderer(this.domNode,r,o,{x:n.l,y:n.t,w:n.w,h:n.h},0,e):this._buildChildrenRenderers(this.domNode,o||{__treeRoot:!0,children:this._items},0,e,n)}},_setRootItemAttr:function(e){this._rootItemChanged=!0,this._set("rootItem",e)},_setStoreAttr:function(e){var r;if(this._observeHandler&&(this._observeHandler.remove(),this._observeHandler=null),null!=e){var o=e.query(this.query,this.queryOptions);o.observe&&(this._observeHandler=o.observe(t.hitch(this,this._updateItem),!0)),r=s(o,t.hitch(this,this._initItems))}else r=this._initItems([]);return this._set("store",e),r},_initItems:function(e){return this._dataChanged=!0,this._data=e,this.invalidateRendering(),e},_updateItem:function(e,t,r){-1!=t?r!=t?this._data.splice(t,1):this._data[r]=e:-1!=r&&this._data.splice(r,0,e),this._dataChanged=!0,this.invalidateRendering()},_setGroupAttrsAttr:function(t){this._groupingChanged=!0,null==this.groupFuncs&&(this._groupFuncs=null!=t?e.map(t,function(e){return function(t){return t[e]}}):null),this._set("groupAttrs",t)},_setGroupFuncsAttr:function(t){this._groupingChanged=!0,this._set("groupFuncs",this._groupFuncs=t),null==t&&null!=this.groupAttrs&&(this._groupFuncs=e.map(this.groupAttrs,function(e){return function(t){return t[e]}}))},_setAreaAttrAttr:function(e){this._areaChanged=!0,this._set("areaAttr",e)},areaFunc:function(e,t){return this.areaAttr&&this.areaAttr.length>0?parseFloat(e[this.areaAttr]):1},_setAreaFuncAttr:function(e){this._areaChanged=!0,this._set("areaFunc",e)},labelFunc:function(e,t){var r=this.labelAttr&&this.labelAttr.length>0?e[this.labelAttr]:null;return r?r.toString():null},tooltipFunc:function(e,t){var r=this.tooltipAttr&&this.tooltipAttr.length>0?e[this.tooltipAttr]:null;return r?r.toString():null},_setColorModelAttr:function(e){this._coloringChanged=!0,this._set("colorModel",e)},_setColorAttrAttr:function(e){this._coloringChanged=!0,this._set("colorAttr",e)},colorFunc:function(e,t){var r=this.colorAttr&&this.colorAttr.length>0?e[this.colorAttr]:0;return null==r&&(r=0),parseFloat(r)},_setColorFuncAttr:function(e){this._coloringChanged=!0,this._set("colorFunc",e)},createRenderer:function(e,t,r){var o=d.create("div");return"header"!=r&&(c.set(o,"overflow","hidden"),c.set(o,"position","absolute")),o},styleRenderer:function(e,t,r,o){switch(o){case"leaf":c.set(e,"background",this.getColorForItem(t).toHex());case"header":var i=this.getLabelForItem(t);i&&(isNaN(this.labelThreshold)||r<this.labelThreshold)?e.innerHTML=i:d.empty(e)}},_updateTreeMapHierarchy:function(){null!=this._data&&(null!=this._groupFuncs&&this._groupFuncs.length>0?this._items=_.group(this._data,this._groupFuncs,t.hitch(this,this._getAreaForItem)).children:this._items=this._data)},_removeAreaForGroup:function(e){var t;if(null!=e){if(!e.__treeValue)return;delete e.__treeValue,t=e.children}else t=this._items;if(t)for(var r=0;r<t.length;++r)this._removeAreaForGroup(t[r])},_getAreaForItem:function(e){var t=this.areaFunc(e,this.store);return isNaN(t)?0:t},_computeAreaForItem:function(e){var t;if(e.__treeID){if(!(t=e.__treeValue)){t=0;for(var r=e.children,o=0;o<r.length;++o)t+=this._computeAreaForItem(r[o]);e.__treeValue=t}}else t=this._getAreaForItem(e);return t},getColorForItem:function(e){var t=this.colorFunc(e,this.store);return null!=this.colorModel?this.colorModel.getColor(t):new i(t)},getLabelForItem:function(e){return e.__treeName?e.__treeName:this.labelFunc(e,this.store)},_buildChildrenRenderers:function(r,o,i,n,s,a){var h,d=o.children,u=l.getMarginBox(r),c=_.solve(d,u.w,u.h,t.hitch(this,this._computeAreaForItem),!this.isLeftToRight()).rectangles;s&&(c=e.map(c,function(e){return e.x+=s.l,e.y+=s.t,e}));for(var g=0;g<d.length;++g)h=c[g],this._buildRenderer(r,o,d[g],h,i,n,a)},_isLeaf:function(e){return!e.children},_isRoot:function(e){return e.__treeRoot},_getRenderer:function(e,t,r){if(t)for(var o=0;o<r.children.length;++o)if(r.children[o].item==e)return r.children[o];return this.itemToRenderer[this.getIdentity(e)]},_buildRenderer:function(e,t,r,o,i,n,s){var a=this._isLeaf(r),h=n?null:this._getRenderer(r,s,e);h=a?this._updateLeafRenderer(h,r,i):this._updateGroupRenderer(h,r,i),n&&(h.level=i,h.item=r,h.parentItem=t,this.itemToRenderer[this.getIdentity(r)]=h,this.updateRenderers(r));var u=Math.floor(o.x),c=Math.floor(o.y),_=Math.floor(o.x+o.w+1e-11)-u,g=Math.floor(o.y+o.h+1e-11)-c;if(n&&d.place(h,e),l.setMarginBox(h,{l:u,t:c,w:_,h:g}),!a){var p=l.getContentBox(h);this._layoutGroupContent(h,p.w,p.h,i+1,n,s)}this.onRendererUpdated({renderer:h,item:r,kind:a?"leaf":"group",level:i})},_layoutGroupContent:function(e,t,r,o,i,n){var s=h(".dojoxTreeMapHeader",e)[0],a=h(".dojoxTreeMapGroupContent",e)[0];if(null!=s&&null!=a){var d=l.getMarginBox(s);d.h>r?(d.h=r,c.set(a,"display","none")):(c.set(a,"display","block"),l.setMarginBox(a,{l:0,t:d.h,w:t,h:r-d.h}),this._buildChildrenRenderers(a,e.item,o,i,null,n)),l.setMarginBox(s,{l:0,t:0,w:t,h:d.h})}},_updateGroupRenderer:function(e,t,r){var o=null==e;null==e&&(e=this.createRenderer("div",r,"group"),u.add(e,"dojoxTreeMapGroup")),this.styleRenderer(e,t,r,"group");var i=h(".dojoxTreeMapHeader",e)[0];i=this._updateHeaderRenderer(i,t,r),o&&d.place(i,e);var n=h(".dojoxTreeMapGroupContent",e)[0];return n=this._updateGroupContentRenderer(n,t,r),o&&d.place(n,e),e},_updateHeaderRenderer:function(e,t,r){return null==e&&(e=this.createRenderer(t,r,"header"),u.add(e,"dojoxTreeMapHeader"),u.add(e,"dojoxTreeMapHeader_"+r)),this.styleRenderer(e,t,r,"header"),e},_updateLeafRenderer:function(e,t,r){null==e&&(e=this.createRenderer(t,r,"leaf"),u.add(e,"dojoxTreeMapLeaf"),u.add(e,"dojoxTreeMapLeaf_"+r)),this.styleRenderer(e,t,r,"leaf");var o=this.tooltipFunc(t,this.store);return o&&(e.title=o),e},_updateGroupContentRenderer:function(e,t,r){return null==e&&(e=this.createRenderer(t,r,"content"),u.add(e,"dojoxTreeMapGroupContent"),u.add(e,"dojoxTreeMapGroupContent_"+r)),this.styleRenderer(e,t,r,"content"),e},_getRendererFromTarget:function(e){for(var t=e;t!=this.domNode&&!t.item;)t=t.parentNode;return t},_onMouseOver:function(e){var t=this._getRendererFromTarget(e.target);if(t.item){var r=t.item;this._hoveredItem=r,this.updateRenderers(r),this.onItemRollOver({renderer:t,item:r,triggerEvent:e})}},_onMouseOut:function(e){var t=this._getRendererFromTarget(e.target);if(t.item){var r=t.item;this._hoveredItem=null,this.updateRenderers(r),this.onItemRollOut({renderer:t,item:r,triggerEvent:e})}},_onMouseUp:function(e){var t=this._getRendererFromTarget(e.target);t.item&&this.selectFromEvent(e,t.item,t,!0)},onRendererUpdated:function(){},onItemRollOver:function(){},onItemRollOut:function(){},updateRenderers:function(e){if(e){t.isArray(e)||(e=[e]);for(var r=0;r<e.length;r++){var o=e[r],i=this._getRenderer(o);if(i){var n,s=this.isItemSelected(o),a=m("ie");if(s){if(u.add(i,"dojoxTreeMapSelected"),a&&(m("quirks")||a<9)){n=i.previousSibling;var h=c.get(i);n&&u.contains(n,"dojoxTreeMapIEHack")||(n=this.createRenderer(o,-10,"group"),u.add(n,"dojoxTreeMapIEHack"),u.add(n,"dojoxTreeMapSelected"),c.set(n,{position:"absolute",overflow:"hidden"}),d.place(n,i,"before"));var l=2*parseInt(c.get(n,"border-width"));this._isLeaf(o)?l-=1:l+=1,"auto"!=h.left&&c.set(n,{left:parseInt(h.left)+1+"px",top:parseInt(h.top)+1+"px",width:parseInt(h.width)-l+"px",height:parseInt(h.height)-l+"px"})}}else a&&(m("quirks")||a<9)&&(n=i.previousSibling)&&u.contains(n,"dojoxTreeMapIEHack")&&n.parentNode.removeChild(n),u.remove(i,"dojoxTreeMapSelected");this._hoveredItem==o?u.add(i,"dojoxTreeMapHovered"):u.remove(i,"dojoxTreeMapHovered"),s||this._hoveredItem==o?c.set(i,"zIndex",20):c.set(i,"zIndex",m("ie")<=7?0:"auto")}}}}})});
//# sourceMappingURL=../sourcemaps/treemap/TreeMap.js.map
