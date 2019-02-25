/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.tests.stores.FlickrStore"),dojo.require("dojox.data.FlickrStore"),dojo.require("dojo.data.api.Read"),dojox.data.tests.stores.FlickrStore.error=function(e,t,r){t.errback(r)},doh.register("dojox.data.tests.stores.FlickrStore",[{name:"ReadAPI:  Fetch_One",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(t,o){e.is(1,t.length),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,doh,r)}),r}},{name:"ReadAPI:  Fetch_20_Streaming",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return count=0,t.fetch({onBegin:function(t,r){e.is(20,t)},count:20,onItem:function(r,o){e.assertTrue(t.isItem(r)),count++},onComplete:function(t,o){e.is(20,count),e.is(null,t),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  Fetch_Paging",timeout:3e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;function o(r,o){e.is(5,r.length),o.start=3,o.count=1,o.onComplete=a,t.fetch(o)}function a(r,o){e.is(1,r.length),o.start=0,o.count=5,o.onComplete=n,t.fetch(o)}function n(r,o){e.is(5,r.length),o.start=2,o.count=20,o.onComplete=s,t.fetch(o)}function s(r,o){e.is(18,r.length),o.start=9,o.count=100,o.onComplete=i,t.fetch(o)}function i(r,o){e.is(11,r.length),o.start=2,o.count=20,o.onComplete=u,t.fetch(o)}function u(t,o){e.is(18,t.length),r.callback(!0)}return t.fetch({count:7,onComplete:function(r,a){e.is(7,r.length),a.start=1,a.count=5,a.onComplete=o,t.fetch(a)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  getLabel",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(o,a){e.assertEqual(o.length,1);var n=t.getLabel(o[0]);e.assertTrue(null!==n),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  getLabelAttributes",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(o,a){e.assertEqual(o.length,1);var n=t.getLabelAttributes(o[0]);e.assertTrue(dojo.isArray(n)),e.assertEqual("title",n[0]),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  getValue",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({count:1,onComplete:function(o){e.is(1,o.length),e.assertTrue(null!==t.getValue(o[0],"title")),e.assertTrue(null!==t.getValue(o[0],"imageUrl")),e.assertTrue(null!==t.getValue(o[0],"imageUrlSmall")),e.assertTrue(null!==t.getValue(o[0],"imageUrlMedium")),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  getValues",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({count:1,onComplete:function(o){e.is(1,o.length),e.assertTrue(t.getValues(o[0],"title")instanceof Array),e.assertTrue(t.getValues(o[0],"description")instanceof Array),e.assertTrue(t.getValues(o[0],"imageUrl")instanceof Array),e.assertTrue(t.getValues(o[0],"imageUrlSmall")instanceof Array),e.assertTrue(t.getValues(o[0],"imageUrlMedium")instanceof Array),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  isItem",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({count:5,onComplete:function(o){e.is(5,o.length);for(var a=0;a<o.length;a++)e.assertTrue(t.isItem(o[a]));r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  hasAttribute",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(o){e.is(1,o.length),e.assertTrue(null!==o[0]),e.assertTrue(t.hasAttribute(o[0],"title")),e.assertTrue(t.hasAttribute(o[0],"description")),e.assertTrue(t.hasAttribute(o[0],"author")),e.assertTrue(!t.hasAttribute(o[0],"Nothing")),e.assertTrue(!t.hasAttribute(o[0],"Text"));var a=!1;try{t.hasAttribute(o[0],null)}catch(e){a=!0}e.assertTrue(a),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  containsValue",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(t){e.is(1,t.length),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},{name:"ReadAPI:  getAttributes",timeout:1e4,runTest:function(e){var t=new dojox.data.FlickrStore,r=new doh.Deferred;return t.fetch({count:1,onComplete:function(o){e.is(1,o.length),e.assertTrue(t.isItem(o[0]));var a=t.getAttributes(o[0]);e.is(10,a.length),r.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.FlickrStore.error,e,r)}),r}},function(e){var t=(new dojox.data.FlickrStore).getFeatures(),r=0;for(i in t)e.assertTrue("dojo.data.api.Read"===i),r++;e.assertTrue(1===r)},function(e){var t=new dojox.data.FlickrStore,r=new dojo.data.api.Read,o=!0;for(i in r){if("_"!==i.toString().charAt(0))if("function"==typeof r[i])if("function"!=typeof t[i]){o=!1;break}}e.assertTrue(o)}]);
//# sourceMappingURL=../../../sourcemaps/data/tests/stores/FlickrStore.js.map
