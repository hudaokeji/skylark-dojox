/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom-class"],function(t,i){return{init:function(){console.log("in init for view with this.name = "+this.name),this.testheaderBackButton.on("click",t.hitch(this,function(t){this.app.emit("MQ3ColApp/BackFromTest",t)})),i.add(this.testheaderBackButton.domNode,"showOnSmall hideOnMedium hideOnLarge")},afterDeactivate:function(){},destroy:function(){}}});
//# sourceMappingURL=../../../../../sourcemaps/app/tests/mediaQuery3ColumnApp/views/main/TestInfo.js.map
