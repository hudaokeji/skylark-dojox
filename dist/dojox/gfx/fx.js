/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base","./matrix","dojo/_base/Color","dojo/_base/array","dojo/_base/fx","dojo/_base/connect","dojo/sniff"],function(t,n,e,i,a,s,o,r){var u=n.fx={};function l(t,n){this.start=t,this.end=n}function f(t,n,e){this.start=t,this.end=n,this.units=e}function c(t,n){this.start=t,this.end=n,this.temp=new i}function v(t){this.values=t,this.length=t.length}function h(t,n){this.values=t,this.def=n||{}}function g(t,n){this.stack=t,this.original=n}l.prototype.getValue=function(t){return(this.end-this.start)*t+this.start},f.prototype.getValue=function(t){return(this.end-this.start)*t+this.start+this.units},c.prototype.getValue=function(t){return i.blendColors(this.start,this.end,t,this.temp)},v.prototype.getValue=function(t){return this.values[Math.min(Math.floor(t*this.length),this.length-1)]},h.prototype.getValue=function(n){var e=t.clone(this.def);for(var i in this.values)e[i]=this.values[i].getValue(n);return e},g.prototype.getValue=function(t){var n=[];return a.forEach(this.stack,function(i){if(i instanceof e.Matrix2D)n.push(i);else if("original"==i.name&&this.original)n.push(this.original);else if("matrix"!=i.name){if(i.name in e){var s=e[i.name];if("function"==typeof s){var o=a.map(i.start,function(n,e){return(i.end[e]-n)*t+n}),r=s.apply(e,o);r instanceof e.Matrix2D&&n.push(r)}else n.push(s)}}else if(i.start instanceof e.Matrix2D&&i.end instanceof e.Matrix2D){var u=new e.Matrix2D;for(var l in i.start)u[l]=(i.end[l]-i.start[l])*t+i.start[l];n.push(u)}},this),n};var d=new i(0,0,0,0);function m(t,e,i,a){return t.values?new v(t.values):(o=t.start?n.normalizeColor(t.start):s=e?i?e[i]:e:a,t.end?r=n.normalizeColor(t.end):(s||(s=e?i?e[i]:e:a),r=s),new c(o,r));var s,o,r}return u.animateStroke=function(t){t.easing||(t.easing=s._defaultEasing);var n,e=new s.Animation(t),i=t.shape;return o.connect(e,"beforeBegin",e,function(){n=i.getStroke();var e,a,s=t.color,o={};s&&(o.color=m(s,n,"color",d)),(s=t.style)&&s.values&&(o.style=new v(s.values)),(s=t.width)&&(o.width=function(t,n,e,i){return t.values?new v(t.values):(s=t.start?t.start:a=n?n[e]:i,t.end?o=t.end:("number"!=typeof a&&(a=n?n[e]:i),o=a),new l(s,o));var a,s,o}(s,n,"width",1)),(s=t.cap)&&s.values&&(o.cap=new v(s.values)),(s=t.join)&&(s.values?o.join=new v(s.values):(e=s.start?s.start:n&&n.join||0,a=s.end?s.end:n&&n.join||0,"number"==typeof e&&"number"==typeof a&&(o.join=new l(e,a)))),this.curve=new h(o,n)}),o.connect(e,"onAnimate",i,"setStroke"),e},u.animateFill=function(t){t.easing||(t.easing=s._defaultEasing);var n,e=new s.Animation(t),i=t.shape;return o.connect(e,"beforeBegin",e,function(){n=i.getFill();var e=t.color;e&&(this.curve=m(e,n,"",d))}),o.connect(e,"onAnimate",i,"setFill"),e},u.animateFont=function(t){t.easing||(t.easing=s._defaultEasing);var n,e=new s.Animation(t),i=t.shape;return o.connect(e,"beforeBegin",e,function(){n=i.getFont();var e,a,s=t.style,o={};s&&s.values&&(o.style=new v(s.values)),(s=t.variant)&&s.values&&(o.variant=new v(s.values)),(s=t.weight)&&s.values&&(o.weight=new v(s.values)),(s=t.family)&&s.values&&(o.family=new v(s.values)),(s=t.size)&&s.units&&(e=parseFloat(s.start?s.start:i.font&&i.font.size||"0"),a=parseFloat(s.end?s.end:i.font&&i.font.size||"0"),o.size=new f(e,a,s.units)),this.curve=new h(o,n)}),o.connect(e,"onAnimate",i,"setFont"),e},u.animateTransform=function(t){t.easing||(t.easing=s._defaultEasing);var e,i=new s.Animation(t),u=t.shape;if(o.connect(i,"beforeBegin",i,function(){e=u.getTransform(),this.curve=new g(t.transform,e)}),o.connect(i,"onAnimate",u,"setTransform"),"svg"===n.renderer&&r("ie")>=10)var l=[o.connect(i,"onBegin",i,function(){for(var t=u.getParent();t&&t.getParent;)t=t.getParent();t&&(u.__svgContainer=t.rawNode.parentNode)}),o.connect(i,"onAnimate",i,function(){try{if(u.__svgContainer){var t=u.__svgContainer.style.visibility;u.__svgContainer.style.visibility="visible";u.__svgContainer.offsetHeight;u.__svgContainer.style.visibility=t}}catch(t){}}),o.connect(i,"onEnd",i,function(){if(a.forEach(l,o.disconnect),u.__svgContainer){var t=u.__svgContainer.style.visibility,n=u.__svgContainer;u.__svgContainer.style.visibility="visible",setTimeout(function(){try{n.style.visibility=t,n=null}catch(t){}},100)}delete u.__svgContainer})];return i},u});
//# sourceMappingURL=../sourcemaps/gfx/fx.js.map
