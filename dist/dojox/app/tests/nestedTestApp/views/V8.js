/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/dom","dojo/dom-style","dojo/_base/connect","dijit/registry","dojo/sniff"],function(t,i,o,n,e){var r=[],s=null;return{init:function(){s=this.app;var i=o.connect(t.byId("sc8insert10x"),"click",function(){s&&(s.listStart||(s.listStart=1,s.listCount=5),setTimeout(function(){for(var t=s.listStart;t<s.listStart+5;t++){var i={label:"Item #"+t};s.stores.longlistStore.store.put(i)}return s.listStart+=s.listCount,s.listTotal=s.listStart-1,!1},500))});r.push(i)},beforeActivate:function(){t.byId("sc8back1")&&!e("phone")&&i.set(t.byId("sc8back1"),"visibility","hidden")},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){for(var t=r.pop();t;)o.disconnect(t),t=r.pop()}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/nestedTestApp/views/V8.js.map
