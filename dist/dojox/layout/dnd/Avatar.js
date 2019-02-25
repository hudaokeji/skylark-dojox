/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.layout.dnd.Avatar"),dojo.require("dojo.dnd.Avatar"),dojo.require("dojo.dnd.common"),dojo.declare("dojox.layout.dnd.Avatar",dojo.dnd.Avatar,{constructor:function(o,d){this.opacity=d||.9},construct:function(){var o=this.manager.source,d=o.creator?o._normalizedCreator(o.getItem(this.manager.nodes[0].id).data,"avatar").node:this.manager.nodes[0].cloneNode(!0);dojo.addClass(d,"dojoDndAvatar"),d.id=dojo.dnd.getUniqueId(),d.style.position="absolute",d.style.zIndex=1999,d.style.margin="0px",d.style.width=dojo.marginBox(o.node).w+"px",dojo.style(d,"opacity",this.opacity),this.node=d},update:function(){dojo.toggleClass(this.node,"dojoDndAvatarCanDrop",this.manager.canDropFlag)},_generateText:function(){}});
//# sourceMappingURL=../../sourcemaps/layout/dnd/Avatar.js.map
