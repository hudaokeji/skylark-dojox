/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.rpc.tests.FriendFeed"),dojo.require("dojo.io.script"),dojo.require("dojox.rpc.Service"),dojo.declare("dojox.rpc.tests.FFTest",null,{name:"",timeout:8e3,constructor:function(e,r,t,n){var o={name:e,_method:r,_parameters:t,_test:n};return dojo.mixin(this,o),this},setUp:function(){this.service=new dojox.rpc.Service(dojo.moduleUrl("dojox.rpc.SMDLibrary","friendfeed.smd"))},runTest:function(e){var r=new doh.Deferred;this.service[this._method](this._parameters).addCallback(this,function(e){return e.errorCode?r.errback(new Error("Test failed",e)):this._test(e)?r.callback(!0):r.errback(new Error("Test failed ",e)),r})},tearDown:function(){this.service=void 0}}),doh.register("dojox.rpc.tests.friendfeed",[new dojox.rpc.tests.FFTest("#1 Users","users",{nickname:"paul"},function(e){return e.entries}),new dojox.rpc.tests.FFTest("#2 Search","search",{q:"dojo"},function(e){return e.entries}),new dojox.rpc.tests.FFTest("#3 Domain","entry",{entry_id:"245da66c-d6dd-8a4b-1719-b5bfb1f9d5eb"},function(e){return e.entries&&1==e.entries.length}),new dojox.rpc.tests.FFTest("#4 URL","url",{url:"http://blog.medryx.org/tag/doh/"},function(e){return e.entries&&e.entries.length>=1}),new dojox.rpc.tests.FFTest("#5 Domain","domain",{domain:"dojotoolkit.org"},function(e){return e.entries&&e.entries.length>=1}),new dojox.rpc.tests.FFTest("#6 Parameter - service","users",{nickname:"paul",service:"twitter"},function(e){return 0==dojo.filter(e.entries,function(e){return"twitter"!=e.service.id}).length}),new dojox.rpc.tests.FFTest("#7 Parameter - num","users",{nickname:"paul",num:42},function(e){return 42==e.length})]);
//# sourceMappingURL=../../sourcemaps/rpc/tests/FriendFeed.js.map
