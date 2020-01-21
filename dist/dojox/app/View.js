/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/when","dojo/on","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dijit/Destroyable","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./ViewBase","./utils/nls"],function(require,e,t,i,n,o,s,r,h,l,d){return i("dojox.app.View",[r,h,s,l],{constructor:function(e){},connect:function(e,i,o){return this.own(t(e,i,n.hitch(this,o)))[0]},_loadTemplate:function(){if(this.templateString)return!0;var t=this.template,i=this.dependencies?this.dependencies:[];t&&(0==t.indexOf("./")&&(t="app/"+t),i=i.concat(["dojo/text!"+t]));var s,r=new o;if(i.length>0)try{s=require.on?require.on("error",n.hitch(this,function(e){r.isResolved()||r.isRejected()||e.info[0]&&e.info[0].indexOf(this.template)>=0&&(r.resolve(!1),s&&s.remove())})):null,require(i,function(){r.resolve.call(r,arguments),s&&s.remove()})}catch(e){r.resolve(!1),s&&s.remove()}else r.resolve(!0);var h=new o;return e(r,n.hitch(this,function(){this.templateString=this.template?arguments[0][arguments[0].length-1]:"<div></div>",h.resolve(this)})),h},load:function(){var t=new o,i=this.inherited(arguments),s=d(this);return e(i,n.hitch(this,function(){e(s,n.hitch(this,function(i){this.nls=n.mixin({},this.parent.nls),i&&n.mixin(this.nls,i),e(this._loadTemplate(),function(e){t.resolve(e)})}))})),t},_startup:function(){this.buildRendering(),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/app/View.js.map
