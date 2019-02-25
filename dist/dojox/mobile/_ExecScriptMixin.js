/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/window","dojo/dom-construct"],function(e,r,c,t){return r("dojox.mobile._ExecScriptMixin",null,{execScript:function(r){var n=r.replace(/\f/g," ").replace(/<\/script>/g,"\f");return n=(n=n.replace(/<script [^>]*src=['"]([^'"]+)['"][^>]*>([^\f]*)\f/gi,function(e,r){return t.create("script",{type:"text/javascript",src:r},c.doc.getElementsByTagName("head")[0]),""})).replace(/<script>([^\f]*)\f/gi,function(r,c){return e.eval(c),""})}})});
//# sourceMappingURL=../sourcemaps/mobile/_ExecScriptMixin.js.map
