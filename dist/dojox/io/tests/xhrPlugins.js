/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/kernel","dojo/_base/xhr","dojox/io/xhrPlugins","dojo/_base/url"],function(e,r,t,o){o.addCrossSiteXhr("http://cssupportingsite.com/");var a=r.moduleUrl("dojox.io","tests/crossSite.php");a=a.toString(),e.register("dojox.io.tests.xhrPlugins",[function(r){var o=new e.Deferred;return t("GET",{url:a}).addCallback(function(e){o.callback(e.match(/response/))}),o},function(r){var a=new e.Deferred;o.addCrossSiteXhr("http://persevere.sitepen.com/");try{var n=t("GET",{url:"http://persevere.sitepen.com/SMD"})}catch(e){if(e.message.match(/No match/))return!1;throw e}return n.addCallback(function(e){a.callback(e.match(/transport/))}),a},function(r){var n=new e.Deferred;return o.addProxy(a+"?url="),t("GET",{url:"http://someforeignsite.com/SMD"}).addCallback(function(e){n.callback(e.match(/proxied/))}),n}])});
//# sourceMappingURL=../../sourcemaps/io/tests/xhrPlugins.js.map
