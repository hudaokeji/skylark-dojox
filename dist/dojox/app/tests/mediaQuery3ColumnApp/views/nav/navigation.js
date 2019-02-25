/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom-class"],function(t){return{init:function(){console.log("in init for view with this.name = "+this.name),t.add(this.navheaderBackButton.domNode,"hide"),"navLeft"==this.name?(this.navOuterContainer["data-app-constraint"]="left",t.add(this.navOuterDiv,"hideOnSmall")):(this.navOuterContainer["data-app-constraint"]="center",t.add(this.navOuterContainer,"center"))},beforeActivate:function(t){this.previousView=t},beforeDeactivate:function(){},testOption1Clicked:function(t){t.transitionNext=t.target.parentElement.id,this.app.emit("MQ3ColApp/TestOption1",t)},mainOption1Clicked:function(t){this.app.emit("MQ3ColApp/MainOption1",t)},mainOption2Clicked:function(t){this.app.emit("MQ3ColApp/MainOption2",t)},mainOption3Clicked:function(t){this.app.emit("MQ3ColApp/MainOption3",t)}}});
//# sourceMappingURL=../../../../../sourcemaps/app/tests/mediaQuery3ColumnApp/views/nav/navigation.js.map
