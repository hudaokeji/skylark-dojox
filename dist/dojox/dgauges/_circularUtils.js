/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(function(){return{computeTotalAngle:function(n,e,t){return n==e?360:this.computeAngle(n,e,t,360)},modAngle:function(n,e){if(void 0==e&&(e=6.28318530718),n>=e)do{n-=e}while(n>=e);else for(;n<0;)n+=e;return n},computeAngle:function(n,e,t,o){var i;return void 0==o&&(o=6.28318530718),e==n?o:(i="clockwise"==t?e<n?o-(n-e):e-n:e<n?n-e:o-(e-n),this.modAngle(i,o))},toRadians:function(n){return n*Math.PI/180},toDegrees:function(n){return 180*n/Math.PI}}});
//# sourceMappingURL=../sourcemaps/dgauges/_circularUtils.js.map
