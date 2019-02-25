/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare"],function(t){return t(null,{_callParentFunction:!1,nextView:function(t){return this.isLeftToRight()||this._callParentFunction?(this._callParentFunction=!1,this.inherited(arguments)):(this._callParentFunction=!0,this.previousView(t))},previousView:function(t){return this.isLeftToRight()||this._callParentFunction?(this._callParentFunction=!1,this.inherited(arguments)):(this._callParentFunction=!0,this.nextView(t))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/SwapView.js.map
