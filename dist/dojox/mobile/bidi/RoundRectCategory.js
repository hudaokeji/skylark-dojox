/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setLabelAttr:function(t){this.textDir&&(t=e.enforceTextDirWithUcc(t,this.textDir)),this.inherited(arguments)},_setTextDirAttr:function(t){t&&this.textDir!==t&&(this.textDir=t,this.label=e.removeUCCFromText(this.label),this.set("label",this.label))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/RoundRectCategory.js.map
