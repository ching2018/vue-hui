/*! vue-hui v0.0.3 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="/dist/",t(0)}({0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Number=void 0;var r=a(242),i=n(r);t.Number=i.default},1:function(e,t){e.exports=function(e,t,a,n){var r,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),a&&(s._scopeId=a),n){var c=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:r,exports:i,options:s}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},4:function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=l[a.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](a.parts[r]);for(;r<a.parts.length;r++)n.parts.push(i(a.parts[r]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var o=[],r=0;r<a.parts.length;r++)o.push(i(a.parts[r]));l[a.id]={id:a.id,refs:1,parts:o}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,a,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(f)return p;n.parentNode.removeChild(n)}if(v){var i=b++;n=u||(u=r()),t=o.bind(null,n,i,!1),a=o.bind(null,n,i,!0)}else n=r(),t=s.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function o(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var a=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var c="undefined"!=typeof document,m=a(5),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),u=null,b=0,f=!1,p=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a){f=a;var r=m(e,t);return n(r),function(t){for(var a=[],i=0;i<r.length;i++){var o=r[i],s=l[o.id];s.refs--,a.push(s)}t?(r=m(e,t),n(r)):r=[];for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var h=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var a=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],c=i[2],m=i[3],l={id:e+":"+r,css:s,media:c,sourceMap:m};n[o]?n[o].parts.push(l):a.push(n[o]={id:o,parts:[l]})}return a}},191:function(e,t,a){t=e.exports=a(3)(),t.push([e.id,".vmc-number-blade{position:relative;height:28px;width:28px}.vmc-number-blade .blade{position:absolute;left:44.5%;top:37%;width:10%;height:25%;border-radius:50%/20%;-webkit-animation:vmc-number-blade 1s linear infinite;animation:vmc-number-blade 1s linear infinite;-webkit-animation-play-state:running;animation-play-state:running;background-color:#ccc}.vmc-number-blade .blade-0{-webkit-transform:rotate(30deg) translateY(-150%);transform:rotate(30deg) translateY(-150%);-webkit-animation-delay:-1.66666667s;animation-delay:-1.66666667s}.vmc-number-blade .blade-1{-webkit-transform:rotate(60deg) translateY(-150%);transform:rotate(60deg) translateY(-150%);-webkit-animation-delay:-1.58333333s;animation-delay:-1.58333333s}.vmc-number-blade .blade-2{-webkit-transform:rotate(90deg) translateY(-150%);transform:rotate(90deg) translateY(-150%);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.vmc-number-blade .blade-3{-webkit-transform:rotate(120deg) translateY(-150%);transform:rotate(120deg) translateY(-150%);-webkit-animation-delay:-1.41666667s;animation-delay:-1.41666667s}.vmc-number-blade .blade-4{-webkit-transform:rotate(150deg) translateY(-150%);transform:rotate(150deg) translateY(-150%);-webkit-animation-delay:-1.33333333s;animation-delay:-1.33333333s}.vmc-number-blade .blade-5{-webkit-transform:rotate(180deg) translateY(-150%);transform:rotate(180deg) translateY(-150%);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.vmc-number-blade .blade-6{-webkit-transform:rotate(210deg) translateY(-150%);transform:rotate(210deg) translateY(-150%);-webkit-animation-delay:-1.16666667s;animation-delay:-1.16666667s}.vmc-number-blade .blade-7{-webkit-transform:rotate(240deg) translateY(-150%);transform:rotate(240deg) translateY(-150%);-webkit-animation-delay:-1.08333333s;animation-delay:-1.08333333s}.vmc-number-blade .blade-8{-webkit-transform:rotate(270deg) translateY(-150%);transform:rotate(270deg) translateY(-150%);-webkit-animation-delay:-1s;animation-delay:-1s}.vmc-number-blade .blade-9{-webkit-transform:rotate(300deg) translateY(-150%);transform:rotate(300deg) translateY(-150%);-webkit-animation-delay:-.91666667s;animation-delay:-.91666667s}.vmc-number-blade .blade-10{-webkit-transform:rotate(330deg) translateY(-150%);transform:rotate(330deg) translateY(-150%);-webkit-animation-delay:-.83333333s;animation-delay:-.83333333s}.vmc-number-blade .blade-11{-webkit-transform:rotate(1turn) translateY(-150%);transform:rotate(1turn) translateY(-150%);-webkit-animation-delay:-.75s;animation-delay:-.75s}@-webkit-keyframes vmc-number-blade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}@keyframes vmc-number-blade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}.vmc-number-double-bounce{position:relative;height:28px;width:28px}.vmc-number-double-bounce .bounce{width:100%;height:100%;border-radius:50%;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:vmc-number-double-bounce 2s infinite ease-in-out;animation:vmc-number-double-bounce 2s infinite ease-in-out;background-color:#ccc}.vmc-number-double-bounce .bounce-1{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes vmc-number-double-bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes vmc-number-double-bounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.vmc-number-triple-bounce{font-size:0;padding:9px 0}.vmc-number-triple-bounce .bounce{border-radius:100%;display:inline-block;-webkit-animation:vmc-number-triple-bounce 1.4s infinite ease-in-out both;animation:vmc-number-triple-bounce 1.4s infinite ease-in-out both;background-color:#ccc;width:10px;height:10px}.vmc-number-triple-bounce .bounce-0{-webkit-animation-delay:-.32s;animation-delay:-.32s}.vmc-number-triple-bounce .bounce-1{-webkit-animation-delay:-.16s;animation-delay:-.16s;margin:0 4px}@-webkit-keyframes vmc-number-triple-bounce{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes vmc-number-triple-bounce{0%,80%,to{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.vmc-number-fading-circle{position:relative;height:28px;width:28px}.vmc-number-fading-circle .block{position:absolute;width:100%;height:100%;left:0;top:0}.vmc-number-fading-circle .block .circle{margin:0 auto;width:15%;height:15%;border-radius:100%;-webkit-animation:vmc-number-fading-circle 1.2s infinite ease-in-out both;animation:vmc-number-fading-circle 1.2s infinite ease-in-out both;background-color:#ccc}.vmc-number-fading-circle .block-0{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.vmc-number-fading-circle .block-0 .circle-0{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.vmc-number-fading-circle .block-1{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.vmc-number-fading-circle .block-1 .circle-1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.vmc-number-fading-circle .block-2{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.vmc-number-fading-circle .block-2 .circle-2{-webkit-animation-delay:-1s;animation-delay:-1s}.vmc-number-fading-circle .block-3{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.vmc-number-fading-circle .block-3 .circle-3{-webkit-animation-delay:-.9s;animation-delay:-.9s}.vmc-number-fading-circle .block-4{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.vmc-number-fading-circle .block-4 .circle-4{-webkit-animation-delay:-.8s;animation-delay:-.8s}.vmc-number-fading-circle .block-5{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.vmc-number-fading-circle .block-5 .circle-5{-webkit-animation-delay:-.7s;animation-delay:-.7s}.vmc-number-fading-circle .block-6{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.vmc-number-fading-circle .block-6 .circle-6{-webkit-animation-delay:-.6s;animation-delay:-.6s}.vmc-number-fading-circle .block-7{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.vmc-number-fading-circle .block-7 .circle-7{-webkit-animation-delay:-.5s;animation-delay:-.5s}.vmc-number-fading-circle .block-8{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.vmc-number-fading-circle .block-8 .circle-8{-webkit-animation-delay:-.4s;animation-delay:-.4s}.vmc-number-fading-circle .block-9{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.vmc-number-fading-circle .block-9 .circle-9{-webkit-animation-delay:-.3s;animation-delay:-.3s}.vmc-number-fading-circle .block-10{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.vmc-number-fading-circle .block-10 .circle-10{-webkit-animation-delay:-.2s;animation-delay:-.2s}.vmc-number-fading-circle .block-11{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.vmc-number-fading-circle .block-11 .circle-11{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes vmc-number-fading-circle{0%,39%,to{opacity:0}40%{opacity:1}}@keyframes vmc-number-fading-circle{0%,39%,to{opacity:0}40%{opacity:1}}.vmc-number-snake{-webkit-animation:vmc-number-snake .8s infinite linear;animation:vmc-number-snake .8s infinite linear;border:4px solid transparent;border-radius:50%;box-sizing:border-box;height:28px;width:28px;border-top-color:#ccc;border-left-color:#ccc;border-bottom-color:#ccc}@-webkit-keyframes vmc-number-snake{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vmc-number-snake{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},242:function(e,t,a){a(318);var n=a(1)(a(372),a(272),null,null);e.exports=n.exports},272:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"m-number",style:{height:e.height,width:e.width}},[a("a",{ref:"minus",attrs:{href:"javascript:;"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.counter,expression:"counter"}],ref:"numInput",staticClass:"number-input",attrs:{type:"text",readonly:e.readonly,placeholder:""},domProps:{value:e.counter},on:{input:function(t){t.target.composing||(e.counter=t.target.value)}}}),e._v(" "),a("a",{ref:"add",attrs:{href:"javascript:;"}})])},staticRenderFns:[]}},318:function(e,t,a){var n=a(191);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);a(4)("d714b9c6",n,!0)},372:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-number",data:function(){return{counter:0,tapParams:{timer:null,tapStartTime:0},parms:{max:0,min:-1}}},watch:{value:function(){this.setDefalutValue()}},props:{unit:{default:1,validator:function(e){return/^([1-9]\d*)$/.test(e)}},max:{default:0,validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}},min:{default:-1,validator:function(e){return/^((-?([1-9]\d*))|0)$/.test(e)}},longpress:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},value:{validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}},width:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:"2rem"},height:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:".6rem"}},methods:{init:function(){this.checkParameters()&&(this.setDefalutValue(),this.bindEvents())},checkParameters:function(){var e=~~this.max,t=~~this.unit,a=~~this.min;return e<t&&0!=e?(console.error("[HUI warn]: The parameter 'max'("+e+") must be greater than or equal to 'unit'("+t+")."),!1):e%t!=0?(console.error("[HUI warn]: The parameter 'max'("+e+") and 'unit'("+t+") must be multiple."),!1):a%t!=0&&a>=0?(console.error("[HUI warn]: The parameter 'min'("+a+") and 'unit'("+t+") must be multiple."),!1):!(e<a&&0!=e)||(console.error("[HUI warn]: The parameter 'max'("+e+") must be greater than to 'min'("+a+")."),!1)},setDefalutValue:function(){var e=~~this.unit,t=~~this.min,a=~~this.value;return~~a>0?void this.setValue(a):void this.setValue(t<0?e:t)},calculation:function(e){var t=~~this.max,a=~~this.min<0?~~this.unit:~~this.min,n=~~this.unit;if(!this.readonly){var r=~~this.counter,i=void 0;if("add"==e){if(i=r+n,0!=t&&i>t)return}else if(i=r-n,i<a)return;this.setValue(i),this.longpress&&this.longpressHandler(e)}},setValue:function(e){var t=~~this.max,a=~~this.min<0?~~this.unit:~~this.min,n=~~this.unit;/^(([1-9]\d*)|0)$/.test(e)||(e=n),e>t&&0!=t&&(e=t),e%n>0&&(e=e-e%n+n,e>t&&0!=t&&(e-=n)),e<a&&(e=a-a%n),this.counter=e,this.$emit("input",e)},longpressHandler:function(e){var t=this,a=(new Date).getTime()/1e3,n=a-this.tapParams.tapStartTime;n<1&&(n=.5);var r=10*n;30==n&&(r=50),n>=40&&(r=100),this.tapParams.timer=setTimeout(function(){t.calculation(e)},1e3/r)},clearTapTimer:function(){clearTimeout(this.tapParams.timer)},bindEvents:function(){var e=this,t=this.$refs.add,a=this.$refs.minus,n={mousedownEvent:"touchstart",mouseupEvent:"touchend"},r=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();r||(n.mousedownEvent="mousedown",n.mouseupEvent="mouseup"),t.addEventListener(n.mousedownEvent,function(a){e.longpress&&(a.preventDefault(),a.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,t.addEventListener(n.mouseupEvent,e.clearTapTimer)),e.calculation("add")}),a.addEventListener(n.mousedownEvent,function(t){e.longpress&&(t.preventDefault(),t.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,a.addEventListener(n.mouseupEvent,e.clearTapTimer)),e.calculation("minus")}),this.$refs.numInput.addEventListener("change",function(){e.setValue(~~e.counter)})}},mounted:function(){this.$nextTick(this.init)}}}})});