/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../digests/_base","../../digests/MD5"],function(e,t,s){var n="The rain in Spain falls mainly on the plain.";e.register("dojox.encoding.tests.digests.MD5",[function(e){e.assertEqual("OUhxbVZ1Mtmu4zx9LzS5cA==",s(n))},function(e){e.assertEqual("3948716d567532d9aee33c7d2f34b970",s(n,t.outputTypes.Hex))},function(e){e.assertEqual("9HqmVu2Ù®ã<}/4¹p",s(n,t.outputTypes.String))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/digests/MD5.js.map
