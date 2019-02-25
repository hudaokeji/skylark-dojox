/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define([],function(){var t=null,e=null;return{setDetailsContext:function(s){parseInt(s)<t.data.length&&(e=t.data[s],this.First.set("value",e.First),this.Last.set("value",e.Last),this.Email.set("value",e.Email),this.Tel.set("value",e.Tel))},init:function(){t=this.loadedStores.listStore},beforeActivate:function(){(this.params.cursor||0==this.params.cursor)&&this.setDetailsContext(this.params.cursor)},beforeDeactivate:function(){e.label=this.First.get("value")+" "+this.Last.get("value"),e.First=this.First.get("value"),e.Last=this.Last.get("value"),e.Email=this.Email.get("value"),e.Tel=this.Tel.get("value"),t.put(e)}}});
//# sourceMappingURL=../../../../sourcemaps/app/tests/layoutApp/views/itemDetails.js.map
