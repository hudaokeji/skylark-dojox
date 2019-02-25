/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/window","dojo/_base/sniff","dojo/query","dojo/parser","dojox/xml/parser"],function(e,t,r,o,a,i){var s=lang.getObject("dojox.xml",!0);return xXml.widgetParser=new function(){var a=e;this.parseNode=function(e){var t=[];return a.query("script[type='text/xml']",e).forEach(function(e){t.push.apply(t,this._processScript(e))},this).orphan(),a.parser.instantiate(t)},this._processScript=function(e){var t=e.src?a._getText(e.src):e.innerHTML||e.firstChild.nodeValue,r=this.toHTML(dojox.xml.parser.parse(t).firstChild),i=a.query("[dojoType]",r);return o(">",r).place(e,"before"),e.parentNode.removeChild(e),i},this.toHTML=function(e){var o,i=e.nodeName,s=t.doc,n=e.nodeType;if(n>=3)return s.createTextNode(3==n||4==n?e.nodeValue:"");var d=e.localName||i.split(":").pop(),c=e.namespaceURI||(e.getNamespaceUri?e.getNamespaceUri():"");if("html"==c)o=s.createElement(d);else{var l=c+"."+d;(o=o||s.createElement("dijit.form.ComboBox"==l?"select":"div")).setAttribute("dojoType",l)}return a.forEach(e.attributes,function(e){var t=e.name||e.nodeName,a=e.value||e.nodeValue;0!=t.indexOf("xmlns")&&(r("ie")&&"style"==t?o.style.setAttribute("cssText",a):o.setAttribute(t,a))}),a.forEach(e.childNodes,function(e){var t=this.toHTML(e);"script"==d?o.text+=t.nodeValue:o.appendChild(t)},this),o}},s.widgetParser});
//# sourceMappingURL=../sourcemaps/xml/widgetParser.js.map
