/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base","./ArrayList"],function(t,n){return t.Set=new function(){function t(t){return t.constructor==Array?new n(t):t}this.union=function(r,e){r=t(r),e=t(e);for(var a=new n(r.toArray()),i=e.getIterator();!i.atEnd();){var o=i.get();a.contains(o)||a.add(o)}return a},this.intersection=function(r,e){r=t(r),e=t(e);for(var a=new n,i=e.getIterator();!i.atEnd();){var o=i.get();r.contains(o)&&a.add(o)}return a},this.difference=function(r,e){r=t(r),e=t(e);for(var a=new n,i=r.getIterator();!i.atEnd();){var o=i.get();e.contains(o)||a.add(o)}return a},this.isSubSet=function(n,r){n=t(n),r=t(r);for(var e=n.getIterator();!e.atEnd();)if(!r.contains(e.get()))return!1;return!0},this.isSuperSet=function(n,r){n=t(n);for(var e=(r=t(r)).getIterator();!e.atEnd();)if(!n.contains(e.get()))return!1;return!0}},t.Set});
//# sourceMappingURL=../sourcemaps/collections/Set.js.map
