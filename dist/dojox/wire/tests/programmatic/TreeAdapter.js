/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.TreeAdapter"),dojo.require("dojox.wire.TreeAdapter"),tests.register("dojox.wire.tests.programmatic.TreeAdapter",[function(e){var r=[{a:"A1",b:"B1",c:"C1"},{a:"A2",b:"B2",c:"C2"},{a:"A3",b:"B3",c:"C3"}],t=new dojox.wire.TreeAdapter({object:r,nodes:[{title:{property:"a"},children:[{node:{property:"b"}},{title:{property:"c"}}]}]}).getValue();e.assertEqual(r[0].a,t[0].title),e.assertEqual(r[1].b,t[1].children[0].title),e.assertEqual(r[2].c,t[2].children[1].title)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/TreeAdapter.js.map
