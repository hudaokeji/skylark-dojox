/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry"],function(o,i,e,n){var t=[];return{init:function(){},beforeActivate:function(o){this.previousView=o},beforeDeactivate:function(){},nextClicked:function(o){var i=n.byId("swap1").getShowingView(),e=i.nextView(i.domNode);i.goTo(1,e)},previousClicked:function(o){var i=n.byId("swap1").getShowingView(),e=i.previousView(i.domNode);i.goTo(-1,e)},swap1Clicked:function(o){n.byId("swap1").getShowingView().goTo(-1,"swap1")},swap2Clicked:function(o){var i=n.byId("swap1").getShowingView(),e=1;"swap3"==i.id&&(e=-1),i.goTo(e,"swap2")},swap3Clicked:function(o){n.byId("swap1").getShowingView().goTo(1,"swap3")},destroy:function(){for(var o=t.pop();o;)e.disconnect(o),o=t.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/views/navigation.js.map
