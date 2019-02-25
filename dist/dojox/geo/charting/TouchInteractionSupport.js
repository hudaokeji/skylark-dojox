/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/window"],function(t,e,n,a,i){return e("dojox.geo.charting.TouchInteractionSupport",null,{_map:null,_centerTouchLocation:null,_touchMoveListener:null,_touchEndListener:null,_touchEndTapListener:null,_touchStartListener:null,_initialFingerSpacing:null,_initialScale:null,_tapCount:null,_tapThreshold:null,_lastTap:null,_doubleTapPerformed:!1,_oneFingerTouch:!1,_tapCancel:!1,constructor:function(t){this._map=t,this._centerTouchLocation={x:0,y:0},this._tapCount=0,this._lastTap={x:0,y:0},this._tapThreshold=100},connect:function(){this._touchStartListener=this._map.surface.connect("touchstart",this,this._touchStartHandler)},disconnect:function(){this._touchStartListener&&(a.disconnect(this._touchStartListener),this._touchStartListener=null)},_getTouchBarycenter:function(t){var e=t.touches,n=e[0],a=null;a=e.length>1?e[1]:e[0];var i=this._map._getContainerBounds();return{x:(n.pageX+a.pageX)/2-i.x,y:(n.pageY+a.pageY)/2-i.y}},_getFingerSpacing:function(t){var e=t.touches,n=-1;if(e.length>=2){var a=e[1].pageX-e[0].pageX,i=e[1].pageY-e[0].pageY;n=Math.sqrt(a*a+i*i)}return n},_isDoubleTap:function(e){var n=!1,a=e.touches;if(this._tapCount>0&&1==a.length){var i=a[0].pageX-this._lastTap.x,o=a[0].pageY-this._lastTap.y;i*i+o*o<this._tapThreshold?n=!0:this._tapCount=0}return this._tapCount++,this._lastTap.x=a[0].pageX,this._lastTap.y=a[0].pageY,setTimeout(t.hitch(this,function(){this._tapCount=0}),300),n},_doubleTapHandler:function(t){var e=this._getFeatureFromTouchEvent(t);if(e)this._map.fitToMapArea(e._bbox,15,!0);else{var n=t.touches,a=this._map._getContainerBounds(),i=n[0].pageX-a.x,o=n[0].pageY-a.y,s=this._map.screenCoordsToMapCoords(i,o);this._map.setMapCenterAndScale(s.x,s.y,2*this._map.getMapScale(),!0)}},_getFeatureFromTouchEvent:function(t){var e=null;return t.gfxTarget&&t.gfxTarget.getParent&&(e=this._map.mapObj.features[t.gfxTarget.getParent().id]),e},_touchStartHandler:function(t){if(n.stop(t),this._oneFingerTouch=1==t.touches.length,this._tapCancel=!this._oneFingerTouch,this._doubleTapPerformed=!1,this._isDoubleTap(t))return this._doubleTapHandler(t),void(this._doubleTapPerformed=!0);var e=this._getTouchBarycenter(t),o=this._map.screenCoordsToMapCoords(e.x,e.y);this._centerTouchLocation.x=o.x,this._centerTouchLocation.y=o.y,this._initialFingerSpacing=this._getFingerSpacing(t),this._initialScale=this._map.getMapScale(),this._touchMoveListener||(this._touchMoveListener=a.connect(i.global,"touchmove",this,this._touchMoveHandler)),this._touchEndTapListener||(this._touchEndTapListener=this._map.surface.connect("touchend",this,this._touchEndTapHandler)),this._touchEndListener||(this._touchEndListener=a.connect(i.global,"touchend",this,this._touchEndHandler))},_touchEndTapHandler:function(e){0==e.touches.length&&(this._oneFingerTouch&&!this._tapCancel&&(this._oneFingerTouch=!1,setTimeout(t.hitch(this,function(){if(!this._doubleTapPerformed){var t=e.changedTouches[0].pageX-this._lastTap.x,n=e.changedTouches[0].pageY-this._lastTap.y;t*t+n*n<this._tapThreshold&&this._singleTapHandler(e)}}),350)),this._tapCancel=!1)},_touchEndHandler:function(t){if(n.stop(t),0==t.touches.length)this._touchMoveListener&&(a.disconnect(this._touchMoveListener),this._touchMoveListener=null),this._touchEndListener&&(a.disconnect(this._touchEndListener),this._touchEndListener=null);else{var e=this._getTouchBarycenter(t),i=this._map.screenCoordsToMapCoords(e.x,e.y);this._centerTouchLocation.x=i.x,this._centerTouchLocation.y=i.y}},_singleTapHandler:function(t){var e=this._getFeatureFromTouchEvent(t);if(e)e._onclickHandler(t);else{for(var n in this._map.mapObj.features)this._map.mapObj.features[n].select(!1);this._map.onFeatureClick(null)}},_touchMoveHandler:function(t){if(n.stop(t),!this._tapCancel){var e=t.touches[0].pageX-this._lastTap.x,a=t.touches[0].pageY-this._lastTap.y;e*e+a*a>this._tapThreshold&&(this._tapCancel=!0)}var i=this._getTouchBarycenter(t),o=this._map.screenCoordsToMapCoords(i.x,i.y),s=o.x-this._centerTouchLocation.x,h=o.y-this._centerTouchLocation.y,c=1;t.touches.length>=2&&(c=this._getFingerSpacing(t)/this._initialFingerSpacing,this._map.setMapScale(this._initialScale*c));var r=this._map.getMapCenter();this._map.setMapCenter(r.x-s,r.y-h)}})});
//# sourceMappingURL=../../sourcemaps/geo/charting/TouchInteractionSupport.js.map
