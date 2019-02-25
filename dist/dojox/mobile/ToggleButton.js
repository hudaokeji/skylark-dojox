/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-class","dijit/form/_ToggleButtonMixin","./Button"],function(e,o,t,s){return e("dojox.mobile.ToggleButton",[s,t],{baseClass:"mblToggleButton",_setCheckedAttr:function(){this.inherited(arguments);var e=(this.baseClass+" "+this.class).replace(/(\S+)\s*/g,"$1Checked ").split(" ");o[this.checked?"add":"remove"](this.focusNode||this.domNode,e)}})});
//# sourceMappingURL=../sourcemaps/mobile/ToggleButton.js.map
