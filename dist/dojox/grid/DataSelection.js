/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./_SelectionPreserver","./Selection"],function(e,t,r){return e("dojox.grid.DataSelection",r,{constructor:function(e){e.keepSelection&&(this.preserver=new t(this))},destroy:function(){this.preserver&&this.preserver.destroy()},getFirstSelected:function(){var e=r.prototype.getFirstSelected.call(this);return-1==e?null:this.grid.getItem(e)},getNextSelected:function(e){var t=this.grid.getItemIndex(e),i=r.prototype.getNextSelected.call(this,t);return-1==i?null:this.grid.getItem(i)},getSelected:function(){for(var e=[],t=0,r=this.selected.length;t<r;t++)this.selected[t]&&e.push(this.grid.getItem(t));return e},addToSelection:function(e){if("none"!=this.mode){var t=null;t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),r.prototype.addToSelection.call(this,t)}},deselect:function(e){if("none"!=this.mode){var t=null;t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),r.prototype.deselect.call(this,t)}},deselectAll:function(e){var t=null;e||"number"==typeof e?(t="number"==typeof e||"string"==typeof e?e:this.grid.getItemIndex(e),r.prototype.deselectAll.call(this,t)):this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/grid/DataSelection.js.map
