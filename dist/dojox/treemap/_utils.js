/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array"],function(e){var t={group:function(n,r,i){var h={children:[]},o=function(e,t){return e.__treeValue||(e.__treeValue=0),e.__treeValue+=i(t),e};return e.forEach(n,function(n){var i=h;e.forEach(r,function(e,h){var u=e(n),a=t.find(i.children,function(e){return e.__treeName==u});a||i.children.push(a={__treeName:u,__treeID:u+Math.random(),children:[]}),a=o(a,n),h!=r.length-1?i=a:a.children.push(n)}),i=o(i,n)}),h},find:function(e,t){for(var n=e.length,r=0;r<n;++r)if(t.call(null,e[r]))return e[r];return null},solve:function(n,r,i,h,o){var u=t.initElements(n,h),a=u.total,f=u.elements,l=a;if(0==a){if(0==f.length)return{items:n,rects:[],total:0};e.forEach(f,function(e){e.size=e.sizeTmp=100}),a=100*f.length}f.sort(function(e,t){return t.size-e.size}),t._compute(r,i,f,a),f.sort(function(e,t){return e.index-t.index});var c={};return c.elements=f,c.size=l,rects=e.map(f,function(e){return{x:o?r-e.x-e.width:e.x,y:e.y,w:e.width,h:e.height}}),c.rectangles=rects,c},initElements:function(t,n){var r=0;return{elements:e.map(t,function(e,t){var i=null!=n?n(e):0;if(i<0)throw new Error("item size dimension must be positive");return r+=i,{index:t,size:i,sizeTmp:i}}),total:r}},_compute:function(n,r,i,h){var o=n*r/h/100;e.forEach(i,function(e){e.sizeTmp*=o});for(var u,a=0,f=0,l=-1>>>1,c=0,m=0,s=n,d=r,p=s>d;f!=i.length;)if((u=t._trySolution(i,a,f,p,s,d))>l||u<1){for(var g=0,v=0,_=a;_<f;_++)i[_].x=c+g,i[_].y=m+v,p?v+=i[_].height:g+=i[_].width;p?c+=i[a].width:m+=i[a].height,p=(s=n-c)>(d=r-m),f=a=f,l=-1>>>1}else{for(_=a;_<=f;_++)i[_].width=i[_].widthTmp,i[_].height=i[_].heightTmp;l=u,f++}var T=0,w=0;for(_=a;_<f;_++)i[_].x=c+T,i[_].y=m+w,p?w+=i[_].height:T+=i[_].width},_trySolution:function(e,t,n,r,i,h){for(var o,u=0,a=0,f=0,l=t;l<=n;l++)u+=e[l].sizeTmp;r?0==h?a=f=0:(a=u/h*100,f=h):0==i?a=f=0:(f=u/i*100,a=i);for(l=t;l<=n;l++)r?(e[l].widthTmp=a,e[l].heightTmp=0==u?0:f*e[l].sizeTmp/u):(e[l].widthTmp=0==u?0:a*e[l].sizeTmp/u,e[l].heightTmp=f);return void 0==(o=Math.max(e[n].heightTmp/e[n].widthTmp,e[n].widthTmp/e[n].heightTmp))?1:o}};return t});
//# sourceMappingURL=../sourcemaps/treemap/_utils.js.map
