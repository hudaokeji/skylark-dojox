/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox"],function(e,o){e.getObject("image",!0,o);var a,i=e;o.image.preload=function(e){return a||(a=i.create("div",{style:{position:"absolute",top:"-9999px",height:"1px",overflow:"hidden"}},i.body())),i.map(e,function(e){return i.create("img",{src:e},a)})},i.config.preloadImages&&i.addOnLoad(function(){o.image.preload(i.config.preloadImages)})});
//# sourceMappingURL=../sourcemaps/image/_base.js.map
