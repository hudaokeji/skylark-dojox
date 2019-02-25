/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff","dojox/mobile/TransitionEvent"],function(t,o,i,e,n,s){var a=[],p=null;return{init:function(){p=this.app;var o=i.connect(t.byId("sc6insert10x"),"click",function(){p&&(p.listStart||(p.listStart=1,p.listCount=5),setTimeout(function(){for(var t=p.listStart;t<p.listStart+5;t++){var o={label:"Item #"+t};p.stores.longlistStore.store.put(o)}return p.listStart+=p.listCount,p.listTotal=p.listStart-1,!1},500))});a.push(o)},beforeActivate:function(){t.byId("sc6back1")&&!n("phone")&&o.set(t.byId("sc6back1"),"visibility","hidden")},afterActivate:function(){if(this.app.timedAutoFlow||this.app.timed100Loops){this.app.loopCount++;var t=null;this.app.timed100Loops?this.app.loopCount<100?history&&history.back():(console.log("P1:afterActivate loopCount = 100 stop timer"),console.timeEnd("timing transition loop")):(10===this.app.loopCount?t=e.byId("dojox_mobile_ListItem_0"):12===this.app.loopCount?t=e.byId("dojox_mobile_ListItem_3"):15===this.app.loopCount&&(t=e.byId("dojox_mobile_ListItem_12")),t&&setTimeout(function(){new s(t.domNode,t.params).dispatch()},50))}},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=a.pop();t;)i.disconnect(t),t=a.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/V6.js.map
