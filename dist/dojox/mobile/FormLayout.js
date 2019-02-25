/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","./Container","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/FormLayout"],function(o,i,d,t,m){var a=o(t("dojo-bidi")?"dojox.mobile.NonBidiFormLayout":"dojox.mobile.FormLayout",d,{columns:"auto",rightAlign:!1,baseClass:"mblFormLayout",buildRendering:function(){this.inherited(arguments),"auto"==this.columns?i.add(this.domNode,"mblFormLayoutAuto"):"single"==this.columns?i.add(this.domNode,"mblFormLayoutSingleCol"):"two"==this.columns&&i.add(this.domNode,"mblFormLayoutTwoCol"),this.rightAlign&&i.add(this.domNode,"mblFormLayoutRightAlign")}});return t("dojo-bidi")?o("dojox.mobile.FormLayout",[a,m]):a});
//# sourceMappingURL=../sourcemaps/mobile/FormLayout.js.map
