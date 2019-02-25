/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","./common"],function(e,t,i){return t(null,{postCreate:function(){this.inherited(arguments),this.textDir&&this._applyTextDirToTextElements()},buildRendering:function(){this.inherited(arguments),this.isLeftToRight()||(this.arrow.style.left="0px")},_setTextDirAttr:function(e){e&&this.textDir!==e&&(this.textDir=e,this._applyTextDirToTextElements())},_applyTextDirToTextElements:function(){e.forEach(this.domNode.childNodes,function(e){var t=1===e.nodeType&&1===e.childNodes.length?e.firstChild:e;3===t.nodeType&&t.nodeValue&&-1!=t.nodeValue.search(/[.\S]/)&&(t.nodeValue=i.removeUCCFromText(t.nodeValue),t.nodeValue=i.enforceTextDirWithUcc(t.nodeValue,this.textDir))},this)}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Tooltip.js.map
