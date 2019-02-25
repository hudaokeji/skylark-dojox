/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojox/mvc/getStateful","dojox/mvc/equals"],function(e,t,o){var a=[{uniqueId:0,Completed:!1,Subject:"Pick up my kids",Due:new Date((new Date).getTime()+1728e5),Priority:1,Description:"At the kindergarden"},{uniqueId:1,Completed:!0,Subject:"Take dojox.mvc learning course",Due:new Date((new Date).getTime()+2592e5),Priority:2,Description:"Need to find course material at http://dojotoolkit.org/"},{uniqueId:2,Completed:!1,Subject:"Wash my car",Due:new Date((new Date).getTime()+432e6),Priority:3,Description:"Need to buy a cleaner before that"}];e.register("dojox.mvc.tests.doh.equals",[function(){e.t(o(t(a),t(a)),"Two stateful object from the same data source should be equal")},function(){var i=t(a),u=t(a);u[1].set("Priority",3),e.f(o(i,u),"equals() should catch the change"),u[1].set("Priority",2),e.t(o(i,u),"equals() should catch the change in src back to original")},function(){var i,u=t(a),c=t(a);(i=new Date).setTime(c[1].get("Due").getTime()+2592e5),c[1].set("Due",i),e.f(o(u,c),"equals() should catch the change"),(i=new Date).setTime(c[1].get("Due").getTime()-2592e5),c[1].set("Due",i),e.t(o(u,c),"equals() should catch the change in src back to original")}])});
//# sourceMappingURL=../../../sourcemaps/mvc/tests/doh/equals.js.map
