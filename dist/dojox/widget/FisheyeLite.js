/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/query","dojo/dom-style","dojo/_base/fx","dijit/_WidgetBase","dojo/fx/easing"],function(t,e,i,n,o,s,r,d,a){return i.getObject("widget",!0,dojox),t.experimental("dojox/widget/FisheyeLite"),dojo.declare("dojox.widget.FisheyeLite",[d],{durationIn:350,easeIn:a.backOut,durationOut:1420,easeOut:a.elasticOut,properties:null,units:"px",constructor:function(t,e){this.properties=t.properties||{fontSize:2.75}},postCreate:function(){this.inherited(arguments),this._target=o(".fisheyeTarget",this.domNode)[0]||this.domNode,this._makeAnims(),this.connect(this.domNode,"onmouseover","show"),this.connect(this.domNode,"onmouseout","hide"),this.connect(this._target,"onclick","onClick")},show:function(){this._runningOut.stop(),this._runningIn.play()},hide:function(){this._runningIn.stop(),this._runningOut.play()},_makeAnims:function(){var t={},e={},n=s.getComputedStyle(this._target);for(var o in this.properties){var d=this.properties[o],a=i.isObject(d),h=parseFloat(n[o]);e[o]={end:h,units:this.units},t[o]=a?d:{end:d*h,units:this.units}}this._runningIn=r.animateProperty({node:this._target,easing:this.easeIn,duration:this.durationIn,properties:t}),this._runningOut=r.animateProperty({node:this._target,duration:this.durationOut,easing:this.easeOut,properties:e}),this.connect(this._runningIn,"onEnd",i.hitch(this,"onSelected",this))},onClick:function(t){},onSelected:function(t){}})});
//# sourceMappingURL=../sourcemaps/widget/FisheyeLite.js.map
