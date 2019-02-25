/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define([],function(){var n={tool:{},stencil:{},drawing:{},plugin:{},button:{}};return{register:function(t,e){"drawing"==e?n.drawing[t.id]=t:"tool"==e?n.tool[t.name]=t:"stencil"==e?n.stencil[t.name]=t:"plugin"==e?n.plugin[t.name]=t:"button"==e&&(n.button[t.toolType]=t)},getRegistered:function(t,e){return e?n[t][e]:n[t]}}});
//# sourceMappingURL=../../sourcemaps/drawing/manager/_registry.js.map
