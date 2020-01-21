/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/Deferred"],function(require,e){return function(n,r){var o=n.nls;if(o){var i,f=new e;try{var t=o,u=t.indexOf("./");u>=0&&(t=o.substring(u+2)),i=require.on?require.on("error",function(e){f.isResolved()||f.isRejected()||e.info[0]&&e.info[0].indexOf(t)>=0&&(f.resolve(!1),i&&i.remove())}):null,0==o.indexOf("./")&&(o="app/"+o),require(["dojo/i18n!"+o],function(e){f.resolve(e),i.remove()})}catch(e){f.reject(e),i&&i.remove()}return f}return!1}});
//# sourceMappingURL=../../sourcemaps/app/utils/nls.js.map
