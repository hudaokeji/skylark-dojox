/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojox/app/controllers/LayoutBase"],function(e,o,t,n,a,d,i){return e("dojox/app/tests/swapViewTestApp/controllers/ObjBasedLayout",i,{initLayout:function(e){this.app.log("in app/controllers/ObjBasedLayout.initLayout event.view.name=[",e.view.name,"] event.view.parent.name=[",e.view.parent.name,"]"),this.app.log("in app/controllers/ObjBasedLayout.initLayout event.view.constraint=",e.view.constraint);var t=e.view.constraint,a=t;t.parentId&&(a=t.parentId);var d=o.byId(a);d?d.appendChild(e.view.domNode):e.view.parent.domNode.appendChild(e.view.domNode),t.class&&n.add(e.view.domNode,t.class),this.inherited(arguments)},onResize:function(){},hideView:function(e){t.set(e.domNode,"display","none")},showView:function(e){t.set(e.domNode,"display","")}})});
//# sourceMappingURL=../../../../sourcemaps/app/tests/swapViewTestApp/controllers/ObjBasedLayout.js.map
