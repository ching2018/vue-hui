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
	exports.SliderItem = exports.Slider = undefined;

	var _slider = __webpack_require__(167);

	var _slider2 = _interopRequireDefault(_slider);

	var _sliderItem = __webpack_require__(166);

	var _sliderItem2 = _interopRequireDefault(_sliderItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Slider = _slider2.default;
	exports.SliderItem = _sliderItem2.default;

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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/**\n * Component:\tVariables\n * Description:\tDefine all variables\n*/\n.m-slider {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.slider-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  transform: translate3d(0px, 0px, 0px);\n  position: relative;\n  z-index: 1;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.slider-wrapper.slider-wrapper-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.slider-item {\n  width: 100%;\n  height: 100%;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n.slider-item a {\n  display: block;\n}\n.slider-item img {\n  width: 100%;\n}\n@-webkit-keyframes slider-pagination-opacity {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes slider-pagination-opacity {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n.slider-pagination {\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n  left: 0;\n  bottom: .1rem;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  opacity: 0;\n  -webkit-animation: slider-pagination-opacity 0.3s linear 0.4s forwards;\n  animation: slider-pagination-opacity 0.3s linear 0.4s forwards;\n}\n.slider-pagination.slider-pagination-vertical {\n  width: 0;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  bottom: 0;\n  left: auto;\n  right: .1rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.slider-pagination > .slider-pagination-item {\n  margin: .05rem;\n  width: 6px;\n  height: 6px;\n  display: inline-block;\n  border-radius: 100%;\n  background-color: #B7D0E1;\n}\n.slider-pagination > .slider-pagination-item.slider-pagination-item-active {\n  background-color: #FF0005;\n}\n", ""]);

	// exports


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(237),
	  /* template */
	  __webpack_require__(200),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\slider\\src\\slider-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] slider-item.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d59c873a", Component.options)
	  } else {
	    hotAPI.reload("data-v-d59c873a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(217)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(238),
	  /* template */
	  __webpack_require__(197),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\slider\\src\\slider.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a588aaa6", Component.options)
	  } else {
	    hotAPI.reload("data-v-a588aaa6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "slider",
	    staticClass: "m-slider"
	  }, [_c('div', {
	    ref: "warpper",
	    staticClass: "slider-wrapper",
	    class: _vm.direction == 'vertical' ? 'slider-wrapper-vertical' : '',
	    style: (_vm.dragStyleObject)
	  }, [_c('div', {
	    staticClass: "slider-item",
	    style: (_vm.itemHeight),
	    domProps: {
	      "innerHTML": _vm._s(_vm.lastItem)
	    }
	  }), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('div', {
	    staticClass: "slider-item",
	    style: (_vm.itemHeight),
	    domProps: {
	      "innerHTML": _vm._s(_vm.firtstItem)
	    }
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "slider-pagination",
	    class: _vm.direction == 'vertical' ? 'slider-pagination-vertical' : ''
	  }, _vm._l((_vm.itemNums), function(t, i) {
	    return _c('span', {
	      staticClass: "slider-pagination-item",
	      class: _vm.paginationIndex == i ? 'slider-pagination-item-active' : ''
	    })
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a588aaa6", module.exports)
	  }
	}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "slider-item"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d59c873a", module.exports)
	  }
	}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("6d34f2eb", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-a588aaa6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./slider.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-a588aaa6!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./slider.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 237:
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

	exports.default = {
	    name: 'hui-slider-item',
	    mounted: function mounted() {
	        this.$parent.init();
	    }
	};

/***/ }),

/***/ 238:
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

	exports.default = {
	    name: 'hui-slider',
	    data: function data() {
	        return {
	            firtstItem: '',
	            lastItem: '',
	            itemNums: 0,
	            index: 1,
	            itemsArr: [],
	            autoPlayTimer: null,
	            paginationIndex: 0,
	            itemHeight: {
	                height: null
	            },
	            dragStyleObject: {
	                transform: 0,
	                speed: 0
	            },
	            touches: {
	                moveTag: 0,
	                moveOffset: 0,
	                touchStartTime: 0,
	                isTouchEvent: false,
	                allowClick: false
	            }
	        };
	    },

	    props: {
	        speed: {
	            default: 300,
	            validator: function validator(val) {
	                return (/^\d*$/.test(val)
	                );
	            }
	        },
	        autoplay: {
	            default: 0,
	            validator: function validator(val) {
	                return (/^\d*$/.test(val)
	                );
	            }
	        },
	        direction: {
	            validator: function validator(val) {
	                return ['horizontal', 'vertical'].indexOf(val) > -1;
	            },

	            default: 'horizontal'
	        }
	    },
	    watch: {
	        index: function index() {
	            var index = this.index;
	            var itemNums = this.itemNums;
	            var tm = (index - 1) % itemNums;
	            this.paginationIndex = tm < 0 ? itemNums - 1 : tm;
	        }
	    },
	    methods: {
	        init: function init() {
	            this.destroy();

	            this.isVertical = this.direction == 'vertical';

	            this.itemsArr = this.$children.filter(function (item) {
	                return item.$options.name === 'hui-slider-item';
	            });

	            this.itemNums = this.itemsArr.length;

	            if (this.isVertical) {
	                this.$refs.slider.style.height = '100%';
	                var height = this.$el.clientHeight;
	                this.itemHeight.height = height + 'px';
	                this.setTranslate(0, -height);
	                this.itemsArr.forEach(function (item) {
	                    item.$el.style.height = height + 'px';
	                });
	            } else {
	                this.setTranslate(0, -this.$refs.warpper.offsetWidth);
	            }
	            this.cloneItem();
	            this.bindEvents();

	            this.autoPlay();
	        },
	        cloneItem: function cloneItem() {
	            var itemArr = this.itemsArr;

	            this.firtstItem = itemArr[0].$el.innerHTML;
	            this.lastItem = itemArr[itemArr.length - 1].$el.innerHTML;
	        },
	        touchStartHandler: function touchStartHandler(event) {
	            var touches = this.touches;

	            touches.allowClick = true;

	            touches.isTouchEvent = event.type === 'touchstart';

	            if (!touches.isTouchEvent && 'which' in event && event.which === 3) return;

	            if (touches.moveTag == 0) {
	                touches.moveTag = 1;

	                touches.startX = event.touches ? event.touches[0].clientX : event.clientX;
	                touches.startY = event.touches ? event.touches[0].clientY : event.clientY;

	                touches.touchStartTime = Date.now();

	                var itemNums = this.itemNums;

	                if (this.index == 0) {
	                    this.index = itemNums;
	                    this.setTranslate(0, -itemNums * (this.isVertical ? this.$el.clientHeight : this.$refs.warpper.offsetWidth));
	                    return;
	                }

	                if (this.index > itemNums) {
	                    this.index = 1;
	                    this.setTranslate(0, this.isVertical ? -this.$el.clientHeight : -this.$refs.warpper.offsetWidth);
	                }
	            }
	        },
	        touchMoveHandler: function touchMoveHandler(event) {
	            if (!this.supportTouch || this.isVertical) {
	                event.preventDefault();
	            }

	            var touches = this.touches;

	            touches.allowClick = false;

	            if (touches.isTouchEvent && event.type === 'mousemove') return;

	            var currentY = event.touches ? event.touches[0].clientY : event.clientY;
	            var currentX = event.touches ? event.touches[0].clientX : event.clientX;

	            var touchAngle = Math.atan2(Math.abs(currentY - touches.startY), Math.abs(currentX - touches.startX)) * 180 / Math.PI;

	            if ((!this.isVertical ? touchAngle > 45 : 90 - touchAngle > 45) && this.supportTouch) {
	                touches.moveTag = 3;
	                this.stopAutoplay();
	                this.setTranslate(0, -this.index * (this.isVertical ? this.$el.clientHeight : this.$refs.warpper.offsetWidth));
	                return;
	            }

	            var deltaSlide = touches.moveOffset = this.isVertical ? currentY - touches.startY : currentX - touches.startX;

	            if (deltaSlide != 0 && touches.moveTag != 0) {
	                if (touches.moveTag == 1) {
	                    this.stopAutoplay();
	                    touches.moveTag = 2;
	                }

	                if (touches.moveTag == 2) {
	                    this.setTranslate(0, -this.index * (this.isVertical ? this.$el.clientHeight : this.$refs.warpper.offsetWidth) + deltaSlide);
	                }
	            }
	        },
	        touchEndHandler: function touchEndHandler() {
	            var touches = this.touches;
	            var moveOffset = touches.moveOffset;
	            var warpperSize = this.isVertical ? this.$el.clientHeight : this.$refs.warpper.offsetWidth;

	            setTimeout(function () {
	                touches.allowClick = true;
	            }, 0);

	            if (touches.moveTag == 1) {
	                touches.moveTag = 0;
	            }

	            if (touches.moveTag == 2) {
	                touches.moveTag = 0;

	                var timeDiff = Date.now() - touches.touchStartTime;

	                if (timeDiff > 300 && Math.abs(moveOffset) <= warpperSize * .5) {
	                    this.setTranslate(this.speed, -this.index * warpperSize);
	                } else {
	                    this.setTranslate(this.speed, -((moveOffset > 0 ? --this.index : ++this.index) * warpperSize));
	                }
	                this.autoPlay();
	                return;
	            }

	            if (touches.moveTag == 3) {
	                touches.moveTag = 0;
	                this.autoPlay();
	            }
	        },
	        autoPlay: function autoPlay() {
	            var _this = this;

	            if (this.autoplay <= 0) return;

	            this.autoPlayTimer = setInterval(function () {
	                var size = _this.isVertical ? _this.$el.clientHeight : _this.$refs.warpper.offsetWidth;

	                if (_this.index > _this.itemNums) {
	                    _this.index = 1;
	                    _this.setTranslate(0, -size);
	                    setTimeout(function () {
	                        _this.setTranslate(_this.speed, -(++_this.index * size));
	                    }, 100);
	                    return;
	                }
	                _this.setTranslate(_this.speed, -(++_this.index * size));
	            }, this.autoplay);
	        },
	        stopAutoplay: function stopAutoplay() {
	            clearInterval(this.autoPlayTimer);
	        },
	        bindEvents: function bindEvents() {
	            var _this2 = this;

	            var _events = this.touchEvents();

	            this.$el.addEventListener(_events.start, this.touchStartHandler);
	            this.$el.addEventListener(_events.move, this.touchMoveHandler);
	            this.$el.addEventListener(_events.end, this.touchEndHandler);

	            this.$el.addEventListener('click', function (e) {
	                if (!_this2.touches.allowClick) {
	                    e.preventDefault();
	                }
	            });

	            window.addEventListener('resize', this.resizeSlides);
	        },
	        unbindEvents: function unbindEvents() {
	            var _events = this.touchEvents();

	            this.$el.removeEventListener(_events.start, this.touchStartHandler);
	            this.$el.removeEventListener(_events.move, this.touchMoveHandler);
	            this.$el.removeEventListener(_events.end, this.touchEndHandler);

	            window.removeEventListener('resize', this.resizeSlides);
	        },
	        touchEvents: function touchEvents() {
	            var supportTouch = this.supportTouch = window.Modernizr && !!window.Modernizr.touch || function () {
	                return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
	            }();

	            return {
	                start: supportTouch ? 'touchstart' : 'mousedown',
	                move: supportTouch ? 'touchmove' : 'mousemove',
	                end: supportTouch ? 'touchend' : 'mouseup'
	            };
	        },
	        setTranslate: function setTranslate(speed, translate) {
	            this.dragStyleObject.transitionDuration = speed + 'ms';
	            if (this.isVertical) {
	                this.dragStyleObject.transform = 'translate3d(0, ' + translate + 'px, 0)';
	            } else {
	                this.dragStyleObject.transform = 'translate3d(' + translate + 'px, 0, 0)';
	            }
	        },
	        resizeSlides: function resizeSlides() {
	            if (this.isVertical) {
	                var height = this.$el.clientHeight;
	                this.dragStyleObject.transform = 'translate3d(0, ' + -this.index * height + 'px, 0)';
	            } else {
	                var width = this.$refs.warpper.offsetWidth;
	                this.dragStyleObject.transform = 'translate3d(' + -this.index * width + 'px, 0, 0)';
	            }
	        },
	        destroy: function destroy() {
	            this.unbindEvents();
	            this.stopAutoplay();
	        }
	    },
	    destroyed: function destroyed() {
	        this.destroy();
	    }
	};

/***/ })

/******/ })
});
;