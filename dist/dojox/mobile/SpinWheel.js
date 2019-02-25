/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./_PickerBase","./SpinWheelSlot"],function(e,i,t,o){return e("dojox.mobile.SpinWheel",o,{baseClass:"mblSpinWheel",buildRendering:function(){this.inherited(arguments),t.create("div",{className:"mblSpinWheelBar"},this.domNode)},startup:function(){this._started||(this.centerPos=Math.round(this.domNode.offsetHeight/2),this.inherited(arguments))},resize:function(){this.centerPos=Math.round(this.domNode.offsetHeight/2),i.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},addChild:function(e,i){this.inherited(arguments),this._started&&e.setInitialValue()}})});
//# sourceMappingURL=../sourcemaps/mobile/SpinWheel.js.map
