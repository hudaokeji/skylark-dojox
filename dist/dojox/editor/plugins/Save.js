/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/form/Button","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/Save"],function(t,o,i,s){var e=t.declare("dojox.editor.plugins.Save",s,{iconClassPrefix:"dijitAdditionalEditorIcon",url:"",logResults:!0,_initButton:function(){var i=t.i18n.getLocalization("dojox.editor.plugins","Save");this.button=new o.form.Button({label:i.save,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Save",tabIndex:"-1",onClick:t.hitch(this,"_save")})},updateState:function(){this.button.set("disabled",this.get("disabled"))},setEditor:function(t){this.editor=t,this._initButton()},_save:function(){var t=this.editor.get("value");this.save(t)},save:function(o){if(this.url){var i={url:this.url,postData:o,headers:{"Content-Type":"text/html"},handleAs:"text"};this.button.set("disabled",!0);var s=t.xhrPost(i);s.addCallback(t.hitch(this,this.onSuccess)),s.addErrback(t.hitch(this,this.onError))}else console.log("No URL provided, no post-back of content: "+o)},onSuccess:function(t,o){this.button.set("disabled",!1),this.logResults&&console.log(t)},onError:function(t,o){this.button.set("disabled",!1),this.logResults&&console.log(t)}});return t.subscribe(o._scopeName+".Editor.getPlugin",null,function(t){t.plugin||"save"===t.args.name.toLowerCase()&&(t.plugin=new e({url:"url"in t.args?t.args.url:"",logResults:!("logResults"in t.args)||t.args.logResults}))}),e});
//# sourceMappingURL=../../sourcemaps/editor/plugins/Save.js.map
