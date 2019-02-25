/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojox/mvc/at","dojox/mobile/TransitionEvent","dojox/mvc/Repeat","dojox/mvc/getStateful","dojox/mvc/Output","dojo/sniff"],function(i,o,t,e,d,b,a,n,s,r){return{beforeActivate:function(){i.byId("mli1back")&&!r("phone")&&o.set(i.byId("mli1back"),"visibility","hidden"),i.byId("tab1WrapperA")&&(o.set(i.byId("tab1WrapperA"),"visibility","visible"),o.set(i.byId("tab1WrapperB"),"visibility","visible"))}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/scrollableTestApp/views/ListItem-domButtons.js.map
