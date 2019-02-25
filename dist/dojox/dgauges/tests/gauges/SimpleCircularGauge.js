/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojox/dgauges/CircularGauge","dojox/dgauges/LinearScaler","dojox/dgauges/CircularScale","dojox/dgauges/CircularValueIndicator","dojox/dgauges/CircularRangeIndicator","dojox/dgauges/TextIndicator"],function(e,i,a,n,r,t,o,c){return i("dojox.dgauges.tests.gauges.SimpleCircularGauge",a,{constructor:function(){this.font={family:"Helvetica",style:"normal",size:"10pt",color:"white"},this.addElement("background",function(e){e.createEllipse({cx:100,cy:100,rx:100,ry:100}).setFill("#444444")});var e=new n({minimum:-100,maximum:100,majorTickInterval:20,minorTickInterval:5}),i=new r({scaler:e,originX:100,originY:100,startAngle:110,endAngle:70,radius:75,labelPosition:"outside",tickShapeFunc:function(e,i,a){return e.createLine({x1:a.isMinor?2:0,y1:0,x2:a.isMinor?8:12,y2:0}).setStroke({color:a.isMinor?"black":"white",width:a.isMinor?.5:1})}});this.addElement("scale",i);var a=new t({interactionArea:"indicator",indicatorShapeFunc:function(e){return e.createPolyline([20,-6,60,0,20,6,20,-6]).setFill("black").setStroke("white")},value:50});i.addIndicator("indicator",a);var d=new o({start:0,value:100,radius:62,startThickness:10,endThickness:30,fill:"green",interactionMode:"none"});i.addIndicator("rangeIndicator",d,!0),this.addElement("text",new c({value:"G",x:100,y:100}))}})});
//# sourceMappingURL=../../../sourcemaps/dgauges/tests/gauges/SimpleCircularGauge.js.map
