/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(e,n,a,i,r){var s=null;return a.add("vml",function(e,n,a){a.innerHTML='<v:shape adj="1"/>';var i="adj"in a.firstChild;return a.innerHTML="",i}),{load:function(o,require,l){if(s&&"force"!=o)l(s);else{for(var v,t,g=r.forceGfxRenderer,d=!g&&(n.isString(r.gfxRenderer)?r.gfxRenderer:"svg,vml,canvas,silverlight").split(",");!g&&d.length;)switch(d.shift()){case"svg":"SVGAngle"in i.global&&(g="svg");break;case"vml":a("vml")&&(g="vml");break;case"silverlight":try{a("ie")?(v=new ActiveXObject("AgControl.AgControl"))&&v.IsVersionSupported("1.0")&&(t=!0):navigator.plugins["Silverlight Plug-In"]&&(t=!0)}catch(e){t=!1}finally{v=null}t&&(g="silverlight");break;case"canvas":i.global.CanvasRenderingContext2D&&(g="canvas")}"canvas"===g&&!1!==r.canvasEvents&&(g="canvasWithEvents"),r.isDebug&&console.log("gfx renderer = "+g),"svg"==g&&void 0!==window.svgweb?window.svgweb.addOnLoad(c):c()}function c(){require(["dojox/gfx/"+g],function(module){e.renderer=g,s=module,l(module)})}}}});
//# sourceMappingURL=../sourcemaps/gfx/renderer.js.map
