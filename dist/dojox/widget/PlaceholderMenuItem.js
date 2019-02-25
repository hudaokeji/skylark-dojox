/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/_base/kernel","dojo/query","dijit/registry","dijit/Menu","dijit/MenuItem"],function(e,t,r,i,a,o,d,n,l){a.experimental("dojox.widget.PlaceholderMenuItem");var h=t("dojox.widget.PlaceholderMenuItem",l,{_replaced:!1,_replacedWith:null,_isPlaceholder:!0,postCreate:function(){i.set(this.domNode,"display","none"),this._replacedWith=[],this.label||(this.label=this.containerNode.innerHTML),this.inherited(arguments)},replace:function(t){if(this._replaced)return!1;var r=this.getIndexInParent();if(r<0)return!1;var i=this.getParent();return e.forEach(t,function(e){i.addChild(e,r++)}),this._replacedWith=t,this._replaced=!0,!0},unReplace:function(t){if(!this._replaced)return[];var r=this.getParent();if(!r)return[];var i=this._replacedWith;return e.forEach(this._replacedWith,function(e){r.removeChild(e),t&&e.destroyRecursive()}),this._replacedWith=[],this._replaced=!1,i}});return r.extend(n,{getPlaceholders:function(t){var r=[],i=this.getChildren();return e.forEach(i,function(e){if(!e._isPlaceholder||t&&e.label!=t){if(e._started&&e.popup&&e.popup.getPlaceholders)r=r.concat(e.popup.getPlaceholders(t));else if(!e._started&&e.dropDownContainer){var i=o("[widgetId]",e.dropDownContainer)[0],a=d.byNode(i);a.getPlaceholders&&(r=r.concat(a.getPlaceholders(t)))}}else r.push(e)},this),r}}),h});
//# sourceMappingURL=../sourcemaps/widget/PlaceholderMenuItem.js.map
