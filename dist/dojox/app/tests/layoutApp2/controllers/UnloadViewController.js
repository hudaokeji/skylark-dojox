/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/Deferred","dojo/_base/array","dojo/dom-construct","dijit/registry","dojox/app/Controller"],function(e,o,i,n,d,r,t){return o("dojox/app/tests/layoutApp2/controllers/UnloadViewController",t,{constructor:function(e){this.app=e,this.events={"unload-view":this.unloadView}},unloadView:function(e){var o=e.parent||this.app,i=e.view||"",n=i.id;o&&i&&n?o.selectedChildren[n]?console.warn("unload-view event for a view which is still in use so it can not be unloaded for view id = "+n+"'."):o.children[n]?(this.unloadChild(o,i),e.callback&&e.callback()):console.warn("unload-view event for a view which was not found in parent.children[viewId] for viewId = "+n+"'."):console.warn("unload-view event for view with no parent or with an invalid view with view = ",i)},unloadChild:function(e,o){for(var i in o.children)this.unloadChild(o,i);if(o.domNode){var n=r.findWidgets(o.domNode);for(var t in n)n[t].destroyRecursive();d.destroy(o.domNode)}delete e.children[o.id],o.destroy&&o.destroy()}})});
//# sourceMappingURL=../../../../sourcemaps/app/tests/layoutApp2/controllers/UnloadViewController.js.map
