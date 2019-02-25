/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase"],function(e,s,o,t){return e("dojox.mobile.ProgressBar",t,{value:"0",maximum:100,label:"",baseClass:"mblProgressBar",buildRendering:function(){this.inherited(arguments),this.progressNode=o.create("div",{className:"mblProgressBarProgress"},this.domNode),this.msgNode=o.create("div",{className:"mblProgressBarMsg"},this.domNode)},_setValueAttr:function(e){e+="",this._set("value",e);var o=Math.min(100,-1!=e.indexOf("%")?parseFloat(e):this.maximum?100*e/this.maximum:0);this.progressNode.style.width=o+"%",s.toggle(this.progressNode,"mblProgressBarNotStarted",!o),s.toggle(this.progressNode,"mblProgressBarComplete",100==o),this.onChange(e,this.maximum,o)},_setLabelAttr:function(e){this.msgNode.innerHTML=e},onChange:function(){}})});
//# sourceMappingURL=../sourcemaps/mobile/ProgressBar.js.map
