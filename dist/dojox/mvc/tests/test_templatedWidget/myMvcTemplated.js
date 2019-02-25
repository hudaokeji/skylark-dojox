/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/registry","dojo/text!./test_mvc_widget_template.html","dojox/mvc/at","dijit/form/TextBox","dojox/mvc/Group","dojox/mvc/Repeat"],function(e,t,i,d,l,n,o){return e("dojox.mvc.tests.test_templatedWidget.myMvcTemplated",[t,i,d],{ctrl:null,templateString:n,buildRendering:function(){console.log("call myMvcTemplated buildRendering"),window.at=o,this.inherited(arguments)},getParent:function(){return console.log("Call myMvcTemplated getParent"),null}})});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/test_templatedWidget/myMvcTemplated.js.map
