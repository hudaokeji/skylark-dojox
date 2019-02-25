/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","./Columns","./common"],function(e,s,r,t){return e("dojox.charting.plot2d.ClusteredColumns",r,{getBarProperties:function(){var e=this.series.length;s.forEach(this.series,function(s){s.hidden&&e--});var r=t.calculateBarSize(this._hScaler.bounds.scale,this.opt,e);return{gap:r.gap,width:r.size,thickness:r.size,clusterSize:e}}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/ClusteredColumns.js.map
