/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Icon"],function(o,i,d,n,t,s,c){var e=o(s("dojo-bidi")?"dojox.mobile.NonBidiIcon":"dojox.mobile.Icon",null,{icon:"",iconPos:"",alt:"",tag:"div",constructor:function(o,d){o&&i.mixin(this,o),this.domNode=d||n.create(this.tag),t.createIcon(this.icon,this.iconPos,null,this.alt,this.domNode),this._setCustomTransform()},_setCustomTransform:function(){}});return s("dojo-bidi")?o("dojox.mobile.Icon",[e,c]):e});
//# sourceMappingURL=../sourcemaps/mobile/Icon.js.map
