/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/store/Memory","dojo/store/Observable","dojo/sniff"],function(t,i,e,o,n,r){var s=[],a=null;return{init:function(){a=this.app;var i,r=new o({data:{}});new n(r),i=e.connect(t.byId("sc1insert10x"),"click",function(){a&&(a.listStart||(a.listStart=1,a.listCount=5),setTimeout(function(){for(var t=a.listStart;t<a.listStart+5;t++){var i={label:"Item #"+t};a.stores.longlistStore.store.put(i)}return a.listStart+=a.listCount,a.listTotal=a.listStart-1,!1},500))}),s.push(i)},beforeActivate:function(){t.byId("sc1back1")&&!r("phone")&&i.set(t.byId("sc1back1"),"visibility","hidden"),t.byId("tab1WrapperA")&&(i.set(t.byId("tab1WrapperA"),"visibility","visible"),i.set(t.byId("tab1WrapperB"),"visibility","visible"))},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=s.pop();t;)e.disconnect(t),t=s.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/notNestedTestApp/views/S1.js.map
