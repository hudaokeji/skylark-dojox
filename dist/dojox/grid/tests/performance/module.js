/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.grid.tests.performance.module"),doh.register("dojox.grid.tests.performance.module",[]);try{var numRows=[100],layouts=["Single","Dual"],selectors=[!1,!0];dojo.forEach(numRows,function(o){dojo.forEach(layouts,function(e){dojo.forEach(selectors,function(r){doh.registerUrl("Grid Creation - "+o+" Rows, "+e+" Layout"+(r?"w/ selector":""),dojo.moduleUrl("dojox.grid.tests.performance","creation.html")+"?rows="+o+"&layout="+e.toLowerCase()+"&rowSelector="+r,3e5),doh.registerUrl("Grid dojo.data Notification - "+o+" Rows, "+e+" Layout"+(r?"w/ selector":""),dojo.moduleUrl("dojox.grid.tests.performance","dataNotification.html")+"?rows="+o+"&layout="+e.toLowerCase()+"&rowSelector="+r,3e5)})})})}catch(o){doh.debug(o)}
//# sourceMappingURL=../../../sourcemaps/grid/tests/performance/module.js.map
