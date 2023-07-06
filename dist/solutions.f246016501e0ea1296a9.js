/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/solutions.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/solutions.scss ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/solutions-home-bg.jpg */ "./src/assets/solutions-home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg-parallax.jpg */ "./src/assets/bg-parallax.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/***\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-webkit-input-placeholder {\n  color: unset;\n}\n\n::-moz-placeholder {\n  color: unset;\n}\n\n:-ms-input-placeholder {\n  color: unset;\n}\n\n::-ms-input-placeholder {\n  color: unset;\n}\n\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  background: #111;\n}\n\n.page-header {\n  width: 100%;\n  height: 65px;\n  padding: 0 30px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\n}\n\n.logo__link {\n  display: block;\n}\n.logo__image {\n  max-height: 50px;\n}\n\n.main-navigation__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.main-navigation__list-item {\n  height: 100%;\n  padding: 0 15px;\n}\n.main-navigation__link, .main-navigation__language {\n  color: #000;\n}\n.main-navigation__link:hover, .main-navigation__language:hover {\n  color: #727272;\n}\n\n.page-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 105px 0 60px;\n  text-align: center;\n}\n\n.footer-group-one {\n  width: 40%;\n  padding: 0 5%;\n  margin-bottom: 45px;\n}\n\n.footer-group-two {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 70px;\n}\n\n.footer-logo,\n.footer-social {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.footer-logo {\n  width: 35%;\n  margin-bottom: 30px;\n}\n\n.footer-social__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-social__link {\n  display: block;\n  margin: 0 10px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-top: 4px;\n  padding-left: 6.2px;\n  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #111;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link i.fas {\n  position: absolute;\n  font-weight: 400;\n  font-size: 12px;\n  top: 53%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover:before {\n  background-color: #000;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover i.fas {\n  color: #fff;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n\n.link-facebook {\n  padding: 6px 0 0 7.5px;\n}\n\n.link-youtube {\n  padding: 5px 0 0 3.5px;\n}\n\n.link-linkedin {\n  padding: 5px 0 0 6px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-nav__item {\n  margin-right: 10px;\n}\n.footer-nav__link:hover {\n  color: rgb(136, 136, 136);\n}\n\n.footer-rights {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 6px;\n  margin-bottom: 5px;\n}\n\n.footer-slogan {\n  font-size: 12px;\n}\n\n.btn {\n  width: 25%;\n  height: 60px;\n  border: 1px solid #3c3939;\n  padding: 15px 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #000;\n  color: #fff;\n}\n.btn:active {\n  transform: scaleY(0.95);\n}\n\n.solutions-home {\n  height: 100vh;\n  width: 100%;\n  padding: 16% 0 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: -70px;\n}\n.solutions-home__content {\n  width: 70%;\n  margin: 0 auto;\n}\n.solutions-home__title {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: rgba(0, 0, 0, 0.85);\n}\n.solutions-home__text {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 36px;\n  letter-spacing: 10px;\n  margin-bottom: 50px;\n  font-weight: 600;\n}\n.solutions-home__text-small {\n  font-size: 22px;\n}\n.solutions-home__buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.solutions-home__button {\n  width: 21%;\n  height: 38px;\n  padding: 0;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 2px;\n}\n\n.stockm-optimization {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #fff;\n  padding: 3%;\n  text-align: center;\n}\n.stockm-optimization__title {\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.stockm-optimization__text {\n  margin: 0 auto;\n  font-size: 16px;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\n.solutions-dbm {\n  min-height: 450px;\n  width: 100%;\n  padding: 0 15%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.dbm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 50%;\n  gap: 25px 0;\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.dbm__title {\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n.dbm__text {\n  font-size: 16px;\n}\n.dbm__image {\n  margin-top: -90px;\n}\n.dbm__details-btn {\n  height: 40px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  width: 30%;\n  padding: 0;\n  border-radius: 3px;\n  color: #000;\n  font-weight: 400;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: none;\n}\n.dbm__details-btn:hover {\n  background-color: #fff;\n  color: #000;\n}\n.dbm__details-btn:active {\n  transform: scale(0.97);\n}\n\n.automatization {\n  width: 100%;\n  padding: 70px 20px;\n  background-color: #ffffff;\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\n}\n.automatization__title {\n  margin: 0 auto 20px;\n  font-size: 40px;\n  font-weight: 600;\n  text-align: center;\n}\n.automatization__subtitle {\n  margin: 0 auto 75px;\n  font-size: 26px;\n  font-weight: 500;\n  text-align: center;\n}\n.automatization__container {\n  width: 90%;\n  max-width: 1536px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  justify-content: center;\n  justify-items: center;\n  gap: 50px;\n}\n.automatization__item {\n  border-radius: 20px;\n  border: 1px solid grey;\n  background-color: #fff;\n  width: 100%;\n  height: 100%;\n  max-width: 670px;\n  max-height: 480px;\n  aspect-ratio: 1;\n  transition: transform 0.15s ease-in;\n}\n.automatization__item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0px 0px 25px -10px grey;\n  transition: transform 0.15s ease-in;\n}\n.automatization__item-title {\n  height: 25%;\n  padding: 25px 25px 0;\n  font-size: 20px;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.automatization__item-text {\n  padding: 20px;\n  text-indent: 30px;\n  font-size: 16px;\n  line-height: 1.8;\n  background-color: #fff;\n  border-bottom-left-radius: 15px;\n  border-top-right-radius: 15px;\n}", "",{"version":3,"sources":["webpack://./src/styles/solutions.scss","webpack://./src/libs/reset.css","webpack://./src/styles/util.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"../libs/reset\";\r\n@import \"./util\";\r\n\r\n.solutions-home {\r\n  height: 100vh;\r\n  width: 100%;\r\n  padding: 16% 0 0;\r\n  background-image: url(\"../assets/solutions-home-bg.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position-y: -70px;\r\n\r\n  &__content {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.5px;\r\n    color: rgba(0, 0, 0, 0.85);\r\n  }\r\n\r\n  &__text {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 36px;\r\n    letter-spacing: 10px;\r\n    margin-bottom: 50px;\r\n    font-weight: 600;\r\n  }\r\n\r\n  &__text-small {\r\n    font-size: 22px;\r\n  }\r\n\r\n  &__buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  &__button {\r\n    width: 21%;\r\n    height: 38px;\r\n    padding: 0;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    letter-spacing: 2px;\r\n  }\r\n}\r\n\r\n.stockm-optimization {\r\n  width: 100%;\r\n  height: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  padding: 3%;\r\n  text-align: center;\r\n\r\n  &__title {\r\n    margin: 0 auto;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    margin-bottom: 15px;\r\n    letter-spacing: 1.5px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__text {\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n  }\r\n}\r\n\r\n.solutions-dbm {\r\n  min-height: 450px;\r\n  width: 100%;\r\n  padding: 0 15%;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\r\n    url(\"../assets/bg-parallax.jpg\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.dbm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  width: 50%;\r\n  gap: 25px 0;\r\n  font-size: 17px;\r\n  color: rgba(255, 255, 255, 0.9);\r\n\r\n  &__title {\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 16px;\r\n  }\r\n\r\n  &__image {\r\n    margin-top: -90px;\r\n  }\r\n\r\n  &__details-btn {\r\n    height: 40px;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    width: 30%;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    color: #000;\r\n    font-weight: 400;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    border: none;\r\n\r\n    &:hover {\r\n      background-color: #fff;\r\n      color: #000;\r\n    }\r\n\r\n    &:active {\r\n      transform: scale(0.97);\r\n    }\r\n  }\r\n}\r\n\r\n.automatization {\r\n  width: 100%;\r\n  padding: 70px 20px;\r\n  background-color: #ffffff;\r\n    background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\r\n\r\n  &__title {\r\n    margin: 0 auto 20px;\r\n    font-size: 40px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n  }\r\n\r\n  &__subtitle {\r\n    margin: 0 auto 75px;\r\n    font-size: 26px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n  }\r\n\r\n  &__container {\r\n    width: 90%;\r\n    max-width: 1536px;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    // grid-template-columns: minmax(200px, 48%) minmax(200px, 48%);\r\n    // grid-template-rows: minmax(200px, 48%) minmax(200px, 48%);\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    gap: 50px;\r\n  }\r\n\r\n  &__item {\r\n    border-radius: 20px;\r\n    border: 1px solid grey;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 670px;\r\n    max-height: 480px;\r\n    aspect-ratio: 1;\r\n    transition: transform 0.15s ease-in;\r\n\r\n    &:hover {\r\n      transform: translateY(-5px);\r\n      box-shadow: 0px 0px 25px -10px grey;\r\n      transition: transform 0.15s ease-in;\r\n    }\r\n  }\r\n\r\n  &__item-title {\r\n    height: 25%;\r\n    padding: 25px 25px 0;\r\n    font-size: 20px;\r\n    background-color: #000;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n  }\r\n\r\n  &__item-text {\r\n    padding: 20px;\r\n    text-indent: 30px;\r\n    font-size: 16px;\r\n    line-height: 1.8;\r\n    background-color: #fff;\r\n    border-bottom-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n  }\r\n}\r\n","/***\r\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\r\n    GitHub page: https://github.com/elad2412/the-new-css-reset\r\n***/\r\n\r\n/*\r\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\r\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\r\n */\r\n*:where(\r\n    :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)\r\n  ) {\r\n  all: unset;\r\n  display: revert;\r\n}\r\n\r\n/* Preferred box-sizing value */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Reapply the pointer cursor for anchor tags */\r\na,\r\nbutton {\r\n  cursor: revert;\r\n}\r\n\r\n/* Remove list styles (bullets/numbers) */\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n}\r\n\r\n/* For images to not be able to exceed their container */\r\nimg {\r\n  max-inline-size: 100%;\r\n  max-block-size: 100%;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* removes spacing between cells in tables */\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\r\ninput,\r\ntextarea {\r\n  -webkit-user-select: auto;\r\n}\r\n\r\n/* revert the 'white-space' property for textarea elements on Safari */\r\ntextarea {\r\n  white-space: revert;\r\n}\r\n\r\n/* minimum style to allow to style meter element */\r\nmeter {\r\n  -webkit-appearance: revert;\r\n  -moz-appearance: revert;\r\n       appearance: revert;\r\n}\r\n\r\n/* preformatted text - use only for this feature */\r\npre {\r\n  all: revert;\r\n}\r\n\r\n/* reset default text opacity of input placeholder */\r\n::-webkit-input-placeholder {\r\n  color: unset;\r\n}\r\n::-moz-placeholder {\r\n  color: unset;\r\n}\r\n:-ms-input-placeholder {\r\n  color: unset;\r\n}\r\n::-ms-input-placeholder {\r\n  color: unset;\r\n}\r\n::placeholder {\r\n  color: unset;\r\n}\r\n\r\n/* remove default dot (•) sign */\r\n::marker {\r\n  content: initial;\r\n}\r\n\r\n/* fix the feature of 'hidden' attribute.\r\n   display:revert; revert to element instead of attribute */\r\n:where([hidden]) {\r\n  display: none;\r\n}\r\n\r\n/* revert for bug in Chromium browsers\r\n   - fix for the content editable attribute will work properly.\r\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\r\n:where([contenteditable]:not([contenteditable=\"false\"])) {\r\n  -moz-user-modify: read-write;\r\n  -webkit-user-modify: read-write;\r\n  overflow-wrap: break-word;\r\n  -webkit-line-break: after-white-space;\r\n  -webkit-user-select: auto;\r\n}\r\n\r\n/* apply back the draggable feature - exist only in Chromium and Safari */\r\n:where([draggable=\"true\"]) {\r\n  -webkit-user-drag: element;\r\n}\r\n\r\n/* Revert Modal native behavior */\r\n:where(dialog:modal) {\r\n  all: revert;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n","body {\r\n  font-size: 16px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 12px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  cursor: pointer;\r\n  background: #111;\r\n}\r\n\r\n.page-header {\r\n  width: 100%;\r\n  height: 65px;\r\n  padding: 0 30px;\r\n  background-color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 999;\r\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\r\n}\r\n\r\n.logo {\r\n  &__link {\r\n    display: block;\r\n  }\r\n\r\n  &__image {\r\n    max-height: 50px;\r\n  }\r\n}\r\n\r\n.main-navigation {\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__list-item {\r\n    height: 100%;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  &__link,\r\n  &__language {\r\n    color: #000;\r\n  }\r\n\r\n  &__link:hover,\r\n  &__language:hover {\r\n    color: #727272;\r\n  }\r\n}\r\n\r\n.page-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  padding: 105px 0 60px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-group-one {\r\n  width: 40%;\r\n  padding: 0 5%;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.footer-group-two {\r\n  font-size: 18px;\r\n  color: #000;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.footer-logo,\r\n.footer-social {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.footer-logo {\r\n  width: 35%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.footer-social {\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__link {\r\n    display: block;\r\n    margin: 0 10px;\r\n    position: relative;\r\n    width: 25px;\r\n    height: 25px;\r\n    padding-top: 4px;\r\n    padding-left: 6.2px;\r\n    transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: 1px solid #111;\r\n    border-radius: 2px;\r\n    transform: rotate(45deg);\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link i.fas {\r\n    position: absolute;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    top: 53%;\r\n    left: 48%;\r\n    transform: translate(-50%, -50%);\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:hover:before {\r\n    background-color: #000;\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:hover i.fas {\r\n    color: #fff;\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n}\r\n\r\n.link-facebook {\r\n  padding: 6px 0 0 7.5px;\r\n}\r\n\r\n.link-youtube {\r\n  padding: 5px 0 0 3.5px;\r\n}\r\n\r\n.link-linkedin {\r\n  padding: 5px 0 0 6px;\r\n}\r\n\r\n.footer-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &__item {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  &__link:hover {\r\n    color: rgba(136, 136, 136, 1);\r\n  }\r\n}\r\n\r\n.footer-rights {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  letter-spacing: 6px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.footer-slogan {\r\n  font-size: 12px;\r\n}\r\n\r\n.btn {\r\n  width: 25%;\r\n  height: 60px;\r\n  border: 1px solid #3c3939;\r\n  padding: 15px 20px;\r\n  font-size: 19px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n\r\n  &:hover {\r\n    background-color: #000;\r\n    color: #fff;\r\n  }\r\n\r\n  &:active {\r\n    transform: scaleY(0.95);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/solutions.html":
/*!**********************************!*\
  !*** ./src/pages/solutions.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/stockm-logo.png */ "./src/assets/stockm-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/monitor2.png */ "./src/assets/monitor2.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"uk\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"description\" content=\"???\" />\r\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"#\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"#\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"#\" />\r\n    <link rel=\"manifest\" href=\"#\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n\r\n    <title>Рішення Stock-M</title>\r\n  </head>\r\n  <body>\r\n    <header class=\"page-header\">\r\n      <div class=\"logo\">\r\n        <a class=\"logo__link\" href=\"/\">\r\n          <img class=\"logo__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" />\r\n        </a>\r\n      </div>\r\n      <nav class=\"main-navigation\">\r\n        <ul class=\"main-navigation__list\">\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./about.html\">Про Головне</a>\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./solutions.html\"\r\n              >Рішення Stock-M</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./consulting.html\"\r\n              >Консалтингові послуги</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./clients.html\">Клієнти</a>\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./projects.html\">Проекти</a>\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./events.html\">Події</a>\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./contact.html\">Контакти</a>\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <select class=\"main-navigation__language\" name=\"lang\" id=\"lang\">\r\n              <option value=\"ua\">UA</option>\r\n              <option value=\"eng\">ENG</option>\r\n            </select>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </header>\r\n\r\n    <main>\r\n      <section class=\"solutions-home\">\r\n        <div class=\"solutions-home__content\">\r\n          <h1 class=\"solutions-home__title\">\r\n            Логістичне рішення STOCK-M для управління запасами та збільшення\r\n            прибутку\r\n          </h1>\r\n          <p class=\"solutions-home__text\">\r\n            ЯК ЗАВЖДИ МАТИ ПОТРІБНИЙ ТОВАР<br />\r\n            <span class=\"solutions-home__text-small\"\r\n              >формування та управління асортиментом</span\r\n            >\r\n          </p>\r\n\r\n          <div class=\"solutions-home__buttons\">\r\n            <a href=\"#assort\" class=\"solutions-home__button btn\">\r\n              Управління<br />\r\n              асортиментом\r\n            </a>\r\n            <a href=\"#\" class=\"solutions-home__button btn\">\r\n              Автозамовлення та контроль\r\n            </a>\r\n            <a href=\"#\" class=\"solutions-home__button btn\">\r\n              <!-- buttons    -->\r\n              Аналітика<br />\r\n              та звіти\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"stockm-optimization\">\r\n        <h2 class=\"stockm-optimization__title\">\r\n          ЯК STOCK-M ОПТИМІЗУЄ ЗАПАСИ ТАК, ЩОБ НЕ ВИНИКАЛИ НАДЛИШКИ І НЕ БУЛО\r\n          ВТРАЧЕНИХ ПРОДАЖІВ?\r\n        </h2>\r\n      </section>\r\n\r\n      <section class=\"stockm-optimization\">\r\n        <h2 class=\"stockm-optimization__title\">РОБОТА З АСОРТИМЕНТОМ</h2>\r\n        <p class=\"stockm-optimization__text\">\r\n          ПОТРЕБУЄ ЩОДЕННОГО ДЕТАЛЬНОГО АНАЛІЗУ\r\n        </p>\r\n      </section>\r\n\r\n      <section class=\"solutions-dbm\">\r\n        <div class=\"dbm\">\r\n          <h2 class=\"dbm__title\">\r\n            Динамічне управління буфером (DBM – Dynamic Buffer Management)\r\n          </h2>\r\n          <p class=\"dbm__text\">\r\n            Інструмент управління запасами Stock-M інтегрує одну з\r\n            найпередовіших методологій у світі, яка дозволяє ефективно управляти\r\n            запасами та збільшувати прибуток.\r\n          </p>\r\n          <button class=\"dbm__details-btn btn\">детальніше</button>\r\n        </div>\r\n        <div class=\"dbm__image\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"screenshot\" />\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"assort\" class=\"automatization\">\r\n        <h2 class=\"automatization__title\">РОБОТА З АСОРТИМЕНТОМ</h2>\r\n        <p class=\"automatization__subtitle\">\r\n          ПОТРЕБУЄ ЩОДЕННОГО ДЕТАЛЬНОГО АНАЛІЗУ\r\n        </p>\r\n        <div class=\"automatization__container\">\r\n          <div class=\"automatization__item\">\r\n            <p class=\"automatization__item-title\">\r\n              ЯК АВТОМАТИЗУВАТИ РОБОТУ З АСОРТИМЕНТОМ І НЕ ПЕРЕГЛЯДАТИ МАТРИЦІ\r\n              МАГАЗИНІВ?\r\n            </p>\r\n            <p class=\"automatization__item-text\">\r\n              Кожен sku, який знаходиться на складі чи магазині має свій\r\n              статус:<br />\r\n              - (DTA, distribution to availability) – товар має бути присутній\r\n              на полиці;<br />\r\n              - (DTO, distribution to order) – товар везеться під замовлення;<br />\r\n              Stock-M щодня аналізує кожен товар і слідкує за наявністю в кожній\r\n              точці продажу та зберігання. Автоматично проводить АВС аналіз,\r\n              показує рентабельність і оборотність кожного товару. Залежно від\r\n              категорії магазину, місця розташування, купівельної спроможності\r\n              покупців, в Stock-M автоматично формується матриця певної\r\n              категорії магазину. Автоматизоване формування матриці допомагає\r\n              швидко відкривати нові магазини уже з готовою асортиментною\r\n              матрицею.\r\n            </p>\r\n          </div>\r\n          <div class=\"automatization__item\">\r\n            <p class=\"automatization__item-title\">\r\n              ЯК АВТОМАТИЗУВАТИ ЩОДЕННИЙ АНАЛІЗ АСОРТИМЕНТУ І ВИЗНАЧИТИ, ЯКИЙ\r\n              ТОВАР ПОВИНЕН БУТИ В АСОРТИМЕНТІ, І ЯКОМУ СКАЗАТИ “ПРОЩАВАЙ!”\r\n            </p>\r\n            <p class=\"automatization__item-text\">\r\n              Опираючись на автоматично визначенні показники прибутковості,\r\n              рентабельності, обертовості Stock-M автоматично позначає товари,\r\n              які забезпечують компанії високий прохід (оборот) TOP-movers , а\r\n              також ті, які є претендентами на виведення NON-movers  та надсилає\r\n              звіт з переліком таких товарів. Категорійному менеджеру потрібно\r\n              тільки прийняти рішення щодо подальшої долі цих товарів, адже весь\r\n              аналіз за нього вже зробила система.\r\n            </p>\r\n          </div>\r\n          <div class=\"automatization__item\">\r\n            <p class=\"automatization__item-title\">\r\n              ЯК ЛЕГКО ВИВЕСТИ ТОВАР З АСОРТИМЕНТУ ВСІЄЇ МЕРЕЖІ І ДОРУЧИТИ\r\n              КОНТРОЛЬ ЗА СИТУАЦІЄЮ РОЗУМНІЙ СИСТЕМІ?\r\n            </p>\r\n            <p class=\"automatization__item-text\">\r\n              Коли, категорійним менеджером, прийнято рішення щодо товарів, які\r\n              потрібно вивести з асортименту, достатньо помітити товар як\r\n              OUT-mover. Система сама контролює та слідкує за тим, щоб товари\r\n              більше не замовлялись на центральний склад, продовжували\r\n              розпродаватись з магазинів та складу і після продажу такого товару\r\n              автоматично виключить його з асортименту в точках продажу. Процес\r\n              введення cku в асортимент і виведення з асортименту\r\n              автоматизований, простий і легкий.\r\n            </p>\r\n          </div>\r\n          <div class=\"automatization__item\">\r\n            <p class=\"automatization__item-title\">\r\n              ЯКЩО В АСОРТИМЕНТІ Є ПОДІБНІ ТОВАРИ, ЯКІ МОЖУТЬ ЗАМІНЮВАТИ ОДИН\r\n              ОДНОГО, ЯК НИМИ УПРАВЛЯТИ?\r\n            </p>\r\n            <p class=\"automatization__item-text\">\r\n              В Stock-M є можливість об’єднати такі товари (наприклад, однакові\r\n              товари різних виробників чи кольорів) в групи “альтернативні\r\n              товари” і управляти групою товарів як одним товаром.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </main>\r\n\r\n    <footer class=\"page-footer\">\r\n      <div class=\"footer-group-one\">\r\n        <div class=\"footer-logo\">\r\n          <a class=\"footer-logo__link\" href=\"/\">\r\n            <img\r\n              class=\"footer-logo__image\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"logo\"\r\n            />\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"footer-social\">\r\n          <ul class=\"footer-social__list\">\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-facebook\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-facebook-f social-facebook\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-youtube\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-youtube social-youtube\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-linkedin\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-linkedin-in social-linkedin\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer-group-two\">\r\n        <ul class=\"footer-nav\">\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/about.html\" class=\"footer-nav__link\"\r\n              >Про Головне</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/solutions.html\" class=\"footer-nav__link\"\r\n              >Рішення Stock-M</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./consulting.html\" class=\"footer-nav__link\"\r\n              >Консалтингові Послуги</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./clients.html\" class=\"footer-nav__link\">Клієнти</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./projects.html\" class=\"footer-nav__link\">Проекти</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./events.html\" class=\"footer-nav__link\">Події</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/contact.html\" class=\"footer-nav__link\">Контакти</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"footer-group-three\">\r\n        <p class=\"footer-rights\">© 2023 · STOCK-M.</p>\r\n        <p class=\"footer-slogan\">Lorem ipsum dolor sit amet consectetur.</p>\r\n      </div>\r\n    </footer>\r\n    <!-- ////////////// -->\r\n    <!-- </div> -->\r\n\r\n    <" + "script\r\n      src=\"https://kit.fontawesome.com/2f5f85827b.js\"\r\n      crossorigin=\"anonymous\"\r\n    ><" + "/script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/solutions.scss":
/*!***********************************!*\
  !*** ./src/styles/solutions.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_solutions_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./solutions.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/solutions.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_solutions_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_solutions_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_solutions_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_solutions_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bg-parallax.jpg":
/*!************************************!*\
  !*** ./src/assets/bg-parallax.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bg-parallax.jpg";

/***/ }),

/***/ "./src/assets/monitor2.png":
/*!*********************************!*\
  !*** ./src/assets/monitor2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/monitor2.png";

/***/ }),

/***/ "./src/assets/solutions-home-bg.jpg":
/*!******************************************!*\
  !*** ./src/assets/solutions-home-bg.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/solutions-home-bg.jpg";

/***/ }),

/***/ "./src/assets/stockm-logo.png":
/*!************************************!*\
  !*** ./src/assets/stockm-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/stockm-logo.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"solutions": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/scripts/solutions.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_solutions_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/solutions.html */ "./src/pages/solutions.html");
/* harmony import */ var _styles_solutions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/solutions.scss */ "./src/styles/solutions.scss");



// import {scrollToTop, showMobileNav, hideMobileNav, highlightActivePage, links} from '../modules/util';
// window.addEventListener('scroll', scrollToTop);

// const mobNavBtn = document.querySelector(".mobile-menu-btn");
// const mobLinks = document.querySelectorAll(".mobile-navigation__link");

// links.forEach(link => highlightActivePage(link));

// mobNavBtn.addEventListener("click", showMobileNav);

// mobLinks.forEach(function (link) {
//   link.addEventListener("click", hideMobileNav);
// });

// const vid = document.querySelector("video");

// const videoControlsHandler = (event) => {
//   if (event.type === "mouseover") {
//     event.target.setAttribute("controls", "");
//   } else if (event.type === "mouseleave") {
//     event.target.removeAttribute("controls");
//   }
// };
// vid.addEventListener("mouseover", videoControlsHandler);

// vid.addEventListener("mouseleave", videoControlsHandler);
})();

/******/ })()
;
//# sourceMappingURL=solutions.f246016501e0ea1296a9.js.map