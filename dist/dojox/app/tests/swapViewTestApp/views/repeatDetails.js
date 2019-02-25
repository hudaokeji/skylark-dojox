/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define([],function(){var e=null;return{init:function(){e=this.loadedModels.repeatmodels},beforeActivate:function(){var r;this.params.cursor&&(r=this.params.cursor,parseInt(r)!=e.cursorIndex&&parseInt(r)<e.model.length&&e.set("cursorIndex",parseInt(r)))}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/views/repeatDetails.js.map
