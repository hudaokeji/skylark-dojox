/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style","../_css3"],function(d,t,o){return d(null,{_setCustomTransform:function(){"rtl"==(this.dir||t.get(this.domNode,"direction"))&&(t.set(this.domNode.firstChild,o.add({direction:"ltr"},{})),t.set(this.domNode,o.add({},{transform:"scaleX(-1)"})))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Icon.js.map
