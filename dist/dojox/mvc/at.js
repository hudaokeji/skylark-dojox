/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","./sync","./_atBindingExtension"],function(t,n,o){t.experimental("dojox.mvc");var e=function(t,n){return{atsignature:"dojox.mvc.at",target:t,targetProp:n,bindDirection:o.both,direction:function(t){return this.bindDirection=t,this},transform:function(t){return this.converter=t,this},equals:function(t){return this.equalsCallback=t,this}}};return e.from=o.from,e.to=o.to,e.both=o.both,n.setObject("dojox.mvc.at",e)});
//# sourceMappingURL=../sourcemaps/mvc/at.js.map
