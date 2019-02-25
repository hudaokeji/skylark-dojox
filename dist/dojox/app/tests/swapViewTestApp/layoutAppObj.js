/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/window","dojox/app/main","dojox/json/ref","dojo/text!./objConfig.json","dojo/sniff"],function(e,i,o,a,t){e.global.modelApp={},modelApp.names={identifier:"id",items:[{id:"1",Serial:"360324",First:"John",Last:"Doe",Email:"jdoe@us.ibm.com",ShipTo:{Street:"123 Valley Rd",City:"Katonah",State:"NY",Zip:"10536"},BillTo:{Street:"17 Skyline Dr",City:"Hawthorne",State:"NY",Zip:"10532"}}]},modelApp.repeatData=[{First:"Chad",Last:"Chapman",Location:"CA",Office:"1278",Email:"c.c@test.com",Tel:"408-764-8237",Fax:"408-764-8228"},{First:"Irene",Last:"Ira",Location:"NJ",Office:"F09",Email:"i.i@test.com",Tel:"514-764-6532",Fax:"514-764-7300"},{First:"John",Last:"Jacklin",Location:"CA",Office:"6701",Email:"j.j@test.com",Tel:"408-764-1234",Fax:"408-764-4321"}];var n=o.fromJson(a);t.add("ie9orLess",t("ie")&&t("ie")<=9),i(n)});
//# sourceMappingURL=../../../sourcemaps/app/tests/swapViewTestApp/layoutAppObj.js.map
