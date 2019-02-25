/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/config","dojo/dom-construct"],function(t,o,a,c,e){return o("dojox.analytics.Urchin",null,{acct:"",constructor:function(o){this.tracker=null,t.mixin(this,o),this.acct=this.acct||c.urchin;var n=/loaded|complete/,i="https:"==a.doc.location.protocol?"https://ssl.":"http://www.",s=a.doc.getElementsByTagName("head")[0],r=e.create("script",{src:i+"google-analytics.com/ga.js"},s);r.onload=r.onreadystatechange=t.hitch(this,function(t){(t&&"load"==t.type||n.test(r.readyState))&&(r.onload=r.onreadystatechange=null,this._gotGA(),s.removeChild(r))})},_gotGA:function(){this.tracker=_gat._getTracker(this.acct),this.GAonLoad.apply(this,arguments)},GAonLoad:function(){this.trackPageView()},trackPageView:function(t){this.tracker._trackPageview.apply(this.tracker,arguments)}})});
//# sourceMappingURL=../sourcemaps/analytics/Urchin.js.map
