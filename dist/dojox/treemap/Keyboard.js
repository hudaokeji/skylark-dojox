/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/_base/declare","dojo/on","dojo/keys","dojo/dom-attr","./_utils","dijit/_FocusMixin"],function(e,t,i,o,n,s,d,r,h){return o("dojox.treemap.Keyboard",h,{tabIndex:"0",_setTabIndexAttr:"domNode",constructor:function(){},postCreate:function(){this.inherited(arguments),this.own(n(this.domNode,"keydown",t.hitch(this,this._onKeyDown))),this.own(n(this.domNode,"mousedown",t.hitch(this,this._onMouseDown)))},createRenderer:function(e,t,i){var o=this.inherited(arguments);return d.set(o,"tabindex","-1"),o},_onMouseDown:function(e){this.domNode.focus()},_onKeyDown:function(o){var n=this.get("selectedItem");if(n){var d,h,a,c,_=this.itemToRenderer[this.getIdentity(n)],u=_.parentItem;if(o.keyCode!=s.UP_ARROW&&o.keyCode!=s.NUMPAD_MINUS&&o.keyCode!=s.NUMPAD_PLUS){if(!(d=o.keyCode==s.DOWN_ARROW?n.children:u.children))return;a=(h=r.initElements(d,t.hitch(this,this._computeAreaForItem)).elements)[e.indexOf(d,n)],h.sort(function(e,t){return t.size-e.size})}switch(o.keyCode){case s.LEFT_ARROW:c=d[h[Math.max(0,e.indexOf(h,a)-1)].index];break;case s.RIGHT_ARROW:c=d[h[Math.min(h.length-1,e.indexOf(h,a)+1)].index];break;case s.DOWN_ARROW:c=d[h[0].index];break;case s.UP_ARROW:c=u;break;case s.NUMPAD_PLUS:!this._isLeaf(n)&&this.drillDown&&(this.drillDown(_),i.stop(o));break;case s.NUMPAD_MINUS:!this._isLeaf(n)&&this.drillUp&&(this.drillUp(_),i.stop(o))}c&&(this._isRoot(c)||(this.set("selectedItem",c),i.stop(o)))}}})});
//# sourceMappingURL=../sourcemaps/treemap/Keyboard.js.map
