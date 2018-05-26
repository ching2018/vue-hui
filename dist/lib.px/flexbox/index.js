/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FlexBoxItem=t.FlexBox=void 0;var i=n(342),o=r(i),s=n(341),l=r(s);t.FlexBox=o.default,t.FlexBoxItem=l.default},1:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var l="function"==typeof o?o.options:o;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),r){var a=l.computed||(l.computed={});Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}})}return{esModule:i,exports:o,options:l}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(x)return h;r.parentNode.removeChild(r)}if(m){var o=p++;r=d||(d=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=l.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document,u=n(5),f={},c=a&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,x=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){x=n;var i=u(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],l=f[s.id];l.refs--,n.push(l)}t?(i=u(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var l=n[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete f[l.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],l=o[1],a=o[2],u=o[3],f={id:e+":"+i,css:l,media:a,sourceMap:u};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}},206:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-flexbox-item",props:{align:{validator:function(e){return["top","center","bottom"].indexOf(e)>-1},default:"center"}},computed:{classes:function(){return"top"===this.align?"hui-flexbox-item-start":"bottom"===this.align?"hui-flexbox-item-end":"hui-flexbox-item-center"}}}},207:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-flexbox",props:{direction:{validator:function(e){return["horizontal","vertical"].indexOf(e)>-1},default:"horizontal"}}}},305:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".hui-flexbox{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.hui-flexbox-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.hui-flexbox-vertical .hui-flexbox-item{width:100%}.hui-flexbox-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.hui-flexbox-item-start{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;justify-self:flex-end}.hui-flexbox-item-center{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.hui-flexbox-item-end{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}",""])},341:function(e,t,n){var r=n(1)(n(206),n(424),null,null);e.exports=r.exports},342:function(e,t,n){n(466);var r=n(1)(n(207),n(429),null,null);e.exports=r.exports},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hui-flexbox-item",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},429:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hui-flexbox",class:"vertical"==e.direction?"hui-flexbox-vertical":"hui-flexbox-horizontal"},[e._t("default")],2)},staticRenderFns:[]}},466:function(e,t,n){var r=n(305);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("0774745a",r,!0)}})});