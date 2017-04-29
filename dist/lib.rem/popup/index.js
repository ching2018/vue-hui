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

	module.exports = __webpack_require__(163);

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

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.default-popup {\n  background: #fff;\n  position: absolute;\n  z-index: 200;\n}\n.default-popup-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n.default-popup-right {\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.default-popup-top {\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  min-height: 50px;\n  line-height: 50px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.7);\n}\n.default-popup-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.default-popup-fade-enter-active,\n.default-popup-fade-leave-active {\n  opacity: 1;\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.default-popup-fade-enter,\n.default-popup-fade-leave-active {\n  opacity: 0;\n}\n.default-popup-top-enter-active,\n.default-popup-top-leave-active,\n.default-popup-bottom-enter-active,\n.default-popup-bottom-leave-active,\n.default-popup-right-enter-active,\n.default-popup-right-leave-active,\n.default-popup-left-enter-active,\n.default-popup-left-leave-active {\n  -webkit-transition: -webkit-transform 0.3s ease-out 100ms;\n  transition: -webkit-transform 0.3s ease-out 100ms;\n  transition: transform 0.3s ease-out 100ms;\n  transition: transform 0.3s ease-out 100ms, -webkit-transform 0.3s ease-out 100ms;\n}\n.default-popup-top-enter,\n.default-popup-top-leave-active {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n}\n.default-popup-bottom-enter,\n.default-popup-bottom-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.default-popup-left-enter,\n.default-popup-left-leave-active {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n}\n.default-popup-right-enter,\n.default-popup-right-leave-active {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}\n", ""]);

	// exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(218)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(234),
	  /* template */
	  __webpack_require__(199),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\popup\\src\\popup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] popup.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bd17059e", Component.options)
	  } else {
	    hotAPI.reload("data-v-bd17059e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vmc-popup-wrapper"
	  }, [_c('transition', {
	    attrs: {
	      "name": "vmc-popup-fade"
	    }
	  }, [(_vm.showMask) ? _c('hui-overlay', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.localShow),
	      expression: "localShow"
	    }],
	    on: {
	      "on-click": _vm._onMaskClick
	    }
	  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": 'vmc-popup-' + _vm.position
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.localShow),
	      expression: "localShow"
	    }],
	    staticClass: "vmc-popup",
	    class: 'vmc-popup-' + _vm.position,
	    style: (_vm.style)
	  }, [_vm._t("default")], 2)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bd17059e", module.exports)
	  }
	}

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("07bf766c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-bd17059e!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./popup.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-bd17059e!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./popup.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 234:
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

	exports.default = {
	    name: 'hui-popup',
	    props: {
	        show: Boolean,
	        mask: {
	            default: null
	        },
	        height: {
	            default: null
	        },
	        width: {
	            default: '100%'
	        },
	        hideOnMask: {
	            default: true
	        },
	        position: {
	            type: String,
	            default: 'bottom' // top, left, right, bottom
	        }
	    },
	    computed: {
	        style: function style() {
	            return {
	                width: getCSSSize(this.width),
	                height: getCSSSize(this.getHeight)
	            };
	        },
	        getHeight: function getHeight() {
	            if (this.height !== null) {
	                return this.height;
	            }

	            switch (this.position) {
	                case 'top':
	                    return 'auto';
	                default:
	                    return '100%';
	            }
	        },
	        showMask: function showMask() {
	            var mask = this.mask;
	            if (mask !== null) {
	                return mask;
	            }

	            switch (this.position) {
	                case 'top':
	                    return false;
	                default:
	                    return true;
	            }
	        }
	    },
	    methods: {
	        _onMaskClick: function _onMaskClick() {
	            if (this.hideOnMask) {
	                this._hide();
	            }
	        },
	        _hide: function _hide() {
	            this.localShow = false;
	            this.$emit('on-hide');
	            this.$emit('on-sync-show', false);
	        },

	        isNumeric: function isNumeric(n) {
	            return !Array.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
	        },
	        isCSSSize: function isCSSSize(value) {
	            return (/[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(value)
	            );
	        },
	        getCSSSize: function getCSSSize(value) {
	            if (this.isCSSSize(value)) {
	                return value;
	            } else if (this.isNumeric(value)) {
	                return value + 'px';
	            } else {
	                return value;
	            }
	        }
	    },
	    data: function data() {
	        return {
	            localShow: this.show
	        };
	    },

	    watch: {
	        show: function show(_show) {
	            var _this = this;

	            if (this.localShow !== _show) {
	                this.localShow = _show;
	            }

	            if (this.position === 'top' && _show === true) {
	                setTimeout(function () {
	                    _this._hide();
	                }, 1000);
	            }
	        }
	    }
	};

/***/ })

/******/ })
});
;