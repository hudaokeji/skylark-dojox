/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dijit/_WidgetBase","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Rating"],function(i,t,o,e,s,a,d){var n=i(a("dojo-bidi")?"dojox.mobile.NonBidiRating":"dojox.mobile.Rating",[e],{image:"",numStars:5,value:0,alt:"",baseClass:"mblRating",buildRendering:function(){this.inherited(arguments),this.domNode.style.display="inline-block";var i=this.imgNode=o.create("img");this.connect(i,"onload",t.hitch(this,function(){this.set("value",this.value)})),s.createIcon(this.image,null,i)},_setValueAttr:function(i){this._set("value",i);var t=this.imgNode.height;if(0!=t){o.empty(this.domNode);var e,a,d=this.imgNode.width/3;for(e=0;e<this.numStars;e++){a=e<=i-1?0:e>=i?d:2*d;var n=o.create("div",{style:{float:"left"}},this.domNode);this.isLeftToRight()||(n=this._setCustomTransform(n)),s.createIcon(this.image,"0,"+a+","+d+","+t,null,this.alt,n)}}},_setCustomTransform:function(i){return i}});return a("dojo-bidi")?i("dojox.mobile.Rating",[n,d]):n});
//# sourceMappingURL=../sourcemaps/mobile/Rating.js.map
