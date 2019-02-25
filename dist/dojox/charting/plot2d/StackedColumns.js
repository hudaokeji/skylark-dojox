/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./Columns","./commonStacked"],function(e,t,n){return e("dojox.charting.plot2d.StackedColumns",t,{getSeriesStats:function(){var e=n.collectStats(this.series);return e.hmin-=.5,e.hmax+=.5,e},getValue:function(e,t,s,r){var a,i;return r?(a=t,i=n.getIndexValue(this.series,s,a)):(a=e.x-1,i=[(i=n.getValue(this.series,s,e.x))[0]?i[0].y:null,i[1]?i[1]:null]),{x:a,y:i[0],py:i[1]}}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/StackedColumns.js.map
