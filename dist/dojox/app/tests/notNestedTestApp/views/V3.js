/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry"],function(t,e,i,o){var n=[],r=null,s=null;return{init:function(){s=this.app},beforeActivate:function(){s.list3=o.byId("list3"),(r=s.list3).store||r.setStore(s.stores.longlistStore.store),o.byId("heading1")&&(o.byId("heading1").labelDivNode.innerHTML="Long List Three"),t.byId("tab1WrapperA")&&(e.set(t.byId("tab1WrapperA"),"visibility","visible"),e.set(t.byId("tab1WrapperB"),"visibility","visible"))},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=n.pop();t;)i.disconnect(t),t=n.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/notNestedTestApp/views/V3.js.map
