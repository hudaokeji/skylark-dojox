/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.TextAdapter"),dojo.require("dojox.wire.TextAdapter"),tests.register("dojox.wire.tests.programmatic.TextAdapter",[function(e){var r=new dojox.wire.TextAdapter({object:{a:"a",b:"b",c:"c"},segments:[{property:"a"},{property:"b"},{property:"c"}]}).getValue();e.assertEqual("abc",r)},function(e){var r=new dojox.wire.TextAdapter({object:{a:"a",b:"b",c:"c"},segments:[{property:"a"},{property:"b"},{property:"c"}],delimiter:"/"}).getValue();e.assertEqual("a/b/c",r)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/TextAdapter.js.map
