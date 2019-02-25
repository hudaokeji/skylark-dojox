/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dojo/dom-style"],function(e,t,n){return e("dojox.treemap.GroupLabel",null,{createRenderer:function(e,o,r){var i=this.inherited(arguments);if("content"==r||"leaf"==r){var a=t.create("div");n.set(a,{zIndex:30,position:"relative",height:"100%",textAlign:"center",top:"50%",marginTop:"-.5em"}),t.place(a,i)}return i},styleRenderer:function(e,t,o,r){switch(r){case"leaf":n.set(e,"background",this.getColorForItem(t).toHex());case"content":e.firstChild.innerHTML=0==o?this.getLabelForItem(t):null;break;case"header":n.set(e,"display","none")}}})});
//# sourceMappingURL=../sourcemaps/treemap/GroupLabel.js.map
