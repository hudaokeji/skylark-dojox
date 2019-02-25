/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/mvc/Templated","dijit/registry","dojo/text!./test_mvc_widget_template.html","dojox/mvc/at","dijit/form/TextBox","dojox/mvc/Group","dojox/mvc/Output","dojox/mvc/Repeat"],function(e,t,l,o,d){return dojo.declare("dojox.mvc.tests.test_templatedWidgetList.myMvcTemplated",[t],{ctrl:null,templateString:o,startup:function(){console.log("startup called  in myMvcTemplated!!! "),this.labelNode.set("value",d("rel:","Serial")),this.inputNode.set("value",d("rel:","First")),this.inherited("startup",arguments)},buildRendering:function(){console.log("call myMvcTemplated buildRendering"),window.at=d,this.inherited(arguments)},getParent:function(){return console.log("Call myMvcTemplated getParent"),null}})});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/test_templatedWidgetList/myMvcTemplated.js.map
