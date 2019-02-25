/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.DataWire"),dojo.require("dojox.wire.DataWire"),dojo.require("dojox.data.XmlStore"),tests.register("dojox.wire.tests.programmatic.DataWire",[function(e){var t=new dojox.data.XmlStore,a=t.newItem({tagName:"x"});new dojox.wire.DataWire({dataStore:t,object:a,attribute:"y"}).setValue("Y");var r=new dojox.wire.DataWire({dataStore:t,object:a,attribute:"y"}).getValue();e.assertEqual("Y",r),new dojox.wire.DataWire({dataStore:t,object:a,attribute:"y.z"}).setValue("Z"),r=new dojox.wire.DataWire({dataStore:t,object:a,attribute:"y.z"}).getValue(),e.assertEqual("Z",r)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/DataWire.js.map
