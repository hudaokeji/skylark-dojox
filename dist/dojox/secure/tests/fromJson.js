/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.secure.tests.fromJson"),dojo.require("dojox.secure.fromJson");var i,smallDataSet={prop1:null,prop2:!0,prop3:[],prop4:3.4325222223332266,prop5:10003,prop6:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean semper",prop7:"sagittis velit. Cras in mi. Duis porta mauris ut ligula. Proin porta rutrum",prop8:"lacus. Etiam consequat scelerisque quam. Nulla facilisi. Maecenas luctus",prop9:"venenatis nulla. In sit amet dui non mi semper iaculis. Sed molestie",prop10:"tortor at ipsum. Morbi dictum rutrum magna. Sed vitae risus.Aliquam vitae enim. Duis scelerisque metus auctor est venenatis imperdiet.Fusce dignissim porta augue. Nulla vestibulum. Integer lorem nunc,ullamcorper a, commodo ac, malesuada sed, dolor. Aenean id mi in massabibendum suscipit. Integer eros. Nullam suscipit mauris. In pellentesque.Mauris ipsum est, pharetra semper, pharetra in, viverra quis, tellus. Etiampurus. Quisque egestas, tortor ac cursus lacinia, felis leo adipiscingnisi, et rhoncus elit dolor eget eros. Fusce ut quam. Suspendisse eleifendleo vitae ligula. Nulla facilisi."},smallJson=dojo.toJson(smallDataSet),mediumDataSet=[];for(i=0;i<20;i++)mediumDataSet.push({prop1:null,prop2:!0,prop3:!1,prop4:3.4325222223332266-i,prop5:10003+i,prop6:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean semper",prop7:"sagittis velit. Cras in mi. Duis porta mauris ut ligula. Proin porta rutrum",prop8:"lacus. Etiam consequat scelerisque quam. Nulla facilisi. Maecenas luctus",prop9:"venenatis nulla. In sit amet dui non mi semper iaculis. Sed molestie",prop10:"tortor at ipsum. Morbi dictum rutrum magna. Sed vitae risus.Aliquam vitae enim."});var mediumJson=dojo.toJson(mediumDataSet),largeDataSet=[];for(i=0;i<100;i++)largeDataSet.push({prop1:null,prop2:!0,prop3:!1,prop4:3.4325222223332266-i,prop5:["Mauris ipsum est, pharetra semper, pharetra in, viverra quis, tellus. Etiampurus. Quisque egestas, tortor ac cursus lacinia, felis leo adipiscing","nisi, et rhoncus elit dolor eget eros. Fusce ut quam. Suspendisse eleifendleo vitae ligula. Nulla facilisi."],prop6:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean semper",prop7:"sagittis velit. Cras in mi. Duis porta mauris ut ligula. Proin porta rutrum",prop8:"lacus. Etiam consequat scelerisque quam. Nulla facilisi. Maecenas luctus",prop9:"venenatis nulla. In sit amet dui non mi semper iaculis. Sed molestie",prop10:"tortor at ipsum. Morbi dictum rutrum magna. Sed vitae risus.Aliquam vitae enim. Duis scelerisque metus auctor est venenatis imperdiet.Fusce dignissim porta augue. Nulla vestibulum. Integer lorem nunc,ullamcorper a, commodo ac, malesuada sed, dolor. Aenean id mi in massabibendum suscipit. Integer eros. Nullam suscipit mauris. In pellentesque."});var largeJson=dojo.toJson(largeDataSet);doh.register("dojox.secure.tests.fromJson",[function(){for(var e=0;e<1e3;e++)dojox.secure.fromJson(smallJson)},function(){for(var e=0;e<100;e++)dojox.secure.fromJson(mediumJson)},function(){for(var e=0;e<100;e++)dojox.secure.fromJson(largeJson)},function(){for(var e=0;e<1e3;e++)dojo.fromJson(smallJson)},function(){for(var e=0;e<100;e++)dojo.fromJson(mediumJson)},function(){for(var e=0;e<100;e++)dojo.fromJson(largeJson)},function(){for(var e=0;e<1e3;e++)JSON.parse(smallJson)},function(){for(var e=0;e<100;e++)JSON.parse(mediumJson)},function(){for(var e=0;e<100;e++)JSON.parse(largeJson)},function(){for(var e=0;e<1e3;e++)json2.parse(smallJson)},function(){for(var e=0;e<100;e++)json2.parse(mediumJson)},function(){for(var e=0;e<100;e++)json2.parse(largeJson)},function(){for(var e=0;e<100;e++)json_parse(smallJson)},function(){for(var e=0;e<10;e++)json_parse(mediumJson)},function(){for(var e=0;e<10;e++)json_parse(largeJson)}]);
//# sourceMappingURL=../../sourcemaps/secure/tests/fromJson.js.map
