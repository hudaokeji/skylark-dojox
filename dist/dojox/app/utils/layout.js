/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang"],function(t,o,n,e,i){var r={};function a(t,o){var e=t.resize?t.resize(o):n.setMarginBox(t.domNode,o);e?i.mixin(t,e):(i.mixin(t,n.getMarginBox(t.domNode)),i.mixin(t,o))}return r.marginBox2contentBox=function(t,o){var i=e.getComputedStyle(t),r=n.getMarginExtents(t,i),a=n.getPadBorderExtents(t,i);return{l:e.toPixelValue(t,i.paddingLeft),t:e.toPixelValue(t,i.paddingTop),w:o.w-(r.w+a.w),h:o.h-(r.h+a.h)}},r.layoutChildren=function(n,e,r,l,d){e=i.mixin({},e),o.add(n,"dijitLayoutContainer"),r=t.filter(r,function(t){return"center"!=t._constraint&&"client"!=t.layoutAlign}).concat(t.filter(r,function(t){return"center"==t._constraint||"client"==t.layoutAlign})),t.forEach(r,function(t){var n=t.domNode,i=t._constraint||t.layoutAlign;if(!i)throw new Error("No constraint setting for "+t.id);var r,c=n.style;c.left=e.l+"px",c.top=e.t+"px",c.position="absolute",o.add(n,"dijitAlign"+((r=i).substring(0,1).toUpperCase()+r.substring(1)));var s={};l&&l==t.id&&(s["top"==t._constraint||"bottom"==t._constraint?"h":"w"]=d),"top"==i||"bottom"==i?(s.w=e.w,a(t,s),e.h-=t.h,"top"==i?e.t+=t.h:c.top=e.t+e.h+"px"):"left"==i||"right"==i?(s.h=e.h,a(t,s),e.w-=t.w,"left"==i?e.l+=t.w:c.left=e.l+e.w+"px"):"client"!=i&&"center"!=i||a(t,e)})},{marginBox2contentBox:r.marginBox2contentBox,layoutChildren:r.layoutChildren}});
//# sourceMappingURL=../../sourcemaps/app/utils/layout.js.map
