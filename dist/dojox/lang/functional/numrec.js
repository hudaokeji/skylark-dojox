/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.numrec"),dojo.require("dojox.lang.functional.lambda"),dojo.require("dojox.lang.functional.util"),function(){var n=dojox.lang.functional,o=n.inlineLambda,a=["_r","_i"];n.numrec=function(i,r){var t,_,e={};"string"==typeof r?_=o(r,a,function(n){e[n]=1}):(t=n.lambda(r),_="_a.call(this, _r, _i)");var l=n.keys(e),u=new Function(["_x"],"var _t=arguments.callee,_r=_t.t,_i".concat(l.length?","+l.join(","):"",t?",_a=_t.a":"",";for(_i=1;_i<=_x;++_i){_r=",_,"}return _r"));return u.t=i,t&&(u.a=t),u}}();
//# sourceMappingURL=../../sourcemaps/lang/functional/numrec.js.map
