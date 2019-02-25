/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(t,i,a,h,e){return i("dojox.charting.plot3d.Bars",e,{constructor:function(t,i,h){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},h&&("depth"in h&&(this.depth=h.depth),"gap"in h&&(this.gap=h.gap),"material"in h)){var e=h.material;"string"==typeof e||e instanceof a?this.material.color=e:this.material=e}},getDepth:function(){if("auto"==this.depth){var t=this.width;return this.data&&this.data.length&&(t/=this.data.length),t-2*this.gap}return this.depth},generate:function(i,a){if(!this.data)return this;var e=this.width/this.data.length,s=0,o="auto"==this.depth?e-2*this.gap:this.depth,r=this.height/function(i,a,h){i="string"==typeof i?i.split(""):i,h=h||t.global;for(var e=i[0],s=1;s<i.length;e=a.call(h,e,i[s++]));return e}(this.data,Math.max);a||(a=i.view);for(var n=0;n<this.data.length;++n,s+=e)a.createCube({bottom:{x:s+this.gap,y:0,z:0},top:{x:s+e-this.gap,y:this.data[n]*r,z:o}}).setFill(this.material);h("dojo-bidi")&&this._checkOrientation(i)}})});
//# sourceMappingURL=../../sourcemaps/charting/plot3d/Bars.js.map
