/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry"],function(t,e,i,o){var n=[],r=null,a=null;return{init:function(){a=this.app},beforeActivate:function(){a.list1=o.byId("list"),(r=a.list1).Store||r.setStore(a.stores.longlistStore.store),o.byId("heading1")&&(o.byId("heading1").labelDivNode.innerHTML="Long List One"),t.byId("tab1WrapperA")&&(e.set(t.byId("tab1WrapperA"),"visibility","visible"),e.set(t.byId("tab1WrapperB"),"visibility","visible"))},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=n.pop();t;)i.disconnect(t),t=n.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/V1.js.map
