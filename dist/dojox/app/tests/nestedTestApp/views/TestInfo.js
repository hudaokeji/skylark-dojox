/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff","dojox/mobile/TransitionEvent"],function(i,o,t,e,n,d){var s=[];return{init:function(){},beforeActivate:function(){e.byId("heading1")&&(e.byId("heading1").labelDivNode.innerHTML="Test Information"),i.byId("ti1back1")&&!n("phone")&&o.set(i.byId("ti1back1"),"visibility","hidden"),i.byId("tab1WrapperB")&&!n("phone")&&o.set(i.byId("tab1WrapperB"),"visibility","visible"),o.set(i.byId("tst1WrapperB"),"visibility","visible")},afterActivate:function(){this.app.timedAutoFlow&&(this.app.loopCount++,16===this.app.loopCount&&(console.log("TestInfo:afterActivate loopCount = 15 stop timer"),console.timeEnd("timing transition loop")))},destroy:function(){for(var i=s.pop();i;)t.disconnect(i),i=s.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/TestInfo.js.map
