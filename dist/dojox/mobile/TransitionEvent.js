/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/on"],function(t,i){return t("dojox.mobile.TransitionEvent",null,{constructor:function(t,i,n){this.transitionOptions=i,this.target=t,this.triggerEvent=n||null},dispatch:function(){var t={bubbles:!0,cancelable:!0,detail:this.transitionOptions,triggerEvent:this.triggerEvent};i.emit(this.target,"startTransition",t)}})});
//# sourceMappingURL=../sourcemaps/mobile/TransitionEvent.js.map
