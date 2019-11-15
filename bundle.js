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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: paintCanvas, pushHotkeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintCanvas\", function() { return paintCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushHotkeys\", function() { return pushHotkeys; });\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/js/controlls.js\");\n/* eslint-disable no-param-reassign */\n\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = 512;\ncanvas.height = 512;\nlet startCoordinates = [0, 0];\n\nfunction getCoordinates(event, flags) {\n  const x = Math.floor(event.offsetX / flags.pixelVal);\n  const y = Math.floor(event.offsetY / flags.pixelVal);\n  return [x, y];\n}\n\nfunction draw(canv, startCoor, currentCoordinates, flags) {\n  let x0 = startCoor[0];\n  let y0 = startCoor[1];\n  const x = currentCoordinates[0];\n  const y = currentCoordinates[1];\n  const deltaX = Math.abs(x - x0);\n  const deltaY = Math.abs(y - y0);\n  const signX = x0 < x ? 1 : -1;\n  const signY = y0 < y ? 1 : -1;\n  let difference = deltaX - deltaY;\n\n  for (;;) {\n    // eslint-disable-next-line no-param-reassign\n    canv.fillStyle = flags.currColorVal;\n    ctx.fillRect(x0 * flags.pixelVal, y0 * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n    localStorage.setItem('dataUrl', canvas.toDataURL());\n    if (x0 === x && y0 === y) break;\n    const differenceX2 = difference * 2;\n\n    if (differenceX2 > -deltaY) {\n      difference -= deltaY;\n      x0 += signX;\n    }\n\n    if (differenceX2 < deltaX) {\n      difference += deltaX;\n      y0 += signY;\n    }\n  }\n} // function takeColorWithColorPicker(event, flags, colorPicker) {\n//   const x = Math.floor(event.offsetX / flags.pixelVal);\n//   const y = Math.floor(event.offsetY / flags.pixelVal);\n//   if (colorPicker[y][x] === flags.currColorVal) return;\n//   flags.prevColorVal = flags.currColorVal;\n//   flags.currColorVal = colorPicker[y][x];\n//   colorSwitchRemember(flags);\n// }\n\n\nfunction paintCanvas(flags) {\n  canvas.addEventListener('mousedown', event => {\n    if (flags.pencil) {\n      flags.isDrawing = true;\n      ctx.fillStyle = flags.currColorVal;\n      startCoordinates = getCoordinates(event, flags);\n      ctx.fillRect(startCoordinates[0] * flags.pixelVal, startCoordinates[1] * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n      canvas.addEventListener('mousemove', eventMove => {\n        if (!flags.isDrawing) return;\n        const currentCoordinates = getCoordinates(eventMove, flags);\n        draw(ctx, startCoordinates, currentCoordinates, flags);\n        startCoordinates = currentCoordinates;\n      });\n      canvas.addEventListener('mouseup', () => {\n        flags.isDrawing = false;\n      });\n      canvas.addEventListener('mouseout', () => {\n        flags.isDrawing = false;\n      });\n    } // if (flags.chooseColor) {\n    //   takeColorWithColorPicker(event, flags);\n    // }\n\n  });\n}\nfunction pushHotkeys(flags) {\n  document.addEventListener('keydown', event => {\n    if (event.code === 'KeyB') {\n      flags.fillBucket = true;\n      flags.pencil = false;\n      flags.transform = false;\n      flags.chooseColor = false;\n      flags.isDrawing = false;\n      ctx.fillStyle = flags.currColorVal;\n      console.log(flags.currColorVal);\n      ctx.fillRect(0, 0, 512, 512);\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.paintBucket', '.pencil', '.chooseColor');\n    }\n\n    if (event.code === 'KeyP') {\n      flags.fillBucket = false;\n      flags.pencil = true;\n      flags.transform = false;\n      flags.chooseColor = false;\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.pencil', '.chooseColor', '.paintBucket');\n    }\n\n    if (event.code === 'KeyC') {\n      flags.fillBucket = false;\n      flags.pencil = false;\n      flags.transform = false;\n      flags.chooseColor = true;\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.chooseColor', '.pencil', '.paintBucket');\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/controlls.js":
/*!*****************************!*\
  !*** ./src/js/controlls.js ***!
  \*****************************/
/*! exports provided: colorSwitchRemember, chooseNewColor, switchActiveOnControlls, setParamsOnControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorSwitchRemember\", function() { return colorSwitchRemember; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseNewColor\", function() { return chooseNewColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchActiveOnControlls\", function() { return switchActiveOnControlls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsOnControlPanel\", function() { return setParamsOnControlPanel; });\n/* eslint-disable no-param-reassign */\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst currColorLabel = document.getElementById('currColorLabel');\nconst canvas = document.querySelector('canvas');\nfunction colorSwitchRemember(flags) {\n  currColorDiv.style.backgroundColor = flags.currColorVal;\n  prevColor.style.backgroundColor = flags.prevColorVal;\n}\nfunction chooseNewColor(flags, ctx) {\n  currColorLabel.addEventListener('change', event => {\n    flags.prevColorVal = flags.currColorVal;\n    flags.currColorVal = event.target.value;\n    colorSwitchRemember(flags);\n    ctx.fillStyle = flags.currColorVal;\n  });\n}\nfunction switchActiveOnControlls(activeTool, unactiveTool1, unactiveTool2) {\n  document.querySelector(`div ${activeTool}`).classList.add('active');\n\n  if (document.querySelector(`div ${unactiveTool1}`).classList.contains('active')) {\n    document.querySelector(`div ${unactiveTool1}`).classList.remove('active');\n  }\n\n  if (document.querySelector(`div ${unactiveTool2}`).classList.contains('active')) {\n    document.querySelector(`div ${unactiveTool2}`).classList.remove('active');\n  }\n}\nfunction setParamsOnControlPanel(flags, ctx) {\n  document.querySelector('.paint-controls').addEventListener('click', event => {\n    if (event.target.classList.contains('red')) {\n      if (flags.currColorVal !== '#f74141') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#f74141';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('blue')) {\n      if (flags.currColorVal !== '#00bcd4') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#00bcd4';\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('prev')) {\n      event.preventDefault();\n\n      if (flags.currColorVal !== flags.prevColorVal) {\n        flags.tempColorVal = flags.currColorVal;\n        flags.currColorVal = flags.prevColorVal;\n        flags.prevColorVal = flags.tempColorVal;\n        colorSwitchRemember(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('paintBucket')) {\n      flags.paintBucket = true;\n      flags.chooseColor = false;\n      flags.pencil = false;\n      flags.transform = false;\n      ctx.fillStyle = flags.currColorVal;\n      ctx.fillRect(0, 0, 512, 512);\n      localStorage.setItem('dataUrl', canvas.toDataURL());\n      switchActiveOnControlls('.paintBucket', '.pencil', '.chooseColor'); // for (let i = 0; i < colorPicker.length; i += 1) {\n      //   for (let j = 0; j < colorPicker[i].length; j += 1) {\n      //     colorPicker[i][j] = flags.currColorVal;\n      //   }\n      // }\n    }\n\n    if (event.target.classList.contains('chooseColor')) {\n      flags.paintBucket = false;\n      flags.chooseColor = true;\n      flags.pencil = false;\n      flags.transform = false;\n      switchActiveOnControlls('.chooseColor', '.pencil', '.paintBucket');\n    }\n\n    if (event.target.classList.contains('pencil')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      switchActiveOnControlls('.pencil', '.chooseColor', '.paintBucket');\n    }\n\n    if (event.target.classList.contains('transform')) {\n      flags.paintBucket = false;\n      flags.chooseColor = false;\n      flags.pencil = true;\n      flags.transform = false;\n      switchActiveOnControlls('.pencil', '.chooseColor', '.paintBucket');\n    }\n  });\n} // function changeArray(pixel) {\n//   colorPicker = Array(canvas.width / pixel).fill(Array(canvas.width / pixel).fill('#ffffff'));\n// }\n// export function setParamsOnRightControlPanel(flags, colorPicker) {\n//   document.querySelector('.paint-controls-right').addEventListener('click', (event) => {\n//     if (event.target.classList.contains('canvas128')) {\n//       flags.canvas128 = true;\n//       flags.canvas256 = false;\n//       flags.canvas512 = false;\n//       flags.pixelVal = 4;\n//      colorPicker = Array(canvas.width / flags.pixelVal).fill(Array(canvas.width / flags.pixelVal)\n// .fill('#ffffff'));\n//       switchActiveOnControlls('.canvas128', '.canvas256', '.canvas512');\n//     }\n//     if (event.target.classList.contains('canvas256')) {\n//       flags.canvas128 = false;\n//       flags.canvas256 = true;\n//       flags.canvas512 = false;\n//       flags.pixelVal = 2;\n//      colorPicker = Array(canvas.width / flags.pixelVal).fill(Array(canvas.width / flags.pixelVal)\n// .fill('#ffffff'));\n//       switchActiveOnControlls('.canvas256', '.canvas128', '.canvas512');\n//     }\n//     if (event.target.classList.contains('canvas512')) {\n//       flags.canvas128 = false;\n//       flags.canvas256 = false;\n//       flags.canvas512 = true;\n//       flags.pixelVal = 1;\n//      colorPicker = Array(canvas.width / flags.pixelVal).fill(Array(canvas.width / flags.pixelVal)\n// .fill('#ffffff'));\n//       switchActiveOnControlls('.canvas512', '.canvas128', '.canvas256');\n//     }\n//   });\n// }\n\n//# sourceURL=webpack:///./src/js/controlls.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/js/controlls.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.js\");\n\n\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d'); // get canvas\n\ncanvas.width = 512;\ncanvas.height = 512;\nconst img = new Image();\nconst flags = {\n  paintBucket: false,\n  chooseColor: false,\n  pencil: true,\n  transform: false,\n  pixelVal: 4,\n  isDrawing: false,\n  canvas128: true,\n  canvas256: false,\n  canvas512: false,\n  currColorVal: '#00ff00',\n  prevColorVal: '#ffeb3b',\n  tempColorVal: '#ffffff'\n}; // let colorPicker = Array(128).fill(Array(128).fill('#E0E0E0'));\n// console.log(colorPicker);\n\nlet tempObj; // let tempColorArray;\n// const changeArray = (pixel) => {\n//   colorPicker = Array(pixel).fill(Array(pixel).fill('#E0E0E0'));\n// };\n// MEDIA QUERY SIZE\n// (function canvasSize() {\n//   if (window.innerWidth < 820) {\n//     canvas.width = 256;\n//     canvas.height = 256;\n//     flags.pixelVal = 4;\n//   }\n// }());\n\nwindow.onload = () => {\n  if (localStorage.getItem('dataUrl')) {\n    img.src = localStorage.getItem('dataUrl');\n\n    img.onload = () => {\n      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\n    };\n  } // tempColorArray = JSON.parse(localStorage.getItem('colorsArray'));\n\n\n  tempObj = JSON.parse(localStorage.getItem('tempObjVal')); // REWRITE FLAGS\n\n  (function updateObjInfo() {\n    if (localStorage.getItem('tempObjVal') === null) {\n      document.querySelector('div .pencil').classList.add('active');\n      document.querySelector('.canvas128').classList.add('active');\n    }\n\n    for (const key in flags) {\n      if (Object.prototype.hasOwnProperty.call(flags, key)) {\n        flags[key] = tempObj[key];\n        console.log(flags[key]);\n      }\n\n      if (typeof flags[key] === 'boolean' && flags[key] === true && flags[key] !== 'isDrawing') {\n        document.querySelector(`.${key}`).classList.add('active');\n      }\n    }\n\n    currColorDiv.style.backgroundColor = flags.currColorVal;\n    prevColor.style.backgroundColor = flags.prevColorVal;\n  })(); // REWRITE DEFAULT ARRAY IF LOCALSTORAGE CONTAINS TEMPARRAY\n  // (function setRememberedColorInColorpicker() {\n  //   if (localStorage.getItem('colorsArray') === null) return;\n  //   // changeArray(flags.pixelVal);\n  //   for (let i = 0; i < colorPicker.length; i += 1) {\n  //     for (let j = 0; j < colorPicker[i].length; j += 1) {\n  //       colorPicker[i][j] = tempColorArray[i][j];\n  //     }\n  //   }\n  // }());\n\n};\n\nfunction setParamsOnRightControlPanel() {\n  document.querySelector('.paint-controls-right').addEventListener('click', event => {\n    if (event.target.classList.contains('canvas128')) {\n      flags.canvas128 = true;\n      flags.canvas256 = false;\n      flags.canvas512 = false;\n      flags.pixelVal = 4; // changeArray(128);\n\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.canvas128', '.canvas256', '.canvas512'); // console.log(colorPicker);\n    }\n\n    if (event.target.classList.contains('canvas256')) {\n      flags.canvas128 = false;\n      flags.canvas256 = true;\n      flags.canvas512 = false;\n      flags.pixelVal = 2; // changeArray(256);\n\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.canvas256', '.canvas128', '.canvas512'); // console.log(colorPicker);\n    }\n\n    if (event.target.classList.contains('canvas512')) {\n      flags.canvas128 = false;\n      flags.canvas256 = false;\n      flags.canvas512 = true;\n      flags.pixelVal = 1; // changeArray(512);\n\n      Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"switchActiveOnControlls\"])('.canvas512', '.canvas128', '.canvas256'); // console.log(colorPicker);\n    }\n  });\n}\n\nsetParamsOnRightControlPanel();\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"chooseNewColor\"])(flags, ctx);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnControlPanel\"])(flags, ctx); // setParamsOnRightControlPanel(flags, colorPicker);\n\nObject(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"paintCanvas\"])(flags);\nObject(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"pushHotkeys\"])(flags); // IMAGE API\n\nwindow.onbeforeunload = () => {\n  // localStorage.setItem('colorsArray', JSON.stringify(colorPicker));\n  localStorage.setItem('tempObjVal', JSON.stringify(flags));\n};\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });