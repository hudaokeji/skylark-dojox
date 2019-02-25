/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/on","dojo/dom-style","dojo/sniff","dijit/_WidgetBase","dojox/html/metrics"],function(t,i,e,o,s,l,n,r){return t("dojox.calendar._ScrollBarBase",n,{value:0,minimum:0,maximum:100,direction:"vertical",_vertical:!0,_scrollHandle:null,containerSize:0,buildRendering:function(){this.inherited(arguments),this.own(o(this.domNode,"scroll",e.hitch(this,function(t){this.value=this._getDomScrollerValue(),this.onChange(this.value),this.onScroll(this.value)})))},_getDomScrollerValue:function(){if(this._vertical)return this.domNode.scrollTop;if(!this.isLeftToRight()){if(l("webkit")||7==l("ie"))return void 0==this._scW&&(this._scW=r.getScrollbar().w),this.maximum-this.domNode.scrollLeft-this.containerSize+this._scW;if(l("mozilla"))return-this.domNode.scrollLeft}return this.domNode.scrollLeft},_setDomScrollerValue:function(t){this.domNode[this._vertical?"scrollTop":"scrollLeft"]=t},_setValueAttr:function(t){t=Math.min(this.maximum,t),t=Math.max(this.minimum,t),this.value!=t&&(this.value=t,this.onChange(t),this._setDomScrollerValue(t))},onChange:function(t){},onScroll:function(t){},_setMinimumAttr:function(t){t=Math.min(t,this.maximum),this.minimum=t},_setMaximumAttr:function(t){t=Math.max(t,this.minimum),this.maximum=t,s.set(this.content,this._vertical?"height":"width",t+"px")},_setDirectionAttr:function(t){"vertical"==t?(t="vertical",this._vertical=!0):(t="horizontal",this._vertical=!1),this._set("direction",t)}})});
//# sourceMappingURL=../sourcemaps/calendar/_ScrollBarBase.js.map
