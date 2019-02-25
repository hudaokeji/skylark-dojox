/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./Annotation","./Anchor"],function(){var t=dojox.sketch;t.UnderlineAnnotation=function(e,i){t.Annotation.call(this,e,i),this.transform={dx:0,dy:0},this.start={x:0,y:0},this.property("label","#"),this.labelShape=null,this.lineShape=null},t.UnderlineAnnotation.prototype=new t.Annotation;var e=t.UnderlineAnnotation.prototype;return e.constructor=t.UnderlineAnnotation,e.type=function(){return"Underline"},e.getType=function(){return t.UnderlineAnnotation},e.apply=function(t){if(t){t.documentElement&&(t=t.documentElement),this.readCommonAttrs(t);for(var e=0;e<t.childNodes.length;e++){var i=t.childNodes[e];if("text"==i.localName){this.property("label",i.childNodes[0].nodeValue);var o=i.getAttribute("style").match(/fill:([^;]+);/);if(o){var n=this.property("stroke");n.collor=o[1],this.property("stroke",n),this.property("fill",n.collor)}}}}},e.initialize=function(t){this.apply(t),this.shape=this.figure.group.createGroup(),this.shape.getEventSource().setAttribute("id",this.id),this.labelShape=this.shape.createText({x:0,y:0,text:this.property("label"),decoration:"underline",align:"start"}),this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape"),this.lineShape=this.shape.createLine({x1:1,x2:this.labelShape.getTextWidth(),y1:2,y2:2}),this.lineShape.getEventSource().setAttribute("shape-rendering","crispEdges"),this.draw()},e.destroy=function(){this.shape&&(this.shape.remove(this.labelShape),this.shape.remove(this.lineShape),this.figure.group.remove(this.shape),this.shape=this.lineShape=this.labelShape=null)},e.getBBox=function(){var t=this.getTextBox(),e=this.figure.zoomFactor;return{x:0,y:(-1*t.h+4)/e,width:(t.w+2)/e,height:t.h/e}},e.draw=function(t){this.apply(t),this.shape.setTransform(this.transform),this.labelShape.setShape({x:0,y:0,text:this.property("label")}).setFill(this.property("fill")),this.zoom()},e.zoom=function(e){if(this.labelShape){e=e||this.figure.zoomFactor;var i="vml"==dojox.gfx.renderer?0:2/e;t.Annotation.prototype.zoom.call(this,e),e="vml"==dojox.gfx.renderer?1:e,this.lineShape.setShape({x1:0,x2:this.getBBox().width-i,y1:2,y2:2}).setStroke({color:this.property("fill"),width:1/e}),this.mode==t.Annotation.Modes.Edit&&this.drawBBox()}},e.serialize=function(){this.property("stroke");return"<g "+this.writeCommonAttrs()+'><text style="fill:'+this.property("fill")+';" font-weight="bold" text-decoration="underline" x="0" y="0">'+this.property("label")+"</text></g>"},dojo.declare("dojox.sketch.UnderlineAnnotationTool",t.AnnotationTool,{onMouseDown:function(){},onMouseUp:function(){var t=this.figure;t._start&&(t._end={x:0,y:0},this._create(t._start,{x:t._start.x+10,y:t._start.y+10}))},onMouseMove:function(){}}),t.Annotation.register("Underline",t.UnderlineAnnotationTool),dojox.sketch.UnderlineAnnotation});
//# sourceMappingURL=../sourcemaps/sketch/UnderlineAnnotation.js.map
