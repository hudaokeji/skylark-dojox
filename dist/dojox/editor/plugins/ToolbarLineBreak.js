/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_editor/_Plugin","dojo/_base/declare"],function(e,i,t,o,n,r,d){var a=d("dojox.editor.plugins.ToolbarLineBreak",[o,n],{templateString:"<span class='dijit dijitReset'><br></span>",postCreate:function(){e.setSelectable(this.domNode,!1)},isFocusable:function(){return!1}});return e.subscribe(i._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var i=e.args.name.toLowerCase();"||"!==i&&"toolbarlinebreak"!==i||(e.plugin=new r({button:new a,setEditor:function(e){this.editor=e}}))}}),a});
//# sourceMappingURL=../../sourcemaps/editor/plugins/ToolbarLineBreak.js.map
