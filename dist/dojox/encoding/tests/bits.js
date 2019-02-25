/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../bits"],function(n,t){var a="The rain in Spain falls mainly on the plain.",r="The rain in Spain falls mainly on the plain.1",e="The rain in Spain falls mainly on the plain.ab",i="The rain in Spain falls mainly on the plain.!@#",u=function(n){for(var t=[],a=0;a<n.length;++a)t.push(n.charCodeAt(a));return t},o=function(n){var t=[];return dojo.forEach(n,function(n){t.push(String.fromCharCode(n))}),t.join("")},s=function(n){for(var a=new t.OutputStream,r=0;r<n.length;++r){var e=n.charCodeAt(r),i=Math.floor(7*Math.random())+1;a.putBits(e>>>8-i,i),a.putBits(e,8-i)}return o(a.getBuffer())},f=function(n){for(var a=new t.InputStream(u(n),8*n.length),r=[],e=0;e<n.length;++e){var i=Math.floor(7*Math.random())+1;r.push(a.getBits(i)<<8-i|a.getBits(8-i))}return o(r)},l=function(n){for(var a=new t.InputStream(u(n),8*n.length),r=new t.OutputStream;a.getWidth()>0;){var e=Math.min(a.getWidth(),3);r.putBits(a.getBits(e),e)}return o(r.getBuffer())};n.register("dojox.encoding.tests.bits",[function(n){n.assertEqual(a,s(a))},function(n){n.assertEqual(r,s(r))},function(n){n.assertEqual(e,s(e))},function(n){n.assertEqual(i,s(i))},function(n){n.assertEqual(a,f(a))},function(n){n.assertEqual(r,f(r))},function(n){n.assertEqual(e,f(e))},function(n){n.assertEqual(i,f(i))},function(n){n.assertEqual(a,l(a))},function(n){n.assertEqual(r,l(r))},function(n){n.assertEqual(e,l(e))},function(n){n.assertEqual(i,l(i))}])});
//# sourceMappingURL=../../sourcemaps/encoding/tests/bits.js.map
