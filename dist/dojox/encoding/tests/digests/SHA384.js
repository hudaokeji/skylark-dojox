/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../../digests/_base","../../digests/SHA384","../../digests/_sha-64"],function(e,o,t,a){var s=[3405804863,1168334475,3047177577,2596687879,657207979,249483619,445341786,1140808685,2156267307,2716322851,1488645281,885532071];console.log("Vector:",s.map(function(e){return(e>>16&65535).toString(16)+(65535&e).toString(16)})),console.log(a.toHex(s)),console.log(a.toBase64(s)),console.log(a.toWord("abc"));var c=t("abc",o.outputTypes.Raw);console.log("Message: ",c.map(function(e){return(e>>16&65535).toString(16)+(65535&e).toString(16)})),console.log(a.toHex(c)),console.log(a.toBase64(c)),e.register("dojox.encoding.tests.digests.SHA384",[function(e){e.assertEqual("ywB1P0WjXou1oD1pmsZQBycsMqsO3tFjGotgWkP/W+2AhgcroefMI1i67KE0yCWn",t("abc"))},function(e){e.assertEqual("cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7",t("abc",o.outputTypes.Hex))},function(e){e.assertEqual("af45d2e376484031617f78d2b58a6b1b9c7ef464f5a01b47e42ec3736322445e8e2240ca5e69e2c78b3239ecfab21649",t.hmac("what do ya want for nothing?","Jefe",o.outputTypes.Hex))}])});
//# sourceMappingURL=../../../sourcemaps/encoding/tests/digests/SHA384.js.map
