/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.declare("YahooStore",dojox.data.ServiceStore,{_processResults:function(t,e){var r=0;t.ResultSet&&(r=t.ResultSet.totalResultsAvailable,t=t.ResultSet.Result);var n=this.inherited(arguments);return n.totalCount=r>1e3?1e3:r,n},fetch:function(t){return t.query&&(t.count&&(t.query.results=t.count),void 0!==t.start&&(t.query.start=t.start+1)),this.inherited(arguments)}});var getCellData=function(t,e){return grid.store.getValue(t,e)},getLink=function(t,e){return e?{text:getCellData(e,"Title"),href:getCellData(e,"ClickUrl")}:"&nbsp;"},formatLink=function(t){return"object"==typeof t?dojo.string.substitute('<a target="_blank" href="${href}">${text}</a>',t):t},formatDate=function(t,e){if(!t)return"&nbsp;";var r=new Date(1e3*t);return dojo.string.substitute("${0}/${1}/${2}",[r.getMonth()+1,r.getDate(),r.getFullYear()])},getImage=function(t,e){if(!e)return"&nbsp;";var r=getCellData(e,"Thumbnail");return{href:getCellData(e,"ClickUrl"),src:r.Url,width:r.Width,height:r.Height}},formatImage=function(t){return"object"==typeof t?dojo.string.substitute('<a href="${href}" target="_blank"><img border=0 src="${src}" width="${width}" height="${height}"></a>',t):t},getDimensions=function(t,e){return e?getCellData(e,"Width")+" x "+getCellData(e,"Height"):"&nbsp;"};
//# sourceMappingURL=../../sourcemaps/grid/tests/yahooSearch.js.map
