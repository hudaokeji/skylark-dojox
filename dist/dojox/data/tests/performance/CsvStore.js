/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.tests.performance.CsvStore"),dojo.require("dojox.data.CsvStore"),dojo.require("dojo.data.util.sorter"),dojox.data.tests.performance.CsvStore.getData=function(t){var e,o=["City of God, 2002, Katia Lund\n","Rain,, Christine Jeffs\n","2001: A Space Odyssey, 1968, Stanley Kubrick\n",'"This is a ""fake"" movie title", 1957, Sidney Lumet\n',"Alien, 1979   , Ridley Scott\n",'"The Sequel to ""Dances With Wolves.""", 1982, Ridley Scott\n','"Caine Mutiny, The", 1954, "Dymtryk ""the King"", Edward"\n'],r="Title, Year, Producer\n";for(e=0;e<t;e++){r+=o[Math.floor(7*Math.random())]}return r},doh.register("dojox.data.tests.performance.CsvStore",[{name:"Initial Parse and First Fetch",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,runTest:function(){store=new dojox.data.CsvStore({data:dojox.data.tests.performance.CsvStore.getData(2e3)});var t=new doh.Deferred;return store.fetch({onComplete:function(e,o){try{doh.assertEqual(2e3,e.length),t.callback(!0)}catch(e){t.errback(e)}},onError:function(e,o){t.errback(e)}}),t}},{name:"Fetch All Data",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,setUp:function(){dojox.data.tests.performance.CsvStore.store=new dojox.data.CsvStore({data:dojox.data.tests.performance.CsvStore.getData(2e3)}),dojox.data.tests.performance.CsvStore.store.fetch({})},tearDown:function(){delete dojox.data.tests.performance.CsvStore.store},runTest:function(){var t=dojox.data.tests.performance.CsvStore.store,e=new doh.Deferred;return t.fetch({onComplete:function(t,o){try{doh.assertEqual(2e3,t.length),e.callback(!0)}catch(t){e.errback(t)}},onError:function(t,o){e.errback(t)}}),dojo.isSafari?null:e}},{name:"getValue",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,setUp:function(){dojox.data.tests.performance.CsvStore.store=new dojox.data.CsvStore({data:dojox.data.tests.performance.CsvStore.getData(2e3)}),dojox.data.tests.performance.CsvStore.store.fetch({})},tearDown:function(){delete dojox.data.tests.performance.CsvStore.store},runTest:function(){dojox.data.tests.performance.CsvStore.store.getValue(dojox.data.tests.performance.CsvStore.store._arrayOfAllItems[0],"Title")}},{name:"sort (500 rows)",testType:"perf",trialDuration:100,trialDelay:50,trialIterations:50,setUp:function(){dojox.data.tests.performance.CsvStore.store=new dojox.data.CsvStore({data:dojox.data.tests.performance.CsvStore.getData(500)}),dojox.data.tests.performance.CsvStore.store.fetch()},tearDown:function(){delete dojox.data.tests.performance.CsvStore.store},runTest:function(){dojox.data.tests.performance.CsvStore.store._arrayOfAllItems.slice(0,dojox.data.tests.performance.CsvStore.store._arrayOfAllItems.length).sort(dojo.data.util.sorter.createSortFunction([{attribute:"Title"}],dojox.data.tests.performance.CsvStore.store))}}]);
//# sourceMappingURL=../../../sourcemaps/data/tests/performance/CsvStore.js.map
