/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/event","dojo/_base/connect","dojo/_base/html","dojo/dom","dojox/lang/functional","dojo/keys"],function(e,t,n,o,a,s,i,r){return t("dojox.geo.charting.KeyboardInteractionSupport",null,{_map:null,_zoomEnabled:!1,constructor:function(e,t){this._map=e,t&&(this._zoomEnabled=t.enableZoom)},connect:function(){var e=s.byId(this._map.container);a.attr(e,{tabindex:0,role:"presentation","aria-label":"map"}),this._keydownListener=o.connect(e,"keydown",this,"keydownHandler"),this._onFocusListener=o.connect(e,"focus",this,"onFocus"),this._onBlurListener=o.connect(e,"blur",this,"onBlur")},disconnect:function(){o.disconnect(this._keydownListener),this._keydownListener=null,o.disconnect(this._onFocusListener),this._onFocusListener=null,o.disconnect(this._onBlurListener),this._onBlurListener=null},keydownHandler:function(e){switch(e.keyCode){case r.LEFT_ARROW:this._directTo(-1,-1,1,-1);break;case r.RIGHT_ARROW:this._directTo(-1,-1,-1,1);break;case r.UP_ARROW:this._directTo(1,-1,-1,-1);break;case r.DOWN_ARROW:this._directTo(-1,1,-1,-1);break;case r.SPACE:this._map.selectedFeature&&!this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomIn();break;case r.ESCAPE:this._map.selectedFeature&&this._map.selectedFeature._isZoomIn&&this._zoomEnabled&&this._map.selectedFeature._zoomOut();break;default:return}n.stop(e)},onFocus:function(e){if(!this._map.selectedFeature&&!this._map.focused){this._map.focused=!0;var t,n=!1;if(this._map.lastSelectedFeature)t=this._map.lastSelectedFeature;else{var o=this._map.getMapCenter(),a=1/0;i.forIn(this._map.mapObj.features,function(e){var n=Math.sqrt(Math.pow(e._center[0]-o.x,2)+Math.pow(e._center[1]-o.y,2));n<a&&(a=n,t=e)}),n=!0}t&&(n&&t._onclickHandler(null),this._map.mapObj.marker.show(t.id))}},onBlur:function(){this._map.lastSelectedFeature=this._map.selectedFeature},_directTo:function(e,t,n,o){var a=this._map.selectedFeature,s=a._center[0],r=a._center[1],c=1/0,_=null;i.forIn(this._map.mapObj.features,function(a){var i=Math.abs(s-a._center[0]),l=Math.abs(r-a._center[1]),d=i+l;(e-t)*(r-a._center[1])>0&&i<l&&c>d&&(c=d,_=a),(n-o)*(s-a._center[0])>0&&i>l&&c>d&&(c=d,_=a)}),_&&(this._map.mapObj.marker.hide(),_._onclickHandler(null),this._map.mapObj.marker.show(_.id))}})});
//# sourceMappingURL=../../sourcemaps/geo/charting/KeyboardInteractionSupport.js.map
