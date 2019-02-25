/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.string.tests.BidiComplex"),dojo.require("dojox.string.BidiComplex"),tests.register("dojox.string.tests.BidiComplex",[{name:"createDisplayString: FILE_PATH",runTest:function(t){var i=dojox.string.BidiComplex.createDisplayString("c:\\قائمة\\ملف.txt","FILE_PATH");t.is(i,"‪c:\\قائمة‎\\ملف‎.txt")}},{name:"stripSpecialCharacters: FILE_PATH",runTest:function(t){var i=dojox.string.BidiComplex.stripSpecialCharacters("‪c:\\قائمة‎\\ملف‎.txt");t.is(i,"c:\\قائمة\\ملف.txt")}},{name:"createDisplayString: EMAIL",runTest:function(t){var i=dojox.string.BidiComplex.createDisplayString("موظف@شركة.com","EMAIL");t.is(i,"‪موظف‎@شركة‎.com")}},{name:"stripSpecialCharacters: EMAIL",runTest:function(t){var i=dojox.string.BidiComplex.stripSpecialCharacters("‪موظف‎@شركة‎.com");t.is(i,"موظف@شركة.com")}},{name:"createDisplayString: URL",runTest:function(t){var i=dojox.string.BidiComplex.createDisplayString("http://قطاع.شركة.com/الموقع/صفحة?دليل=اختبار&&تعيين=نعم","URL");t.is(i,"‪http://قطاع‎.شركة‎.com/الموقع‎/صفحة‎?دليل‎=اختبار‎&&تعيين‎=نعم")}},{name:"stripSpecialCharacters: URL",runTest:function(t){var i=dojox.string.BidiComplex.stripSpecialCharacters("‪http://قطاع‎.شركة‎.com/الموقع‎/صفحة‎?دليل‎=اختبار‎&&تعيين‎=نعم");t.is(i,"http://قطاع.شركة.com/الموقع/صفحة?دليل=اختبار&&تعيين=نعم")}}]);
//# sourceMappingURL=../../sourcemaps/string/tests/BidiComplex.js.map
