/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/registry","dojox/mvc/getStateful","dojox/mvc/ListController","dojox/mvc/StoreRefController"],function(e,t,i,o,r){return e([o,r],{summaryScrollableViewId:"",detailScrollableViewId:"",initialFocusElementId:"",setDetailsContext:function(e){this.set("cursorId",e),t.byId(this.initialFocusElementId).focus()},addEmpty:function(){var e=i({uniqueId:""+Math.random(),First:"",Last:"",Location:"CA",Office:"",Email:"",Tel:"",Fax:""});this[this._refInModelProp].push(e),this.set("cursor",e),t.byId(this.summaryScrollableViewId).performTransition(this.detailScrollableViewId,1,"none"),t.byId(this.initialFocusElementId).focus()},remove:function(e){for(var t=this[this._refInModelProp],i=0;i<t.length;i++)if(t[i][this.idProperty]==e)return t.splice(i,1),void(i<this[this._refInModelProp].get("length")&&this.set("cursorIndex",i))}})});
//# sourceMappingURL=../../../../sourcemaps/mvc/tests/mobile/demo/MobileDemoContactListController.js.map
