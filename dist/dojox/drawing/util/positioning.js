/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./common"],function(n){var x={label:function(x,r){var t=.5*(x.x+r.x),a=.5*(x.y+r.y),y=n.slope(x,r),e=4/Math.sqrt(1+y*y);return(r.y>x.y&&r.x>x.x||r.y<x.y&&r.x<x.x)&&(e=-e,a-=20),{x:t+=-e*y,y:a+=e,foo:"bar",align:r.x<x.x?"end":"start"}},angle:function(x,r){var t=.7*x.x+.3*r.x,a=.7*x.y+.3*r.y,y=n.slope(x,r),e=4/Math.sqrt(1+y*y);r.x<x.x&&(e=-e),t+=-e*y,a+=e;var o=r.y>x.y?"end":"start";return{x:t,y:a+=r.x>x.x?10:-10,align:o}}};return x});
//# sourceMappingURL=../../sourcemaps/drawing/util/positioning.js.map
