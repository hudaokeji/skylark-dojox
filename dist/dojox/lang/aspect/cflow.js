/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.aspect.cflow"),function(){var t=dojox.lang.aspect;t.cflow=function(n,e){arguments.length>1&&!(e instanceof Array)&&(e=[e]);for(var r=t.getContextStack(),o=r.length-1;o>=0;--o){var a=r[o];if(!n||a.instance==n){if(!e)return!0;for(var f=a.joinPoint.targetName,i=e.length-1;i>=0;--i){var c=e[i];if(c instanceof RegExp){if(c.test(f))return!0}else if(f==c)return!0}}}return!1}}();
//# sourceMappingURL=../../sourcemaps/lang/aspect/cflow.js.map
