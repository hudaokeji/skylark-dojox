/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/sniff"],function(i,t,e,o){var n=[];return{init:function(){},beforeActivate:function(){i.byId("ti1back1")&&!o("phone")&&t.set(i.byId("ti1back1"),"visibility","hidden"),i.byId("tab1WrapperB")&&!o("phone")&&t.set(i.byId("tab1WrapperB"),"visibility","visible"),t.set(i.byId("tst1WrapperB"),"visibility","visible")},afterActivate:function(){},destroy:function(){for(var i=n.pop();i;)e.disconnect(i),i=n.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/longListTestApp/views/TestInfo.js.map
