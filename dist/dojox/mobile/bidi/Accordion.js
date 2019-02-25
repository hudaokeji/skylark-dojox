/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common","dojo/dom-class"],function(e,t,i){return e(null,{_setupChild:function(e){this.textDir&&(e.label=t.enforceTextDirWithUcc(e.label,this.textDir)),this.inherited(arguments)},_setIconDir:function(e){i.add(e,"mblAccordionIconParentRtl")}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Accordion.js.map
