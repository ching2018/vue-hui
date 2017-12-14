/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}({0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckListItem=t.CheckList=void 0;var o=i(218),r=n(o),c=i(217),s=n(c);t.CheckList=r.default,t.CheckListItem=s.default},2:function(e,t){e.exports=function(e,t,i,n){var o,r=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),i&&(s._scopeId=i),n){var a=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];a[e]=function(){return t}})}return{esModule:o,exports:r,options:s}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&n[c[0]]||(i&&!c[2]?c[2]=i:i&&(c[2]="("+c[2]+") and ("+i+")"),e.push(c))}},e}},4:function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=u[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(r(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var c=[],o=0;o<i.parts.length;o++)c.push(r(i.parts[o]));u[i.id]={id:i.id,refs:1,parts:c}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,i,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(k){var r=h++;n=f||(f=o()),t=c.bind(null,n,r,!1),i=c.bind(null,n,r,!0)}else n=o(),t=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function c(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var r=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function s(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document,l=i(5),u={},d=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},k="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){p=i;var o=l(e,t);return n(o),function(t){for(var i=[],r=0;r<o.length;r++){var c=o[r],s=u[c.id];s.refs--,i.push(s)}t?(o=l(e,t),n(o)):o=[];for(var r=0;r<i.length;r++){var s=i[r];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete u[s.id]}}}};var v=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],c=r[0],s=r[1],a=r[2],l=r[3],u={id:e+":"+o,css:s,media:a,sourceMap:l};n[c]?n[c].parts.push(u):i.push(n[c]={id:c,parts:[u]})}return i}},6:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(i){t||(t=!0,(i||document).addEventListener("touchmove",e))},unlock:function(i){t=!1,(i||document).removeEventListener("touchmove",e)}}}(),n=function(){return{lock:function(e){o&&l(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){o&&u(e||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,i=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||i.test(e)||n.test(e)},c=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var i=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===i||"auto"===i)return t;t=t.parentNode}return window},s=function(e,t){var i=e===window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-n,r=o+t.offsetHeight;return o>=0&&o<i||r>0&&r<=i},a=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){a(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(a(e,t)){for(var i=" "+e.className.replace(/[\t\r\n]/g,"")+" ";i.indexOf(" "+t+" ")>=0;)i=i.replace(" "+t+" "," ");e.className=i.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(i,n,o){if(i!==n){var r=i+o>n?n:i+o;i>n&&(r=i-o<n?n:i-o),e===window?window.scrollTo(r,r):e.scrollTop=r,window.requestAnimationFrame(function(){return t(r,n,o)})}}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var r=Math.abs(i-n),c=Math.ceil(r/o*50);t(i,n,c)};t.pageScroll=i,t.preventScroll=n,t.isIOS=o,t.isColor=r,t.getScrollview=c,t.checkInview=s,t.addClass=l,t.removeClass=u,t.scrollTop=d},203:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,'.hui-checklist{background-color:#fff;position:relative;z-index:1}.hui-checklist:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-checklist-alignright .hui-checklist-content{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.hui-checklist-alignright .hui-checklist-item-icon{margin-left:0}.hui-checklist-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:1;margin-left:12px}.hui-checklist-item:not(:last-child):after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-checklist-item-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:12px;margin-left:-12px}.hui-checklist-item-icon>input[type=checkbox]{position:absolute;left:-9999em}.hui-checklist-item-icon>input[type=checkbox]:checked+.hui-checklist-icon{background-color:currentColor;border-color:currentColor}.hui-checklist-item-icon>input[type=checkbox]:checked+.hui-checklist-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.hui-checklist-item-icon>input[type=checkbox]:disabled+.hui-checklist-icon{border-color:#ccc;background-color:#f3f3f3}.hui-checklist-item-icon>input[type=checkbox]:disabled+.hui-checklist-icon>i{border-color:#ccc}.hui-checklist-icon{border:1px solid #ccc;border-radius:100px;display:block;position:relative;z-index:10;pointer-events:none;width:20px;height:20px}.hui-checklist-icon>i{width:6px;height:12px;content:"";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.hui-checklist-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;color:#333;padding-right:12px}',""])},217:function(e,t,i){var n=i(2)(i(340),i(275),null,null);e.exports=n.exports},218:function(e,t,i){i(322);var n=i(2)(i(341),i(291),null,null);e.exports=n.exports},275:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-checklist-item",on:{click:e.emitChangeHandler}},[e.label?i("div",{staticClass:"hui-checklist-item-icon"},[i("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked}}),e._v(" "),e._m(0)]):i("label",{staticClass:"hui-checklist-item-icon"},[i("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked},on:{change:e.changeHandler}}),e._v(" "),i("span",{staticClass:"hui-checklist-icon"},[i("i")])]),e._v(" "),i("div",{staticClass:"hui-checklist-content"},[e._t("default")],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"hui-checklist-icon"},[i("i")])}]}},291:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hui-checklist",class:"right"==e.align?"hui-checklist-alignright":"",style:{color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},322:function(e,t,i){var n=i(203);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);i(4)("005a0a06",n,!0)},340:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-checklist-item",data:function(){return{checked:!1,label:!0}},methods:{changeHandler:function(){this.disabled||(this.checked=!this.checked,this.$parent.emitInput())},emitChangeHandler:function(){this.label&&this.changeHandler()}},props:{disabled:{type:Boolean,default:!1},val:{type:[Boolean,String,Number],required:!0}},mounted:function(){this.$nextTick(this.$parent.checkItem)}}},341:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6);t.default={name:"hui-checklist",data:function(){return{isCheckAll:!1}},props:{value:{type:Array},color:{validator:function(e){return(0,n.isColor)(e)},default:"#4CD864"},align:{type:String,validator:function(e){return["left","right"].indexOf(e)>-1},default:"left"},label:{type:Boolean,default:!0},callback:{type:Function}},methods:{checkItem:function(){var e=this,t=this.$children.filter(function(e){return"hui-checklist-item"===e.$options.name});t.forEach(function(t){t.checked=e.contains(e.value,t.val),t.label=e.label})},contains:function(e,t){for(var i=e.length;i--;)if(e[i]==t)return!0;return!1},emitInput:function(e,t){var i=[],n=this.$children.filter(function(e){return"hui-checklist-item"===e.$options.name}),o=0;n.forEach(function(n){n.disabled?o++:e&&(n.checked=t),n.checked&&i.push(n.val)}),this.isCheckAll=i.length>=n.length-o,this.$emit("input",i)},checkAll:function(e){this.emitInput(!0,e)}},watch:{value:function(e){this.callback&&this.callback(e,this.isCheckAll),this.$nextTick(this.checkItem)}},mounted:function(){this.$on("hui.checklist.checkall",this.checkAll)}}}})});