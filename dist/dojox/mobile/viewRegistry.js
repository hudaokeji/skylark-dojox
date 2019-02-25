/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/dom-class","dijit/registry"],function(e,t,n){return{length:0,hash:{},initialView:null,add:function(e){this.hash[e.id]=e,this.length++},remove:function(e){this.hash[e]&&(delete this.hash[e],this.length--)},getViews:function(){var e=[];for(var t in this.hash)e.push(this.hash[t]);return e},getParentView:function(e){for(var n=e.getParent();n;n=n.getParent())if(t.contains(n.domNode,"mblView"))return n;return null},getChildViews:function(t){return e.filter(this.getViews(),function(e){return this.getParentView(e)===t},this)},getEnclosingView:function(e){for(var i=e;i&&"BODY"!==i.tagName;i=i.parentNode)if(1===i.nodeType&&t.contains(i,"mblView"))return n.byNode(i);return null},getEnclosingScrollable:function(e){for(var t=n.getEnclosingWidget(e);t;t=t.getParent())if(t.scrollableParams&&t._v)return t;return null}}});
//# sourceMappingURL=../sourcemaps/mobile/viewRegistry.js.map
