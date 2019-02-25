/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["./GanttTaskControl","dojo/_base/declare","dojo/domReady!"],function(t,s){return s("dojox.gantt.GanttTaskItem",[],{constructor:function(t){this.id=t.id,this.name=t.name||this.id,this.startTime=t.startTime||new Date,this.duration=t.duration||8,this.percentage=t.percentage||0,this.previousTaskId=t.previousTaskId||"",this.taskOwner=t.taskOwner||"",this.cldTasks=[],this.cldPreTasks=[],this.parentTask=null,this.previousTask=null,this.project=null,this.nextChildTask=null,this.previousChildTask=null,this.nextParentTask=null,this.previousParentTask=null},addChildTask:function(t){this.cldTasks.push(t),t.parentTask=this},setProject:function(t){this.project=t;for(var s=0;s<this.cldTasks.length;s++)this.cldTasks[s].setProject(t)}})});
//# sourceMappingURL=../sourcemaps/gantt/GanttTaskItem.js.map
