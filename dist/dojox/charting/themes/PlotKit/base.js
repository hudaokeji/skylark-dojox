/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/Color","../../Theme","../common"],function(o,r,e,t){var l=o.getObject("PlotKit",!0,t);return l.base=new e({chart:{stroke:null,fill:"yellow"},plotarea:{stroke:null,fill:"yellow"},axis:{stroke:{color:"#fff",width:1},line:{color:"#fff",width:.5},majorTick:{color:"#fff",width:.5,length:6},minorTick:{color:"#fff",width:.5,length:3},tick:{font:"normal normal normal 7pt Helvetica,Arial,sans-serif",fontColor:"#999"}},series:{stroke:{width:2.5,color:"#fff"},fill:"#666",font:"normal normal normal 7.5pt Helvetica,Arial,sans-serif",fontColor:"#666"},marker:{stroke:{width:2},fill:"#333",font:"normal normal normal 7pt Helvetica,Arial,sans-serif",fontColor:"#666"},colors:["red","green","blue"]}),l.base.next=function(o,t,l){var i=e.prototype.next.apply(this,arguments);return"line"==o?(i.marker.outline={width:2,color:"#fff"},i.series.stroke.width=3.5,i.marker.stroke.width=2):"candlestick"==o?i.series.stroke.width=1:i.series.stroke.color&&i.series.stroke.color.toString()==new r(this.colors[(this._current-1)%this.colors.length]).toString()&&(i.series.stroke.color="#fff"),i},l});
//# sourceMappingURL=../../../sourcemaps/charting/themes/PlotKit/base.js.map
