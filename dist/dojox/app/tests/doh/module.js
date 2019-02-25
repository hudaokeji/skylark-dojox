/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","doh/runner"],function(o,r){try{var e=window.location.search.replace(/[\?&](dojoUrl|testUrl|testModule)=[^&]*/g,"").replace(/^&/,"?");r.registerUrl("dojox.app.tests.doh.lifecycleTest",o.toUrl("./lifecycleTest/"+e),999999),r.registerUrl("dojox.app.tests.doh.hasConfigTest",o.toUrl("./hasConfigTest/"+e),999999),r.registerUrl("dojox.app.tests.doh.simpleModelApp",o.toUrl("./simpleModelApp/"+e),999999),r.registerUrl("dojox.app.tests.doh.globalizedApp",o.toUrl("./globalizedApp/"+e),999999),r.registerUrl("dojox.app.tests.doh.borderLayoutApp",o.toUrl("./borderLayoutApp/"+e),999999),r.registerUrl("dojox.app.tests.doh.layoutApp",o.toUrl("./layoutApp/"+e),999999),r.registerUrl("dojox.app.tests.doh.mediaQuery3ColumnApp",o.toUrl("./mediaQuery3ColumnApp/"+e),999999),r.registerUrl("dojox.app.tests.doh.domOrderByConstraint",o.toUrl("./domOrderByConstraint/"+e),999999),r.registerUrl("dojox.app.tests.doh.domOrderByConfig",o.toUrl("./domOrderByConfig/"+e),999999),r.registerUrl("dojox.app.tests.doh.domOrderByConstraintRTL",o.toUrl("./domOrderByConstraintRTL/"+e),999999)}catch(o){r.debug(o)}});
//# sourceMappingURL=../../../sourcemaps/app/tests/doh/module.js.map
