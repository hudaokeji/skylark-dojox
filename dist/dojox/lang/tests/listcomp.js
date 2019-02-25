/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.listcomp"),dojo.require("dojox.lang.functional.listcomp"),dojo.require("dojox.lang.functional.sequence"),function(){var i=dojox.lang.functional;tests.register("dojox.lang.tests.listcomp",[function(o){o.assertEqual(i.repeat(3,function(i){return i+1},0),[0,1,2])},function(o){o.assertEqual(i.repeat(3,function(i){return 3*i},1),[1,3,9])},function(o){o.assertEqual(i.until(function(i){return i>10},function(i){return 3*i},1),[1,3,9])},function(o){o.assertEqual(i.listcomp("i for(var i=0; i<3; ++i)"),[0,1,2])},function(o){o.assertEqual(i.listcomp("i*j for(var i=0; i<3; ++i) for(var j=0; j<3; ++j)"),[0,0,0,0,1,2,0,2,4])},function(o){o.assertEqual(i.listcomp("i*j for(var i=0; i<3; ++i) if(i%2==1) for(var j=0; j<3; ++j)"),[0,1,2])},function(o){o.assertEqual(i.listcomp("i+j for(var i=0; i<3; ++i) for(var j=0; j<3; ++j)"),[0,1,2,1,2,3,2,3,4])},function(o){o.assertEqual(i.listcomp("i+j for(var i=0; i<3; ++i) if(i%2==1) for(var j=0; j<3; ++j)"),[1,2,3])},function(o){o.assertEqual(i.listcomp("i for(i=0; i<3; ++i)"),[0,1,2])},function(o){o.assertEqual(i.listcomp("i*j for(i=0; i<3; ++i) for(j=0; j<3; ++j)"),[0,0,0,0,1,2,0,2,4])},function(o){o.assertEqual(i.listcomp("i*j for(i=0; i<3; ++i) if(i%2==1) for(j=0; j<3; ++j)"),[0,1,2])},function(o){o.assertEqual(i.listcomp("i+j for(i=0; i<3; ++i) for(j=0; j<3; ++j)"),[0,1,2,1,2,3,2,3,4])},function(o){o.assertEqual(i.listcomp("i+j for(i=0; i<3; ++i) if(i%2==1) for(j=0; j<3; ++j)"),[1,2,3])}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/listcomp.js.map
