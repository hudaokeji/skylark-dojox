/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setLabelAttr:function(t){this.inherited(arguments,[this._cv?this._cv(t):t]),this.focusNode.innerHTML=e.enforceTextDirWithUcc(this.focusNode.innerHTML,this.textDir)},_setTextDirAttr:function(t){this._created&&this.textDir===t||(this._set("textDir",t),this.focusNode.innerHTML=e.enforceTextDirWithUcc(e.removeUCCFromText(this.focusNode.innerHTML),this.textDir))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Button.js.map
