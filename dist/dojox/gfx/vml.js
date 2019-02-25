/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/Color","dojo/_base/sniff","dojo/_base/config","dojo/dom","dojo/dom-geometry","dojo/_base/kernel","./_base","./shape","./path","./arc","./gradient","./matrix"],function(t,e,i,o,r,a,s,n,h,l,d,p,f,c,u){var x=l.vml={};x.xmlns="urn:schemas-microsoft-com:vml",document.namespaces.add("v",x.xmlns);var y=["*","group","roundrect","oval","shape","rect","imagedata","path","textpath","text"],g=0,m=1,v=document.createStyleSheet();for(r("ie")>=8&&(g=1,m=y.length);g<m;++g)v.addRule("v\\:"+y[g],"behavior:url(#default#VML); display:inline-block");x.text_alignment={start:"left",middle:"center",end:"right"},x._parseFloat=function(t){return t.match(/^\d+f$/i)?parseInt(t)/65536:parseFloat(t)},x._bool={t:1,true:1},x._reparentEvents=function(t,e){for(var i in e)"on"==i.substr(0,2).toLowerCase()&&(t[i]=e[i],e[i]=null)},x.Shape=e("dojox.gfx.vml.Shape",d.Shape,{setFill:function(t){if(!t)return this.fillStyle=null,this.rawNode.filled="f",this;var e,r,a,s,n;if("object"==typeof t&&"type"in t){switch(t.type){case"linear":var h=this._getRealMatrix(),d=this.getBoundingBox(),p=this._getRealBBox?this._getRealBBox():this.getTransformedBoundingBox();for(n=[],this.fillStyle!==t&&(this.fillStyle=l.makeParameters(l.defaultLinearGradient,t)),r=l.gradient.project(h,this.fillStyle,{x:d.x,y:d.y},{x:d.x+d.width,y:d.y+d.height},p[0],p[2]),"0.00000"!=(s=r.colors)[0].offset.toFixed(5)&&n.push("0 "+l.normalizeColor(s[0].color).toHex()),e=0;e<s.length;++e)n.push(s[e].offset.toFixed(5)+" "+l.normalizeColor(s[e].color).toHex());e=s.length-1,"1.00000"!=s[e].offset.toFixed(5)&&n.push("1 "+l.normalizeColor(s[e].color).toHex()),(a=this.rawNode.fill).colors.value=n.join(";"),a.method="sigma",a.type="gradient",a.angle=(270-u._radToDeg(r.angle))%360,a.on=!0;break;case"radial":r=l.makeParameters(l.defaultRadialGradient,t),this.fillStyle=r;var f=parseFloat(this.rawNode.style.left),c=parseFloat(this.rawNode.style.top),x=parseFloat(this.rawNode.style.width),y=parseFloat(this.rawNode.style.height),g=isNaN(x)?1:2*r.r/x;for(s=[],r.colors[0].offset>0&&s.push({offset:1,color:l.normalizeColor(r.colors[0].color)}),i.forEach(r.colors,function(t,e){s.push({offset:1-t.offset*g,color:l.normalizeColor(t.color)})}),e=s.length-1;e>=0&&s[e].offset<0;)--e;if(e<s.length-1){var m=s[e],v=s[e+1];for(v.color=o.blendColors(m.color,v.color,m.offset/(m.offset-v.offset)),v.offset=0;s.length-e>2;)s.pop()}for(e=s.length-1,n=[],s[e].offset>0&&n.push("0 "+s[e].color.toHex());e>=0;--e)n.push(s[e].offset.toFixed(5)+" "+s[e].color.toHex());(a=this.rawNode.fill).colors.value=n.join(";"),a.method="sigma",a.type="gradientradial",isNaN(x)||isNaN(y)||isNaN(f)||isNaN(c)?a.focusposition="0.5 0.5":a.focusposition=((r.cx-f)/x).toFixed(5)+" "+((r.cy-c)/y).toFixed(5),a.focussize="0 0",a.on=!0;break;case"pattern":r=l.makeParameters(l.defaultPattern,t),this.fillStyle=r,(a=this.rawNode.fill).type="tile",a.src=r.src,r.width&&r.height&&(a.size.x=l.px2pt(r.width),a.size.y=l.px2pt(r.height)),a.alignShape="f",a.position.x=0,a.position.y=0,a.origin.x=r.width?r.x/r.width:0,a.origin.y=r.height?r.y/r.height:0,a.on=!0}return this.rawNode.fill.opacity=1,this}this.fillStyle=l.normalizeColor(t),(a=this.rawNode.fill)||(a=this.rawNode.ownerDocument.createElement("v:fill")),a.method="any",a.type="solid",a.opacity=this.fillStyle.a;var w=this.rawNode.filters["DXImageTransform.Microsoft.Alpha"];return w&&(w.opacity=Math.round(100*this.fillStyle.a)),this.rawNode.fillcolor=this.fillStyle.toHex(),this.rawNode.filled=!0,this},setStroke:function(e){if(!e)return this.strokeStyle=null,this.rawNode.stroked="f",this;("string"==typeof e||t.isArray(e)||e instanceof o)&&(e={color:e});var i=this.strokeStyle=l.makeParameters(l.defaultStroke,e);i.color=l.normalizeColor(i.color);var r=this.rawNode;return r.stroked=!0,r.strokecolor=i.color.toCss(),r.strokeweight=i.width+"px",r.stroke&&(r.stroke.opacity=i.color.a,r.stroke.endcap=this._translate(this._capMap,i.cap),"number"==typeof i.join?(r.stroke.joinstyle="miter",r.stroke.miterlimit=i.join):r.stroke.joinstyle=i.join,r.stroke.dashstyle="none"==i.style?"Solid":i.style),this},_capMap:{butt:"flat"},_capMapReversed:{flat:"butt"},_translate:function(t,e){return e in t?t[e]:e},_applyTransform:function(){var t=this._getRealMatrix();if(t){var e=this.rawNode.skew;if(void 0===e)for(var i=0;i<this.rawNode.childNodes.length;++i)if("skew"==this.rawNode.childNodes[i].tagName){e=this.rawNode.childNodes[i];break}if(e){e.on="f";var o=t.xx.toFixed(8)+" "+t.xy.toFixed(8)+" "+t.yx.toFixed(8)+" "+t.yy.toFixed(8)+" 0 0",r=Math.floor(t.dx).toFixed()+"px "+Math.floor(t.dy).toFixed()+"px",a=this.rawNode.style,s=parseFloat(a.left),n=parseFloat(a.top),h=parseFloat(a.width),l=parseFloat(a.height);isNaN(s)&&(s=0),isNaN(n)&&(n=0),!isNaN(h)&&h||(h=1),!isNaN(l)&&l||(l=1);var d=(-s/h-.5).toFixed(8)+" "+(-n/l-.5).toFixed(8);e.matrix=o,e.origin=d,e.offset=r,e.on=!0}}return this.fillStyle&&"linear"==this.fillStyle.type&&this.setFill(this.fillStyle),this.clip&&this.setClip(this.clip),this},_setDimensions:function(t,e){return this},setRawNode:function(t){t.stroked="f",t.filled="f",this.rawNode=t,this.rawNode.__gfxObject__=this},_moveToFront:function(){return this.rawNode.parentNode.appendChild(this.rawNode),this},_moveToBack:function(){var t=this.rawNode,e=t.parentNode,i=e.firstChild;return e.insertBefore(t,i),"rect"==i.tagName&&i.swapNode(t),this},_getRealMatrix:function(){return this.parentMatrix?new u.Matrix2D([this.parentMatrix,this.matrix]):this.matrix},setClip:function(t){this.inherited(arguments);var e=this.rawNode.style;if(t){if("width"in t){var i=this._getRealMatrix(),o=parseFloat(e.left),r=parseFloat(e.top);isNaN(o)&&(o=0),isNaN(r)&&(r=0);var a=u.multiplyRectangle(i,t),s=u.multiplyPoint(i,{x:o,y:r});e.clip="rect("+Math.round(a.y-s.y)+"px "+Math.round(a.x-s.x+a.width)+"px "+Math.round(a.y-s.y+a.height)+"px "+Math.round(a.x-s.x)+"px)"}}else e.position="absolute",e.clip="rect(0px "+e.width+" "+e.height+" 0px)";return this}}),x.Group=e("dojox.gfx.vml.Group",x.Shape,{constructor:function(){d.Container._init.call(this)},_applyTransform:function(){for(var t=this._getRealMatrix(),e=0;e<this.children.length;++e)this.children[e]._updateParentMatrix(t);return this.clip&&this.setClip(this.clip),this},_setDimensions:function(t,e){var i=this.rawNode,o=i.style,r=this.bgNode.style;o.width=t,o.height=e,i.coordsize=t+" "+e,r.width=t,r.height=e;for(var a=0;a<this.children.length;++a)this.children[a]._setDimensions(t,e);return this},setClip:function(t){this.clip=t;var e=this.rawNode.style;if(t){if("width"in t){var i=this._getRealMatrix(),o=u.multiplyRectangle(i,t),r=this.getBoundingBox(),a=(r=r?u.multiplyRectangle(i,r):null)&&r.x<0?r.x:0,s=r&&r.y<0?r.y:0;e.position="absolute",e.clip="rect("+Math.round(o.y-s)+"px "+Math.round(o.x+o.width-a)+"px "+Math.round(o.y+o.height-s)+"px "+Math.round(o.x-a)+"px)"}}else e.position="absolute",e.clip="rect(0px "+e.width+" "+e.height+" 0px)";return this},destroy:function(){this.clear(!0),x.Shape.prototype.destroy.apply(this,arguments)}}),x.Group.nodeType="group",x.Rect=e("dojox.gfx.vml.Rect",[x.Shape,d.Rect],{setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;var i=Math.min(1,e.r/Math.min(parseFloat(e.width),parseFloat(e.height))).toFixed(8),o=this.rawNode.parentNode,a=null;if(o){if(o.lastChild!==this.rawNode)for(var s=0;s<o.childNodes.length;++s)if(o.childNodes[s]===this.rawNode){a=o.childNodes[s+1];break}o.removeChild(this.rawNode)}if(r("ie")>7){var n=this.rawNode.ownerDocument.createElement("v:roundrect");n.arcsize=i,n.style.display="inline-block",x._reparentEvents(n,this.rawNode),this.rawNode=n,this.rawNode.__gfxObject__=this}else this.rawNode.arcsize=i;o&&(a?o.insertBefore(this.rawNode,a):o.appendChild(this.rawNode));var h=this.rawNode.style;return h.left=e.x.toFixed(),h.top=e.y.toFixed(),h.width="string"==typeof e.width&&e.width.indexOf("%")>=0?e.width:Math.max(e.width.toFixed(),0),h.height="string"==typeof e.height&&e.height.indexOf("%")>=0?e.height:Math.max(e.height.toFixed(),0),this.setTransform(this.matrix).setFill(this.fillStyle).setStroke(this.strokeStyle)}}),x.Rect.nodeType="roundrect",x.Ellipse=e("dojox.gfx.vml.Ellipse",[x.Shape,d.Ellipse],{setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;var i=this.rawNode.style;return i.left=(e.cx-e.rx).toFixed(),i.top=(e.cy-e.ry).toFixed(),i.width=(2*e.rx).toFixed(),i.height=(2*e.ry).toFixed(),this.setTransform(this.matrix)}}),x.Ellipse.nodeType="oval",x.Circle=e("dojox.gfx.vml.Circle",[x.Shape,d.Circle],{setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);this.bbox=null;var i=this.rawNode.style;return i.left=(e.cx-e.r).toFixed(),i.top=(e.cy-e.r).toFixed(),i.width=(2*e.r).toFixed(),i.height=(2*e.r).toFixed(),this}}),x.Circle.nodeType="oval",x.Line=e("dojox.gfx.vml.Line",[x.Shape,d.Line],{constructor:function(t){t&&t.setAttribute("dojoGfxType","line")},setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);return this.bbox=null,this.rawNode.path.v="m"+e.x1.toFixed()+" "+e.y1.toFixed()+"l"+e.x2.toFixed()+" "+e.y2.toFixed()+"e",this.setTransform(this.matrix)}}),x.Line.nodeType="shape",x.Polyline=e("dojox.gfx.vml.Polyline",[x.Shape,d.Polyline],{constructor:function(t){t&&t.setAttribute("dojoGfxType","polyline")},setShape:function(t,e){t&&t instanceof Array?(this.shape=l.makeParameters(this.shape,{points:t}),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=l.makeParameters(this.shape,t),this.bbox=null,this._normalizePoints();var i=[],o=this.shape.points;if(o.length>0&&(i.push("m"),i.push(o[0].x.toFixed(),o[0].y.toFixed()),o.length>1)){i.push("l");for(var r=1;r<o.length;++r)i.push(o[r].x.toFixed(),o[r].y.toFixed())}return i.push("e"),this.rawNode.path.v=i.join(" "),this.setTransform(this.matrix)}}),x.Polyline.nodeType="shape",x.Image=e("dojox.gfx.vml.Image",[x.Shape,d.Image],{setShape:function(t){var e=this.shape=l.makeParameters(this.shape,t);return this.bbox=null,this.rawNode.firstChild.src=e.src,this.setTransform(this.matrix)},_applyTransform:function(){var t=this._getRealMatrix(),e=this.rawNode,i=e.style,o=this.shape;if(0==(t=t?u.multiply(t,{dx:o.x,dy:o.y}):u.normalize({dx:o.x,dy:o.y})).xy&&0==t.yx&&t.xx>0&&t.yy>0)i.filter="",i.width=Math.floor(t.xx*o.width),i.height=Math.floor(t.yy*o.height),i.left=Math.floor(t.dx),i.top=Math.floor(t.dy);else{var r=e.parentNode.style;i.left="0px",i.top="0px",i.width=r.width,i.height=r.height,t=u.multiply(t,{xx:o.width/parseInt(i.width),yy:o.height/parseInt(i.height)});var a=e.filters["DXImageTransform.Microsoft.Matrix"];a?(a.M11=t.xx,a.M12=t.xy,a.M21=t.yx,a.M22=t.yy,a.Dx=t.dx,a.Dy=t.dy):i.filter="progid:DXImageTransform.Microsoft.Matrix(M11="+t.xx+", M12="+t.xy+", M21="+t.yx+", M22="+t.yy+", Dx="+t.dx+", Dy="+t.dy+")"}return this},_setDimensions:function(t,e){var i=this.rawNode;if(i.filters["DXImageTransform.Microsoft.Matrix"]){var o=i.style;return o.width=t,o.height=e,this._applyTransform()}return this}}),x.Image.nodeType="rect",x.Text=e("dojox.gfx.vml.Text",[x.Shape,d.Text],{constructor:function(t){t&&t.setAttribute("dojoGfxType","text"),this.fontStyle=null},_alignment:{start:"left",middle:"center",end:"right"},setShape:function(t){this.shape=l.makeParameters(this.shape,t),this.bbox=null;var e,i=this.rawNode,o=this.shape,r=o.x,a=o.y.toFixed();switch(o.align){case"middle":r-=5;break;case"end":r-=10}e="m"+r.toFixed()+","+a+"l"+(r+10).toFixed()+","+a+"e";for(var s=null,n=null,h=i.childNodes,d=0;d<h.length;++d){var p=h[d].tagName;if("path"==p){if(s=h[d],n)break}else if("textpath"==p&&(n=h[d],s))break}s||(s=i.ownerDocument.createElement("v:path"),i.appendChild(s)),n||(n=i.ownerDocument.createElement("v:textpath"),i.appendChild(n)),s.v=e,s.textPathOk=!0,n.on=!0;var f=x.text_alignment[o.align];return n.style["v-text-align"]=f||"left",n.style["text-decoration"]=o.decoration,n.style["v-rotate-letters"]=o.rotated,n.style["v-text-kern"]=o.kerning,n.string=o.text,this.setTransform(this.matrix)},_setFont:function(){for(var t=this.fontStyle,e=this.rawNode.childNodes,i=0;i<e.length;++i)if("textpath"==e[i].tagName){e[i].style.font=l.makeFontString(t);break}this.setTransform(this.matrix)},_getRealMatrix:function(){var t=this.inherited(arguments);return t&&(t=u.multiply(t,{dy:.35*-l.normalizedLength(this.fontStyle?this.fontStyle.size:"10pt")})),t},getTextWidth:function(){var t=this.rawNode,e=t.style.display;t.style.display="inline";var i=l.pt2px(parseFloat(t.currentStyle.width));return t.style.display=e,i}}),x.Text.nodeType="shape",x.Path=e("dojox.gfx.vml.Path",[x.Shape,p.Path],{constructor:function(t){t&&!t.getAttribute("dojoGfxType")&&t.setAttribute("dojoGfxType","path"),this.vmlPath="",this.lastControl={}},_updateWithSegment:function(e){var i=t.clone(this.last);if(this.inherited(arguments),!(arguments.length>1)){var o=this[this.renderers[e.action]](e,i);"string"==typeof this.vmlPath?(this.vmlPath+=o.join(""),this.rawNode.path.v=this.vmlPath+" r0,0 e"):Array.prototype.push.apply(this.vmlPath,o)}},setShape:function(t){return this.vmlPath=[],this.lastControl.type="",this.inherited(arguments),this.vmlPath=this.vmlPath.join(""),this.rawNode.path.v=this.vmlPath+" r0,0 e",this},_pathVmlToSvgMap:{m:"M",l:"L",t:"m",r:"l",c:"C",v:"c",qb:"Q",x:"z",e:""},renderers:{M:"_moveToA",m:"_moveToR",L:"_lineToA",l:"_lineToR",H:"_hLineToA",h:"_hLineToR",V:"_vLineToA",v:"_vLineToR",C:"_curveToA",c:"_curveToR",S:"_smoothCurveToA",s:"_smoothCurveToR",Q:"_qCurveToA",q:"_qCurveToR",T:"_qSmoothCurveToA",t:"_qSmoothCurveToR",A:"_arcTo",a:"_arcTo",Z:"_closePath",z:"_closePath"},_addArgs:function(t,e,i,o){for(var r=e instanceof Array?e:e.args,a=i;a<o;++a)t.push(" ",r[a].toFixed())},_adjustRelCrd:function(t,e,i){var o=e instanceof Array?e:e.args,r=o.length,a=new Array(r),s=0,n=t.x,h=t.y;if("number"!=typeof n&&(a[0]=n=o[0],a[1]=h=o[1],s=2),"number"==typeof i&&2!=i)for(var l=i;l<=r;){for(;s<l;s+=2)a[s]=n+o[s],a[s+1]=h+o[s+1];n=a[l-2],h=a[l-1],l+=i}else for(;s<r;s+=2)a[s]=n+=o[s],a[s+1]=h+=o[s+1];return a},_adjustRelPos:function(t,e){for(var i=e instanceof Array?e:e.args,o=i.length,r=new Array(o),a=0;a<o;++a)r[a]=t+=i[a];return r},_moveToA:function(t){var e=[" m"],i=t instanceof Array?t:t.args,o=i.length;return this._addArgs(e,i,0,2),o>2&&(e.push(" l"),this._addArgs(e,i,2,o)),this.lastControl.type="",e},_moveToR:function(t,e){return this._moveToA(this._adjustRelCrd(e,t))},_lineToA:function(t){var e=[" l"],i=t instanceof Array?t:t.args;return this._addArgs(e,i,0,i.length),this.lastControl.type="",e},_lineToR:function(t,e){return this._lineToA(this._adjustRelCrd(e,t))},_hLineToA:function(t,e){for(var i=[" l"],o=" "+e.y.toFixed(),r=t instanceof Array?t:t.args,a=r.length,s=0;s<a;++s)i.push(" ",r[s].toFixed(),o);return this.lastControl.type="",i},_hLineToR:function(t,e){return this._hLineToA(this._adjustRelPos(e.x,t),e)},_vLineToA:function(t,e){for(var i=[" l"],o=" "+e.x.toFixed(),r=t instanceof Array?t:t.args,a=r.length,s=0;s<a;++s)i.push(o," ",r[s].toFixed());return this.lastControl.type="",i},_vLineToR:function(t,e){return this._vLineToA(this._adjustRelPos(e.y,t),e)},_curveToA:function(t){for(var e=[],i=t instanceof Array?t:t.args,o=i.length,r=this.lastControl,a=0;a<o;a+=6)e.push(" c"),this._addArgs(e,i,a,a+6);return r.x=i[o-4],r.y=i[o-3],r.type="C",e},_curveToR:function(t,e){return this._curveToA(this._adjustRelCrd(e,t,6))},_smoothCurveToA:function(t,e){var i=[],o=t instanceof Array?t:t.args,r=o.length,a=this.lastControl,s=0;for("C"!=a.type&&(i.push(" c"),this._addArgs(i,[e.x,e.y],0,2),this._addArgs(i,o,0,4),a.x=o[0],a.y=o[1],a.type="C",s=4);s<r;s+=4)i.push(" c"),this._addArgs(i,[2*e.x-a.x,2*e.y-a.y],0,2),this._addArgs(i,o,s,s+4),a.x=o[s],a.y=o[s+1];return i},_smoothCurveToR:function(t,e){return this._smoothCurveToA(this._adjustRelCrd(e,t,4),e)},_qCurveToA:function(t){for(var e=[],i=t instanceof Array?t:t.args,o=i.length,r=this.lastControl,a=0;a<o;a+=4)e.push(" qb"),this._addArgs(e,i,a,a+4);return r.x=i[o-4],r.y=i[o-3],r.type="Q",e},_qCurveToR:function(t,e){return this._qCurveToA(this._adjustRelCrd(e,t,4))},_qSmoothCurveToA:function(t,e){var i=[],o=t instanceof Array?t:t.args,r=o.length,a=this.lastControl,s=0;for("Q"!=a.type&&(i.push(" qb"),this._addArgs(i,[a.x=e.x,a.y=e.y],0,2),a.type="Q",this._addArgs(i,o,0,2),s=2);s<r;s+=2)i.push(" qb"),this._addArgs(i,[a.x=2*e.x-a.x,a.y=2*e.y-a.y],0,2),this._addArgs(i,o,s,s+2);return i},_qSmoothCurveToR:function(t,e){return this._qSmoothCurveToA(this._adjustRelCrd(e,t,2),e)},_arcTo:function(t,e){for(var i=[],o=t.args,r=o.length,a="a"==t.action,s=0;s<r;s+=7){var n=o[s+5],h=o[s+6];a&&(n+=e.x,h+=e.y);for(var l=f.arcAsBezier(e,o[s],o[s+1],o[s+2],o[s+3]?1:0,o[s+4]?1:0,n,h),d=0;d<l.length;++d){i.push(" c");var p=l[d];this._addArgs(i,p,0,p.length),this._updateBBox(p[0],p[1]),this._updateBBox(p[2],p[3]),this._updateBBox(p[4],p[5])}e.x=n,e.y=h}return this.lastControl.type="",i},_closePath:function(){return this.lastControl.type="",["x"]},_getRealBBox:function(){return this._confirmSegmented(),this.tbbox?this.tbbox:("string"==typeof this.shape.path&&(this.shape.path=""),this.inherited(arguments))}}),x.Path.nodeType="shape",x.TextPath=e("dojox.gfx.vml.TextPath",[x.Path,p.TextPath],{constructor:function(e){e&&e.setAttribute("dojoGfxType","textpath"),this.fontStyle=null,"text"in this||(this.text=t.clone(l.defaultTextPath)),"fontStyle"in this||(this.fontStyle=t.clone(l.defaultFont))},setText:function(t){return this.text=l.makeParameters(this.text,"string"==typeof t?{text:t}:t),this._setText(),this},setFont:function(t){return this.fontStyle="string"==typeof t?l.splitFontString(t):l.makeParameters(l.defaultFont,t),this._setFont(),this},_setText:function(){this.bbox=null;for(var t=this.rawNode,e=this.text,i=null,o=null,r=t.childNodes,a=0;a<r.length;++a){var s=r[a].tagName;if("path"==s){if(i=r[a],o)break}else if("textpath"==s&&(o=r[a],i))break}i||(i=this.rawNode.ownerDocument.createElement("v:path"),t.appendChild(i)),o||(o=this.rawNode.ownerDocument.createElement("v:textpath"),t.appendChild(o)),i.textPathOk=!0,o.on=!0;var n=x.text_alignment[e.align];o.style["v-text-align"]=n||"left",o.style["text-decoration"]=e.decoration,o.style["v-rotate-letters"]=e.rotated,o.style["v-text-kern"]=e.kerning,o.string=e.text},_setFont:function(){for(var t=this.fontStyle,e=this.rawNode.childNodes,i=0;i<e.length;++i)if("textpath"==e[i].tagName){e[i].style.font=l.makeFontString(t);break}}}),x.TextPath.nodeType="shape",x.Surface=e("dojox.gfx.vml.Surface",d.Surface,{constructor:function(){d.Container._init.call(this)},destroy:function(){this.clear(!0),this.inherited(arguments)},setDimensions:function(t,e){if(this.width=l.normalizedLength(t),this.height=l.normalizedLength(e),!this.rawNode)return this;var i,o=this.clipNode.style,r=this.rawNode,a=r.style,s=this.bgNode.style,n=this._parent.style;for(n.width=t,n.height=e,o.width=t,o.height=e,o.clip="rect(0px "+t+"px "+e+"px 0px)",a.width=t,a.height=e,r.coordsize=t+" "+e,s.width=t,s.height=e,i=0;i<this.children.length;++i)this.children[i]._setDimensions(t,e);return this},getDimensions:function(){var t=this.rawNode?{width:l.normalizedLength(this.rawNode.style.width),height:l.normalizedLength(this.rawNode.style.height)}:null;return t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),t}}),x.createSurface=function(t,e,i){if(!e&&!i){var o=n.position(t);e=e||o.w,i=i||o.h}"number"==typeof e&&(e+="px"),"number"==typeof i&&(i+="px");var a=new x.Surface,h=s.byId(t),d=a.clipNode=h.ownerDocument.createElement("div"),p=a.rawNode=h.ownerDocument.createElement("v:group"),f=d.style,c=p.style;r("ie")>7&&(c.display="inline-block"),a._parent=h,a._nodes.push(d),h.style.width=e,h.style.height=i,f.position="absolute",f.width=e,f.height=i,f.clip="rect(0px "+e+" "+i+" 0px)",c.position="absolute",c.width=e,c.height=i,p.coordsize=("100%"===e?e:parseFloat(e))+" "+("100%"===i?i:parseFloat(i)),p.coordorigin="0 0";var u=a.bgNode=p.ownerDocument.createElement("v:rect"),y=u.style;return y.left=y.top=0,y.width=c.width,y.height=c.height,u.filled=u.stroked="f",p.appendChild(u),d.appendChild(p),h.appendChild(d),a.width=l.normalizedLength(e),a.height=l.normalizedLength(i),a};var w=d.Container,_={add:!0===a.fixVmlAdd?function(t){if(this!=t.getParent()){var e=t.getParent();e&&e.remove(t),this.rawNode.appendChild(t.rawNode),w.add.apply(this,arguments),function t(e,o,r){r=r||h.global,o.call(r,e),(e instanceof l.Surface||e instanceof l.Group)&&i.forEach(e.children,function(e){t(e,o,r)})}(this,function(t){"function"==typeof t.getFont&&(t.setShape(t.getShape()),t.setFont(t.getFont())),"function"==typeof t.setFill&&(t.setFill(t.getFill()),t.setStroke(t.getStroke()))})}return this}:function(t){return this!=t.getParent()&&(this.rawNode.appendChild(t.rawNode),t.getParent()||(t.setFill(t.getFill()),t.setStroke(t.getStroke())),w.add.apply(this,arguments)),this},remove:function(t,e){return this==t.getParent()&&(this.rawNode==t.rawNode.parentNode&&this.rawNode.removeChild(t.rawNode),w.remove.apply(this,arguments)),this},clear:function(){for(var t=this.rawNode;t.firstChild!=t.lastChild;)t.firstChild!=this.bgNode&&t.removeChild(t.firstChild),t.lastChild!=this.bgNode&&t.removeChild(t.lastChild);return w.clear.apply(this,arguments)},getBoundingBox:w.getBoundingBox,_moveChildToFront:w._moveChildToFront,_moveChildToBack:w._moveChildToBack},N={createGroup:function(){var t=this.createObject(x.Group,null),e=t.rawNode.ownerDocument.createElement("v:rect");return e.style.left=e.style.top=0,e.style.width=t.rawNode.style.width,e.style.height=t.rawNode.style.height,e.filled=e.stroked="f",t.rawNode.appendChild(e),t.bgNode=e,t},createImage:function(t){if(!this.rawNode)return null;var e=new x.Image,i=this.rawNode.ownerDocument,o=i.createElement("v:rect");o.stroked="f",o.style.width=this.rawNode.style.width,o.style.height=this.rawNode.style.height;var r=i.createElement("v:imagedata");return o.appendChild(r),e.setRawNode(o),this.rawNode.appendChild(o),e.setShape(t),this.add(e),e},createRect:function(t){if(!this.rawNode)return null;var e=new x.Rect,i=this.rawNode.ownerDocument.createElement("v:roundrect");return r("ie")>7&&(i.style.display="inline-block"),e.setRawNode(i),this.rawNode.appendChild(i),e.setShape(t),this.add(e),e},createObject:function(t,e){if(!this.rawNode)return null;var i=new t,o=this.rawNode.ownerDocument.createElement("v:"+t.nodeType);switch(i.setRawNode(o),this.rawNode.appendChild(o),t){case x.Group:case x.Line:case x.Polyline:case x.Image:case x.Text:case x.Path:case x.TextPath:this._overrideSize(o)}return i.setShape(e),this.add(i),i},_overrideSize:function(t){var e=this.rawNode.style,i=e.width,o=e.height;t.style.width=i,t.style.height=o,t.coordsize=parseInt(i)+" "+parseInt(o)}};return t.extend(x.Group,_),t.extend(x.Group,d.Creator),t.extend(x.Group,N),t.extend(x.Surface,_),t.extend(x.Surface,d.Creator),t.extend(x.Surface,N),x.fixTarget=function(t,e){return t.gfxTarget||(t.gfxTarget=t.target.__gfxObject__),!0},x});
//# sourceMappingURL=../sourcemaps/gfx/vml.js.map
