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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette/scss/main.scss */ \"./src/palette/scss/main.scss\");\n/* harmony import */ var _palette_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _palette_js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette/js/main */ \"./src/palette/js/main.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/palette/js/canvas.js":
/*!**********************************!*\
  !*** ./src/palette/js/canvas.js ***!
  \**********************************/
/*! exports provided: canvas, ctx, paintCanvas, pushHotkeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintCanvas\", function() { return paintCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushHotkeys\", function() { return pushHotkeys; });\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/palette/js/controlls.js\");\n/* eslint-disable no-param-reassign */\n\nconst canvas = document.querySelector('canvas'); // get canvas\n\nconst ctx = canvas.getContext('2d');\ncanvas.width = 512;\ncanvas.height = 512;\nlet startCoordinates = [0, 0];\n\nfunction getCoordinates(event, flags, colorPicker) {\n  const x = Math.floor(event.offsetX / flags.pixelVal);\n  const y = Math.floor(event.offsetY / flags.pixelVal);\n  colorPicker[y][x] = flags.currColorVal;\n  return [x, y];\n}\n\nfunction draw(canv, startCoor, currentCoordinates, flags) {\n  let x0 = startCoor[0];\n  let y0 = startCoor[1];\n  const x = currentCoordinates[0];\n  const y = currentCoordinates[1];\n  const deltaX = Math.abs(x - x0);\n  const deltaY = Math.abs(y - y0);\n  const signX = x0 < x ? 1 : -1;\n  const signY = y0 < y ? 1 : -1;\n  let difference = deltaX - deltaY;\n\n  for (;;) {\n    // eslint-disable-next-line no-param-reassign\n    canv.fillStyle = flags.currColorVal;\n    ctx.fillRect(x0 * flags.pixelVal, y0 * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n    localStorage.setItem('dataUrl', canvas.toDataURL());\n    if (x0 === x && y0 === y) break;\n    const differenceX2 = difference * 2;\n\n    if (differenceX2 > -deltaY) {\n      difference -= deltaY;\n      x0 += signX;\n    }\n\n    if (differenceX2 < deltaX) {\n      difference += deltaX;\n      y0 += signY;\n    }\n  }\n}\n\nfunction takeColorWithColorPicker(e, flags, colorPicker) {\n  const x = Math.floor(e.offsetX / flags.pixelVal);\n  const y = Math.floor(e.offsetY / flags.pixelVal);\n  if (colorPicker[y][x] === flags.currColorVal) return;\n  flags.prevColorVal = flags.currColorVal;\n  flags.currColorVal = colorPicker[y][x];\n  Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"colorSwitchRemember\"])(flags);\n}\n\nfunction paintCanvas(flags, colorPicker) {\n  canvas.addEventListener('mousedown', e => {\n    if (flags.pencil) {\n      flags.isDrawing = true;\n      ctx.fillStyle = flags.currColorVal;\n      startCoordinates = getCoordinates(e, flags, colorPicker);\n      ctx.fillRect(startCoordinates[0] * flags.pixelVal, startCoordinates[1] * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n      canvas.addEventListener('mousemove', event => {\n        if (!flags.isDrawing) return;\n        const currentCoordinates = getCoordinates(event, flags, colorPicker);\n        draw(ctx, startCoordinates, currentCoordinates, flags);\n        startCoordinates = currentCoordinates; //\n      });\n      canvas.addEventListener('mouseup', () => {\n        flags.isDrawing = false;\n      });\n      canvas.addEventListener('mouseout', () => {\n        flags.isDrawing = false;\n      });\n    }\n\n    if (flags.chooseColor) {\n      takeColorWithColorPicker(e, flags, colorPicker);\n    }\n  });\n}\nfunction pushHotkeys(flags) {\n  document.addEventListener('keydown', event => {\n    if (event.code === 'KeyB') {\n      flags.fillBucket = true;\n      flags.pencil = false;\n      flags.transform = false;\n      flags.chooseColor = false;\n      flags.isDrawing = false;\n      ctx.fillStyle = flags.currColorVal;\n      console.log(flags.currColorVal);\n      ctx.fillRect(0, 0, 512, 512);\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.paintBucket', '.pencil', '.chooseColor');\n    }\n\n    if (event.code === 'KeyP') {\n      flags.fillBucket = false;\n      flags.pencil = true;\n      flags.transform = false;\n      flags.chooseColor = false;\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.pencil', '.chooseColor', '.paintBucket');\n    }\n\n    if (event.code === 'KeyC') {\n      flags.fillBucket = false;\n      flags.pencil = false;\n      flags.transform = false;\n      flags.chooseColor = true;\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.chooseColor', '.pencil', '.paintBucket');\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/palette/js/canvas.js?");

/***/ }),

/***/ "./src/palette/js/controlls.js":
/*!*************************************!*\
  !*** ./src/palette/js/controlls.js ***!
  \*************************************/
/*! exports provided: currColorDiv, prevColor, colorSwitchRemember, chooseNewColor, switchActiveOnControlls, setParamsOnControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currColorDiv\", function() { return currColorDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prevColor\", function() { return prevColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorSwitchRemember\", function() { return colorSwitchRemember; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseNewColor\", function() { return chooseNewColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchActiveOnControlls\", function() { return switchActiveOnControlls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsOnControlPanel\", function() { return setParamsOnControlPanel; });\n/* eslint-disable no-param-reassign */\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst currColorLabel = document.getElementById('currColorLabel');\nfunction colorSwitchRemember(flags) {\n  currColorDiv.style.backgroundColor = flags.currColorVal;\n  prevColor.style.backgroundColor = flags.prevColorVal;\n}\nfunction chooseNewColor(flags, ctx) {\n  currColorLabel.addEventListener('change', event => {\n    flags.prevColorVal = flags.currColorVal;\n    flags.currColorVal = event.target.value;\n    colorSwitchRemember(flags);\n    ctx.fillStyle = flags.currColorVal;\n  });\n}\nfunction switchActiveOnControlls(activeTool, unactiveTool1, unactiveTool2) {\n  document.querySelector(`div ${activeTool}`).classList.add('active');\n\n  if (document.querySelector(`div ${unactiveTool1}`).classList.contains('active')) {\n    document.querySelector(`div ${unactiveTool1}`).classList.remove('active');\n  }\n\n  if (document.querySelector(`div ${unactiveTool2}`).classList.contains('active')) {\n    document.querySelector(`div ${unactiveTool2}`).classList.remove('active');\n  }\n}\nfunction setParamsOnControlPanel(flags, ctx, canvas, colorPicker) {\n  document.querySelector('.paint-controls').addEventListener('click', event => {\n    if (event.target.classList.contains('red')) {\n      if (flags.currColorVal !== '#f74141') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#f74141';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('blue')) {\n      if (flags.currColorVal !== '#00bcd4') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#00bcd4';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('prev')) {\n      event.preventDefault();\n\n      if (flags.currColorVal !== flags.prevColorVal) {\n        flags.tempColorVal = flags.currColorVal;\n        flags.currColorVal = flags.prevColorVal;\n        flags.prevColorVal = flags.tempColorVal;\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('paintBucket')) {\n      flags.paintBucket = true;\n      flags.chooseColor = false;\n      flags.pencil = false;\n      flags.transform = false;\n      ctx.fillStyle = flags.currColorVal;\n      ctx.fillRect(0, 0, 512, 512);\n      localStorage.setItem('dataUrl', canvas.toDataURL());\n      switchActiveOnControlls('.paintBucket', '.pencil', '.chooseColor');\n\n      for (let i = 0; i < colorPicker.length; i += 1) {\n        for (let j = 0; j < colorPicker[i].length; j += 1) {\n          colorPicker[i][j] = flags.currColorVal;\n        }\n      }\n    }\n\n    if (event.target.classList.contains('chooseColor')) {\n      flags.paintBucket = false;\n      flags.chooseColor = true;\n      flags.pencil = false;\n      flags.transform = false;\n      switchActiveOnControlls('.chooseColor', '.pencil', '.paintBucket');\n    }\n\n    if (event.target.classList.contains('pencil')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      switchActiveOnControlls('.pencil', '.chooseColor', '.paintBucket');\n    }\n\n    if (event.target.classList.contains('transform')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      switchActiveOnControlls('.pencil', '.chooseColor', '.paintBucket');\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/palette/js/controlls.js?");

/***/ }),

/***/ "./src/palette/js/main.js":
/*!********************************!*\
  !*** ./src/palette/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/palette/js/controlls.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/palette/js/canvas.js\");\n\n\nconst img = new Image();\nconst flags = {\n  paintBucket: false,\n  chooseColor: false,\n  pencil: true,\n  transform: false,\n  pixelVal: 4,\n  isDrawing: false,\n  currColorVal: '#00ff00',\n  prevColorVal: '#ffeb3b',\n  tempColorVal: '#ffffff'\n};\nconst colorPicker = Array(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width / flags.pixelVal).fill(Array(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width / flags.pixelVal).fill('#ffffff'));\nconsole.log(colorPicker);\nlet tempColorArray;\nlet tempCurrColor;\nlet tempPrevColor; // MEDIA QUERY SIZE\n\n(function canvasSize() {\n  if (window.innerWidth < 820) {\n    _canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width = 256;\n    _canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height = 256;\n    flags.pixelVal = 64;\n  }\n})();\n\nwindow.onload = () => {\n  if (localStorage.getItem('dataUrl')) {\n    img.src = localStorage.getItem('dataUrl');\n\n    img.onload = () => {\n      _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].drawImage(img, 0, 0, _canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width, _canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height);\n    };\n  }\n\n  tempColorArray = JSON.parse(localStorage.getItem('colorsArray'));\n  tempCurrColor = localStorage.getItem('currColorVal');\n  tempPrevColor = localStorage.getItem('prevColorVal'); // REWRITE DEFAULT ARRAY IF LOCALSTORAGE CONTAINS TEMPARRAY\n\n  (function setRememberedColorInColorpicker() {\n    if (localStorage.getItem('colorsArray') === null) return;\n\n    for (let i = 0; i < colorPicker.length; i += 1) {\n      for (let j = 0; j < colorPicker[i].length; j += 1) {\n        colorPicker[i][j] = tempColorArray[i][j];\n      }\n    }\n  })(); // REWRITE DEFAULT COLORS ON CONTROLLS IF LOCALSTORAGE CONTAINS TEMPCOLORS\n\n\n  (function setRememberedColorInCurrColor() {\n    if (localStorage.getItem('currColorVal') === null) return;\n    flags.currColorVal = `${tempCurrColor}`;\n    _controlls__WEBPACK_IMPORTED_MODULE_0__[\"currColorDiv\"].style.backgroundColor = flags.currColorVal;\n  })();\n\n  (function setRememberedColorInPrevColor() {\n    if (localStorage.getItem('prevColorVal') === null) return;\n    flags.prevColorVal = `${tempPrevColor}`;\n    _controlls__WEBPACK_IMPORTED_MODULE_0__[\"prevColor\"].style.backgroundColor = flags.prevColorVal;\n  })();\n};\n\n(function addActiveClass() {\n  document.querySelector('div .pencil').classList.add('active');\n})();\n\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"chooseNewColor\"])(flags, _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"]);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnControlPanel\"])(flags, _canvas__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"], _canvas__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"], colorPicker);\nObject(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"paintCanvas\"])(flags, colorPicker);\nObject(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"pushHotkeys\"])(flags);\n\nwindow.onbeforeunload = () => {\n  localStorage.setItem('colorsArray', JSON.stringify(colorPicker));\n  localStorage.setItem('currColorVal', flags.currColorVal);\n  localStorage.setItem('prevColorVal', flags.prevColorVal);\n};\n\n//# sourceURL=webpack:///./src/palette/js/main.js?");

/***/ }),

/***/ "./src/palette/scss/main.scss":
/*!************************************!*\
  !*** ./src/palette/scss/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/palette/scss/main.scss?");

/***/ })

/******/ });