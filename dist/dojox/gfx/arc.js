/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","dojo/_base/lang","./matrix"],function(t,a,i){var n=2*Math.PI,r=Math.PI/4,y=Math.PI/8,l=r+y,o=e(y);function e(t){var a=Math.cos(t),i=Math.sin(t),n={x:a+4/3*(1-a),y:i-4/3*a*(1-a)/i};return{s:{x:a,y:-i},c1:{x:n.x,y:-n.y},c2:n,e:{x:a,y:i}}}return t.arc={unitArcAsBezier:e,curvePI4:o,arcAsBezier:function(t,a,x,u,c,s,P,m){c=Boolean(c),s=Boolean(s);var p=i._degToRad(u),h=a*a,v=x*x,M=i.multiplyPoint(i.rotate(-p),{x:(t.x-P)/2,y:(t.y-m)/2}),f=M.x*M.x,d=M.y*M.y,z=Math.sqrt((h*v-h*d-v*f)/(h*d+v*f));isNaN(z)&&(z=0);var B={x:z*a*M.y/x,y:-z*x*M.x/a};c==s&&(B={x:-B.x,y:-B.y});var I=i.multiplyPoint([i.translate((t.x+P)/2,(t.y+m)/2),i.rotate(p)],B),A=i.normalize([i.translate(I.x,I.y),i.rotate(p),i.scale(a,x)]),_=i.invert(A),b=i.multiplyPoint(_,t),g=i.multiplyPoint(_,P,m),N=Math.atan2(b.y,b.x),j=N-Math.atan2(g.y,g.x);s&&(j=-j),j<0?j+=n:j>n&&(j-=n);for(var q=y,R=o,T=s?q:-q,k=[],w=j;w>0;w-=r){w<l&&(R=e(q=w/2),T=s?q:-q,w=0);var C,D,E=i.normalize([A,i.rotate(N+T)]);s?(z=i.multiplyPoint(E,R.c1),C=i.multiplyPoint(E,R.c2),D=i.multiplyPoint(E,R.e)):(z=i.multiplyPoint(E,R.c2),C=i.multiplyPoint(E,R.c1),D=i.multiplyPoint(E,R.s)),k.push([z.x,z.y,C.x,C.y,D.x,D.y]),N+=2*T}return k}}});
//# sourceMappingURL=../sourcemaps/gfx/arc.js.map
