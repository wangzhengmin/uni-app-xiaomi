(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {return;}var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** D:/study/uniapp/xiaomi/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26920200402001","_inBundle":false,"_integrity":"sha512-Mdhd/IRuUMHWPj3TtWrBb0kghRBA0YiO2L2THMFvhCTfQDSoSq1vwOdAx5n/8fIORAvG0uVQoYl73xeVFZML5A==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26920200402001.tgz","_shasum":"5f66f5dc252ac00c6064857dee8251ee51aa2391","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bfdbb7b3000599679ef8cb29a969e6bd447b00c7","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26920200402001"};

/***/ }),
/* 7 */
/*!**********************************************************!*\
  !*** D:/study/uniapp/xiaomi/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/index/index": { "navigationBarTitleText": "uni-app" }, "pages/sort/sort": { "navigationBarTitleText": "分类" }, "pages/star/star": {}, "pages/user/user": {}, "pages/cart/cart": {}, "pages/productDetails/productDetails": {}, "pages/login/login": {}, "pages/search/search": {}, "pages/searchResult/searchResult": {}, "pages/order/order": { "titleNView": false } }, "globalStyle": { "navigationBarTextStyle": "black", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" } };exports.default = _default;

/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** D:/study/uniapp/xiaomi/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "" };exports.default = _default;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!********************************************************!*\
  !*** D:/study/uniapp/xiaomi/static/fonts/iconfont.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!*********************************************!*\
  !*** D:/study/uniapp/xiaomi/store/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 17));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));


var _cart = _interopRequireDefault(__webpack_require__(/*! ./modules/cart.js */ 18));
var _product = _interopRequireDefault(__webpack_require__(/*! ./modules/product.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  modules: {
    cart: _cart.default,
    product: _product.default } });exports.default = _default;

/***/ }),
/* 17 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** D:/study/uniapp/xiaomi/store/modules/cart.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}var cart = [
{
  bid: 1, business: '法国banrock红酒庄', spec: '巴诺斯时光之约气泡酒 试饮装50ml', num: 1, img: '/static/guess_product.jpg', price: 25.00, chioced: false, list: [
  {
    pid: 1,
    name: '加价购服务1',
    spec: '加价购服务规格1',
    num: 1,
    img: '/static/guess_product.jpg',
    price: 25.00,
    chioced: false },

  {
    pid: 2,
    name: '加价购服务2',
    spec: '加价购服务规格2',
    num: 1,
    img: '/static/guess_product.jpg',
    price: 88.00,
    chioced: false }] },



{
  bid: 2, business: '法国banrock红酒庄', spec: '巴诺斯时光之约气泡酒 试饮装50ml', num: 1, img: '/static/guess_product.jpg', price: 25.00, chioced: false }];



var mutations = {
  ADD_NUMBER: function ADD_NUMBER(state, payload) {//增加选购数量
    state[payload.index_one].num += 1;
  },
  MINUS_NUMBER: function MINUS_NUMBER(state, payload) {//减少选购数量
    if (state[payload.index_one].num > 1)
    state[payload.index_one].num -= 1;
  },
  CHIOCE_PRODUCT: function CHIOCE_PRODUCT(state, payload) {// 改变商品的选中与否
    state[payload.index_one].chioced = !state[payload.index_one].chioced;
    if (!state[payload.index_one].chioced) {
      state[payload.index_one].list.map(function (v) {return v.chioced = false;});
    }
  },
  CHIOCE_ALL: function CHIOCE_ALL(state, payload) {// 改变全部商品的选中与否
    var arr = state.map(function (v) {
      v.chioced = payload.bol;
      return v;
    });
    state = arr;
  },
  DELETE_PRODUCT: function DELETE_PRODUCT(state, payload) {//删除商品
    state.shift(1, payload.index_one);
  },
  CHIOCE_SERVER: function CHIOCE_SERVER(state, payload) {//加价购
    state[payload.index_one].list[payload.index_two].chioced = true;
  },
  DELETE_SERVER: function DELETE_SERVER(state, payload) {//删除服务
    state[payload.index_one].list[payload.index_two].chioced = false;
  } };


var actions = {
  addNumber: function addNumber(context, number) {
    context.commit('ADD_NUMBER', number);
  } };


var getters = {
  total: function total(state) {// 总计
    var sum = 0;
    state.forEach(function (v) {
      if (v.chioced) {
        sum = (sum * 100 + v.price * 100 * v.num) / 100;
        if (v.list) {
          v.list.forEach(function (v2) {
            if (v2.chioced)
            sum = (sum * 100 + v2.price * 100 * v2.num) / 100;
          });
        }
      }
    });
    return sum;
  },
  chioce_all: function chioce_all(state) {// 是否选中全部商品
    var bol = state.every(function (v) {
      return v.chioced;
    });
    return bol;
  },
  chioced_product: function chioced_product(state) {// 选中商品
    var chioced = [];
    state.forEach(function (v) {
      var list = v.list.filter(function (v2) {
        return v2.chioced;
      });
      chioced = [].concat(_toConsumableArray(chioced), _toConsumableArray(list));
    });
    return chioced;
  } };var _default =




{
  namespaced: true,
  state: cart,
  getters: getters,
  mutations: mutations,
  actions: actions };exports.default = _default;

/***/ }),
/* 19 */
/*!*******************************************************!*\
  !*** D:/study/uniapp/xiaomi/store/modules/product.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var product = [
{ ss: 5 }];

var getters = {};


var mutations = {};


var actions = {};var _default =



{
  namespaced: true,
  state: product,
  getters: getters,
  mutations: mutations,
  actions: actions };exports.default = _default;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!****************************************************!*\
  !*** D:/study/uniapp/xiaomi/static/sort_item.webp ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map