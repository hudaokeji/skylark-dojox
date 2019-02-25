/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../compression/lzw","../../bits"],function(n,e,t){var a="The rain in Spain falls mainly on the plain.",i="The rain in Spain falls mainly on the plain.1",o="The rain in Spain falls mainly on the plain.ab",r="The rain in Spain falls mainly on the plain.!@#",l=function(n){var a=new t.OutputStream,i=new e.Encoder(128);return dojo.forEach(function(n){for(var e=[],t=0;t<n.length;++t)e.push(n.charCodeAt(t));return e}(n),function(n){i.encode(n,a)}),i.flush(a),console.debug("bits =",a.getWidth()),a.getBuffer()},s=function(n,a){for(var i=new t.InputStream(a,8*a.length),o=new e.Decoder(128),r=[],l=0;l<n;){var s=o.decode(i);r.push(s),l+=s.length}return r.join("")};n.register("dojox.encoding.tests.compression.lzw",[function(n){n.assertEqual(a,s(a.length,l(a)))},function(n){n.assertEqual(i,s(i.length,l(i)))},function(n){n.assertEqual(o,s(o.length,l(o)))},function(n){n.assertEqual(r,s(r.length,l(r)))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/compression/lzw.js.map
