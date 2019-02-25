/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/mvc/at"],function(t,e,i,n){return e("dojox.mvc.StatefulSeries",null,{constructor:function(e){var r=this;function o(){r.series&&(r.series.chart.updateSeries(r.series.name,r),r.series.chart.delayedRender())}this._handles=[],this.data=t.map(e,function(t,e){if("dojox.mvc.at"==(t||{}).atsignature){var a=t.target,s=t.targetProp;if(i.isString(a))throw new Error("Literal-based dojox/mvc/at is not supported in dojox/mvc/StatefulSeries.");if(!t.bindDirection||t.bindDirection&n.from||console.warn("Data binding bindDirection option is ignored in dojox/mvc/StatefulSeries."),s&&i.isFunction(a.set)&&i.isFunction(a.watch)){var c=t.converter,d=(c||{}).format&&i.hitch({target:a,source:this},c.format);this._handles.push(a.watch(s,function(t,i,n){r.data[e]=d?d(n):n,o()}))}return s?i.isFunction(a.get)?a.get(s):a[s]:a}return t},this),o()},destroy:function(){for(var t=null;t=this._handles.pop();)t.unwatch()},setSeriesObject:function(t){this.series=t}})});
//# sourceMappingURL=../sourcemaps/mvc/StatefulSeries.js.map
