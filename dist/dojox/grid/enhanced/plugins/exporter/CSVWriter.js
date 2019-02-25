/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/array","./_ExportWriter","../Exporter"],function(e,r,t,i){return i.registerWriter("csv","dojox.grid.enhanced.plugins.exporter.CSVWriter"),e("dojox.grid.enhanced.plugins.exporter.CSVWriter",t,{_separator:",",_newline:"\r\n",constructor:function(e){e&&(this._separator=e.separator?e.separator:this._separator,this._newline=e.newline?e.newline:this._newline),this._headers=[],this._dataRows=[]},_formatCSVCell:function(e){if(null===e||void 0===e)return"";var r=String(e).replace(/"/g,'""');return(r.indexOf(this._separator)>=0||r.search(/[" \t\r\n]/)>=0)&&(r='"'+r+'"'),r},beforeContentRow:function(e){var t=[],i=this._formatCSVCell;return r.forEach(e.grid.layout.cells,function(n){!n.hidden&&r.indexOf(e.spCols,n.index)<0&&t.push(i(this._getExportDataForCell(e.rowIndex,e.row,n,e.grid)))},this),this._dataRows.push(t),!1},handleCell:function(e){var t=e.cell;e.isHeader&&!t.hidden&&r.indexOf(e.spCols,t.index)<0&&this._headers.push(t.name||t.field)},toString:function(){for(var e=this._headers.join(this._separator),r=this._dataRows.length-1;r>=0;--r)this._dataRows[r]=this._dataRows[r].join(this._separator);return e+this._newline+this._dataRows.join(this._newline)}})});
//# sourceMappingURL=../../../../sourcemaps/grid/enhanced/plugins/exporter/CSVWriter.js.map
