/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(t,e){return t(null,{_setLabelAttr:function(t){if(this._set("label",t),this.labelNode.innerHTML=this._cv?this._cv(t):t,!this.textDir){var i=this.getParent();this.textDir=i&&i.get("textDir")?i.get("textDir"):""}this.labelNode.innerHTML=e.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir)},_setTextDirAttr:function(t){this._created&&this.textDir===t||(this._set("textDir",t),this.labelNode.innerHTML=e.enforceTextDirWithUcc(e.removeUCCFromText(this.labelNode.innerHTML),this.textDir),this.badgeObj&&this.badgeObj.setTextDir&&this.badgeObj.setTextDir(t))},getTransOpts:function(){var t=this.inherited(arguments);return this.isLeftToRight()||(t.transitionDir=-1*t.transitionDir),t}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/_ItemBase.js.map
