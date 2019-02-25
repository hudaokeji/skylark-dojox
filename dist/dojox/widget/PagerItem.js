/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-geometry","dojo/dom-style","dojo/parser","dijit/_WidgetBase","dijit/_TemplatedMixin"],function(e,t,i,o,d,n){return e("dojox.widget._PagerItem",[d,n],{templateString:'<li class="pagerItem" data-dojo-attach-point="containerNode"></li>',resizeChildren:function(){var e=t.getMarginBox(this.containerNode);i.set(this.containerNode.firstChild,{width:e.w+"px",height:e.h+"px"})},parseChildren:function(){o.parse(this.containerNode)}})});
//# sourceMappingURL=../sourcemaps/widget/PagerItem.js.map
