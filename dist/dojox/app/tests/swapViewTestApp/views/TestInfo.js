/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/_base/lang"],function(o,e,n,t){var c=[],i=!1;return{init:function(){},beforeActivate:function(){i||(t.getObject("dojox.mobile",!0).resizeAll(),i=!0)},afterDeactivate:function(){for(var o=c.pop();o;)n.disconnect(o),o=c.pop()},destroy:function(){for(var o=c.pop();o;)n.disconnect(o),o=c.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/views/TestInfo.js.map
