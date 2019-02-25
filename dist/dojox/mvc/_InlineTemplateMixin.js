/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/has"],function(e,t,n){return n.add("dom-qsa",!!document.createElement("div").querySelectorAll),e("dojox.mvc._InlineTemplateMixin",null,{buildRendering:function(){var e=this.srcNodeRef;if(e){for(var i=n("dom-qsa")?e.querySelectorAll("script[type='dojox/mvc/InlineTemplate']"):e.getElementsByTagName("script"),o=[],l=0,r=i.length;l<r;++l)(n("dom-qsa")||"dojox/mvc/InlineTemplate"==i[l].getAttribute("type"))&&o.push(i[l].innerHTML);var a=t.trim(o.join(""));a&&(this.templateString=a)}this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mvc/_InlineTemplateMixin.js.map
