/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/on","dijit/registry","dojo/date/stamp"],function(e,t,i,o){var n=[];return{init:function(){this.opener;var i=t(this.selDate1,"click",e.hitch(this,function(){this.datePicker2.set("value",date),this.opener.show(this.selDate1,["below-centered","above-centered","after","before"])}));n.push(i),i=t(this.save,"click",e.hitch(this,function(){this.opener.hide(!0),date=this.selDate1.value=this.datePicker2.get("value")})),n.push(i),i=t(this.cancel,"click",e.hitch(this,function(){this.opener.hide(!1)})),n.push(i),date=o.toISOString(new Date,{selector:"date"})},beforeActivate:function(){},destroy:function(){for(var e=n.pop();e;)e.remove(),e=n.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/domOrderByConstraint/date/date.js.map
