/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/_base/lang","dijit/registry","dojox/mvc/at","dojox/mvc/Repeat","dojox/mvc/getStateful","dojox/mvc/Output","dojo/sniff"],function(t,e,o,i,s,n,c,d,r,l){var a=[],h=null,p=null;return{init:function(){var e;p=this.app,h=this.loadedModels.repeatmodels,e=o.connect(t.byId("sc2insert1x"),"click",i.hitch(this,function(t){this.app.insertResult(h.model.length-1,t)})),a.push(e),e=o.connect(t.byId("sc2insert10x"),"click",function(){p.showProgressIndicator(!0),setTimeout(i.hitch(this,function(){for(var t=h.model.length+10,e=h.model.length;e<t;e++){var o={id:Math.random(),First:"First"+h.model.length,Last:"Last"+h.model.length,Location:"CA",Office:"",Email:"",Tel:"",Fax:""};h.model.splice(h.model.length,0,new d(o))}p.showProgressIndicator(!1)}),100)}),a.push(e),e=o.connect(t.byId("sc2remove10x"),"click",function(){p.showProgressIndicator(!0),setTimeout(i.hitch(this,function(){for(var t=h.model.length-10,e=h.model.length;e>=t;e--)h.model.splice(e,1);h.set("cursorIndex",0),p.showProgressIndicator(!1)}),100)}),a.push(e)},beforeActivate:function(){t.byId("sc2back1")&&!l("phone")&&e.set(t.byId("sc2back1"),"visibility","hidden"),t.byId("tab1WrapperA")&&(e.set(t.byId("tab1WrapperA"),"visibility","visible"),e.set(t.byId("tab1WrapperB"),"visibility","visible"))},destroy:function(){for(var t=a.pop();t;)o.disconnect(t),t=a.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/scrollableTestApp2/views/Scrollable2.js.map
