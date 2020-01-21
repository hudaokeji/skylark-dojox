/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","doh/runner"],function(require,o){try{var r=window.location.search.replace(/[\?&](dojoUrl|testUrl|testModule)=[^&]*/g,"").replace(/^&/,"?");o.registerUrl("dojox.app.tests.doh.lifecycleTest",require.toUrl("./lifecycleTest/"+r),999999),o.registerUrl("dojox.app.tests.doh.hasConfigTest",require.toUrl("./hasConfigTest/"+r),999999),o.registerUrl("dojox.app.tests.doh.simpleModelApp",require.toUrl("./simpleModelApp/"+r),999999),o.registerUrl("dojox.app.tests.doh.globalizedApp",require.toUrl("./globalizedApp/"+r),999999),o.registerUrl("dojox.app.tests.doh.borderLayoutApp",require.toUrl("./borderLayoutApp/"+r),999999),o.registerUrl("dojox.app.tests.doh.layoutApp",require.toUrl("./layoutApp/"+r),999999),o.registerUrl("dojox.app.tests.doh.mediaQuery3ColumnApp",require.toUrl("./mediaQuery3ColumnApp/"+r),999999),o.registerUrl("dojox.app.tests.doh.domOrderByConstraint",require.toUrl("./domOrderByConstraint/"+r),999999),o.registerUrl("dojox.app.tests.doh.domOrderByConfig",require.toUrl("./domOrderByConfig/"+r),999999),o.registerUrl("dojox.app.tests.doh.domOrderByConstraintRTL",require.toUrl("./domOrderByConstraintRTL/"+r),999999)}catch(r){o.debug(r)}});
//# sourceMappingURL=../../../sourcemaps/app/tests/doh/module.js.map
