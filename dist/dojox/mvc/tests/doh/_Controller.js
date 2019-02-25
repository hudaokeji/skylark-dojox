/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","dojo/Stateful","dijit/registry","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojox/mvc/at","dojox/mvc/_Controller","dojo/text!../templates/_ControllerInTemplate.html"],function(e,t,o,d,r,i,l,n,a,s){e.register("dojox.mvc.tests.doh._Controller",[function(){var o=new(t([r,i,l],{templateString:s}))({},document.createElement("div"));o.startup();var n=o.controllerNode,a=n.id;o.destroy(),e.f(d.byId(a),"The controller should have been removed from registry along with the template widget"),e.t(n._destroyed,"The controller should have been marked as destroyed along with the template widget")},function(){var d=new o,i=new(t([r,a],{}))({foo:n(d,"foo")});i.startup(),d.set("foo","Foo"),e.is("Foo",i.get("foo"),"Update to model should be reflected to _WidgetBase/Controller mixin")}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/_Controller.js.map
