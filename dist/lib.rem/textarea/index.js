/*! vue-hui v0.0.3 by HUI TEAM (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hui=t():e.hui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=void 0;var o=n(256),a=r(o);t.TextArea=a.default},1:function(e,t){e.exports=function(e,t,n,r){var o,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:a,options:s}}},3:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},4:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(v){var a=p++;r=f||(f=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(5),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=l(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,n.push(s)}t?(o=l(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],l=a[3],c={id:e+":"+o,css:s,media:u,sourceMap:l};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}},195:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".hui-textarea{padding:.2rem 0;background-color:#fff;width:100%}.hui-textarea>textarea{border:none;width:100%;display:block;height:1.5rem;font-size:.3rem;color:inherit;background-color:transparent}.hui-textarea-readonly{opacity:.3}.hui-textarea-counter{font-size:.32rem;color:#b2b2b2;text-align:right;padding-top:.06rem}",""])},256:function(e,t,n){n(322);var r=n(1)(n(386),n(278),null,null);e.exports=r.exports},278:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hui-textarea",class:e.readonly?"hui-textarea-readonly":""},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.mlstr,expression:"mlstr"}],attrs:{placeholder:e.placeholder,maxlength:e.maxlength,readonly:e.readonly},domProps:{value:e.mlstr},on:{input:function(t){t.target.composing||(e.mlstr=t.target.value)}}}),e._v(" "),e.showCounter&&e.maxlength?n("div",{staticClass:"hui-textarea-counter"},[e._v(e._s(e.num)+"/"+e._s(e.maxlength))]):e._e()])},staticRenderFns:[]}},322:function(e,t,n){var r=n(195);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(4)("18997f8f",r,!0)},386:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hui-textarea",data:function(){return{num:0,mlstr:""}},props:{maxlength:{validator:function(e){return!e||/^(([1-9]\d*)|0)$/.test(e)}},placeholder:{type:String},readonly:{type:Boolean,default:!1},value:{type:String},showCounter:{type:Boolean,default:!0},change:{type:Function},callback:{type:Function}},watch:{mlstr:function(e){this.$emit("input",e),this.change&&(this.change(),console.warn('From VUE-HUI: The parameter "change" is destroyed, please use "callback".')),this.callback&&this.change(),this.showCounter&&(this.num=e.length)},value:function(e){this.mlstr=e}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.value;t&&(e.mlstr=t.length>e.maxlength?t.substr(t,e.maxlength):t)})}}}})});