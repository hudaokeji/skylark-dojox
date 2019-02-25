/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dijit/_WidgetBase","dijit/form/ValidationTextBox","dijit/form/NumberTextBox"],function(i,t,o,e){var a=o.prototype.isValid;o.prototype.isValid=function(i){return!1!==this.inherited("isValid",arguments)&&a.apply(this,[i])};var d=e.prototype.isValid;e.prototype.isValid=function(i){return!1!==this.inherited("isValid",arguments)&&d.apply(this,[i])},i.isFunction(t.prototype.isValid)||(t.prototype.isValid=function(){var i=this.get("valid");return void 0===i||i}),t.prototype._setValidAttr=function(i){this._set("valid",i),this.validate()}});
//# sourceMappingURL=../sourcemaps/mvc/_TextBoxExtensions.js.map
