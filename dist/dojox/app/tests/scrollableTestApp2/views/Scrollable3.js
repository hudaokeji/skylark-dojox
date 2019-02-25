/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dojo/_base/lang","dijit/registry","dojox/mvc/at","dojox/mobile/TransitionEvent","dojox/mvc/Repeat","dojox/mvc/getStateful","dojox/mvc/Output","dojo/sniff"],function(o,t,e,i,n,s,c,d,r,l,a){var h=[],m=null,p=null;return{init:function(){var t;p=this.app,m=this.loadedModels.repeatmodels,t=e.connect(o.byId("sc3insert1x"),"click",i.hitch(this,function(o){this.app.insertResult(m.model.length-1,o)})),h.push(t),t=e.connect(o.byId("sc3insert10x"),"click",function(){p.showProgressIndicator(!0),setTimeout(i.hitch(this,function(){for(var o=m.model.length+10,t=m.model.length;t<o;t++){var e={id:Math.random(),First:"First"+m.model.length,Last:"Last"+m.model.length,Location:"CA",Office:"",Email:"",Tel:"",Fax:""};m.model.splice(m.model.length,0,new r(e))}p.showProgressIndicator(!1)}),100)}),h.push(t),t=e.connect(o.byId("sc3remove10x"),"click",function(){p.showProgressIndicator(!0),setTimeout(i.hitch(this,function(){for(var o=m.model.length-10,t=m.model.length;t>=o;t--)m.model.splice(t,1);m.set("cursorIndex",0),p.showProgressIndicator(!1)}),100)}),h.push(t)},beforeActivate:function(){o.byId("sc3back1")&&!a("phone")&&t.set(o.byId("sc3back1"),"visibility","hidden"),o.byId("tab1WrapperA")&&(t.set(o.byId("tab1WrapperA"),"visibility","visible"),t.set(o.byId("tab1WrapperB"),"visibility","visible"))},destroy:function(){for(var o=h.pop();o;)e.disconnect(o),o=h.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/scrollableTestApp2/views/Scrollable3.js.map
