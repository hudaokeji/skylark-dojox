/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.math.tests.random"),dojo.require("dojox.math.random.Simple"),dojo.require("dojox.math.random.Secure"),dojo.require("dojox.math.random.prng4"),tests.register("dojox.math.tests.random",[function(o){var r=new dojox.math.random.Simple,e=new Array(256);r.nextBytes(e),o.f(dojo.every(e,function(o){return o===e[0]})),r.destroy()},function(o){var r=new dojox.math.random.Secure(dojox.math.random.prng4),e=new Array(256);r.nextBytes(e),o.f(dojo.every(e,function(o){return o===e[0]})),r.destroy()}]);
//# sourceMappingURL=../../sourcemaps/math/tests/random.js.map
