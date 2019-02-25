/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["intern!object","intern/chai!assert","../priority","dojo/Deferred","dojo/promise/all","dojo/_base/declare","dojo/store/Memory","dojo/store/util/QueryResults"],function(e,r,t,i,o,n,a,p){var u=0;function d(e){return function(){u++;var r=this.inherited(arguments),t=new i;return setTimeout(function(){t.resolve(r)},10),e?new p(t):t}}var s=n(a,{get:d(),put:d(),add:d(),query:d(!0)}),c=[{id:1,name:"one",prime:!1,mappedTo:"E",words:["banana"]},{id:2,name:"two",even:!0,prime:!0,mappedTo:"D",words:["banana","orange"]},{id:3,name:"three",prime:!0,mappedTo:"C",words:["apple","orange"]},{id:4,name:"four",even:!0,prime:!1,mappedTo:null},{id:5,name:"five",prime:!0,mappedTo:"A"}];priorityStore=t(new s({data:c})),e({name:"priority",order:function(){var e=[],t=[],i=[],n=c.slice(0);return t.push(priorityStore.query({},{priority:10}).forEach(function(r){e.push(r)}).then(function(){i.push("query"),r.deepEqual(e,n)})),r.strictEqual(u,1),t.push(priorityStore.get(1,{priority:0}).then(function(e){i.push("get"),r.deepEqual(e,c[0])})),r.strictEqual(u,1),t.push(priorityStore.put({id:6,name:"six"},{priority:3}).then(function(e){i.push("put")})),r.strictEqual(u,2),t.push(priorityStore.add({id:7,name:"seven"},{priority:1}).then(function(e){i.push("add")})),r.strictEqual(u,2),o(t).then(function(){r.strictEqual(u,5),r.deepEqual(i,["query","put","add","get"])})}})});
//# sourceMappingURL=../../sourcemaps/store/tests/priority.js.map
