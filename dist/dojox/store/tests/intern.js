/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define({proxyPort:9e3,proxyUrl:"http://localhost:9001/",capabilities:{"selenium-version":"2.37.0"},environments:[{browserName:"internet explorer",version:"11",platform:"Windows 8.1",prerun:"http://localhost:9001/tests-intern/support/prerun.bat"},{browserName:"internet explorer",version:"10",platform:"Windows 8",prerun:"http://localhost:9001/tests-intern/support/prerun.bat"},{browserName:"internet explorer",version:["8","9","10"],platform:"Windows 7",prerun:"http://localhost:9001/tests-intern/support/prerun.bat"},{browserName:"internet explorer",version:["6","7","8"],platform:"Windows XP",prerun:"http://localhost:9001/tests-intern/support/prerun.bat"},{browserName:"firefox",version:"25",platform:["OS X 10.6","Windows 7","Windows XP","Linux"]},{browserName:"chrome",version:"",platform:["Linux","OS X 10.8","OS X 10.9","Windows XP","Windows 7","Windows 8","Windows 8.1"]},{browserName:"safari",version:"6",platform:"OS X 10.8"},{browserName:"safari",version:"7",platform:"OS X 10.9"}],maxConcurrency:3,useSauceConnect:!0,webdriver:{host:"localhost",port:4444},loader:{packages:[{name:"dojo",location:"dojo"},{name:"dojox",location:"dojox"}]},suites:["dojox/store/tests/all"],excludeInstrumentation:/^(?:node_modules|tests-intern|tests)\//});
//# sourceMappingURL=../../sourcemaps/store/tests/intern.js.map
