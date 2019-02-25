/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-geometry","dojox/gfx","./GaugeBase"],function(e,t,r,i){return e("dojox.dgauges.CircularGauge",i,{_transformProperties:null,refreshRendering:function(){if(!(this._widgetBox.w<=0||this._widgetBox.h<=0)){for(var e in this._elementsIndex)this._elementsRenderers[e]=this._elementsIndex[e].refreshRendering();var t=this._computeBoundingBox(this._gfxGroup),i=(t.x+t.width)/(t.y+t.height),s=this._widgetBox.w,o=this._widgetBox.h,n=0,a=0,h=0,d=0;i>this._widgetBox.w/this._widgetBox.h?a=(o-(h=(d=s)/i))/2:n=(s-(d=(h=o)*i))/2;var x=Math.max(d/(t.x+t.width),h/(t.y+t.height));this._transformProperties={scale:x,tx:n,ty:a},this._gfxGroup.setTransform([r.matrix.scale(x),r.matrix.translate(n/x,a/x)])}},_gaugeToPage:function(e,r){if(this._transformProperties){var i=t.position(this.domNode,!0);return{x:i.x+e*this._transformProperties.scale+this._transformProperties.tx,y:i.y+r*this._transformProperties.scale+this._transformProperties.ty}}return null}})});
//# sourceMappingURL=../sourcemaps/dgauges/CircularGauge.js.map
