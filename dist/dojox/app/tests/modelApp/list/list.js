/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/on"],function(t,i){return{setDetailsContext:function(t,i,s){s?s.cursor=t:s={cursor:t};var e={title:"itemDetails",target:"listMain,itemDetails",url:"#listMain,itemDetails",params:s};this.app.transitionToView(i.target,e,i)},insertResult:function(t,i){if(t<0||t>this.list.store.data.length)throw Error("index out of data model.");if(!(""==this.list.store.data[t-1].First||this.list.store.data[t]&&""==this.list.store.data[t].First)){var s={id:Math.random(),label:"",rightIcon:"mblDomButtonBlueCircleArrow",First:"",Last:"",Location:"CA",Office:"",Email:"",Tel:"",Fax:""};this.list.store.add(s),this.setDetailsContext(t,i)}},init:function(){var i=this.list;i.Store||i.setStore(this.loadedStores.listStore),this.list.on("click",t.hitch(this,function(t){console.log("List on click hit ",t);var i=this.list.store.query({label:t.target.innerHTML}),s=this.list.store.index[i[0].id];console.log("index is "+s),this.setDetailsContext(s,t,this.params)})),this.listInsert1.on("click",t.hitch(this,function(t){console.log("listInsert1 on click hit ",t);var i=this.list.store.data.length;this.insertResult(i,t)}))},destroy:function(){}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/modelApp/list/list.js.map
