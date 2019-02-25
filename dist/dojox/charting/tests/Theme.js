/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","dojox/charting/Theme","dojox/charting/themes/PlotKit/blue"],function(t,e,o){t.register("dojox.charting.tests.Theme",[function(r){var l={num:16,cache:!1};e.defineColors(l);for(var d=o.colors,n="<table border=1>",b=0;b<d.length;b++)b%8==0&&(b>0&&(n+="</tr>"),n+="<tr>"),n+="<td width=16 bgcolor="+d[b]+">&nbsp;</td>";n+="</tr></table>",t.debug(n);l={num:32,cache:!1};e.defineColors(l);for(d=o.colors,n="<table border=1 style=margin-top:12px;>",b=0;b<d.length;b++)b%8==0&&(b>0&&(n+="</tr>"),n+="<tr>"),n+="<td width=16 bgcolor="+d[b]+">&nbsp;</td>";n+="</tr></table>",t.debug(n);l={saturation:20,num:32,cache:!1};e.defineColors(l);for(d=o.colors,n="<table border=1 style=margin-top:12px;>",b=0;b<d.length;b++)b%8==0&&(b>0&&(n+="</tr>"),n+="<tr>"),n+="<td width=16 bgcolor="+d[b]+">&nbsp;</td>";n+="</tr></table>",t.debug(n);l={low:10,high:90,num:32,cache:!1};e.defineColors(l);for(d=o.colors,n="<table border=1 style=margin-top:12px;>",b=0;b<d.length;b++)b%8==0&&(b>0&&(n+="</tr>"),n+="<tr>"),n+="<td width=16 bgcolor="+d[b]+">&nbsp;</td>";n+="</tr></table>",t.debug(n)}])});
//# sourceMappingURL=../../sourcemaps/charting/tests/Theme.js.map
