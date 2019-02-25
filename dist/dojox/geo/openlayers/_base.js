/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(r){var e=r.getObject("dojox.geo.openlayers",!0);e.BaseLayerType={OSM:"OSM",Transport:"OSM.Transport",WMS:"WMS",GOOGLE:"Google",VIRTUAL_EARTH:"VirtualEarth",BING:"VirtualEarth",YAHOO:"Yahoo",ARCGIS:"ArcGIS"},e.EPSG4326=new OpenLayers.Projection("EPSG:4326");var a=/^\s*(\d{1,3})[D°]\s*(\d{1,2})[M']\s*(\d{1,2}\.?\d*)\s*(S|"|'')\s*([NSEWnsew]{0,1})\s*$/i;return e.parseDMS=function(r,e){var o=a.exec(r);if(null==o||o.length<5)return parseFloat(r);var t=parseFloat(o[1]),s=parseFloat(o[2]),n=parseFloat(o[3]),l=o[5];if(e){var S=l.toLowerCase(),p=t+(s+n/60)/60;return"w"!=S&&"s"!=S||(p=-p),p}return[t,s,n,l]},e});
//# sourceMappingURL=../../sourcemaps/geo/openlayers/_base.js.map
