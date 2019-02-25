/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojox/xml/parser"],function(e,o,d){dojo.deprecated("dojox.data.dom","Use dojox.xml.parser instead.","2.0");var r=o.getObject("dojox.data.dom",!0);return r.createDocument=function(e,o){dojo.deprecated("dojox.data.dom.createDocument()","Use dojox.xml.parser.parse() instead.","2.0");try{return d.parse(e,o)}catch(e){return null}},r.textContent=function(e,o){return dojo.deprecated("dojox.data.dom.textContent()","Use dojox.xml.parser.textContent() instead.","2.0"),arguments.length>1?d.textContent(e,o):d.textContent(e)},r.replaceChildren=function(e,o){dojo.deprecated("dojox.data.dom.replaceChildren()","Use dojox.xml.parser.replaceChildren() instead.","2.0"),d.replaceChildren(e,o)},r.removeChildren=function(e){return dojo.deprecated("dojox.data.dom.removeChildren()","Use dojox.xml.parser.removeChildren() instead.","2.0"),dojox.xml.parser.removeChildren(e)},r.innerXML=function(e){return dojo.deprecated("dojox.data.dom.innerXML()","Use dojox.xml.parser.innerXML() instead.","2.0"),d.innerXML(e)},r});
//# sourceMappingURL=../sourcemaps/data/dom.js.map
