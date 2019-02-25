/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.docs"),dojo.require("dojox.lang.docs"),dojo.require("dijit.ColorPalette"),tests.register("dojox.lang.tests.docs",[function(i){i.is(!dijit.ColorPalette.description,!0)},function(i){dojox.lang.docs.init(),i.is(!!dijit.ColorPalette.description,!0),dojox.lang.docs.init(),i.is(!!dijit.ColorPalette.properties.defaultTimeout.description,!0),i.is(dijit.ColorPalette.properties.defaultTimeout.type,"number"),i.is(dijit.ColorPalette.methods.onChange.parameters[0].type,"string"),i.is(dijit.ColorPalette.methods.onChange.parameters[0].name,"color"),i.is(dijit.ColorPalette.extends,dijit._Widget)},function(i){dojo.require("dijit.Dialog"),i.is(!!dijit.Dialog.description,!0),i.is(!!dijit.Dialog.properties.autofocus.description,!0),i.is(dijit.Dialog.properties.autofocus.type,"boolean")},function(i){}]);
//# sourceMappingURL=../../sourcemaps/lang/tests/docs.js.map
