/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/_base/connect","dojox/color/_base","./PlotAction","dojo/fx/easing","dojox/gfx/fx"],function(n,t,o,i,e,a,s,r){var l=function(n){var t=new e.Color(n),o=t.toHsl();0==o.s?o.l=o.l<50?100:0:(o.s=100,o.l<50?o.l=75:o.l>75?o.l=50:o.l=o.l-50>75-o.l?50:75);var i=e.fromHsl(o);return i.a=t.a,i},c=function(n){var t=l(n);return t.a=.7,t};return t("dojox.charting.action2d.Highlight",a,{defaultParams:{duration:400,easing:s.backOut},optionalParams:{highlight:"red"},constructor:function(t,o,i){var e,a=i&&i.highlight;this.colorFunc=a?n.isFunction(a)?a:(e=a,function(){return e}):l,this.connect()},process:function(n){if(n.shape&&n.type in this.overOutEvents&&"spider_circle"!=n.element&&"spider_plot"!=n.element){"spider_poly"==n.element&&this.colorFunc==l&&(this.colorFunc=c);var t,e=n.run.name,a=n.index;if(e in this.anim?t=this.anim[e][a]:this.anim[e]={},t)t.action.stop(!0);else{var s=n.shape.getFill();if(!(s&&s instanceof o))return;this.anim[e][a]=t={start:s,end:this.colorFunc(s)}}var u=t.start,h=t.end;if("onmouseout"==n.type){var d=u;u=h,h=d}t.action=r.animateFill({shape:n.shape,duration:this.duration,easing:this.easing,color:{start:u,end:h}}),"onmouseout"==n.type&&i.connect(t.action,"onEnd",this,function(){this.anim[e]&&delete this.anim[e][a]}),t.action.play()}}})});
//# sourceMappingURL=../../sourcemaps/charting/action2d/Highlight.js.map
