/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare"],function(n){return n("dojox.grid.enhanced.plugins.exporter._ExportWriter",null,{constructor:function(n){},_getExportDataForCell:function(n,t,e,r){var o=(e.get||r.get).call(e,n,t);return this.formatter?this.formatter(o,e,n,t):o},beforeHeader:function(n){return!0},afterHeader:function(){},beforeContent:function(n){return!0},afterContent:function(){},beforeContentRow:function(n){return!0},afterContentRow:function(n){},beforeView:function(n){return!0},afterView:function(n){},beforeSubrow:function(n){return!0},afterSubrow:function(n){},handleCell:function(n){},toString:function(){return""}})});
//# sourceMappingURL=../../../../sourcemaps/grid/enhanced/plugins/exporter/_ExportWriter.js.map
