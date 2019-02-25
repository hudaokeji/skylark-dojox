/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dijit/form/HorizontalSlider","./_Plugin"],function(i){return i.getObject("sketch",!0,dojox),i.declare("dojox.sketch.Slider",dojox.sketch._Plugin,{_initButton:function(){this.slider=new dijit.form.HorizontalSlider({minimum:5,maximum:100,style:"width:100px;",baseClass:"dijitInline dijitSlider"}),this.slider._movable.node.title='Double Click to "Zoom to Fit"',this.connect(this.slider,"onChange","_setZoom"),this.connect(this.slider.sliderHandle,"ondblclick","_zoomToFit")},_zoomToFit:function(){var i=this.figure.getFit();this.slider.attr("value",this.slider.maximum<i?this.slider.maximum:this.slider.minimum>i?this.slider.minimum:i)},_setZoom:function(i){i&&this.figure&&this.figure.zoom(i)},reset:function(){this.slider.attr("value",this.slider.maximum),this._zoomToFit()},setToolbar:function(i){this._initButton(),i.addChild(this.slider),i._reset2Zoom||(i._reset2Zoom=!0,this.connect(i,"reset","reset"))}}),dojox.sketch.registerTool("Slider",dojox.sketch.Slider),dojox.sketch.Slider});
//# sourceMappingURL=../sourcemaps/sketch/Slider.js.map
