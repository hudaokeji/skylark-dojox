/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.dtl.tests.dom.buffer"),dojo.require("dojox.dtl.dom"),dojo.require("dojox.dtl.Context"),dojo.require("dojox.dtl.tests.dom.util"),doh.register("dojox.dtl.dom.buffer",[function(d){var t=dojox.dtl,i=new t.Context({first:!1,last:!1}),e=new t.DomTemplate("<div>{% if first %}first{% endif %}middle{% if last %}last{% endif %}</div>");d.is("<div>middle</div>",t.tests.dom.util.render(e,i)),i.first=!0,d.is("<div>firstmiddle</div>",t.tests.dom.util.render(e,i)),i.first=!1,i.last=!0,d.is("<div>middlelast</div>",t.tests.dom.util.render(e,i)),i.first=!0,d.is("<div>firstmiddlelast</div>",t.tests.dom.util.render(e,i))}]);
//# sourceMappingURL=../../../sourcemaps/dtl/tests/dom/buffer.js.map
