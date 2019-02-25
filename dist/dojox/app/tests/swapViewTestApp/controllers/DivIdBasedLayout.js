/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojox/app/controllers/LayoutBase"],function(o,e,t,i,d,n,a){return o("dojox/app/tests/swapViewTestApp/controllers/DivIdBasedLayout",a,{initLayout:function(o){this.app.log("in app/controllers/DivIdBasedLayout.initLayout event.view.name=[",o.view.name,"] event.view.parent.name=[",o.view.parent.name,"]"),this.app.log("in app/controllers/DivIdBasedLayout.initLayout event.view.constraint=",o.view.constraint);var t=o.view.constraint,d=e.byId(t);d?d.appendChild(o.view.domNode):o.view.parent.domNode.appendChild(o.view.domNode),i.add(o.view.domNode,t),this.inherited(arguments)},onResize:function(){},hideView:function(o){t.set(o.domNode,"display","none")},showView:function(o){t.set(o.domNode,"display","")}})});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/controllers/DivIdBasedLayout.js.map
