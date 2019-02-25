/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojox/mobile/ProgressIndicator"],function(t){return function(){this.selected_item=0,this.selected_configuration_item=0,this.progressIndicator=null,this.showProgressIndicator=function(s){this.progressIndicator||(this.progressIndicator=t.getInstance({removeOnStop:!1,startSpinning:!0,size:40,center:!0,interval:30}),document.getElementsByTagName("body")[0].appendChild(this.progressIndicator.domNode),this.progressIndicator.domNode.style.zIndex=999);s?(this.progressIndicator.domNode.style.visibility="visible",this.progressIndicator.start()):(this.progressIndicator.stop(),this.progressIndicator.domNode.style.visibility="hidden")}}});
//# sourceMappingURL=../../../sourcemaps/app/tests/nestedTestApp/nestedTestApp.js.map
