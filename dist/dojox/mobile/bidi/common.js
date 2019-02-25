/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dijit/_BidiSupport"],function(t,e){var r={enforceTextDirWithUcc:function(t,n){return n?("rtl"===(n="auto"===n?e.prototype._checkContextual(t):n)?r.MARK.RLE:r.MARK.LRE)+t+r.MARK.PDF:t},removeUCCFromText:function(t){return t?t.replace(/\u202A|\u202B|\u202C/g,""):t},setTextDirForButtons:function(e){var r=e.getChildren();r&&e.textDir&&t.forEach(r,function(t){t.set("textDir",e.textDir)},e)},MARK:{LRE:"‪",RLE:"‫",PDF:"‬"}};return r});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/common.js.map
