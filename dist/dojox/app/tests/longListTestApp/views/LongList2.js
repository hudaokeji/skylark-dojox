/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff"],function(t,i,s,o,e){var r=[],n=null,l=null;return{init:function(){l=this.app;var i=s.connect(t.byId("sc2insert10x"),"click",function(){l&&(l.listStart||(l.listStart=1,l.listCount=5),setTimeout(function(){for(var t=l.listStart;t<l.listStart+5;t++){var i={label:"Item #"+t};l.stores.longlistStore.store.put(i)}return l.listStart+=l.listCount,l.listTotal=l.listStart-1,!1},500))});r.push(i)},beforeActivate:function(){t.byId("sc2back1")&&!e("phone")&&i.set(t.byId("sc2back1"),"visibility","hidden"),l.list2=o.byId("list2"),(n=l.list2).store||n.setStore(l.stores.longlistStore.store),t.byId("tab1WrapperA")&&(i.set(t.byId("tab1WrapperA"),"visibility","visible"),i.set(t.byId("tab1WrapperB"),"visibility","visible"))},destroy:function(){for(var t=r.pop();t;)s.disconnect(t),t=r.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/longListTestApp/views/LongList2.js.map
