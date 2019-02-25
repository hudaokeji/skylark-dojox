/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.sketch.tests.FTHelper"),dojo.declare("dojox.sketch.tests.FTHelper",null,{controlCss:"#dojox_sketch_Toolbar_0 .dijitButtonContents",canvas:"canvas",defaultDelay:100,constructor:function(o){this.controls=["lead","single","double","underline","preexisting"],o&&dojo.mixin(this,o)},selectShape:function(o,t){t=t||this.defaultDelay;var s=dojo.indexOf(this.controls,o);if(s<0)throw Error('shape "'+o+'" is not recognized');var e=dojo.query(this.controlCss);if(e.length<=s)throw Error('Can not find button for shape "'+o+'" on the toolbar');var r=e[s];doh.robot.mouseMoveAt(r,t),doh.robot.mouseClick({left:!0},t)},drawShape:function(o,t,s){s=s||this.defaultDelay,this.coords||(this.coords=dojo.coords(this.canvas)),t=t||o,doh.robot.mouseMove(this.coords.x+o.x,this.coords.y+o.y,s,1),doh.robot.mousePress({left:1},s),doh.robot.mouseMove(this.coords.x+t.x,this.coords.y+t.y,s,1),doh.robot.mouseRelease({left:1},s)},click:function(o,t){t=t||this.defaultDelay,doh.robot.mouseMove(this.coords.x+o.x,this.coords.y+o.y,t,1),doh.robot.mouseClick(o,t)}});
//# sourceMappingURL=../../sourcemaps/sketch/tests/FTHelper.js.map
