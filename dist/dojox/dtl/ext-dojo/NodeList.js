/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/query","../_base"],function(e,t,n){e.getObject("dojox.dtl.ext-dojo.NodeList",!0);var o=t.NodeList;return e.extend(o,{dtl:function(e,t){var o=n,r=this;return o.text._resolveTemplateArg(e).addCallback(function(n){e=new o.Template(n),o.text._resolveContextArg(t).addCallback(function(t){!function(e,t){var n=e.render(new o._Context(t));r.forEach(function(e){e.innerHTML=n})}(e,t)})}),this}}),o});
//# sourceMappingURL=../../sourcemaps/dtl/ext-dojo/NodeList.js.map
