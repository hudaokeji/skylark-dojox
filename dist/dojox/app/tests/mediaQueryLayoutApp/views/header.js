/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom","dojo/on","dijit/registry","dojo/date/stamp","dojox/app/utils/constraints","dojox/mobile/TransitionEvent"],function(i,t,a,e,n,o,r){var d=[];return{init:function(){var e=t.byId("headerBackButton"),n=a(e,"click",i.hitch(this,function(i){if(this.app.children.mediaQueryLayoutApp_itemDetails&&this.app.children.mediaQueryLayoutApp_itemDetails.viewShowing){var t={title:"header+navigation+listMain",target:"header+navigation+listMain",url:"#header+navigation+listMain"};new r(i.target,t,i).dispatch()}else{t={title:"header+navigation+centerNavigation",target:"header+navigation+centerNavigation",url:"#header+navigation+centerNavigation"};new r(i.target,t,i).dispatch()}}));d.push(n)},beforeActivate:function(){},destroy:function(){for(var i=d.pop();i;)i.remove(),i=d.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/mediaQueryLayoutApp/views/header.js.map
