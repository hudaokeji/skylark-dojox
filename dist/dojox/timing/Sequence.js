/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","./_base"],function(e){return e.experimental("dojox.timing.Sequence"),e.declare("dojox.timing.Sequence",null,{_goOnPause:0,_running:!1,constructor:function(){this._defsResolved=[]},go:function(s,t){this._running=!0,e.forEach(s,function(e){if(e.repeat>1)for(var s=e.repeat,t=0;t<s;t++)e.repeat=1,this._defsResolved.push(e);else this._defsResolved.push(e)},this);s[s.length-1];t&&this._defsResolved.push({func:t}),this._defsResolved.push({func:[this.stop,this]}),this._curId=0,this._go()},_go:function(){if(this._running){var s=this._defsResolved[this._curId];if(this._curId+=1,this._curId>=this._defsResolved.length)i(s.func);else if(s.pauseAfter)!1!==i(s.func)?setTimeout(e.hitch(this,"_go"),s.pauseAfter):this._goOnPause=s.pauseAfter;else if(s.pauseBefore){var t=e.hitch(this,function(){!1!==i(s.func)&&this._go()});setTimeout(t,s.pauseBefore)}else!1!==i(s.func)&&this._go()}function i(s){return e.isArray(s)?s.length>2?s[0].apply(s[1],s.slice(2)):s[0].apply(s[1]):s()}},goOn:function(){this._goOnPause?(setTimeout(e.hitch(this,"_go"),this._goOnPause),this._goOnPause=0):this._go()},stop:function(){this._running=!1}})});
//# sourceMappingURL=../sourcemaps/timing/Sequence.js.map
