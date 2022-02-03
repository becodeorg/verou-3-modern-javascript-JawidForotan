/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dataKey = {\r\n  apiKey: \"a7838a7fd0899014d0bd24874d68c9ec\",\r\n  photoKey: \"ITOCDNJoj5saUcLxJkUZ2wIc0UXLZMGUTXup2yf6VO8\",\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataKey);\r\n\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./config.js?");

/***/ }),

/***/ "./modules/createHtmlElem.js":
/*!***********************************!*\
  !*** ./modules/createHtmlElem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creatH1\": () => (/* binding */ creatH1),\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createP\": () => (/* binding */ createP),\n/* harmony export */   \"createInput\": () => (/* binding */ createInput),\n/* harmony export */   \"createImg\": () => (/* binding */ createImg)\n/* harmony export */ });\n// Function to create h1\r\n\r\nconst creatH1 = (h1ClassName, h1Content) => {\r\n  const newH1 = document.createElement(\"h1\");\r\n  newH1.classList = h1ClassName;\r\n  newH1.textContent = h1Content;\r\n  return newH1;\r\n};\r\n\r\n// Function to create div\r\nconst createDiv = (className) => {\r\n  const newDiv = document.createElement(\"div\");\r\n  newDiv.classList = className;\r\n  return newDiv;\r\n};\r\n\r\n// Function to create paragraph\r\nconst createP = (className, content) => {\r\n  const newP = document.createElement(\"p\");\r\n  newP.classList = className;\r\n  newP.textContent = content;\r\n  return newP;\r\n};\r\n\r\n// Function to create input\r\nconst createInput = (inputClassName, inputType, placeHolder) => {\r\n  const newInput = document.createElement(\"input\");\r\n  newInput.classList = inputClassName;\r\n  newInput.type = inputType;\r\n  newInput.placeholder = placeHolder;\r\n  return newInput;\r\n};\r\n\r\n// Function to create image\r\nconst createImg = (imgClassName, imgSrc) => {\r\n  const newImg = document.createElement(\"img\");\r\n  newImg.classList = imgClassName;\r\n  newImg.src = imgSrc;\r\n  return newImg;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./modules/createHtmlElem.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\nbody {\\r\\n  height: 100vh;\\r\\n  max-width: 100vw;\\r\\n  box-sizing: border-box;\\r\\n  font-family: sans-serif;\\r\\n  background-image: linear-gradient(\\r\\n    rgb(57, 152, 240),\\r\\n    rgb(248, 252, 253),\\r\\n    rgb(125, 187, 245)\\r\\n  );\\r\\n}\\r\\n\\r\\n.header {\\r\\n  margin-bottom: 20px;\\r\\n  font-family: \\\"Lobster\\\", cursive;\\r\\n  font-size: 40px;\\r\\n  color: rgb(4, 40, 70);\\r\\n}\\r\\n.search {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: none;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n.myInput {\\r\\n  height: 35px;\\r\\n  width: 300px;\\r\\n  border-radius: 20px;\\r\\n  border: none;\\r\\n  font-size: 25px;\\r\\n  padding: 0px 20px;\\r\\n  box-shadow: 2px 2px 4px rgb(49, 49, 49);\\r\\n}\\r\\n.btn {\\r\\n  height: 30px;\\r\\n  width: 70px;\\r\\n  margin-top: 15px;\\r\\n  border-radius: 4px;\\r\\n  border: none;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 2px 2px 4px rgb(49, 49, 49);\\r\\n}\\r\\n.btn:hover {\\r\\n  transform: translateY(1px);\\r\\n  background-color: rgb(25, 108, 252);\\r\\n  color: rgb(255, 255, 255);\\r\\n  cursor: pointer;\\r\\n}\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\n.imageDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.weatherCont {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.createDayTemDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 15px;\\r\\n}\\r\\n.createDayTemDiv h1 {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.firstCardCont {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 50px;\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n.lastCardsCont {\\r\\n  margin-top: 100px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.weatherDiv {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 30px 15px;\\r\\n  box-shadow: 5px 5px 8px rgb(48, 47, 47);\\r\\n  background-image: radial-gradient(\\r\\n    rgb(196, 236, 248),\\r\\n    rgb(102, 179, 250),\\r\\n    rgb(27, 132, 251)\\r\\n  );\\r\\n  border-radius: 10px;\\r\\n  padding: 20px 10px;\\r\\n}\\r\\n.weatherDiv:hover {\\r\\n  transform: translateY(-3px);\\r\\n  cursor: pointer;\\r\\n}\\r\\n.name {\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n.dateTime {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: 120px;\\r\\n}\\r\\n.cityImage {\\r\\n  width: 400px;\\r\\n  height: 300px;\\r\\n  margin: 20px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.minMax {\\r\\n  display: flex;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.minMax p {\\r\\n  margin: 0px 10px;\\r\\n}\\r\\n.description,\\r\\n.humidity,\\r\\n.wind {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n@media (max-width: 650px) {\\r\\n  .header {\\r\\n    font-size: 30px;\\r\\n  }\\r\\n  .myInput {\\r\\n    height: 30px;\\r\\n    width: 200px;\\r\\n    border-radius: 18px;\\r\\n    border: none;\\r\\n    font-size: 20px;\\r\\n    padding: 0px 20px;\\r\\n    box-shadow: 2px 2px 4px rgb(49, 49, 49);\\r\\n  }\\r\\n  .cityImage {\\r\\n    width: 250px;\\r\\n    height: 200px;\\r\\n    margin: 10px;\\r\\n    border-radius: 10px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/createHtmlElem.js */ \"./modules/createHtmlElem.js\");\n\r\n\r\nconst key = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apiKey;\r\n\r\n\r\nconsole.log(\"Hello Hello, Webpack!\");\r\n\r\n// // Create search container\r\nconst createSearchDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"search\");\r\ndocument.body.appendChild(createSearchDiv);\r\nconst createHeader = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.creatH1)(\"header\", \"The daily weather\");\r\ncreateSearchDiv.appendChild(createHeader);\r\n\r\nconst CreateInput = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createInput)(\"myInput\", \"text\", \"Enter city name\");\r\ncreateSearchDiv.append(CreateInput);\r\n\r\n// Create container for html elements\r\nconst createContainer = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"container\");\r\ndocument.body.appendChild(createContainer);\r\n\r\nconst createWeatherCont = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"weatherCont\");\r\ncreateContainer.append(createWeatherCont);\r\n\r\nconst createElements = (daily, city, day) => {\r\n  // Create card\r\n  const createWeatherDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"weatherDiv\");\r\n  createWeatherCont.appendChild(createWeatherDiv);\r\n  const createDayTemDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"createDayTemDiv\");\r\n\r\n  const createDayContent = day;\r\n  const createDay = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"description\", createDayContent);\r\n\r\n  const createTempContent = `${Math.round(daily.temp.day)}°C`;\r\n  const createTemp = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.creatH1)(\"temperature\", createTempContent);\r\n\r\n  createDayTemDiv.append(createDay, createTemp);\r\n\r\n  const imgSrc =\r\n    \"http://openweathermap.org/img/wn/\" + daily.weather[0].icon + \".png\";\r\n  const createImage = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(\"image\", imgSrc);\r\n\r\n  const createMinMaxDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"minMax\");\r\n  const minParaContent = `Low ${Math.round(daily.temp.min)}°C`;\r\n  const createMin = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"minTem\", minParaContent);\r\n  const maxParaContent = `High ${Math.round(daily.temp.max)}°C`;\r\n  const createMax = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"maxTem\", maxParaContent);\r\n  createMinMaxDiv.append(createMin, createMax);\r\n\r\n  const descParContent = daily.weather[0].description;\r\n  const createDesc = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"description\", descParContent);\r\n\r\n  const createHumidPar = `Humidity: ${daily.humidity}%`;\r\n  const createHumid = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"humidity\", createHumidPar);\r\n\r\n  const createWindPar = `Wind-speed: ${daily.wind_speed}km/h`;\r\n  const createWind = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createP)(\"wind\", createWindPar);\r\n\r\n  createWeatherDiv.append(\r\n    createDayTemDiv,\r\n    createDesc,\r\n    createImage,\r\n    createMinMaxDiv,\r\n    createHumid,\r\n    createWind\r\n  );\r\n};\r\n\r\n// Get data from open weather api\r\nlet cityName;\r\nlet city;\r\nlet lat;\r\nlet lon;\r\nconst weekday = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\n\r\nconst oneCallWeatherApi = () => {\r\n  fetch(\r\n    \"https://api.openweathermap.org/data/2.5/onecall?lat=\" +\r\n      lat +\r\n      \"&lon=\" +\r\n      lon +\r\n      \"&exclude=minutely,hourly&units=metric&appid=\" +\r\n      key\r\n  )\r\n    .then((Response) => Response.json())\r\n    .then((result) => {\r\n      for (let i = 0; i < 5; i++) {\r\n        const date = new Date();\r\n        let day = weekday[(date.getDay() + i) % 7];\r\n        createElements(result.daily[i], city, day);\r\n      }\r\n      //\r\n      const cards = document.querySelectorAll(\".weatherDiv\");\r\n      const firstWeatherCard = cards[0];\r\n      const firstCardDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"firstCardCont\");\r\n      const head1 = document.createElement(\"h3\");\r\n      head1.setAttribute(\"class\", \"head1\");\r\n      head1.textContent = `Today ${city}`;\r\n      firstWeatherCard.prepend(head1);\r\n      firstWeatherCard.style.background = \"lightblue\";\r\n      firstWeatherCard.style.boxShadow = \"none\";\r\n      firstWeatherCard.style.color = \"white\";\r\n      firstWeatherCard.style.width = \"300px\";\r\n      firstCardDiv.appendChild(firstWeatherCard);\r\n      createWeatherCont.prepend(firstCardDiv);\r\n\r\n      const secondWeatherCard = cards[1];\r\n      const thirdWeatherCard = cards[2];\r\n      const fourthWeatherCard = cards[3];\r\n      const fifthWeatherCard = cards[4];\r\n      const lastCardsDiv = (0,_modules_createHtmlElem_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"lastCardsCont\");\r\n      lastCardsDiv.append(\r\n        secondWeatherCard,\r\n        thirdWeatherCard,\r\n        fourthWeatherCard,\r\n        fifthWeatherCard\r\n      );\r\n      createWeatherCont.append(lastCardsDiv);\r\n    });\r\n};\r\nconst getData = () => {\r\n  cityName = document.querySelector(\".myInput\").value;\r\n  cityName.charAt(0).toUpperCase();\r\n  const url =\r\n    \"https://api.openweathermap.org/data/2.5/forecast?q=\" +\r\n    cityName +\r\n    \"&units=metric&appid=\" +\r\n    key;\r\n  fetch(url)\r\n    .then((Response) => Response.json())\r\n    .then((data) => {\r\n      city = data.city.name;\r\n      lat = data.city.coord.lat;\r\n      lon = data.city.coord.lon;\r\n      oneCallWeatherApi();\r\n      getLocalTime(lat, lon);\r\n    })\r\n    .catch(() => alert(\"city not found\"));\r\n};\r\n\r\n// Display city image\r\nasync function getCityImage() {\r\n  const url =\r\n    \"https://api.unsplash.com/search/photos?query=\" +\r\n    cityName +\r\n    \"&client_id=\" +\r\n    _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].photoKey;\r\n  const bodyStyle = document.body.style;\r\n  const getImage = await fetch(url)\r\n    .then((response) => response.json())\r\n    .catch(() => alert(\"image not found\"));\r\n  bodyStyle.backgroundImage = `url(${getImage.results[0].urls.regular})`;\r\n  bodyStyle.backgroundRepeat = \"no-repeat\";\r\n  bodyStyle.backgroundSize = \"cover\";\r\n}\r\n\r\n// Add events to the search\r\nconst addEventToInput = document.querySelector(\".myInput\");\r\naddEventToInput.addEventListener(\"keyup\", (e) => {\r\n  if (e.key === \"Enter\") {\r\n    createWeatherCont.innerHTML = \"\";\r\n    getData();\r\n    getCityImage();\r\n  }\r\n});\r\n\r\n//Display city image\r\nfunction getLocalTime(lat, lon) {\r\n  const url =\r\n    \"https://api.openweathermap.org/data/2.5/onecall?lat=\" +\r\n    lat +\r\n    \"&lon=\" +\r\n    lon +\r\n    \"&exclude=daily,minutely,hourly&units=metric&appid=\" +\r\n    key;\r\n  fetch(url).then((response) =>\r\n    response.json().then((result) => {\r\n      let sec = result.current.dt + result.timezone_offset;\r\n      let date = new Date(sec * 1000);\r\n      let hours = date.getHours() - 1;\r\n      let minutes = \"0\" + date.getMinutes();\r\n      let time = hours + \":\" + minutes.substr(-2);\r\n      console.log(time);\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack://Part3-Modules-and-the-Browser/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;