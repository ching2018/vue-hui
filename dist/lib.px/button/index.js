/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=t.Button=void 0;var r=n(23),a=o(r),i=n(182),s=o(i);t.Button=a.default,t.ButtonGroup=s.default},2:function(e,t){e.exports=function(e,t,n,o){var r,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var u=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}})}return{esModule:r,exports:a,options:s}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},4:function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(b)return v;o.parentNode.removeChild(o)}if(g){var a=p++;o=f||(f=r()),t=i.bind(null,o,a,!1),n=i.bind(null,o,a,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function i(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,c=n(5),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){b=n;var r=c(e,t);return o(r),function(t){for(var n=[],a=0;a<r.length;a++){var i=r[a],s=l[i.id];s.refs--,n.push(s)}t?(r=c(e,t),o(r)):r=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],s=a[1],u=a[2],c=a[3],l={id:e+":"+r,css:s,media:u,sourceMap:c};o[i]?o[i].parts.push(l):n.push(o[i]={id:i,parts:[l]})}return n}},19:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||o.test(e)},r=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},a=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-o,a=r+t.offsetHeight;return r>=0&&r<n||a>0&&a<=n},i=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){i(e,t)||(e.className=""==e.className?t:e.className+" "+t)},u=function(e,t){if(i(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}};t.pageScroll=n,t.isColor=o,t.getScrollview=r,t.checkInview=a,t.addClass=s,t.removeClass=u},22:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".m-button{padding:0 12px}.btn{height:30px;font-size:13px;display:inline-block;padding:0 10px;box-sizing:content-box}.btn,.btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.btn-block{width:100%;display:block;font-size:18px;height:50px;margin-top:25px}.btn-primary{background-color:#04be02;color:#fff}.btn-primary:active{background-color:#04ab02}.btn-danger{background-color:#ef4f4f;color:#fff}.btn-danger:active{background-color:#d74747}.btn-warning{background-color:#ffb400;color:#fff}.btn-warning:active{background-color:#e6a200}.btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.btn-disabled:active{background-color:#b8b8b8}.btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.btn-hollow:active{background-color:#f7f7f7}.hairline .btn-hollow{border:.5px solid #dedede}",""])},23:function(e,t,n){n(40);var o=n(2)(n(41),n(37),null,null);e.exports=o.exports},37:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,style:{backgroundColor:e.bgcolor,color:e.color},attrs:{disabled:e.disabled}},[e._t("default")],2)},staticRenderFns:[]}},40:function(e,t,n){var o=n(22);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(4)("6b7b77aa",o,!0)},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(19);t.default={name:"hui-button",props:{disabled:Boolean,type:{validator:function(e){return["primary","danger","warning","hollow","disabled"].indexOf(e)>-1},default:"primary"},size:{validator:function(e){return["small","large"].indexOf(e)>-1}},bgcolor:{validator:function(e){return!e||(0,o.isColor)(e)}},color:{validator:function(e){return!e||(0,o.isColor)(e)}}},computed:{classes:function(){var e="large"==this.size?"btn-block":"btn",t="btn-"+this.type;return this.disabled&&(t="btn-disabled"),this.bgcolor&&(t=""),e+" "+t}}}},182:function(e,t,n){var o=n(2)(n(249),n(218),null,null);e.exports=o.exports},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-button"},[e._t("default")],2)},staticRenderFns:[]}},249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-button-group"}}})});