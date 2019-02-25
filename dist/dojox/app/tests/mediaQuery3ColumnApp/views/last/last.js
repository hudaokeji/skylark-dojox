/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom-class"],function(t,i){return{init:function(){console.log("in init for view with this.name = "+this.name),this.lastheaderBackButton.on("click",t.hitch(this,function(t){history?history.back():this.app.emit("MQ3ColApp/BackFromLast",t)})),"lastCenter"==this.name?(this.lastOuterContainer["data-app-constraint"]="center",i.add(this.lastheaderBackButton.domNode,"showOnMedium hideOnLarge showOnSmall"),i.add(this.lastOuterContainer,"center")):(this.lastOuterContainer["data-app-constraint"]="right",i.add(this.lastheaderBackButton.domNode,"showOnSmall hideOnMedium hideOnLarge"),i.add(this.lastOuterDiv,"navPane hideOnMedium"),i.add(this.lastOuterContainer,"hideOnMedium right"))},beforeActivate:function(t,i){this.previousView=t,this.params.lastSel?this.lastH2.set("label",this.params.lastSel+" selected"):this.lastH2.set("label","None selected")},beforeDeactivate:function(){},lastOption1Clicked:function(t){this.app.emit("MQ3ColApp/LastOption1",t)},lastOption2Clicked:function(t){this.app.emit("MQ3ColApp/LastOption2",t)},lastOption3Clicked:function(t){this.app.emit("MQ3ColApp/LastOption3",t)},destroy:function(){}}});
//# sourceMappingURL=../../../../../sourcemaps/app/tests/mediaQuery3ColumnApp/views/last/last.js.map
