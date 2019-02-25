/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date/stamp","dojox"],function(array,djson,dojo,lang,stamp,dojox){return lang.getObject("json",!0,dojox),dojox.json.ref={resolveJson:function(t,e){var r,n=(e=e||{}).idAttribute||"id",o=this.refAttribute,i=e.idAsRef,a=e.idPrefix||"",s=e.assignAbsoluteIds,f=e.index||{},d=e.timeStamps,c=[],p=/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,u=this._addProp,l=function(){};function _(h,v,g,y,j,b){var m,A,$,S=n in h?h[n]:g;(n in h||void 0!==S&&y)&&(S=(a+S).replace(p,"$2$3"));var O=b||h;if(void 0!==S){if(s&&(h.__id=S),!e.schemas||h instanceof Array||!($=S.match(/^(.+\/)[^\.\[]*$/))||(j=e.schemas[$[1]]),f[S]&&h instanceof Array==f[S]instanceof Array)delete(O=f[S]).$ref,delete O._loadObject,A=!0;else{var x=j&&j.prototype;x&&(l.prototype=x,O=new l)}f[S]=O,d&&(d[S]=e.time)}for(;j;){var w=j.properties;if(w)for(m in h){var J=w[m];J&&"date-time"==J.format&&"string"==typeof h[m]&&(h[m]=stamp.fromISOString(h[m]))}j=j.extends}var P=h.length;for(m in h){if(m==P)break;if(h.hasOwnProperty(m)){if("object"==typeof($=h[m])&&$&&!($ instanceof Date)&&"__parent"!=m)if((r=$[o]||i&&$[n])&&$.__parent||h!=c&&($.__parent=O),r){delete h[m];var I,D=r.toString().replace(/(#)([^\.\[])/,"$1.$2").match(/(^([^\[]*\/)?[^#\.\[]*)#?([\.\[].*)?/);if(f[(a+r).replace(p,"$2$3")]?r=f[(a+r).replace(p,"$2$3")]:(r="$"==D[1]||"this"==D[1]||""==D[1]?t:f[(a+D[1]).replace(p,"$2$3")])&&D[3]&&D[3].replace(/(\[([^\]]+)\])|(\.?([^\.\[]+))/g,function(t,e,n,o,i){r=r&&r[n?n.replace(/[\"\'\\]/,""):i]}),r)$=r;else if(!v)I||c.push(O),I=!0,($=_($,!1,$[o],!0,J))._loadObject=e.loader}else v||($=_($,c==h,void 0===S?void 0:u(S,m),!1,J,O!=h&&"object"==typeof O[m]&&O[m]));if(h[m]=$,O!=h&&!O.__isDirty){var U=O[m];O[m]=$,!A||$===U||O._loadObject||"_"==m.charAt(0)&&"_"==m.charAt(1)||"$ref"==m||$ instanceof Date&&U instanceof Date&&$.getTime()==U.getTime()||"function"==typeof $&&"function"==typeof U&&$.toString()==U.toString()||!f.onUpdate||f.onUpdate(O,m,U,$)}}}if(A&&(n in h||O instanceof Array)){for(m in O)if(!O.__isDirty&&O.hasOwnProperty(m)&&!h.hasOwnProperty(m)&&("_"!=m.charAt(0)||"_"!=m.charAt(1))&&!(O instanceof Array&&isNaN(m)))for(f.onUpdate&&"_loadObject"!=m&&"_idAttr"!=m&&f.onUpdate(O,m,O[m],void 0),delete O[m];O instanceof Array&&O.length&&void 0===O[O.length-1];)O.length--}else f.onLoad&&f.onLoad(O);return O}return t&&"object"==typeof t&&(t=_(t,!1,e.defaultId,!0),_(c,!1)),t},fromJson:function(str,args){function ref(t){var e={};return e[this.refAttribute]=t,e}try{var root=eval("("+str+")")}catch(t){throw new SyntaxError("Invalid JSON string: "+t.message+" parsing: "+str)}return root?this.resolveJson(root,args):root},toJson:function(t,e,r,n){var o=this._useRefs,i=this._addProp,a=this.refAttribute;r=r||"";var s={},f={};var d=function t(n,d,c){if("object"==typeof n&&n){if(n instanceof Date)return'"'+stamp.toISOString(n,{zulu:!0})+'"';var p=n.__id;if(p){if("#"!=d&&(o&&!p.match(/#/)||s[p])){var u=p;"#"!=p.charAt(0)&&(u=n.__clientId==p?"cid:"+p:p.substring(0,r.length)==r?p.substring(r.length):p);var l={};return l[a]=u,djson.toJson(l,e)}d=p}else n.__id=d,f[d]=n;s[d]=n,c=c||"";var _=e?c+djson.toJsonIndentStr:"",h=e?"\n":"",v=e?" ":"";if(n instanceof Array)return"["+array.map(n,function(e,r){var n=t(e,i(d,r),_);return"string"!=typeof n&&(n="undefined"),h+_+n}).join(","+v)+h+c+"]";var g=[];for(var y in n)if(n.hasOwnProperty(y)){var j;if("number"==typeof y)j='"'+y+'"';else{if("string"!=typeof y||"_"==y.charAt(0)&&"_"==y.charAt(1))continue;j=djson._escapeString(y)}var b=t(n[y],i(d,y),_);if("string"!=typeof b)continue;g.push(h+_+j+":"+v+b)}return"{"+g.join(","+v)+h+c+"}"}return"function"==typeof n&&dojox.json.ref.serializeFunctions?n.toString():djson.toJson(n)}(t,"#","");if(!n)for(var c in f)delete f[c].__id;return d},_addProp:function(t,e){return t+(t.match(/#/)?1==t.length?"":".":"#")+e},refAttribute:"$ref",_useRefs:!1,serializeFunctions:!1}});
//# sourceMappingURL=../sourcemaps/json/ref.js.map
