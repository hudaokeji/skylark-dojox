/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/_base/array","dojo/_base/xhr","dojo/_base/sniff","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/xml/parser"],function(t,e,o,r,s,n,i,a,l,d){var h=e("dojox.data.HtmlTableStore",null,{constructor:function(e){if(t.deprecated("dojox.data.HtmlTableStore","Please use dojox.data.HtmlStore"),e.url){if(!e.tableId)throw new Error("dojo.data.HtmlTableStore: Cannot instantiate using url without an id!");this.url=e.url,this.tableId=e.tableId}else{e.tableId?(this._rootNode=r.byId(e.tableId),this.tableId=this._rootNode.id):this._rootNode=r.byId(this.tableId),this._getHeadings();for(var o=0;o<this._rootNode.rows.length;o++)this._rootNode.rows[o].store=this}},url:"",tableId:"",_getHeadings:function(){this._headings=[],s.forEach(this._rootNode.tHead.rows[0].cells,o.hitch(this,function(t){this._headings.push(d.textContent(t))}))},_getAllItems:function(){for(var t=[],e=1;e<this._rootNode.rows.length;e++)t.push(this._rootNode.rows[e]);return t},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojo.data.HtmlTableStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojo.data.HtmlTableStore: a function was passed an attribute argument that was not an attribute name string");return s.indexOf(this._headings,t)},getValue:function(t,e,o){var r=this.getValues(t,e);return r.length>0?r[0]:o},getValues:function(t,e){this._assertIsItem(t);var o=this._assertIsAttribute(e);return o>-1?[d.textContent(t.cells[o])]:[]},getAttributes:function(t){this._assertIsItem(t);for(var e=[],o=0;o<this._headings.length;o++)this.hasAttribute(t,this._headings[o])&&e.push(this._headings[o]);return e},hasAttribute:function(t,e){return this.getValues(t,e).length>0},containsValue:function(t,e,o){var r=void 0;return"string"==typeof o&&(r=l.patternToRegExp(o,!1)),this._containsValue(t,e,o,r)},_containsValue:function(t,e,o,r){for(var s=this.getValues(t,e),n=0;n<s.length;++n){var i=s[n];if("string"==typeof i&&r)return null!==i.match(r);if(o===i)return!0}return!1},isItem:function(t){return!(!t||!t.store||t.store!==this)},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){this._assertIsItem(t.item)},_fetchItems:function(t,e,o){if(this._rootNode)this._finishFetchItems(t,e,o);else if(this.url){var s={url:this.url,handleAs:"text"},i=this,a=n.get(s);a.addCallback(function(r){var s=function(t,e){if(t.id==e)return t;if(t.childNodes)for(var o=0;o<t.childNodes.length;o++){var r=s(t.childNodes[o],e);if(r)return r}return null},n=document.createElement("div");n.innerHTML=r,i._rootNode=s(n,i.tableId),i._getHeadings.call(i);for(var a=0;a<i._rootNode.rows.length;a++)i._rootNode.rows[a].store=i;i._finishFetchItems(t,e,o)}),a.addErrback(function(e){o(e,t)})}else{this._rootNode=r.byId(this.tableId),this._getHeadings();for(var l=0;l<this._rootNode.rows.length;l++)this._rootNode.rows[l].store=this}},_finishFetchItems:function(t,e,o){var r=null,s=this._getAllItems();if(t.query){var n=!!t.queryOptions&&t.queryOptions.ignoreCase;r=[];var i,a,d={};for(a in t.query)"string"==typeof(i=t.query[a]+"")&&(d[a]=l.patternToRegExp(i,n));for(var h=0;h<s.length;++h){var u=!0,c=s[h];for(a in t.query)i=t.query[a]+"",this._containsValue(c,a,i,d[a])||(u=!1);u&&r.push(c)}e(r,t)}else s.length>0&&(r=s.slice(0,s.length)),e(r,t)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(t){},getLabel:function(t){if(this.isItem(t))return"Table Row #"+this.getIdentity(t)},getLabelAttributes:function(t){return null},getIdentity:function(t){return this._assertIsItem(t),i("opera")?s.indexOf(this._rootNode.rows,t)-1:t.sectionRowIndex},getIdentityAttributes:function(t){return null},fetchItemByIdentity:function(e){var o=e.identity,s=this,i=null,a=null;if(this._rootNode)this._rootNode.rows[o+1]&&(i=this._rootNode.rows[o+1],e.onItem&&(a=e.scope?e.scope:t.global,e.onItem.call(a,i)));else if(this.url){var l={url:this.url,handleAs:"text"},d=n.get(l);d.addCallback(function(r){var n=function(t,e){if(t.id==e)return t;if(t.childNodes)for(var o=0;o<t.childNodes.length;o++){var r=n(t.childNodes[o],e);if(r)return r}return null},l=document.createElement("div");l.innerHTML=r,s._rootNode=n(l,s.tableId),s._getHeadings.call(s);for(var d=0;d<s._rootNode.rows.length;d++)s._rootNode.rows[d].store=s;i=s._rootNode.rows[o+1],e.onItem&&(a=e.scope?e.scope:t.global,e.onItem.call(a,i))}),d.addErrback(function(o){e.onError&&(a=e.scope?e.scope:t.global,e.onError.call(a,o))})}else{this._rootNode=r.byId(this.tableId),this._getHeadings();for(var h=0;h<this._rootNode.rows.length;h++)this._rootNode.rows[h].store=this;i=this._rootNode.rows[o+1],e.onItem&&(a=e.scope?e.scope:t.global,e.onItem.call(a,i))}}});return o.extend(h,a),h});
//# sourceMappingURL=../sourcemaps/data/HtmlTableStore.js.map
