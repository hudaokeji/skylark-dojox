/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","./Bars","./common"],function(e,r,s,a){return e("dojox.charting.plot2d.ClusteredBars",s,{getBarProperties:function(){var e=this.series.length;r.forEach(this.series,function(r){r.hidden&&e--});var s=a.calculateBarSize(this._vScaler.bounds.scale,this.opt,e);return{gap:s.gap,height:s.size,thickness:s.size}}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/ClusteredBars.js.map
