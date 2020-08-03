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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* @font-face {\\n  font-family: Cyrene;\\n  src:\\n    url(/src/assets/Cyrene+Regular.otf)\\n    format('opentype');\\n} */\\n\\nimport /src/assets/Cyrene+Regular.otf\\n\\nhtml {\\n  line-height: 1.15;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  font-family: 'Lora', serif;\\n  padding: 5em;\\n  min-width: 1366px;\\n  font-size: 10px;\\n  background: rgb(236, 233, 230);\\n  background: radial-gradient(circle, rgba(236, 233, 230, 1) 0%, rgba(255, 255, 255, 1) 100%);\\n}\\n\\nmain {\\n  padding: 10em;\\n  border: 1em solid #005a28;\\n  background-color: #fefbf9;\\n  height: 90vh;\\n  color: #005a28;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-evenly;\\n  font-size: 2em;\\n  margin-bottom: 2em;\\n  justify-self: self-start;\\n}\\n\\nnav p {\\n  padding: 1em;\\n  border: 0.1em solid #005a28;\\n  margin: 0;\\n}\\n\\nh1 {\\n  font-family: Cyrene, Georgia, 'Times New Roman', Times, serif;\\n  font-size: 20em;\\n  margin: 0;\\n}\\n\\n.image-container {\\n  height: 25em;\\n  object-fit: contain;\\n}\\n\\n.menu-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n.menu-img {\\n  height: 20em;\\n  width: 25em;\\n  object-fit: contain;\\n}\\n\\n.menu-items {\\n  margin-top: 2em;\\n  list-style: none;\\n  font-size: 2em;\\n  padding: 0;\\n  font-family: Cyrene, Georgia, 'Times New Roman', Times, serif;\\n}\\n\\n.menu-items :first-child {\\n  font-size: 2em;\\n}\\n\\n.about {\\n  font-size: 10em;\\n  color: #e11914;\\n}\\n\\n.about-us {\\n  font-size: 3em;\\n  padding: 2em;\\n  margin: 0 2em;\\n}\\n\\nh2 {\\n  font-size: 2em;\\n  font-family: Cyrene, Georgia, 'Times New Roman', Times, serif;\\n  letter-spacing: 1em;\\n  margin-top: 3em;\\n  margin-bottom: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/Cyrene+Regular.otf":
/*!***************************************!*\
  !*** ./src/assets/Cyrene+Regular.otf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0b4aca465352a0b44025631e61b52ca8.otf\");\n\n//# sourceURL=webpack:///./src/assets/Cyrene+Regular.otf?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/navigation */ \"./src/sections/navigation.js\");\n/* harmony import */ var _sections_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/menu */ \"./src/sections/menu.js\");\n/* harmony import */ var _sections_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/about */ \"./src/sections/about.js\");\n/* harmony import */ var _sections_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/home */ \"./src/sections/home.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_Cyrene_Regular_otf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Cyrene+Regular.otf */ \"./src/assets/Cyrene+Regular.otf\");\n\n\n\n\n\n\n\nconst main = document.querySelector('main');\n\nObject(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst reset = () => {\n  main.innerHTML = '';\n};\n\nmain.addEventListener('load', Object(_sections_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'menu-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'about-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n});\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'home-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sections/about.js":
/*!*******************************!*\
  !*** ./src/sections/about.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst about = () => {\n  const aboutTitle = document.createElement('h1');\n  const aboutCont = document.createElement('p');\n  const subHeader = document.createElement('h2');\n  const subCont = document.createElement('span');\n  aboutTitle.innerHTML = 'ABOUT US';\n  aboutTitle.className = 'about';\n  aboutCont.className = 'about-us';\n  aboutCont.innerHTML = 'I\\'m baby kogi franzen gentrify fingerstache asymmetrical tilde you probably haven\\'t heard of them cornhole pug intelligentsia copper mug fashion axe williamsburg cronut. Blue bottle skateboard succulents synth ramps. Tofu kitsch scenester franzen tousled next level bitters. Cred lomo scenester copper mug, offal direct trade jianbing irony art party sustainable shabby chic.';\n  subCont.innerHTML = '• BAR • RESTAURANT •';\n\n  main.appendChild(aboutTitle);\n  main.appendChild(aboutCont);\n  main.appendChild(aboutCont);\n  main.appendChild(subHeader);\n  subHeader.appendChild(subCont);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n//# sourceURL=webpack:///./src/sections/about.js?");

/***/ }),

/***/ "./src/sections/home.js":
/*!******************************!*\
  !*** ./src/sections/home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst home = () => {\n  const homeTitle = document.createElement('h1');\n  const homeLogo = document.createElement('img');\n  const subHeader = document.createElement('h2');\n  const subCont = document.createElement('span');\n  homeTitle.innerHTML = 'EL BOSQUE';\n  homeLogo.src = '../src/assets/bosques.png';\n  homeLogo.alt = 'flowers';\n  homeLogo.className = 'image-container';\n  subCont.innerHTML = '• BAR • RESTAURANT •';\n\n  main.appendChild(homeTitle);\n  main.appendChild(homeLogo);\n  main.appendChild(subHeader);\n  subHeader.appendChild(subCont);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n//# sourceURL=webpack:///./src/sections/home.js?");

/***/ }),

/***/ "./src/sections/menu.js":
/*!******************************!*\
  !*** ./src/sections/menu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst menu = () => {\n  const menuContainer = document.createElement('div');\n  menuContainer.className = 'menu-container';\n  main.appendChild(menuContainer);\n  // 1\n  const descriptionSp = document.createElement('div');\n  const imgSp = document.createElement('img');\n  const specialCont = document.createElement('ul');\n  const specialTitle = document.createElement('li');\n  descriptionSp.className = 'menu-description';\n  imgSp.src = '../src/assets/menu-special.png';\n  imgSp.alt = 'Special';\n  imgSp.className = 'menu-img';\n  specialCont.className = 'menu-items';\n  specialTitle.innerHTML = 'Entrées';\n\n  menuContainer.appendChild(descriptionSp);\n  descriptionSp.appendChild(imgSp);\n  descriptionSp.appendChild(specialCont);\n  specialCont.appendChild(specialTitle);\n  // 2\n  const descriptionMain = document.createElement('div');\n  const imgMain = document.createElement('img');\n  const mainCont = document.createElement('ul');\n  const mainTitle = document.createElement('li');\n  descriptionMain.className = 'menu-description';\n  imgMain.src = '../src/assets/menu-dinner.png';\n  imgMain.alt = 'Main';\n  imgMain.className = 'menu-img';\n  mainCont.className = 'menu-items';\n  mainTitle.innerHTML = 'Mains';\n\n  menuContainer.appendChild(descriptionMain);\n  descriptionMain.appendChild(imgMain);\n  descriptionMain.appendChild(mainCont);\n  mainCont.appendChild(mainTitle);\n  // 3\n  const descriptionBar = document.createElement('div');\n  const imgBar = document.createElement('img');\n  const barCont = document.createElement('ul');\n  const barTitle = document.createElement('li');\n  descriptionBar.className = 'menu-description';\n  imgBar.src = '../src/assets/menu-bar.png';\n  imgBar.alt = 'Bar';\n  imgBar.className = 'menu-img';\n  barCont.className = 'menu-items';\n  barTitle.innerHTML = 'Bar';\n\n  menuContainer.appendChild(descriptionBar);\n  descriptionBar.appendChild(imgBar);\n  descriptionBar.appendChild(barCont);\n  barCont.appendChild(barTitle);\n  // 4\n  const descriptionWine = document.createElement('div');\n  const imgWine = document.createElement('img');\n  const wineCont = document.createElement('ul');\n  const wineTitle = document.createElement('li');\n  descriptionWine.className = 'menu-description';\n  imgWine.src = '../src/assets/menu-wine.png';\n  imgWine.alt = 'Wine';\n  imgWine.className = 'menu-img';\n  wineCont.className = 'menu-items';\n  wineTitle.innerHTML = 'Wines and Beers';\n\n  menuContainer.appendChild(descriptionWine);\n  descriptionWine.appendChild(imgWine);\n  descriptionWine.appendChild(wineCont);\n  wineCont.appendChild(wineTitle);\n  // footer\n  const subHeader = document.createElement('h2');\n  const subCont = document.createElement('span');\n  subCont.innerHTML = '• BAR • RESTAURANT •';\n  main.appendChild(subHeader);\n  subHeader.appendChild(subCont);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/sections/menu.js?");

/***/ }),

/***/ "./src/sections/navigation.js":
/*!************************************!*\
  !*** ./src/sections/navigation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst navigation = () => {\n  const nav = document.createElement('nav');\n  const home = document.createElement('p');\n  const menu = document.createElement('p');\n  const about = document.createElement('p');\n  home.className = 'home-link';\n  menu.className = 'menu-link';\n  about.className = 'about-link';\n  home.innerHTML = 'HOME';\n  menu.innerHTML = 'MENU';\n  about.innerHTML = 'ABOUT US';\n\n  main.appendChild(nav);\n  nav.appendChild(home);\n  nav.appendChild(menu);\n  nav.appendChild(about);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n\n//# sourceURL=webpack:///./src/sections/navigation.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });