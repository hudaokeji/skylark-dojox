/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(s,t,i,e,d){return s("dojox.calendar.DecorationRenderer",[i,e],{templateString:'<div class="dojoxCalendarDecoration"></div>',_setItemAttr:function(s){null==s?(this.item&&this.item.cssClass&&t.remove(this.domNode,this.item.cssClass),this.item=null):null!=this.item?(this.item.cssClass!=s.cssClass&&this.item.cssClass&&t.remove(this.domNode,this.item.cssClass),this.item=lang.mixin(this.item,s),s.cssClass&&t.add(this.domNode,s.cssClass)):(this.item=s,s.cssClass&&t.add(this.domNode,s.cssClass))},postCreate:function(){this.inherited(arguments),this._applyAttributes()}})});
//# sourceMappingURL=../sourcemaps/calendar/DecorationRenderer.js.map
