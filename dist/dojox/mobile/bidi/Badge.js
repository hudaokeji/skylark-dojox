/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common"],function(t,e){return t(null,{textDir:"",setValue:function(t){this.domNode.firstChild.innerHTML=e.enforceTextDirWithUcc(t,this.textDir)},setTextDir:function(t){this.textDir!==t&&(this.textDir=t,this.domNode.firstChild.innerHTML=e.enforceTextDirWithUcc(e.removeUCCFromText(this.domNode.firstChild.innerHTML),this.textDir))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Badge.js.map
