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

	module.exports = __webpack_require__(168);

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

/***/ 8:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        size: {
	            type: [Number, String],
	            coerce: Number
	        },
	        color: {
	            type: String
	        }
	    },
	    computed: {
	        spinnerStyle: function spinnerStyle() {
	            if (this.size) {
	                return {
	                    height: this.size + 'px',
	                    width: this.size + 'px'
	                };
	            }
	        }
	    }
	};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.vmc-spinner-blade {\n  position: relative;\n  height: 28px;\n  width: 28px;\n}\n.vmc-spinner-blade .blade {\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 10%;\n  height: 25%;\n  border-radius: 2.5%;\n  -webkit-animation: b 1s linear infinite;\n  animation: b 1s linear infinite;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n  background-color: #ccc;\n}\n.vmc-spinner-blade .blade-0 {\n  -webkit-transform: rotate(30deg) translateY(-150%);\n  transform: rotate(30deg) translateY(-150%);\n  -webkit-animation-delay: -1.66666667s;\n  animation-delay: -1.66666667s;\n}\n.vmc-spinner-blade .blade-1 {\n  -webkit-transform: rotate(60deg) translateY(-150%);\n  transform: rotate(60deg) translateY(-150%);\n  -webkit-animation-delay: -1.58333333s;\n  animation-delay: -1.58333333s;\n}\n.vmc-spinner-blade .blade-2 {\n  -webkit-transform: rotate(90deg) translateY(-150%);\n  transform: rotate(90deg) translateY(-150%);\n  -webkit-animation-delay: -1.5s;\n  animation-delay: -1.5s;\n}\n.vmc-spinner-blade .blade-3 {\n  -webkit-transform: rotate(120deg) translateY(-150%);\n  transform: rotate(120deg) translateY(-150%);\n  -webkit-animation-delay: -1.41666667s;\n  animation-delay: -1.41666667s;\n}\n.vmc-spinner-blade .blade-4 {\n  -webkit-transform: rotate(150deg) translateY(-150%);\n  transform: rotate(150deg) translateY(-150%);\n  -webkit-animation-delay: -1.33333333s;\n  animation-delay: -1.33333333s;\n}\n.vmc-spinner-blade .blade-5 {\n  -webkit-transform: rotate(180deg) translateY(-150%);\n  transform: rotate(180deg) translateY(-150%);\n  -webkit-animation-delay: -1.25s;\n  animation-delay: -1.25s;\n}\n.vmc-spinner-blade .blade-6 {\n  -webkit-transform: rotate(210deg) translateY(-150%);\n  transform: rotate(210deg) translateY(-150%);\n  -webkit-animation-delay: -1.16666667s;\n  animation-delay: -1.16666667s;\n}\n.vmc-spinner-blade .blade-7 {\n  -webkit-transform: rotate(240deg) translateY(-150%);\n  transform: rotate(240deg) translateY(-150%);\n  -webkit-animation-delay: -1.08333333s;\n  animation-delay: -1.08333333s;\n}\n.vmc-spinner-blade .blade-8 {\n  -webkit-transform: rotate(270deg) translateY(-150%);\n  transform: rotate(270deg) translateY(-150%);\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.vmc-spinner-blade .blade-9 {\n  -webkit-transform: rotate(300deg) translateY(-150%);\n  transform: rotate(300deg) translateY(-150%);\n  -webkit-animation-delay: -0.91666667s;\n  animation-delay: -0.91666667s;\n}\n.vmc-spinner-blade .blade-10 {\n  -webkit-transform: rotate(330deg) translateY(-150%);\n  transform: rotate(330deg) translateY(-150%);\n  -webkit-animation-delay: -0.83333333s;\n  animation-delay: -0.83333333s;\n}\n.vmc-spinner-blade .blade-11 {\n  -webkit-transform: rotate(1turn) translateY(-150%);\n  transform: rotate(1turn) translateY(-150%);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n@-webkit-keyframes b {\n0% {\n    opacity: 0.85;\n}\n50% {\n    opacity: 0.25;\n}\nto {\n    opacity: 0.25;\n}\n}\n@keyframes b {\n0% {\n    opacity: 0.85;\n}\n50% {\n    opacity: 0.25;\n}\nto {\n    opacity: 0.25;\n}\n}\n.vmc-spinner-double-bounce {\n  position: relative;\n  height: 28px;\n  width: 28px;\n}\n.vmc-spinner-double-bounce .bounce {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: .6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: c 2s infinite ease-in-out;\n  animation: c 2s infinite ease-in-out;\n  background-color: #ccc;\n}\n.vmc-spinner-double-bounce .bounce-1 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes c {\n0%,\n  to {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes c {\n0%,\n  to {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n.vmc-spinner-triple-bounce {\n  font-size: 0;\n  padding: 9px 0;\n}\n.vmc-spinner-triple-bounce .bounce {\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: d 1.4s infinite ease-in-out both;\n  animation: d 1.4s infinite ease-in-out both;\n  background-color: #ccc;\n  width: 10px;\n  height: 10px;\n}\n.vmc-spinner-triple-bounce .bounce-0 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.vmc-spinner-triple-bounce .bounce-1 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n  margin: 0 4px;\n}\n@-webkit-keyframes d {\n0%,\n  80%,\n  to {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes d {\n0%,\n  80%,\n  to {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n}\n.vmc-spinner-fading-circle {\n  position: relative;\n  height: 28px;\n  width: 28px;\n}\n.vmc-spinner-fading-circle .block {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.vmc-spinner-fading-circle .block .circle {\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  border-radius: 100%;\n  -webkit-animation: e 1.2s infinite ease-in-out both;\n  animation: e 1.2s infinite ease-in-out both;\n  background-color: #ccc;\n}\n.vmc-spinner-fading-circle .block-0 {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n.vmc-spinner-fading-circle .block-0 .circle-0 {\n  -webkit-animation-delay: -1.2s;\n  animation-delay: -1.2s;\n}\n.vmc-spinner-fading-circle .block-1 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.vmc-spinner-fading-circle .block-1 .circle-1 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.vmc-spinner-fading-circle .block-2 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.vmc-spinner-fading-circle .block-2 .circle-2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.vmc-spinner-fading-circle .block-3 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.vmc-spinner-fading-circle .block-3 .circle-3 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.vmc-spinner-fading-circle .block-4 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.vmc-spinner-fading-circle .block-4 .circle-4 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.vmc-spinner-fading-circle .block-5 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.vmc-spinner-fading-circle .block-5 .circle-5 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.vmc-spinner-fading-circle .block-6 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.vmc-spinner-fading-circle .block-6 .circle-6 {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.vmc-spinner-fading-circle .block-7 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.vmc-spinner-fading-circle .block-7 .circle-7 {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.vmc-spinner-fading-circle .block-8 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.vmc-spinner-fading-circle .block-8 .circle-8 {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.vmc-spinner-fading-circle .block-9 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.vmc-spinner-fading-circle .block-9 .circle-9 {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.vmc-spinner-fading-circle .block-10 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.vmc-spinner-fading-circle .block-10 .circle-10 {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.vmc-spinner-fading-circle .block-11 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.vmc-spinner-fading-circle .block-11 .circle-11 {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes e {\n0%,\n  39%,\n  to {\n    opacity: 0;\n}\n40% {\n    opacity: 1;\n}\n}\n@keyframes e {\n0%,\n  39%,\n  to {\n    opacity: 0;\n}\n40% {\n    opacity: 1;\n}\n}\n.vmc-spinner-snake {\n  -webkit-animation: f .8s infinite linear;\n  animation: f .8s infinite linear;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  box-sizing: border-box;\n  height: 28px;\n  width: 28px;\n  border-top-color: #ccc;\n  border-left-color: #ccc;\n  border-bottom-color: #ccc;\n}\n@-webkit-keyframes f {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n@keyframes f {\n0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n}\n}\n", ""]);

	// exports


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(215)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(239),
	  /* template */
	  __webpack_require__(195),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] spinner.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8f3684ea", Component.options)
	  } else {
	    hotAPI.reload("data-v-8f3684ea", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(240),
	  /* template */
	  __webpack_require__(182),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner\\blade.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] blade.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24dd0414", Component.options)
	  } else {
	    hotAPI.reload("data-v-24dd0414", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(241),
	  /* template */
	  __webpack_require__(192),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner\\double-bounce.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] double-bounce.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6a922200", Component.options)
	  } else {
	    hotAPI.reload("data-v-6a922200", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(242),
	  /* template */
	  __webpack_require__(184),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner\\fading-circle.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] fading-circle.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-37542a40", Component.options)
	  } else {
	    hotAPI.reload("data-v-37542a40", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(243),
	  /* template */
	  __webpack_require__(188),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner\\snake.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] snake.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4dc6ad88", Component.options)
	  } else {
	    hotAPI.reload("data-v-4dc6ad88", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(244),
	  /* template */
	  __webpack_require__(185),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\spinner\\src\\spinner\\triple-bounce.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] triple-bounce.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3dbda753", Component.options)
	  } else {
	    hotAPI.reload("data-v-3dbda753", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-spinner-blade",
	    style: (_vm.spinnerStyle)
	  }, _vm._l((12), function(i) {
	    return _c('div', {
	      staticClass: "blade",
	      class: 'blade-' + (i - 1),
	      style: (_vm.bladeStyle)
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-24dd0414", module.exports)
	  }
	}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-spinner-fading-circle",
	    style: (_vm.spinnerStyle)
	  }, _vm._l((12), function(i) {
	    return _c('div', {
	      staticClass: "block",
	      class: 'block-' + (i - 1)
	    }, [_c('div', {
	      staticClass: "circle",
	      class: 'circle-' + (i - 1),
	      style: (_vm.circleStyle)
	    })])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37542a40", module.exports)
	  }
	}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-spinner-triple-bounce",
	    style: (_vm.spinnerStyle)
	  }, _vm._l((3), function(i) {
	    return _c('div', {
	      staticClass: "bounce",
	      class: 'bounce-' + (i - 1),
	      style: (_vm.bounceStyle)
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3dbda753", module.exports)
	  }
	}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-spinner-snake",
	    style: (_vm.spinnerStyle)
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4dc6ad88", module.exports)
	  }
	}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-spinner-double-bounce",
	    style: (_vm.spinnerStyle)
	  }, _vm._l((2), function(i) {
	    return _c('div', {
	      staticClass: "bounce",
	      class: 'bounce-' + (i - 1),
	      style: (_vm.bounceStyle)
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6a922200", module.exports)
	  }
	}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.spinner, {
	    tag: "component",
	    attrs: {
	      "size": _vm.size,
	      "color": _vm.color
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8f3684ea", module.exports)
	  }
	}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(144);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("449d99b6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-8f3684ea!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./spinner.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-8f3684ea!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./spinner.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//

	var SPINNERS = ['blade', 'snake', 'double-bounce', 'triple-bounce', 'fading-circle'];

	var parseSpinner = function parseSpinner(index) {
	    index = index || 0;

	    if (/^\d+$/.test(index)) {
	        if (SPINNERS.length <= index) {
	            console.warn('\'' + index + '\' spinner not found, use the default spinner.');
	            index = 0;
	        }
	        return SPINNERS[index];
	    }

	    if (SPINNERS.indexOf(index) === -1) {
	        console.warn('\'' + index + '\' spinner not found, use the default spinner.');
	        index = SPINNERS[0];
	    }

	    return index;
	};

	/**
	 * spinner
	 * @module components/spinner
	 * @desc 加载动画
	 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `triple-bounce`, `fading-circle`
	 * @param {number} size - 尺寸
	 * @param {string} color - 颜色
	 *
	 * @example
	 * <spinner type="snake"></spinner>
	 *
	 * <!-- double-bounce -->
	 * <spinner :type="2"></spinner>
	 *
	 * <!-- default blade -->
	 * <spinner :size="30" color="#999"></spinner>
	 */
	exports.default = {
	    name: 'hui-spinner',
	    computed: {
	        spinner: function spinner() {
	            return 'spinner-' + parseSpinner(this.type);
	        }
	    },
	    components: {
	        SpinnerBlade: __webpack_require__(169),
	        SpinnerSnake: __webpack_require__(172),
	        SpinnerDoubleBounce: __webpack_require__(170),
	        SpinnerTripleBounce: __webpack_require__(173),
	        SpinnerFadingCircle: __webpack_require__(171)
	    },
	    props: {
	        type: [Number, String],
	        size: [Number, String],
	        color: String
	    }
	};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spinner = __webpack_require__(8);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_spinner2.default],
	    computed: {
	        bladeStyle: function bladeStyle() {
	            if (this.color) {
	                return {
	                    backgroundColor: this.color
	                };
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spinner = __webpack_require__(8);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_spinner2.default],
	    computed: {
	        bounceStyle: function bounceStyle() {
	            if (this.color) {
	                return {
	                    backgroundColor: this.color
	                };
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spinner = __webpack_require__(8);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_spinner2.default],
	    computed: {
	        circleStyle: function circleStyle() {
	            if (this.color) {
	                return {
	                    backgroundColor: this.color
	                };
	            }
	        }
	    },
	    methods: {
	        blockStyle: function blockStyle(index) {
	            return {
	                transform: 'rotate(' + 30 * index + 'deg)'
	            };
	        },
	        circleStyle: function circleStyle(index) {
	            return {
	                backgroundColor: this.spinnerColor,
	                animationDelay: 1.2 / 12 * index - 1.2 + 's'
	            };
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spinner = __webpack_require__(8);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_spinner2.default],
	    computed: {
	        spinnerStyle: function spinnerStyle() {
	            var style = {};

	            if (this.size) {
	                var size = Math.ceil(this.size / 8);

	                style.height = this.size + 'px';
	                style.width = this.size + 'px';
	                style.borderWidth = size + 'px';
	            }

	            if (this.color) {
	                style.borderTopColor = this.color;
	                style.borderLeftColor = this.color;
	                style.borderBottomColor = this.color;
	            }

	            return style;
	        }
	    }
	}; //
	//
	//
	//

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _spinner = __webpack_require__(8);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_spinner2.default],
	    computed: {
	        unitSize: function unitSize() {
	            if (this.size) {
	                return Math.round(this.size / 6) * 2;
	            }
	        },
	        spinnerStyle: function spinnerStyle() {
	            if (this.size) {
	                return {
	                    padding: (this.size - this.unitSize) / 2 + 'px 0'
	                };
	            }
	        },
	        bounceStyle: function bounceStyle() {
	            var style = {};

	            if (this.size) {
	                style.width = this.unitSize + 'px';
	                style.height = this.unitSize + 'px';
	            }

	            if (this.color) {
	                style.backgroundColor = this.color;
	            }

	            return style;
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ })

/******/ })
});
;