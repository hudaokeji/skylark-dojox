/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base","./GeometryFeature"],function(t,a,n){return a.GreatCircle={toPointArray:function(t,a,n){var e=t.x,r=a.x,i=Math.min(e,r),h=Math.max(e,r),o=this.DEG2RAD,M=t.y*o,s=t.x*o,u=a.y*o,c=a.x*o;Math.abs(s-c)<=this.TOLERANCE&&(c=Math.min(s,c)+Math.PI);Math.abs(c-s)==Math.PI&&M+u==0&&(u+=Math.PI/18e7);for(var y=i*o,A=h*o,D=n*o,E=[],G=0,P=this.RAD2DEG;y<=A;){lat=Math.atan((Math.sin(M)*Math.cos(u)*Math.sin(y-c)-Math.sin(u)*Math.cos(M)*Math.sin(y-s))/(Math.cos(M)*Math.cos(u)*Math.sin(s-c)));var f={x:y*P,y:lat*P};E[G++]=f,y<A&&y+D>=A?y=A:y+=D}return E},toLineString:function(t,a,n){var e=this.toPointArray(t,a,n);return new OpenLayers.Geometry.LineString(e)},toGeometryFeature:function(t,a,e){var r=this.toLineString(t,a,e);return new n(r)},DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,TOLERANCE:1e-5}});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/GreatCircle.js.map
