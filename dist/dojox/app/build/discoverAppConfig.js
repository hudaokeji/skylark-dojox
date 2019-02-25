/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["build/argv","build/fs","build/buildControl","build/messages","build/process","dojox/json/ref"],function(e,l,o,n,r,s){var i=function(e,l,n,r){for(var s in n)if(0!=s.indexOf("_")){var a=n[s];if(a.controller&&"none"!=a.controller){var t=a.controller.replace(/(\.js)$/,"");!o.layers[t]&&o.multipleAppConfigLayers&&(o.layers[t]={include:[],exclude:["dojo/dojo",l]},e=o.layers[t].include),e.push(t)}a.template&&(r.text||(r.text=!0,o.layers[l].include.push("dojo/text")),e.push(a.template)),a.nls&&(r.nls||(r.nls=!0,o.layers[l].include.push("dojo/i18n")),e.push(a.nls)),a.dependencies&&Array.prototype.splice.apply(e,[e.length,0].concat(a.dependencies)),a.views&&i(e,l,a.views,r)}};return function(){var a;try{a=s.fromJson(l.readFileSync(o.getSrcModuleInfo(e.args.appConfigFile,null,!1).url))}catch(e){console.log(e)}if(a){var t,p=[],c={};if(a.loaderConfig&&require(a.loaderConfig),e.args.appConfigLayer)t=e.args.appConfigLayer,o.layers[t]||(o.layers[t]={include:[],exclude:["dojo/dojo"]});else for(var d in o.layers){t=d;break}a.dependencies&&(p=p.concat(a.dependencies)),a.controllers&&(p=p.concat(a.controllers)),a.modules&&(p=p.concat(a.modules)),a.transit?p.push(a.transit):p.push("dojox/css3/transit"),a.template&&(c.text=!0,o.layers[t].include.push("dojo/text"),p.push(a.template)),a.controller&&"none"!=a.controller&&p.push(a.controller.replace(/(\.js)$/,"")),a.nls&&(c.nls=!0,o.layers[t].include.push("dojo/i18n"),p.push(a.nls)),a.view?p.push(a.view):p.push("dojox/app/View"),a.views&&i(p,t,a.views,c),Array.prototype.splice.apply(o.layers[t].include,[o.layers[t].length,0].concat(p))}else n.log("pacify",e.args.appConfigFile+" is not a valid dojox/app JSON config file"),r.exit(-1)}});
//# sourceMappingURL=../../sourcemaps/app/build/discoverAppConfig.js.map
