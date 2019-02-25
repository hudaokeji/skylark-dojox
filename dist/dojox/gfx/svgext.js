/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/_base/array","dojo/_base/window","./_base","./svg"],function(e,t,i,r,n){var s=r.svgext={},o={primitives:null,tag:null,children:null};return n.Shape.extend({addRenderingOption:function(e,t){return this.rawNode.setAttribute(e,t),this},setFilter:function(i){if(!i)return this.rawNode.removeAttribute("filter"),this.filter=null,this;this.filter=i,i.id=i.id||r._base._getUniqueId();var s=e.byId(i.id);if(!s){for(var a in(s=this.rawNode.ownerDocument.createElementNS(n.xmlns.svg,"filter")).setAttribute("filterUnits","userSpaceOnUse"),i)a in o||s.setAttribute(a,i[a]);t.forEach(i.primitives,function(e){!function e(i,r){var s=r.ownerDocument.createElementNS(n.xmlns.svg,i.tag);for(var a in r.appendChild(s),i)a in o||s.setAttribute(a,i[a]);return i.children&&t.forEach(i.children,function(t){e(t,s)}),s}(e,s)});var d=this._getParentSurface();if(d)d.defNode.appendChild(s)}return this.rawNode.setAttribute("filter","url(#"+i.id+")"),this},getFilter:function(){return this.filter}}),s});
//# sourceMappingURL=../sourcemaps/gfx/svgext.js.map
