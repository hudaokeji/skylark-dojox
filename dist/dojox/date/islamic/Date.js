/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/date"],function(t,s,i){var e=s("dojox.date.islamic.Date",null,{_date:0,_month:0,_year:0,_hours:0,_minutes:0,_seconds:0,_milliseconds:0,_day:0,_GREGORIAN_EPOCH:1721425.5,_ISLAMIC_EPOCH:1948439.5,constructor:function(){var t=arguments.length;if(t)if(1==t){var s=arguments[0];"number"==typeof s&&(s=new Date(s)),s instanceof Date?this.fromGregorian(s):""==s?this._date=new Date(""):(this._year=s._year,this._month=s._month,this._date=s._date,this._hours=s._hours,this._minutes=s._minutes,this._seconds=s._seconds,this._milliseconds=s._milliseconds)}else t>=3&&(this._year+=arguments[0],this._month+=arguments[1],this._date+=arguments[2],this._hours+=arguments[3]||0,this._minutes+=arguments[4]||0,this._seconds+=arguments[5]||0,this._milliseconds+=arguments[6]||0);else this.fromGregorian(new Date)},getDate:function(){return this._date},getMonth:function(){return this._month},getFullYear:function(){return this._year},getDay:function(){return this.toGregorian().getDay()},getHours:function(){return this._hours},getMinutes:function(){return this._minutes},getSeconds:function(){return this._seconds},getMilliseconds:function(){return this._milliseconds},setDate:function(t){var s;if((t=parseInt(t))>0&&t<=this.getDaysInIslamicMonth(this._month,this._year))this._date=t;else if(t>0){for(s=this.getDaysInIslamicMonth(this._month,this._year);t>s;t-=s,s=this.getDaysInIslamicMonth(this._month,this._year))this._month++,this._month>=12&&(this._year++,this._month-=12);this._date=t}else{for(s=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1);t<=0;s=this.getDaysInIslamicMonth(this._month-1>=0?this._month-1:11,this._month-1>=0?this._year:this._year-1))this._month--,this._month<0&&(this._year--,this._month+=12),t+=s;this._date=t}return this},setFullYear:function(t){this._year=+t},setMonth:function(t){this._year+=Math.floor(t/12),this._month=t>0?Math.floor(t%12):Math.floor((t%12+12)%12)},setHours:function(){var t=arguments.length,s=0;for(t>=1&&(s=parseInt(arguments[0])),t>=2&&(this._minutes=parseInt(arguments[1])),t>=3&&(this._seconds=parseInt(arguments[2])),4==t&&(this._milliseconds=parseInt(arguments[3]));s>=24;){this._date++;var i=this.getDaysInIslamicMonth(this._month,this._year);this._date>i&&(this._month++,this._month>=12&&(this._year++,this._month-=12),this._date-=i),s-=24}this._hours=s},_addMinutes:function(t){return t+=this._minutes,this.setMinutes(t),this.setHours(this._hours+parseInt(t/60)),this},_addSeconds:function(t){return t+=this._seconds,this.setSeconds(t),this._addMinutes(parseInt(t/60)),this},_addMilliseconds:function(t){return t+=this._milliseconds,this.setMilliseconds(t),this._addSeconds(parseInt(t/1e3)),this},setMinutes:function(t){return this._minutes=t%60,this},setSeconds:function(t){return this._seconds=t%60,this},setMilliseconds:function(t){return this._milliseconds=t%1e3,this},toString:function(){if(isNaN(this._date))return"Invalidate Date";var t=new Date;return t.setHours(this._hours),t.setMinutes(this._minutes),t.setSeconds(this._seconds),t.setMilliseconds(this._milliseconds),this._month+" "+this._date+" "+this._year+" "+t.toTimeString()},toGregorian:function(){var t=this._year,s=this._month,e=this._date+Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30)+this._ISLAMIC_EPOCH-1,n=Math.floor(e-.5)+.5,h=n-this._GREGORIAN_EPOCH,o=Math.floor(h/146097),r=this._mod(h,146097),a=Math.floor(r/36524),_=this._mod(r,36524),l=Math.floor(_/1461),u=this._mod(_,1461),c=Math.floor(u/365),d=400*o+100*a+4*l+c;4!=a&&4!=c&&d++;var f=n-(this._GREGORIAN_EPOCH+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400)),m=n<this._GREGORIAN_EPOCH-1+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400)+Math.floor(739/12+(i.isLeapYear(new Date(d,3,1))?-1:-2)+1)?0:i.isLeapYear(new Date(d,3,1))?1:2,M=Math.floor((12*(f+m)+373)/367),g=this._GREGORIAN_EPOCH-1+365*(d-1)+Math.floor((d-1)/4)-Math.floor((d-1)/100)+Math.floor((d-1)/400)+Math.floor((367*M-362)/12+(M<=2?0:i.isLeapYear(new Date(d,M-1,1))?-1:-2)+1);return new Date(d,M-1,n-g+1,this._hours,this._minutes,this._seconds,this._milliseconds)},fromGregorian:function(t){var s=new Date(t),e=s.getFullYear(),n=s.getMonth(),h=s.getDate(),o=this._GREGORIAN_EPOCH-1+365*(e-1)+Math.floor((e-1)/4)+-Math.floor((e-1)/100)+Math.floor((e-1)/400)+Math.floor((367*(n+1)-362)/12+(n+1<=2?0:i.isLeapYear(s)?-1:-2)+h),r=(o=Math.floor(o)+.5)-this._ISLAMIC_EPOCH,a=Math.floor((30*r+10646)/10631),_=Math.ceil((r-29-this._yearStart(a))/29.5);_=Math.min(_,11);var l=Math.ceil(r-this._monthStart(a,_))+1;return this._date=l,this._month=_,this._year=a,this._hours=s.getHours(),this._minutes=s.getMinutes(),this._seconds=s.getSeconds(),this._milliseconds=s.getMilliseconds(),this._day=s.getDay(),this},valueOf:function(){return this.toGregorian().valueOf()},_yearStart:function(t){return 354*(t-1)+Math.floor((3+11*t)/30)},_monthStart:function(t,s){return Math.ceil(29.5*s)+354*(t-1)+Math.floor((3+11*t)/30)},_civilLeapYear:function(t){return(14+11*t)%30<11},getDaysInIslamicMonth:function(t,s){var i=0;return i=29+(t+1)%2,11==t&&this._civilLeapYear(s)&&i++,i},_mod:function(t,s){return t-s*Math.floor(t/s)}});return e.getDaysInIslamicMonth=function(t){return(new e).getDaysInIslamicMonth(t.getMonth(),t.getFullYear())},e});
//# sourceMappingURL=../../sourcemaps/date/islamic/Date.js.map
