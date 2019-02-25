/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.dtl.tests.text.filter"),dojo.require("dojox.dtl"),dojo.require("dojox.dtl.Context"),dojo.require("dojox.dtl.utils.date"),dojo.require("dojox.date.php"),dojo.require("dojox.string.sprintf"),doh.register("dojox.dtl.text.filter",[function(e){var t=dojox.dtl,n=new t.Context({four:4});tpl=new t.Template('{{ four|add:"6" }}'),e.is("10",tpl.render(n)),n.four="4",e.is("10",tpl.render(n)),tpl=new t.Template('{{ four|add:"six" }}'),e.is("4",tpl.render(n)),tpl=new t.Template('{{ four|add:"6.6" }}'),e.is("10",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({unslashed:"Test back slashes \\, double quotes \" and single quotes '"}),r=new t.Template("{{ unslashed|addslashes|safe }}");e.is("Test back slashes \\\\, double quotes \\\" and single quotes \\'",r.render(n))},function(e){var t=dojox.dtl,n=new t.Template("{{ uncapped|capfirst }}");e.is("Cap",n.render(new t.Context({uncapped:"cap"})))},function(e){var t=dojox.dtl,n=new t.Context,r=new t.Template("{{ narrow|center }}");n.narrow="even",e.is("even",r.render(n)),n.narrow="odd",e.is("odd",r.render(n)),r=new t.Template('{{ narrow|center:"5" }}'),n.narrow="even",e.is("even ",r.render(n)),n.narrow="odd",e.is(" odd ",r.render(n)),r=new t.Template('{{ narrow|center:"6" }}'),n.narrow="even",e.is(" even ",r.render(n)),n.narrow="odd",e.is(" odd  ",r.render(n)),r=new t.Template('{{ narrow|center:"12" }}'),n.narrow="even",e.is("    even    ",r.render(n)),n.narrow="odd",e.is("    odd     ",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({uncut:"Apples and oranges"}),r=new t.Template("{{ uncut|cut }}");e.is("Apples and oranges",r.render(n)),r=new t.Template('{{ uncut|cut:"A" }}'),e.is("pples and oranges",r.render(n)),r=new t.Template('{{ uncut|cut:" " }}'),e.is("Applesandoranges",r.render(n)),r=new t.Template('{{ uncut|cut:"e" }}'),e.is("Appls and orangs",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({now:new Date(2007,0,1),then:new Date(2007,1,1)}),r=new t.Template("{{ now|date }}");e.is(dojox.dtl.utils.date.format(n.now,"N j, Y"),r.render(n)),n.then=new Date(2007,0,1),r=new t.Template('{{ now|date:"d" }}'),e.is("01",r.render(n)),r=new t.Template('{{ now|date:"D" }}'),e.is("Mon",r.render(n)),r=new t.Template('{{ now|date:"j" }}'),e.is("1",r.render(n)),r=new t.Template('{{ now|date:"l" }}'),e.is("Monday",r.render(n)),r=new t.Template('{{ now|date:"N" }}'),e.is("Jan.",r.render(n)),r=new t.Template('{{ now|date:"S" }}'),e.is("st",r.render(n)),n.now.setDate(2),e.is("nd",r.render(n)),n.now.setDate(3),e.is("rd",r.render(n)),n.now.setDate(4),e.is("th",r.render(n)),n.now.setDate(5),e.is("th",r.render(n)),n.now.setDate(6),e.is("th",r.render(n)),n.now.setDate(7),e.is("th",r.render(n)),n.now.setDate(8),e.is("th",r.render(n)),n.now.setDate(9),e.is("th",r.render(n)),n.now.setDate(10),e.is("th",r.render(n)),n.now.setDate(11),e.is("th",r.render(n)),n.now.setDate(12),e.is("th",r.render(n)),n.now.setDate(13),e.is("th",r.render(n)),n.now.setDate(14),e.is("th",r.render(n)),n.now.setDate(15),e.is("th",r.render(n)),n.now.setDate(16),e.is("th",r.render(n)),n.now.setDate(17),e.is("th",r.render(n)),n.now.setDate(18),e.is("th",r.render(n)),n.now.setDate(19),e.is("th",r.render(n)),n.now.setDate(20),e.is("th",r.render(n)),n.now.setDate(21),e.is("st",r.render(n)),n.now.setDate(22),e.is("nd",r.render(n)),n.now.setDate(23),e.is("rd",r.render(n)),n.now.setDate(24),e.is("th",r.render(n)),n.now.setDate(25),e.is("th",r.render(n)),n.now.setDate(26),e.is("th",r.render(n)),n.now.setDate(27),e.is("th",r.render(n)),n.now.setDate(28),e.is("th",r.render(n)),n.now.setDate(29),e.is("th",r.render(n)),n.now.setDate(30),e.is("th",r.render(n)),n.now.setDate(31),e.is("st",r.render(n)),n.now.setDate(1),r=new t.Template('{{ now|date:"w" }}'),e.is("1",r.render(n)),r=new t.Template('{{ now|date:"z" }}'),e.is("0",r.render(n)),r=new t.Template('{{ now|date:"W" }}'),e.is("1",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context;tpl=new t.Template("{{ empty|default }}"),e.is("",tpl.render(n)),tpl=new t.Template('{{ empty|default:"full" }}'),e.is("full",tpl.render(n)),n.empty="not empty",e.is("not empty",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context;tpl=new t.Template("{{ empty|default_if_none }}"),e.is("",tpl.render(n)),tpl=new t.Template('{{ empty|default_if_none:"full" }}'),e.is("",tpl.render(n)),n.empty=null,e.is("full",tpl.render(n)),n.empty="not empty",e.is("not empty",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template('{{ fruit|dictsort|join:"|" }}'),e.is("lemons|apples|grapes",tpl.render(n)),tpl=new t.Template('{{ fruit|dictsort:"name"|join:"|" }}'),e.is("apples|grapes|lemons",tpl.render(n))},function(e){var t=dojox.dtl;context=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]}),tpl=new t.Template('{{ fruit|dictsortreversed:"name"|join:"|" }}'),e.is("lemons|grapes|apples",tpl.render(context))},function(e){var t=dojox.dtl;context=new t.Context,tpl=new t.Template('{{ 4|divisibleby:"2" }}'),e.is("true",tpl.render(context)),context=new t.Context({number:4}),tpl=new t.Template("{{ number|divisibleby:3 }}"),e.is("false",tpl.render(context))},function(e){var t=dojox.dtl,n=new t.Context({unescaped:"Try & cover <all> the \"major\" 'situations' at once"});tpl=new t.Template("{{ unescaped|escape }}"),e.is("Try &amp; cover &lt;all&gt; the &quot;major&quot; &#39;situations&#39; at once",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Template("{{ 1|filesizeformat }}");e.is("1 byte",n.render()),n=new t.Template("{{ 512|filesizeformat }}"),e.is("512 bytes",n.render()),n=new t.Template("{{ 1024|filesizeformat }}"),e.is("1.0 KB",n.render()),n=new t.Template("{{ 2048|filesizeformat }}"),e.is("2.0 KB",n.render()),n=new t.Template("{{ 1048576|filesizeformat }}"),e.is("1.0 MB",n.render()),n=new t.Template("{{ 1073741824|filesizeformat }}"),e.is("1.0 GB",n.render())},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template("{{ fruit|first }}"),e.is("lemons",tpl.render(n))},function(e){var t=new dojox.dtl.Template('{{ "One & Two"|fix_ampersands|safe }}');e.is("One &amp; Two",t.render())},function(e){var t=dojox.dtl,n=new t.Context({num1:34.23234,num2:34}),r=new t.Template("{{ num1|floatformat }}");e.is("34.2",r.render(n)),r=new t.Template("{{ num2|floatformat }}"),e.is("34",r.render(n)),r=new t.Template("{{ num1|floatformat:3 }}"),e.is("34.232",r.render(n)),r=new t.Template("{{ num2|floatformat:3 }}"),e.is("34.000",r.render(n)),r=new t.Template("{{ num1|floatformat:-3 }}"),e.is("34.2",r.render(n)),r=new t.Template("{{ num2|floatformat:-3 }}"),e.is("34",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({pi:314159265}),r=new t.Template("{{ pi|get_digit:1 }}");e.is("3",r.render(n)),r=new t.Template('{{ pi|get_digit:"2" }}'),e.is("1",r.render(n)),r=new t.Template("{{ pi|get_digit:0 }}"),e.is("314159265",r.render(n)),r=new t.Template('{{ "nada"|get_digit:1 }}'),e.is("0",r.render(n))},function(e){var t=dojox.dtl,n=new t.Template('{{ "http://homepage.com/~user"|urlencode|iriencode }}');e.is("http%3A//homepage.com/%7Euser",n.render()),n=new t.Template('{{ "pottedmeat@dojotoolkit.org"|iriencode }}'),e.is("pottedmeat%40dojotoolkit.org",n.render())},function(e){var t=dojox.dtl,n=new t.Context({items:["foo","bar","baz"]}),r=new t.Template("{{ items|join }}");e.is("foo,bar,baz",r.render(n)),r=new t.Template('{{ items|join:"mustard" }}'),e.is("foomustardbarmustardbaz",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template("{{ fruit|length }}"),e.is("3",tpl.render(n)),tpl=new t.Template("{{ fruit|first|length }}"),e.is("6",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template('{{ fruit|length_is:"3" }}'),e.is("true",tpl.render(n)),tpl=new t.Template('{{ fruit|length_is:"4" }}'),e.is("false",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({unbroken:"This is just\r\n\n\ra bunch\nof text\n\n\nand such"});tpl=new t.Template("{{ unbroken|linebreaks|safe }}"),e.is("<p>This is just</p>\n\n<p>a bunch<br />of text</p>\n\n<p>and such</p>",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({unbroken:"This is just\r\n\n\ra bunch\nof text\n\n\nand such"});tpl=new t.Template("{{ unbroken|linebreaksbr|safe }}"),e.is("This is just<br /><br />a bunch<br />of text<br /><br /><br />and such",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({lines:"One\nTwo\nThree\nFour\n"}),r=new t.Template("{{ lines|linenumbers }}");e.is("1. One\n2. Two\n3. Three\n4. Four\n5. ",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context,r=new t.Template("{{ narrow|ljust }}");n.narrow="even",e.is("even",r.render(n)),n.narrow="odd",e.is("odd",r.render(n)),r=new t.Template('{{ narrow|ljust:"5" }}'),n.narrow="even",e.is("even ",r.render(n)),n.narrow="odd",e.is("odd  ",r.render(n)),r=new t.Template('{{ narrow|ljust:"6" }}'),n.narrow="even",e.is("even  ",r.render(n)),n.narrow="odd",e.is("odd   ",r.render(n)),r=new t.Template('{{ narrow|ljust:"12" }}'),n.narrow="even",e.is("even        ",r.render(n)),n.narrow="odd",e.is("odd         ",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({mixed:"MiXeD"}),r=new t.Template("{{ mixed|lower }}");e.is("mixed",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({word:"foo",number:314159265,arr:["first","second"],obj:{first:"first",second:"second"}}),r=new t.Template('{{ word|make_list|join:"|" }} {{ number|make_list|join:"|" }} {{ arr|make_list|join:"|" }} {{ obj|make_list|join:"|" }}');e.is("f|o|o 3|1|4|1|5|9|2|6|5 first|second first|second",r.render(n))},function(e){var t=dojox.dtl;tpl=new t.Template('{{ "1-800-pottedmeat"|phone2numeric }}'),e.is("1-800-7688336328",tpl.render())},function(e){var t=dojox.dtl,n=new t.Context({animals:["bear","cougar","aardvark"]}),r=new t.Template("{{ animals|length }} animal{{ animals|length|pluralize }}");e.is("3 animals",r.render(n)),n.animals=["bear"],e.is("1 animal",r.render(n)),n=new t.Context({fairies:["tinkerbell","Andy Dick"]}),r=new t.Template('{{ fairies|length }} fair{{ fairies|length|pluralize:"y,ies" }}'),e.is("2 fairies",r.render(n)),n.fairies.pop(),e.is("1 fairy",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({animals:["bear","cougar","aardvark"]});tpl=new t.Template("{{ animals|pprint|safe }}"),e.is('["bear","cougar","aardvark"]',tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template("{{ fruit|random }}"),result=tpl.render(n),e.t("lemons"==result||"apples"==result||"grapes"==result);for(var r=!1,o=0;o<10;o++)if(result!=tpl.render(n)&&"lemons"==result||"apples"==result||"grapes"==result){r=!0;break}e.t(r)},function(e){var t=dojox.dtl,n=new t.Context({tagged:"I'm gonna do something <script>evil<\/script> with the <html>filter"});tpl=new t.Template('{{ tagged|removetags:"script <html>"|safe }}'),e.is("I'm gonna do something evil with the filter",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context,r=new t.Template("{{ narrow|rjust }}");n.narrow="even",e.is("even",r.render(n)),n.narrow="odd",e.is("odd",r.render(n)),r=new t.Template('{{ narrow|rjust:"5" }}'),n.narrow="even",e.is(" even",r.render(n)),n.narrow="odd",e.is("  odd",r.render(n)),r=new t.Template('{{ narrow|rjust:"6" }}'),n.narrow="even",e.is("  even",r.render(n)),n.narrow="odd",e.is("   odd",r.render(n)),r=new t.Template('{{ narrow|rjust:"12" }}'),n.narrow="even",e.is("        even",r.render(n)),n.narrow="odd",e.is("         odd",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({fruit:[{name:"lemons",toString:function(){return this.name}},{name:"apples",toString:function(){return this.name}},{name:"grapes",toString:function(){return this.name}}]});tpl=new t.Template('{{ fruit|slice:":1"|join:"|" }}'),e.is("lemons",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:"1"|join:"|" }}'),e.is("apples|grapes",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:"1:3"|join:"|" }}'),e.is("apples|grapes",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:""|join:"|" }}'),e.is("lemons|apples|grapes",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:"-1"|join:"|" }}'),e.is("grapes",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:":-1"|join:"|" }}'),e.is("lemons|apples",tpl.render(n)),tpl=new t.Template('{{ fruit|slice:"-2:-1"|join:"|" }}'),e.is("apples",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({unslugged:"Apples and oranges()"});tpl=new t.Template("{{ unslugged|slugify }}"),e.is("apples-and-oranges",tpl.render(n))},function(e){var t=new dojox.dtl.Template('{{ 42|stringformat:"7.3f" }}');e.is(" 42.000",t.render())},function(e){var t=dojox.dtl,n=new t.Context({tagged:"I'm gonna do something <script>evil<\/script> with the <html>filter"});tpl=new t.Template("{{ tagged|striptags|safe }}"),e.is("I'm gonna do something evil with the filter",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({now:new Date(2007,0,1)});tpl=new t.Template("{{ now|time }}"),e.is(dojox.dtl.utils.date.format(n.now,"P"),tpl.render(n)),tpl=new t.Template('{{ now|time:"g" }}'),e.is("12",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({now:new Date(2007,0,1),then:new Date(2007,1,1)});tpl=new t.Template("{{ now|timesince:then }}"),e.is("1 month",tpl.render(n)),n.then=new Date(2007,0,5),e.is("4 days",tpl.render(n)),n.then=new Date(2007,0,17),e.is("2 weeks",tpl.render(n)),n.then=new Date(2008,1,1),e.is("1 year",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({now:new Date(2007,0,1),then:new Date(2007,1,1)}),r=new t.Template("{{ now|timeuntil:then }}");e.is("1 month",r.render(n)),n.then=new Date(2007,0,5),e.is("4 days",r.render(n)),n.then=new Date(2007,0,17),e.is("2 weeks",r.render(n)),n.then=new Date(2008,1,1),e.is("1 year",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({name:"potted meat"}),r=new t.Template("{{ name|title|safe }}");e.is("Potted Meat",r.render(n)),n.name="What's going on?",e.is("What's Going On?",r.render(n)),n.name="use\nline\nbREAKs\tand tabs",e.is("Use\nLine\nBreaks\tAnd Tabs",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({word:"potted meat writes a lot of tests"}),r=new t.Template("{{ word|truncatewords }}");e.is(n.word,r.render(n)),r=new t.Template('{{ word|truncatewords:"1" }}'),e.is("potted ...",r.render(n)),r=new t.Template('{{ word|truncatewords:"2" }}'),e.is("potted meat ...",r.render(n)),r=new t.Template('{{ word|truncatewords:20" }}'),e.is(n.word,r.render(n)),n.word="potted \nmeat   \nwrites  a lot of tests",r=new t.Template('{{ word|truncatewords:"3" }}'),e.is("potted \nmeat   \nwrites ...",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({body:"Test a string <em>that ends <i>inside a</i> tag</em> with different args",size:2}),r=new t.Template("{{ body|truncatewords_html:size|safe }}");e.is("Test a ...",r.render(n)),n.size=4,e.is("Test a string <em>that ...</em>",r.render(n)),n.size=6,e.is("Test a string <em>that ends <i>inside ...</i></em>",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({states:["States",[["Kansas",[["Lawrence",[]],["Topeka",[]]]],["Illinois",[]]]]});tpl=new t.Template("{{ states|unordered_list|safe }}"),e.is("\t<li>States\n\t<ul>\n\t\t<li>Kansas\n\t\t<ul>\n\t\t\t<li>Lawrence</li>\n\t\t\t<li>Topeka</li>\n\t\t</ul>\n\t\t</li>\n\t\t<li>Illinois</li>\n\t</ul>\n\t</li>",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({mixed:"MiXeD"}),r=new t.Template("{{ mixed|upper }}");e.is("MIXED",r.render(n))},function(e){var t=dojox.dtl,n=new t.Template('{{ "http://homepage.com/~user"|urlencode }}');e.is("http%3A//homepage.com/%7Euser",n.render()),n=new t.Template('{{ "\t"|urlencode }}'),e.is("\t",decodeURIComponent(n.render()))},function(e){var t=dojox.dtl,n=new t.Context({body:"My favorite websites are www.televisionwithoutpity.com, http://daringfireball.net and you can email me at pottedmeat@sitepen.com"}),r=new t.Template("{{ body|urlize|safe }}");e.is('My favorite websites are <a href="http://www.televisionwithoutpity.com" rel="nofollow">www.televisionwithoutpity.com</a> <a href="http://daringfireball.net" rel="nofollow">http://daringfireball.net</a> and you can email me at <a href="mailto:pottedmeat@sitepen.com">pottedmeat@sitepen.com</a>',r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({body:"My favorite websites are www.televisionwithoutpity.com, http://daringfireball.net and you can email me at pottedmeat@sitepen.com"}),r=new t.Template("{{ body|urlizetrunc|safe }}");e.is('My favorite websites are <a href="http://www.televisionwithoutpity.com" rel="nofollow">www.televisionwithoutpity.com</a> <a href="http://daringfireball.net" rel="nofollow">http://daringfireball.net</a> and you can email me at <a href="mailto:pottedmeat@sitepen.com">pottedmeat@sitepen.com</a>',r.render(n)),r=new t.Template('{{ body|urlizetrunc:"2"|safe }}'),e.is('My favorite websites are <a href="http://www.televisionwithoutpity.com" rel="nofollow">www.televisionwithoutpity.com</a> <a href="http://daringfireball.net" rel="nofollow">http://daringfireball.net</a> and you can email me at <a href="mailto:pottedmeat@sitepen.com">pottedmeat@sitepen.com</a>',r.render(n)),r=new t.Template('{{ body|urlizetrunc:"10"|safe }}'),e.is('My favorite websites are <a href="http://www.televisionwithoutpity.com" rel="nofollow">www.tel...</a> <a href="http://daringfireball.net" rel="nofollow">http://...</a> and you can email me at <a href="mailto:pottedmeat@sitepen.com">pottedmeat@sitepen.com</a>',r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({food:"Hot Pocket"}),r=new t.Template("{{ food|wordcount }}");e.is("2",r.render(n)),n.food="",e.is("0",r.render(n)),n.food="A nice barbecue, maybe a little grilled veggies, some cole slaw.",e.is("11",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context({body:"shrimp gumbo, shrimp pie, shrimp scampi, shrimp stew, fried shrimp, baked shrimp, shrimp o grotten, grilled shrimp, shrimp on a stick, shrimp salad, shrimp pop overs, shrimp cake, shrimp legs, shrimp stuffed eggs, shrimp cre oll, shrimp soup, creamed shrimp on toast, shrimp crapes, shrimply good crescent rolls, shrimp pizza, scalloped shrimp, boiled shrimp, shrimp cocktail"}),r=new t.Template("{{ body|wordwrap }}");e.is(n.body,r.render(n)),r=new t.Template("{{ body|wordwrap:width }}"),n.width=10,e.is("shrimp\ngumbo,\nshrimp\npie,\nshrimp\nscampi,\nshrimp\nstew,\nfried\nshrimp,\nbaked\nshrimp,\nshrimp o\ngrotten,\ngrilled\nshrimp,\nshrimp on\na stick,\nshrimp\nsalad,\nshrimp pop\novers,\nshrimp\ncake,\nshrimp\nlegs,\nshrimp\nstuffed\neggs,\nshrimp cre\noll,\nshrimp\nsoup,\ncreamed\nshrimp on\ntoast,\nshrimp\ncrapes,\nshrimply\ngood\ncrescent\nrolls,\nshrimp\npizza,\nscalloped\nshrimp,\nboiled\nshrimp,\nshrimp\ncocktail",r.render(n)),r=new t.Template('{{ body|wordwrap:"80" }}'),e.is("shrimp gumbo, shrimp pie, shrimp scampi, shrimp stew, fried shrimp, baked\nshrimp, shrimp o grotten, grilled shrimp, shrimp on a stick, shrimp salad,\nshrimp pop overs, shrimp cake, shrimp legs, shrimp stuffed eggs, shrimp cre oll,\nshrimp soup, creamed shrimp on toast, shrimp crapes, shrimply good crescent\nrolls, shrimp pizza, scalloped shrimp, boiled shrimp, shrimp cocktail",r.render(n))},function(e){var t=dojox.dtl,n=new t.Context;tpl=new t.Template("{{ true|yesno }}"),e.is("yes",tpl.render(n)),n=new t.Context({test:"value"}),tpl=new t.Template("{{ test|yesno }}"),e.is("yes",tpl.render(n)),tpl=new t.Template("{{ false|yesno }}"),e.is("no",tpl.render(n)),tpl=new t.Template("{{ null|yesno }}"),e.is("maybe",tpl.render(n)),tpl=new t.Template('{{ true|yesno:"bling,whack,soso" }}'),e.is("bling",tpl.render(n)),n=new t.Context({test:"value"}),tpl=new t.Template('{{ test|yesno:"bling,whack,soso" }}'),e.is("bling",tpl.render(n)),tpl=new t.Template('{{ false|yesno:"bling,whack,soso" }}'),e.is("whack",tpl.render(n)),tpl=new t.Template('{{ null|yesno:"bling,whack,soso" }}'),e.is("soso",tpl.render(n)),tpl=new t.Template('{{ null|yesno:"bling,whack" }}'),e.is("whack",tpl.render(n))},function(e){var t=dojox.dtl,n=new t.Context({headers:["action","type"],items:[{action:"eat",type:"apple"},{action:"mash",type:"banana"}]}),r=new t.Template("{% load dojox.dtl.contrib.objects %}<ul>{% for item in items %}<li><ul>{% for header in headers %}<li>{{ header }}: {{ item|key:header }}</li>{% endfor %}</ul></li>{% endfor %}</ul>");e.is("<ul><li><ul><li>action: eat</li><li>type: apple</li></ul></li><li><ul><li>action: mash</li><li>type: banana</li></ul></li></ul>",r.render(n))}]);
//# sourceMappingURL=../../../sourcemaps/dtl/tests/text/filter.js.map
