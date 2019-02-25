/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-class"],function(e,o){return{init:function(){},beforeActivate:function(n,d){this.previousView=n;var t=e.byId("headerBackButton");o.remove(t,"showOnPhone"),o.add(t,"hide")},beforeDeactivate:function(){var n=e.byId("headerBackButton");o.remove(n,"hide"),o.add(n,"showOnPhone")}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/mediaQueryLayoutApp/views/centerNavigation.js.map
