/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.CompositeWire"),dojo.require("dojox.wire.CompositeWire"),tests.register("dojox.wire.tests.programmatic.CompositeWire",[function(e){var r={a:"A",b:"B"},a={},o={x:{property:"a"},y:{property:"b"}},s=new dojox.wire.CompositeWire({object:r,children:o}).getValue();e.assertEqual(r.a,s.x),e.assertEqual(r.b,s.y),new dojox.wire.CompositeWire({object:a,children:o}).setValue(s),e.assertEqual(r.a,a.a),e.assertEqual(r.b,a.b),a={},s=new dojox.wire.CompositeWire({children:o}).getValue(r),e.assertEqual(r.a,s.x),e.assertEqual(r.b,s.y),new dojox.wire.CompositeWire({children:o}).setValue(s,a),e.assertEqual(r.a,a.a),e.assertEqual(r.b,a.b),a={},o=[{property:"a"},{property:"b"}],s=new dojox.wire.CompositeWire({object:r,children:o}).getValue(),e.assertEqual(r.a,s[0]),e.assertEqual(r.b,s[1]),new dojox.wire.CompositeWire({object:a,children:o}).setValue(s),e.assertEqual(r.a,a.a),e.assertEqual(r.b,a.b),a={},s=new dojox.wire.CompositeWire({children:o}).getValue(r),e.assertEqual(r.a,s[0]),e.assertEqual(r.b,s[1]),new dojox.wire.CompositeWire({children:o}).setValue(s,a),e.assertEqual(r.a,a.a),e.assertEqual(r.b,a.b)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/CompositeWire.js.map
