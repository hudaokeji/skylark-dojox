/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.dtl.tests.context"),dojo.require("dojox.dtl"),dojo.require("dojox.dtl.Context"),doh.register("dojox.dtl.context",[function(o){var t=new dojox.dtl.Context({foo:"foo",bar:"bar"});o.is("foo",t.foo),o.is("bar",t.bar)},function(o){var t=new dojox.dtl.Context({foo:"foo",bar:"bar"});t=t.push();var e=!1;for(var r in t)"foo"!=r&&"bar"!=r||(e=!0);o.t(e)},function(o){var t=new dojox.dtl.Context({foo:"foo",bar:"bar",get:function(o){return o+"TEST"}}),e=new dojox.dtl.Template("{{ foo }}-{{ bar }}");o.is("fooTEST-barTEST",e.render(t))},function(o){var t=new dojox.dtl.Context({foo:"foo",bar:"bar"});t=t.push(),o.f(t.hasOwnProperty("foo")),o.f(t.hasOwnProperty("bar")),t=t.pop(),o.is("foo",t.foo),o.is("bar",t.bar)},function(o){var t=new dojox.dtl.Context;try{t=t.pop(),o.t(!1)}catch(t){o.is("pop() called on empty Context",t.message)}},function(o){var t=new dojox.dtl.Context({foo:"one",bar:"two",baz:"three"}),e=t.filter("foo","bar");o.is(e.foo,"one"),o.is(e.bar,"two"),o.f(e.baz),e=t.filter({bar:!0,baz:!0}),o.f(e.foo),o.is(e.bar,"two"),o.is(e.baz,"three"),e=t.filter(new dojox.dtl.Context({foo:!0,baz:!0})),o.is(e.foo,"one"),o.f(e.bar),o.is(e.baz,"three")},function(o){var t=new dojox.dtl.Context({foo:"one"}),e=t.extend({bar:"two",baz:"three"});o.is(e.foo,"one"),o.is(e.bar,"two"),o.is(e.baz,"three"),e=t.extend({barr:"two",bazz:"three"}),o.is(e.foo,"one"),o.f(e.bar),o.f(e.baz),o.is(e.barr,"two"),o.is(e.bazz,"three"),o.f(t.bar),o.f(t.baz),o.f(t.barr),o.f(t.bazz)}]);
//# sourceMappingURL=../../sourcemaps/dtl/tests/context.js.map
