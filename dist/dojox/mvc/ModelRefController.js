/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Stateful","./_Controller"],function(t,r,o,e,n){return r("dojox.mvc.ModelRefController",n,{ownProps:null,_refModelProp:"model",_refInModelProp:"model",model:null,postscript:function(t,r){this._relTargetProp=(t||{})._refModelProp||this._refModelProp,this.inherited(arguments)},get:function(t){if(!this.hasControllerProperty(t)){var r=this[this._refModelProp];return r?r.get?r.get(t):r[t]:void 0}return this.inherited(arguments)},_set:function(t,r){if(!this.hasControllerProperty(t)){var o=this[this._refModelProp];return o&&(o.set?o.set(t,r):o[t]=r),this}return this.inherited(arguments)},watch:function(r,n){if(this.hasControllerProperty(r))return this.inherited(arguments);n||(n=r,r=null);var i=null,l=null,s=this;function h(t){l&&l.unwatch(),t&&o.isFunction(t.set)&&o.isFunction(t.watch)&&(l=t.watch.apply(t,(r?[r]:[]).concat([function(t,r,o){n.call(s,t,r,o)}])))}function a(o,e){var i={};for(var l in r?i[r]=1:t.forEach([o,e],function(r){var o=r&&r.get("properties");if(o)t.forEach(o,function(t){s.hasControllerProperty(t)||(i[t]=1)});else for(var e in r)r.hasOwnProperty(e)&&!s.hasControllerProperty(e)&&(i[e]=1)}),i)n.call(s,l,o?o.get?o.get(l):o[l]:void 0,e?e.get?e.get(l):e[l]:void 0)}i=e.prototype.watch.call(this,this._refModelProp,function(t,r,o){r!==o&&(a(r,o),h(o))}),h(this.get(this._refModelProp));var c={};return c.unwatch=c.remove=function(){l&&(l.unwatch(),l=null),i&&(i.unwatch(),i=null)},c},hasControllerProperty:function(t){return"_watchCallbacks"==t||t==this._refModelProp||t==this._refInModelProp||t in(this.ownProps||{})||t in this.constructor.prototype||/^dojoAttach(Point|Event)$/i.test(t)}})});
//# sourceMappingURL=../sourcemaps/mvc/ModelRefController.js.map
