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
	exports.SendCode = undefined;

	var _sendcode = __webpack_require__(165);

	var _sendcode2 = _interopRequireDefault(_sendcode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SendCode = _sendcode2.default;

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

/***/ 9:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var pageScroll = function () {
	    var fn = function fn(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    };
	    var islock = false;

	    return {
	        lock: function lock() {
	            if (islock) return;
	            islock = true;
	            document.addEventListener('touchmove', fn);
	        },
	        unlock: function unlock() {
	            islock = false;
	            document.removeEventListener('touchmove', fn);
	        }
	    };
	}();

	var isColor = function isColor(value) {
	    var colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
	    var rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
	    var rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

	    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
	};

	var getScrollview = function getScrollview(el) {
	    var currentNode = el;
	    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
	        var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
	        if (overflowY === 'scroll' || overflowY === 'auto') {
	            return currentNode;
	        }
	        currentNode = currentNode.parentNode;
	    }
	    return window;
	};

	var checkInview = function checkInview(scrollView, el) {
	    var contentHeight = scrollView == window ? document.body.offsetHeight : scrollView.offsetHeight;
	    var contentTop = scrollView === window ? 0 : scrollView.getBoundingClientRect().top;

	    var post = el.getBoundingClientRect().top - contentTop;
	    var posb = post + el.offsetHeight;

	    return post >= 0 && post < contentHeight || posb > 0 && posb <= contentHeight;
	};

	var hasClass = function hasClass(elem, cls) {
	    cls = cls || '';
	    if (cls.replace(/\s/g, '').length == 0) return false;
	    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
	};

	var addClass = function addClass(ele, cls) {
	    if (!hasClass(ele, cls)) {
	        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
	    }
	};

	var removeClass = function removeClass(ele, cls) {
	    if (hasClass(ele, cls)) {
	        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
	        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
	            newClass = newClass.replace(' ' + cls + ' ', ' ');
	        }
	        ele.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	};

	exports.pageScroll = pageScroll;
	exports.isColor = isColor;
	exports.getScrollview = getScrollview;
	exports.checkInview = checkInview;
	exports.addClass = addClass;
	exports.removeClass = removeClass;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/**\n * Component:\tVariables\n * Description:\tDefine all variables\n*/\n.m-button {\n  padding: 0 12px;\n}\n.btn {\n  text-align: center;\n  position: relative;\n  border: none;\n  pointer-events: auto;\n  height: 30px;\n  font-size: 13px;\n  display: inline-block;\n  padding: 0 10px;\n  box-sizing: content-box;\n  border-radius: 3px;\n}\n.btn-block {\n  text-align: center;\n  position: relative;\n  border: none;\n  pointer-events: auto;\n  width: 100%;\n  display: block;\n  font-size: 18px;\n  height: 50px;\n  margin-top: 25px;\n  border-radius: 3px;\n}\n.btn-primary {\n  background-color: #04BE02;\n  color: #FFF;\n}\n.btn-primary:active {\n  background-color: #04ab02;\n}\n.btn-danger {\n  background-color: #EF4F4F;\n  color: #FFF;\n}\n.btn-danger:active {\n  background-color: #d74747;\n}\n.btn-warning {\n  background-color: #FFB400;\n  color: #FFF;\n}\n.btn-warning:active {\n  background-color: #e6a200;\n}\n.btn-disabled {\n  background-color: #CCC;\n  color: #F0F0F0;\n  pointer-events: none;\n}\n.btn-disabled:active {\n  background-color: #b8b8b8;\n}\n.btn-hollow {\n  background-color: #FFF;\n  color: #454545;\n  border: 1px solid #EAEAEA;\n}\n.btn-hollow:active {\n  background-color: #f7f7f7;\n}\n.hairline .btn-hollow {\n  border: 0.5px solid #dedede;\n}\n", ""]);

	// exports


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(13)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(14),
	  /* template */
	  __webpack_require__(12),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\button\\src\\button.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e200e3e6", Component.options)
	  } else {
	    hotAPI.reload("data-v-e200e3e6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', {
	    class: _vm.classes,
	    style: ({
	      backgroundColor: _vm.bgcolor,
	      color: _vm.color
	    }),
	    attrs: {
	      "disabled": _vm.disabled
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e200e3e6", module.exports)
	  }
	}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("efbc7994", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-e200e3e6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./button.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-e200e3e6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./button.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assist = __webpack_require__(9);

	exports.default = {
	    name: 'hui-button',
	    props: {
	        disabled: Boolean,
	        type: {
	            validator: function validator(value) {
	                return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
	            },

	            default: 'primary'
	        },
	        size: {
	            validator: function validator(value) {
	                return ['small', 'large'].indexOf(value) > -1;
	            }
	        },
	        bgcolor: {
	            validator: function validator(value) {
	                if (!value) return true;
	                return (0, _assist.isColor)(value);
	            }
	        },
	        color: {
	            validator: function validator(value) {
	                if (!value) return true;
	                return (0, _assist.isColor)(value);
	            }
	        }
	    },
	    computed: {
	        classes: function classes() {
	            var s = this.size == 'large' ? 'btn-block' : 'btn';
	            var b = 'btn-' + this.type;
	            if (this.disabled) {
	                b = 'btn-disabled';
	            }

	            if (this.bgcolor) {
	                b = '';
	            }
	            return s + ' ' + b;
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(236),
	  /* template */
	  __webpack_require__(193),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\sendcode\\src\\sendcode.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] sendcode.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6d118b6d", Component.options)
	  } else {
	    hotAPI.reload("data-v-6d118b6d", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('hui-button', {
	    class: _vm.start ? 'btn-disabled' : '',
	    style: ({
	      backgroundColor: _vm.bgcolor,
	      color: _vm.color
	    }),
	    attrs: {
	      "size": _vm.size,
	      "type": _vm.type,
	      "disabled": _vm.start
	    }
	  }, [_vm._v("\n    " + _vm._s(_vm.tmpStr) + "\n")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6d118b6d", module.exports)
	  }
	}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _button = __webpack_require__(11);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'hui-sendcode',
	    extends: _button2.default,
	    data: function data() {
	        return {
	            tmpStr: '获取短信验证码',
	            timer: null,
	            start: false
	        };
	    },

	    props: {
	        initStr: String,
	        second: {
	            default: 60,
	            validator: function validator(val) {
	                return (/^\d*$/.test(val)
	                );
	            }
	        },
	        runStr: {
	            type: String,
	            default: '{%s}秒后重新获取'
	        },
	        resetStr: {
	            type: String,
	            default: '重新获取验证码'
	        },
	        value: {
	            type: Boolean,
	            default: false
	        }
	    },
	    methods: {
	        run: function run() {
	            var _this = this;

	            var second = this.second;
	            this.tmpStr = this.getStr(this.second);
	            this.timer = setInterval(function () {
	                second--;
	                _this.tmpStr = _this.getStr(second);
	                second <= 0 && _this.stop();
	            }, 1000);
	        },
	        stop: function stop() {
	            this.tmpStr = this.resetStr;
	            this.$emit('input', false);
	            clearInterval(this.timer);
	        },
	        getStr: function getStr(second) {
	            return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second);
	        }
	    },
	    watch: {
	        value: function value(val) {
	            this.start = val;
	            val && this.run();
	        }
	    },
	    mounted: function mounted() {
	        if (this.initStr) this.tmpStr = this.initStr;
	    },
	    destroyed: function destroyed() {
	        this.stop();
	    }
	}; //
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

/***/ })

/******/ })
});
;