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
/*! exports provided: paintCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintCanvas\", function() { return paintCanvas; });\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/js/controlls.js\");\n/* eslint-disable no-param-reassign */\n\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = 512;\ncanvas.height = 512;\nlet startCoordinates = [0, 0];\n\nfunction getCoordinates(event, flags) {\n  const x = Math.floor(event.offsetX / flags.pixelVal);\n  const y = Math.floor(event.offsetY / flags.pixelVal);\n  return [x, y];\n}\n\nfunction draw(canv, startCoor, currentCoordinates, flags) {\n  let x0 = startCoor[0];\n  let y0 = startCoor[1];\n  const x = currentCoordinates[0];\n  const y = currentCoordinates[1];\n  const deltaX = Math.abs(x - x0);\n  const deltaY = Math.abs(y - y0);\n  const signX = Math.sign(x - x0);\n  const signY = Math.sign(y - y0);\n  let difference = deltaX - deltaY;\n\n  for (;;) {\n    // eslint-disable-next-line no-param-reassign\n    canv.fillStyle = flags.currColorVal;\n    ctx.fillRect(x0 * flags.pixelVal, y0 * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n    if (x0 === x && y0 === y) break;\n    const differenceX2 = difference * 2;\n\n    if (differenceX2 > -deltaY) {\n      difference -= deltaY;\n      x0 += signX;\n    }\n\n    if (differenceX2 < deltaX) {\n      difference += deltaX;\n      y0 += signY;\n    }\n  }\n}\n\nfunction takeColorWithColorPicker(event, flags) {\n  const x = Math.floor(event.offsetX);\n  const y = Math.floor(event.offsetY);\n  const pix = ctx.getImageData(x, y, 1, 1);\n  const {\n    data\n  } = pix; // data = pix.data\n\n  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;\n  flags.tempColorVal = flags.currColorVal;\n  flags.currColorVal = rgba;\n  flags.prevColorVal = flags.tempColorVal;\n  Object(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"changeRememberedColors\"])(flags);\n}\n\nfunction paintCanvas(flags) {\n  canvas.addEventListener('mousedown', event => {\n    if (flags.pencil) {\n      flags.isDrawing = true;\n      ctx.fillStyle = flags.currColorVal;\n      startCoordinates = getCoordinates(event, flags);\n      ctx.fillRect(startCoordinates[0] * flags.pixelVal, startCoordinates[1] * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n      canvas.addEventListener('mousemove', eventMove => {\n        if (!flags.isDrawing) return;\n        const currentCoordinates = getCoordinates(eventMove, flags);\n        draw(ctx, startCoordinates, currentCoordinates, flags);\n        startCoordinates = currentCoordinates;\n      });\n      canvas.addEventListener('mouseup', () => {\n        flags.isDrawing = false;\n      });\n      canvas.addEventListener('mouseout', () => {\n        flags.isDrawing = false;\n      });\n    }\n\n    if (flags.chooseColor) {\n      takeColorWithColorPicker(event, flags);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/canvas.js?");

/***/ }),

/***/ "./src/js/controlls.js":
/*!*****************************!*\
  !*** ./src/js/controlls.js ***!
  \*****************************/
/*! exports provided: changeRememberedColors, chooseNewColor, setParamsOnControlPanel, setParamsOnRightControlPanel, pushHotkeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeRememberedColors\", function() { return changeRememberedColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseNewColor\", function() { return chooseNewColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsOnControlPanel\", function() { return setParamsOnControlPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsOnRightControlPanel\", function() { return setParamsOnRightControlPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushHotkeys\", function() { return pushHotkeys; });\n/* eslint-disable no-param-reassign */\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst currColorLabel = document.getElementById('currColorLabel');\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = 512;\ncanvas.height = 512;\nfunction changeRememberedColors(flags) {\n  currColorDiv.style.backgroundColor = flags.currColorVal;\n  prevColor.style.backgroundColor = flags.prevColorVal;\n}\nfunction chooseNewColor(flags) {\n  currColorLabel.addEventListener('change', event => {\n    flags.prevColorVal = flags.currColorVal;\n    flags.currColorVal = event.target.value;\n    changeRememberedColors(flags);\n    ctx.fillStyle = flags.currColorVal;\n  });\n}\n\nfunction switchActiveOnControlls(parentBlock, activeTool, cursor) {\n  document.querySelector(`.${parentBlock} .active`).classList.remove('active');\n  document.querySelector(`div ${activeTool}`).classList.add('active');\n\n  if (canvas.classList.contains('bucketCursor')) {\n    canvas.classList.remove('bucketCursor');\n  }\n\n  if (canvas.classList.contains('pippeteCursor')) {\n    canvas.classList.remove('pippeteCursor');\n  }\n\n  if (canvas.classList.contains('pencilCursor')) {\n    canvas.classList.remove('pencilCursor');\n  }\n\n  canvas.classList.add(`${cursor}`);\n}\n\nfunction switchActiveOnRightControlls(parentBlock, activeTool) {\n  document.querySelector(`.${parentBlock} .active`).classList.remove('active');\n  document.querySelector(`div ${activeTool}`).classList.add('active');\n}\n\nfunction setFalseWhenToolsSwitch(flags) {\n  flags.paintBucket = false;\n  flags.chooseColor = false;\n  flags.pencil = false;\n  flags.transform = false;\n}\n\nfunction setParamsWhenCanvasSizeSwitch(flags, pixelVal) {\n  flags.canvas128 = false;\n  flags.canvas256 = false;\n  flags.canvas512 = false;\n  flags.pixelVal = pixelVal;\n}\n\nfunction setParamsOnControlPanel(flags) {\n  document.querySelector('.paint-controls').addEventListener('click', event => {\n    if (event.target.classList.contains('red')) {\n      if (flags.currColorVal !== '#f74141') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#f74141';\n        changeRememberedColors(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('blue')) {\n      if (flags.currColorVal !== '#00bcd4') {\n        flags.prevColorVal = flags.currColorVal;\n        flags.currColorVal = '#00bcd4';\n        changeRememberedColors(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('prev')) {\n      event.preventDefault();\n\n      if (flags.currColorVal !== flags.prevColorVal) {\n        flags.tempColorVal = flags.currColorVal;\n        flags.currColorVal = flags.prevColorVal;\n        flags.prevColorVal = flags.tempColorVal;\n        changeRememberedColors(flags);\n        ctx.fillStyle = flags.currColorVal;\n      }\n    }\n\n    if (event.target.classList.contains('paintBucket')) {\n      setFalseWhenToolsSwitch(flags);\n      flags.paintBucket = true;\n      ctx.fillStyle = flags.currColorVal;\n      ctx.fillRect(0, 0, 512, 512);\n      localStorage.setItem('dataUrl', canvas.toDataURL());\n      switchActiveOnControlls('tool-block', '.paintBucket', 'bucketCursor');\n    }\n\n    if (event.target.classList.contains('chooseColor')) {\n      setFalseWhenToolsSwitch(flags);\n      flags.chooseColor = true;\n      switchActiveOnControlls('tool-block', '.chooseColor', 'pippeteCursor');\n    }\n\n    if (event.target.classList.contains('pencil')) {\n      setFalseWhenToolsSwitch(flags);\n      flags.pencil = true;\n      switchActiveOnControlls('tool-block', '.pencil', 'pencilCursor');\n    }\n\n    if (event.target.classList.contains('transform')) {\n      setFalseWhenToolsSwitch(flags);\n      flags.pencil = true;\n      switchActiveOnControlls('tool-block', '.pencil', 'pencilCursor');\n    }\n  });\n}\nfunction setParamsOnRightControlPanel(flags) {\n  document.querySelector('.paint-controls-right').addEventListener('click', event => {\n    if (event.target.classList.contains('canvas128')) {\n      setParamsWhenCanvasSizeSwitch(flags, 4);\n      flags.canvas128 = true;\n      switchActiveOnRightControlls('tool-block-right', '.canvas128');\n    }\n\n    if (event.target.classList.contains('canvas256')) {\n      setParamsWhenCanvasSizeSwitch(flags, 2);\n      flags.canvas256 = true;\n      switchActiveOnRightControlls('tool-block-right', '.canvas256');\n    }\n\n    if (event.target.classList.contains('canvas512')) {\n      setParamsWhenCanvasSizeSwitch(flags, 1);\n      flags.canvas512 = true;\n      switchActiveOnRightControlls('tool-block-right', '.canvas512');\n    }\n\n    if (event.target.classList.contains('clear')) {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n      for (let j = 0; j < canvas.width / flags.pixelVal; j += 1) {\n        for (let i = 0; i < canvas.width / flags.pixelVal; i += 1) {\n          if ((j * (canvas.width / flags.pixelVal) + i + j) % 2 === 0) {\n            ctx.fillStyle = '#66CC66';\n            ctx.fillRect(j * flags.pixelVal, i * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n          } // else {\n          //   ctx.fillStyle = '#FF0000';\n          //   ctx.fillRect(j * flags.pixelVal, i * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n          // }\n\n        }\n      }\n    }\n  });\n}\nfunction pushHotkeys(flags) {\n  document.addEventListener('keydown', event => {\n    if (event.code === 'KeyB') {\n      setFalseWhenToolsSwitch(flags);\n      flags.fillBucket = true;\n      flags.isDrawing = false;\n      ctx.fillStyle = flags.currColorVal;\n      console.log(flags.currColorVal);\n      ctx.fillRect(0, 0, 512, 512);\n      switchActiveOnControlls('tool-block', '.paintBucket', 'bucketCursor');\n    }\n\n    if (event.code === 'KeyP') {\n      setFalseWhenToolsSwitch(flags);\n      flags.pencil = true;\n      switchActiveOnControlls('tool-block', '.pencil', 'pippeteCursor');\n    }\n\n    if (event.code === 'KeyC') {\n      setFalseWhenToolsSwitch(flags);\n      flags.chooseColor = true;\n      switchActiveOnControlls('tool-block', '.chooseColor', 'pencilCursor');\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/controlls.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlls */ \"./src/js/controlls.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.js\");\n/* eslint-disable no-param-reassign */\n\n\nconst currColorDiv = document.querySelector('.color-block__circle-curr');\nconst prevColor = document.getElementById('prevColor');\nconst canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d'); // get canvas\n\ncanvas.width = 512;\ncanvas.height = 512;\nconst img = new Image();\nconst flags = {\n  paintBucket: false,\n  chooseColor: false,\n  pencil: true,\n  transform: false,\n  pixelVal: 4,\n  isDrawing: false,\n  canvas128: true,\n  canvas256: false,\n  canvas512: false,\n  currColorVal: '#00ff00',\n  prevColorVal: '#ffeb3b',\n  tempColorVal: '#ffffff'\n};\nlet tempObj; // MEDIA QUERY SIZE\n\n(function canvasSize() {\n  if (window.innerWidth < 820) {\n    canvas.width = 256;\n    canvas.height = 256;\n    flags.pixelVal = 4;\n  }\n})();\n\nwindow.onload = () => {\n  tempObj = JSON.parse(localStorage.getItem('tempObjVal')); // REWRITE FLAGS\n\n  (function updateObjInfo() {\n    if (localStorage.getItem('tempObjVal') === null) {\n      document.querySelector('div .pencil').classList.add('active');\n      document.querySelector('.canvas128').classList.add('active');\n      canvas.classList.add('pencilCursor');\n    }\n\n    for (const key in flags) {\n      if (Object.prototype.hasOwnProperty.call(flags, key)) {\n        flags[key] = tempObj[key];\n      }\n\n      if (typeof flags[key] === 'boolean' && flags[key] === true && flags[key] !== 'isDrawing') {\n        document.querySelector(`.${key}`).classList.add('active');\n      }\n    }\n\n    currColorDiv.style.backgroundColor = flags.currColorVal;\n    prevColor.style.backgroundColor = flags.prevColorVal;\n  })();\n\n  if (localStorage.getItem('dataUrl')) {\n    img.src = localStorage.getItem('dataUrl');\n\n    img.onload = () => {\n      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\n    };\n  }\n\n  (function demoGrid() {\n    for (let j = 0; j < canvas.width / flags.pixelVal; j += 1) {\n      for (let i = 0; i < canvas.width / flags.pixelVal; i += 1) {\n        if ((j * (canvas.width / flags.pixelVal) + i + j) % 2 === 0) {\n          ctx.fillStyle = '#66CC66';\n          ctx.fillRect(j * flags.pixelVal, i * flags.pixelVal, flags.pixelVal, flags.pixelVal);\n        }\n      }\n    }\n  })();\n\n  if (window.location.search.indexOf('code')) {\n    fetch('https://github.com/login/oauth/access_token', {\n      method: 'POST',\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n        'Access-Control-Allow-Credentials': true,\n        'Content-Type': 'application/json',\n        Accept: 'application/json'\n      },\n      body: JSON.stringify({\n        client_id: 'f476cbe1146b74def3b4',\n        client_secret: '2ab9d65b5ccaf0b317d393d1614d000c34ace426',\n        code: window.location.search.substring(6)\n      })\n    }).then(response => response.json()).then(respJSON => {\n      const result = respJSON.access_token;\n      console.log(result);\n    }).catch(e => console.log(e));\n  }\n};\n\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnRightControlPanel\"])(flags);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"chooseNewColor\"])(flags, ctx);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnControlPanel\"])(flags, ctx);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"setParamsOnRightControlPanel\"])(flags);\nObject(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"paintCanvas\"])(flags);\nObject(_controlls__WEBPACK_IMPORTED_MODULE_0__[\"pushHotkeys\"])(flags); // IMAGE API\n\nasync function getLinkToImageAndSize() {\n  const town = document.querySelector('#selectedTownTxt').value || 'Minsk'; // берется город по умолчанию будет Минск\n\n  const url = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=0befbf182316cad78146a16286e63afa84cf9a204c5af610d54d03ec16996f7a`;\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}\n\ndocument.querySelector('.load').addEventListener('click', () => {\n  getLinkToImageAndSize().then(data => {\n    // eslint-disable-next-line no-param-reassign\n    img.src = data.urls.full;\n    img.width = data.width;\n    img.height = data.height;\n    img.crossOrigin = 'anonymous';\n    const sign = Math.sign(img.width - img.height);\n    const w0 = img.width;\n    const h0 = img.height; // eslint-disable-next-line default-case\n\n    switch (sign) {\n      case 1:\n        {\n          img.width = 512;\n          img.height = h0 * 512 / w0;\n          break;\n        }\n\n      case -1:\n        {\n          img.height = 512;\n          img.width = w0 * 512 / h0;\n          break;\n        }\n    }\n  });\n\n  img.onload = () => {\n    ctx.drawImage(img, (canvas.width - img.width) / 2, (canvas.height - img.height) / 2, img.width, img.height);\n  };\n});\ndocument.querySelector('.grayscale').addEventListener('click', () => {\n  img.style.display = 'none';\n  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  const {\n    data\n  } = imageData;\n\n  for (let i = 0; i < data.length; i += 4) {\n    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n    data[i] = avg; // red\n\n    data[i + 1] = avg; // green\n\n    data[i + 2] = avg; // blue\n  }\n\n  ctx.putImageData(imageData, 0, 0);\n});\n\nwindow.onbeforeunload = () => {\n  localStorage.setItem('tempObjVal', JSON.stringify(flags));\n  localStorage.setItem('dataUrl', canvas.toDataURL());\n};\n\n//# sourceURL=webpack:///./src/js/main.js?");

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