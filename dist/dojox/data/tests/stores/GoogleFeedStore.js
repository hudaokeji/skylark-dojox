/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.tests.stores.GoogleFeedStore"),dojo.require("dojox.data.GoogleFeedStore"),dojo.require("dojo.data.api.Read"),dojox.data.tests.stores.GoogleFeedStore.getStore=function(){return new dojox.data.GoogleFeedStore},dojox.data.tests.stores.GoogleFeedStore.error=function(e,t,o){t.errback(o)},doh.register("dojox.data.tests.stores.GoogleFeedStore",[{name:"ReadAPI:  Fetch_One",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(t,r){e.is(1,t.length),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,doh,o)}),o}},{name:"ReadAPI:  test_Invalid_Query",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;try{t.fetch({query:{},count:1,onItem:function(t,r){e.assertTrue(!1),o.callback(!0)},onBegin:function(t,r){e.assertTrue(!1),o.callback(!0)},onComplete:function(t,r){e.assertTrue(!1),o.callback(!0)},onError:function(){o.callback(!0)}})}catch(t){console.log("exception thrown",t),e.assertTrue(!1),o.callback(!0)}return o}},{name:"ReadAPI:  Fetch_20_Streaming",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred,r=0;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},onBegin:null,count:20,onItem:function(o,s){e.assertTrue(t.isItem(o)),r++},onComplete:function(t,s){e.is(20,r),e.is(null,t),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  Fetch_Paging",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:7,onComplete:function(t,r){e.is(7,t.length),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getLabel",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r,s){e.assertEqual(r.length,1);var a=t.getLabel(r[0]);e.assertTrue(null!==a),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getLabelAttributes",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r,s){e.assertEqual(r.length,1);var a=t.getLabelAttributes(r[0]);e.assertTrue(dojo.isArray(a)),e.assertEqual("titleNoFormatting",a[0]),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getValue",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(null!==t.getValue(r[0],"unescapedUrl")),e.assertTrue(null!==t.getValue(r[0],"url")),e.assertTrue(null!==t.getValue(r[0],"visibleUrl")),e.assertTrue(null!==t.getValue(r[0],"cacheUrl")),e.assertTrue(null!==t.getValue(r[0],"title")),e.assertTrue(null!==t.getValue(r[0],"titleNoFormatting")),e.assertTrue(null!==t.getValue(r[0],"content")),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getValue_Failure",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=!1;try{t.getValue("NotAnItem","foo")}catch(e){o=!0}e.assertTrue(o)}},{name:"ReadAPI:  getValues",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r){e.is(1,r.length);var s=t.getValues(r[0],"unescapedUrl");e.assertTrue(dojo.isArray(s));var a=t.getValues(r[0],"url");e.assertTrue(dojo.isArray(a));var n=t.getValues(r[0],"visibleUrl");e.assertTrue(dojo.isArray(n));var u=t.getValues(r[0],"cacheUrl");e.assertTrue(dojo.isArray(u));var l=t.getValues(r[0],"title");e.assertTrue(dojo.isArray(l));var d=t.getValues(r[0],"titleNoFormatting");e.assertTrue(dojo.isArray(d));var i=t.getValues(r[0],"content");e.assertTrue(dojo.isArray(i)),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getValues_Failure",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=!1;try{t.getValues("NotAnItem","foo")}catch(e){o=!0}e.assertTrue(o)}},{name:"ReadAPI:  isItem",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:5,onComplete:function(r){e.is(5,r.length);for(var s=0;s<r.length;s++)e.assertTrue(t.isItem(r[s]));o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  hasAttribute",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(null!==r[0]),e.assertTrue(t.hasAttribute(r[0],"title")),e.assertTrue(t.hasAttribute(r[0],"link")),e.assertTrue(t.hasAttribute(r[0],"content")),e.assertTrue(t.hasAttribute(r[0],"author")),e.assertTrue(t.hasAttribute(r[0],"published")),e.assertTrue(t.hasAttribute(r[0],"categories")),e.assertTrue(!t.hasAttribute(r[0],"I dont exist"));try{t.hasAttribute(r[0],null),e.assertTrue(!1)}catch(e){}o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  containsValue",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(t.containsValue(r[0],"link",r[0].link)),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},{name:"ReadAPI:  getAttributes",timeout:1e4,runTest:function(e){var t=dojox.data.tests.stores.GoogleFeedStore.getStore(),o=new doh.Deferred;return t.fetch({query:{url:"http://shaneosullivan.wordpress.com/feed"},count:1,onComplete:function(r){console.log("items.length = "+r.length),e.is(1,r.length),e.assertTrue(t.isItem(r[0]));var s=t.getAttributes(r[0]);console.log("attributes.length = "+s.length,s),e.is(7,s.length),o.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.GoogleFeedStore.error,e,o)}),o}},function(e){var t,o=dojox.data.tests.stores.GoogleFeedStore.getStore().getFeatures(),r=0;for(t in o)e.assertTrue("dojo.data.api.Read"===t),r++;e.assertTrue(1===r)},function(e){var t,o=dojox.data.tests.stores.GoogleFeedStore.getStore(),r=new dojo.data.api.Read,s=!0;for(t in r){if("_"!==t.toString().charAt(0))if("function"==typeof r[t]){var a=o[t];if("function"!=typeof a){console.log("Problem with function: ["+t+"].   Got value: "+a),s=!1;break}}}e.assertTrue(s)}]);
//# sourceMappingURL=../../../sourcemaps/data/tests/stores/GoogleFeedStore.js.map
