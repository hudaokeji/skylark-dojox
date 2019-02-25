/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.math.tests.BigInteger"),dojo.require("dojox.math.BigInteger"),tests.register("dojox.math.tests.BigInteger",[function(e){var t=new dojox.math.BigInteger("abcd1234",16),o=new dojox.math.BigInteger("beef",16),g=t.mod(o);e.is("b60c",g.toString(16))}]);
//# sourceMappingURL=../../sourcemaps/math/tests/BigInteger.js.map
