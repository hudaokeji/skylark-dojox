/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../digests/_base","../../digests/SHA224","../../digests/_sha-32"],function(e,a,s,t){e.register("dojox.encoding.tests.digests.SHA224",[function(e){e.assertEqual("Iwl9IjQF2CKGQqR3vaJVsyqtvOS9oLP342ydpw==",s("abc"))},function(e){e.assertEqual("23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7",s("abc",a.outputTypes.Hex))},function(e){e.assertEqual("a30e01098bc6dbbf45690f3a7e9e6d0f8bbea2a39e6148008fd05e44",s.hmac("what do ya want for nothing?","Jefe",a.outputTypes.Hex))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/digests/SHA224.js.map
