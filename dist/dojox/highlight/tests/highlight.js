/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.highlight.tests.highlight"),dojo.require("dojox.highlight"),dojo.require("dojox.highlight.languages._all"),doh.register("dojox.highlight.tests.highlight",[function(){var s=dojox.highlight.processString("console.debug('hello'); /*Hi*/","javascript");doh.assertEqual('console.debug(<span class="string">\'hello\'</span>); <span class="comment">/*Hi*/</span>',s.result),doh.assertTrue(!s.partialResult),doh.assertEqual("javascript",s.langName)},function(){var s=dojox.highlight.processString("console.debug('hello);\n /*Hi*/","javascript");doh.assertEqual("console.debug('hello);\n /*Hi*/",s.result),doh.assertEqual('console.debug(<span class="string">',s.partialResult),doh.assertEqual("javascript",s.langName)}]);
//# sourceMappingURL=../../sourcemaps/highlight/tests/highlight.js.map
