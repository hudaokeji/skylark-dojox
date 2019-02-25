/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../bits"],function(t,i){var s=t.getObject("dojox.encoding.compression.lzw",!0),h=function(t){for(var i=1,s=2;t>=s;s<<=1,++i);return i};return s.Encoder=function(t){this.size=t,this.init()},t.extend(s.Encoder,{init:function(){this.dict={};for(var t=0;t<this.size;++t)this.dict[String.fromCharCode(t)]=t;this.width=h(this.code=this.size),this.p=""},encode:function(t,i){var s=String.fromCharCode(t),h=this.p+s,e=0;return h in this.dict?(this.p=h,e):(i.putBits(this.dict[this.p],this.width),0==(this.code&this.code+1)&&i.putBits(this.code++,e=this.width++),this.dict[h]=this.code++,this.p=s,e+this.width)},flush:function(t){return 0==this.p.length?0:(t.putBits(this.dict[this.p],this.width),this.p="",this.width)}}),s.Decoder=function(t){this.size=t,this.init()},t.extend(s.Decoder,{init:function(){this.codes=new Array(this.size);for(var t=0;t<this.size;++t)this.codes[t]=String.fromCharCode(t);this.width=h(this.size),this.p=-1},decode:function(t){var i,s=t.getBits(this.width);if(s<this.codes.length)i=this.codes[s],this.p>=0&&this.codes.push(this.codes[this.p]+i.substr(0,1));else{if(0==(s&s+1))return this.codes.push(""),++this.width,"";var h=this.codes[this.p];i=h+h.substr(0,1),this.codes.push(i)}return this.p=s,i}}),s});
//# sourceMappingURL=../../sourcemaps/encoding/compression/lzw.js.map
