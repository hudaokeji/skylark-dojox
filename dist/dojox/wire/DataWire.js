/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.DataWire"),dojo.require("dojox.wire.Wire"),dojo.declare("dojox.wire.DataWire",dojox.wire.Wire,{_wireClass:"dojox.wire.DataWire",constructor:function(t){!this.dataStore&&this.parent&&(this.dataStore=this.parent.dataStore)},_getValue:function(t){if(!t||!this.attribute||!this.dataStore)return t;var e=t,r=this.attribute.split(".");for(var i in r)if(!(e=this._getAttributeValue(e,r[i])))return;return e},_setValue:function(t,e){if(!t||!this.attribute||!this.dataStore)return t;for(var r=t,i=this.attribute.split("."),a=i.length-1,s=0;s<a;s++)if(!(r=this._getAttributeValue(r,i[s])))return;return this._setAttributeValue(r,i[a],e),t},_getAttributeValue:function(t,e){var r=void 0,i=e.indexOf("[");if(i>=0){var a=e.indexOf("]"),s=e.substring(i+1,a);e=e.substring(0,i);var u=this.dataStore.getValues(t,e);u&&(r=s?u[s]:u)}else r=this.dataStore.getValue(t,e);return r},_setAttributeValue:function(t,e,r){var i=e.indexOf("[");if(i>=0){var a=e.indexOf("]"),s=e.substring(i+1,a);e=e.substring(0,i);var u=null;s?((u=this.dataStore.getValues(t,e))||(u=[]),u[s]=r):u=r,this.dataStore.setValues(t,e,u)}else this.dataStore.setValue(t,e,r)}});
//# sourceMappingURL=../sourcemaps/wire/DataWire.js.map
