/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","./Container"],function(d,o,e){return d("dojox.mobile.RoundRect",e,{shadow:!1,baseClass:"mblRoundRect",buildRendering:function(){this.inherited(arguments),this.shadow&&o.add(this.domNode,"mblShadow")}})});
//# sourceMappingURL=../sourcemaps/mobile/RoundRect.js.map
