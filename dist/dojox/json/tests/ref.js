/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.json.tests.ref"),dojo.require("dojox.json.ref"),doh.register("dojox.json.tests.ref",[function(a){var o=dojox.json.ref.fromJson('{a:{$ref:"#"},id:"root",c:{d:"e",f:{$ref:"root.c"}},b:{$ref:"#.c"},"an array":["a string"],"a string":{$ref:"#an array.0"}}');a.assertEqual(o,o.a),a.assertEqual(o.c,o.c.f),a.assertEqual(o.c,o.b),a.assertEqual(o["a string"],"a string")},function(a){var o={a:{},b:{"has space":{}}};o.a.d=o;var r=o.array=[{}];r[1]=r[0],o.b.g=o.a,o.b["has space"].f=o.b,o.b.h=o.a;var s=dojox.json.ref.fromJson(dojox.json.ref.toJson(o));a.assertEqual(s.a.d,s),a.assertEqual(s.b.g,s.a),a.assertEqual(s.b["has space"].f,s.b),a.assertEqual(s.b.h,s.a),a.assertEqual(s.array[0],s.array[1])},function(a){var o={__id:"bId",x:2},r={a:1,b1:o,b2:o};dojox.json.ref.toJson(r),a.f(r.hasOwnProperty("__id"),"obj has __id property."),a.t(r.b1===o,"obj.b1 !== b"),a.t(r.b2===o,"obj.b2 !== b"),a.is("bId",o.__id,"b.__id")},function(a){var o=dojox.json.ref.fromJson('{id:"/dog/1",eats:{$ref:"/cat/2"},aTime:"2008-11-07T20:26:17-07:00"}',{schemas:{"/dog/":{prototype:{barks:!0},properties:{aTime:{format:"date-time"}}},"/cat/":{prototype:{meows:!0}}}});a.t(o.barks),a.t(o.aTime instanceof Date),a.t(o.eats.meows)},function(a){var o=dojox.json.ref.fromJson('[{$ref:1,foo:"bar"},{$ref:2, me:{$ref:2},first:{$ref:1}}]');a.is(o[0].foo,"bar"),a.is(o[1],o[1].me),a.is(o[0],o[1].first)}]);
//# sourceMappingURL=../../sourcemaps/json/tests/ref.js.map
