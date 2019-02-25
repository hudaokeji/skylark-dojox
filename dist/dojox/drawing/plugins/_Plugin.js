/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../util/oo"],function(n,i){return i.declare(function(i){this._cons=[],n.mixin(this,i),this.button&&this.onClick&&this.connect(this.button,"onClick",this,"onClick")},{util:null,keys:null,mouse:null,drawing:null,stencils:null,anchors:null,canvas:null,node:null,button:null,type:"dojox.drawing.plugins._Plugin",connect:function(){this._cons.push(n.connect.apply(n,arguments))},disconnect:function(i){i&&(n.isArray(i)||(i=[i]),n.forEach(i,n.disconnect,n))}})});
//# sourceMappingURL=../../sourcemaps/drawing/plugins/_Plugin.js.map
