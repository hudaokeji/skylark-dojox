/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/_base/kernel","dojo/_base/lang","dojo/has!dojo-parser?:dojo/_base/window","dojo/has","dojo/has!dojo-mobile-parser?:dojo/parser","dojo/has!dojo-parser?:dojox/mobile/parser","dojox/mvc/_atBindingMixin","dojox/mvc/Element"],function(e,o,t,r,a,d,s,n){a.add("dom-qsa",!!document.createElement("div").querySelectorAll);try{a.add("dojo-parser",!!e("dojo/parser"))}catch(e){}try{a.add("dojo-mobile-parser",!!e("dojox/mobile/parser"))}catch(e){}if(a("dojo-parser")){var p=d.scan;d.scan=function(e,r){return p.apply(this,t._toArray(arguments)).then(function(t){for(var d=(r.scope||o._scopeName)+"Type",s="data-"+(r.scope||o._scopeName)+"-"+"type",p=a("dom-qsa")?e.querySelectorAll("["+n.prototype.dataBindAttr+"]"):e.getElementsByTagName("*"),i=0,c=p.length;i<c;i++){var l=p[i];l.getAttribute(s)||l.getAttribute(d)||!l.getAttribute(n.prototype.dataBindAttr)||t.push({types:["dojox/mvc/Element"],node:l})}return t})}}if(a("dojo-mobile-parser")){var i=s.parse;s.parse=function(e,d){var s=((d||{}).scope||o._scopeName)+"Type",p="data-"+((d||{}).scope||o._scopeName)+"-"+"type";nodes=a("dom-qsa")?(e||r.body()).querySelectorAll("["+n.prototype.dataBindAttr+"]"):(e||r.body()).getElementsByTagName("*");for(var c=0,l=nodes.length;c<l;c++){var m=nodes[c];m.getAttribute(p)||m.getAttribute(s)||!m.getAttribute(n.prototype.dataBindAttr)||m.setAttribute(p,"dojox/mvc/Element")}return i.apply(this,t._toArray(arguments))}}return d||s});
//# sourceMappingURL=../sourcemaps/mvc/parserExtension.js.map
