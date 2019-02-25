/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(t,e){return t(null,{postCreate:function(){!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&(this.textDir=this.getParent().get("textDir"))},_getValueAttr:function(){return e.removeUCCFromText(this.inputNode.value)},_setValueAttr:function(t){this.inherited(arguments),this._applyTextDirToValueNode()},_setTextDirAttr:function(t){t&&this.textDir!==t&&(this.textDir=t,this._applyTextDirToValueNode())},_applyTextDirToValueNode:function(){this.inputNode.value=e.removeUCCFromText(this.inputNode.value),this.inputNode.value=e.enforceTextDirWithUcc(this.inputNode.value,this.textDir)}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/ValuePickerSlot.js.map
