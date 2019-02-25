/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/Deferred"],function(e,n){return function(r,o){var i=r.nls;if(i){var f,t=new n;try{var u=i,d=u.indexOf("./");d>=0&&(u=i.substring(d+2)),f=e.on?e.on("error",function(e){t.isResolved()||t.isRejected()||e.info[0]&&e.info[0].indexOf(u)>=0&&(t.resolve(!1),f&&f.remove())}):null,0==i.indexOf("./")&&(i="app/"+i),e(["dojo/i18n!"+i],function(e){t.resolve(e),f.remove()})}catch(e){t.reject(e),f&&f.remove()}return t}return!1}});
//# sourceMappingURL=../../sourcemaps/app/utils/nls.js.map
