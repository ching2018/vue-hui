/*! vue-hui v0.0.1 by HUI TEAM (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hui=e():t.hui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var s=i(197),r=n(s),a=i(196),o=n(a);e.Slider=r.default,e.SliderItem=o.default},2:function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var l=o.computed||(o.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:s,exports:r,options:o}}},3:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},4:function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(r(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],s=0;s<i.parts.length;s++)a.push(r(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:a}}}}function s(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(v){var r=f++;n=h||(h=s()),e=a.bind(null,n,r,!1),i=a.bind(null,n,r,!0)}else n=s(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function o(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document,d=i(5),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var s=d(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var a=s[r],o=c[a.id];o.refs--,i.push(o)}e?(s=d(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var o=i[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete c[o.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],a=r[0],o=r[1],l=r[2],d=r[3],c={id:t+":"+s,css:o,media:l,sourceMap:d};n[a]?n[a].parts.push(c):i.push(n[a]={id:a,parts:[c]})}return i}},177:function(t,e,i){e=t.exports=i(3)(),e.push([t.id,".m-slider{overflow:hidden}.m-slider,.slider-wrapper{width:100%;position:relative}.slider-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.slider-wrapper.slider-wrapper-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.slider-item{width:100%;height:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.slider-item a{display:block}.slider-item img{width:100%}@-webkit-keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}@keyframes slider-pagination-opacity{0%{opacity:0}to{opacity:1}}.slider-pagination{position:absolute;width:100%;z-index:2;left:0;bottom:.1rem;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;opacity:0;-webkit-animation:slider-pagination-opacity .3s linear .4s forwards;animation:slider-pagination-opacity .3s linear .4s forwards}.slider-pagination,.slider-pagination.slider-pagination-vertical{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.slider-pagination.slider-pagination-vertical{width:0;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;bottom:0;left:auto;right:.1rem}.slider-pagination>.slider-pagination-item{margin:.05rem;width:6px;height:6px;display:inline-block;border-radius:100%;background-color:#b7d0e1}.slider-pagination>.slider-pagination-item.slider-pagination-item-active{background-color:#ff0005}",""])},196:function(t,e,i){var n=i(2)(i(263),i(224),null,null);t.exports=n.exports},197:function(t,e,i){i(239);var n=i(2)(i(264),i(221),null,null);t.exports=n.exports},221:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"m-slider"},[i("div",{ref:"warpper",staticClass:"slider-wrapper",class:"vertical"==t.direction?"slider-wrapper-vertical":"",style:t.dragStyleObject},[i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.lastItem)}}),t._v(" "),t._t("default"),t._v(" "),i("div",{staticClass:"slider-item",style:t.itemHeight,domProps:{innerHTML:t._s(t.firtstItem)}})],2),t._v(" "),i("div",{staticClass:"slider-pagination",class:"vertical"==t.direction?"slider-pagination-vertical":""},t._l(t.itemNums,function(e,n){return i("span",{staticClass:"slider-pagination-item",class:t.paginationIndex==n?"slider-pagination-item-active":""})}))])},staticRenderFns:[]}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-item"},[t._t("default")],2)},staticRenderFns:[]}},239:function(t,e,i){var n=i(177);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);i(4)("7c56e420",n,!0)},263:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hui-slider-item",mounted:function(){this.$parent.init()}}},264:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hui-slider",data:function(){return{firtstItem:"",lastItem:"",itemNums:0,index:1,itemsArr:[],autoPlayTimer:null,paginationIndex:0,itemHeight:{height:null},dragStyleObject:{transform:0,speed:0},touches:{moveTag:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1}}},props:{speed:{default:300,validator:function(t){return/^\d*$/.test(t)}},autoplay:{default:0,validator:function(t){return/^\d*$/.test(t)}},direction:{validator:function(t){return["horizontal","vertical"].indexOf(t)>-1},default:"horizontal"}},watch:{index:function t(){var t=this.index,e=this.itemNums,i=(t-1)%e;this.paginationIndex=i<0?e-1:i}},methods:{init:function(){if(this.destroy(),this.isVertical="vertical"==this.direction,this.itemsArr=this.$children.filter(function(t){return"hui-slider-item"===t.$options.name}),this.itemNums=this.itemsArr.length,this.isVertical){this.$refs.slider.style.height="100%";var t=this.$el.clientHeight;this.itemHeight.height=t+"px",this.setTranslate(0,-t),this.itemsArr.forEach(function(e){e.$el.style.height=t+"px"})}else this.setTranslate(0,-this.$refs.warpper.offsetWidth);this.cloneItem(),this.bindEvents(),this.autoPlay()},cloneItem:function(){var t=this.itemsArr;this.firtstItem=t[0].$el.innerHTML,this.lastItem=t[t.length-1].$el.innerHTML},touchStartHandler:function(t){var e=this.touches;if(e.allowClick=!0,e.isTouchEvent="touchstart"===t.type,(e.isTouchEvent||!("which"in t)||3!==t.which)&&0==e.moveTag){e.moveTag=1,e.startX=t.touches?t.touches[0].clientX:t.clientX,e.startY=t.touches?t.touches[0].clientY:t.clientY,e.touchStartTime=Date.now();var i=this.itemNums;if(0==this.index)return this.index=i,void this.setTranslate(0,-i*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));this.index>i&&(this.index=1,this.setTranslate(0,this.isVertical?-this.$el.clientHeight:-this.$refs.warpper.offsetWidth))}},touchMoveHandler:function(t){this.supportTouch&&!this.isVertical||t.preventDefault();var e=this.touches;if(e.allowClick=!1,!e.isTouchEvent||"mousemove"!==t.type){var i=t.touches?t.touches[0].clientY:t.clientY,n=t.touches?t.touches[0].clientX:t.clientX,s=180*Math.atan2(Math.abs(i-e.startY),Math.abs(n-e.startX))/Math.PI;if((this.isVertical?90-s>45:s>45)&&this.supportTouch)return e.moveTag=3,this.stopAutoplay(),void this.setTranslate(0,-this.index*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth));var r=e.moveOffset=this.isVertical?i-e.startY:n-e.startX;0!=r&&0!=e.moveTag&&(1==e.moveTag&&(this.stopAutoplay(),e.moveTag=2),2==e.moveTag&&this.setTranslate(0,-this.index*(this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth)+r))}},touchEndHandler:function(){var t=this.touches,e=t.moveOffset,i=this.isVertical?this.$el.clientHeight:this.$refs.warpper.offsetWidth;if(setTimeout(function(){t.allowClick=!0},0),1==t.moveTag&&(t.moveTag=0),2==t.moveTag){t.moveTag=0;var n=Date.now()-t.touchStartTime;return n>300&&Math.abs(e)<=.5*i?this.setTranslate(this.speed,-this.index*i):this.setTranslate(this.speed,-((e>0?--this.index:++this.index)*i)),void this.autoPlay()}3==t.moveTag&&(t.moveTag=0,this.autoPlay())},autoPlay:function(){var t=this;this.autoplay<=0||(this.autoPlayTimer=setInterval(function(){var e=t.isVertical?t.$el.clientHeight:t.$refs.warpper.offsetWidth;return t.index>t.itemNums?(t.index=1,t.setTranslate(0,-e),void setTimeout(function(){t.setTranslate(t.speed,-(++t.index*e))},100)):void t.setTranslate(t.speed,-(++t.index*e))},this.autoplay))},stopAutoplay:function(){clearInterval(this.autoPlayTimer)},bindEvents:function(){var t=this,e=this.touchEvents();this.$el.addEventListener(e.start,this.touchStartHandler),this.$el.addEventListener(e.move,this.touchMoveHandler),this.$el.addEventListener(e.end,this.touchEndHandler),this.$el.addEventListener("click",function(e){t.touches.allowClick||e.preventDefault()}),window.addEventListener("resize",this.resizeSlides)},unbindEvents:function(){var t=this.touchEvents();this.$el.removeEventListener(t.start,this.touchStartHandler),this.$el.removeEventListener(t.move,this.touchMoveHandler),this.$el.removeEventListener(t.end,this.touchEndHandler),window.removeEventListener("resize",this.resizeSlides)},touchEvents:function(){var t=this.supportTouch=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();return{start:t?"touchstart":"mousedown",move:t?"touchmove":"mousemove",end:t?"touchend":"mouseup"}},setTranslate:function(t,e){this.dragStyleObject.transitionDuration=t+"ms",this.isVertical?this.dragStyleObject.transform="translate3d(0, "+e+"px, 0)":this.dragStyleObject.transform="translate3d("+e+"px, 0, 0)"},resizeSlides:function(){if(this.isVertical){var t=this.$el.clientHeight;this.dragStyleObject.transform="translate3d(0, "+-this.index*t+"px, 0)"}else{var e=this.$refs.warpper.offsetWidth;this.dragStyleObject.transform="translate3d("+-this.index*e+"px, 0, 0)"}},destroy:function(){this.unbindEvents(),this.stopAutoplay()}},destroyed:function(){this.destroy()}}}})});