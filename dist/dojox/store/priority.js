/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/Deferred","dojo/when"],function(e,r,t){var n=[],o=0;return function(u,i){i=i||{};var c=e.delegate(u);return["add","put","query","remove","get"].forEach(function(e){var f=u[e];f&&(c[e]=function(c,a){var l,s,h;if((a=a||{}).immediate)return f.call(u,c,a);a.immediate=!0,"query"===e?(s=function(e){var r=f.call(u,c,a);l.resolve({results:r}),t(r,e,e)},h=new r,l={promise:{total:{then:function(e,r){return h.then(function(e){return e.results.total}).then(e,r)}},forEach:function(e,r){return h.then(function(t){return t.results.forEach(e,r)})},map:function(e,r){return h.then(function(t){return t.results.map(e,r)})},filter:function(e,r){return h.then(function(t){return t.results.filter(e,r)})},then:function(e,r){return h.then(function(n){return t(n.results,e,r)})}},resolve:h.resolve,reject:h.reject}):(s=function(e){t(f.call(u,c,a),function(r){l.resolve(r),e()},function(r){l.reject(r),e()})},l=new r);var v=a.priority>-1?a.priority:i.priority>-1?i.priority:4;return(n[v]||(n[v]=[])).push({executor:s,def:l}),function e(){for(var r=n.length-1;r>=o;r--){var t=n[r],u=t&&t[t.length-1];if(u){t.pop(),o++;try{u.executor(function(){o--,e()})}catch(r){u.def.reject(r),e()}}}}(),l.promise})}),c}});
//# sourceMappingURL=../sourcemaps/store/priority.js.map
