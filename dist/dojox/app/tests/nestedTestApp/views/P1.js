/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff","dojox/mobile/TransitionEvent"],function(o,t,i,e,p,n){return{init:function(){this.app},beforeActivate:function(){},afterActivate:function(){if(this.app.timedAutoFlow||this.app.timed100Loops){this.app.loopCount++;var o=null;if(this.app.timed100Loops)this.app.loopCount<100?history&&history.back():(console.log("P1:afterActivate loopCount = 100 stop timer"),console.timeEnd("timing transition loop"));else if(4===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_0"):5===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_2"):6===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_1"):8===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_7"):11===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_3"):12===this.app.loopCount?o=e.byId("dojox_mobile_ListItem_4"):13===this.app.loopCount&&(o=e.byId("dojox_mobile_ListItem_6")),o)new n(o.domNode,o.params).dispatch()}},beforeDeactivate:function(){},afterDeactivate:function(){}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/P1.js.map
