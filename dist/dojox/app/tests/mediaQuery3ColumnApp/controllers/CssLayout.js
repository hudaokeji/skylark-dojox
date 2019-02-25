/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojox/app/controllers/LayoutBase"],function(o,e,t,n,i,a,d){return o("dojox/app/tests/mediaQuery3ColumnApp/controllers/CssLayout",d,{constructor:function(o,e){},initLayout:function(o){this.app.log("in app/controllers/CssLayout.initLayout event.view.name=[",o.view.name,"] event.view.parent.name=[",o.view.parent.name,"]"),this.app.log("in app/controllers/CssLayout.initLayout event.view.constraint=",o.view.constraint);var e=o.view.constraint;o.view.parent.domNode.appendChild(o.view.domNode),n.add(o.view.domNode,e),this.inherited(arguments)},onResize:function(){},hideView:function(o){t.set(o.domNode,"display","none !important")},showView:function(o){t.set(o.domNode,"display","block")}})});
//# sourceMappingURL=../../../../sourcemaps/app/tests/mediaQuery3ColumnApp/controllers/CssLayout.js.map
