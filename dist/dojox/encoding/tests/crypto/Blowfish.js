/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../crypto/Blowfish"],function(e,t){var a="The rain in Spain falls mainly on the plain.",s="WI5J5BPPVBuiTniVcl7KlIyNMmCosmKTU6a/ueyQuoUXyC5dERzwwdzfFsiU4vBw";tests.register("dojox.encoding.crypto.tests.Blowfish",[function(n){var o=new Date;n.assertEqual(s,t.encrypt(a,"foobar")),e.debug("testEncrypt: ",new Date-o,"ms.")},function(n){var o=new Date;n.assertEqual(a,t.decrypt(s,"foobar")),e.debug("testDecrypt: ",new Date-o,"ms.")},function(a){var s=new Date,n=t.encrypt("pass","foobar"),o=t.decrypt(n,"foobar");a.assertEqual(o,"pass"),e.debug("testShortMessage: ",new Date-s,"ms.")}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/crypto/Blowfish.js.map
