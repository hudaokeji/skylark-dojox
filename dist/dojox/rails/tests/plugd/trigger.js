/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.rails.tests.plugd.trigger"),function(e){var t=e.isFunction,r=/mouse(enter|leave)/,o=function(e,t){return"mouse"+("enter"==t?"over":"out")},n=e._mixin,i=e.doc.createEvent?function(t,i,c){var a=e.doc.createEvent("HTMLEvents");i=i.replace(r,o),a.initEvent(i,!0,!0),c&&n(a,c),t.dispatchEvent(a)}:function(r,o,i){var c="on"+o,a=!1;o.toLowerCase();try{r.fireEvent(c)}catch(d){console.warn("in catch",d);var g=n({type:o,target:r,faux:!0,_stopper:function(){a=this.cancelBubble}},i);for(t(r[c])&&r[c](g);!a&&r!==e.doc&&r.parentNode;)r=r.parentNode,t(r[c])&&r[c](g)}};e._trigger=function(t,r,o){var n=e.byId(t),c=r&&"on"==r.slice(0,2)?r.slice(2):r;i(n,c,o)},e.trigger=function(r,o,n){return t(r)||t(o)||t(r[o])?e.hitch.apply(e,arguments)():e._trigger.apply(e,arguments)},e.NodeList.prototype.trigger=e.NodeList._adaptAsForEach(e._trigger),e._Node&&!e._Node.prototype.trigger&&e.extend(e._Node,{trigger:function(t,r){return e._trigger(this,t,r),this}})}(dojo);
//# sourceMappingURL=../../../sourcemaps/rails/tests/plugd/trigger.js.map
