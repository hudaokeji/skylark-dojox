/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","../xml/DomParser"],function(e){e.getObject("sketch",!0,dojox);var t=dojox.sketch;return t.CommandTypes={Create:"Create",Move:"Move",Modify:"Modify",Delete:"Delete",Convert:"Convert"},e.declare("dojox.sketch.UndoStack",null,{constructor:function(e){this.figure=e,this._steps=[],this._undoedSteps=[]},apply:function(e,t,s){if(t||s||!e.fullText){var o=t.shapeText,a=s.shapeText;if(0!=o.length||0!=a.length)if(0!=o.length)if(0!=a.length){var r=this.figure.getAnnotator(s.shapeId),n=dojox.xml.DomParser.parse(a).documentElement;r.draw(n),this.figure.select(r)}else{var d=this.figure.getAnnotator(t.shapeId);this.figure._delete([d],!0)}else{var i=dojox.xml.DomParser.parse(a).documentElement,h=this.figure._loadAnnotation(i);h&&this.figure._add(h)}}else this.figure.setValue(e.fullText)},add:function(e,s,o){var a=s?s.id:"",r=s?s.serialize():"";e==t.CommandTypes.Delete&&(r="");var n={cmdname:e,before:{shapeId:a,shapeText:o||""},after:{shapeId:a,shapeText:r}};this._steps.push(n),this._undoedSteps=[]},destroy:function(){},undo:function(){var e=this._steps.pop();e&&(this._undoedSteps.push(e),this.apply(e,e.after,e.before))},redo:function(){var e=this._undoedSteps.pop();e&&(this._steps.push(e),this.apply(e,e.before,e.after))}}),dojox.sketch.UndoStack});
//# sourceMappingURL=../sourcemaps/sketch/UndoStack.js.map
