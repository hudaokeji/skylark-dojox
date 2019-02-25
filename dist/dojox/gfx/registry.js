/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/has","./shape"],function(e,r){e.add("gfxRegistry",1);var n={},i={},d={};return n.register=r.register=function(e){var r=e.declaredClass.split(".").pop(),n=r+(r in i?++i[r]:i[r]=0);return d[n]=e,n},n.byId=r.byId=function(e){return d[e]},n.dispose=r.dispose=function(e,r){if(r&&e.children)for(var i=0;i<e.children.length;++i)n.dispose(e.children[i],!0);var s=e.getUID();d[s]=null,delete d[s]},n});
//# sourceMappingURL=../sourcemaps/gfx/registry.js.map
