/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/aspect"],function(o,a,e,s){var n=o.getObject("dojox.analytics.plugins.consoleMessages",!0);n.addData=o.hitch(a,"addData","consoleMessages");var c=e.consoleLogFuncs||["error","warn","info","rlog"];console||(console={});for(var l=0;l<c.length;l++){var r=c[l],t=o.hitch(n,"addData",r);console[r]?s.after(console,r,t,!0):console[r]=t}return n});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/consoleMessages.js.map
