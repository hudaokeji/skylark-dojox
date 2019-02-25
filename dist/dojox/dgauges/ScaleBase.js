/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojox/gfx","dojo/_base/array","dojox/widget/_Invalidating","dojo/_base/sniff"],function(t,i,e,n,r,s){return i("dojox.dgauges.ScaleBase",r,{scaler:null,font:null,labelPosition:null,labelGap:1,tickStroke:null,_gauge:null,_gfxGroup:null,_bgGroup:null,_fgGroup:null,_indicators:null,_indicatorsIndex:null,_indicatorsRenderers:null,constructor:function(){this._indicators=[],this._indicatorsIndex={},this._indicatorsRenderers={},this._gauge=null,this._gfxGroup=null,this.tickStroke={color:"black",width:s("ie")<=8?1:.5},this.addInvalidatingProperties(["scaler","font","labelGap","labelPosition","tickShapeFunc","tickLabelFunc","tickStroke"]),this.watch("scaler",t.hitch(this,this._watchScaler))},postscript:function(t){this.inherited(arguments),t&&t.scaler&&this._watchScaler("scaler",null,t.scaler)},_watchers:null,_watchScaler:function(i,e,r){n.forEach(this._watchers,t.hitch(this,function(t){t.unwatch()}));var s=r.watchedProperties;this._watchers=[],n.forEach(s,t.hitch(this,function(i){this._watchers.push(r.watch(i,t.hitch(this,this.invalidateRendering)))}))},_getFont:function(){var t=this.font;return t||(t=this._gauge.font),t||(t=e.defaultFont),t},positionForValue:function(t){return 0},valueForPosition:function(t){},tickLabelFunc:function(t){return t.isMinor?null:String(t.value)},tickShapeFunc:function(t,i,e){return t.createLine({x1:0,y1:0,x2:e.isMinor?6:10,y2:0}).setStroke(this.tickStroke)},getIndicatorRenderer:function(t){return this._indicatorsRenderers[t]},removeIndicator:function(t){var i=this._indicatorsIndex[t];if(i){i._gfxGroup.removeShape();var e=this._indicators.indexOf(i);this._indicators.splice(e,1),i._disconnectListeners(),delete this._indicatorsIndex[t],delete this._indicatorsRenderers[t]}return this._gauge&&this._gauge._resetMainIndicator(),this.invalidateRendering(),i},getIndicator:function(t){return this._indicatorsIndex[t]},addIndicator:function(t,i,e){this._indicatorsIndex[t]&&this._indicatorsIndex[t]!=i&&this.removeIndicator(t),this._indicators.push(i),this._indicatorsIndex[t]=i,this._ticksGroup||this._createSubGroups();var n=e?this._bgGroup:this._fgGroup;return i._gfxGroup=n.createGroup(),i.scale=this,this.invalidateRendering()},_createSubGroups:function(){this._gfxGroup&&!this._ticksGroup&&(this._bgGroup=this._gfxGroup.createGroup(),this._ticksGroup=this._gfxGroup.createGroup(),this._fgGroup=this._gfxGroup.createGroup())},refreshRendering:function(){this._ticksGroup||this._createSubGroups()}})});
//# sourceMappingURL=../sourcemaps/dgauges/ScaleBase.js.map
