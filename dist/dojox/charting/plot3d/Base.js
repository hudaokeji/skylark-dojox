/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/has"],function(t,i){var e=t("dojox.charting.plot3d.Base",null,{constructor:function(t,i,e){this.width=t,this.height=i},setData:function(t){return this.data=t||[],this},getDepth:function(){return this.depth},generate:function(t,i){}});return i("dojo-bidi")&&e.extend({_checkOrientation:function(t){t.isMirrored&&t.applyMirroring(t.view,{width:this.width,height:this.height},{l:0,r:0,t:0,b:0})}}),e});
//# sourceMappingURL=../../sourcemaps/charting/plot3d/Base.js.map
