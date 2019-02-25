/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
function isVisible(o){var n;return o.domNode&&(o=o.domNode),"none"!=dojo.style(o,"display")&&"hidden"!=dojo.style(o,"visibility")&&((n=dojo.position(o,!0)).y+n.h>=0&&n.x+n.w>=0&&n.h&&n.w)}function isHidden(o){var n;return o.domNode&&(o=o.domNode),"none"==dojo.style(o,"display")||"hidden"==dojo.style(o,"visibility")||((n=dojo.position(o,!0)).y+n.h<0||n.x+n.w<0||n.h<=0||n.w<=0)}function innerText(o){return o.textContent||o.innerText||""}function tabOrder(o){var n=[];return function o(e){dojo.query("> *",e).forEach(function(e){dojo.isIE&&"HTML"!==e.scopeName||!dijit._isElementShown(e)||(dijit.isTabNavigable(e)&&n.push({elem:e,tabIndex:dojo.hasAttr(e,"tabIndex")?dojo.attr(e,"tabIndex"):0,pos:n.length}),"SELECT"!=e.nodeName.toUpperCase()&&o(e))})}(o||dojo.body()),n.sort(function(o,n){return o.tabIndex!=n.tabIndex?o.tabIndex-n.tabIndex:o.pos-n.pos}),dojo.map(n,function(o){return o.elem})}function onFocus(o){var n=dojo.subscribe("focusNode",function(e){dojo.unsubscribe(n),setTimeout(function(){o(e)},0)})}
//# sourceMappingURL=../../../sourcemaps/mvc/tests/1.7/helpers.js.map
