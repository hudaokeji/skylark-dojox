/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","../EnhancedGrid"],function(n,t,s,i,e){return s("dojox.grid.enhanced._Plugin",null,{name:"plugin",grid:null,option:{},_connects:[],_subscribes:[],privates:{},constructor:function(n,s){this.grid=n,this.option=s,this._connects=[],this._subscribes=[],this.privates=t.mixin({},dojox.grid.enhanced._Plugin.prototype),this.init()},init:function(){},onPreInit:function(){},onPostInit:function(){},onStartUp:function(){},connect:function(n,t,s){var i=e.connect(n,t,this,s);return this._connects.push(i),i},disconnect:function(n){i.some(this._connects,function(t,s,i){return t==n&&(e.disconnect(n),i.splice(s,1),!0)})},subscribe:function(n,t){var s=e.subscribe(n,this,t);return this._subscribes.push(s),s},unsubscribe:function(n){i.some(this._subscribes,function(t,s,i){return t==n&&(e.unsubscribe(n),i.splice(s,1),!0)})},onSetStore:function(n){},destroy:function(){i.forEach(this._connects,e.disconnect),i.forEach(this._subscribes,e.unsubscribe),delete this._connects,delete this._subscribes,delete this.option,delete this.privates}})});
//# sourceMappingURL=../../sourcemaps/grid/enhanced/_Plugin.js.map
