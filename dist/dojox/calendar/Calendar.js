/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","./CalendarBase","./ColumnView","./ColumnViewSecondarySheet","./VerticalRenderer","./DecorationRenderer","./MatrixView","./HorizontalRenderer","./LabelRenderer","./ExpandRenderer","./Keyboard","./Mouse","dojo/text!./templates/Calendar.html","dijit/form/Button","dijit/Toolbar","dijit/ToolbarSeparator"],function(e,r,i,n,t,a,o,l,d,c,s,h,m,u){return e("dojox.calendar.Calendar",i,{templateString:u,_createDefaultViews:function(){var i=e([t,h,m]),u=e([n,h,m])(r.mixin({secondarySheetClass:i,verticalRenderer:a,horizontalRenderer:d,expandRenderer:s,horizontalDecorationRenderer:o,verticalDecorationRenderer:o},this.columnViewProps)),w=e([l,h,m])(r.mixin({horizontalRenderer:d,horizontalDecorationRenderer:o,labelRenderer:c,expandRenderer:s},this.matrixViewProps));this.columnView=u,this.matrixView=w;var R=[u,w];return this.installDefaultViewsActions(R),R},installDefaultViewsActions:function(e){this.matrixView.on("rowHeaderClick",r.hitch(this,this.matrixViewRowHeaderClick)),this.columnView.on("columnHeaderClick",r.hitch(this,this.columnViewColumnHeaderClick))}})});
//# sourceMappingURL=../sourcemaps/calendar/Calendar.js.map
