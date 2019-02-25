/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../doh/ModelRefController","dojo/text!../templates/ModelRefControllerInTemplate.html"],function(e,t,o,d,l,n,i,a,r){e.register("dojox.mvc.tests.doh.ModelRefController",[{name:"attachPoint",runTest:function(){o.setObject("model",new d);var a=new(t([l,n,i],{templateString:r}));a.startup(),e.t(a.controllerNode,"The controllerNode exists in the template widget")},tearDown:function(){o.setObject("model",void 0)}}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/ModelRefController.js.map
