/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase"],function(e,t){return e("dojox.mvc.Element",t,{_setInnerTextAttr:{node:"domNode",type:"innerText"},_setInnerHTMLAttr:{node:"domNode",type:"innerHTML"},buildRendering:function(){if(this.inherited(arguments),/select|input|textarea/i.test(this.domNode.tagName)){var e=this,t=this.focusNode=this.domNode;this.on("change",function(n){var i=/^checkbox$/i.test(t.getAttribute("type"))?"checked":"value";e._set(i,e.get(i))})}},_getCheckedAttr:function(){return this.domNode.checked},_getValueAttr:function(){return this.domNode.value}})});
//# sourceMappingURL=../sourcemaps/mvc/Element.js.map
