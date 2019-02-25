/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/on","dijit/registry","dojo/date/stamp"],function(t,e,i,n){var a=[];return{init:function(){this.opener;var i=e(this.selDate1,"click",t.hitch(this,function(){this.datePicker2.set("value",date),this.opener.show(this.selDate1,["below-centered","above-centered","after","before"])}));a.push(i);i=e(this.save,"click",t.hitch(this,function(){this.opener.hide(!0),date=this.selDate1.value=this.datePicker2.get("value")}));a.push(i),i=e(this.cancel,"click",t.hitch(this,function(){this.opener.hide(!1)})),a.push(i),i=e(this.unloadSimple,"click",t.hitch(this,function(t){var e={};e.parent=this.parent;var i=this.parent.children.layoutApp2_simple;e.view=i,this.app.emit("unload-view",e)})),a.push(i),i=e(this.unloadList,"click",t.hitch(this,function(t){var e={};e.parent=this.parent;var i=this.parent.children.layoutApp2_listMain;e.view=i,this.app.emit("unload-view",e)})),a.push(i),date=n.toISOString(new Date,{selector:"date"})},beforeActivate:function(){},destroy:function(){for(var t=a.pop();t;)t.remove(),t=a.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/layoutApp2/views/date.js.map
