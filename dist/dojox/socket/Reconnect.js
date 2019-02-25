/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojox/socket","dojo/aspect"],function(e,n){return e.Reconnect=function(c,t){var o,r,i=t.reconnectTime||1e4;return t=t||{},n.after(c,"onclose",function(n){clearTimeout(o),n.wasClean||c.disconnected(function(){e.replace(c,r=c.reconnect())})},!0),c.disconnected||(c.disconnected=function(e){setTimeout(function(){e(),o=setTimeout(function(){r.readyState<2&&(i=t.reconnectTime||1e4)},1e4)},i),i*=t.backoffRate||2}),c.reconnect||(c.reconnect=function(){return c.args?e.LongPoll(c.args):e.WebSocket({url:c.URL||c.url})}),c},e.Reconnect});
//# sourceMappingURL=../sourcemaps/socket/Reconnect.js.map
