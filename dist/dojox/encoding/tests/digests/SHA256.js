/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../digests/_base","../../digests/SHA256"],function(e,a,t){e.register("dojox.encoding.tests.digests.SHA256",[function(e){e.assertEqual("ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=",t("abc"))},function(e){e.assertEqual("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",t("abc",a.outputTypes.Hex))},function(e){e.assertEqual("5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843",t.hmac("what do ya want for nothing?","Jefe",a.outputTypes.Hex))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/digests/SHA256.js.map
