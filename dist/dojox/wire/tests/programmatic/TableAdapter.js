/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.TableAdapter"),dojo.require("dojox.wire.TableAdapter"),tests.register("dojox.wire.tests.programmatic.TableAdapter",[function(e){var r=[{a:"A1",b:"B1",c:"C1"},{a:"A2",b:"B2",c:"C2"},{a:"A3",b:"B3",c:"C3"}],a=new dojox.wire.TableAdapter({object:r,columns:{x:{property:"a"},y:{property:"b"},z:{property:"c"}}}).getValue();e.assertEqual(r[0].a,a[0].x),e.assertEqual(r[1].b,a[1].y),e.assertEqual(r[2].c,a[2].z)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/TableAdapter.js.map
