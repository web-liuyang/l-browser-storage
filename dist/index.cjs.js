"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("js-base64");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(require("js-cookie"));var r=Object.freeze({__proto__:null,get:function(t,o){var r=localStorage.getItem(t);return r?(null==o?void 0:o.decode)?JSON.parse(e.decode(r)):JSON.parse(r):null},set:function(t,o,r){(null==r?void 0:r.encode)?localStorage.setItem(t,e.encode(JSON.stringify(o))):localStorage.setItem(t,JSON.stringify(o))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}});var n=Object.freeze({__proto__:null,get:function(t,o){var r=sessionStorage.getItem(t);return r?(null==o?void 0:o.decode)?JSON.parse(e.decode(r)):JSON.parse(r):null},set:function(t,o,r){(null==r?void 0:r.encode)?sessionStorage.setItem(t,e.encode(JSON.stringify(o))):sessionStorage.setItem(t,JSON.stringify(o))},remove:function(e){sessionStorage.removeItem(e)},clear:function(){sessionStorage.clear()}});Object.defineProperty(exports,"cookie",{enumerable:!0,get:function(){return o.default}}),exports.local=r,exports.session=n;
