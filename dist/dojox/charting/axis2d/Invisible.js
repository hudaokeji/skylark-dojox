/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","./Base","../scaler/linear","dojox/lang/utils"],function(t,e,i,s,o){return e("dojox.charting.axis2d.Invisible",i,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,includeZero:!1,fixed:!0},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1},constructor:function(e,i){this.opt=t.clone(this.defaultParams),o.updateWithObject(this.opt,i),o.updateWithPattern(this.opt,i,this.optionalParams)},dependOnData:function(){return!("min"in this.opt&&"max"in this.opt)},clear:function(){return delete this.scaler,delete this.ticks,this.dirty=!0,this},initialized:function(){return"scaler"in this&&!(this.dirty&&this.dependOnData())},setWindow:function(t,e){return this.scale=t,this.offset=e,this.clear()},getWindowScale:function(){return"scale"in this?this.scale:1},getWindowOffset:function(){return"offset"in this?this.offset:0},calculate:function(t,e,i){if(this.initialized())return this;var o=this.opt;this.labels=o.labels,this.scaler=s.buildScaler(t,e,i,o);var r=this.scaler.bounds;return"scale"in this&&(o.from=r.lower+this.offset,o.to=(r.upper-r.lower)/this.scale+o.from,!isFinite(o.from)||isNaN(o.from)||!isFinite(o.to)||isNaN(o.to)||o.to-o.from>=r.upper-r.lower?(delete o.from,delete o.to,delete this.scale,delete this.offset):(o.from<r.lower?(o.to+=r.lower-o.from,o.from=r.lower):o.to>r.upper&&(o.from+=r.upper-o.to,o.to=r.upper),this.offset=o.from-r.lower),this.scaler=s.buildScaler(t,e,i,o),r=this.scaler.bounds,1==this.scale&&0==this.offset&&(delete this.scale,delete this.offset)),this},getScaler:function(){return this.scaler},getTicks:function(){return this.ticks}})});
//# sourceMappingURL=../../sourcemaps/charting/axis2d/Invisible.js.map
