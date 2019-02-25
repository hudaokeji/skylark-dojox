/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","../Theme","./gradientGenerator","./PrimaryColors","dojo/colors","./common"],function(e,o,r,i,t,n){var a={type:"linear",space:"shape",x1:0,y1:0,x2:100,y2:0},s=[{o:0,i:174},{o:.08,i:231},{o:.18,i:237},{o:.3,i:231},{o:.39,i:221},{o:.49,i:206},{o:.58,i:187},{o:.68,i:165},{o:.8,i:128},{o:.9,i:102},{o:1,i:174}],l=o.map(["#f00","#0f0","#00f","#ff0","#0ff","#f0f","./common"],function(o){var r=e.delegate(a),t=(r.colors=i.generateGradientByIntensity(o,s))[2].color;return t.r+=100,t.g+=100,t.b+=100,t.sanitize(),r});return n.ThreeD=t.clone(),n.ThreeD.series.shadow={dx:1,dy:1,width:3,color:[0,0,0,.15]},n.ThreeD.next=function(e,o,i){if("bar"==e||"column"==e){var t=this._current%this.seriesThemes.length,n=this.seriesThemes[t],a=n.fill;n.fill=l[t];var s=r.prototype.next.apply(this,arguments);return n.fill=a,s}return r.prototype.next.apply(this,arguments)},n.ThreeD});
//# sourceMappingURL=../../sourcemaps/charting/themes/ThreeD.js.map
