/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","./_base","./regexp"],function(e,t,r){var n=e.getObject("us",!0,t);return n.isState=function(e,t){return new RegExp("^"+r.us.state(t)+"$","i").test(e)},n.isPhoneNumber=function(e){return t.isNumberFormat(e,{format:["###-###-####","(###) ###-####","(###) ### ####","###.###.####","###/###-####","### ### ####","###-###-#### x#???","(###) ###-#### x#???","(###) ### #### x#???","###.###.#### x#???","###/###-#### x#???","### ### #### x#???","##########"]})},n.isSocialSecurityNumber=function(e){return t.isNumberFormat(e,{format:["###-##-####","### ## ####","#########"]})},n.isZipCode=function(e){return t.isNumberFormat(e,{format:["#####-####","##### ####","#########","#####"]})},n});
//# sourceMappingURL=../sourcemaps/validate/us.js.map
