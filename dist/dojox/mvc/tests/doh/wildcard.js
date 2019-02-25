/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/Stateful","dojox/mvc/at","dijit/form/TextBox"],function(e,l,o,a){e.register("dojox.mvc.tests.doh.wildcard",[function(){var d=new l({placeHolder:"placeHolder0",value:"Value0"}),t=new l({placeHolder:"placeHolder1",value:"Value1"}),c=new a({"*":o(t,"*"),placeHolder:o(d,"placeHolder")},document.createElement("div"));c.startup(),e.is("Value1",c.textbox.value,"Widget's value should come from m1")}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/wildcard.js.map
