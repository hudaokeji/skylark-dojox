/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/fx","dojox/fx/_base","dojox/fx/_core","dojo/dom-geometry","dojo/_base/sniff"],function(o,e,n,t,r,i,l){o.experimental("dojox.fx.scroll");var c=e.getObject("dojox.fx",!0);return t.smoothScroll=function(o){o.target||(o.target=i.position(o.node));var t=e[l("ie")?"isObject":"isFunction"](o.win.scrollTo),c={x:o.target.x,y:o.target.y};if(!t){var s=i.position(o.win);c.x-=s.x,c.y-=s.y}var x=t?function(e){o.win.scrollTo(e[0],e[1])}:function(e){o.win.scrollLeft=e[0],o.win.scrollTop=e[1]},a=new n.Animation(e.mixin({beforeBegin:function(){this.curve&&delete this.curve;var e=t?dojo._docScroll():{x:o.win.scrollLeft,y:o.win.scrollTop};a.curve=new r([e.x,e.y],[e.x+c.x,e.y+c.y])},onAnimate:x},o));return a},c.smoothScroll=t.smoothScroll,t.smoothScroll});
//# sourceMappingURL=../sourcemaps/fx/scroll.js.map
