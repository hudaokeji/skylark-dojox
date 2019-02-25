/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry"],function(i,t,e,o){var n=[],r=null,s=null;return{init:function(){s=this.app},beforeActivate:function(){s.list3=o.byId("list3"),(r=s.list3).store||r.setStore(s.stores.longlistStore.store),o.byId("heading1")&&(o.byId("heading1").labelDivNode.innerHTML="Long List Three"),i.byId("tab1WrapperA")&&(t.set(i.byId("tab1WrapperA"),"visibility","visible"),t.set(i.byId("tab1WrapperB"),"visibility","visible"))},destroy:function(){for(var i=n.pop();i;)e.disconnect(i),i=n.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/longListTestApp/views/LongList3.js.map
