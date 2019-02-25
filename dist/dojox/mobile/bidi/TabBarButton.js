/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common","dojo/dom-class"],function(t,i,e){return t(null,{_setBadgeAttr:function(t){this.inherited(arguments),this.badgeObj.setTextDir(this.textDir)},_setIcon:function(t,i){this.inherited(arguments),this.iconDivNode&&!this.isLeftToRight()&&(e.remove(this.iconDivNode,"mblTabBarButtonIconArea"),e.add(this.iconDivNode,"mblTabBarButtonIconAreaRtl"))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/TabBarButton.js.map
