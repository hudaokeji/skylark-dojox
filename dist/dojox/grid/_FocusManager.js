/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/event","dojo/_base/sniff","dojo/query","./util","dojo/_base/html"],function(e,t,s,i,o,d,l,n,r){return s("dojox.grid._FocusManager",null,{constructor:function(e){this.grid=e,this.cell=null,this.rowIndex=-1,this._connects=[],this._headerConnects=[],this.headerMenu=this.grid.headerMenu,this._connects.push(i.connect(this.grid.domNode,"onfocus",this,"doFocus")),this._connects.push(i.connect(this.grid.domNode,"onblur",this,"doBlur")),this._connects.push(i.connect(this.grid.domNode,"mousedown",this,"_mouseDown")),this._connects.push(i.connect(this.grid.domNode,"mouseup",this,"_mouseUp")),this._connects.push(i.connect(this.grid.domNode,"oncontextmenu",this,"doContextMenu")),this._connects.push(i.connect(this.grid.lastFocusNode,"onfocus",this,"doLastNodeFocus")),this._connects.push(i.connect(this.grid.lastFocusNode,"onblur",this,"doLastNodeBlur")),this._connects.push(i.connect(this.grid,"_onFetchComplete",this,"_delayedCellFocus")),this._connects.push(i.connect(this.grid,"postrender",this,"_delayedHeaderFocus"))},destroy:function(){e.forEach(this._connects,i.disconnect),e.forEach(this._headerConnects,i.disconnect),delete this.grid,delete this.cell},_colHeadNode:null,_colHeadFocusIdx:null,_contextMenuBindNode:null,tabbingOut:!1,focusClass:"dojoxGridCellFocus",focusView:null,initFocusView:function(){this.focusView=this.grid.views.getFirstScrollingView()||this.focusView||this.grid.views.views[0],this._initColumnHeaders()},isFocusCell:function(e,t){return this.cell==e&&this.rowIndex==t},isLastFocusCell:function(){return!!this.cell&&(this.rowIndex==this.grid.rowCount-1&&this.cell.index==this.grid.layout.cellCount-1)},isFirstFocusCell:function(){return!!this.cell&&(0===this.rowIndex&&0===this.cell.index)},isNoFocusCell:function(){return this.rowIndex<0||!this.cell},isNavHeader:function(){return!!this._colHeadNode},getHeaderIndex:function(){return this._colHeadNode?e.indexOf(this._findHeaderCells(),this._colHeadNode):-1},_focusifyCellNode:function(e){var t=this.cell&&this.cell.getNode(this.rowIndex);if(t&&(r.toggleClass(t,this.focusClass,e),e)){var s=this.scrollIntoView();try{!d("webkit")&&this.grid.edit.isEditing()||(n.fire(t,"focus"),s&&(this.cell.view.scrollboxNode.scrollLeft=s))}catch(e){}}},_delayedCellFocus:function(){if(!this.isNavHeader()&&this.grid.focused){var e=this.cell&&this.cell.getNode(this.rowIndex);if(e)try{this.grid.edit.isEditing()||(r.toggleClass(e,this.focusClass,!0),this._colHeadNode&&this.blurHeader(),n.fire(e,"focus"))}catch(e){}}},_delayedHeaderFocus:function(){this.isNavHeader()&&this.focusHeader()},_initColumnHeaders:function(){e.forEach(this._headerConnects,i.disconnect),this._headerConnects=[];for(var t=this._findHeaderCells(),s=0;s<t.length;s++)this._headerConnects.push(i.connect(t[s],"onfocus",this,"doColHeaderFocus")),this._headerConnects.push(i.connect(t[s],"onblur",this,"doColHeaderBlur"))},_findHeaderCells:function(){for(var e=l("th",this.grid.viewsHeaderNode),t=[],s=0;s<e.length;s++){var i=e[s],o=r.hasAttr(i,"tabIndex"),d=r.attr(i,"tabIndex");o&&d<0&&t.push(i)}return t},_setActiveColHeader:function(e,t,s){this.grid.domNode.setAttribute("aria-activedescendant",e.id),null!=s&&s>=0&&s!=t&&r.toggleClass(this._findHeaderCells()[s],this.focusClass,!1),r.toggleClass(e,this.focusClass,!0),this._colHeadNode=e,this._colHeadFocusIdx=t,this._scrollHeader(this._colHeadFocusIdx)},scrollIntoView:function(){var e=this.cell?this._scrollInfo(this.cell):null;if(!e||!e.s)return null;var t=this.grid.scroller.findScrollTop(this.rowIndex);return e.n&&e.sr&&(e.n.offsetLeft+e.n.offsetWidth>e.sr.l+e.sr.w?e.s.scrollLeft=e.n.offsetLeft+e.n.offsetWidth-e.sr.w:e.n.offsetLeft<e.sr.l&&(e.s.scrollLeft=e.n.offsetLeft)),e.r&&e.sr&&(t+e.r.offsetHeight>e.sr.t+e.sr.h?this.grid.setScrollTop(t+e.r.offsetHeight-e.sr.h):t<e.sr.t&&this.grid.setScrollTop(t)),e.s.scrollLeft},_scrollInfo:function(e,t){if(e){var s=e,i=s.view.scrollboxNode,o={w:i.clientWidth,l:i.scrollLeft,t:i.scrollTop,h:i.clientHeight},d=s.view.getRowNode(this.rowIndex);return{c:s,s:i,sr:o,n:t||e.getNode(this.rowIndex),r:d}}return null},_scrollHeader:function(e){var t=null;if(this._colHeadNode){var s=this.grid.getCell(e);if(!s)return;t=this._scrollInfo(s,s.getNode(0))}if(t&&t.s&&t.sr&&t.n){var i=t.sr.l+t.sr.w;t.n.offsetLeft+t.n.offsetWidth>i?t.s.scrollLeft=t.n.offsetLeft+t.n.offsetWidth-t.sr.w:t.n.offsetLeft<t.sr.l?t.s.scrollLeft=t.n.offsetLeft:d("ie")<=7&&s&&s.view.headerNode&&(s.view.headerNode.scrollLeft=t.s.scrollLeft)}},_isHeaderHidden:function(){var e=this.focusView;if(!e)for(var t,s=0;t=this.grid.views.views[s];s++)if(t.headerNode){e=t;break}return e&&"none"==r.getComputedStyle(e.headerNode).display},colSizeAdjust:function(e,t,s){var i=this._findHeaderCells(),o=this.focusView;if(!o||!o.header.tableMap.map)for(var d,l=0;d=this.grid.views.views[l];l++)if(d.header.tableMap.map){o=d;break}var n=i[t];if(o&&(t!=i.length-1||0!==t)&&(o.content.baseDecorateEvent(e),e.cellNode=n,e.cellIndex=o.content.getCellNodeIndex(e.cellNode),e.cell=e.cellIndex>=0?this.grid.getCell(e.cellIndex):null,o.header.canResize(e))){var r={l:s},c=o.header.colResizeSetup(e,!1);o.header.doResizeColumn(c,null,r),o.update()}},styleRow:function(e){},setFocusIndex:function(e,t){this.setFocusCell(this.grid.getCell(t),e)},setFocusCell:function(e,s){e&&!this.isFocusCell(e,s)&&(this.tabbingOut=!1,this._colHeadNode&&this.blurHeader(),this._colHeadNode=this._colHeadFocusIdx=null,this.focusGridView(),this._focusifyCellNode(!1),this.cell=e,this.rowIndex=s,this._focusifyCellNode(!0)),d("opera")?setTimeout(t.hitch(this.grid,"onCellFocus",this.cell,this.rowIndex),1):this.grid.onCellFocus(this.cell,this.rowIndex)},next:function(){if(this.cell){var e=this.rowIndex,t=this.cell.index+1,s=this.grid.layout.cellCount-1,i=this.grid.rowCount-1;if(t>s&&(t=0,e++),e>i&&(t=s,e=i),this.grid.edit.isEditing()){var o=this.grid.getCell(t);if(!this.isLastFocusCell()&&(!o.editable||this.grid.canEdit&&!this.grid.canEdit(o,e)))return this.cell=o,this.rowIndex=e,void this.next()}this.setFocusIndex(e,t)}},previous:function(){if(this.cell){var e=this.rowIndex||0,t=(this.cell.index||0)-1;if(t<0&&(t=this.grid.layout.cellCount-1,e--),e<0&&(e=0,t=0),this.grid.edit.isEditing()){var s=this.grid.getCell(t);if(!this.isFirstFocusCell()&&!s.editable)return this.cell=s,this.rowIndex=e,void this.previous()}this.setFocusIndex(e,t)}},move:function(t,s){var i=s<0?-1:1;if(this.isNavHeader()){var o=this._findHeaderCells(),d=currentIdx=e.indexOf(o,this._colHeadNode);for(currentIdx+=s;currentIdx>=0&&currentIdx<o.length&&"none"==o[currentIdx].style.display;)currentIdx+=i;currentIdx>=0&&currentIdx<o.length&&this._setActiveColHeader(o[currentIdx],currentIdx,d)}else if(this.cell){var l=this.grid.scroller,n=this.rowIndex,c=this.grid.rowCount-1,h=Math.min(c,Math.max(0,n+t));t&&(t>0?h>l.getLastPageRow(l.page)&&this.grid.setScrollTop(this.grid.scrollTop+l.findScrollTop(h)-l.findScrollTop(n)):t<0&&h<=l.getPageRow(l.page)&&this.grid.setScrollTop(this.grid.scrollTop-l.findScrollTop(n)-l.findScrollTop(h)));for(var u=this.grid.layout.cellCount-1,a=this.cell.index,f=Math.min(u,Math.max(0,a+s)),g=this.grid.getCell(f);f>=0&&f<u&&g&&!0===g.hidden;)f+=i,g=this.grid.getCell(f);g&&!0!==g.hidden||(f=a);var _=g.getNode(h);if(!_&&t)return void(h+t>=0&&h+t<=c&&this.move(t>0?++t:--t,s));if((!_||"none"===r.style(_,"display"))&&s)return void(f+s>=0&&f+s<=u&&this.move(t,s>0?++s:--s));this.setFocusIndex(h,f),t&&this.grid.updateRow(n)}},previousKey:function(e){this.grid.edit.isEditing()?(o.stop(e),this.previous()):this.isNavHeader()||this._isHeaderHidden()?(this.tabOut(this.grid.domNode),null!=this._colHeadFocusIdx&&(r.toggleClass(this._findHeaderCells()[this._colHeadFocusIdx],this.focusClass,!1),this._colHeadFocusIdx=null),this._focusifyCellNode(!1)):(this.grid.domNode.focus(),o.stop(e))},nextKey:function(e){this.grid.rowCount;e.target===this.grid.domNode&&null==this._colHeadFocusIdx?(this.focusHeader(),o.stop(e)):this.isNavHeader()?(this.blurHeader(),this.findAndFocusGridCell()||this.tabOut(this.grid.lastFocusNode),this._colHeadNode=this._colHeadFocusIdx=null):this.grid.edit.isEditing()?(o.stop(e),this.next()):this.tabOut(this.grid.lastFocusNode)},tabOut:function(e){this.tabbingOut=!0,e.focus()},focusGridView:function(){n.fire(this.focusView,"focus")},focusGrid:function(e){this.focusGridView(),this._focusifyCellNode(!0)},findAndFocusGridCell:function(){var e=!0,t=0===this.grid.rowCount;if(this.isNoFocusCell()&&!t){var s=0;this.grid.getCell(s).hidden&&(s=this.isNavHeader()?this._colHeadFocusIdx:0),this.setFocusIndex(0,s)}else this.cell&&!t?(this.focusView&&!this.focusView.rowNodes[this.rowIndex]&&this.grid.scrollToRow(this.rowIndex),this.focusGrid()):e=!1;return this._colHeadNode=this._colHeadFocusIdx=null,e},focusHeader:function(){var e=this._findHeaderCells(),t=this._colHeadFocusIdx;for(this._isHeaderHidden()?this.findAndFocusGridCell():this._colHeadFocusIdx||(this.isNoFocusCell()?this._colHeadFocusIdx=0:this._colHeadFocusIdx=this.cell.index),this._colHeadNode=e[this._colHeadFocusIdx];this._colHeadNode&&this._colHeadFocusIdx>=0&&this._colHeadFocusIdx<e.length&&"none"==this._colHeadNode.style.display;)this._colHeadFocusIdx++,this._colHeadNode=e[this._colHeadFocusIdx];this._colHeadNode&&"none"!=this._colHeadNode.style.display?(this.headerMenu&&this._contextMenuBindNode!=this.grid.domNode&&(this.headerMenu.unBindDomNode(this.grid.viewsHeaderNode),this.headerMenu.bindDomNode(this.grid.domNode),this._contextMenuBindNode=this.grid.domNode),this._setActiveColHeader(this._colHeadNode,this._colHeadFocusIdx,t),this._scrollHeader(this._colHeadFocusIdx),this._focusifyCellNode(!1)):this.findAndFocusGridCell()},blurHeader:function(){if(r.removeClass(this._colHeadNode,this.focusClass),r.removeAttr(this.grid.domNode,"aria-activedescendant"),this.headerMenu&&this._contextMenuBindNode==this.grid.domNode){var e=this.grid.viewsHeaderNode;this.headerMenu.unBindDomNode(this.grid.domNode),this.headerMenu.bindDomNode(e),this._contextMenuBindNode=e}},doFocus:function(e){e&&e.target!=e.currentTarget?o.stop(e):this._clickFocus||(this.tabbingOut||this.focusHeader(),this.tabbingOut=!1,o.stop(e))},doBlur:function(e){o.stop(e)},doContextMenu:function(e){this.headerMenu||o.stop(e)},doLastNodeFocus:function(e){this.tabbingOut?this._focusifyCellNode(!1):this.grid.rowCount>0?(this.isNoFocusCell()&&this.setFocusIndex(0,0),this._focusifyCellNode(!0)):this.focusHeader(),this.tabbingOut=!1,o.stop(e)},doLastNodeBlur:function(e){o.stop(e)},doColHeaderFocus:function(e){this._setActiveColHeader(e.target,r.attr(e.target,"idx"),this._colHeadFocusIdx),this._scrollHeader(this.getHeaderIndex()),o.stop(e)},doColHeaderBlur:function(e){r.toggleClass(e.target,this.focusClass,!1)},_mouseDown:function(e){this._clickFocus=dojo.some(this.grid.views.views,function(t){return t.scrollboxNode===e.target})},_mouseUp:function(e){this._clickFocus=!1}})});
//# sourceMappingURL=../sourcemaps/grid/_FocusManager.js.map
