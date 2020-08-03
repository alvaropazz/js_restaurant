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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/navigation */ \"./src/sections/navigation.js\");\n/* harmony import */ var _sections_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/menu */ \"./src/sections/menu.js\");\n/* harmony import */ var _sections_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/about */ \"./src/sections/about.js\");\n/* harmony import */ var _sections_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/home */ \"./src/sections/home.js\");\n\n\n\n\n\n\nconst main = document.querySelector('main');\n\nObject(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst reset = () => {\n  main.innerHTML = '';\n};\n\nmain.addEventListener('load', Object(_sections_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'menu-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'about-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n});\n\nmain.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (e.target.className === 'home-link') {\n    reset();\n    Object(_sections_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_sections_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst home = () => {\n  const homeTitle = document.createElement('h1');\n  const homeLogo = document.createElement('img');\n  const subHeader = document.createElement('h2');\n  const subCont = document.createElement('span');\n  homeTitle.innerHTML = 'EL BOSQUE';\n  homeLogo.src = '/src/assets/bosques.png';\n  homeLogo.alt = 'flowers';\n  homeLogo.className = 'image-container';\n  subCont.innerHTML = '• BAR • RESTAURANT •';\n\n  main.appendChild(homeTitle);\n  main.appendChild(homeLogo);\n  main.appendChild(subHeader);\n  subHeader.appendChild(subCont);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/sections/home.js?");

/***/ }),

/***/ "./src/sections/menu.js":
/*!******************************!*\
  !*** ./src/sections/menu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst menu = () => {\n  const menuContainer = document.createElement('div');\n  menuContainer.className = 'menu-container';\n  main.appendChild(menuContainer);\n  // 1\n  const descriptionSp = document.createElement('div');\n  const imgSp = document.createElement('img');\n  const specialCont = document.createElement('ul');\n  const specialTitle = document.createElement('li');\n  descriptionSp.className = 'menu-description';\n  imgSp.src = '/src/assets/menu-special.png';\n  imgSp.alt = 'Special';\n  imgSp.className = 'menu-img';\n  specialCont.className = 'menu-items';\n  specialTitle.innerHTML = 'Entrées';\n\n  menuContainer.appendChild(descriptionSp);\n  descriptionSp.appendChild(imgSp);\n  descriptionSp.appendChild(specialCont);\n  specialCont.appendChild(specialTitle);\n  // 2\n  const descriptionMain = document.createElement('div');\n  const imgMain = document.createElement('img');\n  const mainCont = document.createElement('ul');\n  const mainTitle = document.createElement('li');\n  descriptionMain.className = 'menu-description';\n  imgMain.src = '/src/assets/menu-dinner.png';\n  imgMain.alt = 'Main';\n  imgMain.className = 'menu-img';\n  mainCont.className = 'menu-items';\n  mainTitle.innerHTML = 'Mains';\n\n  menuContainer.appendChild(descriptionMain);\n  descriptionMain.appendChild(imgMain);\n  descriptionMain.appendChild(mainCont);\n  mainCont.appendChild(mainTitle);\n  // 3\n  const descriptionBar = document.createElement('div');\n  const imgBar = document.createElement('img');\n  const barCont = document.createElement('ul');\n  const barTitle = document.createElement('li');\n  descriptionBar.className = 'menu-description';\n  imgBar.src = '/src/assets/menu-bar.png';\n  imgBar.alt = 'Bar';\n  imgBar.className = 'menu-img';\n  barCont.className = 'menu-items';\n  barTitle.innerHTML = 'Bar';\n\n  menuContainer.appendChild(descriptionBar);\n  descriptionBar.appendChild(imgBar);\n  descriptionBar.appendChild(barCont);\n  barCont.appendChild(barTitle);\n  // 4\n  const descriptionWine = document.createElement('div');\n  const imgWine = document.createElement('img');\n  const wineCont = document.createElement('ul');\n  const wineTitle = document.createElement('li');\n  descriptionWine.className = 'menu-description';\n  imgWine.src = '/src/assets/menu-wine.png';\n  imgWine.alt = 'Wine';\n  imgWine.className = 'menu-img';\n  wineCont.className = 'menu-items';\n  wineTitle.innerHTML = 'Wines and Beers';\n\n  menuContainer.appendChild(descriptionWine);\n  descriptionWine.appendChild(imgWine);\n  descriptionWine.appendChild(wineCont);\n  wineCont.appendChild(wineTitle);\n  // footer\n  const subHeader = document.createElement('h2');\n  const subCont = document.createElement('span');\n  subCont.innerHTML = '• BAR • RESTAURANT •';\n  main.appendChild(subHeader);\n  subHeader.appendChild(subCont);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/sections/menu.js?");

/***/ }),

/***/ "./src/sections/navigation.js":
/*!************************************!*\
  !*** ./src/sections/navigation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('main');\n\nconst navigation = () => {\n  const nav = document.createElement('nav');\n  const home = document.createElement('p');\n  const menu = document.createElement('p');\n  const about = document.createElement('p');\n  home.className = 'home-link';\n  menu.className = 'menu-link';\n  about.className = 'about-link';\n  home.innerHTML = 'HOME';\n  menu.innerHTML = 'MENU';\n  about.innerHTML = 'ABOUT US';\n\n  main.appendChild(nav);\n  nav.appendChild(home);\n  nav.appendChild(menu);\n  nav.appendChild(about);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n\n//# sourceURL=webpack:///./src/sections/navigation.js?");

/***/ })

/******/ });