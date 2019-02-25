/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
function performanceTest(){dojo.require("dojox.jsonPath");for(var o=[],e=0;e<2e4;e++)o.push({foo:Math.random()});var t=(new Date).getTime(),s=dojox.jsonPath.query(o,"$[?(@.foo<0.01)]");alert("JSONPath"+((new Date).getTime()-t)+" "+s.length),t=(new Date).getTime(),s=dojox.json.query("$[?(@.foo<0.01)]",o),alert("JSONQuery"+((new Date).getTime()-t)+" "+s.length)}dojo.provide("dojox.json.tests.query"),dojo.require("dojox.json.query"),dojox.json.tests.error=function(o,e,t){e.errback(t)},dojox.json.tests.testData={store:{book:[{category:"reference",author:"Nigel Rees",title:"Sayings of the Century",price:8.95},{category:"fiction",author:"Evelyn Waugh",title:"Sword of Honour",price:12.99},{category:"fiction",author:"Herman Melville",title:"Moby Dick",isbn:"0-553-21311-3",price:8.99},{category:"fiction",author:"J. R. R. Tolkien",title:"The Lord of the\nRings",isbn:"0-395-19395-8",price:22.99}],bicycle:{color:"red",price:19.95}},symbols:{"@.$;":5}},doh.register("dojox.json.tests.query",[{name:"$.store.book[=author]",runTest:function(o){var e=dojox.json.query(this.name,dojox.json.tests.testData);console.log("result",e),e=dojo.toJson(e);doh.assertEqual('["Nigel Rees","Evelyn Waugh","Herman Melville","J. R. R. Tolkien"]',e)}},{name:"$..author",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('["Nigel Rees","Evelyn Waugh","Herman Melville","J. R. R. Tolkien"]',e)}},{name:"$.store.*",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}],{"color":"red","price":19.95}]',e)}},{name:"$.store..price",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[8.95,12.99,8.99,22.99,19.95]",e)}},{name:"$..book[0]?price=22.99",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}]',e)}},{name:"$..book[0]?price>=20",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}]',e)}},{name:"$..book[0][-1:]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}]',e)}},{name:"$..book[0][0,1]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99}]',e)}},{name:"$..book[0][:2]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99}]',e)}},{name:"$.store.book[=category][^?true]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('["reference","fiction"]',e)}},{name:"$..[^?author~'herman melville']",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,[dojox.json.tests.testData,dojox.json.tests.testData]));doh.assertEqual('[{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..[^?author='Herman*']",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,[dojox.json.tests.testData,dojox.json.tests.testData]));doh.assertEqual('[{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..[^?@['author']='Herman*']",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,[dojox.json.tests.testData,dojox.json.tests.testData]));doh.assertEqual('[{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..book[0][?(@.isbn)]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}]',e)}},{name:"$..book[0][?(@.price<10)]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..book[0]?author=$1&price=$2",runTest:function(o){var e=dojox.json.query(this.name),t=dojo.toJson(e(dojox.json.tests.testData,"Nigel Rees",8.95));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95}]',t)}},{name:"$..book[0]?author=$1&price=$2",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData,"Herman Melville",8.99));doh.assertEqual('[{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..book[0][?(@['price']<10)]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$..[?price<10]",runTest:function(o){var e=dojox.json.query(this.name);console.log("recursive object search",e.toString());var t=dojo.toJson(e(dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',t)}},{name:"$.store..[?price<10]",runTest:function(o){var e=dojox.json.query(this.name);console.log("recursive object search",e.toString());var t=dojo.toJson(e(dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',t)}},{name:"$.store.book[/category][/price][=price]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[8.95,8.99,12.99,22.99]",e)}},{name:"$.store.book[\\category,\\price][=price]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[8.95,22.99,12.99,8.99]",e)}},{name:"$.store.book?title='*of the*'",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual('[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the\\nRings","isbn":"0-395-19395-8","price":22.99}]',e)}},{name:"$.store.book[?'?iction'=category][=price]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[12.99,8.99,22.99]",e)}},{name:"$.store.book[?'?ICTion'~category][=price]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[12.99,8.99,22.99]",e)}},{name:"$.store.book[\\price][0].price - $.store.book[/price][0].price",runTest:function(o){var e=dojox.json.query(this.name,dojox.json.tests.testData);doh.assertEqual(14,Math.round(e))}},{name:"$.symbols[*]",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("[5]",e)}},{name:"$.symbols['@.$;']",runTest:function(o){var e=dojo.toJson(dojox.json.query(this.name,dojox.json.tests.testData));doh.assertEqual("5",e)}},{name:"$.store.book[?(@.price<15)][1:3]",runTest:function(o){var e=dojo.toJson(dojox.json.query("$.store.book[?(@.price<15)][1:3]",dojox.json.tests.testData));doh.assertEqual('[{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99}]',e)}},{name:"$.store.book[?(@.price<15)][=author]",runTest:function(o){var e=dojo.toJson(dojox.json.query("$.store.book[?(@.price<15)][=author]",dojox.json.tests.testData));doh.assertEqual('["Nigel Rees","Evelyn Waugh","Herman Melville"]',e)}},{name:"$.store.book[1].category",runTest:function(o){var e=dojo.toJson(dojox.json.query("$.store.book[1].category",dojox.json.tests.testData));doh.assertEqual('"fiction"',e)}},{name:"test $.store.bicycle",runTest:function(o){var e=dojo.toJson(dojox.json.query("$.store.bicycle",dojox.json.tests.testData));doh.assertEqual('{"color":"red","price":19.95}',e)}},{name:"test $.store.book[=category]",runTest:function(o){var e=dojo.toJson(dojox.json.query("$.store.book[=category]",dojox.json.tests.testData));doh.assertEqual('["reference","fiction","fiction","fiction"]',e)}},{name:"safeEval: Illegal Eval",runTest:function(o){try{dojo.toJson(dojox.json.query("$.store.book[?(push(5))]",dojox.json.tests.testData));console.log("Illegal eval permitted"),doh.e("Illegal eval was permitted")}catch(o){console.log("Eval properly blocked",o)}}},{name:"safeEval: Illegal Eval 2",runTest:function(o){try{dojo.toJson(dojox.json.query("$.store.book[?(new Danger)]",dojox.json.tests.testData));console.log("Illegal eval permitted"),doh.e("Illegal eval was permitted")}catch(o){console.log("Eval properly blocked",o)}}},{name:"safeEval: Illegal Eval 3",runTest:function(o){try{dojo.toJson(dojox.json.query("$.store.book[?(@+=2)]",dojox.json.tests.testData));console.log("Illegal eval permitted"),doh.e("Illegal eval was permitted")}catch(o){console.log("Eval properly blocked",o)}}}]);
//# sourceMappingURL=../../sourcemaps/json/tests/query.js.map
