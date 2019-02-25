/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/array","dojo/_base/config","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/store/util/QueryResults","dijit/_WidgetBase","dojox/mvc/at","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_Container","dijit/form/TextBox","dojox/mvc/getStateful","dojox/mvc/StoreRefController","dojox/mvc/EditStoreRefListController","dojo/store/JsonRest","dojo/store/Memory","dojo/store/Observable","dojo/when","dojox/mvc/WidgetList","dojo/text!dojox/mvc/tests/test_WidgetList_WidgetListInTemplate.html","dojo/text!dojox/mvc/tests/test_WidgetList_childTemplate.html","dojo/text!dojox/mvc/tests/test_WidgetList_childBindings.json"],function(e,t,o,r,s,i,n,a,d,l,c,m,u,b,h,v,j,S,f,w,p,x,L,g){var A={identifier:"Serial",items:[{Serial:"A111",First:"Anne",Last:"Ackerman",Email:"a.a@test.com"},{Serial:"B111",First:"Ben",Last:"Beckham",Email:"b.b@test.com"},{Serial:"I111",First:"Irene",Last:"Ira",Email:"i.i@test.com"},{Serial:"J111",First:"John",Last:"Jacklin",Email:"j.j@test.com"}]};ctrl=new v({store:new S({data:A})}),w(ctrl.getStore("A111"),function(t){e.register("dojox.mvc.tests.doh.StoreRefControllerTest",[function(){e.is(t.Serial,"A111","Serial should be set"),e.is(t.First,"Anne","First should be set"),e.is(t.Last,"Ackerman","Last should be set"),e.is(t.Email,"a.a@test.com","Email should be set")},function(){w(ctrl.queryStore(),function(t){e.is(t[0].Serial,"A111","Serial should be set"),e.is(t[0].First,"Anne","First should be set"),e.is(t[0].Last,"Ackerman","Last should be set"),e.is(t[0].Email,"a.a@test.com","Email should be set")})},function(){var t="newObj222-"+Math.random(),o={Serial:t,First:"newObj2",Last:"newObj2 Last",Email:"new.obj2@test.com"};w(ctrl.addStore(o),function(o){e.is(o,t,"id should be returned"),w(ctrl.getStore(t),function(o){e.is(o.Serial,t,"Serial should be set"),e.is(o.First,"newObj2","First should be set"),e.is(o.Last,"newObj2 Last","Last should be set"),e.is(o.Email,"new.obj2@test.com","Email should be set")})})},function(){var t="newObj111-"+Math.random(),o={Serial:t,First:"newObj",Last:"newObj Last",Email:"new.obj@test.com"};w(ctrl.putStore(o),function(o){e.is(o,t,"id should be returned"),w(ctrl.getStore(o),function(o){e.is(o.Serial,t,"Serial should be set"),e.is(o.First,"newObj","First should be set"),e.is(o.Last,"newObj Last","Last should be set"),e.is(o.Email,"new.obj@test.com","Email should be set")})})},function(){w(ctrl.queryStore(),function(t){var o=t[1].Serial;w(ctrl.removeStore(o),function(t){e.is(t,!0,"should return true from removeStore")})})},function(){var t=r(S,{});for(var o in{put:1,remove:1,query:1})!function(e){t.prototype[e]=function(){var t=arguments,o=new i,r=this;return setTimeout(function(){o.resolve(S.prototype[e].apply(r,t))},500),n(o.promise)}}(o);var a=new v({store:f(new t({idProperty:"Serial",data:A}))}),d=[],l=new e.Deferred;return a.queryStore({Last:"Ackerman"}).observe(l.getTestErrback(function(t,o,r){d.push(s.delegate(t,{previousIndex:o,newIndex:r})),2==d.length&&(e.is({Serial:"D111",First:"David",Last:"Ackerman",Email:"d.a@test.com",previousIndex:-1,newIndex:1},d[0],"The observable callback should catch the addition"),e.is({Serial:"A111",First:"Anne",Last:"Ackerman",Email:"a.a@test.com",previousIndex:0,newIndex:-1},d[1],"The observable callback should catch the removal"),l.callback(1))})),a.addStore({Serial:"D111",First:"David",Last:"Ackerman",Email:"d.a@test.com"}),a.removeStore("A111"),l},function(){var t=new j({target:require.toUrl("dojo/tests/store/"),put:function(e){var t=new i;return setTimeout(function(){t.resolve(e.id)},500),t.promise},remove:function(){var e=new i;return setTimeout(function(){e.resolve(!0)},500),e.promise}}),o=new h({store:new f(t)}),r=new e.Deferred,n=[];return o.queryStore("treeTestRoot").observe(r.getTestErrback(function(t,o,i){n.push(s.delegate(t,{previousIndex:o,newIndex:i})),2==n.length&&(e.is({id:"node6",name:"node6",someProperty:"somePropertyA",previousIndex:-1,newIndex:0},n[0],"The observable callback should catch the addition"),e.is({id:"node4",name:"node4",someProperty:"somePropertyA",previousIndex:4,newIndex:-1},n[1],"The observable callback should catch the removal"),r.callback(1))})),o.addStore({id:"node6",name:"node6",someProperty:"somePropertyA"}),o.removeStore("node4"),r}])})});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/StoreRefControllerTest.js.map
