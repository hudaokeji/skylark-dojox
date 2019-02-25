/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.fx.tests._base"),dojo.require("dojox.fx._core"),dojo.require("dojox.fx"),tests.register("dojox.fx.tests._base",[function(e){var a=new dojox.fx._Line([0,100],[100,0]),s=a.getValue(0);e.assertEqual(s[0],0),e.assertEqual(s[1],100);var t=a.getValue(.5);e.assertEqual(t[0],50),e.assertEqual(t[1],50);var u=a.getValue(1);e.assertEqual(u[0],100),e.assertEqual(u[1],0)},function(e){var a=new dojox.fx._Line(0,100);e.assertEqual(a.getValue(0),0),e.assertEqual(a.getValue(.5),50),e.assertEqual(a.getValue(1),100)},function(e){var a=[5,10,15,20,25,30,35],s=new dojox.fx._Line(a,[35,30,25,20,15,10,5]),t=s.getValue(0),u=(s.getValue(.5),s.getValue(1));e.assertEqual(t.length,7),e.assertEqual(u.length,7),e.assertEqual(a[0],t[0]),e.assertEqual(a[1],t[1]),e.assertEqual(a[5],t[5]);dojo.forEach(s.getValue(.5),function(a,s){e.assertEqual(20,a)})}]);
//# sourceMappingURL=../../sourcemaps/fx/tests/_base.js.map
