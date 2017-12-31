/*! vue-hui v0.0.3 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BackTop=void 0;var r=n(213),i=o(r);t.BackTop=i.default},1:function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},4:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var i=p++;o=f||(f=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,l=n(5),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=l(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,n.push(a)}t?(r=l(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],c=i[2],l=i[3],u={id:e+":"+r,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},6:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),o=function(){return{lock:function(e){r&&l(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){r&&u(e||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},s=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,i=r+t.offsetHeight;return r>=0&&r<n||i>0&&i<=n},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(c(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,o,r){if(n===o)return void("function"==typeof i&&i());var s=n+r>o?o:n+r;n>o&&(s=n-r<o?o:n-r),e===window?window.scrollTo(s,s):e.scrollTop=s,window.requestAnimationFrame(function(){return t(s,o,r)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var s=Math.abs(n-o),a=Math.ceil(s/r*50);t(n,o,a)};t.pageScroll=n,t.preventScroll=o,t.isIOS=r,t.isColor=i,t.getScrollview=s,t.checkInview=a,t.addClass=l,t.removeClass=u,t.scrollTop=d},189:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.hui-backtop{border:1px solid silver;width:50px;height:50px;background-color:hsla(0,0%,100%,.85);position:fixed;border-radius:50%;right:5%;bottom:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.hui-backtop:after{font-family:HUI-INLAY;content:"\\E788";font-size:25px;color:silver}',""])},213:function(e,t,n){n(316);var o=n(1)(n(344),n(270),null,null);e.exports=o.exports},270:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],on:{click:function(t){t.stopPropagation(),e.backtop(t)}}},[e.$slots.default?e._t("default"):n("div",{staticClass:"hui-backtop"})],2)},staticRenderFns:[]}},316:function(e,t,n){var o=n(189);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(4)("2aeea9e9",o,!0)},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);t.default={name:"hui-backtop",data:function(){return{show:!1}},methods:{backtop:function(){var e=0;e=this.scrollView===window?document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop:this.scrollView.scrollTop,(0,o.scrollTop)(this.scrollView,e,0)},scrollHandler:function(){var e=window.pageYOffset,t=window.innerHeight;this.scrollView!==window&&(e=this.scrollView.scrollTop,t=this.scrollView.offsetHeight),this.show=e>=t/2},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},50)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el),this.scrollView.addEventListener("scroll",this.throttledCheck,!1),this.scrollView.addEventListener("resize",this.scrollHandler,!1)},destroyed:function(){this.scrollView.removeEventListener("scroll",this.throttledCheck,!1),this.scrollView.removeEventListener("resize",this.scrollHandler,!1)}}}})});