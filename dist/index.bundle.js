"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweekly_expenses_app"] = self["webpackChunkweekly_expenses_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --blue: hsl(213, 70%, 49%);\\r\\n  --white: hsl(0, 0%, 100%);\\r\\n  --grey: hsl(0, 1%, 31%);\\r\\n  --lightgrey: hsl(216, 7%, 86%);\\r\\n  --darkBlue: #28304d;\\r\\n  --yellow: #f7e454;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--darkBlue);\\r\\n  min-height: 100vh;\\r\\n  padding: 24px;\\r\\n}\\r\\n\\r\\n.flex-column {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  gap: 0.5rem\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  gap: 0.5rem;\\r\\n  align-items: center;\\r\\n  padding: 40px 0;\\r\\n  border-bottom: 1px solid var(--lightgrey);\\r\\n}\\r\\n\\r\\n.divider {\\r\\n  height: 30px;\\r\\n  width: 6px;\\r\\n  background-color: var(--yellow);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin: 24px 0 50px 0;\\r\\n}\\r\\n\\r\\n.ask-budget-section {\\r\\n  z-index: 1;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  scale: 1;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  backdrop-filter: blur(5px);\\r\\n  overflow: auto;\\r\\n  gap: 2rem;\\r\\n  padding: 50px 24px;\\r\\n}\\r\\n\\r\\n.welcome-message {\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.welcome-message img {\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.white-text {\\r\\n  color: var(--white);\\r\\n}\\r\\n\\r\\n.primary-text {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.paragraph {\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.welcome-message span {\\r\\n  font-size: 1rem;\\r\\n  margin-top: 1.5rem;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n#ask-budget-form {\\r\\n  background-color: var(--yellow);\\r\\n  border-radius: 18px;\\r\\n  padding: 12px;\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n#ask-budget-form label {\\r\\n  color: var(--grey);\\r\\n}\\r\\n\\r\\n.inputs {\\r\\n  padding: 0.5rem;\\r\\n  border: 1px solid var(--lightgrey);\\r\\n  border-radius: 8px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  border: 1px solid var(--blue);\\r\\n  background-color: var(--blue);\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 8px;\\r\\n  color: var(--white);\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.alert {\\r\\n  color: var(--white);\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n  margin-bottom: 50px;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 8px;\\r\\n  background-color: red;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.budget {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.budget-remaining {\\r\\n color: var(--lightgrey);\\r\\n font-size: 18px;\\r\\n}\\r\\n\\r\\n#total,\\r\\n#remaining {\\r\\n  color: var(--white);\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.form-section,\\r\\n.list-section {\\r\\n  border-radius: 18px;\\r\\n  background-color: var(--yellow);\\r\\n  margin-top: 24px;\\r\\n  padding: 12px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  color: var(--darkBlue);\\r\\n  font-size: 24px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.expense-amount-div {\\r\\n  gap: 1rem;\\r\\n} \\r\\n\\r\\n.expense-amount {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weekly-expenses-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weekly-expenses-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weekly-expenses-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hola\": () => (/* binding */ hola)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n\n\n\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.askBudgetForm.addEventListener('submit', _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.form.addEventListener('submit', _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.addExpense);\n\nconst hola = 'hol';\n\n//# sourceURL=webpack://weekly-expenses-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Budget.js":
/*!*******************************!*\
  !*** ./src/modules/Budget.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Budget {\n  constructor(budget) {\n    this.budget = Number(budget);\n    this.remaining = Number(budget);\n    this.expenses = [];\n  }\n\n  newExpense(expense) {\n    this.expenses = [...this.expenses, expense];\n\n    this.calculateRemaining();\n  }\n\n  calculateRemaining() {\n    const spent = this.expenses.reduce((total, expense) => total + expense.amount, 0);\n\n    this.remaining = this.budget - spent;\n  }\n\n  deleteExpenses(id) {\n    this.expenses = this.expenses.filter((expenses) => expenses.id !== id);\n    this.calculateRemaining();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Budget);\n\n//# sourceURL=webpack://weekly-expenses-app/./src/modules/Budget.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/modules/functions.js\");\n\r\n/* eslint-disable */\r\n\r\n/* eslint-disable */\r\n\r\nclass UI {\r\n  static addBudget(amount) {\r\n    const { budget, remaining } = amount;\r\n    document.querySelector('#total').textContent = `$${budget}`;\r\n    document.querySelector('#remaining').textContent = `$${remaining}`;\r\n  }\r\n\r\n  static printAlert(message, type) {\r\n    const divMessage = document.createElement('div');\r\n    divMessage.classList.add('alert');\r\n\r\n    if (type === 'error') {\r\n      divMessage.classList.add('error');\r\n    } else {\r\n      divMessage.classList.add('success');\r\n    }\r\n\r\n    divMessage.textContent = message;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.formSection.insertBefore(divMessage, _variables_js__WEBPACK_IMPORTED_MODULE_0__.formSection.children[1]);\r\n\r\n    setTimeout(() => {\r\n      divMessage.remove();\r\n    }, 2000);\r\n  }\r\n\r\n  static addExpenseList(expenses) {\r\n    this.cleanHTML();\r\n\r\n    expenses.forEach((expense) => {\r\n      const { name, amount, id } = expense;\r\n\r\n      const newExpense = document.createElement('li');\r\n      newExpense.id = id;\r\n      newExpense.classList.add('flex', 'list');\r\n\r\n      const nameExpense = document.createElement('p');\r\n      nameExpense.textContent = name;\r\n      newExpense.appendChild(nameExpense);\r\n\r\n      const spanAmount = document.createElement('span');\r\n      spanAmount.textContent = `$ ${amount}`;\r\n      newExpense.appendChild(spanAmount);\r\n\r\n      const btnDelete = document.createElement('button');\r\n      btnDelete.setAttribute('type', 'button');\r\n      btnDelete.textContent = 'Delete x';\r\n      btnDelete.onclick = () => {\r\n        (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.deleteExpenses)(id);\r\n      };\r\n      newExpense.appendChild(btnDelete);\r\n\r\n      const imgDelete = document.createElement('img');\r\n      imgDelete.setAttribute('width', '20');\r\n      imgDelete.setAttribute('height', '20');\r\n      imgDelete.setAttribute('src', '../images/delete.png');\r\n      imgDelete.setAttribute('alt', 'delete-icon');\r\n      btnDelete.appendChild(imgDelete);\r\n\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.listGroup.appendChild(newExpense);\r\n    });\r\n  }\r\n\r\n  static cleanHTML() {\r\n    while (_variables_js__WEBPACK_IMPORTED_MODULE_0__.listGroup.firstChild) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.listGroup.removeChild(_variables_js__WEBPACK_IMPORTED_MODULE_0__.listGroup.firstChild);\r\n    }\r\n  }\r\n\r\n  static updateRemaining(remaining) {\r\n    document.querySelector('#remaining').textContent = remaining;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://weekly-expenses-app/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addExpense\": () => (/* binding */ addExpense),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteExpenses\": () => (/* binding */ deleteExpenses)\n/* harmony export */ });\n/* harmony import */ var _Budget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Budget.js */ \"./src/modules/Budget.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ \"./src/modules/UI.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\n/* eslint-disable */\r\n\r\n/* eslint-disable */\r\n\r\n\r\nlet budget;\r\n\r\nconst askBudget = (e) => {\r\n  e.preventDefault();\r\n\r\n  const userBudget = document.querySelector('#ask-budget').value;\r\n\r\n  if (userBudget === '' || userBudget === null || Number.isNaN(Number(userBudget)) || userBudget <= 0) {\r\n    const divMessage = document.createElement('div');\r\n    divMessage.classList.add('alert');\r\n    divMessage.textContent = 'Invalid amount';\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_2__.askBudgetSection.appendChild(divMessage);\r\n    setTimeout(() => {\r\n      divMessage.remove();\r\n    }, 1000);\r\n    return;\r\n  }\r\n\r\n  budget = new _Budget_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](userBudget);\r\n\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addBudget(budget);\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_2__.askBudgetSection.style.display = 'none';\r\n};\r\n\r\nconst addExpense = (e) => {\r\n  e.preventDefault();\r\n\r\n  const name = document.querySelector('#expense').value;\r\n  const amount = Number(document.querySelector('#amount').value);\r\n\r\n  if (name === '' || amount === '') {\r\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].printAlert('Both fields are required', 'error');\r\n  } else if (amount <= 0 || Number.isNaN(amount)) {\r\n    _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].printAlert('Invalid amount', 'error');\r\n  }\r\n\r\n  const expense = { name, amount, id: Date.now() };\r\n\r\n  budget.newExpense(expense);\r\n\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].printAlert('Expense added correctly');\r\n\r\n  const { expenses, remaining } = budget;\r\n\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addExpenseList(expenses);\r\n\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateRemaining(remaining);\r\n\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_2__.form.reset();\r\n};\r\n\r\nconst deleteExpenses = (id) => {\r\n  budget.deleteExpenses(id);\r\n\r\n  const { expenses, remaining } = budget;\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addExpenseList(expenses);\r\n\r\n  _UI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateRemaining(remaining);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (askBudget);\r\n\n\n//# sourceURL=webpack://weekly-expenses-app/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"askBudgetForm\": () => (/* binding */ askBudgetForm),\n/* harmony export */   \"askBudgetSection\": () => (/* binding */ askBudgetSection),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"formSection\": () => (/* binding */ formSection),\n/* harmony export */   \"listGroup\": () => (/* binding */ listGroup)\n/* harmony export */ });\nconst form = document.querySelector('#form');\nconst formSection = document.querySelector('.form-section');\nconst askBudgetForm = document.querySelector('#ask-budget-form');\nconst askBudgetSection = document.querySelector('.ask-budget-section');\nconst listGroup = document.querySelector('.list-group');\n\n//# sourceURL=webpack://weekly-expenses-app/./src/modules/variables.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);