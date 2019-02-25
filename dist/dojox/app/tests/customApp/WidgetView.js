/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojox/app/ViewBase","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin"],function(e,i,t,n,o){return e([t,i,n,o],{postCreate:function(){this.inherited(arguments),this.myButton.on("click",function(){console.log("I was correctly attached!")})}})});
//# sourceMappingURL=../../../sourcemaps/app/tests/customApp/WidgetView.js.map
