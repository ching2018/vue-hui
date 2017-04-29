/*! vue-hui v0.0.1 by YDCSS (c) 2017 Licensed MIT */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hui"] = factory();
	else
		root["hui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Scroller = undefined;

	var _scroller = __webpack_require__(164);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Scroller = _scroller2.default;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(5)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYzLjY1NyA2My42NTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYzLjY1NyA2My42NTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxwb2x5Z29uIHBvaW50cz0iMzEuODkxLDYzLjY1NyAwLjAxMiwzNS44MzUgMi42NDIsMzIuODIxIDMxLjg4Niw1OC4zNDMgNjEuMDA5LDMyLjgyNCA2My42NDUsMzUuODMyICAgICAiIGZpbGw9IiNhYWFhYWEiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8cmVjdCB4PSIyOS44MjciIHdpZHRoPSI0IiBoZWlnaHQ9IjYwIiBmaWxsPSIjYWFhYWFhIi8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.root {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.div-scroll-inner {\n  position: absolute;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 100%;\n}\n.div-refresh {\n  width: 100%;\n  padding-bottom: 20px;\n  color: #a1a1a1;\n  text-align: center;\n}\n.div-refresh .div-down {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(" + __webpack_require__(15) + ") no-repeat 50%;\n  background-size: 100%;\n  vertical-align: middle;\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s;\n}\n.div-refresh .div-up {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(" + __webpack_require__(15) + ") no-repeat 50%;\n  background-size: 100%;\n  vertical-align: middle;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s;\n}\n.div-refresh .div-refreshing {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: url(" + __webpack_require__(16) + ") no-repeat 50%;\n  background-size: 100%;\n  vertical-align: middle;\n  -webkit-animation: rotation 2s linear infinite;\n}\n.div-refresh span {\n  display: block;\n  margin-left: 10px;\n  margin: auto;\n}\n.div-loading {\n  width: 100%;\n  padding-bottom: 20px;\n  color: #a1a1a1;\n  text-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.div-loading img {\n  width: 20px;\n  -webkit-animation: rotation 2s linear infinite;\n}\n.div-loading span {\n  display: block;\n  margin-left: 10px;\n  margin: auto;\n}\n@-webkit-keyframes rotation {\nfrom {\n    -webkit-transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n}\n}\n.no-data-text {\n  width: 100%;\n  height: 44px;\n  z-index: 1;\n  text-align: center;\n  line-height: 44px;\n  opacity: 0;\n  transition: opacity .15s linear;\n  -webkit-transition: opacity .15s linear;\n}\n.no-data-text.active {\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(203)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(235),
	  /* template */
	  __webpack_require__(177),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\scroller\\src\\scroller.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] scroller.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0bda38e6", Component.options)
	  } else {
	    hotAPI.reload("data-v-0bda38e6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "vueScroll",
	    staticClass: "root",
	    on: {
	      "touchstart": function($event) {
	        _vm.onTouchStart($event)
	      },
	      "touchmove": function($event) {
	        _vm.onTouchMove($event)
	      },
	      "touchend": function($event) {
	        _vm.onTouchEnd($event)
	      },
	      "scroll": function($event) {
	        _vm.isScroll($event)
	      }
	    }
	  }, [_c('div', {
	    ref: "scrollInner",
	    staticClass: "div-scroll-inner",
	    style: (_vm.transform ? {
	      transform: 'translate3d(0,' + _vm.top + 'px,0)'
	    } : '')
	  }, [(_vm.onRefresh && !_vm.isLoading && (_vm.moving || _vm.state != 0)) ? _c('div', {
	    staticClass: "div-refresh",
	    style: ({
	      'height': _vm.offsetH + 'px',
	      'line-height': _vm.offsetH + 'px'
	    })
	  }, [_vm._t("refresh", [_c('div', {
	    class: {
	      'div-down': _vm.state === 0, 'div-up': _vm.state === 1, 'div-refreshing': _vm.state === 2
	    }
	  }), _vm._v(" "), (_vm.state === 0) ? _c('span', [_vm._v("下拉刷新")]) : _vm._e(), _vm._v(" "), (_vm.state === 1) ? _c('span', [_vm._v("释放刷新")]) : _vm._e(), _vm._v(" "), (_vm.state === 2) ? _c('span', [_vm._v("正在刷新……")]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.isLoading && !_vm.loadDisabled && _vm.onLoad) ? _c('div', {
	    staticClass: "div-loading",
	    style: ({
	      'height': _vm.bottomH + 'px',
	      'line-height': _vm.bottomH + 'px'
	    })
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(16)
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("加载中...")])]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "no-data-text",
	    class: {
	      'active': !_vm.isLoading && _vm.loadingState == 2
	    },
	    domProps: {
	      "textContent": _vm._s(_vm.noDataText)
	    }
	  })], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0bda38e6", module.exports)
	  }
	}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("2ab914a7", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-0bda38e6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./scroller.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-0bda38e6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./scroller.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: 'hui-scroller',
	    props: {
	        // 下拉刷新函数
	        onRefresh: {
	            type: Function,
	            default: undefined
	        },
	        // 下拉加载中的高度
	        offsetH: {
	            type: Number,
	            default: 20
	        },
	        // 底部加载
	        onLoad: {
	            type: Function,
	            default: undefined
	        },
	        loadDisabled: {
	            type: Boolean,
	            default: true
	        },
	        // 底部加载中高度
	        bottomH: {
	            type: Number,
	            default: 20
	        },
	        noDataText: {
	            default: '没有更多数据了'
	        },
	        onScroll: {
	            type: Function,
	            default: undefined
	        }
	    },
	    data: function data() {
	        return {
	            top: 0,
	            // 初始位置
	            startY: 0,
	            // 状态变化：
	            // 0: 下拉刷新 => 初始状态
	            // 1: 释放加载
	            // 2: 下拉刷新中
	            state: 0,
	            loadingState: 0, // 0: stop, 1: loading, 2: stopping loading
	            isLoading: false,
	            // 移动进行中
	            moving: false,
	            transform: true
	        };
	    },

	    methods: {
	        onTouchStart: function onTouchStart(e) {
	            this.startY = e.touches[0].pageY;
	            this.moving = false;
	        },
	        onTouchMove: function onTouchMove(e) {
	            this.isLoading = false;
	            if (!this.onRefresh) {
	                return;
	            }
	            var diff = e.touches[0].pageY - this.startY;
	            if (diff < 0 || this.$el.scrollTop > 0) {
	                return;
	            }
	            this.moving = true;
	            e.preventDefault();
	            this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offsetH : 0);
	            if (this.state === 2) {
	                return;
	            }
	            if (this.top >= this.offsetH) {
	                this.state = 1;
	            } else {
	                this.state = 0;
	            }
	        },
	        onTouchEnd: function onTouchEnd(e) {
	            var _this = this;

	            this.moving = false;
	            if (this.state === 2) {
	                this.top = this.offsetH;
	                return;
	            }

	            // 判断下拉刷新
	            if (this.top > this.offsetH) {
	                this.state = 2;
	                this.top = this.offsetH;
	                this.onRefresh(function () {
	                    _this.state = 0;
	                    _this.top = 0;
	                });
	                return;
	            }

	            this.state = 0;
	            this.top = 0;
	        },


	        // 上拉加载
	        isScroll: function isScroll(e) {
	            var _this2 = this;

	            if (typeof this.onScroll === "function") {
	                this.onScroll(this.$refs.vueScroll.clientHeight, this.$el.scrollTop);
	            }
	            if (this.$el.scrollTop > 0) {
	                this.transform = false;
	            } else {
	                this.transform = true;
	            }
	            if (!this.onLoad || this.loadDisabled) {
	                return;
	            }
	            var outerHeight = this.$refs.vueScroll.clientHeight;
	            var innerHeight = this.$refs.scrollInner.clientHeight;
	            if (innerHeight - outerHeight - this.bottomH <= this.$el.scrollTop) {
	                if (this.loadingState) return;
	                this.loadingState = 1;
	                this.isLoading = true;
	                this.onLoad(setTimeout(function () {
	                    _this2.loadingState = _this2.loadDisabled ? 2 : 0;
	                    _this2.isLoading = false;
	                    console.log(_this2.loadingState);
	                }, 1000));
	            }
	            return;
	        }
	    }
	};

/***/ })

/******/ })
});
;