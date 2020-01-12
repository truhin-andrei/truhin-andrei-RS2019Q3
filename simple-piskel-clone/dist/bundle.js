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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(2);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(4);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(6);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(8);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(12);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(14);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(0);
            var content = __webpack_require__(16);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(1);

// EXTERNAL MODULE: ./src/screens/header/style.scss
var header_style = __webpack_require__(3);

// EXTERNAL MODULE: ./src/screens/canvas/canvas.scss
var canvas = __webpack_require__(5);

// EXTERNAL MODULE: ./src/screens/tools/tools.scss
var tools = __webpack_require__(7);

// EXTERNAL MODULE: ./src/screens/frames/frames.scss
var frames_frames = __webpack_require__(9);

// EXTERNAL MODULE: ./src/screens/preview/preview.scss
var preview = __webpack_require__(11);

// EXTERNAL MODULE: ./src/screens/downloadImg/downloadImg.scss
var downloadImg = __webpack_require__(13);

// EXTERNAL MODULE: ./src/screens/canvasSize/canvasSize.scss
var canvasSize_canvasSize = __webpack_require__(15);

// CONCATENATED MODULE: ./src/screens/canvas/canvas.js
const canvas_canvas = document.getElementById('canvas');
const context = canvas_canvas.getContext('2d'); // saving canvas

let canvas_data = localStorage.getItem('image');

function saveImage() {
  canvas_data = canvas_canvas.toDataURL();
  localStorage.setItem('image', canvas_data);
}

canvas_canvas.addEventListener('mouseleave', saveImage);
// CONCATENATED MODULE: ./src/components/init/init.js

const eventClick = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true
});

function madeToolActive(tool) {
  const activeTool = document.getElementById(tool);
  activeTool.dispatchEvent(eventClick);
  localStorage.setItem('tool', tool);
}

function restoreImage() {
  const img = new Image();
  img.src = localStorage.getItem('image');

  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
} // предустановка сохранёных значений после перезагрузки


if (localStorage.getItem('tool')) {
  madeToolActive(localStorage.getItem('tool'));
} else {
  madeToolActive('pencil');
}

if (localStorage.getItem('color')) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('prevColor'));
  document.body.style.setProperty('--color', localStorage.getItem('color'));
}

if (localStorage.getItem('image')) {
  restoreImage();
}
// CONCATENATED MODULE: ./src/screens/colorPanel/colorPanel.js
const colorSelector = document.getElementById('choseColor');
const sample = document.getElementById('sample');

if (!localStorage.getItem('color')) {
  localStorage.setItem('color', document.body.style.getPropertyValue('--color'));
}

let color = localStorage.getItem('color') || 'black';
function swapColor(event, newColor = sample.style.background) {
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('prevColor', color);
  color = newColor;
  document.body.style.setProperty('--color', color);
  localStorage.setItem('color', color);
}
function colorSwitch(event) {
  if (event.target.id === 'red') {
    swapColor(null, '#F74141');
  } else if (event.target.id === 'blue') {
    swapColor(null, '#41B6F7');
  } else if (event.target.id === 'prevColor') {
    swapColor(null, localStorage.getItem('prevColor'));
  }
} // выбор цвета

colorSelector.addEventListener('input', event => {
  localStorage.setItem('prevColor', localStorage.getItem('color'));
  document.body.style.setProperty('--prevColor', localStorage.getItem('color'));
  localStorage.setItem('color', event.srcElement.value);
  document.body.style.setProperty('--color', event.srcElement.value);
  color = localStorage.getItem('color');
});
// CONCATENATED MODULE: ./src/screens/tools/picker/picker.js

const picker_sample = document.getElementById('sample');
function picker(event) {
  const sampleData = context.getImageData(event.layerX, event.layerY, 1, 1);
  const sampleColorData = sampleData.data;
  const sampleColor = `rgba(${sampleColorData[0]},${sampleColorData[1]},${sampleColorData[2]},${sampleColorData[3]})`;
  picker_sample.style.background = sampleColor;
}
// CONCATENATED MODULE: ./src/screens/tools/bucket/bucket.js

function bucket() {
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(0, 0, 512, 512);
}
// CONCATENATED MODULE: ./src/screens/tools/pencil/pencil.js

const pencilSize = document.getElementById('pencilSize');

function getPencilSize() {
  return pencilSize.value;
}

function draw(event) {
  let x = event.layerX;
  let y = event.layerY;
  const canvasSize = localStorage.getItem('canvasSize');
  const realCanvasSize = 512;
  const canvasRatio = realCanvasSize / canvasSize;
  x = Math.ceil(x / canvasRatio) * canvasRatio - canvasRatio;
  y = Math.ceil(y / canvasRatio) * canvasRatio - canvasRatio;
  context.fillStyle = localStorage.getItem('color');
  context.fillRect(x, y, canvasRatio * getPencilSize(), canvasRatio * getPencilSize());
}

function pencilDown() {
  canvas_canvas.addEventListener('mousemove', draw);
}
function pencilUp() {
  canvas_canvas.removeEventListener('mousemove', draw);
}
// CONCATENATED MODULE: ./src/screens/tools/eraser/eraser.js

const eraserSize = document.getElementById('eraserSize');

function getEraserSize() {
  return eraserSize.value;
}

function erase(event) {
  let x = event.layerX;
  let y = event.layerY;
  const canvasSize = localStorage.getItem('canvasSize');
  const canvasRatio = canvas_canvas.width / canvasSize;
  x = Math.ceil(x / canvasRatio) * canvasRatio - canvasRatio;
  y = Math.ceil(y / canvasRatio) * canvasRatio - canvasRatio;
  context.clearRect(x, y, canvasRatio * getEraserSize(), canvasRatio * getEraserSize());
}

function eraserDown() {
  canvas_canvas.addEventListener('mousemove', erase);
}
function eraserUp() {
  canvas_canvas.removeEventListener('mousemove', erase);
}
// CONCATENATED MODULE: ./src/screens/tools/tools.js






const panelColor = document.getElementById('panelColor');
const panelTools = document.getElementById('tools');

function tools_tools(event) {
  if (event.target.id !== 'pencilSize' && event.target.id !== 'eraserSize') {
    if (localStorage.getItem('tool')) {
      document.getElementById(localStorage.getItem('tool')).classList.remove('panel-tools--active');

      if (localStorage.getItem('tool') === 'bucket') {
        canvas_canvas.removeEventListener('click', bucket);
      } else if (localStorage.getItem('tool') === 'picker') {
        canvas_canvas.removeEventListener('mousemove', picker);
        canvas_canvas.removeEventListener('click', swapColor);
      } else if (localStorage.getItem('tool') === 'pencil') {
        canvas_canvas.removeEventListener('mousedown', pencilDown);
        canvas_canvas.removeEventListener('mouseup', pencilUp);
      } else if (localStorage.getItem('tool') === 'eraser') {
        canvas_canvas.removeEventListener('mousedown', eraserDown);
        canvas_canvas.removeEventListener('mouseup', eraserUp);
      }
    }

    localStorage.setItem('tool', event.target.id);
    event.target.classList.add('panel-tools--active');

    if (localStorage.getItem('tool') === 'bucket') {
      canvas_canvas.addEventListener('click', bucket);
    } else if (localStorage.getItem('tool') === 'picker') {
      canvas_canvas.addEventListener('mousemove', picker);
      canvas_canvas.addEventListener('click', swapColor);
    } else if (localStorage.getItem('tool') === 'pencil') {
      canvas_canvas.addEventListener('mousedown', pencilDown);
      canvas_canvas.addEventListener('mouseup', pencilUp);
    } else if (localStorage.getItem('tool') === 'eraser') {
      canvas_canvas.addEventListener('mousedown', eraserDown);
      canvas_canvas.addEventListener('mouseup', eraserUp);
    }
  }
}

panelTools.addEventListener('click', tools_tools);
panelColor.addEventListener('click', colorSwitch);
// CONCATENATED MODULE: ./src/screens/frames/frames.js

const framesList = document.getElementById('framesList');
const addFrameBtn = document.getElementById('addFrameBtn');

function addFrame() {
  const img = new Image();
  img.src = canvas_canvas.toDataURL();
  img.setAttribute('width', localStorage.getItem('canvasSize'));
  img.setAttribute('height', localStorage.getItem('canvasSize'));
  const btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('deleteBtn');
  const div = document.createElement('div');
  div.classList.add('frames__frame');
  div.append(img);
  div.append(btn);
  framesList.insertAdjacentElement('beforeend', div);
}

function removeFrame(event) {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentNode.remove();
  }
}

addFrameBtn.addEventListener('click', addFrame);
framesList.addEventListener('click', removeFrame);
// CONCATENATED MODULE: ./src/screens/preview/fps.js
const previewFps = document.getElementById('previewFps');
const fpsLabel = document.getElementById('fpsLabel');

function fpsChange(event) {
  fpsLabel.innerText = `${event.target.value}fps`;
}

function getFPS() {
  return previewFps.value;
}
previewFps.addEventListener('change', fpsChange);
// CONCATENATED MODULE: ./src/screens/preview/preview.js

const previewScreen = document.getElementById('previewScreen');
const contextPreview = previewScreen.getContext('2d');
const previewBtn = document.getElementById('previewBtn');
let numFrame = 0;
let fps = getFPS();
let requestID;

function clearCanvas(canvas) {
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function preview_draw(frame) {
  if (numFrame === 0) {
    clearCanvas(previewScreen);
  }

  contextPreview.drawImage(frame.firstChild, 0, 0, frame.firstChild.width, frame.firstChild.height);
  numFrame += 1;
}

function getFrames() {
  return document.querySelectorAll('.frames__frame');
}

let fpsInterval;
let now;
let then;
let elapsed;

function animate() {
  fps = getFPS();
  fpsInterval = 1000 / fps;
  requestID = requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - elapsed % fpsInterval;
    const frames = getFrames();

    if (frames.length - 1 < numFrame) {
      numFrame = 0;
    }

    preview_draw(frames[numFrame]);
  }
}

function startAnimating() {
  if (requestID) {
    cancelAnimationFrame(requestID);
    previewBtn.innerText = 'Start';
    requestID = null;
    return;
  }

  if (getFrames().length) {
    previewBtn.innerText = 'Stop';
    then = Date.now(); // startTime = then;

    animate();
  }
}

previewBtn.addEventListener('click', startAnimating);
// CONCATENATED MODULE: ./src/screens/downloadImg/downloadImg.js

const downloadBtn = document.getElementById('downloadBtn');

function getScale(w, h) {
  return w > h ? w / canvas_canvas.width : h / canvas_canvas.height;
}

function downloadImg_downloadImg(e) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();

    img.onload = function () {
      const scale = getScale(img.width, img.height);
      const dw = img.width / scale;
      const dh = img.height / scale;
      context.clearRect(0, 0, canvas_canvas.width, canvas_canvas.height);
      context.drawImage(img, 0, 0, dw, dh);
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(e.target.files[0]);
}

downloadBtn.addEventListener('change', downloadImg_downloadImg);
// CONCATENATED MODULE: ./src/screens/canvasSize/canvasSize.js

const canvasSize_canvasSize_canvasSize = document.getElementById('canvasSize');

if (!localStorage.getItem('canvasSize')) {
  localStorage.setItem('canvasSize', canvasSize_canvasSize_canvasSize.value);
}

function canvasSize_saveImage() {
  const data = canvas_canvas.toDataURL();
  localStorage.setItem('image', data);
}

function canvasSize_restoreImage(event) {
  const img = new Image();
  img.src = localStorage.getItem('image');
  const newSide = canvas_canvas.width / (event.target.value / localStorage.getItem('canvasSize'));

  img.onload = function () {
    context.drawImage(img, 0, 0, canvas_canvas.width, canvas_canvas.height, 0, 0, newSide, newSide);
  };
}

function setCanvasSize(event) {
  canvasSize_saveImage();
  context.clearRect(0, 0, canvas_canvas.width, canvas_canvas.height);
  canvasSize_restoreImage(event);
  localStorage.setItem('canvasSize', event.target.value);
}

canvasSize_canvasSize_canvasSize.addEventListener('change', setCanvasSize);
const optionItem = canvasSize_canvasSize_canvasSize.getElementsByTagName('option');

if (localStorage.getItem('canvasSize')) {
  for (let i = 0; i < optionItem.length; i += 1) {
    if (optionItem[i].value === localStorage.getItem('canvasSize')) optionItem[i].selected = true;
  }
} else {
  for (let i = 0; i < optionItem.length; i += 1) {
    if (optionItem[i].value === '128') optionItem[i].selected = true;
  }
}
// CONCATENATED MODULE: ./src/index.js


















/***/ })
/******/ ]);