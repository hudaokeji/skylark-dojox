/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../../_base","../xml"],function(e){return e.languages.xml={defaultMode:{contains:["name entity","comment","comment preproc","_tag"]},modes:[{className:"comment",begin:"\x3c!--",end:"--\x3e"},{className:"comment preproc",begin:"\\<\\!\\[CDATA\\[",end:"\\]\\]\\>"},{className:"comment preproc",begin:"\\<\\!",end:"\\>"},{className:"comment preproc",begin:"\\<\\?",end:"\\?\\>",relevance:5},{className:"string",begin:"'",end:"'",illegal:"\\n",relevance:0},{className:"string",begin:'"',end:'"',illegal:"\\n",relevance:0},{className:"name entity",begin:"\\&[a-z]+;",end:"^"},{className:"name tag",begin:"\\b[a-z0-9_\\:\\-]+\\b",end:"^"},{className:"name attribute",begin:"\\b[a-z0-9_\\:\\-]+=",end:"^",relevance:0},{className:"_tag",begin:"\\<",end:"\\>",contains:["name tag","name attribute","string"]},{className:"_tag",begin:"\\</",end:"\\>",contains:["name tag"]}]}});
//# sourceMappingURL=../../../sourcemaps/highlight/languages/pygments/xml.js.map
