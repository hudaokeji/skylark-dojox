/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","./Pane","./iconUtils","./sniff"],function(e,o,s,t,n){return e("dojox.mobile._IconItemPane",s,{iconPos:"",closeIconRole:"",closeIconTitle:"",label:"",closeIcon:"mblDomButtonBlueMinus",baseClass:"mblIconItemPane",tabIndex:"0",_setTabIndexAttr:"closeIconNode",buildRendering:function(){this.inherited(arguments),this.hide(),this.closeHeaderNode=o.create("h2",{className:"mblIconItemPaneHeading"},this.domNode),this.closeIconNode=o.create("div",{className:"mblIconItemPaneIcon",role:this.closeIconRole,title:this.closeIconTitle},this.closeHeaderNode),this.labelNode=o.create("span",{className:"mblIconItemPaneTitle"},this.closeHeaderNode),this.containerNode=o.create("div",{className:"mblContent"},this.domNode)},show:function(){this.domNode.style.display=""},hide:function(){this.domNode.style.display="none"},isOpen:function(e){return"none"!==this.domNode.style.display},_setLabelAttr:function(e){this._set("label",e),this.labelNode.innerHTML=this._cv?this._cv(e):e},_setCloseIconAttr:function(e){this._set("closeIcon",e),this.closeIconNode=t.setIcon(e,this.iconPos,this.closeIconNode,null,this.closeHeaderNode),n("windows-theme")&&""!==this.closeIconTitle&&(this.closeButtonNode=o.create("span",{className:"mblButton mblCloseButton",innerHTML:this.closeIconTitle,style:{display:"none"}},this.closeIconNode))}})});
//# sourceMappingURL=../sourcemaps/mobile/_IconItemPane.js.map
