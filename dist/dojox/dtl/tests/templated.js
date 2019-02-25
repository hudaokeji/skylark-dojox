/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","dijit/_WidgetBase","dojox/dtl/_Templated"],function(e,o,d,t){var i=o([d,t],{templateString:"<div>foo</div>"});e.register("dojox.dtl.tests._Templated",[function(e){var o=i();e.is("foo",o.domNode.innerHTML),o.destroy()},function(e){var o=document.createElement("div"),d=i(),t=i();d.placeAt(o,"last"),t.placeAt(o,"last"),e.is("foo",d.domNode.innerHTML),e.is("foo",t.domNode.innerHTML),e.is(2,o.children.length,"root should have two children"),d.destroy(),t.destroy()}])});
//# sourceMappingURL=../../sourcemaps/dtl/tests/templated.js.map
