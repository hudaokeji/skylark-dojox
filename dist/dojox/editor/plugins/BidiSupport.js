/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","dojo/aspect","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/i18n","dojo/NodeList-dom","dojo/NodeList-traverse","dojo/dom-style","dojo/sniff","dojo/query","dijit","dojox","dijit/_editor/_Plugin","dijit/_editor/range","dijit/_editor/plugins/EnterKeyHandling","dijit/_editor/plugins/FontChoice","./NormalizeIndentOutdent","dijit/form/ToggleButton","dojo/i18n!./nls/BidiSupport"],function(t,e,i,r,s,n,a,o,l,h,d,g,f,c,u,m,p,C,_,b,v){var T=t("dojox.editor.plugins.BidiSupport",m,{useDefaultCommand:!1,buttonClass:null,iconClassPrefix:"dijitAdditionalEditorIcon",command:"bidiSupport",blockMode:"DIV",shortcutonly:!1,bogusHtmlContent:"&nbsp;",buttonLtr:null,buttonRtl:null,_indentBy:40,_lineTextArray:["DIV","P","LI","H1","H2","H3","H4","H5","H6","ADDRESS","PRE","DT","DE","TD"],_lineStyledTextArray:["H1","H2","H3","H4","H5","H6","ADDRESS","PRE","P"],_tableContainers:["TABLE","THEAD","TBODY","TR"],_blockContainers:["TABLE","OL","UL","BLOCKQUOTE"],_initButton:function(){this.shortcutonly||(this.buttonLtr||(this.buttonLtr=this._createButton("ltr")),this.buttonRtl||(this.buttonRtl=this._createButton("rtl")))},_createButton:function(t){return v(r.mixin({label:o.getLocalization("dojox.editor.plugins","BidiSupport")[t],dir:this.editor.dir,lang:this.editor.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+("ltr"==t?"ParaLeftToRight":"ParaRightToLeft"),onClick:r.hitch(this,"_changeState",[t])},this.params||{}))},setToolbar:function(t){this.shortcutonly||(this.editor.isLeftToRight()?(t.addChild(this.buttonLtr),t.addChild(this.buttonRtl)):(t.addChild(this.buttonRtl),t.addChild(this.buttonLtr)))},updateState:function(){if(this.editor&&this.editor.isLoaded&&!this.shortcutonly&&(this.buttonLtr.set("disabled",!!this.disabled),this.buttonRtl.set("disabled",!!this.disabled),!this.disabled)){var t=p.getSelection(this.editor.window);if(t&&0!=t.rangeCount){var e,i=t.getRangeAt(0);if(i.startContainer!==this.editor.editNode||i.startContainer.hasChildNodes()){var r=i.startContainer,s=i.startOffset;if(this._isBlockElement(r))for(;r.hasChildNodes();)s==r.childNodes.length&&s--,r=r.childNodes[s],s=0;e=this._getBlockAncestor(r)}else e=i.startContainer;var n=d.get(e,"direction");this.buttonLtr.set("checked","ltr"==n),this.buttonRtl.set("checked","rtl"==n)}}},setEditor:function(t){this.editor=t,"P"!=this.blockMode&&"DIV"!=this.blockMode&&(this.blockMode="DIV"),this._initButton();this.editor.dir;this.editor.contentPreFilters.push(this._preFilterNewLines);var e=r.hitch(this,function(t){return this.disabled||!t.hasChildNodes()?t:(this._changeStateOfBlocks(this.editor.editNode,this.editor.editNode,this.editor.editNode,"explicitdir",null),this.editor.editNode)});this.editor.contentDomPostFilters.push(e),this.editor._justifyleftImpl=r.hitch(this,function(){return this._changeState("left"),!0}),this.editor._justifyrightImpl=r.hitch(this,function(){return this._changeState("right"),!0}),this.editor._justifycenterImpl=r.hitch(this,function(){return this._changeState("center"),!0}),this.editor._insertorderedlistImpl=r.hitch(this,"_insertLists","insertorderedlist"),this.editor._insertunorderedlistImpl=r.hitch(this,"_insertLists","insertunorderedlist"),this.editor._indentImpl=r.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=r.hitch(this,"_indentAndOutdent","outdent"),this.editor._formatblockImpl=r.hitch(this,"_formatBlocks"),this.editor.onLoadDeferred.addCallback(r.hitch(this,function(){var t,e,s=this.editor._plugins,n=s.length,a=r.hitch(this,"_changeState","mirror"),o=r.hitch(this,"_changeState","ltr"),l=r.hitch(this,"_changeState","rtl");for(this.editor.addKeyHandler("9",1,0,a),this.editor.addKeyHandler("8",1,0,o),this.editor.addKeyHandler("0",1,0,l),t=0;t<s.length;t++)(e=s[t])&&(e.constructor===C?(e.destroy(),e=null,n=t):e.constructor===b?(this.editor._normalizeIndentOutdent=!0,this.editor._indentImpl=r.hitch(this,"_indentAndOutdent","indent"),this.editor._outdentImpl=r.hitch(this,"_indentAndOutdent","outdent")):e.constructor===_&&"formatBlock"===e.command&&this.own(i.before(e.button,"_execCommand",r.hitch(this,"_handleNoFormat"))));this.editor.addPlugin({ctor:C,blockNodeForEnter:this.blockMode,blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI|DIV)$/},n),e=this.editor._plugins[n],this.own(i.after(e,"handleEnterKey",r.hitch(this,"_checkNewLine"),!0))})),this.own(i.after(this.editor,"onNormalizedDisplayChanged",r.hitch(this,"updateState"),!0))},_checkNewLine:function(){var t=p.getSelection(this.editor.window).getRangeAt(0),e=p.getBlockAncestor(t.startContainer,null,this.editor.editNode).blockNode;e.innerHTML===this.bogusHtmlContent&&e.previousSibling?e.style.cssText=e.previousSibling.style.cssText:e.innerHTML!==this.bogusHtmlContent&&e.previousSibling&&e.previousSibling.innerHTML===this.bogusHtmlContent&&(e.previousSibling.style.cssText=e.style.cssText)},_handleNoFormat:function(t,e,i){return"noFormat"===i?[t,e,"DIV"]:arguments},_execNativeCmd:function(t,e,i){if(this._isSimpleInfo(i)){var r=this.editor.document.execCommand(t,!1,e);return g("webkit")&&f("table",this.editor.editNode).prev().forEach(function(t,e,i){this._hasTag(t,"BR")&&t.parentNode.removeChild(t)},this),r}var s=p.getSelection(this.editor.window);if(!s||0==s.rangeCount)return!1;for(var n=s.getRangeAt(0),a=n.cloneRange(),o=n.startContainer,l=n.startOffset,h=n.endContainer,d=n.endOffset,c=0;c<i.groups.length;c++){var u=i.groups[c],m=u[u.length-1].childNodes.length;a.setStart(u[0],0),a.setEnd(u[u.length-1],m),s.removeAllRanges(),s.addRange(a);var C=this.editor.selection.getParentOfType(u[0],["TABLE"]),_=this.editor.document.execCommand(t,!1,e);if(g("webkit")){C&&this._hasTag(C.previousSibling,"BR")&&C.parentNode.removeChild(C.previousSibling),this.editor.focus();var b=(s=p.getSelection(this.editor.window)).getRangeAt(0);0==c?(o=b.endContainer,l=b.endOffset):c==i.groups.length-1&&(h=b.endContainer,d=b.endOffset)}if(!_)break;g("webkit")&&this._changeState(t)}s.removeAllRanges();try{a.setStart(o,l),a.setEnd(h,d),s.addRange(a)}catch(t){}return!0},_insertLists:function(t){var e=this._changeState("preparelists",t);return!!this._execNativeCmd(t,null,e)&&(g("webkit")&&!this._isSimpleInfo(e)||this._changeState(t),this._cleanLists(),this._mergeLists(),!0)},_indentAndOutdent:function(t){if(this.editor._normalizeIndentOutdent)return this._changeState("normalize"+t),!0;var e=this._changeState("prepare"+t);if(g("mozilla")){var i;try{i=this.editor.document.queryCommandValue("styleWithCSS")}catch(t){i=!1}this.editor.document.execCommand("styleWithCSS",!1,!0)}var r=this._execNativeCmd(t,null,e);return g("mozilla")&&this.editor.document.execCommand("styleWithCSS",!1,i),!!r&&(this._changeState(t),this._mergeLists(),!0)},_formatBlocks:function(t){var e;return(g("mozilla")||g("webkit"))&&(e=this._changeState("prepareformat",t)),g("ie")&&t&&"<"!=t.charAt(0)&&(t="<"+t+">"),!!this._execNativeCmd("formatblock",t,e)&&(g("webkit")&&!this._isSimpleInfo(e)||this._changeState("formatblock",t),this._mergeLists(),!0)},_changeState:function(t,e){if(this.editor.window){this.editor.focus();var i=p.getSelection(this.editor.window);if(i&&0!=i.rangeCount){var r,s,n,a,o=i.getRangeAt(0),l=o.cloneRange();r=o.startContainer,n=o.startOffset,s=o.endContainer,a=o.endOffset;var h=r===s&&n==a;if(this._isBlockElement(r)||this._hasTagFrom(r,this._tableContainers))for(;r.hasChildNodes();)n==r.childNodes.length&&n--,r=r.childNodes[n],n=0;l.setStart(r,n),r=this._getClosestBlock(r,"start",l);var d=p.getBlockAncestor(r,/li/i,this.editor.editNode).blockNode;if(d&&d!==r&&(r=d),s=l.endContainer,a=l.endOffset,this._isBlockElement(s)||this._hasTagFrom(s,this._tableContainers))for(;s.hasChildNodes();)a==s.childNodes.length&&a--,a=(s=s.childNodes[a]).hasChildNodes()?s.childNodes.length:3==s.nodeType&&s.nodeValue?s.nodeValue.length:0;l.setEnd(s,a),s=this._getClosestBlock(s,"end",l),(d=p.getBlockAncestor(s,/li/i,this.editor.editNode).blockNode)&&d!==s&&(s=d),(i=p.getSelection(this.editor.window,!0)).removeAllRanges(),i.addRange(l);var g=p.getCommonAncestor(r,s),f=this._changeStateOfBlocks(r,s,g,t,e,l);return h&&(s=l.startContainer,a=l.startOffset,l.setEnd(s,a),(i=p.getSelection(this.editor.window,!0)).removeAllRanges(),i.addRange(l)),f}}},_isBlockElement:function(t){if(!t||1!=t.nodeType)return!1;var e=d.get(t,"display");return"block"==e||"list-item"==e||"table-cell"==e},_isInlineOrTextElement:function(t){return!this._isBlockElement(t)&&(1==t.nodeType||3==t.nodeType||8==t.nodeType)},_isElement:function(t){return t&&(1==t.nodeType||3==t.nodeType)},_isBlockWithText:function(t){return t!==this.editor.editNode&&this._hasTagFrom(t,this._lineTextArray)},_getBlockAncestor:function(t){for(;t.parentNode&&!this._isBlockElement(t);)t=t.parentNode;return t},_getClosestBlock:function(t,e,i){if(this._isBlockElement(t))return t;var r,s,n=t.parentNode,a=!1;for(removeOffset=!1;;){var o=t;for(a=!1;this._isInlineOrTextElement(o)&&(r=o,s||(s=o)),o=o.previousSibling;){if(this._isBlockElement(o)||this._hasTagFrom(o,this._blockContainers)||this._hasTag(o,"BR")){a=!0;break}if(3==o.nodeType&&3==o.nextSibling.nodeType&&(o.nextSibling.nodeValue=o.nodeValue+o.nextSibling.nodeValue,!0,"start"==e&&o===i.startContainer?i.setStart(o.nextSibling,0):"end"!=e||o!==i.endContainer&&o.nextSibling!==i.endContainer||i.setEnd(o.nextSibling,o.nextSibling.nodeValue.length),(o=o.nextSibling).parentNode.removeChild(o.previousSibling),!o.previousSibling))break}for(o=t;this._isInlineOrTextElement(o)&&(r||(r=o),s=o),o=o.nextSibling;){if(this._isBlockElement(o)||this._hasTagFrom(o,this._blockContainers)){a=!0;break}if(this._hasTag(o,"BR")&&o.nextSibling&&!this._isBlockElement(o.nextSibling)&&!this._hasTagFrom(o.nextSibling,this._blockContainers)){s=o,a=!0;break}if(3==o.nodeType&&3==o.previousSibling.nodeType&&(o.previousSibling.nodeValue+=o.nodeValue,!0,"start"==e&&o===i.startContainer?i.setStart(o.previousSibling,0):"end"!=e||o!==i.endContainer&&o.previousSibling!==i.endContainer||i.setEnd(o.previousSibling,o.previousSibling.nodeValue.length),(o=o.previousSibling).parentNode.removeChild(o.nextSibling),!o.nextSibling))break}if(a||this._isBlockElement(n)&&!this._isBlockWithText(n)&&r){var l=i?i.startOffset:0,h=i?i.endOffset:0,d=i?i.startContainer:null,g=i?i.endContainer:null,f=this._repackInlineElements(r,s,n),c=f["start"==e?0:f.length-1];return i&&c&&r===d&&this._hasTag(r,"BR")&&(d=c,l=0,s===r&&(g=d,h=0)),i&&(i.setStart(d,l),i.setEnd(g,h)),c}if(this._isBlockElement(n))return n;t=n,removeOffset=!0,n=n.parentNode,r=s=null}},_changeStateOfBlocks:function(t,e,i,r,s,n){var a=[];if(t===this.editor.editNode){if(!t.hasChildNodes())return;this._isInlineOrTextElement(t.firstChild)&&this._rebuildBlock(t),t=this._getClosestBlock(t.firstChild,"start",null)}if(e===this.editor.editNode){if(!e.hasChildNodes())return;this._isInlineOrTextElement(e.lastChild)&&this._rebuildBlock(e),e=this._getClosestBlock(e.lastChild,"end",null)}var o=n?n.startOffset:0,l=n?n.endOffset:0,h=n?n.startContainer:null,d=n?n.endContainer:null,g=this._collectNodes(t,e,i,n,a,h,o,d,l,r),f={nodes:a,groups:g.groups,cells:g.cells};switch(r=r.toString()){case"mirror":case"ltr":case"rtl":case"left":case"right":case"center":case"explicitdir":this._execDirAndAlignment(f,r,s);break;case"preparelists":this._prepareLists(f,s);break;case"insertorderedlist":case"insertunorderedlist":this._execInsertLists(f);break;case"prepareoutdent":this._prepareOutdent(f);break;case"prepareindent":this._prepareIndent(f);break;case"indent":this._execIndent(f);break;case"outdent":this._execOutdent(f);break;case"normalizeindent":this._execNormalizedIndent(f);break;case"normalizeoutdent":this._execNormalizedOutdent(f);break;case"prepareformat":this._prepareFormat(f,s);break;case"formatblock":this._execFormatBlocks(f,s);break;default:console.error("Command "+r+" isn't handled")}return n&&(n.setStart(h,o),n.setEnd(d,l),sel=p.getSelection(this.editor.window,!0),sel.removeAllRanges(),sel.addRange(n),this.editor.onDisplayChanged()),f},_collectNodes:function(t,e,i,s,n,a,o,l,h,d){var f,c,u=t,m=u.parentNode,C=[],_=[],b=[],v=[],T=this.editor.editNode,N=r.hitch(this,function(t){n.push(t);var e=this.editor.selection.getParentOfType(t,["TD"]);(T!==e||g("webkit")&&("prepareformat"===d||"preparelists"===d))&&(b.length&&_.push(b),b=[],T!=e&&(T=e)&&v.push(T)),b.push(t)});for(this._rebuildBlock(m);;){if(this._hasTagFrom(u,this._tableContainers)){if(u.firstChild){m=u,u=u.firstChild;continue}}else if(this._isBlockElement(u)){var x=p.getBlockAncestor(u,/li/i,this.editor.editNode).blockNode;if(x&&x!==u){m=(u=x).parentNode;continue}if(!this._hasTag(u,"LI")&&u.firstChild&&(this._rebuildBlock(u),this._isBlockElement(u.firstChild)||this._hasTagFrom(u.firstChild,this._tableContainers))){m=u,u=u.firstChild;continue}this._hasTagFrom(u,this._lineTextArray)&&N(u)}else if(this._isInlineOrTextElement(u)&&!this._hasTagFrom(u.parentNode,this._tableContainers)){for(f=u;u;){var L=u.nextSibling;if(this._isInlineOrTextElement(u)){if(c=u,this._hasTag(u,"BR")&&(!this._isBlockElement(m)||u!==m.lastChild)){u=(C=this._repackInlineElements(f,c,m))[C.length-1];for(var S=0;S<C.length;S++)N(C[S]);f=c=null,L&&this._isInlineOrTextElement(L)&&(f=L)}}else if(this._isBlockElement(u))break;u=L}if(!f)continue;u=(C=this._repackInlineElements(f,c,m))[C.length-1];for(S=0;S<C.length;S++)N(C[S])}if(u===e)break;if(u.nextSibling)u=u.nextSibling;else{if(m===i)break;for(;!m.nextSibling&&(m=(u=m).parentNode)!==i;);if(m===i||!m.nextSibling)break;u=m.nextSibling,m=m.parentNode}}return b.length&&(g("webkit")||T?_.push(b):_.unshift(b)),{groups:_,cells:v}},_execDirAndAlignment:function(t,i,r){switch(i){case"mirror":case"ltr":case"rtl":e.forEach(t.nodes,function(t){var e=(p=d.getComputedStyle(t)).direction,r="mirror"!=i?i:"ltr"==e?"rtl":"ltr",n=p.textAlign,a=isNaN(parseInt(p.marginLeft))?0:parseInt(p.marginLeft),o=isNaN(parseInt(p.marginRight))?0:parseInt(p.marginRight);if(s.remove(t,"dir"),s.remove(t,"align"),d.set(t,{direction:r,textAlign:""}),!this._hasTag(t,"CENTER"))if(n.indexOf("center")>=0&&d.set(t,"textAlign","center"),this._hasTag(t,"LI")){this._refineLIMargins(t);var l="rtl"===e?o:a,h=0,f=t.parentNode;if(e!=d.get(f,"direction")){for(;f!==this.editor.editNode;)this._hasTagFrom(f,["OL","UL"])&&h++,f=f.parentNode;l-=this._getMargins(h)}var c="rtl"==r?"marginRight":"marginLeft",u=d.get(t,c),m=isNaN(u)?0:parseInt(u);if(d.set(t,c,m+l+"px"),g("webkit"))n.indexOf("center")<0&&d.set(t,"textAlign","rtl"==r?"right":"left");else if(t.firstChild&&t.firstChild.tagName&&this._hasTagFrom(t.firstChild,this._lineStyledTextArray)){var p=d.getComputedStyle(t),C=this._refineAlignment(p.direction,p.textAlign);g("mozilla")?d.set(t.firstChild,{textAlign:C}):d.set(t.firstChild,{direction:r,textAlign:C})}}else"rtl"==r&&0!=a?d.set(t,{marginLeft:"",marginRight:a+"px"}):"ltr"==r&&0!=o&&d.set(t,{marginRight:"",marginLeft:o+"px"})},this),f("table",this.editor.editNode).forEach(function(e,r,s){var n=i;"mirror"===i&&(n="ltr"===d.get(e,"direction")?"rtl":"ltr");for(var a=f("td",e),o=!1,l=!1,h=0;h<t.cells.length;h++)if(o||a[0]!==t.cells[h]){if(a[a.length-1]===t.cells[h]){l=!0;break}}else o=!0;if(o&&l)for(d.set(e,"direction",n),h=0;h<a.length;h++)d.set(a[h],"direction",n)},this);break;case"left":case"right":case"center":e.forEach(t.nodes,function(t){if(!this._hasTag(t,"CENTER")&&(s.remove(t,"align"),d.set(t,"textAlign",i),this._hasTag(t,"LI")&&t.firstChild&&t.firstChild.tagName&&this._hasTagFrom(t.firstChild,this._lineStyledTextArray))){var e=d.getComputedStyle(t),r=this._refineAlignment(e.direction,e.textAlign);d.set(t.firstChild,"textAlign",r)}},this);break;case"explicitdir":e.forEach(t.nodes,function(t){var e=d.getComputedStyle(t).direction;s.remove(t,"dir"),d.set(t,{direction:e})},this)}},_prepareLists:function(t,i){e.forEach(t.nodes,function(t,e,r){if(g("mozilla")||g("webkit")){if(g("mozilla")){var n=this._getParentFrom(t,["TD"]);n&&0==f("div[tempRole]",n).length&&a.create("div",{innerHTML:"<span tempRole='true'>"+this.bogusHtmlContent+"</span",tempRole:"true"},n)}var o,l=this._tag(t);if(g("webkit")&&this._hasTagFrom(t,this._lineStyledTextArray)||this._hasTag(t,"LI")&&this._hasStyledTextLineTag(t.firstChild)){var h=this._hasTag(t,"LI")?this._tag(t.firstChild):l;if(this._hasTag(t,"LI")){for(;t.firstChild.lastChild;)a.place(t.firstChild.lastChild,t.firstChild,"after");t.removeChild(t.firstChild)}o=a.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:h},t,"first")}if(!g("webkit")&&"DIV"!=l&&"P"!=l&&"LI"!=l)return;if(g("webkit")&&this._isListTypeChanged(t,i)&&t===t.parentNode.lastChild&&a.create("li",{tempRole:"true"},t,"after"),"LI"==l&&t.firstChild&&t.firstChild.tagName&&this._hasTagFrom(t.firstChild,this._lineStyledTextArray))return;var c=d.getComputedStyle(t),u=c.direction,m=c.textAlign;m=this._refineAlignment(u,m);var p=this._getLIIndent(t),C=0==p?"":p+"px";g("webkit")&&"LI"==l&&d.set(t,"textAlign","");var _=o?t.firstChild:a.create("span",{innerHTML:this.bogusHtmlContent},t,"first");s.set(_,"bogusDir",u),""!=m&&s.set(_,"bogusAlign",m),C&&s.set(_,"bogusMargin",C)}else if(g("ie")&&this._hasTag(t,"LI")){d.getComputedStyle(t).direction;if(d.set(t,"marginRight",""),d.set(t,"marginLeft",""),1==this._getLILevel(t)&&!this._isListTypeChanged(t,cmd)&&(t.firstChild&&this._hasTagFrom(t.firstChild,["P","PRE"])&&a.create("span",{bogusIEFormat:this._tag(t.firstChild)},t.firstChild,"first"),this._hasTag(t.firstChild,"PRE"))){for(var b=a.create("p",null,t.firstChild,"after");t.firstChild.firstChild;)a.place(t.firstChild.firstChild,b,"last");b.style.cssText=t.style.cssText,t.removeChild(t.firstChild)}}},this),g("webkit")&&f("table",this.editor.editNode).forEach(function(t,e,i){var r=t.nextSibling;r&&this._hasTagFrom(r,["UL","OL"])&&a.create("UL",{tempRole:"true"},t,"after")},this)},_execInsertLists:function(t){e.forEach(t.nodes,function(t,e){if(this._hasTag(t,"LI")){if(t.firstChild&&t.firstChild.tagName&&this._hasTagFrom(t.firstChild,this._lineStyledTextArray)){var i=d.getComputedStyle(t.firstChild),o=this._refineAlignment(i.direction,i.textAlign);d.set(t,{direction:i.direction,textAlign:o});var l=this._getIntStyleValue(t,"marginLeft")+this._getIntStyleValue(t.firstChild,"marginLeft"),h=this._getIntStyleValue(t,"marginRight")+this._getIntStyleValue(t.firstChild,"marginRight"),f=l?l+"px":"",c=h?h+"px":"";d.set(t,{marginLeft:f,marginRight:c}),d.set(t.firstChild,{direction:"",textAlign:""}),g("mozilla")||d.set(t.firstChild,{marginLeft:"",marginRight:""})}for(;t.childNodes.length>1&&3==t.lastChild.nodeType&&t.lastChild.previousSibling&&3==t.lastChild.previousSibling.nodeType&&""==r.trim(t.lastChild.nodeValue);)t.removeChild(t.lastChild);if(g("safari")&&this._hasTag(t.firstChild,"SPAN")&&n.contains(t.firstChild,"Apple-style-span")){var u=t.firstChild;if(this._hasTag(u.firstChild,"SPAN")&&s.has(u.firstChild,"bogusFormat")){for(;u.lastChild;)a.place(u.lastChild,u,"after");t.removeChild(u)}}}else if(this._hasTag(t,"DIV")&&0==t.childNodes.length)return void t.parentNode.removeChild(t);if(g("ie")){if(this._hasTag(t,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(t.firstChild,"SPAN")&&s.has(t.firstChild,"bogusIEFormat")){if("PRE"===s.get(t.firstChild,"bogusIEFormat").toUpperCase()){var m=a.create("pre",{innerHTML:t.innerHTML},t,"before");m.style.cssText=t.style.cssText,m.removeChild(m.firstChild),t.parentNode.removeChild(t)}else t.removeChild(t.firstChild);return}var p=a.create("div");for(p.style.cssText=t.style.cssText,t.parentNode.insertBefore(p,t);t.firstChild;)p.appendChild(t.firstChild);t.parentNode.removeChild(t)}if(!this._hasTag(t,"LI"))return;this._refineLIMargins(t);var C=t.firstChild;if(!this._hasTag(C,"DIV"))return;if(C!==t.lastChild)return;var _=(i=d.getComputedStyle(C)).direction;o=i.textAlign,d.getComputedStyle(t).textAlign;for(d.set(t,"direction",_),o=this._refineAlignment(_,o),d.set(t,"textAlign",o);C.firstChild;)t.insertBefore(C.firstChild,C);t.removeChild(C)}else if(!this._hasTag(t.firstChild,"SPAN"))return void(this._hasTag(t,"LI")&&(this._refineLIMargins(t),g("mozilla")&&this._hasStyledTextLineTag(t.firstChild)&&this._recountLIMargins(t)));var b=!1,v=!1,T=!1,N=0;if(s.has(t.firstChild,"bogusDir")){b=!0;_=s.get(t.firstChild,"bogusDir");d.set(t,"direction",_)}if(s.has(t.firstChild,"bogusAlign")){b=!0,T=!0;o=s.get(t.firstChild,"bogusAlign");d.set(t,"textAlign",o);var x=t.firstChild.nextSibling;if(this._hasTag(x,"SPAN")&&d.get(x,"textAlign")===o&&(d.set(x,"textAlign",""),""==x.style.cssText)){for(;x.lastChild;)a.place(x.lastChild,x,"after");t.removeChild(x)}}if(s.has(t.firstChild,"bogusMargin")&&(b=!0,v=!0,N=parseInt(s.get(t.firstChild,"bogusMargin")),!this._hasTag(t,"LI"))){var L="rtl"===d.get(t,"direction")?"marginRight":"marginLeft",S=this._getIntStyleValue(t,L)+N;d.set(t,L,0==S?"":S+"px")}if(s.has(t.firstChild,"bogusFormat")){if(b=!1,s.remove(t.firstChild,"bogusDir"),t.firstChild.nextSibling&&this._hasTag(t.firstChild.nextSibling,"SPAN")){for(var I=t.firstChild.style.cssText.trim().split(";"),y=t.firstChild.nextSibling.style.cssText.trim().split(";"),k=0;k<I.length;k++)if(I[k])for(var A=0;A<y.length;A++)if(I[k].trim()==y[A].trim()){i=I[k].trim().split(":")[0];d.set(t.firstChild.nextSibling,i,"");break}if(""===t.firstChild.nextSibling.style.cssText){for(;t.firstChild.nextSibling.firstChild;)a.place(t.firstChild.nextSibling.firstChild,t.firstChild.nextSibling,"after");t.removeChild(t.firstChild.nextSibling)}}for(var R=s.get(t.firstChild,"bogusFormat"),E=a.create(R,null,t.firstChild,"after");E.nextSibling;)a.place(E.nextSibling,E,"last");if(t.removeChild(t.firstChild),g("webkit")&&this._hasTag(t,"LI")){var B=t.parentNode.parentNode;this._hasTag(B,R)&&s.set(B,"tempRole","true")}1!=t.childNodes.length||this._hasTag(t,"TD")||(g("mozilla")||this._hasTag(t,"LI")?this._hasTag(t,"LI")||(E.style.cssText=t.style.cssText,a.place(E,t,"after"),s.set(t,"tempRole","true")):(E.style.cssText=t.style.cssText,s.set(t,"tempRole","true")))}if(b&&t.removeChild(t.firstChild),this._hasTag(t,"LI")){g("webkit")&&!T&&"center"!=d.get(t,"textAlign")&&d.set(t,"textAlign","rtl"==d.get(t,"direction")?"right":"left"),g("safari")&&this._hasTag(t,"DIV")&&(t.innerHTML=t.nextSibling.innerHTML,t.parentNode.removeChild(t.nextSibling));var F=t.parentNode.parentNode;F!==this.editor.editNode&&this._hasTag(F,"DIV")&&1==F.childNodes.length&&(F.parentNode.insertBefore(t.parentNode,F),F.parentNode.removeChild(F)),this._refineLIMargins(t),v&&this._recountLIMargins(t,N)}},this),g("mozilla")?f("*[tempRole]",this.editor.editNode).forEach(function(t,e,i){if(this._hasTag(t,"SPAN")){if(s.get(t.parentNode,"tempRole"))return;if(this._hasTag(t.parentNode,"LI"))return void t.parentNode.parentNode.removeChild(t.parentNode)}t.parentNode.removeChild(t)},this):g("webkit")&&f("*[tempRole]",this.editor.editNode).forEach(function(t,e,i){if(!this._hasTag(t,"LI")&&!this._hasTag(t,"UL")){for(;t.lastChild;)a.place(t.lastChild,t,"after");t.parentNode.removeChild(t)}},this)},_execNormalizedIndent:function(t){e.forEach(t.nodes,function(t){var e="rtl"===d.get(t,"direction")?"marginRight":"marginLeft",i=d.get(t,e),r=isNaN(i)?0:parseInt(i);d.set(t,e,r+this._indentBy+"px")},this)},_execNormalizedOutdent:function(t){e.forEach(t.nodes,function(t){var e="rtl"===d.get(t,"direction")?"marginRight":"marginLeft",i=d.get(t,e),r=isNaN(i)?0:parseInt(i),s=0;if("LI"===t.tagName.toUpperCase()){var n=0,a=t.parentNode;if(d.get(t,"direction")!=d.get(a,"direction")){for(;a!==this.editor.editNode;)this._hasTagFrom(a,["OL","UL"])&&n++,a=a.parentNode;s=this._getMargins(n)}}r>=this._indentBy+s&&d.set(t,e,r==this._indentBy?"":r-this._indentBy+"px")},this)},_prepareIndent:function(t){e.forEach(t.nodes,function(t){if(g("mozilla")){var e=this._getParentFrom(t,["TD"]);if(e&&0==f("div[tempRole]",e).length&&a.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},e),this._hasTag(t,"LI")){var i=this._getLIIndent(t);s.set(t,"tempIndent",i)}}if(g("webkit")&&this._hasTag(t,"LI")&&this._hasStyledTextLineTag(t.firstChild)){for(var r=this._tag(t.firstChild);t.firstChild.lastChild;)a.place(t.firstChild.lastChild,t.firstChild,"after");t.removeChild(t.firstChild),a.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:r},t,"first")}},this)},_prepareOutdent:function(t){e.forEach(t.nodes,function(t){if(g("mozilla")||g("webkit")){if(g("mozilla")){var e=this._getParentFrom(t,["TD"]);e&&0==f("div[tempRole]",e).length&&a.create("div",{innerHTML:this.bogusHtmlContent,tempRole:"true"},e)}var i=this._tag(t);if(g("mozilla")&&"LI"!==i)return;var r=null;if(g("webkit")&&this._hasTag(t,"LI")&&this._hasStyledTextLineTag(t.firstChild)){i=this._tag(t.firstChild);for(var n=t.firstChild;n.lastChild;)a.place(n.lastChild,n,"after");t.removeChild(t.firstChild),r=a.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:i},t,"first")}if(t.firstChild&&t.firstChild.tagName&&this._hasTagFrom(t.firstChild,this._lineStyledTextArray)){if(g("mozilla")){t.firstChild.style.cssText=t.style.cssText;var o="rtl"===d.get(t,"direction")?"marginRight":"marginLeft";(m=this._getLIIndent(t))>0&&d.set(t.firstChild,o,m+"px")}return}var l=d.getComputedStyle(t),h=l.direction,c=l.textAlign;c=this._refineAlignment(h,c),g("webkit")&&"LI"==i&&d.set(t,"textAlign","");var u=r?t.firstChild:a.create("span",{innerHTML:this.bogusHtmlContent},t,"first");if(s.set(u,"bogusDir",h),""!=c&&s.set(u,"bogusAlign",c),g("mozilla")){var m=this._getLIIndent(t);s.set(u,"bogusIndent",m)}}if(g("ie")&&"LI"==t.tagName.toUpperCase()&&(d.set(t,"marginLeft",""),d.set(t,"marginRight",""),1==this._getLILevel(t)&&(t.firstChild&&this._hasTagFrom(t.firstChild,["P","PRE"])&&a.create("span",{bogusIEFormat:this._tag(t.firstChild)},t.firstChild,"first"),this._hasTag(t.firstChild,"PRE")))){for(var p=a.create("p",null,t.firstChild,"after");t.firstChild.firstChild;)a.place(t.firstChild.firstChild,p,"last");p.style.cssText=t.style.cssText,t.removeChild(t.firstChild)}},this)},_execIndent:function(t){e.forEach(t.nodes,function(t){if(g("mozilla")||d.set(t,"margin",""),this._hasTag(t,"LI")){var e=0;g("mozilla")&&s.has(t,"tempIndent")&&(e=parseInt(s.get(t,"tempIndent")),s.remove(t,"tempIndent")),this._refineLIMargins(t),g("mozilla")&&this._recountLIMargins(t,e)}if(s.has(t.firstChild,"bogusFormat")){for(var i=s.get(t.firstChild,"bogusFormat"),r=a.create(i,null,t.firstChild,"after");r.nextSibling;)a.place(r.nextSibling,r,"last");t.removeChild(t.firstChild)}if(g("ie")||g("webkit"))for(var n=t.parentNode;n!==this.editor.editNode&&(n=p.getBlockAncestor(n,/blockquote/i,this.editor.editNode).blockNode);)s.has(n,"dir")&&s.remove(n,"dir"),d.set(n,"marginLeft",""),d.set(n,"marginRight",""),d.set(n,"margin",""),n=n.parentNode},this),g("mozilla")&&(f("div[tempRole]",this.editor.editNode).forEach(function(t,e,i){t.parentNode.removeChild(t)}),f("ul,ol",this.editor.editNode).forEach(function(t,e,i){d.set(t,"marginLeft",""),d.set(t,"marginRight","")}))},_execOutdent:function(t){e.forEach(t.nodes,function(t){if(g("mozilla")||g("webkit")){if(!this._hasTag(t.firstChild,"SPAN"))return void(this._hasTag(t,"LI")&&(this._refineLIMargins(t),g("mozilla")&&this._hasStyledTextLineTag(t.firstChild)&&(this._recountLIMargins(t),t.firstChild.style.cssText="")));var e=!1,i=!1,r=0;if(s.has(t.firstChild,"bogusDir")){e=!0;var n=s.get(t.firstChild,"bogusDir");d.set(t,"direction",n)}if(s.has(t.firstChild,"bogusAlign")){e=!0;var o=s.get(t.firstChild,"bogusAlign");d.set(t,"textAlign",o)}if(s.has(t.firstChild,"bogusIndent")&&(e=!0,r=parseInt(s.get(t.firstChild,"bogusIndent")),!this._hasTag(t,"LI"))){var l="rtl"===d.get(t,"direction")?"marginRight":"marginLeft",h=this._getIntStyleValue(t,l)+r+"px";d.set(t,l,h)}if(s.has(t.firstChild,"bogusFormat")){e=!0;for(var f=s.get(t.firstChild,"bogusFormat"),c=a.create(f,null,t.firstChild,"after");c.nextSibling;)a.place(c.nextSibling,c,"last");this._hasTag(t,"LI")||(c.style.cssText=t.style.cssText,i=!0)}if(e&&(t.removeChild(t.firstChild),i)){for(;t.lastChild;)a.place(t.lastChild,t,"after");s.set(t,"tempRole","true")}if(g("webkit")&&this._hasTag(t,"LI")&&"center"!=d.get(t,"textAlign")&&d.set(t,"textAlign","rtl"==d.get(t,"direction")?"right":"left"),g("mozilla")&&this._hasTag(t,"LI")){var u=t.parentNode.parentNode;u!==this.editor.editNode&&this._hasTag(u,"DIV")&&1==u.childNodes.length&&(u.parentNode.insertBefore(t.parentNode,u),u.parentNode.removeChild(u))}}if(g("ie")&&this._hasTag(t,"P")&&"DIV"==this.blockMode.toUpperCase()){if(this._hasTag(t.firstChild,"SPAN")&&s.has(t.firstChild,"bogusIEFormat")){if("PRE"===s.get(t.firstChild,"bogusIEFormat").toUpperCase()){var m=a.create("pre",{innerHTML:t.innerHTML},t,"before");m.style.cssText=t.style.cssText,m.removeChild(m.firstChild),t.parentNode.removeChild(t)}else t.removeChild(t.firstChild);return}var p=a.create("div");for(p.style.cssText=t.style.cssText,t.parentNode.insertBefore(p,t);t.firstChild;)p.appendChild(t.firstChild);t.parentNode.removeChild(t)}this._hasTag(t,"LI")&&(this._refineLIMargins(t),g("mozilla")&&this._recountLIMargins(t,r))},this),(g("mozilla")||g("webkit"))&&f("div[tempRole]",this.editor.editNode).forEach(function(t,e,i){t.parentNode.removeChild(t)})},_prepareFormat:function(t,i){e.forEach(t.nodes,function(t){if(g("mozilla")&&this._hasTag(t,"LI")){if(t.firstChild&&!this._isBlockElement(t.firstChild)){var e=t.ownerDocument.createElement(i),r=t.firstChild;for(t.insertBefore(e,t.firstChild);r;)e.appendChild(r),r=r.nextSibling}var n=this._getLIIndent(t);s.set(t,"tempIndent",n)}if(g("webkit")){var o;if(this._hasTag(t,"LI")){var l=i;if(this._hasStyledTextLineTag(t.firstChild)){for(;t.firstChild.lastChild;)a.place(t.firstChild.lastChild,t.firstChild,"after");t.removeChild(t.firstChild)}o=a.create("span",{innerHTML:this.bogusHtmlContent,bogusFormat:l},t,"first")}var h=d.getComputedStyle(t),f=h.direction,c=h.textAlign;c=this._refineAlignment(f,c);var u=o?t.firstChild:a.create("span",{innerHTML:this.bogusHtmlContent},t,"first");s.set(u,"bogusDir",f),""!=c&&s.set(u,"bogusAlign",c)}},this)},_execFormatBlocks:function(t,i){e.forEach(t.nodes,function(t){if(this._hasTagFrom(t,this._lineTextArray)){if(this._hasTag(t.parentNode,"DIV")&&t.parentNode!==this.editor.editNode)for(;t.parentNode.lastChild&&(3==t.parentNode.lastChild.nodeType&&""==r.trim(t.parentNode.lastChild.nodeValue)||this._hasTag(t.parentNode.lastChild,"BR"));)t.parentNode.removeChild(t.parentNode.lastChild);if(this._hasTag(t.parentNode,"DIV")&&t.parentNode!==this.editor.editNode&&1==t.parentNode.childNodes.length){var e=t.parentNode,n=d.getComputedStyle(e),o=this._refineAlignment(n.direction,n.textAlign);d.set(t,{direction:n.direction,textAlign:o});var l="rtl"===n.direction?"marginRight":"marginLeft",h=parseInt(d.get(e,l));0==h||isNan(h)||d.set(t,l,h),e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e)}}if(this._hasTag(t,"LI")){var f=0;for(s.has(t,"tempIndent")&&(f=parseInt(s.get(t,"tempIndent")),s.remove(t,"tempIndent")),this._refineLIMargins(t),f&&this._recountLIMargins(t,f);t.childNodes.length>1&&3==t.lastChild.nodeType&&""==r.trim(t.lastChild.nodeValue);)t.removeChild(t.lastChild);if(this._hasTagFrom(t.firstChild,this._lineStyledTextArray)){n=d.getComputedStyle(t),o=this._refineAlignment(n.direction,n.textAlign);g("mozilla")||g("ie")&&this._hasTag(t,"LI")||d.set(t.firstChild,{direction:n.direction,textAlign:o})}else if(this._hasTag(t.firstChild,"DIV")){for(e=t.firstChild;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}if(g("ie")&&!this._hasTag(t.firstChild,"P")&&"<p>"===i){for(var c=a.create("p"),u=this._hasTagFrom(c.nextSibling,this._lineStyledTextArray)?c.nextSibling:t;u.firstChild;)a.place(u.firstChild,c,"last");a.place(c,t,"first"),u!==t&&t.removeChild(u)}}if(g("webkit")){if(this._hasTag(t,"DIV")){if(s.has(t,"tempRole"))return;if(this._hasTag(t.previousSibling,"LI")){for(;t.firstChild;)a.place(t.firstChild,t.previousSibling,"last");s.set(t,"tempRole",!0),t=t.previousSibling}}var m=!1;if(s.has(t.firstChild,"bogusDir")){m=!0;var p=s.get(t.firstChild,"bogusDir");d.set(t,"direction",p)}if(s.has(t.firstChild,"bogusAlign")){m=!0;o=s.get(t.firstChild,"bogusAlign");d.set(t,"textAlign",o)}if(s.has(t.firstChild,"bogusFormat")){m=!0;var C=s.get(t.firstChild,"bogusFormat");if("DIV"!==C.toUpperCase())for(u=a.create(C,null,t.firstChild,"after");u.nextSibling;)a.place(u.nextSibling,u,"last");else u=t;if(g("safari")&&this._hasTag(t.nextSibling,"DIV")){for(;t.nextSibling.firstChild;)a.place(t.nextSibling.firstChild,u,"last");s.set(t.nextSibling,"tempRole","true")}}if(m&&t.removeChild(t.firstChild),C&&this._hasTag(t,"LI")){var _=t.parentNode.parentNode;this._hasTag(_,C)&&s.set(_,"tempRole","true")}}},this),g("webkit")&&f("*[tempRole]",this.editor.editNode).forEach(function(t,e,i){for(;t.lastChild;)a.place(t.lastChild,t,"after");t.parentNode.removeChild(t)},this)},_rebuildBlock:function(t){for(var e,i,r=t.firstChild,s=!1;r;)this._isInlineOrTextElement(r)&&!this._hasTagFrom(r,this._tableContainers)?(s=!this._hasTagFrom(t,this._lineTextArray),e||(e=r),i=r):(this._isBlockElement(r)||this._hasTagFrom(r,this._tableContainers))&&(e&&(this._repackInlineElements(e,i,t),e=null),s=!0),r=r.nextSibling;s&&e&&this._repackInlineElements(e,i,t)},_repackInlineElements:function(t,e,i){var r,s=[],n=i.ownerDocument.createElement(this.blockMode),o=t.previousSibling&&1==t.previousSibling.nodeType?t.previousSibling.style.cssText:i.style.cssText,l=i===this.editor.editNode;s.push(n),t=i.replaceChild(n,t),a.place(t,n,"after"),l?d.set(n,"direction",d.get(this.editor.editNode,"direction")):n.style.cssText=o;for(var h=t;h;){var f=h.nextSibling;if(this._isInlineOrTextElement(h)&&(this._hasTag(h,"BR")&&h!==e&&(r=i.ownerDocument.createElement(this.blockMode),s.push(r),h=i.replaceChild(r,h),a.place(h,r,"after"),l?d.set(r,"direction",d.get(this.editor.editNode,"direction")):r.style.cssText=o),!this._hasTag(h,"BR")&&8!=h.nodeType||n.hasChildNodes()||(n.innerHTML=this.bogusHtmlContent),this._hasTag(h,"BR")&&g("ie")?h.parentNode.removeChild(h):8!=h.nodeType?n.appendChild(h):h.parentNode.removeChild(h),3==h.nodeType&&h.previousSibling&&3==h.previousSibling.nodeType&&(h.previousSibling.nodeValue+=h.nodeValue,h.parentNode.removeChild(h)),r&&(n=r,r=null)),h===e)break;h=f}return s},_preFilterNewLines:function(t){for(var e=t.split(/(<\/?pre.*>)/i),i=!1,r=0;r<e.length;r++)e[r].search(/<\/?pre/i)<0&&!i?e[r]=e[r].replace(/\n/g,"").replace(/\t+/g," ").replace(/^\s+/," ").replace(/\xA0\xA0+$/,""):e[r].search(/<\/?pre/i)>=0&&(i=!i);return e.join("")},_refineAlignment:function(t,e){return e=e.indexOf("left")>=0&&"rtl"==t?"left":e.indexOf("right")>=0&&"ltr"==t?"right":e.indexOf("center")>=0?"center":""},_refineLIMargins:function(t){var e,i,r=d.get(t,"direction"),s=d.get(t.parentNode,"direction"),n=0,a=t.parentNode;for(g("webkit")&&(s=d.get(this.editor.editNode,"direction"));a!==this.editor.editNode;)this._hasTagFrom(a,["OL","UL"])&&n++,a=a.parentNode;d.set(t,"marginRight",""),d.set(t,"marginLeft",""),e="rtl"==r?"marginRight":"marginLeft",i=this._getMargins(n)+"px",r!=s&&d.set(t,e,i)},_getMargins:function(t){if(0==t)return 0;var e=35;return g("mozilla")?e=45:g("ie")&&(e=25),e+40*(t-1)},_recountLIMargins:function(t,e){var i=d.get(t,"direction"),r=d.get(t.parentNode,"direction"),s="rtl"==i?"marginRight":"marginLeft",n=d.get(t,s),o=(isNaN(parseInt(n))?0:parseInt(n))+(e||0);t.firstChild&&1==t.firstChild.nodeType&&(n=d.get(t.firstChild,s),o+=isNaN(parseInt(n))?0:parseInt(n),d.set(t.firstChild,{marginLeft:"",marginRight:""})),i!=r&&(o-=this._getMargins(this._getLILevel(t)));var l=this._getListMargins(t);if(l)for(var h=0;h<l/40;h++){var g=a.create(this._tag(t.parentNode),null,t,"before");a.place(t,g,"last")}i!=r&&(o+=this._getMargins(this._getLILevel(t))),o&&d.set(t,s,o+"px")},_getLILevel:function(t){for(var e=t.parentNode,i=0;this._hasTagFrom(e,["UL","OL"]);)i++,e=e.parentNode;return i},_getLIIndent:function(t){var e=t.parentNode,i=d.get(t,"direction"),r=d.get(e,"direction"),s="rtl"===i?"marginRight":"marginLeft";return this._getIntStyleValue(t,s)-(i===r?0:this._getMargins(this._getLILevel(t)))},_getListMargins:function(t){for(var e,i,r=t.parentNode,s=0;this._hasTagFrom(r,["UL","OL"]);){e="rtl"==d.get(r,"direction")?"marginRight":"marginLeft",i=d.get(r,e),s+=isNaN(parseInt(i))?0:parseInt(i),r=r.parentNode}return s},_tag:function(t){return t&&t.tagName&&t.tagName.toUpperCase()},_hasTag:function(t,e){return t&&e&&t.tagName&&t.tagName.toUpperCase()===e.toUpperCase()},_hasStyledTextLineTag:function(t){return this._hasTagFrom(t,this._lineStyledTextArray)},_hasTagFrom:function(t,i){return t&&i&&t.tagName&&e.indexOf(i,t.tagName.toUpperCase())>=0},_getParentFrom:function(t,e){if(!t||!e||!e.length)return null;for(var i=t;i!==this.editor.editNode;){if(this._hasTagFrom(i,e))return i;i=i.parentNode}return null},_isSimpleInfo:function(t){return!t||t.groups.length<2},_isListTypeChanged:function(t,e){if(!this._hasTag(t,"LI"))return!1;var i=t.parentNode;return this._hasTag(i,"UL")&&"insertorderedlist"===e||this._hasTag(i,"OL")&&"insertunorderedlist"===e},_getIntStyleValue:function(t,e){var i=parseInt(d.get(t,e));return isNaN(i)?0:i},_mergeLists:function(){var t=p.getSelection(this.editor.window),e=t&&t.rangeCount>0;if(e)var i=t.getRangeAt(0).cloneRange(),r=i.startContainer,n=i.startOffset,o=i.endContainer,l=i.endOffset;var h=!1;if(f("ul,ol",this.editor.editNode).forEach(function(t,e,i){if(s.has(t,"tempRole"))t.parentNode.removeChild(t);else for(var r=t.nextSibling;this._hasTag(r,this._tag(t));){for(;r.firstChild;)a.place(r.firstChild,t,"last"),h=!0;s.set(r,"tempRole","true"),r=r.nextSibling}},this),e&&h){t.removeAllRanges();try{i.setStart(r,n),i.setEnd(o,l),t.addRange(i)}catch(t){}}},_cleanLists:function(){g("webkit")&&(f("table",this.editor.editNode).forEach(function(t,e,i){var r=t.nextSibling;this._hasTag(r,"UL")&&"true"===s.get(r,"tempRole")&&r.parentNode.removeChild(r)},this),f("li[tempRole]",this.editor.editNode).forEach(function(t,e,i){1==t.parentNode.childNodes.length?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t)}));var t=p.getSelection(this.editor.window),e=t&&t.rangeCount>0;if(e)var i=t.getRangeAt(0).cloneRange(),r=i.startContainer,n=i.startOffset,o=i.endContainer,l=i.endOffset;var h=!1;if(f("span[bogusDir]",this.editor.editNode).forEach(function(t,e,i){var r=t.firstChild,s=r;if(1==r.nodeType)for(;r;)s=r.nextSibling,a.place(r,t,"after"),h=!0,r=s;t.parentNode.removeChild(t)},this),e&&h){t.removeAllRanges();try{i.setStart(r,n),i.setEnd(o,l),t.addRange(i)}catch(t){}}}});return m.registry.bidiSupport=m.registry.bidisupport=function(t){return new T({})},T});
//# sourceMappingURL=../../sourcemaps/editor/plugins/BidiSupport.js.map
