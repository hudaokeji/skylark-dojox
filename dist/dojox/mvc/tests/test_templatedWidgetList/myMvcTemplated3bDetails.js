/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/mvc/Templated","dijit/registry","dojo/text!./test_mvc_widget_template3bDetails.html","dojox/mvc/at","dijit/form/TextBox","dijit/form/Button","dojox/mvc/Group","dojox/mvc/Output","dojox/mvc/Repeat"],function(t,e,l,o,i){return dojo.declare("dojox.mvc.tests.test_templatedWidgetList.myMvcTemplated3bDetails",[e],{ctrl:null,templateString:o,startup:function(){console.log("startup called  in myMvcTemplated3bDetails!!! "),this.groupNode.set("target",i(ctrl,"cursor")),this.serialNode.set("value",i("rel:","Serial")),this.firstNode.set("value",i("rel:","First")),this.lastNode.set("value",i("rel:","Last")),this.inherited("startup",arguments)},buildRendering:function(){console.log("call myMvcTemplated3bDetails buildRendering"),window.at=i,this.inherited(arguments)},getParent:function(){return console.log("Call myMvcTemplated3bDetails getParent"),null}})});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/test_templatedWidgetList/myMvcTemplated3bDetails.js.map
