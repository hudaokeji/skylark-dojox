/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./common"],function(a,n){var t=a.getObject("dojox.charting.plot2d.commonStacked",!0);return a.mixin(t,{collectStats:function(e){for(var l=a.delegate(n.defaultStats),r=0;r<e.length;++r)for(var u=e[r],d=0;d<u.data.length;d++){var i,o;null!==u.data[d]&&("number"!=typeof u.data[d]&&u.data[d].hasOwnProperty("x")?null!==(i=u.data[d].x)&&(o=null!=(o=t.getValue(e,r,i)[0])&&o.y?o.y:null):(o=t.getIndexValue(e,r,d)[0],i=d+1),l.hmin=Math.min(l.hmin,i),l.hmax=Math.max(l.hmax,i),l.vmin=Math.min(l.vmin,o),l.vmax=Math.max(l.vmax,o))}return l},getIndexValue:function(a,n,t){var e,l,r,u=0;for(l=0;l<=n;++l)a[l].hidden||(r=u,null!=(e=a[l].data[t])&&(isNaN(e)&&(e=e.y||0),u+=e));return[u,r]},getValue:function(a,n,t){var e,l,r,u,d=null;for(e=0;e<=n;++e)if(!a[e].hidden)for(l=0;l<a[e].data.length;l++)if(u=d,null!==(r=a[e].data[l])){if(r.x==t){d||(d={x:t}),null!=r.y&&(null==d.y&&(d.y=0),d.y+=r.y);break}if(r.x>t)break}return[d,u]}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/commonStacked.js.map
