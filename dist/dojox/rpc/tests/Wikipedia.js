/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.rpc.tests.Wikipedia"),dojo.require("dojo.io.script"),dojo.require("dojox.rpc.Service"),dojox.rpc.tests.wikipediaService=new dojox.rpc.Service(dojo.moduleUrl("dojox.rpc.SMDLibrary","wikipedia.smd")),dojox.rpc.tests.wikipediaService.TEST_METHOD_TIMEOUT=8e3,dojox.rpc.tests.wikipediaService._query=function(e){return function(r){var i=new doh.Deferred;e.parameters&&e.parameters.action&&e.expectedResult&&dojox.rpc.tests.wikipediaService.query(e.parameters).addCallback(this,function(r){console.log(r),r[e.expectedResult]?i.callback(!0):i.errback(new Error("Unexpected Return Value: ",r))});return i}},doh.register("dojox.rpc.tests.wikipedia",[{name:"#1, Wikipedia::parse",timeout:dojox.rpc.tests.wikipediaService.TEST_METHOD_TIMEOUT,runTest:dojox.rpc.tests.wikipediaService._query({parameters:{action:"parse",page:"Dojo Toolkit"},expectedResult:"parse"})},{name:"#2, Wikipedia::search",timeout:dojox.rpc.tests.wikipediaService.TEST_METHOD_TIMEOUT,runTest:dojox.rpc.tests.wikipediaService._query({parameters:{action:"query",list:"search",srwhat:"text",srsearch:"Dojo Toolkit"},expectedResult:"query"})}]);
//# sourceMappingURL=../../sourcemaps/rpc/tests/Wikipedia.js.map
