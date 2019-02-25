/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var profile=function(){var e=/\/tests\//,t=function(e,t){return t in{"dojox/dojox.profile":1,"dojox/package.json":1,"dojox/mobile/themes/utils/compile":1,"dojox/mobile/themes/utils/cleanup":1,"dojox/app/tests/layoutApp/build.profile":1,"dojox/app/tests/globalizedApp/build.profile":1}||/^dojox\/resources\//.test(t)||/(png|jpg|jpeg|gif|tiff)$/.test(e)||/dojox\/app\/build\//.test(t)},o=new RegExp(("^dojox/("+["secure","data/(demos|ItemExplorer|StoreExplorer|restListener)","drawing/plugins/drawing/Silverlight","embed/(IE)","flash/_base","help","image/(Gallery|SlideShow|ThumbnailPicker)","jq","jsonPath/query","lang/(aspect|async|docs|observable|oo|typed|functional/(binrec|curry|linrec|listcomp|multirec|numrec|tailrec|util|zip))","layout/(BorderContainer|dnd|ext-dijit)","mobile/app/","rails","robot","sql/","storage/","widget/(AnalogGauge|BarGauge|DataPresentation|DocTester|DynamicTooltip|FeedPortlet|FilePicker|gauge|Iterator|Loader|RollingList|SortList)","wire/","xmpp"].join("|")+")").replace(/\//,"\\/"));return{resourceTags:{test:function(t,o){return e.test(o)},copyOnly:function(e,o){return t(e,o)},amd:function(r,i){return!e.test(i)&&!t(r,i)&&!function(e){return o.test(e)}(i)&&/\.js$/.test(r)},miniExclude:function(e,t){return/\/demos\//.test(t)}}}}();
//# sourceMappingURL=sourcemaps/dojox.profile.js.map
