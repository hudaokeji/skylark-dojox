/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/when","dojo/on","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dijit/Destroyable","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./ViewBase","./utils/nls"],function(e,t,i,n,o,s,r,h,l,d,c){return n("dojox.app.View",[h,l,r,d],{constructor:function(e){},connect:function(e,t,n){return this.own(i(e,t,o.hitch(this,n)))[0]},_loadTemplate:function(){if(this.templateString)return!0;var i=this.template,n=this.dependencies?this.dependencies:[];i&&(0==i.indexOf("./")&&(i="app/"+i),n=n.concat(["dojo/text!"+i]));var r,h=new s;if(n.length>0)try{r=e.on?e.on("error",o.hitch(this,function(e){h.isResolved()||h.isRejected()||e.info[0]&&e.info[0].indexOf(this.template)>=0&&(h.resolve(!1),r&&r.remove())})):null,e(n,function(){h.resolve.call(h,arguments),r&&r.remove()})}catch(e){h.resolve(!1),r&&r.remove()}else h.resolve(!0);var l=new s;return t(h,o.hitch(this,function(){this.templateString=this.template?arguments[0][arguments[0].length-1]:"<div></div>",l.resolve(this)})),l},load:function(){var e=new s,i=this.inherited(arguments),n=c(this);return t(i,o.hitch(this,function(){t(n,o.hitch(this,function(i){this.nls=o.mixin({},this.parent.nls),i&&o.mixin(this.nls,i),t(this._loadTemplate(),function(t){e.resolve(t)})}))})),e},_startup:function(){this.buildRendering(),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/app/View.js.map
