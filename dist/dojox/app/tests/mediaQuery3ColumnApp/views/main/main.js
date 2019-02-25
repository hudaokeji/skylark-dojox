/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom-class"],function(t,i){return{init:function(){console.log("in init for view with this.name = "+this.name),this.mainheaderBackButton.on("click",t.hitch(this,function(t){history?history.back():this.app.emit("MQ3ColApp/BackFromMain",t)})),"mainLeft"==this.name?(this.mainOuterContainer["data-app-constraint"]="left",i.add(this.mainheaderBackButton.domNode,"showOnMedium"),i.add(this.mainOuterContainer,"left"),i.add(this.mainOuterDiv,"navPane hideOnSmall")):(this.mainOuterContainer["data-app-constraint"]="center",i.add(this.mainheaderBackButton.domNode,"showOnSmall hideOnMedium hideOnLarge"),i.add(this.mainOuterContainer,"center"))},beforeActivate:function(t,i){this.previousView=t,this.params.mainSel?this.mainH2?this.mainH2.set("label",this.params.mainSel+" selected"):console.error("Problem this.mainH2 should not be null "):this.mainH2.set("label","None selected")},beforeDeactivate:function(){},lastOption1Clicked:function(t){this.app.emit("MQ3ColApp/LastOption1",t)},lastOption2Clicked:function(t){this.app.emit("MQ3ColApp/LastOption2",t)},lastOption3Clicked:function(t){this.app.emit("MQ3ColApp/LastOption3",t)},destroy:function(){}}});
//# sourceMappingURL=../../../../../sourcemaps/app/tests/mediaQuery3ColumnApp/views/main/main.js.map
