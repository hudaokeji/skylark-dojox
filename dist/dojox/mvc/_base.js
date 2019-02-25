/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","./getStateful","./StatefulModel","./Bind","./_DataBindingMixin","./_patches"],function(t,e,n,o){t.experimental("dojox.mvc");var r=e.getObject("dojox.mvc",!0);return r.newStatefulModel=function(t){if(t.data)return n(t.data,o.getStatefulOptions);if(t.store&&e.isFunction(t.store.query)){var r,a=t.store.query(t.query);return a.then?a.then(function(e){return(r=n(e,o.getStatefulOptions)).store=t.store,r}):((r=n(a,o.getStatefulOptions)).store=t.store,r)}},r});
//# sourceMappingURL=../sourcemaps/mvc/_base.js.map
