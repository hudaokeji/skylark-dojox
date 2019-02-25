/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../digests/_base","../../digests/SHA1"],function(e,s,t){e.register("dojox.encoding.tests.digests.SHA1",[function(e){e.assertEqual("qZk+NkcGgWq6PiVxeFDCbJzQ2J0=",t("abc"))},function(e){e.assertEqual("a9993e364706816aba3e25717850c26c9cd0d89d",t("abc",s.outputTypes.Hex))},function(e){e.assertEqual("©>6Gjº>%qxPÂlÐØ",t("abc",s.outputTypes.String))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/digests/SHA1.js.map
