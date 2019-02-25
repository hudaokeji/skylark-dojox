/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojox/mobile/TransitionEvent"],function(n,t,o,e){var i=[];return{init:function(){},beforeActivate:function(){var t,a=n.byId("headerBackButton");t=o.connect(a,"onclick",function(n){new e(n.target,{title:"header+navigation+centerNavigation",target:"header+navigation+centerNavigation",url:"#header+navigation+centerNavigation"},n).dispatch()}),i.push(t)},afterDeactivate:function(){for(var n=i.pop();n;)o.disconnect(n),n=i.pop()},destroy:function(){for(var n=i.pop();n;)o.disconnect(n),n=i.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/mediaQueryLayoutApp/views/TestInfo.js.map
