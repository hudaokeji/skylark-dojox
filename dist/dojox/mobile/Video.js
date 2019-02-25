/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/sniff","./Audio"],function(e,i,o){return e("dojox.mobile.Video",o,{width:"200px",height:"150px",_tag:"video",_getEmbedRegExp:function(){return i("ff")?/video\/mp4/i:i("ie")>=9?/video\/webm/i:null}})});
//# sourceMappingURL=../sourcemaps/mobile/Video.js.map
