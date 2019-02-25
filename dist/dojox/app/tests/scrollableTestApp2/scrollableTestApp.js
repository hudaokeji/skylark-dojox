/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojox/mobile/ProgressIndicator","dojox/mobile/TransitionEvent","dojox/mvc/getStateful"],function(e,t,s){return function(){this.selected_item=0,this.selected_configuration_item=0,this.progressIndicator=null,this.setDetailsContext=function(e){this.loadedModels.repeatmodels&&this.loadedModels.repeatmodels.set("cursorIndex",e)},this.removeScrollableItem=function(e){return this.loadedModels.repeatmodels.model.splice(e,1),!1},this.insertResult=function(e,o){var i=this.loadedModels.repeatmodels;if(e<0||e>i.model.length)throw Error("index out of data model.");if(!(""==i.model[e].First||i.model[e+1]&&""==i.model[e+1].First)){var r={id:Math.random(),First:"",Last:"",Location:"CA",Office:"",Email:"",Tel:"",Fax:""};i.model.splice(e+1,0,new s(r)),this.setDetailsContext(e+1);var d={title:"repeatDetails",target:"repeatDetails",url:"#repeatDetails",params:{cursor:e+1}};new t(o.target,d,o).dispatch()}},this.showProgressIndicator=function(t){this.progressIndicator||(this.progressIndicator=e.getInstance({removeOnStop:!1,startSpinning:!0,size:40,center:!0,interval:30}),document.getElementsByTagName("body")[0].appendChild(this.progressIndicator.domNode),this.progressIndicator.domNode.style.zIndex=999);t?(this.progressIndicator.domNode.style.visibility="visible",this.progressIndicator.start()):(this.progressIndicator.stop(),this.progressIndicator.domNode.style.visibility="hidden")}}});
//# sourceMappingURL=../../../sourcemaps/app/tests/scrollableTestApp2/scrollableTestApp.js.map
