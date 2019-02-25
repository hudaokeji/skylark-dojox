/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.tests.programmatic.XmlWire"),dojo.require("dojox.wire.XmlWire"),tests.register("dojox.wire.tests.programmatic.XmlWire",[function(e){var t={},r=dojox.wire.create({object:t,property:"element"});new dojox.wire.XmlWire({object:r,path:"/x/y/text()"}).setValue("Y");var o=new dojox.wire.XmlWire({object:t,property:"element",path:"y/text()"}).getValue();e.assertEqual("Y",o),new dojox.wire.XmlWire({object:t,property:"element",path:"y/@z"}).setValue("Z"),o=new dojox.wire.XmlWire({object:r,path:"/x/y/@z"}).getValue(),e.assertEqual("Z",o);var a=t.element.ownerDocument,i=a.createElement("y");i.appendChild(a.createTextNode("Y2")),t.element.appendChild(i),o=new dojox.wire.XmlWire({object:t.element,path:"y[2]/text()"}).getValue(),e.assertEqual("Y2",o)}]);
//# sourceMappingURL=../../../sourcemaps/wire/tests/programmatic/XmlWire.js.map
