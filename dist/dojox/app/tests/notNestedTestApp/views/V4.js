/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff","dojox/mobile/TransitionEvent"],function(t,i,o,e,s,n){var r=[],a=null,l=null;return{init:function(){l=this.app;var i=o.connect(t.byId("sc4insert10x"),"click",function(){l&&(l.listStart||(l.listStart=1,l.listCount=5),setTimeout(function(){for(var t=l.listStart;t<l.listStart+5;t++){var i={label:"Item #"+t};l.stores.longlistStore.store.put(i)}return l.listStart+=l.listCount,l.listTotal=l.listStart-1,!1},500))});r.push(i)},beforeActivate:function(){t.byId("sc4back1")&&!s("phone")&&i.set(t.byId("sc4back1"),"visibility","hidden"),e.byId("heading1")&&(e.byId("heading1").labelDivNode.innerHTML="Long List Four"),l.list4=e.byId("list4"),(a=l.list4).store||a.setStore(l.stores.longlistStore.store),t.byId("tab1WrapperA")&&(i.set(t.byId("tab1WrapperA"),"visibility","visible"),i.set(t.byId("tab1WrapperB"),"visibility","visible"))},afterActivate:function(){if(this.app.timedAutoFlow){this.app.loopCount++;var t=null;if(3===this.app.loopCount?t=e.byId("dojox_mobile_ListItem_0"):12===this.app.loopCount&&(t=e.byId("dojox_mobile_ListItem_8")),t)new n(t.domNode,t.params).dispatch()}},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=r.pop();t;)o.disconnect(t),t=r.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/notNestedTestApp/views/V4.js.map
