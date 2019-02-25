/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare"],function(t){return t(null,{postMixInProperties:function(){this.textDir=this.params.textDir?this.params.textDir:this.params.dir},_setTextDirAttr:function(t){null!=function(t){return/^(ltr|rtl|auto)$/.test(t)?t:null}(t)&&(this._set("textDir",t),this.chart.setTextDir(t))},_setDirAttr:function(t){this._set("dir",t),this.chart.setDir(t)}})});
//# sourceMappingURL=../../../sourcemaps/charting/bidi/widget/Chart.js.map
