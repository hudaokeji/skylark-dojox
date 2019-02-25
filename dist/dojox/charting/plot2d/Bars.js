/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/has","./CartesianBase","./_PlotEvents","./common","dojox/gfx/fx","dojox/lang/utils","dojox/lang/functional","dojox/lang/functional/reversed"],function(e,t,a,i,s,r,o,n,h,l,c){var d=c.lambda("item.purgeGroup()");return a("dojox.charting.plot2d.Bars",[s,r],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,font:"",fontColor:""},constructor:function(t,a){this.opt=e.clone(e.mixin(this.opt,this.defaultParams)),h.updateWithObject(this.opt,a),h.updateWithPattern(this.opt,a,this.optionalParams),this.animate=this.opt.animate,this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var e,t=o.collectSimpleStats(this.series);return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,t.vmax=e,t},createRect:function(e,t,a){var i;return this.opt.enableCache&&e._rectFreePool.length>0?((i=e._rectFreePool.pop()).setShape(a),t.add(i)):i=t.createRect(a),this.opt.enableCache&&e._rectUsePool.push(i),i},createLabel:function(e,t,a,i){if(this.opt.labels&&"outside"==this.opt.labelStyle){var s=a.y+a.height/2,r=a.x+a.width+this.opt.labelOffset;this.renderLabel(e,r,s,this._getLabel(isNaN(t.y)?t:t.y),i,"start")}else this.inherited(arguments)},render:function(a,s){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,s);var r;this.dirty=this.isDirty(),this.resetEvents(),this.dirty&&(t.forEach(this.series,d),this._eventSeries={},this.cleanGroup(),r=this.getGroup(),l.forEachRev(this.series,function(e){e.cleanGroup(r)}));var o=this.chart.theme,n=this._hScaler.scaler.getTransformerFromModel(this._hScaler),h=this._vScaler.scaler.getTransformerFromModel(this._vScaler),c=Math.max(0,this._hScaler.bounds.lower),p=n(c),u=this.events(),m=this.getBarProperties(),f=this.series.length;t.forEach(this.series,function(e){e.hidden&&f--});for(var y=f,g=this.series.length-1;g>=0;--g){var v=this.series[g];if(this.dirty||v.dirty){v.cleanGroup(),this.opt.enableCache&&(v._rectFreePool=(v._rectFreePool?v._rectFreePool:[]).concat(v._rectUsePool?v._rectUsePool:[]),v._rectUsePool=[]);var x=o.next("bar",[this.opt,v]);if(v.hidden)v.dyn.fill=x.series.fill,v.dyn.stroke=x.series.stroke;else{y--;var _=new Array(v.data.length);r=v.group;for(var b=t.some(v.data,function(e){return"number"==typeof e||e&&!e.hasOwnProperty("x")}),S=b?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,F=b?Math.min(v.data.length,Math.ceil(this._vScaler.bounds.to)):v.data.length,P=S;P<F;++P){var w=v.data[P];if(null!=w){var k,j,B=this.getValue(w,P,g,b),M=n(B.y),E=Math.abs(M-p);if(this.opt.styleFunc||"number"!=typeof w){var C="number"!=typeof w?[w]:[];this.opt.styleFunc&&C.push(this.opt.styleFunc(w)),k=o.addMixin(x,"bar",C,!0)}else k=o.post(x,"bar");if(E>=0&&m.height>=1){var z={x:s.l+(B.y<c?M:p),y:a.height-s.b-h(B.x+1.5)+m.gap+m.thickness*(f-y-1),width:E,height:m.height};if(k.series.shadow){var G=e.clone(z);G.x+=k.series.shadow.dx,G.y+=k.series.shadow.dy,j=this.createRect(v,r,G).setFill(k.series.shadow.color).setStroke(k.series.shadow),this.animate&&this._animateBar(j,s.l+p,-E)}var O=this._plotFill(k.series.fill,a,s);O=this._shapeFill(O,z);var R=this.createRect(v,r,z).setFill(O).setStroke(k.series.stroke);if(R.setFilter&&k.series.filter&&R.setFilter(k.series.filter),v.dyn.fill=R.getFill(),v.dyn.stroke=R.getStroke(),u){var L={element:"bar",index:P,run:v,shape:R,shadow:j,cx:B.y,cy:B.x+1.5,x:b?P:v.data[P].x,y:b?v.data[P]:v.data[P].y};this._connectEvents(L),_[P]=L}!isNaN(B.py)&&B.py>c&&(z.x+=n(B.py),z.width-=n(B.py)),this.createLabel(r,w,z,k),this.animate&&this._animateBar(R,s.l+p,-E)}}}this._eventSeries[v.name]=_,v.dirty=!1}}else o.skip(),this._reconnectEvents(v.name)}return this.dirty=!1,i("dojo-bidi")&&this._checkOrientation(this.group,a,s),this},getValue:function(e,t,a,i){var s,r;return i?(s="number"==typeof e?e:e.y,r=t):(s=e.y,r=e.x-1),{y:s,x:r}},getBarProperties:function(){var e=o.calculateBarSize(this._vScaler.bounds.scale,this.opt);return{gap:e.gap,height:e.size,thickness:0}},_animateBar:function(t,a,i){0==i&&(i=1),n.animateTransform(e.delegate({shape:t,duration:1200,transform:[{name:"translate",start:[a-a/i,0],end:[0,0]},{name:"scale",start:[1/i,1],end:[1,1]},{name:"original"}]},this.animate)).play()}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/Bars.js.map
