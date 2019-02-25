/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dijit/registry","../util/oo","../manager/_registry","../stencil/Text"],function(t,e,o,n,i){var s;t.addOnLoad(function(){(s=t.byId("conEdit"))?s.parentNode.removeChild(s):console.error("A contenteditable div is missing from the main document. See 'dojox.drawing.tools.TextBlock'")});var r=o.declare(i,function(e){if(e.data){var o=e.data,n=o.text?this.typesetter(o.text):o.text,i=o.width?"auto"==o.width?"auto":Math.max(o.width,this.style.text.minWidth):this.style.text.minWidth,s=this._lineHeight;if(n&&"auto"==i){var r=this.measureText(this.cleanText(n,!1),i);i=r.w,s=r.h}else this._text="";this.points=[{x:o.x,y:o.y},{x:o.x+i,y:o.y},{x:o.x+i,y:o.y+s},{x:o.x,y:o.y+s}],o.showEmpty||n?(this.editMode=!0,t.disconnect(this._postRenderCon),this._postRenderCon=null,this.connect(this,"render",this,"onRender",!0),o.showEmpty?(this._text=n||"",this.edit()):n&&o.editMode?(this._text="",this.edit()):n&&this.render(n),setTimeout(t.hitch(this,function(){this.editMode=!1}),100)):this.render()}else this.connectMouse(),this._postRenderCon=t.connect(this,"render",this,"_onPostRender")},{draws:!0,baseRender:!1,type:"dojox.drawing.tools.TextBlock",_caretStart:0,_caretEnd:0,_blockExec:!1,selectOnExec:!0,showEmpty:!1,onDrag:function(e){this.parentNode||this.showParent(e);var o=this._startdrag,n=e.page;this._box.left=o.x<n.x?o.x:n.x,this._box.top=o.y,this._box.width=(o.x<n.x?n.x-o.x:o.x-n.x)+this.style.text.pad,t.style(this.parentNode,this._box.toPx())},onUp:function(e){if(this._downOnCanvas){this._downOnCanvas=!1;var o=t.connect(this,"render",this,function(){t.disconnect(o),this.onRender(this)});this.editMode=!0,this.showParent(e),this.created=!0,this.createTextField(),this.connectTextField()}},showParent:function(e){if(!this.parentNode){var o=e.pageX||10,n=e.pageY||10;this.parentNode=t.doc.createElement("div"),this.parentNode.id=this.id;var i=this.style.textMode.create;this._box={left:o,top:n,width:e.width||1,height:e.height&&e.height>8?e.height:this._lineHeight,border:i.width+"px "+i.style+" "+i.color,position:"absolute",zIndex:500,toPx:function(){var t={};for(var e in this)t[e]="number"==typeof this[e]&&"zIndex"!=e?this[e]+"px":this[e];return t}},t.style(this.parentNode,this._box),document.body.appendChild(this.parentNode)}},createTextField:function(e){var o=this.style.textMode.edit;return this._box.border=o.width+"px "+o.style+" "+o.color,this._box.height="auto",this._box.width=Math.max(this._box.width,this.style.text.minWidth*this.mouse.zoom),t.style(this.parentNode,this._box.toPx()),this.parentNode.appendChild(s),t.style(s,{height:e?"auto":this._lineHeight+"px",fontSize:this.textSize/this.mouse.zoom+"px",fontFamily:this.style.text.family}),s.innerHTML=e||"",s},connectTextField:function(){if(!this._textConnected){var o=e.byId("greekPalette"),n=void 0!=o;n&&t.mixin(o,{_pushChangeTo:s,_textBlock:this}),this._textConnected=!0,this._dropMode=!1,this.mouse.setEventMode("TEXT"),this.keys.editMode(!0);var i,r,h,a,c=this,d=!1,l=function(){c._dropMode||(t.forEach([i,r,h,a],function(e){t.disconnect(e)}),c._textConnected=!1,c.keys.editMode(!1),c.mouse.setEventMode(),c.execText())};i=t.connect(s,"keyup",this,function(e){t.trim(s.innerHTML)&&!d?(t.style(s,"height","auto"),d=!0):t.trim(s.innerHTML).length<2&&d&&(t.style(s,"height",this._lineHeight+"px"),d=!1),this._blockExec?e.keyCode==t.keys.SPACE&&(t.stopEvent(e),n&&o.onCancel()):13!=e.keyCode&&27!=e.keyCode||(t.stopEvent(e),l())}),r=t.connect(s,"keydown",this,function(e){if(13!=e.keyCode&&27!=e.keyCode||t.stopEvent(e),220==e.keyCode){if(!n)return void console.info("For greek letter assistance instantiate: dojox.drawing.plugins.drawing.GreekPalette");t.stopEvent(e),this.getSelection(s),this.insertText(s,"\\"),this._dropMode=!0,this._blockExec=!0,o.show({around:this.parentNode,orient:{BL:"TL"}})}if(this._dropMode)switch(e.keyCode){case t.keys.UP_ARROW:case t.keys.DOWN_ARROW:case t.keys.LEFT_ARROW:case t.keys.RIGHT_ARROW:t.stopEvent(e),o._navigateByArrow(e);break;case t.keys.ENTER:t.stopEvent(e),o._onCellClick(e);break;case t.keys.BACKSPACE:case t.keys.DELETE:t.stopEvent(e),o.onCancel()}else this._blockExec=!1}),h=t.connect(document,"mouseup",this,function(e){this._onAnchor||"conEdit"==e.target.id?"conEdit"==e.target.id&&""==s.innerHTML&&(s.blur(),setTimeout(function(){s.focus()},200)):(t.stopEvent(e),l())}),this.createAnchors(),a=t.connect(this.mouse,"setZoom",this,function(t){l()}),s.focus(),this.onDown=function(){},this.onDrag=function(){},setTimeout(t.hitch(this,function(){s.focus(),this.onUp=function(){!c._onAnchor&&this.parentNode&&(c.disconnectMouse(),l(),c.onUp=function(){})}}),500)}},execText:function(){var e=t.marginBox(this.parentNode),o=Math.max(e.w,this.style.text.minWidth),n=this.cleanText(s.innerHTML,!0);s.innerHTML="",s.blur(),this.destroyAnchors(),n=this.typesetter(n);var i=this.measureText(n,o),r=this.mouse.scrollOffset(),h=this.mouse.origin,a=this._box.left+r.left-h.x,c=this._box.top+r.top-h.y;a*=this.mouse.zoom,c*=this.mouse.zoom,o*=this.mouse.zoom,i.h*=this.mouse.zoom,this.points=[{x:a,y:c},{x:a+o,y:c},{x:a+o,y:c+i.h},{x:a,y:c+i.h}],this.editMode=!1,console.log("EXEC TEXT::::",this._postRenderCon),i.text||(this._text="",this._textArray=[]),this.render(i.text),this.onChangeText(this.getText())},edit:function(){this.editMode=!0;var t=this.getText()||"";if(console.log("EDIT TEXT:",t," ",t.replace("/n"," ")),!this.parentNode&&this.points){var e=this.pointsToData(),o=this.mouse.scrollOffset(),n=this.mouse.origin,i={pageX:e.x/this.mouse.zoom-o.left+n.x,pageY:e.y/this.mouse.zoom-o.top+n.y,width:e.width/this.mouse.zoom,height:e.height/this.mouse.zoom};this.remove(this.shape,this.hit),this.showParent(i),this.createTextField(t.replace("/n"," ")),this.connectTextField(),t&&this.setSelection(s,"end")}},cleanText:function(e,o){return o&&t.forEach(["<br>","<br/>","<br />","\\n","\\r"],function(t){e=e.replace(new RegExp(t,"gi")," ")}),e=function(t){var e={"&lt;":"<","&gt;":">","&amp;":"&"};for(var o in e)t=t.replace(new RegExp(o,"gi"),e[o]);return t}(e=e.replace(/&nbsp;/g," ")),e=(e=t.trim(e)).replace(/\s{2,}/g," ")},measureText:function(e,o){var n="(<br\\s*/*>)|(\\n)|(\\r)";this.showParent({width:o||"auto",height:"auto"}),this.createTextField(e);var i="",r=s;r.innerHTML="X";var h=t.marginBox(r).h;if(r.innerHTML=e,!o||new RegExp(n,"gi").test(e))i=e.replace(new RegExp(n,"gi"),"\n"),r.innerHTML=e.replace(new RegExp(n,"gi"),"<br/>");else if(t.marginBox(r).h==h)i=e;else{var a=e.split(" "),c=[[]],d=0;for(r.innerHTML="";a.length;){var l=a.shift();r.innerHTML+=l+" ",t.marginBox(r).h>h&&(c[++d]=[],r.innerHTML=l+" "),c[d].push(l)}t.forEach(c,function(t,e){c[e]=t.join(" ")}),i=c.join("\n"),r.innerHTML=i.replace("\n","<br/>")}var x=t.marginBox(r);return s.parentNode.removeChild(s),t.destroy(this.parentNode),this.parentNode=null,{h:x.h,w:x.w,text:i}},_downOnCanvas:!1,onDown:function(e){this._startdrag={x:e.pageX,y:e.pageY},t.disconnect(this._postRenderCon),this._postRenderCon=null,this._downOnCanvas=!0},createAnchors:function(){this._anchors={};var e=this,o=this.style.anchors,n=o.width,i=o.size-2*n,r=o.size-2*n,h=o.size/2*-1+"px",a={position:"absolute",width:i+"px",height:r+"px",backgroundColor:o.fill,border:n+"px "+o.style+" "+o.color};t.isIE&&(a.paddingLeft=i+"px",a.fontSize=i+"px");for(var c=[{top:h,left:h},{top:h,right:h},{bottom:h,right:h},{bottom:h,left:h}],d=0;d<4;d++){var l,x,g=0==d||3==d,p=this.util.uid(g?"left_anchor":"right_anchor"),u=t.create("div",{id:p},this.parentNode);t.style(u,t.mixin(t.clone(a),c[d]));var f=t.connect(u,"mousedown",this,function(o){g=o.target.id.indexOf("left")>-1,e._onAnchor=!0;var n=o.pageX,i=this._box.width;t.stopEvent(o),l=t.connect(document,"mousemove",this,function(e){var o=e.pageX;g?(this._box.left=o,this._box.width=i+n-o):this._box.width=o+i-n,t.style(this.parentNode,this._box.toPx())}),x=t.connect(document,"mouseup",this,function(o){n=this._box.left,i=this._box.width,t.disconnect(l),t.disconnect(x),e._onAnchor=!1,s.focus(),t.stopEvent(o)})});this._anchors[p]={a:u,cons:[f]}}},destroyAnchors:function(){for(var e in this._anchors)t.forEach(this._anchors[e].con,t.disconnect,t),t.destroy(this._anchors[e].a)},setSavedCaret:function(t){this._caretStart=this._caretEnd=t},getSavedCaret:function(){return{start:this._caretStart,end:this._caretEnd}},insertText:function(t,e){var o,n=t.innerHTML,i=this.getSavedCaret();o=(n=n.replace(/&nbsp;/g," ")).substr(0,i.start)+e+n.substr(i.end),o=this.cleanText(o,!0),this.setSavedCaret(Math.min(o.length,i.end+e.length)),t.innerHTML=o,this.setSelection(t,"stored")},getSelection:function(e){var o,n;if(t.doc.selection){var i=t.doc.selection.createRange(),s=t.body().createTextRange();s.moveToElementText(e);var r=s.duplicate();s.moveToBookmark(i.getBookmark()),r.setEndPoint("EndToStart",s),o=this._caretStart=r.text.length,n=this._caretEnd=r.text.length+i.text.length,console.warn("Caret start: ",o," end: ",n," length: ",r.text.length," text: ",r.text)}else this._caretStart=t.global.getSelection().getRangeAt(e).startOffset,this._caretEnd=t.global.getSelection().getRangeAt(e).endOffset,console.log("Caret start: ",this._caretStart," end: ",this._caretEnd)},setSelection:function(e,o){if(console.warn("setSelection:"),t.doc.selection){var n=t.body().createTextRange();switch(n.moveToElementText(e),o){case"end":n.collapse(!1);break;case"beg":n.collapse();break;case"all":n.collapse(),n.moveStart("character",0),n.moveEnd("character",e.text.length);break;case"stored":n.collapse();var i=this._caretStart-this._caretEnd;n.moveStart("character",this._caretStart),n.moveEnd("character",i)}n.select()}else{var s=function(t,e){e=e||[];for(var o=0;o<t.childNodes.length;o++){var n=t.childNodes[o];3==n.nodeType?e.push(n):n.tagName&&"img"==n.tagName.toLowerCase()&&e.push(n),n.childNodes&&n.childNodes.length&&s(n,e)}return e};console.log("ff node:",e),e.focus();var r=t.global.getSelection();r.removeAllRanges();var h=t.doc.createRange(),a=s(e);switch(o){case"end":console.log("len:",a[a.length-1].textContent.length),h.setStart(a[a.length-1],a[a.length-1].textContent.length),h.setEnd(a[a.length-1],a[a.length-1].textContent.length);break;case"beg":h.setStart(a[0],0),h.setEnd(a[0],0);break;case"all":h.setStart(a[0],0),h.setEnd(a[a.length-1],a[a.length-1].textContent.length);break;case"stored":console.log("Caret start: ",this._caretStart," caret end: ",this._caretEnd),h.setStart(a[0],this._caretStart),h.setEnd(a[0],this._caretEnd)}r.addRange(h),console.log("sel ",o," on ",e)}}});return t.setObject("dojox.drawing.tools.TextBlock",r),r.setup={name:"dojox.drawing.tools.TextBlock",tooltip:"Text Tool",iconClass:"iconText"},n.register(r.setup,"tool"),r});
//# sourceMappingURL=../../sourcemaps/drawing/tools/TextBlock.js.map
