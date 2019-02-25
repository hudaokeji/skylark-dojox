/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom","dojo/_base/window","dojo/_base/html","dojo/dom-geometry","dojo/dom-construct","dojo/dom-attr","dojo/_base/fx","dojo/fx","./_base","dojo/fx/easing","dojo/_base/connect"],function(n,e,t,o,a,r,i,d,s,c,u,l){var p=n.getObject("dojox.fx");return n.mixin(p,{_split:function(d){d.rows=d.rows||3,d.columns=d.columns||3,d.duration=d.duration||1e3;for(var c=d.node=e.byId(d.node),u=c.parentNode,p=t.body();u&&u!=p&&"static"==o.style(u,"position");)u=u.parentNode;for(var h=u!=p?a.position(u,!0):{x:0,y:0},m=a.position(c,!0),y=o.style(c,"height"),f=o.style(c,"width"),v=o.style(c,"borderLeftWidth")+o.style(c,"borderRightWidth"),w=o.style(c,"borderTopWidth")+o.style(c,"borderBottomWidth"),b=Math.ceil(y/d.rows),g=Math.ceil(f/d.columns),x=r.create(c.tagName,{style:{position:"absolute",padding:0,margin:0,border:"none",top:m.y-h.y+"px",left:m.x-h.x+"px",height:y+w+"px",width:f+v+"px",background:"none",overflow:d.crop?"hidden":"visible",zIndex:o.style(c,"zIndex")}},c,"after"),I=[],M=r.create(c.tagName,{style:{position:"absolute",border:"none",padding:0,margin:0,height:b+v+"px",width:g+w+"px",overflow:"hidden"}}),P=0,j=d.rows;P<j;P++)for(var O=0,_=d.columns;O<_;O++){var E=n.clone(M),A=n.clone(c),B=P*b,N=O*g;A.style.filter="",i.remove(A,"id"),o.style(E,{border:"none",overflow:"hidden",top:B+"px",left:N+"px"}),o.style(A,{position:"static",opacity:"1",marginTop:-B+"px",marginLeft:-N+"px"}),E.appendChild(A),x.appendChild(E);var k=d.pieceAnimation(E,O,P,m);n.isArray(k)?I=I.concat(k):I.push(k)}var W=s.combine(I);return l.connect(W,"onEnd",W,function(){x.parentNode.removeChild(x)}),d.onPlay&&l.connect(W,"onPlay",W,d.onPlay),d.onEnd&&l.connect(W,"onEnd",W,d.onEnd),W},explode:function(n){var t=n.node=e.byId(n.node);n.rows=n.rows||3,n.columns=n.columns||3,n.distance=n.distance||1,n.duration=n.duration||1e3,n.random=n.random||0,n.fade||(n.fade=!0),void 0===n.sync&&(n.sync=!0),n.random=Math.abs(n.random),n.pieceAnimation=function(e,t,a,r){var i=r.h/n.rows,s=r.w/n.columns,c=2*n.distance,l=n.duration,p=e.style,h=parseInt(p.top),m=parseInt(p.left),y=0,f=0,v=0;if(n.random){var w=Math.random()*n.random+Math.max(1-n.random,0);c*=w,l*=w,y=n.unhide&&n.sync||!n.unhide&&!n.sync?n.duration-l:0,f=Math.random()-.5,v=Math.random()-.5}var b=(r.h-i)/2-i*a,g=(r.w-s)/2-s*t,x=Math.sqrt(Math.pow(g,2)+Math.pow(b,2)),I=parseInt(h-b*c+x*v),M=parseInt(m-g*c+x*f),P=d.animateProperty({node:e,duration:l,delay:y,easing:n.easing||(n.unhide?u.sinOut:u.circOut),beforeBegin:n.unhide?function(){n.fade&&o.style(e,{opacity:"0"}),p.top=I+"px",p.left=M+"px"}:void 0,properties:{top:n.unhide?{start:I,end:h}:{start:h,end:I},left:n.unhide?{start:M,end:m}:{start:m,end:M}}});if(n.fade){var j=d.animateProperty({node:e,duration:l,delay:y,easing:n.fadeEasing||u.quadOut,properties:{opacity:n.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}}});return n.unhide?[j,P]:[P,j]}return P};var a=p._split(n);return n.unhide?l.connect(a,"onEnd",null,function(){o.style(t,{opacity:"1"})}):l.connect(a,"onPlay",null,function(){o.style(t,{opacity:"0"})}),a},converge:function(n){return n.unhide=!0,p.explode(n)},disintegrate:function(n){var t=n.node=e.byId(n.node);n.rows=n.rows||5,n.columns=n.columns||5,n.duration=n.duration||1500,n.interval=n.interval||n.duration/(n.rows+2*n.columns),n.distance=n.distance||1.5,n.random=n.random||0,void 0===n.fade&&(n.fade=!0);var a=Math.abs(n.random),r=n.duration-(n.rows+n.columns)*n.interval;n.pieceAnimation=function(e,t,i,s){var c=Math.random()*(n.rows+n.columns)*n.interval,l=e.style,p=n.reverseOrder||n.distance<0?(t+i)*n.interval:(n.rows+n.columns-(t+i))*n.interval,h=c*a+Math.max(1-a,0)*p,m={};return n.unhide?(m.top={start:parseInt(l.top)-s.h*n.distance,end:parseInt(l.top)},n.fade&&(m.opacity={start:"0",end:"1"})):(m.top={end:parseInt(l.top)+s.h*n.distance},n.fade&&(m.opacity={end:"0"})),d.animateProperty({node:e,duration:r,delay:h,easing:n.easing||(n.unhide?u.sinIn:u.circIn),properties:m,beforeBegin:n.unhide?function(){n.fade&&o.style(e,{opacity:"0"}),l.top=m.top.start+"px"}:void 0})};var i=p._split(n);return n.unhide?l.connect(i,"onEnd",i,function(){o.style(t,{opacity:"1"})}):l.connect(i,"onPlay",i,function(){o.style(t,{opacity:"0"})}),i},build:function(n){return n.unhide=!0,p.disintegrate(n)},shear:function(n){var t=n.node=e.byId(n.node);n.rows=n.rows||6,n.columns=n.columns||6,n.duration=n.duration||1e3,n.interval=n.interval||0,n.distance=n.distance||1,n.random=n.random||0,void 0===n.fade&&(n.fade=!0);var a=Math.abs(n.random),r=n.duration-(n.rows+n.columns)*Math.abs(n.interval);n.pieceAnimation=function(e,t,o,i){var s=!(t%2),c=!(o%2),l=Math.random()*r,p=n.reverseOrder?(n.rows+n.columns-(t+o))*n.interval:(t+o)*n.interval,h=l*a+Math.max(1-a,0)*p,m={},y=e.style;n.fade&&(m.opacity=n.unhide?{start:"0",end:"1"}:{end:"0"}),1==n.columns?s=c:1==n.rows&&(c=!s);var f=parseInt(y.left),v=parseInt(y.top),w=n.distance*i.w,b=n.distance*i.h;return n.unhide?s==c?m.left=s?{start:f-w,end:f}:{start:f+w,end:f}:m.top=s?{start:v+b,end:v}:{start:v-b,end:v}:s==c?m.left=s?{end:f-w}:{end:f+w}:m.top=s?{end:v+b}:{end:v-b},d.animateProperty({node:e,duration:r,delay:h,easing:n.easing||u.sinInOut,properties:m,beforeBegin:n.unhide?function(){n.fade&&(y.opacity="0"),s==c?y.left=m.left.start+"px":y.top=m.top.start+"px"}:void 0})};var i=p._split(n);return n.unhide?l.connect(i,"onEnd",i,function(){o.style(t,{opacity:"1"})}):l.connect(i,"onPlay",i,function(){o.style(t,{opacity:"0"})}),i},unShear:function(n){return n.unhide=!0,p.shear(n)},pinwheel:function(n){var t=n.node=e.byId(n.node);n.rows=n.rows||4,n.columns=n.columns||4,n.duration=n.duration||1e3,n.interval=n.interval||0,n.distance=n.distance||1,n.random=n.random||0,void 0===n.fade&&(n.fade=!0);var a=n.duration-(n.rows+n.columns)*Math.abs(n.interval);n.pieceAnimation=function(e,t,r,i){var s=i.h/n.rows,c=i.w/n.columns,l=!(t%2),p=!(r%2),h=Math.random()*a,m=n.interval<0?(n.rows+n.columns-(t+r))*n.interval*-1:(t+r)*n.interval,y=h*n.random+Math.max(1-n.random,0)*m,f={},v=e.style;n.fade&&(f.opacity=n.unhide?{start:0,end:1}:{end:0}),1==n.columns?l=!p:1==n.rows&&(p=l);var w=parseInt(v.left),b=parseInt(v.top);return l&&(p?f.top=n.unhide?{start:b+s*n.distance,end:b}:{start:b,end:b+s*n.distance}:f.left=n.unhide?{start:w+c*n.distance,end:w}:{start:w,end:w+c*n.distance}),l!=p?f.width=n.unhide?{start:c*(1-n.distance),end:c}:{start:c,end:c*(1-n.distance)}:f.height=n.unhide?{start:s*(1-n.distance),end:s}:{start:s,end:s*(1-n.distance)},d.animateProperty({node:e,duration:a,delay:y,easing:n.easing||u.sinInOut,properties:f,beforeBegin:n.unhide?function(){n.fade&&o.style(e,"opacity",0),l?p?v.top=b+s*(1-n.distance)+"px":v.left=w+c*(1-n.distance)+"px":(v.left=w+"px",v.top=b+"px"),l!=p?v.width=c*(1-n.distance)+"px":v.height=s*(1-n.distance)+"px"}:void 0})};var r=p._split(n);return n.unhide?l.connect(r,"onEnd",r,function(){o.style(t,{opacity:"1"})}):l.connect(r,"play",r,function(){o.style(t,{opacity:"0"})}),r},unPinwheel:function(n){return n.unhide=!0,p.pinwheel(n)},blockFadeOut:function(n){var t=n.node=e.byId(n.node);n.rows=n.rows||5,n.columns=n.columns||5,n.duration=n.duration||1e3,n.interval=n.interval||n.duration/(n.rows+2*n.columns),n.random=n.random||0;var a=Math.abs(n.random),r=n.duration-(n.rows+n.columns)*n.interval;n.pieceAnimation=function(e,t,i,s){var c=Math.random()*n.duration,l=n.reverseOrder?(n.rows+n.columns-(t+i))*Math.abs(n.interval):(t+i)*n.interval,p=c*a+Math.max(1-a,0)*l;return d.animateProperty({node:e,duration:r,delay:p,easing:n.easing||u.sinInOut,properties:{opacity:n.unhide?{start:"0",end:"1"}:{start:"1",end:"0"}},beforeBegin:n.unhide?function(){o.style(e,{opacity:"0"})}:function(){e.style.filter=""}})};var i=p._split(n);return n.unhide?l.connect(i,"onEnd",i,function(){o.style(t,{opacity:"1"})}):l.connect(i,"onPlay",i,function(){o.style(t,{opacity:"0"})}),i},blockFadeIn:function(n){return n.unhide=!0,p.blockFadeOut(n)}}),c});
//# sourceMappingURL=../sourcemaps/fx/split.js.map
