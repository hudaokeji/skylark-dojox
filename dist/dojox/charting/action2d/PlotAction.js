/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/connect","dojo/_base/declare","./Base","dojo/fx/easing","dojox/lang/functional"],function(n,t,o,i,e){var s=i.backOut;return t("dojox.charting.action2d.PlotAction",o,{overOutEvents:{onmouseover:1,onmouseout:1},constructor:function(n,t,o){this.anim={},o||(o={}),this.duration=o.duration?o.duration:400,this.easing=o.easing?o.easing:s},connect:function(){this.handle=this.chart.connectToPlot(this.plot.name,this,"process")},disconnect:function(){this.handle&&(n.disconnect(this.handle),this.handle=null)},reset:function(){},destroy:function(){this.inherited(arguments),e.forIn(this.anim,function(n){e.forIn(n,function(n){n.action.stop(!0)})}),this.anim={}}})});
//# sourceMappingURL=../../sourcemaps/charting/action2d/PlotAction.js.map
