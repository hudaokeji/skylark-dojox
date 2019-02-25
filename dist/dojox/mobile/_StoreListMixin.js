/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","./_StoreMixin","./ListItem","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin"],function(t,i,e,r,o,n){var s=i(o("dojo-bidi")?"dojox.mobile._NonBidiStoreListMixin":"dojox.mobile._StoreListMixin",e,{append:!1,itemMap:null,itemRenderer:r,buildRendering:function(){if(this.inherited(arguments),this.store){var t=this.store;this.store=null,this.setStore(t,this.query,this.queryOptions)}},createListItem:function(t){return new this.itemRenderer(this._createItemProperties(t))},_createItemProperties:function(t){var i={};for(var e in t.label||(i.label=t[this.labelProperty]),o("dojo-bidi")&&void 0===i.dir&&(i.dir=this.isLeftToRight()?"ltr":"rtl"),t)i[this.itemMap&&this.itemMap[e]||e]=t[e];return i},_setDirAttr:function(t){return t},generateList:function(i){this.append||t.forEach(this.getChildren(),function(t){t.destroyRecursive()}),t.forEach(i,function(i,e){this.addChild(this.createListItem(i)),i[this.childrenProperty]&&t.forEach(i[this.childrenProperty],function(t,i){this.addChild(this.createListItem(t))},this)},this)},onComplete:function(t){this.generateList(t)},onError:function(){},onAdd:function(t,i){this.addChild(this.createListItem(t),i)},onUpdate:function(t,i){this.getChildren()[i].set(this._createItemProperties(t))},onDelete:function(t,i){this.getChildren()[i].destroyRecursive()}});return o("dojo-bidi")?i("dojox.mobile._StoreListMixin",[s,n]):s});
//# sourceMappingURL=../sourcemaps/mobile/_StoreListMixin.js.map
