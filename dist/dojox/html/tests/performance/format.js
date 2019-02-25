/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.html.tests.performance.format"),dojo.require("dojox.html.format"),dojox.html.tests.performance.docText=null,doh.register("format.prettyprint.performance",[{name:"smallDoc",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,setUp:function(){var t=dojo.xhrGet({preventCache:!0,url:dojo.moduleUrl("dojox","html/tests/performance/smalldoc.txt").toString(),handleAs:"text",sync:!0});t.addCallback(function(t){dojox.html.tests.performance.docText=t}),t.addErrback(function(t){console.log(t)})},tearDown:function(){dojox.html.tests.performance.docText=null},runTest:function(){dojox.html.format.prettyPrint(dojox.html.tests.performance.docText)}},{name:"largeDoc",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,setUp:function(){var t=dojo.xhrGet({preventCache:!0,url:dojo.moduleUrl("dojox","html/tests/performance/largedoc.txt").toString(),handleAs:"text",sync:!0});t.addCallback(function(t){dojox.html.tests.performance.docText=t}),t.addErrback(function(t){console.log(t)})},tearDown:function(){dojox.html.tests.performance.docText=null},runTest:function(){dojox.html.format.prettyPrint(dojox.html.tests.performance.docText)}}]);
//# sourceMappingURL=../../../sourcemaps/html/tests/performance/format.js.map
