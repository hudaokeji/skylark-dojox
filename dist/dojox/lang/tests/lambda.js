/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.lambda"),dojo.require("dojox.lang.functional"),dojo.require("dojox.lang.functional.sequence"),function(){var e=dojox.lang.functional;tests.register("dojox.lang.tests.lambda",[function(a){a.assertEqual(e.repeat(3,"3*",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"*3",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"_*3",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"3*_",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"n->n*3",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"n*3",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"3*m",1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,"->1",1),[1,1,1])},function(a){a.assertEqual(e.repeat(3,function(e){return 3*e},1),[1,3,9])},function(a){a.assertEqual(e.repeat(3,["_-1",["*3"]],1),[1,2,5])}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/lambda.js.map
