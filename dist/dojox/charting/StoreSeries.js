/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred"],function(e,t,s){return t("dojox.charting.StoreSeries",null,{constructor:function(e,t,s){this.store=e,this.kwArgs=t,this.value=s?"function"==typeof s?s:"object"==typeof s?function(e){var t={};for(var i in s)t[i]=e[s[i]];return t}:function(e){return e[s]}:function(e){return e.value},this.data=[],this._initialRendering=!0,this.fetch()},destroy:function(){this.observeHandle&&this.observeHandle.remove()},setSeriesObject:function(e){this.series=e},fetch:function(){var t=this;this.observeHandle&&this.observeHandle.remove();var i=this.store.query(this.kwArgs.query,this.kwArgs);function r(){t.data=e.map(t.objects,function(e){return t.value(e,t.store)}),t._pushDataChanges()}s.when(i,function(e){t.objects=e,r()}),i.observe&&(this.observeHandle=i.observe(r,!0))},_pushDataChanges:function(){this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),this._initialRendering=!1,this.series.chart.delayedRender())}})});
//# sourceMappingURL=../sourcemaps/charting/StoreSeries.js.map
