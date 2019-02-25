/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dojo/text!./test_mvc_widget_template.html"],function(e,t,i,d,l,n){return e.declare("dojox.mvc.tests.test_templatedWidget.myMvcTemplated",[d,l],{templateString:n,widgetsInTemplate:!0,buildRendering:function(){console.log("call myMvcTemplated buildRendering"),this.inherited(arguments)},getParent:function(){return console.log("Call myMvcTemplated getParent"),null}})});
//# sourceMappingURL=../../../../sourcemaps/mvc/tests/1.7/test_templatedWidget/myMvcTemplated.js.map
