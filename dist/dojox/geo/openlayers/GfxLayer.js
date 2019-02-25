/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/connect","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","./Feature","./Layer"],function(e,t,i,r,o,s,n){return e("dojox.geo.openlayers.GfxLayer",n,{_viewport:null,constructor:function(e,i){var o,s=r.createSurface(this.olLayer.div,100,100);this._surface=s,o=i&&i.viewport?i.viewport:s.createGroup(),this.setViewport(o),t.connect(this.olLayer,"onMapResize",this,"onMapResize"),this.olLayer.getDataExtent=this.getDataExtent},getViewport:function(){return this._viewport},setViewport:function(e){this._viewport&&this._viewport.removeShape(),this._viewport=e,this._surface.add(e)},onMapResize:function(){this._surfaceSize()},setMap:function(e){this.inherited(arguments),this._surfaceSize()},getDataExtent:function(){return this._surface.getDimensions()},getSurface:function(){return this._surface},_surfaceSize:function(){var e=this.olLayer.map.getSize();this._surface.setDimensions(e.w,e.h)},moveTo:function(e){var t=i.get(this.olLayer.map.layerContainerDiv),r=parseInt(t.left),s=parseInt(t.top);if(e.zoomChanged||r||s){var n=this.olLayer.div;if(i.set(n,{left:-r+"px",top:-s+"px"}),null==this._features)return;this.getViewport().setTransform(o.translate(r,s)),this.inherited(arguments)}},added:function(){this.inherited(arguments),this._surfaceSize()}})});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/GfxLayer.js.map
