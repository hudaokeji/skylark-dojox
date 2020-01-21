/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/_base/kernel","dojo/_base/lang","dojo/has!dojo-parser?:dojo/_base/window","dojo/has","dojo/has!dojo-mobile-parser?:dojo/parser","dojo/has!dojo-parser?:dojox/mobile/parser","dojox/mvc/_atBindingMixin","dojox/mvc/Element"],function(require,e,o,t,r,a,d,s){r.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{r.add("dojo-parser",!!require("dojo/parser"))}catch(e){}try{r.add("dojo-mobile-parser",!!require("dojox/mobile/parser"))}catch(e){}if(r("dojo-parser")){var n=a.scan;a.scan=function(t,a){return n.apply(this,o._toArray(arguments)).then(function(o){for(var d=(a.scope||e._scopeName)+"Type",n="data-"+(a.scope||e._scopeName)+"-"+"type",p=r("dom-qsa")?t.querySelectorAll("["+s.prototype.dataBindAttr+"]"):t.getElementsByTagName("*"),i=0,c=p.length;i<c;i++){var l=p[i];l.getAttribute(n)||l.getAttribute(d)||!l.getAttribute(s.prototype.dataBindAttr)||o.push({types:["dojox/mvc/Element"],node:l})}return o})}}if(r("dojo-mobile-parser")){var p=d.parse;d.parse=function(a,d){var n=((d||{}).scope||e._scopeName)+"Type",i="data-"+((d||{}).scope||e._scopeName)+"-"+"type";nodes=r("dom-qsa")?(a||t.body()).querySelectorAll("["+s.prototype.dataBindAttr+"]"):(a||t.body()).getElementsByTagName("*");for(var c=0,l=nodes.length;c<l;c++){var m=nodes[c];m.getAttribute(i)||m.getAttribute(n)||!m.getAttribute(s.prototype.dataBindAttr)||m.setAttribute(i,"dojox/mvc/Element")}return p.apply(this,o._toArray(arguments))}}return a||d});
//# sourceMappingURL=../sourcemaps/mvc/parserExtension.js.map
