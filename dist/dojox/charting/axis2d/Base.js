/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","../Element"],function(t,n){return t("dojox.charting.axis2d.Base",n,{constructor:function(t,n){this.vertical=n&&n.vertical,this.opt={},this.opt.min=n&&n.min,this.opt.max=n&&n.max},clear:function(){return this},initialized:function(){return!1},calculate:function(t,n,i){return this},getScaler:function(){return null},getTicks:function(){return null},getOffsets:function(){return{l:0,r:0,t:0,b:0}},render:function(t,n){return this.dirty=!1,this}})});
//# sourceMappingURL=../../sourcemaps/charting/axis2d/Base.js.map
