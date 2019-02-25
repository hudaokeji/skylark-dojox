/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style"],function(e,t){return e(null,{_recheckPosition:function(e,t,r){if(this.chart.isRightToLeft()){var i=this.chart.offsets.l-this.chart.offsets.r;"marker"==e.element?(t.x=this.chart.dim.width-e.cx+i,r[0]="before-centered",r[1]="after-centered"):"circle"==e.element?t.x=this.chart.dim.width-e.cx-e.cr+i:"bar"==e.element||"column"==e.element?(t.x=this.chart.dim.width-t.width-t.x+i,"bar"==e.element&&(r[0]="before-centered",r[1]="after-centered")):"candlestick"==e.element&&(t.x=this.chart.dim.width+i-e.x)}},_format:function(e){var r="rtl"==t.get(this.chart.node,"direction"),i="rtl"==this.chart.getTextDir(e);return i&&!r?"<span dir = 'rtl'>"+e+"</span>":!i&&r?"<span dir = 'ltr'>"+e+"</span>":e}})});
//# sourceMappingURL=../../../sourcemaps/charting/bidi/action2d/Tooltip.js.map
