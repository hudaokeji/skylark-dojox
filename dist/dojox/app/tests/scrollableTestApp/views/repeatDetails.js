/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style"],function(e,r){var t=null;return{init:function(){console.log("IN REPEATDETAILS"),t=this.loadedModels.repeatmodels},beforeActivate:function(){var s;this.params.cursor&&(s=this.params.cursor,parseInt(s)!=t.cursorIndex&&parseInt(s)<t.model.length&&t.set("cursorIndex",parseInt(s))),e.byId("tab1WrapperA")&&(r.set(e.byId("tab1WrapperA"),"visibility","visible"),r.set(e.byId("tab1WrapperB"),"visibility","visible"))}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/scrollableTestApp/views/repeatDetails.js.map
