/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/ready","dojo/_base/config","dojo/aspect"],function(n,o,i,t,w){return o.plugins.window=new function(){this.addData=n.hitch(o,"addData","window"),this.windowConnects=t.windowConnects||["open","onerror"];for(var d=0;d<this.windowConnects.length;d++)w.after(window,this.windowConnects[d],n.hitch(this,"addData",this.windowConnects[d]),!0);i(n.hitch(this,function(){var n={};for(var o in window)if("object"==typeof window[o]||"function"==typeof window[o])switch(o){case"location":case"console":n[o]=window[o]}else n[o]=window[o];this.addData(n)}))}});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/window.js.map
