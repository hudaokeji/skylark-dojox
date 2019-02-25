/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(e,r){var n=e.declare("dojox.editor.plugins._SpellCheckParser",null,{lang:"english",parseIntoWords:function(e){function r(e){var r=e.charCodeAt(0);return 48<=r&&r<=57||65<=r&&r<=90||97<=r&&r<=122}for(var n=this.words=[],o=this.indices=[],s=0,t=e&&e.length,i=0;s<t;){for(var c;s<t&&!r(c=e.charAt(s))&&"&"!=c;)s++;if("&"==c)for(;++s<t&&";"!=(c=e.charAt(s))&&r(c););else{for(i=s;++s<t&&r(e.charAt(s)););i<t&&(n.push(e.substring(i,s)),o.push(i))}}return n},getIndices:function(){return this.indices}});return e.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(e){e.parser||(e.parser=new n)}),n});
//# sourceMappingURL=../../sourcemaps/editor/plugins/_SpellCheckParser.js.map
