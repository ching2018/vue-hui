/*! vue-hui v0.0.1 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";t.exports=n(176)},2:function(t,e){t.exports=function(t,e,n,o){var r,s=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}})}return{esModule:r,exports:s,options:a}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},4:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(s(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(s(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var s=d++;o=p||(p=r()),e=i.bind(null,o,s,!1),n=i.bind(null,o,s,!0)}else o=r(),e=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function i(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var s=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function a(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,u=n(5),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var r=u(t,e);return o(r),function(e){for(var n=[],s=0;s<r.length;s++){var i=r[s],a=l[i.id];a.refs--,n.push(a)}e?(r=u(t,e),o(r)):r=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var s=e[r],i=s[0],a=s[1],c=s[2],u=s[3],l={id:t+":"+r,css:a,media:c,sourceMap:u};o[i]?o[i].parts.push(l):n.push(o[i]={id:i,parts:[l]})}return n}},133:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".vmc-toast .block{position:absolute;max-width:80%;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;z-index:4;-webkit-transition:opacity .3s linear;transition:opacity .3s linear;padding:10px}.vmc-toast .block.block-top{top:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vmc-toast .block.block-center{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vmc-toast .block.block-bottom{bottom:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.vmc-toast .block .icon{font-size:30px;text-align:center}.vmc-toast .block .icon>div{margin:0 auto}.vmc-toast .block .text{display:block;font-size:14px;text-align:center}.vmc-toast-enter,.vmc-toast-leave{opacity:0}",""])},176:function(t,e,n){n(204);var o=n(2)(n(247),n(178),null,null);t.exports=o.exports},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vmc-toast",attrs:{transition:"vmc-toast"}},[n("hui-overlay",{attrs:{transparent:""}}),t._v(" "),n("div",{staticClass:"block",class:t.where,style:{padding:t.showIcon?"20px":"10px"}},[t.showIcon?n("div",{staticClass:"icon"},["loading"==t.type?n("hui-spinner",{attrs:{color:"#ffffff",size:"48",type:"0"}}):n("i",{class:t.icon})],1):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"text",style:{"margin-top":t.showIcon?"10px":""}},[t._v(t._s(t.content))])])],1)},staticRenderFns:[]}},204:function(t,e,n){var o=n(133);"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);n(4)("00ce2e46",o,!0)},247:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["loading","success","error","info"];e.default={data:function(){return{type:"loading",show:!1,content:"",position:"center"}},computed:{showIcon:function(){return!!~n.indexOf(this.type)},where:function(){return"block-"+(~["top","center","bottom"].indexOf(this.position)?this.position:"center")},icon:function(){return{success:"icono-checkCircle",error:"icono-crossCircle",info:"icono-exclamationCircle"}[this.type]}},methods:{_show:function(t){var e=this;this.type=t.type,this.content=t.content,this.position=t.position,this.show=!0,"number"==typeof t.second&&t.second>0&&setTimeout(function(){return e._hide()},1e3*t.second)},_hide:function(){this.show=!1}}}}})});