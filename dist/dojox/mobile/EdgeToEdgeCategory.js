/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./RoundRectCategory"],function(e,o){return e("dojox.mobile.EdgeToEdgeCategory",o,{buildRendering:function(){this.inherited(arguments),this.domNode.className="mblEdgeToEdgeCategory",this.type&&"long"==this.type&&(this.domNode.className+=" mblEdgeToEdgeCategoryLong")}})});
//# sourceMappingURL=../sourcemaps/mobile/EdgeToEdgeCategory.js.map
