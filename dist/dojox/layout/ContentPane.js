/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/xhr","dijit/layout/ContentPane","dojox/html/_base","dojo/_base/declare"],function(t,e,n,o,r){return r("dojox.layout.ContentPane",n,{adjustPaths:!1,cleanContent:!1,renderStyles:!1,executeScripts:!0,scriptHasHooks:!1,ioMethod:e.get,ioArgs:{},onExecError:function(t){},_setContent:function(e){var n=this._contentSetter;return n&&n instanceof o._ContentSetter||(n=this._contentSetter=new o._ContentSetter({node:this.containerNode,_onError:t.hitch(this,this._onError),onContentError:t.hitch(this,function(t){var e=this.onContentError(t);try{this.containerNode.innerHTML=e}catch(t){console.error("Fatal "+this.id+" could not change content due to "+t.message,t)}})})),this._contentSetterParams={adjustPaths:Boolean(this.adjustPaths&&(this.href||this.referencePath)),referencePath:this.href||this.referencePath,renderStyles:this.renderStyles,executeScripts:this.executeScripts,scriptHasHooks:this.scriptHasHooks,scriptHookReplacement:"dijit.byId('"+this.id+"')"},this.inherited("_setContent",arguments)},destroy:function(){var t=this._contentSetter;t&&t.tearDown(),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/layout/ContentPane.js.map
