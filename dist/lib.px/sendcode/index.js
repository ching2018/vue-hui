/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SendCode=void 0;var o=n(252),i=r(o);e.SendCode=i.default},1:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},4:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(v){var i=p++;r=f||(f=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,c=n(5),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=c(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,n.push(a)}e?(o=c(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],u=i[2],c=i[3],d={id:t+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),r=function(){return{lock:function(t){o&&c(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){o&&d(t||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||r.test(t)},s=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},a=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-r,i=o+e.offsetHeight;return o>=0&&o<n||i>0&&i<=n},u=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},c=function(t,e){u(t,e)||(t.className=""===t.className?e:t.className+" "+e)},d=function(t,e){if(u(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},l=function(t){function e(n,r,o){if(n!==r){var i=n+o>r?r:n+o;n>r&&(i=n-o<r?r:n-o),t===window?window.scrollTo(i,i):t.scrollTop=i,window.requestAnimationFrame(function(){return e(i,r,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var i=Math.abs(n-r),s=Math.ceil(i/o*50);e(n,r,s)};e.pageScroll=n,e.preventScroll=r,e.isIOS=o,e.isColor=i,e.getScrollview=s,e.checkInview=a,e.addClass=c,e.removeClass=d,e.scrollTop=l},27:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".hui-button{padding:0 12px}.hui-btn{height:30px;font-size:13px;display:inline-block;padding:0 10px;box-sizing:content-box}.hui-btn,.hui-btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.hui-btn-block{width:100%;display:block;font-size:18px;height:50px;margin-top:25px}.hui-btn-circle{border-radius:200px}.hui-btn-primary{background-color:#04be02;color:#fff}.hui-btn-primary:active{background-color:#04ab02}.hui-btn-danger{background-color:#ef4f4f;color:#fff}.hui-btn-danger:active{background-color:#d74747}.hui-btn-warning{background-color:#ffb400;color:#fff}.hui-btn-warning:active{background-color:#e6a200}.hui-btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.hui-btn-disabled:active{background-color:#b8b8b8}.hui-btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.hui-btn-hollow:active{background-color:#f7f7f7}.hairline .hui-btn-hollow{border:.5px solid #dedede}",""])},28:function(t,e,n){n(49);var r=n(1)(n(52),n(46),null,null);t.exports=r.exports},46:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classes,style:{backgroundColor:t.bgcolor,color:t.color},attrs:{disabled:t.disabled,type:t.actionType}},[t._t("default")],2)},staticRenderFns:[]}},49:function(t,e,n){var r=n(27);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(4)("e8a5b9ba",r,!0)},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.default={name:"hui-button",props:{disabled:Boolean,actionType:{validator:function(t){return["button","submit","reset"].indexOf(t)>-1},default:"button"},type:{validator:function(t){return["primary","danger","warning","hollow","disabled"].indexOf(t)>-1},default:"primary"},size:{validator:function(t){return["small","large"].indexOf(t)>-1}},bgcolor:{validator:function(t){return!t||(0,r.isColor)(t)}},color:{validator:function(t){return!t||(0,r.isColor)(t)}},shape:{validator:function(t){return["square","circle"].indexOf(t)>-1},default:"square"}},computed:{classes:function(){var t="large"===this.size?"hui-btn-block":"hui-btn",e="hui-btn-"+this.type;return this.disabled&&(e="hui-btn-disabled"),this.bgcolor&&(e=""),t+" "+e+("circle"===this.shape?" hui-btn-circle":"")}}}},252:function(t,e,n){var r=n(1)(n(382),n(289),null,null);t.exports=r.exports},289:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hui-sendcode-button",{class:t.start?"btn-disabled":"",style:{backgroundColor:t.bgcolor,color:t.color},attrs:{size:t.size,type:t.type,"action-type":t.actionType,disabled:t.start}},[t._v(t._s(t.tmpStr)+"\n")])},staticRenderFns:[]}},382:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=r(o);e.default={name:"hui-sendcode",extends:i.default,components:{"hui-sendcode-button":i.default},data:function(){return{tmpStr:"获取短信验证码",timer:null,start:!1,runSecond:this.second}},props:{initStr:String,second:{default:60,validator:function(t){return/^\d*$/.test(t)}},runStr:{type:String,default:"{%s}秒后重新获取"},resetStr:{type:String,default:"重新获取验证码"},value:{type:Boolean,default:!1},storageKey:{type:String}},methods:{run:function(t){var e=this,n=t?t:this.runSecond;if(this.storageKey){var r=(new Date).getTime()+1e3*n;window.sessionStorage.setItem(this.storageKey,r)}t||(this.tmpStr=this.getStr(n)),this.timer=setInterval(function(){n--,e.tmpStr=e.getStr(n),n<=0&&e.stop()},1e3)},stop:function(){this.tmpStr=this.resetStr,this.start=!1,this.$emit("input",!1),clearInterval(this.timer)},getStr:function(t){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)}},watch:{value:function(t){this.start=t,t&&this.run()}},created:function(){var t=~~((window.sessionStorage.getItem(this.storageKey)-(new Date).getTime())/1e3);t>0&&this.storageKey?(this.tmpStr=this.getStr(t),this.start=!0,this.run(t)):this.initStr&&(this.tmpStr=this.initStr)},destroyed:function(){!this.storageKey&&this.stop()}}}})});