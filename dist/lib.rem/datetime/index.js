/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],e):"object"==typeof exports?exports.hui=e(require("Vue")):t.hui=e(t.Vue)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.DateTime=void 0;var i=n(223),a=r(i);e.DateTime=a.default},2:function(t,e){t.exports=function(t,e,n,r){var i,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];u[t]=function(){return e}})}return{esModule:i,exports:a,options:s}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},4:function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=c[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(a(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(a(n.parts[i]));c[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(m)return p;r.parentNode.removeChild(r)}if(_){var a=h++;r=f||(f=i()),e=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var a=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(5),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,m=!1,p=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var i=l(t,e);return r(i),function(e){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=c[o.id];s.refs--,n.push(s)}e?(i=l(t,e),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s=a[1],u=a[2],l=a[3],c={id:t+":"+i,css:s,media:u,sourceMap:l};r[o]?r[o].parts.push(c):n.push(r[o]={id:o,parts:[c]})}return n}},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),r=function(){return{lock:function(t){i&&l(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){i&&c(t||document.body,"g-fix-ios-prevent-scroll")}}}(),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),a=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||r.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},s=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-r,a=i+e.offsetHeight;return i>=0&&i<n||a>0&&a<=n},u=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){u(t,e)||(t.className=""===t.className?e:t.className+" "+e)},c=function(t,e){if(u(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},d=function(t){function e(n,r,i){if(n!==r){var a=n+i>r?r:n+i;n>r&&(a=n-i<r?r:n-i),t===window?window.scrollTo(a,a):t.scrollTop=a,window.requestAnimationFrame(function(){return e(a,r,i)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var a=Math.abs(n-r),o=Math.ceil(a/i*50);e(n,r,o)};e.pageScroll=n,e.preventScroll=r,e.isIOS=i,e.isColor=a,e.getScrollview=o,e.checkInview=s,e.addClass=l,e.removeClass=c,e.scrollTop=d},15:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".hui-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},16:function(t,e,n){n(18);var r=n(2)(n(19),n(17),null,null);t.exports=r.exports},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hui-mask",style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},18:function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(4)("0844c284",r,!0)},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.default={name:"hui-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.4},animated:{type:Boolean,default:!0}},watch:{value:function(t){var e=this;this.show=t,r.isIOS&&(t?(0,r.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,r.removeClass)(e.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var t={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(t.opacity=this.opacity,t["pointer-events"]="auto"),t}},mounted:function(){this.scrollView=(0,r.getScrollview)(this.$el)},destroyed:function(){r.isIOS&&(0,r.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},62:function(e,n){e.exports=t},179:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={isDateTimeString:function(t){return/^\d{4}((\.|-|\/)(0[1-9]|1[0-2]))((\.|-|\/)(0[1-9]|[12][0-9]|3[0-1]))( ([01][0-9]|2[0-3]):([012345][0-9]))?$/.test(t)},isMonthString:function(t){return/^\d{4}((\.|-|\/)(0[1-9]|1[0-2]))?$/.test(t)},isDayString:function(t){return/^((0[1-9]|1[0-2]))((\.|-|\/)(0[1-9]|[12][0-9]|3[0-1]))?$/.test(t)},isTimeString:function(t){return/^([01][0-9]|2[0-3]):([012345][0-9])$/.test(t)},mentStr:function(t){return(100+~~t+"").substr(1,2)},getYearItems:function(t){var e=[],n=~~t.startYear,r=~~t.endYear,i=new Date,a=i.getFullYear()-10,o=i.getFullYear()+10;for(0!==n&&(a=n),0!==r&&(o=r),o<a&&(o=a+10),t.startDate&&(a=new Date(t.startDate.replace(/-/g,"/")).getFullYear()),t.endDate&&(o=new Date(t.endDate.replace(/-/g,"/")).getFullYear()),t.startDate>t.endDate&&(o=a+10),a<n&&0!==n&&(a=n),o>r&&0!==r&&(o=r);a<=o;)e.push({value:a,name:t.format.replace("{value}",a)}),a++;return e},getMonthItems:function(t){var e=[],n=1,r=12;if(t.startDate){var i=new Date(t.startDate.replace(/-/g,"/"));i.getFullYear()===~~t.currentYear&&(n=i.getMonth()+1)}if(t.endDate){var a=new Date(t.endDate.replace(/-/g,"/"));a.getFullYear()===~~t.currentYear&&(r=a.getMonth()+1)}for(;n<=r;){var o=this.mentStr(n);e.push({value:o,name:t.format.replace("{value}",o)}),n++}return e},getDayItems:function(t){var e=[],n=new Date,r=n.getFullYear(),i=n.getMonth();t.currentYear&&(r=~~t.currentYear),t.currentMonth&&(i=~~t.currentMonth-1);var a=30;if([0,2,4,6,7,9,11].indexOf(i)>-1?a=31:1===i&&(a=r%100===0?r%400===0?29:28:r%4===0?29:28),t.endDate){var o=new Date(t.endDate.replace(/-/g,"/"));o.getMonth()+1===~~t.currentMonth&&o.getFullYear()===~~t.currentYear&&o.getDate()<a&&(a=o.getDate())}var s=1;if(t.startDate){var u=new Date(t.startDate.replace(/-/g,"/"));u.getMonth()+1===~~t.currentMonth&&u.getFullYear()===~~t.currentYear&&(s=u.getDate())}for(;s<=a;){var l=this.mentStr(s);e.push({value:l,name:t.format.replace("{value}",l)}),s++}return e},getHourItems:function(t){var e=[],n=~~t.startHour,r=~~t.endHour,i=n,a=r;if(a<i&&(a=23),t.startDate){var o=new Date(t.startDate.replace(/-/g,"/"));o.getFullYear()===~~t.currentYear&&o.getMonth()+1===~~t.currentMonth&&o.getDate()===~~t.currentDay&&i<=n&&(i=o.getHours(),i<n&&(i=n))}if(t.endDate){var s=new Date(t.endDate.replace(/-/g,"/"));s.getFullYear()===~~t.currentYear&&s.getMonth()+1===~~t.currentMonth&&s.getDate()===~~t.currentDay&&(a=s.getHours()),a>r&&(a=r)}for(;i<=a;){var u=this.mentStr(i);e.push({value:u,name:t.format.replace("{value}",u)}),i++}return e},getMinuteItems:function(t){var e=[],n=0,r=59;if(t.startDate){var i=new Date(t.startDate.replace(/-/g,"/"));i.getFullYear()===~~t.currentYear&&i.getMonth()+1===~~t.currentMonth&&i.getDate()===~~t.currentDay&&i.getHours()===~~t.currentHour&&(n=i.getMinutes())}if(t.endDate){var a=new Date(t.endDate.replace(/-/g,"/"));a.getFullYear()===~~t.currentYear&&a.getMonth()+1===~~t.currentMonth&&a.getDate()===~~t.currentDay&&a.getHours()===~~t.currentHour&&(r=a.getMinutes())}for(;n<=r;){var o=this.mentStr(n);e.push({value:o,name:t.format.replace("{value}",o)}),n++}return e}}},191:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,'.hui-datetime{position:fixed;bottom:0;left:0;width:100%;z-index:1502;background-color:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;-ms-touch-action:none;touch-action:none;will-change:transform}.hui-datetime-active{-webkit-transform:translateY(0);transform:translateY(0)}.hui-datetime-placeholder{color:#a1a1a1;font-size:inherit}.hui-datetime-input{width:100%}.hui-datetime-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;background-color:#fbfbfb}.hui-datetime-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-datetime-head>a{height:43px;padding:0 30px;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#555}.hui-datetime-head>a:last-child{color:#0bb20c}.hui-datetime-content{position:relative;width:100%;height:266px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.hui-datetime-item{font-size:16px;height:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.hui-datetime-item-content>span{width:100%;display:block;height:38px;line-height:38px;text-align:center}.hui-datetime-item-box{height:100%}.hui-datetime-indicator,.hui-datetime-shade{pointer-events:none;position:absolute;left:0;top:0;height:100%;width:100%}.hui-datetime-shade{z-index:3;-webkit-transform:translateZ(0);transform:translateZ(0);background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 114px;background-repeat:no-repeat}.hui-datetime-indicator{z-index:4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.hui-datetime-indicator>span{display:block;width:100%;height:38px;position:relative}.hui-datetime-indicator>span:after{top:0;border-top:1px solid #d9d9d9}.hui-datetime-indicator>span:after,.hui-datetime-indicator>span:before{content:"";position:absolute;z-index:0;left:0;width:100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.hui-datetime-indicator>span:before{bottom:0;border-bottom:1px solid #d9d9d9}',""])},223:function(t,e,n){n(310);var r=n(2)(n(346),n(267),null,null);t.exports=r.exports},224:function(t,e,n){var r=n(2)(n(347),n(285),null,null);t.exports=r.exports},267:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hui-datetime-input",on:{click:function(e){e.stopPropagation(),t.open(e)}}},[t.value?[t._v(t._s(t.value))]:[n("span",{staticClass:"hui-datetime-placeholder"},[t._v(t._s(t.placeholder))])]],2)},staticRenderFns:[]}},285:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hui-mask",{nativeOn:{click:function(e){t.close(e)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),n("div",{staticClass:"hui-datetime",class:t.show?"hui-datetime-active":""},[n("div",{staticClass:"hui-datetime-head"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.cancelText))]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){e.stopPropagation(),t.setValue(e)}}},[t._v(t._s(t.confirmText))])]),t._v(" "),n("div",{staticClass:"hui-datetime-content"},[t._l(t.columns,function(e,r){return n("div",{key:r,staticClass:"hui-datetime-item"},[n("div",{ref:"Component_"+e,refInFor:!0,staticClass:"hui-datetime-item-box"},[n("div",{ref:"Content_"+e,refInFor:!0,staticClass:"hui-datetime-item-content"},t._l(t.items[e],function(e,r){return n("span",{key:r,attrs:{"data-value":e.value},domProps:{innerHTML:t._s(e.name)}})}))])])}),t._v(" "),n("div",{staticClass:"hui-datetime-shade"}),t._v(" "),t._m(0)],2)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hui-datetime-indicator"},[n("span")])}]}},310:function(t,e,n){var r=n(191);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);n(4)("1e004224",r,!0)},346:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=n(62),o=r(a),s=n(179),u=r(s),l=n(224),c=r(l);e.default={name:"hui-datetime",data:function(){return{picker:null,currentValue:this.value,tmpNum:0}},props:{readonly:{type:Boolean,default:!1},type:{type:String,validator:function(t){return["datetime","date","time","month","day"].indexOf(t)>-1},default:"datetime"},startDate:{type:String,validator:function(t){return!t||(u.default.isDateTimeString(t)||u.default.isTimeString(t)||u.default.isMonthString(t)||u.default.isDayString(t))}},endDate:{type:String,validator:function(t){return!t||(u.default.isDateTimeString(t)||u.default.isTimeString(t)||u.default.isMonthString(t)||u.default.isDayString(t))}},startYear:{validator:function(t){return/^\d{4}|0$/.test(t)},default:0},endYear:{validator:function(t){return/^\d{4}|0$/.test(t)},default:0},startHour:{validator:function(t){return/^(0|[1-9]|1[0-9]|2[0-3])?$/.test(t)},default:0},endHour:{validator:function(t){return/^([1-9]|1[0-9]|2[0-3])?$/.test(t)},default:23},yearFormat:{type:String,default:"{value}年"},monthFormat:{type:String,default:"{value}月"},dayFormat:{type:String,default:"{value}日"},hourFormat:{type:String,default:"{value}时"},minuteFormat:{type:String,default:"{value}分"},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},value:{type:String,validator:function(t){return!t||(u.default.isDateTimeString(t)||u.default.isTimeString(t)||u.default.isMonthString(t)||u.default.isDayString(t))}},initEmit:{type:Boolean,default:!0},placeholder:String,callback:Function},watch:{value:function(t){this.currentValue!=t&&this.render(!1)},startDate:function(){this.render(!0)},endDate:function(){this.render(!0)}},methods:{open:function(){this.readonly||this.picker.open()},close:function(){this.picker.close()},removeElement:function(){this.picker&&this.picker.$el&&document.body.removeChild(this.picker.$el)},render:function(t){var e=this;this.removeElement();var n=o.default.extend(c.default),r=this._props;r.reloadMonth=t,this.picker=new n({el:document.createElement("div"),data:r}),document.body.appendChild(this.picker.$el),this.picker.$on("pickerConfirm",function(t){(e.tmpNum>0||e.initEmit)&&(e.currentValue=t,e.$emit("input",t),e.callback&&e.callback(t)),e.tmpNum++})}},mounted:function(){this.render()},beforeDestroy:function(){i.pageScroll.unlock(),this.removeElement()}}},347:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=n(16),o=r(a),s=n(378),u=r(s),l=n(179),c=r(l);e.default={data:function(){return{itemHeight:38,value:"",reloadMonth:!1,show:!1,parentEL:null,columns:[],scroller:[],type:"",cancelText:"",confirmText:"",items:{Year:[],Month:[],Day:[],Hour:[],Minute:[]},scrolling:{Year:!1,Month:!1,Day:!1,Hour:!1,Minute:!1},readonly:!1,currentYear:"",currentMonth:"",currentDay:"",currentHour:"",currentMinute:"",currentValue:"",yearFormat:"{value}年",monthFormat:"{value}月",dayFormat:"{value}日",hourFormat:"{value}时",minuteFormat:"{value}分",startYear:0,endYear:0,startHour:0,endHour:23}},components:{"hui-mask":o.default},watch:{currentYear:function(t){this.setMonths(t)},currentMonth:function(t){this.setDays(t)},currentDay:function(t){this.setHours(t)},currentHour:function(t){this.setMinutes(t)}},methods:{init:function(){var t=this,e=t.currentValue=t.value.replace(/-/g,"/");t.startDate&&new Date(e).getTime()<new Date(t.startDate).getTime()&&(e=t.currentValue=t.startDate),t.endDate&&new Date(e).getTime()>new Date(t.endDate).getTime()&&(e=t.currentValue=t.endDate);var n=new Date(e),r=n.getFullYear(),i=n.getMonth()+1,a=n.getDate(),o=n.getHours(),s=n.getMinutes();if("time"!==t.type){var u=t.items.Year=c.default.getYearItems({format:t.yearFormat,startDate:t.startDate,endDate:t.endDate,startYear:t.startYear,endYear:t.endYear});e||(r=u[0].value);var l=c.default.getMonthItems({format:t.monthFormat,currentYear:r,startDate:t.startDate,endDate:t.endDate});e||(i=l[0].value);var d=c.default.getDayItems({format:t.dayFormat,currentYear:r,currentMonth:i,startDate:t.startDate,endDate:t.endDate});e||(a=d[0].value),e?(t.currentYear=r,t.inDatas(u,t.currentYear)||(t.currentYear=u[0].value),this.reloadMonth&&this.setMonths(t.currentYear),t.currentMonth=c.default.mentStr(i),t.inDatas(l,t.currentMonth)||(t.currentMonth=l[0].value),t.currentDay=c.default.mentStr(a),t.inDatas(d,t.currentDay)||(t.currentDay=d[0].value)):(t.currentYear=r,t.currentMonth=i,t.currentDay=a)}if("datetime"===t.type||"time"===t.type){var f=c.default.getHourItems({format:t.hourFormat,currentYear:r,currentMonth:i,currentDay:a,startDate:t.startDate,endDate:t.endDate,startHour:t.startHour,endHour:t.endHour});e||(o=f[0].value);var h=c.default.getMinuteItems({format:t.minuteFormat,currentYear:r,currentMonth:i,currentDay:a,currentHour:o,startDate:t.startDate,endDate:t.endDate});if(e||(s=h[0].value),"time"===t.type&&(t.items.Hour=f),e){if(c.default.isDateTimeString(e))t.currentHour=c.default.mentStr(o),t.currentMinute=c.default.mentStr(s);else{var m=e.split(":");t.currentHour=c.default.mentStr(m[0]),t.currentMinute=c.default.mentStr(m[1])}t.inDatas(f,t.currentHour)||(t.currentHour=f[0].value),t.inDatas(h,t.currentMinute)||(t.currentMinute=h[0].value)}else t.currentHour=o,t.currentMinute=s}"datetime"===t.type?t.columns=["Year","Month","Day","Hour","Minute"]:"month"===t.type?t.columns=["Year","Month"]:"day"===t.type?t.columns=["Month","Day"]:"date"===t.type?t.columns=["Year","Month","Day"]:t.columns=["Hour","Minute"]},render:function(){var t=this;t.columns.forEach(function(e){var n=t.$refs["Component_"+e][0],r=t.$refs["Content_"+e][0];t.scroller[e]=new u.default(n,r,{itemHeight:t.itemHeight,onSelect:function(n){t["current"+e]=n,t.scrolling[e]=!1},callback:function(n,i){i&&(t.scrolling[e]=!0),r.style.webkitTransform="translate3d(0, "+-n+"px, 0)"}});var i=t.items[e].length;t.scroller[e].setDimensions(7*t.itemHeight,i*t.itemHeight,i),t.scroller[e].select(t["current"+e],!1),t.scrolling[e]=!1}),t.setValue()},setMonths:function(t){var e=this,n=e.items.Month=c.default.getMonthItems({format:e.monthFormat,currentYear:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Month",n,function(){e.setDays(e.currentMonth)})},setDays:function(t){var e=this,n=e.items.Day=c.default.getDayItems({format:e.dayFormat,currentYear:e.currentYear,currentMonth:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Day",n,function(){e.setHours(e.currentDay)})},setHours:function(t){var e=this,n=e.items.Hour=c.default.getHourItems({format:e.hourFormat,currentYear:e.currentYear,currentMonth:e.currentMonth,currentDay:t,startDate:e.startDate,endDate:e.endDate,startHour:e.startHour,endHour:e.endHour});e.scrolloToPosition("Hour",n,function(){e.setMinutes(e.currentHour)})},setMinutes:function(t){var e=this,n=e.items.Minute=c.default.getMinuteItems({format:e.minuteFormat,currentYear:e.currentYear,currentMonth:e.currentMonth,currentDay:e.currentDay,currentHour:t,startDate:e.startDate,endDate:e.endDate});e.scrolloToPosition("Minute",n)},scrolloToPosition:function(t,e,n){var r=this,i=r.scroller[t];if(i){var a=e.length;i.setDimensions(7*r.itemHeight,a*r.itemHeight,a),setTimeout(function(){var a=r.inDatas(e,r["current"+t]);r.scrolling[t]||i.select(a?r["current"+t]:e[0].value,!1),"function"==typeof n&&n()},0)}},setValue:function(){var t="";t="datetime"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay+" "+this.currentHour+":"+this.currentMinute:"month"===this.type?this.currentYear+"-"+this.currentMonth:"day"===this.type?this.currentMonth+"-"+this.currentDay:"date"===this.type?this.currentYear+"-"+this.currentMonth+"-"+this.currentDay:this.currentHour+":"+this.currentMinute,this.currentValue=t,this.$emit("pickerConfirm",t),this.close()},inDatas:function(t,e){var n=!1;return t.forEach(function(t){t.value==e&&(n=!0)}),n},open:function(){this.readonly||(this.show=!0,i.isIOS&&i.pageScroll.lock())},close:function(){this.show=!1,i.isIOS&&i.pageScroll.unlock()}},created:function(){this.init()},mounted:function(){this.$nextTick(this.render)},beforeDestroy:function(){var t=this;this.columns.forEach(function(e){t.scroller[e]=null})}}},377:function(t,e){"use strict";var n=Date.now||function(){return+new Date},r={},i=1,a=60,o=1e3;t.exports={requestAnimationFrame:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame,e=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(e=!1),e)return function(e,n){t(e,n)};var n=60,r={},i=0,a=1,o=null,s=+new Date;return function(t,e){var u=a++;return r[u]=t,i++,null===o&&(o=setInterval(function(){var t=+new Date,e=r;r={},i=0;for(var n in e)e.hasOwnProperty(n)&&(e[n](t),s=t);t-s>2500&&(clearInterval(o),o=null)},1e3/n)),u}}(),stop:function(t){var e=null!=r[t];return e&&(r[t]=null),e},isRunning:function(t){return null!=r[t]},start:function t(e,s,u,l,c,d){var f=this,t=n(),h=t,m=0,p=0,_=i++;if(d||(d=document.body),_%20===0){var g={};for(var v in r)g[v]=!0;r=g}var D=function i(g){var v=g!==!0,D=n();if(!r[_]||s&&!s(_))return r[_]=null,void(u&&u(a-p/((D-t)/o),_,!1));if(v)for(var y=Math.round((D-h)/(o/a))-1,b=0;b<Math.min(y,4);b++)i(!0),p++;l&&(m=(D-t)/l,m>1&&(m=1));var w=c?c(m):m;e(w,D,v)!==!1&&1!==m||!v?v&&(h=D,f.requestAnimationFrame(i,d)):(r[_]=null,u&&u(a-p/((D-t)/o),_,1===m||null==l))};return r[_]=!0,f.requestAnimationFrame(D,d),_}}},378:function(t,e,n){"use strict";var r=n(377),i=function(t,e,n){var r=this;if(t){n=n||{},r.options={onSelect:function(){},itemHeight:38};for(var i in n)void 0!==n[i]&&(r.options[i]=n[i]);r.__content=e,r.__component=t,r.__itemHeight=r.options.itemHeight;var a=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),o={start:a?"touchstart":"mousedown",move:a?"touchmove":"mousemove",end:a?"touchend":"mouseup"};t.addEventListener(o.start,function(t){t.target.tagName.match(/input|textarea|select/i)||(t.preventDefault(),r.__doTouchStart(t,t.timeStamp))},!1),t.addEventListener(o.move,function(t){r.__doTouchMove(t,t.timeStamp)},!1),t.addEventListener(o.end,function(t){r.__doTouchEnd(t.timeStamp)},!1)}},a={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,setDimensions:function(t,e,n){var r=this;r.__clientHeight=t,r.__contentHeight=e;var i=Math.round(r.__clientHeight/r.__itemHeight);r.__minScrollTop=-r.__itemHeight*(i/2),r.__maxScrollTop=r.__minScrollTop+n*r.__itemHeight-.1},selectByIndex:function(t,e){var n=this;t<0||t>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+t*n.__itemHeight,n.scrollTo(n.__scrollTop,e),n.__selectItem(n.__content.children[t]))},select:function(t,e){for(var n=this,r=n.__content.children,i=0,a=r.length;i<a;i++)if(r[i].dataset.value==t)return void n.selectByIndex(i,e);n.selectByIndex(0,e)},scrollTo:function(t,e){var n=this;return e=void 0===e||e,n.__isDecelerating&&(r.stop(n.__isDecelerating),n.__isDecelerating=!1),t=Math.round(t/n.__itemHeight)*n.__itemHeight,t=Math.max(Math.min(n.__maxScrollTop,t),n.__minScrollTop),t!==n.__scrollTop&&e?void n.__publish(t,250):(n.__publish(t),void n.__scrollingComplete())},__selectItem:function(t){var e=this;null!==e.value&&(e.__prevValue=e.value),e.value=t.dataset.value},__scrollingComplete:function(){var t=this,e=Math.round((t.__scrollTop-t.__minScrollTop-t.__itemHeight/2)/t.__itemHeight);t.__selectItem(t.__content.children[e]),null!==t.__prevValue&&t.__prevValue!==t.value&&t.options.onSelect(t.value)},__doTouchStart:function(t,e){var n=t.touches,i=this,a=t.touches?t.touches[0]:t,o=!!t.touches;if(t.touches&&null==n.length)throw new Error("Invalid touch list: "+n);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);i.__interruptedAnimation=!0,i.__isDecelerating&&(r.stop(i.__isDecelerating),i.__isDecelerating=!1,i.__interruptedAnimation=!0),i.__isAnimating&&(r.stop(i.__isAnimating),i.__isAnimating=!1,i.__interruptedAnimation=!0);var s,u=o&&1===n.length||!o;s=u?a.pageY:Math.abs(a.pageY+n[1].pageY)/2,i.__initialTouchTop=s,i.__lastTouchTop=s,i.__lastTouchMove=e,i.__lastScale=1,i.__enableScrollY=!u,i.__isTracking=!0,i.__didDecelerationComplete=!1,i.__isDragging=!u,i.__isSingleTouch=u,i.__positions=[]},__doTouchMove:function(t,e,n){var r=this,i=t.touches,a=t.touches?t.touches[0]:t,o=!!t.touches;if(i&&null==i.length)throw new Error("Invalid touch list: "+i);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(r.__isTracking){var s;s=o&&2===i.length?Math.abs(a.pageY+i[1].pageY)/2:a.pageY;var u=r.__positions;if(r.__isDragging){var l=s-r.__lastTouchTop,c=r.__scrollTop;if(r.__enableScrollY){c-=l;var d=r.__minScrollTop,f=r.__maxScrollTop;(c>f||c<d)&&(c=c>f?f:d)}u.length>40&&u.splice(0,20),u.push(c,e),r.__publish(c)}else{var h=0,m=5,p=Math.abs(s-r.__initialTouchTop);r.__enableScrollY=p>=h,u.push(r.__scrollTop,e),r.__isDragging=r.__enableScrollY&&p>=m,r.__isDragging&&(r.__interruptedAnimation=!1)}r.__lastTouchTop=s,r.__lastTouchMove=e,r.__lastScale=n}},__doTouchEnd:function(t){var e=this;if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging&&(e.__isDragging=!1,e.__isSingleTouch&&t-e.__lastTouchMove<=100)){for(var n=e.__positions,r=n.length-1,i=r,a=r;a>0&&n[a]>e.__lastTouchMove-100;a-=2)i=a;if(i!==r){var o=n[r]-n[i],s=e.__scrollTop-n[i-1];e.__decelerationVelocityY=s/o*(1e3/60);var u=4;Math.abs(e.__decelerationVelocityY)>u&&e.__startDeceleration(t)}}e.__isDecelerating||e.scrollTo(e.__scrollTop),e.__positions.length=0}},__easeOutCubic:function(t){return Math.pow(t-1,3)+1},__easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},__publish:function(t,e){var n=this,i=n.__isAnimating;if(i&&(r.stop(i),n.__isAnimating=!1),e){n.__scheduledTop=t;var a=n.__scrollTop,o=t-a,s=function(t,e,r){n.__scrollTop=a+o*t,n.options.callback&&n.options.callback(n.__scrollTop,n.__isDragging)},u=function(t){return n.__isAnimating===t},l=function(t,e,r){e===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||r)&&n.__scrollingComplete()};n.__isAnimating=r.start(s,u,l,e,i?n.__easeOutCubic:n.__easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=t,n.options.callback&&n.options.callback(t,n.__isDragging)},__startDeceleration:function(t){var e=this;e.__minDecelerationScrollTop=e.__minScrollTop,e.__maxDecelerationScrollTop=e.__maxScrollTop;var n=function(t,n,r){e.__stepThroughDeceleration(r)},i=.5,a=function(){var t=Math.abs(e.__decelerationVelocityY)>=i;return t||(e.__didDecelerationComplete=!0),t},o=function(t,n,r){return e.__isDecelerating=!1,e.__scrollTop<=e.__minScrollTop||e.__scrollTop>=e.__maxScrollTop?void e.scrollTo(e.__scrollTop):void(e.__didDecelerationComplete&&e.__scrollingComplete())};e.__isDecelerating=r.start(n,a,o)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollTop+e.__decelerationVelocityY,r=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);r!==n&&(n=r,e.__decelerationVelocityY=0),Math.abs(e.__decelerationVelocityY)<=1?Math.abs(n%e.__itemHeight)<1&&(e.__decelerationVelocityY=0):e.__decelerationVelocityY*=.95,e.__publish(n)}};for(var o in a)i.prototype[o]=a[o];t.exports=i}})});