/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CitySelect=void 0;var s=i(190),o=n(s);e.CitySelect=o.default},2:function(t,e){t.exports=function(t,e,i,n){var s,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),n){var c=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}})}return{esModule:s,exports:o,options:a}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},4:function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=u[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(o(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(o(i.parts[s]));u[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function o(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return h;n.parentNode.removeChild(n)}if(v){var o=m++;n=d||(d=s()),e=r.bind(null,n,o,!1),i=r.bind(null,n,o,!0)}else n=s(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function a(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c="undefined"!=typeof document,l=i(5),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,m=0,p=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var s=l(t,e);return n(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o],a=u[r.id];a.refs--,i.push(a)}e?(s=l(t,e),n(s)):s=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var o=e[s],r=o[0],a=o[1],c=o[2],l=o[3],u={id:t+":"+s,css:a,media:c,sourceMap:l};n[r]?n[r].parts.push(u):i.push(n[r]={id:r,parts:[u]})}return i}},12:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),s=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,i=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||i.test(t)||n.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var i=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===i||"auto"===i)return e;e=e.parentNode}return window},r=function(t,e){var i=t==window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,s=e.getBoundingClientRect().top-n,o=s+e.offsetHeight;return s>=0&&s<i||o>0&&o<=i},a=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},c=function(t,e){a(t,e)||(t.className=""==t.className?e:t.className+" "+e)},l=function(t,e){if(a(t,e)){for(var i=" "+t.className.replace(/[\t\r\n]/g,"")+" ";i.indexOf(" "+e+" ")>=0;)i=i.replace(" "+e+" "," ");t.className=i.replace(/^\s+|\s+$/g,"")}},u=function(t){function e(i,n,s){if(i!==n){var o=i+s>n?n:i+s;i>n&&(o=i-s<n?n:i-s),t===window?window.scrollTo(o,o):t.scrollTop=o,window.requestAnimationFrame(function(){return e(o,n,s)})}}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var o=Math.abs(i-n),r=Math.ceil(o/s*50);e(i,n,r)};e.pageScroll=i,e.isIOS=n,e.isColor=s,e.getScrollview=o,e.checkInview=r,e.addClass=c,e.removeClass=l,e.scrollTop=u},179:function(t,e,i){e=t.exports=i(3)(),e.push([t.id,'.mask-cityselect{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-cityselect,.mask-cityselect{position:fixed;z-index:500;bottom:0;left:0}.m-cityselect{width:100%;height:75%;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.m-cityselect.cityselect-active{-webkit-transform:translate(0);transform:translate(0)}.cityselect-header{position:absolute;top:0;left:0;width:100%;z-index:1}.cityselect-header:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.cityselect-title{width:100%;font-size:15px;text-align:center;height:45px;line-height:45px;position:relative}.cityselect-title:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.cityselect-nav{width:100%;padding-left:10px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.cityselect-nav>a{font-size:13px;color:#222;display:block;height:40px;line-height:46px;padding:0 10px;position:relative;margin-right:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:40%}.cityselect-nav>a.cityselect-nav-active{color:#f23030}.cityselect-nav>a.cityselect-nav-active:after{content:"";width:100%;height:2px;background-color:#f23030;position:absolute;bottom:0;left:0;z-index:2}.cityselect-content{height:100%;padding-top:85px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.cityselect-content.cityselect-move-animate{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.cityselect-content.cityselect-next{-webkit-transform:translate(-50%);transform:translate(-50%)}.cityselect-content.cityselect-prev{-webkit-transform:translate(0);transform:translate(0)}.cityselect-content>.cityselect-item{display:block;height:inherit;width:50%;-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:#fff}.cityselect-content>.cityselect-item::-webkit-scrollbar{width:0}.cityselect-content>.cityselect-item:nth-child(2n){background-color:#f5f5f5}.cityselect-item-box{width:100%;height:inherit;display:block;padding:0 20px}.cityselect-item-box>a{color:#333;font-size:13px;height:40px;line-height:40px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;position:relative;z-index:1}.cityselect-item-box>a:before{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.cityselect-item-box>a:active{background:none}.cityselect-item-box>a span{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;text-overflow:ellipsis;line-height:16px;max-height:32.2px}.cityselect-item-box>a.cityselect-item-active{color:#f23030}.cityselect-item-box>a.cityselect-item-active:after{display:block;content:"\\E600";font-family:HUI-INLAY}.cityselect-loading{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:13px;color:#999}',""])},190:function(t,e,i){i(251);var n=i(2)(i(267),i(231),null,null);t.exports=n.exports},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask-cityselect",on:{click:function(e){e.stopPropagation(),t.close(e)}}}),t._v(" "),i("div",{staticClass:"m-cityselect",class:t.show?"cityselect-active":""},[i("div",{staticClass:"cityselect-header"},[i("p",{staticClass:"cityselect-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"cityselect-nav"},t._l(t.columnNum,function(e){return i("a",{directives:[{name:"show",rawName:"v-show",value:!!t.nav["txt"+e],expression:"!!nav['txt' + index]"}],class:e==t.navIndex?"cityselect-nav-active":"",attrs:{href:"javascript:;"},on:{click:function(i){i.stopPropagation(),t.navEvent(e)}}},[t._v(t._s(t.nav["txt"+e]))])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.ready,expression:"!ready"}],staticClass:"cityselect-loading"},[t._v("加载中")]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"cityselect-content",class:t.activeClasses},t._l(t.columnNum,function(e){return i("li",{ref:"itemBox"+e,refInFor:!0,staticClass:"cityselect-item"},[i("div",{staticClass:"cityselect-item-box"},t._l(t.columns["columnItems"+e],function(n){return i("a",{class:t.currentClass(n.v,n.n,e),attrs:{href:"javascript:;",data:n.v,data2:t.active["itemValue"+e]},on:{click:function(i){i.stopPropagation(),t.itemEvent(e,n.n,n.v,n.c)}}},[i("span",[t._v(t._s(n.n))])])}))])}))])])},staticRenderFns:[]}},251:function(t,e,i){var n=i(179);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(4)("6457c6cc",n,!0)},267:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12);e.default={name:"hui-city-select",data:function(){return{show:this.value,navIndex:1,nav:{txt1:"请选择",txt2:"",txt3:""},columns:{columnItems1:this.items,columnItems2:[],columnItems3:[]},active:{},activeClasses:"",itemHeight:40,columnNum:1}},props:{ready:{type:Boolean,default:!0},provance:String,city:String,area:String,done:Function,title:{type:String,default:"所在地区"},value:{type:Boolean,default:!1},items:{type:Array,required:!0}},watch:{value:function(t){n.isIOS&&(t?(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")),this.show=t},ready:function(t){t&&setTimeout(this.init,0)}},methods:{init:function(){this.scrollView=(0,n.getScrollview)(this.$el),this.ready&&this.isArray(this.items)&&this.provance&&this.setDefalutValue(this.items,"provance",1)},navEvent:function(t){this.columnNum>2&&(t>=this.columnNum?this.forwardView(!0):this.backoffView()),this.navIndex=t},itemEvent:function(t,e,i,n){this.active["itemValue"+t]=i,this.active["itemName"+t]=e,this.nav["txt"+t]=e,this.columns["columnItems"+(t+1)]=n,t>1&&n&&this.columnNum>2&&this.forwardView(!0),this.clearNavTxt(t),t===this.columnNum||n.length<=0?(this.navIndex=t,this.returnValue()):(this.navIndex=t+1,this.nav["txt"+(t+1)]="请选择")},currentClass:function(t,e,i){return t&&t==this.active["itemValue"+i]||e&&e===this.active["itemName"+i]?"cityselect-item-active":""},clearNavTxt:function(t){for(var e=0;e<this.columnNum;e++)e>t&&(this.nav["txt"+(e+1)]="")},getColumsNum:function(t){this.isArray(t.c)&&(this.columnNum++,this.getColumsNum(t.c[0]))},isArray:function(t){return t&&t.constructor===Array&&t.length>0},setDefalutValue:function(t,e,i){var n=this;t.every(function(t,s){if(t.v==n[e]||t.n===n[e]){var o=n.columns["columnItems"+(i+1)]=t.c,r=n.$refs["itemBox"+i][0];return r.scrollTop=s*n.itemHeight-r.offsetHeight/3,n.active["itemValue"+i]=t.v,n.active["itemName"+i]=t.n,n.nav["txt"+i]=t.n,n.navIndex=i,++i,i>=n.columnNum&&n.columnNum>2&&n.forwardView(!1),n.isArray(o)&&n.setDefalutValue(o,["","provance","city","area"][i],i),!1}return!0})},returnValue:function(){this.done(this.active),this.close()},close:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1),this.show=!1},backoffView:function(){this.activeClasses="cityselect-move-animate cityselect-prev"},forwardView:function(t){this.activeClasses=(t?"cityselect-move-animate":"")+" cityselect-next"}},created:function(){this.items&&this.items[0]&&this.getColumsNum(this.items[0])},mounted:function(){this.init()},destroyed:function(){this.close()}}}})});