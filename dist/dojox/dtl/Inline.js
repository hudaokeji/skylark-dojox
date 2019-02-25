/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base","dijit/_WidgetBase","dojo/query"],function(t,e,n,o){return e.Inline=t.extend(function(t,e){this.create(t,e)},n.prototype,{context:null,render:function(t){this.context=t||this.context,this.postMixInProperties(),o("*",this.domNode).orphan(),this.domNode.innerHTML=this.template.render(this.context)},declaredClass:"dojox.dtl.Inline",buildRendering:function(){var n=this.domNode=document.createElement("div"),o=this.srcNodeRef;o.parentNode&&o.parentNode.replaceChild(n,o),this.template=new e.Template(t.trim(o.text),!0),this.render()},postMixInProperties:function(){this.context=this.context.get===e._Context.prototype.get?this.context:new e._Context(this.context)}})});
//# sourceMappingURL=../sourcemaps/dtl/Inline.js.map
