/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define({reverseMatrix:function(x,r,a,t){var i=a.l-a.r,y=t?-1:1,m=0,e=0,d=1,n=t?r.width+i:0,s=0;x.matrix&&(y*=Math.abs(x.matrix.xx),d=x.matrix.yy,m=x.matrix.xy,e=x.matrix.yx,s=x.matrix.xy),x.setTransform({xx:y,xy:m,yx:e,yy:d,dx:n,dy:s})}});
//# sourceMappingURL=../../sourcemaps/charting/bidi/_bidiutils.js.map
