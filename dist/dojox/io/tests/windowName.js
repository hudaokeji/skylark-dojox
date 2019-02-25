/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/kernel","dojo/_base/xhr","dojox/io/xhrPlugins","dojo/_base/url"],function(e,r,o,t){t.addXdr("http://xdrsupportingsite.com/");var n=r.moduleUrl("dojox.io","tests/crossSite.php");n=n.toString(),e.register("dojox.io.tests.xhrPlugins",[function(r){var t=new e.Deferred;return o("GET",{url:n}).addCallback(function(e){t.callback(e.match(/response/))}),t},function(r){var t=new e.Deferred;dojox.io.xhrPlugins.addXdr("http://persevere.sitepen.com/"),dojox.io.xhrPlugins.addCrossSiteXhr("http://persevere.sitepen.com/");try{var n=o("GET",{url:"http://persevere.sitepen.com/SMD"})}catch(e){if(e.message.match(/No match/))return null;throw e}return n.addCallback(function(e){t.callback(e.match(/transport/))}),t},function(r){var t=new e.Deferred;return dojox.io.xhrPlugins.addProxy(n+"?url="),o("GET",{url:"http://someforeignsite.com/SMD"}).addCallback(function(e){t.callback(e.match(/proxied/))}),t}])});
//# sourceMappingURL=../../sourcemaps/io/tests/windowName.js.map
