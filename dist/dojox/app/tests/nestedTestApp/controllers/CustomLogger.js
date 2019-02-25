/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojo/_base/config","dojo/sniff","dojox/app/Controller"],function(o,g,p,a,l,i,n,t,e){return o(e,{constructor:function(o){o.appLogging=o.appLogging||{},o.appLogging.loggingList=o.appLogging.loggingList||[],t.add("app-log-api",(n.app||{}).debugApp||o.appLogging.logAll),t.add("app-log-partial",o.appLogging.loggingList.length>0),(t("app-log-api")||t("app-log-partial"))&&(o.log=function(){var g="";if(o.appLogging.logTimeStamp&&(g=g+(new Date).getTime()+" "),t("app-log-api")||o.appLogging.logAll)try{for(var p=0;p<arguments.length-1;p++)g=g+arguments[p]+" ";console.log(g,arguments[arguments.length-1])}catch(o){}else if(t("app-log-partial"))try{if(o.appLogging.loggingList.indexOf(arguments[0])>-1){for(p=2;p<arguments.length-1;p++)g+=arguments[p];console.log(g,arguments[arguments.length-1])}}catch(o){}})}})});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/controllers/CustomLogger.js.map
