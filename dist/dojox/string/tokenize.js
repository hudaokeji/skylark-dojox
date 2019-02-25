/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/sniff"],function(e,n){e.getObject("dojox.string",!0).tokenize;return function(e,t,l,o){for(var s,i,a=[],r=0;s=t.exec(e);){if((i=e.slice(r,t.lastIndex-s[0].length)).length&&a.push(i),l){if(n("opera")){for(var c=s.slice(0);c.length<s.length;)c.push(null);s=c}var h=l.apply(o,s.slice(1).concat(a.length));void 0!==h&&a.push(h)}r=t.lastIndex}return(i=e.slice(r)).length&&a.push(i),a}});
//# sourceMappingURL=../sourcemaps/string/tokenize.js.map
