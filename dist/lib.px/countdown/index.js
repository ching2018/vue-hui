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
	exports.CountDown = undefined;

	var _countdown = __webpack_require__(157);

	var _countdown2 = _interopRequireDefault(_countdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CountDown = _countdown2.default;

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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(228),
	  /* template */
	  __webpack_require__(202),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\Project\\hui\\src\\components\\countdown\\src\\countdown.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] countdown.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-eae25b0a", Component.options)
	  } else {
	    hotAPI.reload("data-v-eae25b0a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.str)
	    }
	  }), _vm._v(" "), (_vm.showTpl) ? _c('span', {
	    ref: "tpl"
	  }, [_vm._t("default")], 2) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-eae25b0a", module.exports)
	  }
	}

/***/ }),

/***/ 228:
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

	exports.default = {
	    name: 'hui-countdown',
	    data: function data() {
	        return {
	            str: '',
	            timer: null,
	            tempFormat: '',
	            showTpl: true
	        };
	    },

	    props: {
	        time: {
	            type: [String, Number]
	        },
	        format: {
	            type: String,
	            default: '{%d}天{%h}时{%m}分{%s}秒'
	        },
	        timetype: {
	            validator: function validator(value) {
	                return ['datetime', 'second'].indexOf(value) > -1;
	            },

	            default: 'datetime'
	        },
	        callback: {
	            type: Function
	        },
	        doneText: {
	            type: String,
	            default: '已结束'
	        }
	    },
	    watch: {
	        time: function time(val) {
	            val && this.run();
	        }
	    },
	    methods: {
	        run: function run() {
	            if (!this.time) return;

	            if (this.timetype == 'second') {
	                this.lastTime = Math.floor(new Date() / 1000) + ~~this.time;
	            } else {
	                this.lastTime = Math.floor(new Date(this.time).getTime() / 1000);
	            }

	            this.doRun();

	            this.timer = setInterval(this.doRun, 1000);
	        },
	        doRun: function doRun() {
	            var leftTime = this.lastTime - Math.floor(new Date().getTime() / 1000);

	            if (leftTime > 0) {
	                this.str = this.timestampTotime(leftTime);
	            } else {
	                typeof this.callback == 'function' && this.callback();
	                this.str = this.doneText;
	                clearInterval(this.timer);
	            }
	        },
	        timestampTotime: function timestampTotime(time) {
	            var format = this.tempFormat;
	            var t = {};

	            t.s = time % 60;
	            time = Math.floor(time / 60);
	            t.m = time % 60;
	            time = Math.floor(time / 60);
	            t.h = time % 24;
	            t.d = Math.floor(time / 24);

	            var ment = function ment(a) {
	                if (a <= 0) return '00';
	                return a < 10 ? '0' + a : a;
	            };

	            var arr = ['d', 'h', 'm', 's'];

	            arr.forEach(function (val) {
	                var day = ment(t[val]).toString().split('');

	                format = format.replace('{%' + val + '}', ment(t[val]));
	                format = format.replace('{%' + val + '0}', ~~day[0] != 0 ? day[0] : '');
	                format = format.replace('{%' + val + '1}', ~~day[day.length - 2]);
	                format = format.replace('{%' + val + '2}', ~~day[day.length - 1]);
	            });

	            return format;
	        }
	    },
	    mounted: function mounted() {
	        var _this = this;

	        this.$nextTick(function () {
	            _this.tempFormat = !!_this.$slots.default ? _this.$refs.tpl.innerHTML : _this.format;
	            _this.showTpl = false;
	            _this.run();
	        });
	    },
	    destroyed: function destroyed() {
	        clearInterval(this.timer);
	    }
	};

/***/ })

/******/ })
});
;