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

/***/ "./src/palette/js/controlls.js":
/*!*************************************!*\
  !*** ./src/palette/js/controlls.js ***!
  \*************************************/
/*! exports provided: colorSwitchRemember, chooseNewColor, setParamsOnControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorSwitchRemember\", function() { return colorSwitchRemember; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseNewColor\", function() { return chooseNewColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsOnControlPanel\", function() { return setParamsOnControlPanel; });\n/* eslint-disable no-param-reassign */\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst currColorLabel = document.getElementById('currColorLabel');\nfunction colorSwitchRemember(flags) {\n  currColorDiv.style.backgroundColor = flags.currColorVal;\n  prevColor.style.backgroundColor = flags.prevColorVal; // localStorage.setItem('prevColor', `${flags.prevColorVal}`);\n  // localStorage.setItem('currColor', `${flags.currColorVal}`);\n} // export function setDefaultColors() {\n//   currColorDiv.style.backgroundColor = localStorage.getItem('flagsObj').currColorVal;\n//   prevColor.style.backgroundColor = localStorage.getItem('flagsObj').prevColorVal;\n//   currColorDiv.style.backgroundColor = localStorage.getItem('flagsObj').currColorVal;\n//   prevColor.style.backgroundColor = localStorage.getItem('flagsObj').prevColorVal;\n// }\n\nfunction chooseNewColor(flags, ctx) {\n  currColorLabel.addEventListener('change', event => {\n    flags.prevColorVal = flags.currColorVal;\n    flags.currColorVal = event.target.value;\n    colorSwitchRemember(flags);\n    ctx.fillStyle = flags.currColorVal; // console.log(flags);\n  });\n}\nfunction setParamsOnControlPanel(flags, ctx, canvas, colorPicker) {\n  document.querySelector('.paint-controls').addEventListener('click', event => {\n    if (event.target.classList.contains('red')) {\n      if (flags.currColorVal !== '#f74141') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#f74141';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal; // console.log(flags);\n      }\n    }\n\n    if (event.target.classList.contains('blue')) {\n      if (flags.currColorVal !== '#00bcd4') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#00bcd4';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal; // console.log(flags);\n      }\n    }\n\n    if (event.target.classList.contains('prev')) {\n      if (flags.currColorVal !== flags.prevColorVal) {\n        flags.tempColorVal = flags.currColorVal;\n        flags.currColorVal = flags.prevColorVal;\n        flags.prevColorVal = flags.tempColorVal;\n        colorSwitchRemember(flags); // ctx.fillStyle = flags.currColorVal;\n\n        console.log(flags.currColorVal);\n      }\n    }\n\n    if (event.target.classList.contains('paintBucket')) {\n      flags.paintBucket = true;\n      flags.chooseColor = false;\n      flags.pencil = false;\n      flags.transform = false;\n      ctx.fillStyle = flags.currColorVal;\n      ctx.fillRect(0, 0, 512, 512);\n      localStorage.setItem('dataUrl', canvas.toDataURL());\n      document.querySelector('div .paintBucket').classList.add('active');\n\n      if (document.querySelector('div .pencil').classList.contains('active')) {\n        document.querySelector('div .pencil').classList.remove('active');\n      }\n\n      if (document.querySelector('div .chooseColor').classList.contains('active')) {\n        document.querySelector('div .chooseColor').classList.remove('active');\n      }\n\n      for (let i = 0; i < colorPicker.length; i += 1) {\n        for (let j = 0; j < colorPicker[i].length; j += 1) {\n          colorPicker[i][j] = flags.currColorVal;\n        }\n      }\n\n      console.log(colorPicker);\n    }\n\n    if (event.target.classList.contains('chooseColor')) {\n      flags.paintBucket = false;\n      flags.chooseColor = true;\n      flags.pencil = false;\n      flags.transform = false;\n      document.querySelector('div .chooseColor').classList.add('active');\n\n      if (document.querySelector('div .pencil').classList.contains('active')) {\n        document.querySelector('div .pencil').classList.remove('active');\n      }\n\n      if (document.querySelector('div .paintBucket').classList.contains('active')) {\n        document.querySelector('div .paintBucket').classList.remove('active');\n      }\n    }\n\n    if (event.target.classList.contains('pencil')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      document.querySelector('div .pencil').classList.add('active');\n\n      if (document.querySelector('div .chooseColor').classList.contains('active')) {\n        document.querySelector('div .chooseColor').classList.remove('active');\n      }\n\n      if (document.querySelector('div .paintBucket').classList.contains('active')) {\n        document.querySelector('div .paintBucket').classList.remove('active');\n      }\n    }\n\n    if (event.target.classList.contains('transform')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      document.querySelector('div .pencil').classList.add('active');\n\n      if (document.querySelector('div .chooseColor').classList.contains('active')) {\n        document.querySelector('div .chooseColor').classList.remove('active');\n      }\n\n      if (document.querySelector('div .paintBucket').classList.contains('active')) {\n        document.querySelector('div .paintBucket').classList.remove('active');\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/palette/js/controlls.js?");

/***/ }),

/***/ "./src/palette/js/main.js":
/*!********************************!*\
  !*** ./src/palette/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/palette/js/controlls.js\");\n\nconst img = new Image();\nlet flags = {\n  paintBucket: false,\n  chooseColor: false,\n  pencil: true,\n  transform: false,\n  pixelVal: 128,\n  isDrawing: false,\n  currColorVal: '#00ff00',\n  prevColorVal: '#ffeb3b',\n  tempColorVal: '#ffffff'\n};\nconst colorPicker = [['#ffffff', '#ffffff', '#ffffff', '#ffffff'], ['#ffffff', '#ffffff', '#ffffff', '#ffffff'], ['#ffffff', '#ffffff', '#ffffff', '#ffffff'], ['#ffffff', '#ffffff', '#ffffff', '#ffffff']];\nconst canvas = document.querySelector('canvas'); // get canvas\n\nconst ctx = canvas.getContext('2d'); // add context\n\ncanvas.width = 512;\ncanvas.height = 512;\n\nwindow.onload = () => {\n  if (localStorage.getItem('flagsObj')) {\n    flags = JSON.parse(localStorage.getItem('flagsObj'));\n    console.log(flags);\n  }\n\n  if (localStorage.getItem('dataUrl')) {\n    img.src = localStorage.getItem('dataUrl');\n\n    img.onload = () => {\n      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\n    };\n  }\n}; // setDefaultColors();\n\n\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"chooseNewColor\"])(flags, ctx);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnControlPanel\"])(flags, ctx, canvas, colorPicker);\n\n(function addActiveClass() {\n  document.querySelector('div .pencil').classList.add('active');\n})(); // CANVAS CODE\n\n\nfunction draw(e) {\n  if (!flags.isDrawing) return;\n  const x = Math.floor(e.offsetX / flags.pixelVal);\n  const y = Math.floor(e.offsetY / flags.pixelVal);\n  ctx.fillStyle = flags.currColorVal;\n  ctx.fillRect(x * flags.pixelVal, y * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n  colorPicker[y][x] = flags.currColorVal;\n  ctx.fill();\n  localStorage.setItem('dataUrl', canvas.toDataURL());\n  console.log(colorPicker);\n}\n\nfunction takeColorWithColorPicker(e) {\n  const x = Math.floor(e.offsetX / flags.pixelVal);\n  const y = Math.floor(e.offsetY / flags.pixelVal);\n  if (colorPicker[y][x] === flags.currColorVal) return;\n  flags.prevColorVal = flags.currColorVal;\n  flags.currColorVal = colorPicker[y][x];\n  Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"colorSwitchRemember\"])(flags);\n}\n\ncanvas.addEventListener('mousedown', e => {\n  if (flags.pencil) {\n    flags.isDrawing = true;\n    draw(e);\n    canvas.addEventListener('mousemove', draw);\n    canvas.addEventListener('mouseup', () => {\n      flags.isDrawing = false;\n    });\n    canvas.addEventListener('mouseout', () => {\n      flags.isDrawing = false;\n    });\n  }\n\n  if (flags.chooseColor) {\n    takeColorWithColorPicker(e);\n  }\n});\n\nconst keydownEvent = event => {\n  if (event.code === 'KeyB') {\n    flags.fillBucket = true;\n    flags.pencil = false;\n    flags.transform = false;\n    flags.chooseColor = false;\n    flags.isDrawing = true;\n    ctx.fillStyle = flags.currentColor;\n    ctx.fillRect(0, 0, 512, 512);\n  }\n\n  if (event.code === 'KeyP') {\n    flags.fillBucket = false;\n    flags.pencil = true;\n    flags.transform = false;\n    flags.chooseColor = false;\n  }\n\n  if (event.code === 'KeyC') {\n    flags.fillBucket = false;\n    flags.pencil = false;\n    flags.transform = false;\n    flags.chooseColor = true;\n  }\n};\n\ndocument.addEventListener('keydown', keydownEvent); // window.onbeforeunload = () => {\n//   localStorage.setItem('flagsObj', JSON.stringify(flags));\n// };\n\n//# sourceURL=webpack:///./src/palette/js/main.js?");

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