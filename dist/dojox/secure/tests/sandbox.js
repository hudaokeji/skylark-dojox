/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
function violater(e){return{name:e.name,runTest:function(t){var o;try{e(t),o=!0}catch(e){console.log("successfully threw error",e)}t.f(o)}}}dojo.provide("dojox.secure.tests.sandbox"),doh.register("dojox.secure.tests.sandbox.good",[function(){var e=document.createElement("div");document.body.appendChild(e),e.innerHTML="Sandboxed div:",e.style.position="absolute",e.style.top="100px",e.style.left="100px",e.style.backgroundColor="red",e.style.color="white",container=document.createElement("div"),container.style.backgroundColor="cyan",container.style.color="black",e.appendChild(container)},function(e){dojox.secure.evaluate("element.innerHTML = 'Hi there';",container),e.assertEqual("Hi there",container.innerHTML)},function(e){dojox.secure.evaluate("document.write(\"<div style='color:red'>written</div>\");",container),e.t(container.innerHTML.match(/written/))}]),doh.register("dojox.secure.tests.sandbox.bad",[function(e){e.f(dojox.secure.evaluate("document.body",container))},function(e){try{dojox.secure.evaluate("bad = true",container)}catch(e){}e.t("undefined"==typeof bad)}]);
//# sourceMappingURL=../../sourcemaps/secure/tests/sandbox.js.map
