/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.tests.stores.PicasaStore"),dojo.require("dojox.data.PicasaStore"),dojo.require("dojo.data.api.Read"),dojox.data.tests.stores.PicasaStore.error=function(e,t,a){t.errback(a)},doh.register("dojox.data.tests.stores.PicasaStore",[{name:"ReadAPI:  Fetch_One",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(t,r){e.is(1,t.length),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,doh,a)}),a}},{name:"ReadAPI:  Fetch_20_Streaming",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred,r=0;return t.fetch({onBegin:function(t,a){e.is(20,t)},count:20,onItem:function(a,o){e.assertTrue(t.isItem(a)),r++},onComplete:function(t,o){e.is(20,r),e.is(null,t),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  Fetch_Paging",timeout:3e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;function r(t,r){e.is(18,t.length),a.callback(!0)}function o(a,o){e.is(11,a.length),o.start=2,o.count=20,o.onComplete=r,t.fetch(o)}function n(a,r){e.is(18,a.length),r.start=9,r.count=100,r.onComplete=o,t.fetch(r)}function s(a,r){e.is(5,a.length),r.start=2,r.count=20,r.onComplete=n,t.fetch(r)}function i(a,r){e.is(1,a.length),r.start=0,r.count=5,r.onComplete=s,t.fetch(r)}function u(a,r){e.is(5,a.length),r.start=3,r.count=1,r.onComplete=i,t.fetch(r)}return t.fetch({count:7,onComplete:function(a,r){e.is(7,a.length),r.start=1,r.count=5,r.onComplete=u,t.fetch(r)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  getLabel",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(r,o){e.assertEqual(r.length,1);var n=t.getLabel(r[0]);e.assertTrue(null!==n),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  getLabelAttributes",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(r,o){e.assertEqual(r.length,1);var n=t.getLabelAttributes(r[0]);e.assertTrue(dojo.isArray(n)),e.assertEqual("title",n[0]),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  getValue",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(null!==t.getValue(r[0],"title")),e.assertTrue(null!==t.getValue(r[0],"imageUrl")),e.assertTrue(null!==t.getValue(r[0],"imageUrlSmall")),e.assertTrue(null!==t.getValue(r[0],"imageUrlMedium")),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  getValues",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(t.getValues(r[0],"title")instanceof Array),e.assertTrue(t.getValues(r[0],"description")instanceof Array),e.assertTrue(t.getValues(r[0],"imageUrl")instanceof Array),e.assertTrue(t.getValues(r[0],"imageUrlSmall")instanceof Array),e.assertTrue(t.getValues(r[0],"imageUrlMedium")instanceof Array),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  isItem",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({count:5,onComplete:function(r){e.is(5,r.length);for(var o=0;o<r.length;o++)e.assertTrue(t.isItem(r[o]));a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  hasAttribute",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(null!==r[0]),e.assertTrue(t.hasAttribute(r[0],"title")),e.assertTrue(t.hasAttribute(r[0],"author")),e.assertTrue(!t.hasAttribute(r[0],"Nothing")),e.assertTrue(!t.hasAttribute(r[0],"Text"));var o=!1;try{t.hasAttribute(r[0],null)}catch(e){o=!0}e.assertTrue(o),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  containsValue",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({query:{tags:"animals"},count:1,onComplete:function(t){e.is(1,t.length),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},{name:"ReadAPI:  getAttributes",timeout:1e4,runTest:function(e){var t=new dojox.data.PicasaStore,a=new doh.Deferred;return t.fetch({count:1,onComplete:function(r){e.is(1,r.length),e.assertTrue(t.isItem(r[0]));var o=t.getAttributes(r[0]);e.is(21,o.length),a.callback(!0)},onError:dojo.partial(dojox.data.tests.stores.PicasaStore.error,e,a)}),a}},function(e){var t,a=(new dojox.data.PicasaStore).getFeatures(),r=0;for(t in a)e.assertTrue("dojo.data.api.Read"===t),r++;e.assertTrue(1===r)},function(e){var t,a=new dojox.data.PicasaStore,r=new dojo.data.api.Read,o=!0;for(t in r){if("_"!==t.toString().charAt(0))if("function"==typeof r[t])if("function"!=typeof a[t]){o=!1;break}}e.assertTrue(o)}]);
//# sourceMappingURL=../../../sourcemaps/data/tests/stores/PicasaStore.js.map
