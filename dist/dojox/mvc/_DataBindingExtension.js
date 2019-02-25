/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/aspect","dojo/_base/lang","dijit/_WidgetBase","./_DataBindingMixin"],function(t,e,a,n,o){a.extend(n,new o),e.before(n.prototype,"startup",function(){this._dbstartup()}),e.before(n.prototype,"destroy",function(){this._modelWatchHandles&&t.forEach(this._modelWatchHandles,function(t){t.unwatch()}),this._viewWatchHandles&&t.forEach(this._viewWatchHandles,function(t){t.unwatch()})})});
//# sourceMappingURL=../sourcemaps/mvc/_DataBindingExtension.js.map
