/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../ColumnView"],function(e,t){e.register("tests.unitTest_proj",[function(e){var n=new t({startDate:new Date(2015,4,13)}),o={dateModule:n.dateModule,minHours:0,maxHours:24},a=new Date(2012,4,13),i=new Date(2012,4,13,0,0,0),D=n.computeProjectionOnDate(o,a,i,1e3);e.is(D,0),i=new Date(2012,4,14,0,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,1e3),i=new Date(2012,4,13,12,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,500)},function(e){var n=new t({startDate:new Date(2015,4,13)}),o={dateModule:n.dateModule,minHours:8,maxHours:18},a=new Date(2012,4,13),i=new Date(2012,4,13,0,0,0),D=n.computeProjectionOnDate(o,a,i,1e3);e.is(D,0),i=new Date(2012,4,13,8,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,0),i=new Date(2012,4,13,13,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,500),i=new Date(2012,4,13,18,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,1e3),i=new Date(2012,4,13,20,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,1e3)},function(e){var n=new t({startDate:new Date(2015,4,13)}),o={dateModule:n.dateModule,minHours:12,maxHours:36},a=new Date(2012,4,13),i=new Date(2012,4,13,0,0,0),D=n.computeProjectionOnDate(o,a,i,1e3);e.is(D,0),i=new Date(2012,4,13,12,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,0),i=new Date(2012,4,14,0,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,500),i=new Date(2012,4,14,12,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,1e3),i=new Date(2012,4,14,20,0,0),D=n.computeProjectionOnDate(o,a,i,1e3),e.is(D,1e3)}])});
//# sourceMappingURL=../../sourcemaps/calendar/tests/unitTest_proj.js.map
