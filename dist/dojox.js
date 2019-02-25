/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
!function(r,e){var o=e.define,n=e.require,t="function"==typeof o&&o.amd,i=!t&&"undefined"!=typeof exports;if(!t&&!o){var u={};o=e.define=function(r,e,o){"function"==typeof o?(u[r]={factory:o,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var o=e.split("/"),n=r.split("/");o.pop();for(var t=0;t<n.length;t++)"."!=n[t]&&(".."==n[t]?o.pop():o.push(n[t]));return o.join("/")}(e,r)}),resolved:!1,exports:null},n(r)):u[r]={factory:null,resolved:!0,exports:o}},n=e.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var o=u[r];if(!o.resolved){var t=[];o.deps.forEach(function(r){t.push(n(r))}),o.exports=o.factory.apply(e,t)||null,o.resolved=!0}return o.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("dojox/main",["dojo/_base/kernel"],function(r){return r.dojox}),r("dojox",["dojox/main"],function(r){return r})}(o),!t){var f=n("skylark-langx/skylark");i?module.exports=f:e.skylarkjs=f}}(0,this);
//# sourceMappingURL=sourcemaps/dojox.js.map
