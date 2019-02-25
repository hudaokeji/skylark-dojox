/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","./TextBox"],function(e,t,i){return e("dojox.mobile.TextArea",i,{baseClass:"mblTextArea",postMixInProperties:function(){!this.value&&this.srcNodeRef&&(this.value=this.srcNodeRef.value),this.inherited(arguments)},buildRendering:function(){this.srcNodeRef||(this.srcNodeRef=t.create("textarea",{})),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mobile/TextArea.js.map
