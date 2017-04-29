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
	exports.Input = undefined;

	var _input = __webpack_require__(161);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Input = _input2.default;

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

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/**\n * Component:\tVariables\n * Description:\tDefine all variables\n*/\n.m-input {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.m-input > input {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: none;\n  font-size: inherit;\n}\n.m-input > .input-clear,\n.m-input > .input-error,\n.m-input > .input-password,\n.m-input > .input-success {\n  padding-left: 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.m-input > .input-clear:after,\n.m-input > .input-error:after,\n.m-input > .input-password:after,\n.m-input > .input-success:after {\n  font-family: 'HUI-INLAY';\n}\n.m-input > .input-clear:after {\n  content: '\\E60C';\n  color: #B2B2B2;\n  font-size: 15px;\n}\n.m-input > .input-error:after {\n  content: '\\E614';\n  color: #F43530;\n  font-size: 20px;\n}\n.m-input > .input-success:after {\n  content: '\\E601';\n  color: #09BB07;\n  font-size: 20px;\n}\n.m-input > .input-password:after {\n  content: '\\E77E';\n  color: #B2B2B2;\n  font-size: 22px;\n}\n.m-input > .input-password-open:after {\n  content: '\\E77D';\n  color: #434343;\n}\n", ""]);

	// exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(207)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(232),
	  /* template */
	  __webpack_require__(183),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\input\\src\\input.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f1fbfed", Component.options)
	  } else {
	    hotAPI.reload("data-v-2f1fbfed", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-input"
	  }, [(_vm.regex == 'mobile') ? [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "tel",
	      "pattern": "[0-9]*",
	      "name": _vm.name,
	      "maxlength": "11",
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  })] : [(_vm.type == 'password') ? [(!_vm.showPwd) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "password",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.showPwd) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "text",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e()] : _vm._e(), _vm._v(" "), (_vm.type == 'text') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "text",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'number') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "number",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": [_vm.blurHandler, function($event) {
	        _vm.$forceUpdate()
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'email') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "email",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'tel') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "tel",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'datetime-local') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "datetime-local",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'date') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "date",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'time') ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.currentValue),
	      expression: "currentValue"
	    }],
	    attrs: {
	      "type": "time",
	      "name": _vm.name,
	      "maxlength": _vm.max,
	      "placeholder": _vm.placeholder,
	      "autocomplete": _vm.autocomplete,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.currentValue)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.showClear = true
	      },
	      "blur": _vm.blurHandler,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.currentValue = $event.target.value
	      }
	    }
	  }) : _vm._e()], _vm._v(" "), _c('a', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showClearIcon && _vm.showClear && !_vm.isempty),
	      expression: "showClearIcon && showClear && !isempty"
	    }],
	    staticClass: "input-clear",
	    attrs: {
	      "href": "javascript:;",
	      "tabindex": "-1"
	    },
	    on: {
	      "click": _vm.clearInput
	    }
	  }), _vm._v(" "), (_vm.showErrorIcon) ? _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (((!!_vm.regex || !!_vm.min || !!_vm.max || _vm.required) && _vm.type != 'password' && _vm.iserror) || _vm.checkRequired),
	      expression: "((!!regex || !!min || !!max || required) && type != 'password' && iserror) || checkRequired"
	    }],
	    staticClass: "input-error"
	  }) : _vm._e(), _vm._v(" "), (_vm.showSuccessIcon) ? _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: ((!!_vm.regex || !!_vm.min || !!_vm.max || _vm.required) && _vm.type != 'password' && !_vm.iserror && _vm.currentValue != ''),
	      expression: "(!!regex || !!min || !!max || required) && type != 'password' && !iserror && currentValue != ''"
	    }],
	    staticClass: "input-success"
	  }) : _vm._e(), _vm._v(" "), (_vm.type == 'password') ? _c('a', {
	    staticClass: "input-password",
	    class: _vm.showPwd ? 'input-password-open' : '',
	    attrs: {
	      "href": "javascript:;",
	      "tabindex": "-1"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.showPwd = !_vm.showPwd
	      }
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f1fbfed", module.exports)
	  }
	}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(4)("6ecdb8fc", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2f1fbfed!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./input.vue", function() {
	     var newContent = require("!!../../../../node_modules/.0.26.4@css-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2f1fbfed!../../../../node_modules/.2.2.3@less-loader/index.js!../../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!../../../../node_modules/.0.1.3@string-replace-webpack-plugin/loader.js?id=mwnbltx7so1pg0b8rfnha1yvi!./input.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 232:
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
	//

	exports.default = {
	    name: 'hui-input',
	    data: function data() {
	        return {
	            currentValue: '',
	            isempty: true,
	            iserror: false,
	            showPwd: false,
	            showClear: false,
	            checkRequired: false,
	            valid: true,
	            errorMsg: '',
	            errorCode: '',
	            regexObj: {
	                email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
	                mobile: '^(86)?1[3,4,5,7,8]\\d{9}$',
	                bankcard: '^\\d{15,19}$'
	            }
	        };
	    },

	    props: {
	        name: String,
	        placeholder: String,
	        value: [String, Number],
	        readonly: Boolean,
	        disabled: Boolean,
	        regex: String,
	        autocomplete: {
	            type: String,
	            default: 'off'
	        },
	        showClearIcon: {
	            type: Boolean,
	            default: true
	        },
	        showErrorIcon: {
	            type: Boolean,
	            default: true
	        },
	        showSuccessIcon: {
	            type: Boolean,
	            default: true
	        },
	        required: {
	            type: Boolean,
	            default: false
	        },
	        type: {
	            validator: function validator(value) {
	                return ['text', 'password', 'email', 'number', 'tel', 'datetime-local', 'date', 'time'].indexOf(value) > -1;
	            },

	            default: 'text'
	        },
	        max: {
	            validator: function validator(val) {
	                return (/^\d*$/.test(val)
	                );
	            }
	        },
	        min: {
	            validator: function validator(val) {
	                return (/^\d*$/.test(val)
	                );
	            }
	        }
	    },
	    watch: {
	        value: function value(val) {
	            this.currentValue = val;
	        },
	        currentValue: function currentValue(val) {
	            this.isempty = !val;
	            this.validatorInput(val);
	            this.emitInput();
	        }
	    },
	    methods: {
	        init: function init() {
	            this.currentValue = this.value;

	            if (this.required && this.currentValue == '') {
	                this.setError('不能为空', 'NOT_NULL');
	                return;
	            }

	            if (this.min && this.currentValue.length < this.min) {
	                this.setError('\u6700\u5C11\u8F93\u5165' + this.min + '\u4F4D\u5B57\u7B26', 'NOT_MIN_SIZE');
	            }
	        },
	        validatorInput: function validatorInput(val) {
	            if (val == '') {
	                if (this.required) {
	                    this.setError('不能为空', 'NOT_NULL');
	                    this.iserror = true;
	                    this.checkRequired = true;
	                }
	                return;
	            }
	            this.checkRequired = false;

	            if (this.min && val.length < this.min && val.length != 0) {
	                this.setError('\u6700\u5C11\u8F93\u5165' + this.min + '\u4F4D\u5B57\u7B26', 'NOT_MIN_SIZE');
	                this.iserror = true;
	                return;
	            }

	            var v = this.regex == 'bankcard' ? val.replace(/\s/g, '') : val;
	            var reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
	            if (this.regex && !new RegExp(reg).test(v)) {
	                this.setError('输入字符不符合规则', 'NOT_REGEX_RULE');
	                this.iserror = true;
	                return;
	            }

	            this.iserror = false;
	            this.valid = true;
	            this.errorMsg = '';
	            this.errorCode = '';
	        },
	        blurHandler: function blurHandler() {
	            var _this = this;

	            this.validatorInput(this.currentValue);

	            setTimeout(function () {
	                _this.showClear = false;
	            }, 200);
	        },
	        clearInput: function clearInput() {
	            this.currentValue = '';
	            this.emitInput();
	        },
	        emitInput: function emitInput() {
	            if (this.regex == 'bankcard') {
	                if (/\S{5}/.test(this.currentValue)) {
	                    this.currentValue = this.currentValue.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
	                }
	                this.$emit('input', this.currentValue.replace(/\s/g, ''));
	                return;
	            }
	            this.$emit('input', this.currentValue);
	        },
	        setError: function setError(error, code) {
	            this.errorMsg = error;
	            this.errorCode = code;
	            this.valid = false;
	        },
	        trim: function trim(str, char) {
	            if (!!str) {
	                return str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	            }
	            return str;
	        }
	    },
	    created: function created() {
	        this.init();
	    }
	};

/***/ })

/******/ })
});
;