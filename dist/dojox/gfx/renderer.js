/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(e,n,a,i,r){var s=null;return a.add("vml",function(e,n,a){a.innerHTML='<v:shape adj="1"/>';var i="adj"in a.firstChild;return a.innerHTML="",i}),{load:function(o,l,v){if(s&&"force"!=o)v(s);else{for(var t,g,d=r.forceGfxRenderer,c=!d&&(n.isString(r.gfxRenderer)?r.gfxRenderer:"svg,vml,canvas,silverlight").split(",");!d&&c.length;)switch(c.shift()){case"svg":"SVGAngle"in i.global&&(d="svg");break;case"vml":a("vml")&&(d="vml");break;case"silverlight":try{a("ie")?(t=new ActiveXObject("AgControl.AgControl"))&&t.IsVersionSupported("1.0")&&(g=!0):navigator.plugins["Silverlight Plug-In"]&&(g=!0)}catch(e){g=!1}finally{t=null}g&&(d="silverlight");break;case"canvas":i.global.CanvasRenderingContext2D&&(d="canvas")}"canvas"===d&&!1!==r.canvasEvents&&(d="canvasWithEvents"),r.isDebug&&console.log("gfx renderer = "+d),"svg"==d&&void 0!==window.svgweb?window.svgweb.addOnLoad(f):f()}function f(){l(["dojox/gfx/"+d],function(n){e.renderer=d,s=n,v(n)})}}}});
//# sourceMappingURL=../sourcemaps/gfx/renderer.js.map
