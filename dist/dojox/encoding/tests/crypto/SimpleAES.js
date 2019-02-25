/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../crypto/SimpleAES"],function(e,n){var t="The rain in Spain falls mainly on the plain.",a="foo-bar-baz",r=null;tests.register("dojox.encoding.crypto.tests.SimpleAES",[function(i){var o=new Date;r=n.encrypt(t,a),e.debug("Encrypt: ",new Date-o,"ms.");var p=new Date;i.assertEqual(t,n.decrypt(r,a)),e.debug("Decrypt: ",new Date-p,"ms.")}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/crypto/SimpleAES.js.map
