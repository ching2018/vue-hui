/*! vue-hui v0.0.3 by HUI TEAM (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}({0:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var n=i(348),r=o(n);t.KeyBoard=r.default},1:function(e,t){e.exports=function(e,t,i,o){var n,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,r=e.default);var a="function"==typeof r?r.options:r;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),i&&(a._scopeId=i),o){var l=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];l[e]=function(){return t}})}return{esModule:n,exports:r,options:a}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(o[r]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&o[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},4:function(e,t,i){function o(e){for(var t=0;t<e.length;t++){var i=e[t],o=u[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(r(i.parts[n]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{for(var s=[],n=0;n<i.parts.length;n++)s.push(r(i.parts[n]));u[i.id]={id:i.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,i,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return b;o.parentNode.removeChild(o)}if(m){var r=p++;o=f||(f=n()),t=s.bind(null,o,r,!1),i=s.bind(null,o,r,!0)}else o=n(),t=a.bind(null,o),i=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else i()}}function s(e,t,i,o){var n=i?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var r=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function a(e,t){var i=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,c=i(5),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,b=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){h=i;var n=c(e,t);return o(n),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r],a=u[s.id];a.refs--,i.push(a)}t?(n=c(e,t),o(n)):n=[];for(var r=0;r<i.length;r++){var a=i[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var i=[],o={},n=0;n<t.length;n++){var r=t[n],s=r[0],a=r[1],l=r[2],c=r[3],u={id:e+":"+n,css:a,media:l,sourceMap:c};o[s]?o[s].parts.push(u):i.push(o[s]={id:s,parts:[u]})}return i}},6:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(i){t||(t=!0,(i||document).addEventListener("touchmove",e))},unlock:function(i){t=!1,(i||document).removeEventListener("touchmove",e)}}}(),o=function(){return{lock:function(e){n&&c(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){n&&u(e||document.body,"g-fix-ios-prevent-scroll")}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,i=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||i.test(e)||o.test(e)},s=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var i=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===i||"auto"===i)return t;t=t.parentNode}return window},a=function(e,t){var i=e===window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,n=t.getBoundingClientRect().top-o,r=n+t.offsetHeight;return n>=0&&n<i||r>0&&r<=i},l=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},c=function(e,t){l(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(l(e,t)){for(var i=" "+e.className.replace(/[\t\r\n]/g,"")+" ";i.indexOf(" "+t+" ")>=0;)i=i.replace(" "+t+" "," ");e.className=i.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(i,o,n){if(i===o)return void("function"==typeof r&&r());var s=i+n>o?o:i+n;i>o&&(s=i-n<o?o:i-n),e===window?window.scrollTo(s,s):e.scrollTop=s,window.requestAnimationFrame(function(){return t(s,o,n)})}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var s=Math.abs(i-o),a=Math.ceil(s/n*50);t(i,o,a)};t.pageScroll=i,t.preventScroll=o,t.isIOS=n,t.isColor=r,t.getScrollview=s,t.checkInview=a,t.addClass=c,t.removeClass=u,t.scrollTop=d},15:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(6);t.default={name:"hui-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.4},animated:{type:Boolean,default:!0}},watch:{value:function(e){var t=this;this.show=e,o.isIOS&&(e?(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,o.removeClass)(t.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var e={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(e.opacity=this.opacity,e["pointer-events"]="auto"),e}},mounted:function(){this.scrollView=(0,o.getScrollview)(this.$el)},beforeDestroy:function(){o.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},16:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".hui-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},17:function(e,t,i){i(19);var o=i(1)(i(15),i(18),null,null);e.exports=o.exports},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-mask",style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},19:function(e,t,i){var o=i(16);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);i(4)("18dc84f7",o,!0)},212:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(6),r=i(17),s=o(r);t.default={name:"hui-keyboard",components:{"hui-mask":s.default},data:function(){return{nums:"",show:this.value,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{callback:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"安全键盘"},cancelText:{type:String,default:"取消"},inputText:{type:String,default:"输入数字密码"},triggerClose:{type:Boolean,default:!0},maskerOpacity:{validator:function(e){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(e)},default:.5}},watch:{value:function(e){n.isIOS&&(e?n.pageScroll.lock():n.pageScroll.unlock()),this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.callback&&this.callback(e)}},methods:{init:function(){var e=this;this.$on("hui.keyboard.error",function(t){e.setError(t)}),this.$on("hui.keyboard.close",this.close)},numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,i=Math.random,o=e.length,n=void 0,r=void 0,s=void 0,a=t(o/2)+1;a--;)n=t(i()*o),r=t(i()*o),n!==r&&(s=e[n],e[n]=e[r],e[r]=s);return e},close:function(){this.triggerClose&&this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},created:function(){var e=window.navigator&&window.navigator.userAgent||"";this.isMobile=!!e.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement,this.$nextTick(this.init)},beforeDestroy:function(){this.close(),n.pageScroll.unlock()}}},275:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,'.hui-keyboard{position:fixed;bottom:0;left:0;width:100%;z-index:1502;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;background-color:#f7f7f7}.hui-keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.hui-keyboard-content{background-color:#fff;margin-top:15px;position:relative}.hui-keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-keyboard-title{overflow:hidden;padding:10px 0 6px;color:#222;margin-bottom:1px;font-size:12px;text-align:center;background-color:#fff}.hui-keyboard-title:before{font-family:HUI-INLAY;content:"\\E60A";font-size:13px;color:#ff2424;line-height:1;margin-right:3px}.hui-keyboard-numbers{font-size:24px;background-color:#fff}.hui-keyboard-numbers>li{width:100%}.hui-keyboard-numbers>li,.hui-keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.hui-keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#666;height:50px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden}.hui-keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-keyboard-numbers>li:last-child>a:last-child,.hui-keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:15px;color:#686868}.hui-keyboard-numbers>li:last-child>a:last-child:after{font-family:HUI-INLAY;content:"\\E609";font-size:30px}.hui-keyboard-head{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#444;font-size:15px;position:relative}.hui-keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-keyboard-password{margin:0 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.hui-keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.hui-keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px}.hui-keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.hui-keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.hui-keyboard-error{padding:2px 40px;color:red;overflow:hidden;height:25px;line-height:25px;font-size:12px;text-align:left}',""])},348:function(e,t,i){i(436);var o=i(1)(i(212),i(380),null,null);e.exports=o.exports},380:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("hui-mask",{attrs:{opacity:e.maskerOpacity},nativeOn:{click:function(t){return e.close(t)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),e._v(" "),i("div",{staticClass:"hui-keyboard",class:e.show?"hui-keyboard-active":""},[i("div",{staticClass:"hui-keyboard-head"},[i("strong",[e._v(e._s(e.inputText))])]),e._v(" "),i("div",{staticClass:"hui-keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),i("ul",{staticClass:"hui-keyboard-password"},e._l(6,function(t,o){return i("li",{key:o},[i("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),i("div",{staticClass:"hui-keyboard-content"},[i("div",{staticClass:"hui-keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),i("ul",{staticClass:"hui-keyboard-numbers"},e._l(4,function(t,o){return i("li",{key:o},[e.triggerClose?[4==t?i("a",{attrs:{href:"javascript:;"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.cancelText))]):e._e()]:[4==t?i("a",{attrs:{href:"javascript:;"}}):e._e()],e._v(" "),e.isMobile?e._l(e.numsArr.slice(3*(t-1),3*t),function(t,o){return i("a",{key:o,attrs:{href:"javascript:;"},on:{touchstart:function(i){i.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}):e._l(e.numsArr.slice(3*(t-1),3*t),function(t,o){return i("a",{key:o,attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?i("a",{attrs:{href:"javascript:;"},on:{click:function(t){return t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])],1)},staticRenderFns:[]}},436:function(e,t,i){var o=i(275);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);i(4)("5da4074e",o,!0)}})});