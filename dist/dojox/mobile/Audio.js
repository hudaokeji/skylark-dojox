/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dojo/sniff","dijit/_Contained","dijit/_WidgetBase"],function(e,t,i,o,s){return e("dojox.mobile.Audio",[s,o],{source:null,width:"200px",height:"15px",_playable:!1,_tag:"audio",constructor:function(){this.source=[]},buildRendering:function(){this.domNode=this.srcNodeRef||t.create(this._tag)},_getEmbedRegExp:function(){return i("ff")?/audio\/mpeg/i:i("ie")?/audio\/wav/i:null},startup:function(){if(!this._started){var e,o,s;if(this.inherited(arguments),this.domNode.canPlayType)if(this.source.length>0)for(e=0,o=this.source.length;e<o;e++)t.create("source",{src:this.source[e].src,type:this.source[e].type},this.domNode),this._playable=this._playable||!!this.domNode.canPlayType(this.source[e].type);else for(e=0,o=this.domNode.childNodes.length;e<o;e++){var d=this.domNode.childNodes[e];1===d.nodeType&&"SOURCE"===d.nodeName&&(this.source.push({src:d.src,type:d.type}),this._playable=this._playable||!!this.domNode.canPlayType(d.type))}if(i.add("mobile-embed-audio-video-support",!0),i("mobile-embed-audio-video-support")&&!this._playable)for(e=0,o=this.source.length,s=this._getEmbedRegExp();e<o;e++)if(this.source[e].type.match(s)){var h=t.create("embed",{src:this.source[0].src,type:this.source[0].type,width:this.width,height:this.height});this.domNode.parentNode.replaceChild(h,this.domNode),this.domNode=h,this._playable=!0;break}}}})});
//# sourceMappingURL=../sourcemaps/mobile/Audio.js.map
