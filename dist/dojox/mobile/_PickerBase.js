/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_PickerBase"],function(t,s,i,e,o,r,n){var l=s(r("dojo-bidi")?"dojox.mobile.NonBidi_PickerBase":"dojox.mobile._PickerBase",[o,e,i],{slotClasses:[],slotProps:[],slotOrder:[],buildRendering:function(){this.inherited(arguments),this.slots=[];for(var t=0;t<this.slotClasses.length;t++){var s=this.slotOrder.length?this.slotOrder[t]:t,i=new this.slotClasses[s](this.slotProps[s]);this.addChild(i),this.slots[s]=i}},startup:function(){this._started||(this._duringStartup=!0,this.inherited(arguments),this.reset(),delete this._duringStartup)},getSlots:function(){return this.slots.length?this.slots:t.filter(this.getChildren(),function(t){return-1!==t.declaredClass.indexOf("Slot")})},_getValuesAttr:function(){return t.map(this.getSlots(),function(t){return t.get("value")})},_setValuesAttr:function(s){t.forEach(this.getSlots(),function(t,i){t.set("value",s[i])})},_setColorsAttr:function(s){t.forEach(this.getSlots(),function(t,i){t.setColor&&t.setColor(s[i])})},reset:function(){t.forEach(this.getSlots(),function(t){t.setInitialValue()})}});return r("dojo-bidi")?s("dojox.mobile._PickerBase",[l,n]):l});
//# sourceMappingURL=../sourcemaps/mobile/_PickerBase.js.map
