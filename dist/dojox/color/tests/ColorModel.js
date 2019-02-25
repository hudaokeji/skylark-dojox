/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojo/_base/declare","../MeanColorModel","..","dijit/_WidgetBase"],function(o,e,t,i,n){o.register("tests.MeanColorModel",[function(o){var e=new t(new i.Color([0,0,0]),new i.Color([100,100,100]));e.initialize([0,10,20],function(o){return o}),o.is([50,50,50],e.getColor(10).toRgb()),o.is([0,0,0],e.getColor(0).toRgb()),o.is([99,99,99],e.getColor(20).toRgb()),e.initialize([0,5,20],function(o){return o}),o.is([50,50,50],e.getColor(5).toRgb()),o.is([0,0,0],e.getColor(0).toRgb()),o.is([99,99,99],e.getColor(20).toRgb())}])});
//# sourceMappingURL=../../sourcemaps/color/tests/ColorModel.js.map
