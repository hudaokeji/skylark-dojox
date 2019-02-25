/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.demos.widgets.FlickrViewList"),dojo.require("dojox.dtl._Templated"),dojo.require("dijit._Widget"),dojo.declare("dojox.data.demos.widgets.FlickrViewList",[dijit._Widget,dojox.dtl._Templated],{store:null,items:null,templateString:dojo.cache("dojox","data/demos/widgets/templates/FlickrViewList.html"),fetch:function(e){return e.onComplete=dojo.hitch(this,"onComplete"),e.onError=dojo.hitch(this,"onError"),this.store.fetch(e)},onError:function(){console.trace(),this.items=[],this.render()},onComplete:function(e,o){this.items=e||[],this.render()}});
//# sourceMappingURL=../../../sourcemaps/data/demos/widgets/FlickrViewList.js.map
