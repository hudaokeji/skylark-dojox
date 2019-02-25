/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/SpinWheelSlot","dojo/touch","dojo/on","dijit/_Contained","dijit/_WidgetBase","./scrollable","./common"],function(e,t,i,s,o,n,h,a,l,r,d,c,u){var p=i(h("dojo-bidi")?"dojox.mobile.NonBidiSpinWheelSlot":"dojox.mobile.SpinWheelSlot",[c,d,u],{items:[],labels:[],labelFrom:0,labelTo:0,zeroPad:0,value:"",step:1,pageSteps:1,baseClass:"mblSpinWheelSlot",maxSpeed:500,minItems:15,centerPos:0,scrollBar:!1,constraint:!1,propagatable:!1,androidWorkaroud:!1,buildRendering:function(){var e,t;if(this.inherited(arguments),this.initLabels(),this.labels.length>0)for(this.items=[],e=0;e<this.labels.length;e++)this.items.push([e,this.labels[e]]);this.containerNode=n.create("div",{className:"mblSpinWheelSlotContainer"}),this.containerNode.style.height=2*(s.global.innerHeight||s.doc.documentElement.clientHeight)+"px",this.panelNodes=[];for(var i=0;i<3;i++){this.panelNodes[i]=n.create("div",{className:"mblSpinWheelSlotPanel"}),this.panelNodes[i].setAttribute("aria-hidden","true");var a=this.items.length;if(a>0){var d=Math.ceil(this.minItems/a);for(t=0;t<d;t++)for(e=0;e<a;e++)n.create("div",{className:"mblSpinWheelSlotLabel",name:this.items[e][0],"data-mobile-val":this.items[e][1],innerHTML:this._cv?this._cv(this.items[e][1]):this.items[e][1]},this.panelNodes[i])}this.containerNode.appendChild(this.panelNodes[i])}if(this.domNode.appendChild(this.containerNode),this.touchNode=n.create("div",{className:"mblSpinWheelSlotTouch"},this.domNode),this.setSelectable(this.domNode,!1),this.touchNode.setAttribute("tabindex",0),this.touchNode.setAttribute("role","slider"),""===this.value&&this.items.length>0&&(this.value=this.items[0][1]),this._initialValue=this.value,h("windows-theme")){var c=this,u=this.containerNode;this.own(r(c.touchNode,l.press,function(e){for(var t=e.pageY,i=c.getParent().getChildren(),s=0,n=i.length;s<n;s++){var h=i[s].containerNode;u!==h?(o.remove(h,"mblSelectedSlot"),h.selected=!1):o.add(u,"mblSelectedSlot")}var a=r(c.touchNode,l.move,function(e){if(!(Math.abs(e.pageY-t)<5)){a.remove(),d.remove(),u.selected=!0;var i=c.getCenterItem();i&&o.remove(i,"mblSelectedSlotItem")}}),d=r(c.touchNode,l.release,function(){d.remove(),a.remove(),u.selected?o.remove(u,"mblSelectedSlot"):o.add(u,"mblSelectedSlot"),u.selected=!u.selected})})),this.on("flickAnimationEnd",function(){var e=c.getCenterItem();c.previousCenterItem&&o.remove(c.previousCenterItem,"mblSelectedSlotItem"),o.add(e,"mblSelectedSlotItem"),c.previousCenterItem=e})}},startup:function(){if(!this._started){if(this.inherited(arguments),this.noResize=!0,this.items.length>0){this.init(),this.centerPos=this.getParent().centerPos;var e=this.panelNodes[1].childNodes;this._itemHeight=e[0].offsetHeight,this.adjust(),this.connect(this.touchNode,"onkeydown","_onKeyDown")}h("windows-theme")&&(this.previousCenterItem=this.getCenterItem(),this.previousCenterItem&&o.add(this.previousCenterItem,"mblSelectedSlotItem"))}},initLabels:function(){if(this.labelFrom!==this.labelTo)for(var e=this.labels=[],t=this.zeroPad&&Array(this.zeroPad).join("0"),i=this.labelFrom;i<=this.labelTo;i+=this.step)e.push(this.zeroPad?(t+i).slice(-this.zeroPad):i+"")},onTouchStart:function(e){this.touchNode.focus(),this.inherited(arguments)},adjust:function(){for(var e,t=this.panelNodes[1].childNodes,i=0,s=t.length;i<s;i++){var o=t[i];if(o.offsetTop<=this.centerPos&&this.centerPos<o.offsetTop+o.offsetHeight){e=this.centerPos-(o.offsetTop+Math.round(o.offsetHeight/2));break}}var n=this.panelNodes[0].offsetHeight;this.panelNodes[0].style.top=-n+e+"px",this.panelNodes[1].style.top=e+"px",this.panelNodes[2].style.top=n+e+"px"},setInitialValue:function(){this.set("value",this._initialValue),this.touchNode.setAttribute("aria-valuetext",this._initialValue)},_onKeyDown:function(e){if(!e||"keydown"!==e.type||e.altKey||e.ctrlKey||e.shiftKey)return!0;switch(e.keyCode){case 38:case 39:return this.spin(1),e.stopPropagation(),!1;case 40:case 37:return this.spin(-1),e.stopPropagation(),!1;case 33:return this.spin(this.pageSteps),e.stopPropagation(),!1;case 34:return this.spin(-1*this.pageSteps),e.stopPropagation(),!1}return!0},_getCenterPanel:function(){for(var e=this.getPos(),t=0,i=this.panelNodes.length;t<i;t++){var s=e.y+this.panelNodes[t].offsetTop;if(s<=this.centerPos&&this.centerPos<s+this.panelNodes[t].offsetHeight)return this.panelNodes[t]}return null},setColor:function(e,i){t.forEach(this.panelNodes,function(s){t.forEach(s.childNodes,function(t,s){o.toggle(t,i||"mblSpinWheelSlotLabelBlue",t.innerHTML===e)},this)},this)},disableValues:function(e){t.forEach(this.panelNodes,function(t){for(var i=0;i<t.childNodes.length;i++)o.toggle(t.childNodes[i],"mblSpinWheelSlotLabelGray",i>=e)})},getCenterItem:function(){var e=this.getPos(),t=this._getCenterPanel();if(t)for(var i=e.y+t.offsetTop,s=t.childNodes,o=0,n=s.length;o<n;o++)if(i+s[o].offsetTop<=this.centerPos&&this.centerPos<i+s[o].offsetTop+s[o].offsetHeight)return s[o];return null},_getKeyAttr:function(){if(!this._started){if(this.items){this.value;for(var e=0;e<this.items.length;e++)if(this.items[e][1]==this.value)return this.items[e][0]}return null}var t=this.getCenterItem();return t&&t.getAttribute("name")},_getValueAttr:function(){if(!this._started)return this.value;if(this.items.length>0){var e=this.getCenterItem();return e&&e.getAttribute("data-mobile-val")}return this._initialValue},_setValueAttr:function(e){this.items.length>0&&this._spinToValue(e,!0)},_spinToValue:function(e,t){var i,s,o=this.get("value");if(o){if(o!=e){this._pendingValue=void 0,t&&this._set("value",e);for(var n=this.items.length,h=0;h<n&&(this.items[h][1]===String(o)&&(i=h),this.items[h][1]===String(e)&&(s=h),void 0===i||void 0===s);h++);var a,l=s-(i||0);a=l>0?l<n-l?-l:n-l:-l<n+l?-l:-(n+l),this.spin(a)}}else this._pendingValue=e},onFlickAnimationStart:function(e){this._onFlickAnimationStartCalled=!0,this.inherited(arguments)},onFlickAnimationEnd:function(e){this._duringSlideTo=!1,this._onFlickAnimationStartCalled=!1,this.inherited(arguments),this.touchNode.setAttribute("aria-valuetext",this.get("value"))},spin:function(e){if(this._started&&!this._duringSlideTo){var t=this.getPos();t.y+=e*this._itemHeight,this.slideTo(t,1)}},getSpeed:function(){var e=0,t=this._time.length,i=(new Date).getTime()-this.startTime-this._time[t-1];if(t>=2&&i<200){var s=this._posY[t-1]-this._posY[t-6>=0?t-6:0],o=this._time[t-1]-this._time[t-6>=0?t-6:0];e=this.calcSpeed(s,o)}return{x:0,y:e}},calcSpeed:function(e,t){var i=this.inherited(arguments);if(!i)return 0;var s=Math.abs(i),o=i;return s>this.maxSpeed&&(o=this.maxSpeed*(i/s)),o},adjustDestination:function(e,t,i){var s=this._itemHeight,o=e.y+Math.round(s/2),n=o>=0?o%s:o%s+s;return e.y=o-n,!0},resize:function(e){if(this.panelNodes&&this.panelNodes.length>0){var t=this.panelNodes[1].childNodes;if(t.length>0&&!h("windows-theme")){var i=this.getParent();i&&(this._itemHeight=t[0].offsetHeight,this.centerPos=i.centerPos,this.panelNodes[0].style.top||this.adjust())}}this._pendingValue&&this.set("value",this._pendingValue)},slideTo:function(e,t,i){this._duringSlideTo=!0;var s,o=this.getPos(),n=o.y+this.panelNodes[1].offsetTop,h=n+this.panelNodes[1].offsetHeight,a=this.domNode.parentNode.offsetHeight;o.y<e.y?h>a&&((s=this.panelNodes[2]).style.top=this.panelNodes[0].offsetTop-this.panelNodes[0].offsetHeight+"px",this.panelNodes[2]=this.panelNodes[1],this.panelNodes[1]=this.panelNodes[0],this.panelNodes[0]=s):o.y>e.y&&n<0&&((s=this.panelNodes[0]).style.top=this.panelNodes[2].offsetTop+this.panelNodes[2].offsetHeight+"px",this.panelNodes[0]=this.panelNodes[1],this.panelNodes[1]=this.panelNodes[2],this.panelNodes[2]=s),this.getParent()._duringStartup?t=0:Math.abs(this._speed.y)<40&&(t=.2),t&&t>0?(this.inherited(arguments,[e,t,i]),this._onFlickAnimationStartCalled||(this._duringSlideTo=!1)):(this.onFlickAnimationStart(),this.scrollTo(e,!0),this.onFlickAnimationEnd())}});return h("dojo-bidi")?i("dojox.mobile.SpinWheelSlot",[p,a]):p});
//# sourceMappingURL=../sourcemaps/mobile/SpinWheelSlot.js.map
