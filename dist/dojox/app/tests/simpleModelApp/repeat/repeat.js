/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/connect","dijit/registry","dojox/mvc/at","dojox/mvc/Repeat","dojox/mvc/getStateful"],function(t,e,o,n,i,r){var d=[],c=null,a=function(t){c.set("cursorIndex",t)},l=function(t,e){var o=e.length;if(t.length<=o)throw Error("repeat node id error.");var n=t.substring(o,t.length);return parseInt(n)};return{init:function(){c=this.loadedModels.jsonRestModel;var o,n=t.byId("repeatWidget");o=e.connect(n,'button[id^="detail"]:click',function(t){var e=l(t.target.id,"detail");a(e)}),d.push(o),o=e.connect(n,'button[id^="insert"]:click',function(t){!function(t){if(t<0||t>c.model.length)throw Error("index out of data model.");if(!(""==c.model[t].First||c.model[t+1]&&""==c.model[t+1].First)){var e={id:Math.random(),First:"",Last:"",Location:"CA",Office:"",Email:"",Tel:"",Fax:""};c.model.splice(t+1,0,new r(e)),a(t+1)}}(l(t.target.id,"insert"))}),d.push(o),o=e.connect(n,'button[id^="delete"]:click',function(t){!function(t){var e=c.get("cursorIndex");e>=t&&(e-=1),c.model.splice(t,1),c.set("cursorIndex",e)}(l(t.target.id,"delete"))}),d.push(o)},destroy:function(){for(var t=d.pop();t;)e.disconnect(t),t=d.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/simpleModelApp/repeat/repeat.js.map
