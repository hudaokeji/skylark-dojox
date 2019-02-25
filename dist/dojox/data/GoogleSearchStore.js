/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/query","dojo/dom-construct","dojo/io/script"],function(t,e,r,o,a,n){t.experimental("dojox.data.GoogleSearchStore");var s=r("dojox.data.GoogleSearchStore",null,{constructor:function(t){t&&(t.label&&(this.label=t.label),t.key&&(this._key=t.key),t.lang&&(this._lang=t.lang),"urlPreventCache"in t&&(this.urlPreventCache=!!t.urlPreventCache)),this._id=dojox.data.GoogleSearchStore.prototype._id++},_id:0,_requestCount:0,_googleUrl:"http://ajax.googleapis.com/ajax/services/search/",_storeRef:"_S",_attributes:["unescapedUrl","url","visibleUrl","cacheUrl","title","titleNoFormatting","content","estimatedResultCount"],_aggregatedAttributes:{estimatedResultCount:"cursor.estimatedResultCount"},label:"titleNoFormatting",_type:"web",urlPreventCache:!0,_queryAttrs:{text:"q"},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.GoogleSearchStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.GoogleSearchStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(t,e,r){var o=this.getValues(t,e);return o&&o.length>0?o[0]:r},getAttributes:function(t){return this._attributes},hasAttribute:function(t,e){return!!this.getValue(t,e)},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},getLabel:function(t){return this.getValue(t,this.label)},getLabelAttributes:function(t){return[this.label]},containsValue:function(t,e,r){for(var o=this.getValues(t,e),a=0;a<o.length;a++)if(o[a]===r)return!0;return!1},getValues:function(t,r){this._assertIsItem(t),this._assertIsAttribute(r);var o=t[r];return e.isArray(o)?o:void 0!==o?[o]:[]},isItem:function(t){return!(!t||t[this._storeRef]!==this)},close:function(t){},_format:function(t,e){return t},fetch:function(e){var r=(e=e||{}).scope||t.global;if(e.query||!e.onError){var s={};for(var i in this._queryAttrs)s[i]=e.query[i];e={query:s,onComplete:e.onComplete,onError:e.onError,onItem:e.onItem,onBegin:e.onBegin,start:e.start,count:e.count};var l,u="GoogleSearchStoreCallback_"+this._id+"_"+ ++this._requestCount,c=this._createContent(s,u,e);void 0!==e.start&&null!==e.start||(e.start=0),e.count||(e.count=8),l={start:e.start-e.start%8};var g=this,h={url:this._googleUrl+this._type,preventCache:this.urlPreventCache,content:c},d=[],b=0,_=!1,f=e.start-1,m=0,p=[],S=function(n,s){if(p.length>0&&o("#"+p.splice(0,1)).forEach(a.destroy),!_){var i=g._getItems(s),l=s?s.cursor:null;if(i){for(var c=0;c<i.length&&c+n<e.count+e.start;c++)g._processItem(i[c],s),d[c+n]=i[c];if(1==++b){var h=l?l.pages:null,S=h?Number(h[h.length-1].start):0;if(e.onBegin){var v=l?l.estimatedResultCount:i.length,y=v?Math.min(v,S+i.length):S+i.length;e.onBegin.call(r,y,e)}for(var I=e.start-e.start%8+8,j=1;h&&h[j]&&!(Number(h[j].start)>=e.start+e.count);)Number(h[j].start)>=I&&A({start:h[j].start}),j++}if(e.onItem&&d[f+1])do{f++,e.onItem.call(r,d[f],e)}while(d[f+1]&&f<e.start+e.count);b==m&&(_=!0,t.global[u]=null,e.onItem?e.onComplete.call(r,null,e):(d=d.slice(e.start,e.start+e.count),e.onComplete.call(r,d,e)))}}},v=[],y=l.start-1;t.global[u]=function(o,a,n,s){try{if(200!=n)return e.onError&&e.onError.call(r,new Error("Response from Google was: "+n),e),void(t.global[u]=function(){});if(o==y+1){if(S(Number(o),a),y+=8,v.length>0)for(v.sort(g._getSort());v.length>0&&v[0].start==y+1;)S(Number(v[0].start),v[0].data),v.splice(0,1),y+=8}else v.push({start:o,data:a})}catch(t){e.onError.call(r,t,e)}},A(l)}else e.onError.call(r,new Error(this.declaredClass+": A query must be specified."));function A(t){m++,h.content.context=h.content.start=t.start;var o=n.get(h);p.push(o.ioArgs.id),o.addErrback(function(t){e.onError&&e.onError.call(r,t,e)})}},_getSort:function(){return function(t,e){return t.start<e.start?-1:e.start<t.start?1:0}},_processItem:function(t,r){for(var o in t[this._storeRef]=this,this._aggregatedAttributes)t[o]=e.getObject(this._aggregatedAttributes[o],!1,r)},_getItems:function(t){return t.results||t},_createContent:function(t,e,r){var o={v:"1.0",rsz:"large",callback:e,key:this._key,hl:this._lang};for(var a in this._queryAttrs)o[this._queryAttrs[a]]=t[a];return o}}),i=r("dojox.data.GoogleWebSearchStore",s,{}),l=r("dojox.data.GoogleBlogSearchStore",s,{_type:"blogs",_attributes:["blogUrl","postUrl","title","titleNoFormatting","content","author","publishedDate"],_aggregatedAttributes:{}}),u=r("dojox.data.GoogleLocalSearchStore",s,{_type:"local",_attributes:["title","titleNoFormatting","url","lat","lng","streetAddress","city","region","country","phoneNumbers","ddUrl","ddUrlToHere","ddUrlFromHere","staticMapUrl","viewport"],_aggregatedAttributes:{viewport:"viewport"},_queryAttrs:{text:"q",centerLatLong:"sll",searchSpan:"sspn"}}),c=r("dojox.data.GoogleVideoSearchStore",s,{_type:"video",_attributes:["title","titleNoFormatting","content","url","published","publisher","duration","tbWidth","tbHeight","tbUrl","playUrl"],_aggregatedAttributes:{}}),g=r("dojox.data.GoogleNewsSearchStore",s,{_type:"news",_attributes:["title","titleNoFormatting","content","url","unescapedUrl","publisher","clusterUrl","location","publishedDate","relatedStories"],_aggregatedAttributes:{}}),h=r("dojox.data.GoogleBookSearchStore",s,{_type:"books",_attributes:["title","titleNoFormatting","authors","url","unescapedUrl","bookId","pageCount","publishedYear"],_aggregatedAttributes:{}});return{Search:s,ImageSearch:r("dojox.data.GoogleImageSearchStore",s,{_type:"images",_attributes:["title","titleNoFormatting","visibleUrl","url","unescapedUrl","originalContextUrl","width","height","tbWidth","tbHeight","tbUrl","content","contentNoFormatting"],_aggregatedAttributes:{}}),BookSearch:h,NewsSearch:g,VideoSearch:c,LocalSearch:u,BlogSearch:l,WebSearch:i}});
//# sourceMappingURL=../sourcemaps/data/GoogleSearchStore.js.map
