/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/dom-class","dojo/dom-construct","dijit/registry","../lazyLoadUtils"],function(e,o,i,n,t,r,d,l){return i("dojox.mobile.dh.HtmlContentHandler",null,{parse:function(e,o,i){this.execScript&&(e=this.execScript(e));var s=r.create("div",{innerHTML:e,style:{visibility:"hidden"}});return o.insertBefore(s,i),n.when(l.instantiateLazyWidgets(s),function(){var e,n,r;for(n=0,r=s.childNodes.length;n<r;n++){var l=s.firstChild;e||1!==l.nodeType||(e=d.byNode(l)),o.insertBefore(s.firstChild,i)}return o.removeChild(s),e&&t.contains(e.domNode,"mblView")?e.id:(console.log("HtmlContentHandler.parse: invalid view content"),null)})}})});
//# sourceMappingURL=../../sourcemaps/mobile/dh/HtmlContentHandler.js.map
