!function(){"use strict";var t={7091:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},6391:function(t,e,n){t.exports=n.p+"assets/ekipazh-text0d5d1cd711edda24cfc8.png"},8120:function(t,e,n){t.exports=n.p+"assets/miroplast-text1aa98770516a4c3222b5.png"},7130:function(t,e,n){t.exports=n.p+"assets/shodnia-texta2af70c14c774915ff2a.png"},7187:function(t,e,n){t.exports=n.p+"assets/stockm-logo8f193e59174c4c1184af.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){var t=n(7091),e=n.n(t),o=new URL(n(7187),n.b),r=new URL(n(8120),n.b),c=new URL(n(7130),n.b),i=new URL(n(6391),n.b);e()(o),e()(r),e()(c),e()(i);const a=document.querySelector(".mobile-navigation"),s=document.querySelectorAll(".main-navigation__link"),u=()=>{a.classList.remove("show")};s.forEach((t=>function(t){t.href===window.location.href&&t.setAttribute("aria-current","page")}(t)));const l=document.querySelector(".mobile-menu-btn"),f=document.querySelectorAll(".mobile-navigation__link"),p=document.querySelector(".mobile-navigation__close-btn");l.addEventListener("click",(()=>{a.classList.add("show")})),p.addEventListener("click",u),f.forEach((function(t){t.addEventListener("click",u)}))}()}();