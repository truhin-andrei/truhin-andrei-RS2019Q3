/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init.js */ \"./src/js/init.js\");\n\n//console.log('hi');\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/dateNow.js":
/*!***************************!*\
  !*** ./src/js/dateNow.js ***!
  \***************************/
/*! exports provided: DateNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateNow\", function() { return DateNow; });\nclass DateNow {\n  getDate() {\n    let now = new Date();\n    let now1 = new Date(now.getDay(), now.getDate(), now.getMonth());\n    let formatter = new Intl.DateTimeFormat(\"en\", {\n      weekday: \"short\",\n      year: \"numeric\",\n      month: \"long\",\n      day: \"numeric\",\n      hour: \"numeric\",\n      minute: \"numeric\"\n    });\n    return formatter.format(now);\n  }\n\n  render() {\n    const dateEl = document.getElementById('date');\n    dateEl.innerHTML = this.getDate();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/dateNow.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.js */ \"./src/js/location.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./src/js/map.js\");\n/* harmony import */ var _dateNow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateNow.js */ \"./src/js/dateNow.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.js */ \"./src/js/weather.js\");\n/* harmony import */ var _wallpaper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallpaper.js */ \"./src/js/wallpaper.js\");\n\n\n\n\n\n\nlet location = new _location_js__WEBPACK_IMPORTED_MODULE_0__[\"Location\"]();\nlet map = new _map_js__WEBPACK_IMPORTED_MODULE_1__[\"Map\"]();\nlet dateNow = new _dateNow_js__WEBPACK_IMPORTED_MODULE_2__[\"DateNow\"]();\nlet weather = new _weather_js__WEBPACK_IMPORTED_MODULE_3__[\"Weather\"]();\nlet wallpaper = new _wallpaper_js__WEBPACK_IMPORTED_MODULE_4__[\"Wallpaper\"]();\n\nasync function init() {\n  location.getPosition();\n  await location.getCity();\n  map.init(location);\n  await map.render();\n\n  dateNow.render();\n\n  weather.init(location);\n  await wallpaper.getWallpaper();\n  await weather.getWeather();\n  await weather.getForecast();\n}\n//location.getPosition();\ninit();\nsetTimeout(() => {}, 1);\n\n//console.log(location);\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Location\", function() { return Location; });\nclass Location {\n  constructor(latitude, longitude, city) {\n    this.latitude = latitude;\n    this.longitude = longitude;\n    this.city = city;\n  }\n\n  getPosition() {\n    let success = pos => {\n      let crd = pos.coords;\n      //console.log(this.latitude, 1);\n      this.latitude = crd.latitude;\n      this.longitude = crd.longitude;\n      //console.log(this.latitude, 2);\n      this.renderCoord();\n      this.getNameArea();\n      //console.log(this);\n    };\n    //console.dir(this);\n\n    function error(err) {\n      console.log('error of location');\n      console.warn(`ERROR(${err.code}): ${err.message}`);\n    }\n\n    // const options = {\n    //   enableHighAccuracy: true,\n    //   timeout: 5,\n    //   maximumAge: 0\n    // };\n\n    navigator.geolocation.getCurrentPosition(success, error);\n  }\n\n  getDeg(coord) {\n    return Math.trunc(coord);\n  }\n\n  getMinutes(coord) {\n    return Math.trunc((coord - this.getDeg(coord)) * 60);\n  }\n\n  renderCoord() {\n    const latitude = document.getElementById('latitude');\n    const longitude = document.getElementById('longitude');\n    latitude.innerHTML = `${this.getDeg(this.latitude)}&deg; ${this.getMinutes(this.latitude)}&prime;`;\n    longitude.innerHTML = `${this.getDeg(this.longitude)}&deg; ${this.getMinutes(this.longitude)}&prime;`;\n  }\n\n  renderCity(city) {\n    const cityEl = document.getElementById('city');\n    cityEl.innerText = city;\n  }\n\n  renderCountry(country) {\n    const countryEl = document.getElementById('country');\n    countryEl.innerText = country;\n  }\n\n  getNameArea() {\n\n    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${this.longitude},${this.latitude}&kind=locality&lang=${'en_RU'}&results=1`).then(response => response.json()).then(res => {\n      let city = res.response.GeoObjectCollection.featureMember[0].GeoObject.name;\n      let country = res.response.GeoObjectCollection.featureMember[0].GeoObject.description;\n      this.renderCity(city);\n      this.renderCountry(country);\n    });\n  }\n\n  async getCity() {\n    let request = await fetch('https://ipinfo.io?token=a4998744625b7b');\n    console.log(request, 23);\n    let response = await request.json();\n    console.log(response.city, 24);\n    this.city = response.city;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/location.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  // constructor(latitude, longitude){\n  //   this.latitude = latitude;\n  //   this.longitude = longitude;\n\n  // }\n  init(location) {\n    this.location = location;\n  }\n\n  async render() {\n    let init = () => {\n      let that = this;\n      //console.dir(this.location.latitude,1);\n      let myMap = new ymaps.Map(\"map\", {\n        center: [that.location.latitude, that.location.longitude],\n        zoom: 10\n\n      });\n      console.dir(this.location, 2);\n    };\n    try {\n      ymaps.ready(init);\n    } catch (err) {\n      console.log('error Map');\n      console.warn(`ERROR(${err.code}): ${err.message}`);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/wallpaper.js":
/*!*****************************!*\
  !*** ./src/js/wallpaper.js ***!
  \*****************************/
/*! exports provided: Wallpaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wallpaper\", function() { return Wallpaper; });\nclass Wallpaper {\n  async getWallpaper() {\n    //const request = search.value.split(' ').join(',');\n    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ae54ce17ef1d06ba9a9aeb7a6e1579f&tags=${'summer8'}&tag_mode=all&sort=relevance&per_page=1&content_type=1&format=json&nojsoncallback=1`;\n    let data;\n    try {\n      let response = await fetch(url);\n      data = await response.json();\n      console.log(data);\n      let photo = data.photos.photo[0];\n      let t_url = \"http://farm\" + photo.farm + \".static.flickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"t.jpg\";\n\n      let p_url = \"http://www.flickr.com/photos/\" + photo.owner + \"/\" + photo.id;\n      this.render(p_url);\n    } catch (e) {\n      throw new Error(e);\n    }\n  }\n\n  render(img) {\n    const container = document.querySelector('.container');\n    container.style.backgroundImage = `url(${img}) `;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/wallpaper.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Weather\", function() { return Weather; });\nclass Weather {\n\n  init(location) {\n    this.location = location;\n  }\n\n  async getWeather() {\n    try {\n      let request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location.city}&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);\n      let response = await request.json();\n      let temp = this.convertKtoC(response.main.temp);\n      let cond = response.weather[0].description;\n      let pres = this.converthPaToMM(response.main.pressure);\n      let windValue = response.wind.speed;\n      let humid = response.main.humidity;\n\n      this.render(temp, cond, pres, windValue, humid);\n      this.getIcon(response.weather[0].icon);\n    } catch (err) {\n      console.log('error of getWeather');\n    }\n  }\n\n  async getForecast() {\n    try {\n\n      let request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.location.city}&cnt=26&lang=${'en'}&APPID=529de013e9d3c2c6528f81831ab3aa2f`);\n      let response = await request.json();\n\n      this.renderForecast(response.list);\n    } catch (err) {\n      console.log('error of forecast');\n      console.warn(`ERROR(${err.code}): ${err.message}`);\n    }\n  }\n\n  async getIcon(iconId, forecastNum = false) {\n    try {\n      let request = await fetch(`http://openweathermap.org/img/wn/${iconId}@2x.png`);\n      let responseIcon = await request.blob();\n      if (forecastNum) {\n        this.renderForecastIcon(responseIcon, forecastNum - 1);\n      } else {\n        this.renderIcon(responseIcon);\n      }\n    } catch (err) {\n      console.log('error of geticon');\n      console.warn(`ERROR(${err.code}): ${err.message}`);\n    }\n  }\n\n  renderIcon(responseIcon) {\n    const mainDeg = document.querySelector('.forecast');\n\n    let img = document.createElement('img');\n    img.classList.add('mainDegImg');\n    mainDeg.append(img);\n    img.src = URL.createObjectURL(responseIcon);\n  }\n\n  renderForecastIcon(responseIcon, forecastNum) {\n    const forecast = document.querySelectorAll('.next-forecast__day');\n    console.log(forecast[forecastNum]);\n\n    let img = document.createElement('img');\n    img.classList.add('forecastImg');\n    forecast[forecastNum].append(img);\n    img.src = URL.createObjectURL(responseIcon);\n  }\n\n  renderForecast(tempArr) {\n    const forecastEl = document.getElementsByClassName('next-forecast__degr');\n\n    for (let i = 0; i < 3; i++) {\n      forecastEl[i].innerHTML = this.convertKtoC(tempArr[(i + 1) * 8].main.temp);\n      this.getIcon(tempArr[(i + 1) * 8].weather[0].icon, i + 1);\n    }\n  }\n\n  render(temp, cond, pres, windValue, humid) {\n    const degToday = document.getElementById('degToday');\n    const cast = document.getElementById('cast');\n    const pressure = document.getElementById('pressure');\n    const wind = document.getElementById('wind');\n    const humidity = document.getElementById('humidity');\n\n    degToday.innerText = temp;\n    cast.innerText = cond;\n    pressure.innerText = pres;\n    wind.innerText = windValue;\n    humidity.innerText = humid;\n  }\n\n  convertKtoC(k) {\n    return Math.round(k - 273.15);\n  }\n\n  convertKtoF(k) {\n    return 9 / 5 * (convertKtoC(k) + 32);\n  }\n\n  converthPaToMM(hPa) {\n    return Math.round(hPa * 0.75006375541921);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/weather.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });