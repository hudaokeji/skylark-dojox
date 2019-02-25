/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../_base"],function(e){var t=e.constants;return e.languages.cpp={defaultMode:{lexems:[t.UNDERSCORE_IDENT_RE],illegal:"</",contains:["comment","string","number","preprocessor"],keywords:{false:1,int:1,float:1,while:1,private:1,char:1,catch:1,export:1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,const:1,struct:1,for:1,static_cast:2,union:1,namespace:1,unsigned:1,long:1,throw:1,volatile:2,static:1,protected:1,bool:1,template:1,mutable:1,if:1,public:1,friend:2,do:1,return:1,goto:1,auto:1,void:2,enum:1,else:1,break:1,new:1,extern:1,using:1,true:1,class:1,asm:1,case:1,typeid:1,short:1,reinterpret_cast:2,default:1,double:1,register:1,explicit:1,signed:1,typename:1,try:1,this:1,switch:1,continue:1,wchar_t:1,inline:1,delete:1}},modes:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.C_NUMBER_MODE,t.QUOTE_STRING_MODE,t.BACKSLASH_ESCAPE,{className:"string",begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"},{className:"preprocessor",begin:"#",end:"$"}]},e.languages.cpp});
//# sourceMappingURL=../../sourcemaps/highlight/languages/cpp.js.map
