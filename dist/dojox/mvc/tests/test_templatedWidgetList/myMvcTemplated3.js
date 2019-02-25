/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/mvc/Templated","dijit/registry","dojo/text!./test_mvc_widget_template3.html","dojox/mvc/at","dijit/form/TextBox","dijit/form/Button","dojox/mvc/Group","dojox/mvc/Output","dojox/mvc/Repeat"],function(t,e,l,o,i){return dojo.declare("dojox.mvc.tests.test_templatedWidgetList.myMvcTemplated",[e],{ctrl:null,templateString:o,startup:function(){console.log("startup called  in myMvcTemplated3!!! "),this.labelNode.set("value",i("rel:","Serial")),this.inputNode.set("value",i("rel:","First")),this.inherited("startup",arguments)},buildRendering:function(){console.log("call myMvcTemplated3 buildRendering"),window.at=i,this.inherited(arguments)},showDetails:function(){var t=this.indexAtStartup;console.log("Called myMvcTemplated3 showDetails selected index="+t),this.ctrl.set("cursorIndex",t)},getParent:function(){return console.log("Call myMvcTemplated3 getParent"),null}})});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/test_templatedWidgetList/myMvcTemplated3.js.map
