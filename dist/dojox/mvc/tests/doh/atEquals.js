/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/Stateful","dijit/_WidgetBase","dojox/mvc/at","dojox/mvc/equals"],function(e,t,a,u,l){e.register("dojox.mvc.tests.doh.atEquals",[function(){var s=[0,1,2],i=new t({value:s}),v=new a({value:u(i,"value").equals(l)});v.startup(),i.set("value",s.slice()),e.is(s,v.value,"The widget should keep the original value"),v.set("value",u(i,"value"));var d=s.slice();i.set("value",d),e.is(d,v.value,"The widget should be updated with the new value")},function(){var s=[0,1,2],i=new t({value:s}),v=new a({_getPropertiesAttr:function(){return["value"]},"*":u(i,"*").equals(l)});v.startup(),i.set("value",s.slice()),e.is(s,v.value,"The widget should keep the original value"),v.set("value",u(i,"value"));var d=s.slice();i.set("value",d),e.is(d,v.value,"The widget should be updated with the new value")}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/atEquals.js.map
