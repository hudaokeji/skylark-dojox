/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","./_base","./svg","./matrix"],function(t,e,r,a,n,o,i){function l(t,r){var n=e.clone(t);n.colors=[];for(var o=0;o<r.childNodes.length;++o)n.colors.push({offset:r.childNodes[o].getAttribute("offset"),color:new a(r.childNodes[o].getAttribute("stop-color"))});return n}function u(t,r){var a=t.shape=e.clone(r),n=t.rawNode;for(var o in a)a[o]=n.getAttribute(o)}return t.experimental("dojox.gfx.svg_attach"),o.attachNode=function(t){if(!t)return null;var c,d=null;switch(t.tagName.toLowerCase()){case o.Rect.nodeType:d=new o.Rect(t),u(c=d,n.defaultRect),c.shape.r=Math.min(c.rawNode.getAttribute("rx"),c.rawNode.getAttribute("ry"));break;case o.Ellipse.nodeType:u(d=new o.Ellipse(t),n.defaultEllipse);break;case o.Polyline.nodeType:u(d=new o.Polyline(t),n.defaultPolyline);break;case o.Path.nodeType:u(d=new o.Path(t),n.defaultPath);break;case o.Circle.nodeType:u(d=new o.Circle(t),n.defaultCircle);break;case o.Line.nodeType:u(d=new o.Line(t),n.defaultLine);break;case o.Image.nodeType:u(d=new o.Image(t),n.defaultImage);break;case o.Text.nodeType:var s=t.getElementsByTagName("textPath");s&&s.length?(u(d=new o.TextPath(t),n.defaultPath),function(t){var r=t.shape=e.clone(n.defaultTextPath),a=t.rawNode;r.align=a.getAttribute("text-anchor"),r.decoration=a.getAttribute("text-decoration"),r.rotated=0!=parseFloat(a.getAttribute("rotate")),r.kerning="auto"==a.getAttribute("kerning"),r.text=a.firstChild.nodeValue}(d)):function(t){var r=t.shape=e.clone(n.defaultText),a=t.rawNode;r.x=a.getAttribute("x"),r.y=a.getAttribute("y"),r.align=a.getAttribute("text-anchor"),r.decoration=a.getAttribute("text-decoration"),r.rotated=0!=parseFloat(a.getAttribute("rotate")),r.kerning="auto"==a.getAttribute("kerning"),r.text=a.firstChild.nodeValue}(d=new o.Text(t)),function(t){var r=t.fontStyle=e.clone(n.defaultFont),a=t.rawNode;r.style=a.getAttribute("font-style"),r.variant=a.getAttribute("font-variant"),r.weight=a.getAttribute("font-weight"),r.size=a.getAttribute("font-size"),r.family=a.getAttribute("font-family")}(d);break;default:return null}return d instanceof o.Image||(function(t){var i=t.rawNode.getAttribute("fill");if("none"==i)return void(t.fillStyle=null);var u=null,c=o.getRef(i);if(c)switch(c.tagName.toLowerCase()){case"lineargradient":u=l(n.defaultLinearGradient,c),r.forEach(["x1","y1","x2","y2"],function(t){u[t]=c.getAttribute(t)});break;case"radialgradient":u=l(n.defaultRadialGradient,c),r.forEach(["cx","cy","r"],function(t){u[t]=c.getAttribute(t)}),u.cx=c.getAttribute("cx"),u.cy=c.getAttribute("cy"),u.r=c.getAttribute("r");break;case"pattern":u=e.clone(n.defaultPattern),r.forEach(["x","y","width","height"],function(t){u[t]=c.getAttribute(t)}),u.src=c.firstChild.getAttributeNS(o.xmlns.xlink,"href")}else{u=new a(i);var d=t.rawNode.getAttribute("fill-opacity");null!=d&&(u.a=d)}t.fillStyle=u}(d),function(t){var r=t.rawNode,o=r.getAttribute("stroke");if(null==o||"none"==o)return void(t.strokeStyle=null);var i=t.strokeStyle=e.clone(n.defaultStroke),l=new a(o);l&&(i.color=l,i.color.a=r.getAttribute("stroke-opacity"),i.width=r.getAttribute("stroke-width"),i.cap=r.getAttribute("stroke-linecap"),i.join=r.getAttribute("stroke-linejoin"),"miter"==i.join&&(i.join=r.getAttribute("stroke-miterlimit")),i.style=r.getAttribute("dojoGfxStrokeStyle"))}(d)),function(t){var e=t.rawNode.getAttribute("transform");if(e.match(/^matrix\(.+\)$/)){var r=e.slice(7,-1).split(",");t.matrix=i.normalize({xx:parseFloat(r[0]),xy:parseFloat(r[2]),yx:parseFloat(r[1]),yy:parseFloat(r[3]),dx:parseFloat(r[4]),dy:parseFloat(r[5])})}else t.matrix=null}(d),d},o.attachSurface=function(t){var e=new o.Surface;e.rawNode=t;var r=t.getElementsByTagName("defs");return 0==r.length?null:(e.defNode=r[0],e)},o});
//# sourceMappingURL=../sourcemaps/gfx/svg_attach.js.map
