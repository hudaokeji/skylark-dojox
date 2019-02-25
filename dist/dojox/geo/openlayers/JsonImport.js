/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(r,a,e,t,n,o,s){return r("dojox.geo.openlayers.JsonImport",null,{constructor:function(r){this._params=r},loadData:function(){var r=this._params;a.get({url:r.url,handleAs:"json",sync:!0,load:e.hitch(this,this._gotData),error:e.hitch(this,this._loadError)})},_gotData:function(r){var a=this._params.nextFeature;if(e.isFunction(a)){var n=r.layerExtent,i=n[0],h=n[1],l=i+n[2],u=h+n[3],c=r.layerExtentLL,_=c[0],m=c[1],f=_+c[2],p=_,v=m+c[3],y=f,d=m,g=r.features;for(var F in g){var j=g[F].shape,x=null;if(e.isArray(j[0])){var k=new Array;t.forEach(j,function(r){var a=this._makeGeometry(r,i,h,l,u,p,v,y,d);k.push(a)},this);var w=new o(k);x=new s(w),a.call(this,x)}else x=this._makeFeature(j,i,h,l,u,p,v,y,d),a.call(this,x)}var E=this._params.complete;e.isFunction(E)&&E.call(this,E)}},_makeGeometry:function(r,a,e,t,o,s,i,h,l){for(var u=[],c=0;c<r.length-1;c+=2){var _=r[c],m=r[c+1],f=(_-a)/(t-a)*(h-s)+s,p=(m-e)/(o-e)*(l-i)+i;u.push({x:f,y:p})}return new n(u)},_makeFeature:function(r,a,e,t,n,o,i,h,l){var u=this._makeGeometry(r,a,e,t,n,o,i,h,l);return new s(u)},_loadError:function(){var r=this._params.error;e.isFunction(r)&&r.apply(this,parameters)}})});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/JsonImport.js.map
