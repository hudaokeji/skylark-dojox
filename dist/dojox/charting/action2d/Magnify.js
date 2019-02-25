/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/connect","dojo/_base/declare","./PlotAction","dojox/gfx/matrix","dojox/gfx/fx","dojo/fx","dojo/fx/easing"],function(n,e,t,a,i,s,o){return e("dojox.charting.action2d.Magnify",t,{defaultParams:{duration:400,easing:o.backOut,scale:2},optionalParams:{},constructor:function(n,e,t){this.scale=t&&"number"==typeof t.scale?t.scale:2,this.connect()},process:function(e){if(e.shape&&e.type in this.overOutEvents&&"cx"in e&&"cy"in e&&"spider_plot"!=e.element&&"spider_poly"!=e.element){var t,o,c,r=e.run.name,h=e.index,m=[];r in this.anim?t=this.anim[r][h]:this.anim[r]={},t?t.action.stop(!0):this.anim[r][h]=t={},"onmouseover"==e.type?(o=a.identity,c=this.scale):(o=a.scaleAt(this.scale,e.cx,e.cy),c=1/this.scale);var d={shape:e.shape,duration:this.duration,easing:this.easing,transform:[{name:"scaleAt",start:[1,e.cx,e.cy],end:[c,e.cx,e.cy]},o]};e.shape&&m.push(i.animateTransform(d)),e.outline&&(d.shape=e.outline,m.push(i.animateTransform(d))),e.shadow&&(d.shape=e.shadow,m.push(i.animateTransform(d))),m.length?(t.action=s.combine(m),"onmouseout"==e.type&&n.connect(t.action,"onEnd",this,function(){this.anim[r]&&delete this.anim[r][h]}),t.action.play()):delete this.anim[r][h]}}})});
//# sourceMappingURL=../../sourcemaps/charting/action2d/Magnify.js.map
