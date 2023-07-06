/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/swiper.js?f38f":
/*!*******************************!*\
  !*** ./src/modules/swiper.js ***!
  \*******************************/
/***/ (() => {

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  edgeSwipeThreshold: 30,
  autoplay: {
    delay: 3000
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg-parallax.jpg */ "./src/assets/bg-parallax.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/***\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-webkit-input-placeholder {\n  color: unset;\n}\n\n::-moz-placeholder {\n  color: unset;\n}\n\n:-ms-input-placeholder {\n  color: unset;\n}\n\n::-ms-input-placeholder {\n  color: unset;\n}\n\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  background: #111;\n}\n\n.page-header {\n  width: 100%;\n  height: 65px;\n  padding: 0 30px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\n}\n\n.logo__link {\n  display: block;\n}\n.logo__image {\n  max-height: 50px;\n}\n\n.main-navigation__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.main-navigation__list-item {\n  height: 100%;\n  padding: 0 15px;\n}\n.main-navigation__link, .main-navigation__language {\n  color: #000;\n}\n.main-navigation__link:hover, .main-navigation__language:hover {\n  color: #727272;\n}\n\n.page-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 105px 0 60px;\n  text-align: center;\n}\n\n.footer-group-one {\n  width: 40%;\n  padding: 0 5%;\n  margin-bottom: 45px;\n}\n\n.footer-group-two {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 70px;\n}\n\n.footer-logo,\n.footer-social {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.footer-logo {\n  width: 35%;\n  margin-bottom: 30px;\n}\n\n.footer-social__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-social__link {\n  display: block;\n  margin: 0 10px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-top: 4px;\n  padding-left: 6.2px;\n  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #111;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link i.fas {\n  position: absolute;\n  font-weight: 400;\n  font-size: 12px;\n  top: 53%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover:before {\n  background-color: #000;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover i.fas {\n  color: #fff;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n\n.link-facebook {\n  padding: 6px 0 0 7.5px;\n}\n\n.link-youtube {\n  padding: 5px 0 0 3.5px;\n}\n\n.link-linkedin {\n  padding: 5px 0 0 6px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-nav__item {\n  margin-right: 10px;\n}\n.footer-nav__link:hover {\n  color: rgb(136, 136, 136);\n}\n\n.footer-rights {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 6px;\n  margin-bottom: 5px;\n}\n\n.footer-slogan {\n  font-size: 12px;\n}\n\n.btn {\n  width: 25%;\n  height: 60px;\n  border: 1px solid #3c3939;\n  padding: 15px 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #000;\n  color: #fff;\n}\n.btn:active {\n  transform: scaleY(0.95);\n}\n\n/***\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-webkit-input-placeholder {\n  color: unset;\n}\n\n::-moz-placeholder {\n  color: unset;\n}\n\n:-ms-input-placeholder {\n  color: unset;\n}\n\n::-ms-input-placeholder {\n  color: unset;\n}\n\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  background: #111;\n}\n\n.page-header {\n  width: 100%;\n  height: 65px;\n  padding: 0 30px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\n}\n\n.logo__link {\n  display: block;\n}\n.logo__image {\n  max-height: 50px;\n}\n\n.main-navigation__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.main-navigation__list-item {\n  height: 100%;\n  padding: 0 15px;\n}\n.main-navigation__link, .main-navigation__language {\n  color: #000;\n}\n.main-navigation__link:hover, .main-navigation__language:hover {\n  color: #727272;\n}\n\n.page-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 105px 0 60px;\n  text-align: center;\n}\n\n.footer-group-one {\n  width: 40%;\n  padding: 0 5%;\n  margin-bottom: 45px;\n}\n\n.footer-group-two {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 70px;\n}\n\n.footer-logo,\n.footer-social {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.footer-logo {\n  width: 35%;\n  margin-bottom: 30px;\n}\n\n.footer-social__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-social__link {\n  display: block;\n  margin: 0 10px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-top: 4px;\n  padding-left: 6.2px;\n  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #111;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link i.fas {\n  position: absolute;\n  font-weight: 400;\n  font-size: 12px;\n  top: 53%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover:before {\n  background-color: #000;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover i.fas {\n  color: #fff;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n\n.link-facebook {\n  padding: 6px 0 0 7.5px;\n}\n\n.link-youtube {\n  padding: 5px 0 0 3.5px;\n}\n\n.link-linkedin {\n  padding: 5px 0 0 6px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-nav__item {\n  margin-right: 10px;\n}\n.footer-nav__link:hover {\n  color: rgb(136, 136, 136);\n}\n\n.footer-rights {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 6px;\n  margin-bottom: 5px;\n}\n\n.footer-slogan {\n  font-size: 12px;\n}\n\n.btn {\n  width: 25%;\n  height: 60px;\n  border: 1px solid #3c3939;\n  padding: 15px 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #000;\n  color: #fff;\n}\n.btn:active {\n  transform: scaleY(0.95);\n}\n\n.home-about {\n  height: 100vh;\n  width: 100%;\n  padding: 0;\n  position: relative;\n}\n.home-about__video {\n  width: 100%;\n  height: 100vh;\n  -o-object-fit: fill;\n  object-fit: fill;\n}\n.home-about__title {\n  width: 100%;\n  text-indent: 40px;\n  font-size: 48px;\n  font-weight: 500;\n  line-height: 1.3;\n  text-align: center;\n  position: absolute;\n  top: 250px;\n  left: 0;\n  color: #fff;\n}\n\n.representation {\n  width: 100%;\n  padding: 100px 20px;\n  background-color: #ffffff;\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\n}\n.representation__text {\n  margin: 0 auto 10px;\n  width: 65%;\n  max-width: 1536px;\n  font-size: 24px;\n  font-weight: 400;\n  color: #000;\n  text-align: justify;\n  text-indent: 40px;\n}\n\n.home-clients-projects {\n  width: 100%;\n  height: 100%;\n  padding-bottom: 50px;\n  border-bottom: 2px solid rgba(136, 136, 136, 0.15);\n}\n\n.home-clients {\n  margin-bottom: 50px;\n}\n.home-clients__link-container {\n  width: 100%;\n  height: 200px;\n  background-color: #111;\n  padding-top: 45px;\n  margin-bottom: 70px;\n  text-align: center;\n}\n.home-clients__title {\n  font-size: 26px;\n  font-weight: 300;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 32px;\n  color: #fff;\n}\n.home-clients__link.btn {\n  display: block;\n  margin: 0 auto;\n  padding: 9px 0px 0;\n  width: 235px;\n  height: 40px;\n  font-size: 14px;\n  letter-spacing: 1px;\n  font-weight: 300;\n  color: #000;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.home-clients__link.btn:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.home-clients__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n}\n.home-clients__list-item {\n  height: 100px;\n  max-height: 100px;\n}\n.home-clients__list-item img {\n  transition: all 0.5s ease;\n}\n.home-clients__list-item img:hover {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-projects {\n  margin-bottom: 50px;\n}\n.home-projects__title {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 50px;\n}\n.home-projects__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 100px;\n}\n.home-projects__list-item {\n  height: 120px;\n  max-height: 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0;\n}\n.home-projects__list-item img {\n  height: 65px;\n  transition: all 0.5s ease;\n}\n.home-projects__list-item:hover img {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-all-clients__title {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 50px;\n}\n\n.btn.client-btn {\n  width: 120px;\n  height: auto;\n  padding: 5px 0;\n  font-size: 14px;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.btn.client-btn:hover {\n  background-color: #111;\n  color: #fff;\n}\n\n.swiper {\n  width: 75%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.swiper-slide__image-container {\n  max-height: 120px;\n  height: 120px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-slide__image-container img {\n  max-height: 100px;\n  height: auto;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.swiper-slide__image-container:hover img {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-services {\n  width: 100%;\n  height: 100%;\n  padding: 70px 0;\n  text-align: center;\n}\n.home-services__title {\n  font-size: 40px;\n  font-weight: 300;\n  margin-bottom: 4%;\n}\n.home-services__tab {\n  display: flex;\n  flex-wrap: wrap;\n  width: 70%;\n  height: 100%;\n  margin: 0 auto;\n}\n.home-services__tab-label {\n  font-size: 18px;\n  letter-spacing: 2.5px;\n  margin: 0 auto 40px;\n  cursor: pointer;\n  color: grey;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n.home-services__tab-tab {\n  display: none;\n  width: 100%;\n  order: 1;\n  flex-wrap: wrap;\n}\n.home-services__tab-content {\n  flex-basis: 100%;\n}\n.home-services__tab-content:nth-child(n+2) {\n  flex-basis: 32.5%;\n  text-align: left;\n}\n.home-services__tab-content:nth-child(n+2)::first-line {\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 2;\n}\n.home-services__tab-content:nth-child(2) {\n  font-size: 19px;\n}\n.home-services__tab-content:first-of-type {\n  font-weight: 600;\n  font-size: 20px;\n  text-align: justify;\n  margin-bottom: 20px;\n}\n\ni.icon {\n  display: block;\n  margin-bottom: 30px;\n  font-size: 50px;\n  color: grey;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n\n.home-services__tab-label:hover,\n.home-services__tab-label:hover i.icon {\n  color: #111;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n\n.home-services__tab-input:checked + label.home-services__tab-label + div.home-services__tab-tab {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.home-services__tab-input:checked + label.home-services__tab-label,\n.home-services__tab-input:checked + label.home-services__tab-label > i.icon {\n  color: #111;\n}\n\n.home-contact {\n  width: 100%;\n  height: 200px;\n  background-color: #111;\n  padding-top: 50px;\n  text-align: center;\n}\n.home-contact__title {\n  font-size: 24px;\n  font-weight: 300;\n  color: #fff;\n  margin-bottom: 25px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.home-contact__link {\n  display: block;\n  margin: 0 auto;\n  padding: 9px 0px 0;\n  width: 235px;\n  height: 40px;\n  font-size: 14px;\n  letter-spacing: 1px;\n  font-weight: 300;\n  color: #000;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.home-contact__link:hover {\n  background-color: rgba(17, 17, 17, 0.7);\n}\n\n.home-team {\n  width: 100%;\n  padding: 70px 20px 100px;\n}\n\n.team-title {\n  margin: 0 auto 50px;\n  font-size: 42px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.team-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0px 25px;\n  text-align: center;\n}\n\n.team-slide {\n  position: relative;\n}\n.team-slide__photo {\n  display: block;\n  margin-bottom: 30px;\n  max-height: 450px;\n}\n.team-slide__text-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 450px;\n  padding-top: 30%;\n  color: #777;\n  background: rgba(255, 255, 255, 0.93);\n  transition: all 0.35s cubic-bezier(0, 0, 0.58, 1);\n  opacity: 0;\n}\n.team-slide__text-title {\n  font-size: 18px;\n  letter-spacing: 2px;\n  margin: 0 auto 25px;\n}\n.team-slide__title {\n  font-size: 16px;\n  font-weight: 400;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n.team-slide__text-text {\n  font-size: 14px;\n  line-height: 1.7;\n  width: 85%;\n  margin: 0 auto;\n}\n\n.team-slide:hover .team-slide__text-container {\n  opacity: 1;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.home-stockm {\n  min-height: 450px;\n  width: 100%;\n  padding: 0 15%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.stockm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 50%;\n  gap: 25px 0;\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.stockm__title {\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n.stockm__text {\n  font-size: 15px;\n}\n.stockm__image img {\n  margin-top: -90px;\n}\n.stockm__more-btn {\n  height: 40px;\n  font-size: 13px;\n  letter-spacing: 1px;\n  width: 30%;\n  padding: 0;\n  border-radius: 3px;\n  color: #000;\n  font-weight: 400;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: none;\n}\n.stockm__more-btn:hover {\n  background-color: #fff;\n  color: #000;\n}\n.stockm__more-btn:active {\n  transform: scale(0.97);\n}\n\n.home-be-partners {\n  width: 100%;\n  padding: 4% 10% 5%;\n  background-color: #ffffff;\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\n}\n\n.be-partners__title {\n  font-size: 34px;\n  font-weight: 400;\n  margin-bottom: 30px;\n  text-align: center;\n}\n.be-partners__text {\n  font-size: 30px;\n  font-weight: 300;\n  text-align: justify;\n  text-indent: 40px;\n}", "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/libs/reset.css","webpack://./src/styles/util.scss","webpack://./src/styles/homepage.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/***\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-webkit-input-placeholder {\n  color: unset;\n}\n\n::-moz-placeholder {\n  color: unset;\n}\n\n:-ms-input-placeholder {\n  color: unset;\n}\n\n::-ms-input-placeholder {\n  color: unset;\n}\n\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  background: #111;\n}\n\n.page-header {\n  width: 100%;\n  height: 65px;\n  padding: 0 30px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\n}\n\n.logo__link {\n  display: block;\n}\n.logo__image {\n  max-height: 50px;\n}\n\n.main-navigation__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.main-navigation__list-item {\n  height: 100%;\n  padding: 0 15px;\n}\n.main-navigation__link, .main-navigation__language {\n  color: #000;\n}\n.main-navigation__link:hover, .main-navigation__language:hover {\n  color: #727272;\n}\n\n.page-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 105px 0 60px;\n  text-align: center;\n}\n\n.footer-group-one {\n  width: 40%;\n  padding: 0 5%;\n  margin-bottom: 45px;\n}\n\n.footer-group-two {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 70px;\n}\n\n.footer-logo,\n.footer-social {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.footer-logo {\n  width: 35%;\n  margin-bottom: 30px;\n}\n\n.footer-social__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-social__link {\n  display: block;\n  margin: 0 10px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-top: 4px;\n  padding-left: 6.2px;\n  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #111;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link i.fas {\n  position: absolute;\n  font-weight: 400;\n  font-size: 12px;\n  top: 53%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover:before {\n  background-color: #000;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover i.fas {\n  color: #fff;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n\n.link-facebook {\n  padding: 6px 0 0 7.5px;\n}\n\n.link-youtube {\n  padding: 5px 0 0 3.5px;\n}\n\n.link-linkedin {\n  padding: 5px 0 0 6px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-nav__item {\n  margin-right: 10px;\n}\n.footer-nav__link:hover {\n  color: rgb(136, 136, 136);\n}\n\n.footer-rights {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 6px;\n  margin-bottom: 5px;\n}\n\n.footer-slogan {\n  font-size: 12px;\n}\n\n.btn {\n  width: 25%;\n  height: 60px;\n  border: 1px solid #3c3939;\n  padding: 15px 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #000;\n  color: #fff;\n}\n.btn:active {\n  transform: scaleY(0.95);\n}\n\n/***\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na,\nbutton {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-webkit-input-placeholder {\n  color: unset;\n}\n\n::-moz-placeholder {\n  color: unset;\n}\n\n:-ms-input-placeholder {\n  color: unset;\n}\n\n::-ms-input-placeholder {\n  color: unset;\n}\n\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  background: #111;\n}\n\n.page-header {\n  width: 100%;\n  height: 65px;\n  padding: 0 30px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\n}\n\n.logo__link {\n  display: block;\n}\n.logo__image {\n  max-height: 50px;\n}\n\n.main-navigation__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.main-navigation__list-item {\n  height: 100%;\n  padding: 0 15px;\n}\n.main-navigation__link, .main-navigation__language {\n  color: #000;\n}\n.main-navigation__link:hover, .main-navigation__language:hover {\n  color: #727272;\n}\n\n.page-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  padding: 105px 0 60px;\n  text-align: center;\n}\n\n.footer-group-one {\n  width: 40%;\n  padding: 0 5%;\n  margin-bottom: 45px;\n}\n\n.footer-group-two {\n  font-size: 18px;\n  color: #000;\n  margin-bottom: 70px;\n}\n\n.footer-logo,\n.footer-social {\n  width: 50%;\n  margin: 0 auto;\n}\n\n.footer-logo {\n  width: 35%;\n  margin-bottom: 30px;\n}\n\n.footer-social__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-social__link {\n  display: block;\n  margin: 0 10px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  padding-top: 4px;\n  padding-left: 6.2px;\n  transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:before {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #111;\n  border-radius: 2px;\n  transform: rotate(45deg);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link i.fas {\n  position: absolute;\n  font-weight: 400;\n  font-size: 12px;\n  top: 53%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover:before {\n  background-color: #000;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n.footer-social__link:hover i.fas {\n  color: #fff;\n  transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\n}\n\n.link-facebook {\n  padding: 6px 0 0 7.5px;\n}\n\n.link-youtube {\n  padding: 5px 0 0 3.5px;\n}\n\n.link-linkedin {\n  padding: 5px 0 0 6px;\n}\n\n.footer-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.footer-nav__item {\n  margin-right: 10px;\n}\n.footer-nav__link:hover {\n  color: rgb(136, 136, 136);\n}\n\n.footer-rights {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 6px;\n  margin-bottom: 5px;\n}\n\n.footer-slogan {\n  font-size: 12px;\n}\n\n.btn {\n  width: 25%;\n  height: 60px;\n  border: 1px solid #3c3939;\n  padding: 15px 20px;\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background-color: #000;\n  color: #fff;\n}\n.btn:active {\n  transform: scaleY(0.95);\n}\n\n.home-about {\n  height: 100vh;\n  width: 100%;\n  padding: 0;\n  position: relative;\n}\n.home-about__video {\n  width: 100%;\n  height: 100vh;\n  -o-object-fit: fill;\n  object-fit: fill;\n}\n.home-about__title {\n  width: 100%;\n  text-indent: 40px;\n  font-size: 48px;\n  font-weight: 500;\n  line-height: 1.3;\n  text-align: center;\n  position: absolute;\n  top: 250px;\n  left: 0;\n  color: #fff;\n}\n\n.representation {\n  width: 100%;\n  padding: 100px 20px;\n  background-color: #ffffff;\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\n}\n.representation__text {\n  margin: 0 auto 10px;\n  width: 65%;\n  max-width: 1536px;\n  font-size: 24px;\n  font-weight: 400;\n  color: #000;\n  text-align: justify;\n  text-indent: 40px;\n}\n\n.home-clients-projects {\n  width: 100%;\n  height: 100%;\n  padding-bottom: 50px;\n  border-bottom: 2px solid rgba(136, 136, 136, 0.15);\n}\n\n.home-clients {\n  margin-bottom: 50px;\n}\n.home-clients__link-container {\n  width: 100%;\n  height: 200px;\n  background-color: #111;\n  padding-top: 45px;\n  margin-bottom: 70px;\n  text-align: center;\n}\n.home-clients__title {\n  font-size: 26px;\n  font-weight: 300;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 32px;\n  color: #fff;\n}\n.home-clients__link.btn {\n  display: block;\n  margin: 0 auto;\n  padding: 9px 0px 0;\n  width: 235px;\n  height: 40px;\n  font-size: 14px;\n  letter-spacing: 1px;\n  font-weight: 300;\n  color: #000;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.home-clients__link.btn:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.home-clients__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n}\n.home-clients__list-item {\n  height: 100px;\n  max-height: 100px;\n}\n.home-clients__list-item img {\n  transition: all 0.5s ease;\n}\n.home-clients__list-item img:hover {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-projects {\n  margin-bottom: 50px;\n}\n.home-projects__title {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 50px;\n}\n.home-projects__list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 100px;\n}\n.home-projects__list-item {\n  height: 120px;\n  max-height: 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0;\n}\n.home-projects__list-item img {\n  height: 65px;\n  transition: all 0.5s ease;\n}\n.home-projects__list-item:hover img {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-all-clients__title {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 50px;\n}\n\n.btn.client-btn {\n  width: 120px;\n  height: auto;\n  padding: 5px 0;\n  font-size: 14px;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.btn.client-btn:hover {\n  background-color: #111;\n  color: #fff;\n}\n\n.swiper {\n  width: 75%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.swiper-slide__image-container {\n  max-height: 120px;\n  height: 120px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-slide__image-container img {\n  max-height: 100px;\n  height: auto;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.swiper-slide__image-container:hover img {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.home-services {\n  width: 100%;\n  height: 100%;\n  padding: 70px 0;\n  text-align: center;\n}\n.home-services__title {\n  font-size: 40px;\n  font-weight: 300;\n  margin-bottom: 4%;\n}\n.home-services__tab {\n  display: flex;\n  flex-wrap: wrap;\n  width: 70%;\n  height: 100%;\n  margin: 0 auto;\n}\n.home-services__tab-label {\n  font-size: 18px;\n  letter-spacing: 2.5px;\n  margin: 0 auto 40px;\n  cursor: pointer;\n  color: grey;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n.home-services__tab-tab {\n  display: none;\n  width: 100%;\n  order: 1;\n  flex-wrap: wrap;\n}\n.home-services__tab-content {\n  flex-basis: 100%;\n}\n.home-services__tab-content:nth-child(n+2) {\n  flex-basis: 32.5%;\n  text-align: left;\n}\n.home-services__tab-content:nth-child(n+2)::first-line {\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 2;\n}\n.home-services__tab-content:nth-child(2) {\n  font-size: 19px;\n}\n.home-services__tab-content:first-of-type {\n  font-weight: 600;\n  font-size: 20px;\n  text-align: justify;\n  margin-bottom: 20px;\n}\n\ni.icon {\n  display: block;\n  margin-bottom: 30px;\n  font-size: 50px;\n  color: grey;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n\n.home-services__tab-label:hover,\n.home-services__tab-label:hover i.icon {\n  color: #111;\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\n}\n\n.home-services__tab-input:checked + label.home-services__tab-label + div.home-services__tab-tab {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.home-services__tab-input:checked + label.home-services__tab-label,\n.home-services__tab-input:checked + label.home-services__tab-label > i.icon {\n  color: #111;\n}\n\n.home-contact {\n  width: 100%;\n  height: 200px;\n  background-color: #111;\n  padding-top: 50px;\n  text-align: center;\n}\n.home-contact__title {\n  font-size: 24px;\n  font-weight: 300;\n  color: #fff;\n  margin-bottom: 25px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n.home-contact__link {\n  display: block;\n  margin: 0 auto;\n  padding: 9px 0px 0;\n  width: 235px;\n  height: 40px;\n  font-size: 14px;\n  letter-spacing: 1px;\n  font-weight: 300;\n  color: #000;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.home-contact__link:hover {\n  background-color: rgba(17, 17, 17, 0.7);\n}\n\n.home-team {\n  width: 100%;\n  padding: 70px 20px 100px;\n}\n\n.team-title {\n  margin: 0 auto 50px;\n  font-size: 42px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.team-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0px 25px;\n  text-align: center;\n}\n\n.team-slide {\n  position: relative;\n}\n.team-slide__photo {\n  display: block;\n  margin-bottom: 30px;\n  max-height: 450px;\n}\n.team-slide__text-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 450px;\n  padding-top: 30%;\n  color: #777;\n  background: rgba(255, 255, 255, 0.93);\n  transition: all 0.35s cubic-bezier(0, 0, 0.58, 1);\n  opacity: 0;\n}\n.team-slide__text-title {\n  font-size: 18px;\n  letter-spacing: 2px;\n  margin: 0 auto 25px;\n}\n.team-slide__title {\n  font-size: 16px;\n  font-weight: 400;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n.team-slide__text-text {\n  font-size: 14px;\n  line-height: 1.7;\n  width: 85%;\n  margin: 0 auto;\n}\n\n.team-slide:hover .team-slide__text-container {\n  opacity: 1;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n\n.home-stockm {\n  min-height: 450px;\n  width: 100%;\n  padding: 0 15%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(\"./assets/bg-parallax.jpg\");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.stockm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 50%;\n  gap: 25px 0;\n  font-size: 19px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.stockm__title {\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n.stockm__text {\n  font-size: 15px;\n}\n.stockm__image img {\n  margin-top: -90px;\n}\n.stockm__more-btn {\n  height: 40px;\n  font-size: 13px;\n  letter-spacing: 1px;\n  width: 30%;\n  padding: 0;\n  border-radius: 3px;\n  color: #000;\n  font-weight: 400;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: none;\n}\n.stockm__more-btn:hover {\n  background-color: #fff;\n  color: #000;\n}\n.stockm__more-btn:active {\n  transform: scale(0.97);\n}\n\n.home-be-partners {\n  width: 100%;\n  padding: 4% 10% 5%;\n  background-color: #ffffff;\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\n}\n\n.be-partners__title {\n  font-size: 34px;\n  font-weight: 400;\n  margin-bottom: 30px;\n  text-align: center;\n}\n.be-partners__text {\n  font-size: 30px;\n  font-weight: 300;\n  text-align: justify;\n  text-indent: 40px;\n}","/***\r\n    The new CSS reset - version 1.8.3 (last updated 21.1.2023)\r\n    GitHub page: https://github.com/elad2412/the-new-css-reset\r\n***/\r\n\r\n/*\r\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\r\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\r\n */\r\n*:where(\r\n    :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)\r\n  ) {\r\n  all: unset;\r\n  display: revert;\r\n}\r\n\r\n/* Preferred box-sizing value */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Reapply the pointer cursor for anchor tags */\r\na,\r\nbutton {\r\n  cursor: revert;\r\n}\r\n\r\n/* Remove list styles (bullets/numbers) */\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n}\r\n\r\n/* For images to not be able to exceed their container */\r\nimg {\r\n  max-inline-size: 100%;\r\n  max-block-size: 100%;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* removes spacing between cells in tables */\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\r\ninput,\r\ntextarea {\r\n  -webkit-user-select: auto;\r\n}\r\n\r\n/* revert the 'white-space' property for textarea elements on Safari */\r\ntextarea {\r\n  white-space: revert;\r\n}\r\n\r\n/* minimum style to allow to style meter element */\r\nmeter {\r\n  -webkit-appearance: revert;\r\n  -moz-appearance: revert;\r\n       appearance: revert;\r\n}\r\n\r\n/* preformatted text - use only for this feature */\r\npre {\r\n  all: revert;\r\n}\r\n\r\n/* reset default text opacity of input placeholder */\r\n::-webkit-input-placeholder {\r\n  color: unset;\r\n}\r\n::-moz-placeholder {\r\n  color: unset;\r\n}\r\n:-ms-input-placeholder {\r\n  color: unset;\r\n}\r\n::-ms-input-placeholder {\r\n  color: unset;\r\n}\r\n::placeholder {\r\n  color: unset;\r\n}\r\n\r\n/* remove default dot (•) sign */\r\n::marker {\r\n  content: initial;\r\n}\r\n\r\n/* fix the feature of 'hidden' attribute.\r\n   display:revert; revert to element instead of attribute */\r\n:where([hidden]) {\r\n  display: none;\r\n}\r\n\r\n/* revert for bug in Chromium browsers\r\n   - fix for the content editable attribute will work properly.\r\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\r\n:where([contenteditable]:not([contenteditable=\"false\"])) {\r\n  -moz-user-modify: read-write;\r\n  -webkit-user-modify: read-write;\r\n  overflow-wrap: break-word;\r\n  -webkit-line-break: after-white-space;\r\n  -webkit-user-select: auto;\r\n}\r\n\r\n/* apply back the draggable feature - exist only in Chromium and Safari */\r\n:where([draggable=\"true\"]) {\r\n  -webkit-user-drag: element;\r\n}\r\n\r\n/* Revert Modal native behavior */\r\n:where(dialog:modal) {\r\n  all: revert;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n","body {\r\n  font-size: 16px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 12px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  cursor: pointer;\r\n  background: #111;\r\n}\r\n\r\n.page-header {\r\n  width: 100%;\r\n  height: 65px;\r\n  padding: 0 30px;\r\n  background-color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 999;\r\n  box-shadow: 0px -2px 5px 5px rgba(136, 136, 136, 0.8);\r\n}\r\n\r\n.logo {\r\n  &__link {\r\n    display: block;\r\n  }\r\n\r\n  &__image {\r\n    max-height: 50px;\r\n  }\r\n}\r\n\r\n.main-navigation {\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__list-item {\r\n    height: 100%;\r\n    padding: 0 15px;\r\n  }\r\n\r\n  &__link,\r\n  &__language {\r\n    color: #000;\r\n  }\r\n\r\n  &__link:hover,\r\n  &__language:hover {\r\n    color: #727272;\r\n  }\r\n}\r\n\r\n.page-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n  padding: 105px 0 60px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-group-one {\r\n  width: 40%;\r\n  padding: 0 5%;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.footer-group-two {\r\n  font-size: 18px;\r\n  color: #000;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.footer-logo,\r\n.footer-social {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.footer-logo {\r\n  width: 35%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.footer-social {\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__link {\r\n    display: block;\r\n    margin: 0 10px;\r\n    position: relative;\r\n    width: 25px;\r\n    height: 25px;\r\n    padding-top: 4px;\r\n    padding-left: 6.2px;\r\n    transition: all 0.3s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: 1px solid #111;\r\n    border-radius: 2px;\r\n    transform: rotate(45deg);\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link i.fas {\r\n    position: absolute;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    top: 53%;\r\n    left: 48%;\r\n    transform: translate(-50%, -50%);\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:hover:before {\r\n    background-color: #000;\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n\r\n  &__link:hover i.fas {\r\n    color: #fff;\r\n    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);\r\n  }\r\n}\r\n\r\n.link-facebook {\r\n  padding: 6px 0 0 7.5px;\r\n}\r\n\r\n.link-youtube {\r\n  padding: 5px 0 0 3.5px;\r\n}\r\n\r\n.link-linkedin {\r\n  padding: 5px 0 0 6px;\r\n}\r\n\r\n.footer-nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &__item {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  &__link:hover {\r\n    color: rgba(136, 136, 136, 1);\r\n  }\r\n}\r\n\r\n.footer-rights {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  letter-spacing: 6px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.footer-slogan {\r\n  font-size: 12px;\r\n}\r\n\r\n.btn {\r\n  width: 25%;\r\n  height: 60px;\r\n  border: 1px solid #3c3939;\r\n  padding: 15px 20px;\r\n  font-size: 19px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n\r\n  &:hover {\r\n    background-color: #000;\r\n    color: #fff;\r\n  }\r\n\r\n  &:active {\r\n    transform: scaleY(0.95);\r\n  }\r\n}\r\n","@import \"../libs/reset\";\r\n@import \"./util\";\r\n\r\n.home-about {\r\n  height: 100vh;\r\n  width: 100%;\r\n  padding: 0;\r\n  position: relative;\r\n\r\n  &__video {\r\n    width: 100%;\r\n    height: 100vh;\r\n    -o-object-fit: fill;\r\n    object-fit: fill;\r\n  }\r\n\r\n  &__title {\r\n    width: 100%;\r\n    text-indent: 40px;\r\n    font-size: 48px;\r\n    font-weight: 500;\r\n    line-height: 1.3;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 250px;\r\n    left: 0;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.representation {\r\n  width: 100%;\r\n  padding: 100px 20px;\r\n  background-color: #ffffff;\r\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\r\n\r\n  &__text {\r\n    margin: 0 auto 10px;\r\n    width: 65%;\r\n    max-width: 1536px;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    color: #000;\r\n    text-align: justify;\r\n    text-indent: 40px;\r\n  }\r\n}\r\n\r\n.home-clients-projects {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 50px;\r\n  border-bottom: 2px solid rgba(136, 136, 136, 0.15);\r\n}\r\n\r\n.home-clients {\r\n  margin-bottom: 50px;\r\n\r\n  &__link-container {\r\n    width: 100%;\r\n    height: 200px;\r\n    background-color: #111;\r\n    padding-top: 45px;\r\n    margin-bottom: 70px;\r\n    text-align: center;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 26px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin-bottom: 32px;\r\n    color: #fff;\r\n  }\r\n\r\n  &__link.btn {\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: 9px 0px 0;\r\n    width: 235px;\r\n    height: 40px;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    font-weight: 300;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background-color: rgba(255, 255, 255, 0.85);\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 25px;\r\n  }\r\n\r\n  &__list-item {\r\n    height: 100px;\r\n    max-height: 100px;\r\n\r\n    img {\r\n      transition: all 0.5s ease;\r\n\r\n      &:hover {\r\n        transform: scale(1.05);\r\n        transition: all 0.3s ease;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.home-projects {\r\n  margin-bottom: 50px;\r\n\r\n  &__title {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 100px;\r\n  }\r\n\r\n  &__list-item {\r\n    height: 120px;\r\n    max-height: 120px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px 0;\r\n\r\n    img {\r\n      height: 65px;\r\n      transition: all 0.5s ease;\r\n    }\r\n\r\n    &:hover img {\r\n      transform: scale(1.05);\r\n      transition: all 0.3s ease;\r\n    }\r\n  }\r\n}\r\n\r\n.home-all-clients__title {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.btn.client-btn {\r\n  width: 120px;\r\n  height: auto;\r\n  padding: 5px 0;\r\n  font-size: 14px;\r\n  border-radius: 3px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn.client-btn:hover {\r\n  background-color: #111;\r\n  color: #fff;\r\n}\r\n\r\n.swiper {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.swiper-slide {\r\n  &__image-container {\r\n    max-height: 120px;\r\n    height: 120px;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    img {\r\n      max-height: 100px;\r\n      height: auto;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease;\r\n    }\r\n\r\n    &:hover img {\r\n      transform: scale(1.05);\r\n      transition: all 0.3s ease;\r\n    }\r\n  }\r\n}\r\n\r\n.home-services {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 70px 0;\r\n  text-align: center;\r\n\r\n  &__title {\r\n    font-size: 40px;\r\n    font-weight: 300;\r\n    margin-bottom: 4%;\r\n  }\r\n\r\n  &__tab {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 70%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &__tab-label {\r\n    font-size: 18px;\r\n    letter-spacing: 2.5px;\r\n    margin: 0 auto 40px;\r\n    cursor: pointer;\r\n    // color: rgba(17, 17, 17, 0.85);\r\n    color: grey;\r\n    transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\r\n  }\r\n\r\n  &__tab-tab {\r\n    display: none;\r\n    width: 100%;\r\n    order: 1;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  &__tab-content {\r\n    flex-basis: 100%;\r\n\r\n    &:nth-child(n + 2) {\r\n      flex-basis: 32.5%;\r\n      text-align: left;\r\n    }\r\n\r\n    &:nth-child(n + 2)::first-line {\r\n      font-weight: 600;\r\n      font-size: 19px;\r\n      line-height: 2;\r\n    }\r\n\r\n    &:nth-child(2) {\r\n      font-size: 19px;\r\n    }\r\n\r\n    &:first-of-type {\r\n      font-weight: 600;\r\n      font-size: 20px;\r\n      text-align: justify;\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n}\r\n\r\ni.icon {\r\n  display: block;\r\n  margin-bottom: 30px;\r\n  font-size: 50px;\r\n  // color: rgba(17, 17, 17, 0.85);\r\n  color: grey;\r\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\r\n}\r\n\r\n.home-services__tab-label:hover,\r\n.home-services__tab-label:hover i.icon {\r\n  color: #111;\r\n  transition: all 0.25s cubic-bezier(0, 0, 0.58, 1);\r\n}\r\n\r\n.home-services__tab-input:checked\r\n  + label.home-services__tab-label\r\n  + div.home-services__tab-tab {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n}\r\n\r\n.home-services__tab-input:checked + label.home-services__tab-label,\r\n.home-services__tab-input:checked + label.home-services__tab-label > i.icon {\r\n  color: #111;\r\n}\r\n\r\n.home-contact {\r\n  width: 100%;\r\n  height: 200px;\r\n  background-color: #111;\r\n  padding-top: 50px;\r\n  text-align: center;\r\n\r\n  &__title {\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    color: #fff;\r\n    margin-bottom: 25px;\r\n    letter-spacing: 1.5px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__link {\r\n    display: block;\r\n    margin: 0 auto;\r\n    padding: 9px 0px 0;\r\n    width: 235px;\r\n    height: 40px;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    font-weight: 300;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background-color: rgba(17, 17, 17, 0.7);\r\n    }\r\n  }\r\n}\r\n\r\n.home-team {\r\n  width: 100%;\r\n  padding: 70px 20px 100px;\r\n}\r\n\r\n.team-title {\r\n  margin: 0 auto 50px;\r\n  font-size: 42px;\r\n  font-weight: 500;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.team-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0px 25px;\r\n  text-align: center;\r\n}\r\n\r\n.team-slide {\r\n  position: relative;\r\n\r\n  &__photo {\r\n    display: block;\r\n    margin-bottom: 30px;\r\n    max-height: 450px;\r\n  }\r\n\r\n  &__text-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 450px;\r\n    padding-top: 30%;\r\n    color: #777;\r\n    background: rgba(255, 255, 255, 0.93);\r\n    transition: all 0.35s cubic-bezier(0, 0, 0.58, 1);\r\n    opacity: 0;\r\n  }\r\n\r\n  &__text-title {\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n    margin: 0 auto 25px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #888;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n  &__text-text {\r\n    font-size: 14px;\r\n    line-height: 1.7;\r\n    width: 85%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n.team-slide:hover .team-slide__text-container {\r\n  opacity: 1;\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n}\r\n\r\n.home-stockm {\r\n  min-height: 450px;\r\n  width: 100%;\r\n  padding: 0 15%;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\r\n    url(\"./assets/bg-parallax.jpg\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.stockm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  width: 50%;\r\n  gap: 25px 0;\r\n  font-size: 19px;\r\n  color: rgba(255, 255, 255, 0.9);\r\n\r\n  &__title {\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 15px;\r\n  }\r\n\r\n  &__image img {\r\n    margin-top: -90px;\r\n  }\r\n\r\n  &__more-btn {\r\n    height: 40px;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n    width: 30%;\r\n    padding: 0;\r\n    border-radius: 3px;\r\n    color: #000;\r\n    font-weight: 400;\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    border: none;\r\n\r\n    &:hover {\r\n      background-color: #fff;\r\n      color: #000;\r\n    }\r\n\r\n    &:active {\r\n      transform: scale(0.97);\r\n    }\r\n  }\r\n}\r\n\r\n.home-be-partners {\r\n  width: 100%;\r\n  padding: 4% 10% 5%;\r\n  background-color: #ffffff;\r\n  background-image: linear-gradient(109deg, #ffffff 0%, #f7f7f7 96%);\r\n}\r\n\r\n.be-partners {\r\n  &__title {\r\n    font-size: 34px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n  }\r\n\r\n  &__text {\r\n    font-size: 30px;\r\n    font-weight: 300;\r\n    text-align: justify;\r\n    text-indent: 40px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/stockm-logo.png */ "./src/assets/stockm-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video.mp4 */ "./src/assets/video.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/barvinok-logo.png */ "./src/assets/clients-ua/barvinok-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/agromat-logo.svg */ "./src/assets/clients-ua/agromat-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/amstor-logo.png */ "./src/assets/clients-ua/amstor-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/kpi-logo.png */ "./src/assets/clients-ua/kpi-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/igrashky-logo.png */ "./src/assets/clients-ua/igrashky-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/miroplast-logo.png */ "./src/assets/clients-ua/miroplast-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/ekipazh-logo.png */ "./src/assets/clients-ua/ekipazh-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients-ua/shchodnia-logo.svg */ "./src/assets/clients-ua/shchodnia-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/adma-logo.png */ "./src/assets/clients/adma-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/airulista-logo.png */ "./src/assets/clients/airulista-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/BIOK-logo.png */ "./src/assets/clients/BIOK-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/daisena-logo.png */ "./src/assets/clients/daisena-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/domus-lumina-logo.jpeg */ "./src/assets/clients/domus-lumina-logo.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/Entafarma-logo.jpg */ "./src/assets/clients/Entafarma-logo.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/Gerduva-logo.png */ "./src/assets/clients/Gerduva-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/clients/supergarden-logo.png */ "./src/assets/clients/supergarden-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/team/team-1.jpg */ "./src/assets/team/team-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/team/team-2.jpg */ "./src/assets/team/team-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/team/team-3.jpg */ "./src/assets/team/team-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/monitor.png */ "./src/assets/monitor.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/swiper.js */ "./src/modules/swiper.js?5bf2"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var code = "<!DOCTYPE html>\r\n<html lang=\"uk\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"description\" content=\"???\" />\r\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"#\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"#\" />\r\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"#\" />\r\n    <link rel=\"manifest\" href=\"#\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css\"\r\n    />\r\n    <title>STOCK-M Україна</title>\r\n  </head>\r\n  <body>\r\n    <header class=\"page-header\">\r\n      <div class=\"logo\">\r\n        <a class=\"logo__link\" href=\"/\">\r\n          <img class=\"logo__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" />\r\n        </a>\r\n      </div>\r\n      <nav class=\"main-navigation\">\r\n        <ul class=\"main-navigation__list\">\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/about.html\"\r\n              >Про Головне</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/solutions.html\"\r\n              >Рішення Stock-M</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/consulting.html\"\r\n              >Консалтингові послуги</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/clients.html\"\r\n              >Клієнти</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/projects.html\"\r\n              >Проекти</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/events.html\"\r\n              >Події</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <a class=\"main-navigation__link\" href=\"./pages/contact.html\"\r\n              >Контакти</a\r\n            >\r\n          </li>\r\n          <li class=\"main-navigation__list-item\">\r\n            <select class=\"main-navigation__language\" name=\"lang\" id=\"lang\">\r\n              <option value=\"ua\">UA</option>\r\n              <option value=\"eng\">ENG</option>\r\n            </select>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </header>\r\n    <main>\r\n      <section class=\"home-about\">\r\n        <h1 class=\"home-about__title\">\r\n          Ми розробляємо та впроваджуємо<br />\r\n          систему управління запасами i асортиментом \"Stock-M\"<br />\r\n          для всього ланцюга постачання - <br />від виробника продукту<br />\r\n          до постачання в торгову точку\r\n        </h1>\r\n        <video class=\"home-about__video\" autoplay loop muted playsinline>\r\n          <source src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"video/mp4\" />\r\n        </video>\r\n      </section>\r\n\r\n      <section class=\"representation\">\r\n        <p class=\"representation__text\">\r\n          Stock-M Ukraine - представництво європейської компанії Stock-M (Литва)\r\n          в Україні.\r\n        </p>\r\n        <p class=\"representation__text\">\r\n          Це спільний проект України і Литви, завдяки якому, український бізнес\r\n          може швидко зростати та розвиватись, використовуючи досвід управління\r\n          запасами сотень європейських та українських компаній. Отримувати\r\n          консультації від провідних експертів світу іноваційної методології ТОС\r\n          у сфері управління ланцюгами постачання від виробництва продукту до\r\n          продажу кінцевому споживачу.\r\n        </p>\r\n        <p class=\"representation__text\">\r\n          Компанія Stock-M (Литва) на ринку України займається аналізом\r\n          діяльності компаній в сфері управління ланцюгами постачань та\r\n          впровадженням програмного продукту з 2008 року. Сама ж компанія понад\r\n          15 років на європейському ринку, де і досі успішно продовжує працювати\r\n          і розвиватися.\r\n        </p>\r\n        <p class=\"representation__text\">\r\n          В сотнях компаній впровадження рішення Stock-M створило міцний\r\n          фундамент для більш суттєвого росту бізнесу, допомагаючи швидко\r\n          масштабувати бізнес за рахунок власного капіталу, не залучаючи\r\n          кредитні ресурси.\r\n        </p>\r\n        <p class=\"representation__text\">\r\n          Наш клієнт отримує прямий зв'язок із розробником інтелектуальних\r\n          логістичних рішень, тому має найвигідніші умови співпраці, як\r\n          фінансові так і умови технічної підтримки. Ми працюємо поряд з вами\r\n          протягом всього проекту та забезпечуємо післяпроектну підтримку\r\n          безкоштовно та цілодобово.\r\n        </p>\r\n      </section>\r\n\r\n      <section class=\"home-clients-projects\">\r\n        <div class=\"home-clients\">\r\n          <div class=\"home-clients__link-container\">\r\n            <h2 class=\"home-clients__title\">\r\n              Серед перших клієнтів компанії Stock-M в Україні є\r\n            </h2>\r\n            <a href=\"./pages/clients.html\" class=\"home-clients__link btn\"\r\n          >більше</a\r\n        >\r\n          </div>\r\n          \r\n          <ul class=\"home-clients__list\">\r\n            <li class=\"home-clients__list-item\">\r\n              <a\r\n                href=\"https://barvinok.com.ua/\"\r\n                class=\"home-clients__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                  alt=\"Барвінок\"\r\n                />\r\n              </a>\r\n            </li>\r\n            <li class=\"home-clients__list-item\">\r\n              <a\r\n                href=\"https://shop.agromat.ua/\"\r\n                class=\"home-clients__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Агромат\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"home-clients__list-item\">\r\n              <a\r\n                href=\"https://amstor.com.ua/ua/\"\r\n                class=\"home-clients__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Амстор\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"home-clients__list-item\">\r\n              <a\r\n                href=\"https://kpiservice.com.ua/\"\r\n                class=\"home-clients__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"КПІ Сервіс\" />\r\n              </a>\r\n            </li>\r\n            <li class=\"home-clients__list-item\">\r\n              <a\r\n                href=\"https://bi.ua/\"\r\n                class=\"home-clients__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                  alt=\"Будинок Іграшок\"\r\n                />\r\n              </a>\r\n            </li>\r\n            <li class=\"home-clients__list-item\">\r\n              <a href=\"\" class=\"home-clients__link\" target=\"_blank\">\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                  alt=\"Вересень ТОВ\"\r\n                />\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"home-projects\">\r\n          <h2 class=\"home-projects__title\">\r\n            Проекти, над якими ми зараз працюємо\r\n          </h2>\r\n          <ul class=\"home-projects__list\">\r\n            <li class=\"home-projects__list-item\">\r\n              <a\r\n                href=\"https://miroplast.com/ua/\"\r\n                class=\"home-projects__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n                  alt=\"Міропласт\"\r\n                />\r\n              </a>\r\n              <button class=\"btn client-btn\">Кнопка</button>\r\n            </li>\r\n            <li class=\"home-projects__list-item\">\r\n              <a\r\n                href=\"https://oknaekipazh.com.ua/\"\r\n                class=\"home-projects__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\r\n                  alt=\"Вікна Екіпаж\"\r\n                />\r\n              </a>\r\n              <button class=\"btn client-btn\">Кнопка</button>\r\n            </li>\r\n            <li class=\"home-projects__list-item\">\r\n              <a\r\n                href=\"https://shchodnia.com/\"\r\n                class=\"home-projects__link\"\r\n                target=\"_blank\"\r\n              >\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Щодня\" />\r\n              </a>\r\n              <button class=\"btn client-btn\">Кнопка</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"home-all-clients\">\r\n          <h2 class=\"home-all-clients__title\">ВСІ КЛІЄНТИ</h2>\r\n          <!-- Slider main container -->\r\n          <div class=\"swiper\">\r\n            <!-- Additional required wrapper -->\r\n            <div class=\"swiper-wrapper\">\r\n              <!-- Slides -->\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"ADMA\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n                    alt=\"AIRULISTA\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"BIOK\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"DAISENA\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\r\n                    alt=\"DOMUS-LUMINA\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\r\n                    alt=\"ENTAFARMA\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"GERDUVA\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"swiper-slide__image-container\">\r\n                  <img\r\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"\r\n                    alt=\"SUPERGARDEN\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"home-services\">\r\n        <h2 class=\"home-services__title\">Послуги</h2>\r\n\r\n        <div class=\"home-services__tab\">\r\n          <input\r\n            class=\"home-services__tab-input\"\r\n            type=\"radio\"\r\n            name=\"tabs\"\r\n            id=\"service1\"\r\n            checked=\"checked\"\r\n          />\r\n          <label class=\"home-services__tab-label\" for=\"service1\"\r\n            ><i class=\"fas fa-solid fa-magnifying-glass-chart icon\"></i\r\n            >АУДИТ</label\r\n          >\r\n          <div class=\"home-services__tab-tab\">\r\n            <p class=\"home-services__tab-content\">\r\n              Аудит - процес аналізу та пошуку проблем в системі управління\r\n              запасами компанії та визначення причин, що заважають досягати\r\n              визначених результатів.\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Наші клієнти кажуть...<br />\r\n              \"Ми хочемо забезпечити достатню кількість запасів для продажу, але\r\n              не можемо - постійно одних товарів не вистачає, інші змушені\r\n              розпродавати. Чому наша система закупівель не дає бажаного\r\n              результату?\"\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми запитуємо...<br />\r\n              Чи аналізували Ви, яка кількість \"мертвих\" товарів є на складі та\r\n              скільки не вистачило для продажу?<br />\r\n              Ви аналізували, які проблеми є в бізнес-процесах?<br />\r\n              Чи хочете Ви розрахувати, який потенціал має ваша компанія?\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми пропонуємо...<br />\r\n              Аналіз системи управління товарними запасами<br />\r\n              Вивчаємо проблеми в управлінні запасами та причини їх\r\n              виникнення<br />\r\n              Проводимо аналіз бізнес-процесів<br />\r\n              Розраховуємо потенціал компанії\r\n            </p>\r\n          </div>\r\n\r\n          <input\r\n            class=\"home-services__tab-input\"\r\n            type=\"radio\"\r\n            name=\"tabs\"\r\n            id=\"service2\"\r\n          />\r\n          <label class=\"home-services__tab-label\" for=\"service2\"\r\n            ><i class=\"fas fa-solid fa-diagram-project icon\"></i\r\n            >МОДЕЛЮВАННЯ</label\r\n          >\r\n          <div class=\"home-services__tab-tab\">\r\n            <p class=\"home-services__tab-content\">\r\n              Моделювання - це порівняльний аналіз результатів роботи діючої\r\n              системи закупівель на основі реальних даних компанії із\r\n              результатами, які б отримала компанія, якби працювала в системі\r\n              управління запасами та асортиментом Stock-M.\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Наші клієнти кажуть...<br />\r\n              \"Ми не впевнені, що нова система може дати кращий результат. Чи\r\n              можна порівняти результати, які є в компанії зараз із\r\n              результатами, які могли б бути, якби ми працювали зі Stock-M?\"\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми запитуємо...<br />\r\n              Чи хотіли б Ви порівняти, яким є рівень надлишкових запасів?<br />\r\n              Як Ви оцінюєте рівень втрачених продажів в компанії?<br />\r\n              Чи можливо зменшити рівень запасів, при цьому не втративши\r\n              продажі?\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми пропонуємо...<br />\r\n              Моделювання на ваших реальних даних<br />\r\n              Аналізуємо постачання ходового товару за пів року<br />\r\n              Оцінюємо рівень сервісу та залишків<br />\r\n              Проводимо порівняльний аналіз втраченого прибутку та \"заморожених\"\r\n              коштів в товарних запасах\r\n            </p>\r\n          </div>\r\n\r\n          <input\r\n            class=\"home-services__tab-input\"\r\n            type=\"radio\"\r\n            name=\"tabs\"\r\n            id=\"service3\"\r\n          />\r\n          <label class=\"home-services__tab-label\" for=\"service3\"\r\n            ><i class=\"fas fa-solid fa-person-chalkboard icon\"></i\r\n            >ВПРОВАДЖЕННЯ</label\r\n          >\r\n          <div class=\"home-services__tab-tab\">\r\n            <p class=\"home-services__tab-content\">\r\n              Впровадження системи управління запасами Stock-M - це процес\r\n              роботи двох команд, із вивченням бізнес-процесів у компанії,\r\n              пошуком \"вузьких\" місць, що заважають досягати результатів.\r\n              Побудова та впровадження нових правил та процедур для менеджерів,\r\n              клопітка робота по чітко визначеному плану впровадження до\r\n              досягнення конкретних результатів.\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Наші клієнти кажуть...<br />\r\n              \"Ми впроваджували різні системи в компанії, і розуміємо, що\r\n              впровадження не завжди закінчуються досягненням результату. Як\r\n              досягнути результату?\"\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми працюємо разом з вами...<br />\r\n              Якщо визначені результати, яких Ви хочете досягнути...<br />\r\n              Якщо у вашій команді є люди, зацікавлені в результаті...<br />\r\n              Якщо є чіткі наміри іти до досягнення результату...\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми пропонуємо...<br />\r\n              Працюємо разом до отримання результату<br />\r\n              Ділимось досвідом кращих експертів ТОС<br />\r\n              Розробляємо прозорий чіткий план впровадження - кожне завдання має\r\n              свій термін виконання<br />\r\n              Оцінюємо результати поетапно<br />\r\n              Оплата після кожного етапу при досягненні результату\r\n            </p>\r\n          </div>\r\n\r\n          <input\r\n            class=\"home-services__tab-input\"\r\n            type=\"radio\"\r\n            name=\"tabs\"\r\n            id=\"service4\"\r\n          />\r\n          <label class=\"home-services__tab-label\" for=\"service4\"\r\n            ><i class=\"fas fa-solid fa-business-time icon\"></i>СЕРВІС</label\r\n          >\r\n          <div class=\"home-services__tab-tab\">\r\n            <p class=\"home-services__tab-content\">\r\n              Технічну та консультаційну підтримку клієнта забезпечує команда IT\r\n              спеціалістів, керівників проектів та сертифікованих консультантів\r\n              ТОС Литви та України.\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Наші клієнти кажуть...<br />\r\n              \"В процесі роботи із системою часто виникають ситуації, які\r\n              потребують пошуку нових рішень для вирішення проблем. Як\r\n              забезпечує ваша команда підтримку?\"\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми працюємо разом з вами...<br />\r\n              Визначаємо проблему<br />\r\n              Шукаємо причину та напрямки рішення<br />\r\n              Пропонуємо рішення\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми пропонуємо...<br />\r\n              Повна проектна підтримка до завершення проекту<br />\r\n              Безкоштовне надання консультацій<br />\r\n              Безкоштовна післяпроектна підтримка 24/7<br />\r\n              Всі оновлення в системі надаються клієнту безкоштовно\r\n            </p>\r\n          </div>\r\n\r\n          <input\r\n            class=\"home-services__tab-input\"\r\n            type=\"radio\"\r\n            name=\"tabs\"\r\n            id=\"service5\"\r\n          />\r\n          <label class=\"home-services__tab-label\" for=\"service5\"\r\n            ><i class=\"fas fa-solid fa-database icon\"></i>НАВЧАННЯ</label\r\n          >\r\n          <div class=\"home-services__tab-tab\">\r\n            <p class=\"home-services__tab-content\">\r\n              Тренінги, консультації, майстер-класи проводять провідні експерти\r\n              методології ТOC та керівники проектів, які діляться практичним\r\n              досвідом побудови системи управління запасами та асортиментом в\r\n              компаніях по всьому світу.\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Наші клієнти кажуть...<br />\r\n              \"Наш метод замовлення та постачання не забезпечує оптимальний\r\n              рівень запасів так, щоб завжди був потрібний товар в потрібному\r\n              місці і в потрібний час. Який підхід краще використовувати?\"\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми запитуємо...<br />\r\n              Чи хотіли б ви дізнатися, що про управління запасами говорить\r\n              ТОС?<br />\r\n              Чи хочете ви розуміти, які критерії оцінки ми пропонуємо?<br />\r\n              Чи хочете ви порівняті та оцінити, який метод управління запасами\r\n              обрати?\r\n            </p>\r\n            <p class=\"home-services__tab-content\">\r\n              Ми пропонуємо...<br />\r\n              Проведення індивідуальних консультацій<br />\r\n              Корпоративні навчання<br />\r\n              Проведення майстер-класів<br />\r\n              Тренінгів\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"home-contact\">\r\n        <h2 class=\"home-contact__title\">ми проведемо для вас</h2>\r\n        <a href=\"./pages/contact.html\" class=\"home-contact__link btn\"\r\n          >замовити послугу</a\r\n        >\r\n      </section>\r\n\r\n      <section class=\"home-team\">\r\n        <h3 class=\"team-title\">наша команда</h3>\r\n        <div class=\"team-container\">\r\n          <div class=\"team-slide\">\r\n            <img\r\n              class=\"team-slide__photo\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"\r\n              alt=\"керівник представництва\"\r\n            />\r\n            <div class=\"team-slide__text-container\">\r\n              <h4 class=\"team-slide__text-title\">HELLO & WELCOME!</h4>\r\n              <p class=\"team-slide__text-text\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a\r\n                iaculis diam.\r\n              </p>\r\n            </div>\r\n            <h3 class=\"team-slide__title\">Керівник Представництва</h3>\r\n          </div>\r\n\r\n          <div class=\"team-slide\">\r\n            <img\r\n              class=\"team-slide__photo\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"\r\n              alt=\"проектний менеджер\"\r\n            />\r\n            <div class=\"team-slide__text-container\">\r\n              <h4 class=\"team-slide__text-title\">HELLO & WELCOME!</h4>\r\n              <p class=\"team-slide__text-text\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a\r\n                iaculis diam.\r\n              </p>\r\n            </div>\r\n            <h3 class=\"team-slide__title\">Проектний Менеджер</h3>\r\n          </div>\r\n\r\n          <div class=\"team-slide\">\r\n            <img\r\n              class=\"team-slide__photo\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"\r\n              alt=\"проектна підтримка\"\r\n            />\r\n            <div class=\"team-slide__text-container\">\r\n              <h4 class=\"team-slide__text-title\">HELLO & WELCOME!</h4>\r\n              <p class=\"team-slide__text-text\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus, a\r\n                iaculis diam.\r\n              </p>\r\n            </div>\r\n            <h3 class=\"team-slide__title\">Проектна Підтримка</h3>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"home-stockm\">\r\n        <div class=\"stockm\">\r\n          <h2 class=\"stockm__title\">Як управляти запасами ефективно?</h2>\r\n          <p class=\"stockm__text\">\r\n            Простий та зручний інструмент управління запасами Stock-M допоможе\r\n            забезпечити необхідний рівень запасів на складі, автоматично\r\n            формувати замовленнями, управляти акціями та асортиментом.\r\n          </p>\r\n          <button id=\"12\" class=\"stockm__more-btn btn\">дізнатися більше</button>\r\n        </div>\r\n        <div class=\"stockm__image\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"screenshot\" />\r\n        </div>\r\n      </section>\r\n\r\n      <section class=\"home-be-partners\">\r\n        <h2 class=\"be-partners__title\">Ми станемо партнерами</h2>\r\n        <p class=\"be-partners__text\">\r\n          Якщо ви шукаєте нові можливості та масштабний розвиток для своєї\r\n          компанії, напишіть нам. Ми розвиваємо партнерські стосунки з різними\r\n          компаніями: консалтингові компанії, реалізатори інших програмних\r\n          рішень та просто компанії, які хочуть почати свій бізнес в сфері\r\n          проектного менеджменту. Синергія дає хороші результати та комплексні\r\n          переваги для наших партнерів та клієнтів. Ми відкриті до сміливих\r\n          пропозицій та цікавих рішень\r\n        </p>\r\n      </section>\r\n    </main>\r\n\r\n    <section class=\"home-contact\">\r\n      <h2 class=\"home-contact__title\">якщо хочеш стати партнером</h2>\r\n      <a href=\"./pages/contact.html\" class=\"home-contact__link btn\"\r\n        >напиши нам</a\r\n      >\r\n    </section>\r\n\r\n    <footer class=\"page-footer\">\r\n      <div class=\"footer-group-one\">\r\n        <div class=\"footer-logo\">\r\n          <a class=\"footer-logo__link\" href=\"/\">\r\n            <img\r\n              class=\"footer-logo__image\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"logo\"\r\n            />\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"footer-social\">\r\n          <ul class=\"footer-social__list\">\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-facebook\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-facebook-f social-facebook\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-youtube\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-youtube social-youtube\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"footer-social__list-item\">\r\n              <a\r\n                href=\"\"\r\n                class=\"footer-social__link link-linkedin\"\r\n                target=\"_blank\"\r\n              >\r\n                <i class=\"fas fa-brands fa-linkedin-in social-linkedin\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer-group-two\">\r\n        <ul class=\"footer-nav\">\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/about.html\" class=\"footer-nav__link\"\r\n              >Про Головне</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/solutions.html\" class=\"footer-nav__link\"\r\n              >Рішення Stock-M</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/consulting.html\" class=\"footer-nav__link\"\r\n              >Консалтингові Послуги</a\r\n            >\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/clients.html\" class=\"footer-nav__link\">Клієнти</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/projects.html\" class=\"footer-nav__link\">Проекти</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/events.html\" class=\"footer-nav__link\">Події</a>\r\n          </li>\r\n          <li class=\"footer-nav__item\">\r\n            <a href=\"./pages/contact.html\" class=\"footer-nav__link\">Контакти</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"footer-group-three\">\r\n        <p class=\"footer-rights\">© 2023 · STOCK-M.</p>\r\n        <p class=\"footer-slogan\">Lorem ipsum dolor sit amet consectetur.</p>\r\n      </div>\r\n    </footer>\r\n\r\n    <" + "script\r\n      type=\"text/javascript\"\r\n      src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"\r\n    ><" + "/script>\r\n\r\n    <" + "script\r\n      src=\"https://kit.fontawesome.com/2f5f85827b.js\"\r\n      crossorigin=\"anonymous\"\r\n    ><" + "/script>\r\n\r\n    <" + "script defer type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"><" + "/script>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/modules/swiper.js?5bf2":
/*!*******************************!*\
  !*** ./src/modules/swiper.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/swiper.js";

/***/ }),

/***/ "./src/assets/bg-parallax.jpg":
/*!************************************!*\
  !*** ./src/assets/bg-parallax.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-parallax.jpg";

/***/ }),

/***/ "./src/assets/clients-ua/agromat-logo.svg":
/*!************************************************!*\
  !*** ./src/assets/clients-ua/agromat-logo.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/agromat-logo.svg";

/***/ }),

/***/ "./src/assets/clients-ua/amstor-logo.png":
/*!***********************************************!*\
  !*** ./src/assets/clients-ua/amstor-logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/amstor-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/barvinok-logo.png":
/*!*************************************************!*\
  !*** ./src/assets/clients-ua/barvinok-logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/barvinok-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/ekipazh-logo.png":
/*!************************************************!*\
  !*** ./src/assets/clients-ua/ekipazh-logo.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ekipazh-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/igrashky-logo.png":
/*!*************************************************!*\
  !*** ./src/assets/clients-ua/igrashky-logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/igrashky-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/kpi-logo.png":
/*!********************************************!*\
  !*** ./src/assets/clients-ua/kpi-logo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/kpi-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/miroplast-logo.png":
/*!**************************************************!*\
  !*** ./src/assets/clients-ua/miroplast-logo.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/miroplast-logo.png";

/***/ }),

/***/ "./src/assets/clients-ua/shchodnia-logo.svg":
/*!**************************************************!*\
  !*** ./src/assets/clients-ua/shchodnia-logo.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/shchodnia-logo.svg";

/***/ }),

/***/ "./src/assets/clients/BIOK-logo.png":
/*!******************************************!*\
  !*** ./src/assets/clients/BIOK-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/BIOK-logo.png";

/***/ }),

/***/ "./src/assets/clients/Entafarma-logo.jpg":
/*!***********************************************!*\
  !*** ./src/assets/clients/Entafarma-logo.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Entafarma-logo.jpg";

/***/ }),

/***/ "./src/assets/clients/Gerduva-logo.png":
/*!*********************************************!*\
  !*** ./src/assets/clients/Gerduva-logo.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Gerduva-logo.png";

/***/ }),

/***/ "./src/assets/clients/adma-logo.png":
/*!******************************************!*\
  !*** ./src/assets/clients/adma-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/adma-logo.png";

/***/ }),

/***/ "./src/assets/clients/airulista-logo.png":
/*!***********************************************!*\
  !*** ./src/assets/clients/airulista-logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/airulista-logo.png";

/***/ }),

/***/ "./src/assets/clients/daisena-logo.png":
/*!*********************************************!*\
  !*** ./src/assets/clients/daisena-logo.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/daisena-logo.png";

/***/ }),

/***/ "./src/assets/clients/domus-lumina-logo.jpeg":
/*!***************************************************!*\
  !*** ./src/assets/clients/domus-lumina-logo.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/domus-lumina-logo.jpeg";

/***/ }),

/***/ "./src/assets/clients/supergarden-logo.png":
/*!*************************************************!*\
  !*** ./src/assets/clients/supergarden-logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/supergarden-logo.png";

/***/ }),

/***/ "./src/assets/monitor.png":
/*!********************************!*\
  !*** ./src/assets/monitor.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/monitor.png";

/***/ }),

/***/ "./src/assets/stockm-logo.png":
/*!************************************!*\
  !*** ./src/assets/stockm-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/stockm-logo.png";

/***/ }),

/***/ "./src/assets/team/team-1.jpg":
/*!************************************!*\
  !*** ./src/assets/team/team-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/team-1.jpg";

/***/ }),

/***/ "./src/assets/team/team-2.jpg":
/*!************************************!*\
  !*** ./src/assets/team/team-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/team-2.jpg";

/***/ }),

/***/ "./src/assets/team/team-3.jpg":
/*!************************************!*\
  !*** ./src/assets/team/team-3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/team-3.jpg";

/***/ }),

/***/ "./src/assets/video.mp4":
/*!******************************!*\
  !*** ./src/assets/video.mp4 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/video.mp4";

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
/******/ 			"index": 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swiper */ "./src/modules/swiper.js?f38f");
/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_swiper__WEBPACK_IMPORTED_MODULE_2__);




// window.addEventListener('scroll', scrollToTop);

// const mobNavBtn = document.querySelector(".mobile-menu-btn");
// const mobLinks = document.querySelectorAll(".mobile-navigation__link");

// mobNavBtn.addEventListener("click", showMobileNav);

// mobLinks.forEach(function (link) {
//   link.addEventListener("click", hideMobileNav);
// });
})();

/******/ })()
;
//# sourceMappingURL=index.cfb3c860abbc527b5812.js.map