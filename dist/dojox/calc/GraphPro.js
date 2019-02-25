/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/ready","dojox/calc/Standard","dojox/calc/Grapher","dojox/layout/FloatingPane","dojo/text!./templates/GraphPro.html","dojox/calc/_Executor","dijit/Menu","dijit/MenuItem","dijit/form/ComboButton","dijit/form/Button","dijit/form/TextBox"],function(t,e,a,i,o,s,n,r,h,d,u){return t("dojox.calc.GraphPro",r,{templateString:u,grapher:null,funcMaker:null,aFloatingPane:null,executorLoaded:function(){this.inherited(arguments),n(e.hitch(this,function(){null==this.writeStore&&"functionMakerButton"in this&&i.set(this.functionMakerButton.domNode,{visibility:"hidden"})}))},makeFunctionWindow:function(){var t=a.body(),i=o.create("div");t.appendChild(i),this.aFloatingPane=new dojox.layout.FloatingPane({resizable:!1,dockable:!0,maxable:!1,closable:!0,duration:300,title:"Function Window",style:"position:absolute;left:10em;top:10em;width:50em;"},i);var s=o.create("div");this.funcMaker=new h.FuncGen({writeStore:this.writeStore,readStore:this.readStore,functions:this.functions,deleteFunction:this.executor.deleteFunction,onSaved:function(){var t,e;if(""==(t=this.combo.get("value")))this.status.set("value","The function needs a name");else if(""==(e=this.textarea.get("value")))this.status.set("value","The function needs a body");else{var a=this.args.get("value");t in this.functions||(this.combo.item=this.writeStore.put({name:t,args:a,body:e})),this.saveFunction(t,a,e),this.status.set("value","Function "+t+" was saved")}},saveFunction:e.hitch(this,this.saveFunction)},s),this.aFloatingPane.set("content",this.funcMaker),this.aFloatingPane.startup(),this.aFloatingPane.bringToTop()},makeGrapherWindow:function(){var t=a.body(),e=o.create("div");t.appendChild(e),this.aFloatingPane=new dojox.layout.FloatingPane({resizable:!1,dockable:!0,maxable:!1,closable:!0,duration:300,title:"Graph Window",style:"position:absolute;left:10em;top:5em;width:50em;"},e);var i=this,n=o.create("div");this.grapher=new h.Grapher({myPane:this.aFloatingPane,drawOne:function(t){if(this.array[t][this.chartIndex].resize(this.graphWidth.get("value"),this.graphHeight.get("value")),this.array[t][this.chartIndex].axes.x.max=this.graphMaxX.get("value"),""!=this.array[t][this.expressionIndex].get("value")){var e,a="y="==this.array[t][this.functionMode];if(this.array[t][this.expressionIndex].get("value")!=this.array[t][this.evaluatedExpression]){var o="x";a||(o="y"),e=i.executor.Function("",o,"return "+this.array[t][this.expressionIndex].get("value")),this.array[t][this.evaluatedExpression]=this.array[t][this.expressionIndex].value,this.array[t][this.functionRef]=e}else e=this.array[t][this.functionRef];var s=this.array[t][this.colorIndex].get("value");s||(s="black"),h.draw(this.array[t][this.chartIndex],e,{graphNumber:this.array[t][this.funcNumberIndex],fOfX:a,color:{stroke:{color:s}}}),this.setStatus(t,"Drawn")}else this.setStatus(t,"Error")},onDraw:function(){for(var t=0;t<this.rowCount;t++)!this.dirty&&this.array[t][this.checkboxIndex].get("checked")||this.dirty&&"Drawn"==this.array[t][this.statusIndex].innerHTML?this.drawOne(t):(this.array[t][this.chartIndex].resize(this.graphWidth.get("value"),this.graphHeight.get("value")),this.array[t][this.chartIndex].axes.x.max=this.graphMaxX.get("value"));var e=s.position(this.outerDiv).y-s.position(this.myPane.domNode).y;e*=2,e=Math.abs(e);var a=""+Math.max(parseInt(this.graphHeight.get("value"))+50,this.outerDiv.scrollHeight+e),i=""+(parseInt(this.graphWidth.get("value"))+this.outerDiv.scrollWidth);this.myPane.resize({w:i,h:a})}},n),this.aFloatingPane.set("content",this.grapher),this.aFloatingPane.startup(),this.aFloatingPane.bringToTop()}})});
//# sourceMappingURL=../sourcemaps/calc/GraphPro.js.map
