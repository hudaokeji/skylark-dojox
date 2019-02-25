/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/_base/lang","dijit/registry","dojox/mvc/at","dojox/mobile/TransitionEvent","dojox/mvc/Repeat","dojox/mvc/getStateful","dojox/mvc/Output","dojo/sniff"],function(i,t,e,o,b,d,n,s,a,r,p){var v=[];return{init:function(){},beforeActivate:function(){i.byId("ti1back1")&&!p("phone")&&t.set(i.byId("ti1back1"),"visibility","hidden"),i.byId("tab1WrapperA")&&!p("phone")&&(t.set(i.byId("tab1WrapperA"),"visibility","visible"),t.set(i.byId("tab1WrapperB"),"visibility","visible")),t.set(i.byId("tst1WrapperA"),"visibility","visible"),t.set(i.byId("tst1WrapperB"),"visibility","visible")},afterActivate:function(){},destroy:function(){for(var i=v.pop();i;)e.disconnect(i),i=v.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/scrollableTestApp/views/TestInfo.js.map
