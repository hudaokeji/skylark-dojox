/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
!function(){var t,e,s,i={identifier:"id",label:"id",items:[]},o=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=[];for(t=0;t<100;++t){for(e={},s=0;s<o.length;++s)e[o[s]]=t+1+o[s];r.push(e)}var a=r.length;for(t=0;t<a;++t)i.items.push(dojo.mixin({id:t+1},r[t]));this.test_store_data||(this.test_store_data=[]),this.test_store_data.push(dojo.clone(i)),this.test_store||(this.test_store=[]),this.test_store.push(new dojo.data.ItemFileWriteStore({data:i}))}();
//# sourceMappingURL=../../../../sourcemaps/grid/tests/enhanced/support/test_write_store_dnd.js.map
