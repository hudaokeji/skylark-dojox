/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","../Selection","dijit/_WidgetBase"],function(e,t,s,d){e.register("tests.Selection",[function(e){var i=t("MyWidget",[d,s],{updateRenderers:function(){}}),c=new i;c.set("selectedItem","1"),e.is("1",c.get("selectedItem")),e.is(["1"],c.get("selectedItems")),c.set("selectedItems",["2"]),e.is("2",c.get("selectedItem")),e.is(["2"],c.get("selectedItems")),c=new i({selectedItem:"1"}),e.is("1",c.get("selectedItem")),e.is(["1"],c.get("selectedItems"))}])});
//# sourceMappingURL=../../sourcemaps/widget/tests/Selection.js.map
