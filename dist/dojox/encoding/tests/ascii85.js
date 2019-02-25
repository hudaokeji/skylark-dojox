/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../ascii85"],function(n,e){var a="The rain in Spain falls mainly on the plain.",i="The rain in Spain falls mainly on the plain.1",o="The rain in Spain falls mainly on the plain.ab",t="The rain in Spain falls mainly on the plain.!@#",r=function(n){for(var e=[],a=0;a<n.length;++a)e.push(n.charCodeAt(a));return e},c=function(n){var e=[];return dojo.forEach(n,function(n){e.push(String.fromCharCode(n))}),e.join("")};n.register("dojox.encoding.tests.ascii85",[function(n){n.assertEqual(a,c(e.decode(e.encode(r(a)))))},function(n){n.assertEqual(i,c(e.decode(e.encode(r(i)))))},function(n){n.assertEqual(o,c(e.decode(e.encode(r(o)))))},function(n){n.assertEqual(t,c(e.decode(e.encode(r(t)))))}])});
//# sourceMappingURL=../../sourcemaps/encoding/tests/ascii85.js.map
