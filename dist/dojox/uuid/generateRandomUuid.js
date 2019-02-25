/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./_base"],function(){return dojox.uuid.generateRandomUuid=function(){var n=16;function r(){for(var r=Math.floor(Math.random()%1*Math.pow(2,32)).toString(n);r.length<8;)r="0"+r;return r}var t=r(),o=r();o=o.substring(0,4)+"-4"+o.substring(5,8);var u=r(),e=t+"-"+o+"-"+(u="8"+u.substring(1,4)+"-"+u.substring(4,8))+r();return e=e.toLowerCase()},dojox.uuid.generateRandomUuid});
//# sourceMappingURL=../sourcemaps/uuid/generateRandomUuid.js.map
