/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../Documents/polices/strasua.otf */ "../../Documents/polices/strasua.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../Documents/polices/Raleway-Black.ttf */ "../../Documents/polices/Raleway-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/1-img-header.jpg */ "./src/assets/images/1-img-header.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 62.5%;
}

body {
  font-family: var(--font-family);
  color: var(--text);
  font-size: 1.6rem;
  width: 100%;
}

/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --font-family-strasua: "strasua";
  --font-family: "Raleway", sans-serif;
  --text: #333;
  --yellow: #efb800;
  --orange: #eb5d0b;
  --pink: #df427e;
  --purple: #803d8f;
  --blue: #009dd7;
  --green: #7cba34;
  --black: #000000;
  --background: #000000;
  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.title {
  font-weight: 700;
  font-size: 3.5rem;
}

.under-title {
  font-size: 2.2rem;
  font-weight: 700;
}

.text {
  color: #333;
  font-weight: 300;
  font-size: 1.8rem;
  margin: 0 2rem;
}

.under-text {
  color: #333;
  font-weight: 300;
  font-size: 1.8rem;
}

.mb-3rem {
  margin-bottom: 3rem;
}

.mb-2rem {
  margin-bottom: 2rem !important;
}

.mt-5rem {
  margin-top: 5rem !important;
}

.mx-2rem {
  margin: 0 2rem !important;
}

.mr-2rem {
  margin-right: 2rem !important;
}

.underline-widget {
  text-decoration: underline;
}

@font-face {
  font-family: "strasua";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(opentype);
}
@font-face {
  font-family: "raleway";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(opentype);
}
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: 100%;
  background: transparent;
  backdrop-filter: blur(10px);
  z-index: 1000;
}
@media (max-width: 480px) {
  header {
    justify-content: space-between;
    background: #000000;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  header {
    justify-content: space-between;
    background: #000000;
  }
}

.header-active {
  background: #000000;
}

.header-logo {
  height: 8rem;
}

.header-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center center;
  background-size: cover;
}

.info-header-content {
  margin-top: 8rem;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.elem-info-header {
  margin: 4rem;
}
@media (max-width: 480px) {
  .elem-info-header {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .elem-info-header {
    margin: 2rem;
  }
}

h1 {
  color: white;
  font-size: 5rem;
}
@media (max-width: 480px) {
  h1 {
    font-size: 4rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  h1 {
    font-size: 4rem;
  }
}

h2 {
  font-size: 3rem;
  background: linear-gradient(to right, var(--yellow), var(--orange), var(--purple), var(--blue), var(--green));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.container-link-header-info {
  display: flex;
  height: auto;
}
@media (max-width: 480px) {
  .container-link-header-info {
    flex-direction: column;
  }
}

.link-header-info {
  height: 5rem;
  width: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.2rem;
  margin: 0 5rem;
  border: solid 2px white;
  border-radius: 1rem;
  transition: 1s font-size;
}
@media (max-width: 480px) {
  .link-header-info {
    margin: 2rem 0;
  }
}
.link-header-info:hover {
  transition: 1s;
  font-size: 1.8rem;
  color: #333;
  font-weight: 700;
  background: white;
  border: none;
}

@media (max-width: 480px) {
  .nav {
    display: none;
    position: absolute;
    top: 8rem;
    height: auto;
    width: 100%;
    animation: nav-xs-anim 1s;
    transition: 1s;
    background: var(--background);
  }
  @keyframes nav-xs-anim {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .nav {
    display: none;
    position: absolute;
    top: 8rem;
    height: auto;
    width: 100%;
    animation: nav-xs-anim 1s;
    transition: 1s;
    background: var(--background);
  }
  @keyframes nav-xs-anim {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}

.nav-container-xs {
  display: none;
  height: auto;
  max-height: 17.9rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: 1s;
}
@media (max-width: 480px) {
  .nav-container-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .nav-container-xs {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
    height: 4rem;
  }
}

.nav-container-xs-active-1 {
  max-height: 27.8rem;
}

.link-nav-bar-xs {
  color: white;
  text-decoration: none;
  font-weight: 300;
}

.nav-active-1-xs {
  transition: 1s;
  transform: translateX(100%);
}

.nav-active-2-xs {
  transition: 1s;
  transform: translateX(0%);
}

.span-xs {
  margin: 1rem;
  border-bottom: 1px white solid;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .span-xs {
    margin: 1rem 0;
    transition: 1s;
  }
}

.qui-sommes-nous-xs {
  margin-top: 2rem;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .qui-sommes-nous-xs {
    margin-top: 1rem;
  }
}

.contact-xs {
  margin-bottom: 2rem;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .contact-xs {
    margin-bottom: 1rem;
  }
}

.menu-vos-besoins-xs {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  overflow: hidden;
  transition: 0.8s;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .menu-vos-besoins-xs {
    width: 12.222rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .menu-vos-besoins-xs {
    margin: 1rem 0;
  }
}

@media (min-width: 480px) and (max-width: 1099px) {
  .menu-vos-besoins-xs-active-1 {
    width: 18rem;
  }
}

.menu-vos-besoins-container-xs {
  display: none;
  flex-direction: column;
  align-items: center;
  background: var(--background);
}
@media (min-width: 480px) and (max-width: 1099px) {
  .menu-vos-besoins-container-xs {
    animation: menu-vos-besoins-container-sm 1s;
  }
  @keyframes menu-vos-besoins-container-sm {
    0% {
      transform: translateY(-100%);
    }
  }
}

@media (min-width: 480px) and (max-width: 1099px) {
  .menu-vos-besoins-container-xs-active-1 {
    transition: 1s;
    transform: translateX(100%);
  }
}

.vos-besoins-xs {
  margin: 0.5rem;
  border-bottom: 1px white solid;
  cursor: pointer;
}

.grand-comptes-xs {
  margin-top: 1rem;
}

.menu-langue-xs {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  overflow: hidden;
}
@media (max-width: 480px) {
  .menu-langue-xs {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.container-menu-langue-xs {
  display: none;
  flex-direction: column;
  align-items: center;
  background: var(--background);
  animation: container-menu-langue-xs 1s;
}
@keyframes container-menu-langue-xs {
  0% {
    transform: translateY(-100%);
  }
}

.container-menu-langue-xs-active-1 {
  transition: 1s;
  transform: translateX(100%);
}

.span-langue-xs {
  margin: 0.5rem 0;
}

.margin-top {
  margin-top: 1rem;
}

.link-nav-bar-xs-langue {
  color: white;
  text-decoration: none;
  font-weight: 300;
}

.btn-xs {
  display: none;
}

@media (max-width: 480px) {
  .btn-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .btn-xs {
    display: flex;
  }
}
.btn-xs {
  position: absolute;
  right: 0;
  height: 2.5rem;
  width: 3rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 2s;
  cursor: pointer;
  margin: 1rem;
}

.bar {
  height: 2px;
  width: 2.5rem;
  background: white;
  position: absolute;
  transition: all 0.3s;
}

.bar-1 {
  top: 0;
}

.bar-1-active-1 {
  top: calc(50% - 1px);
}

.bar-1-active-2 {
  rotate: 45deg;
}

.bar-2-active {
  opacity: 0;
}

.bar-3 {
  bottom: 0;
}

.bar-3-active-1 {
  bottom: calc(50% - 1px);
}

.bar-3-active-2 {
  rotate: -45deg;
}

.fleche-xs {
  color: white;
}

.fleche-xs-active-1 {
  rotate: 180deg;
}

nav {
  height: 8rem;
  display: flex;
  align-items: center;
}

.nav-container {
  height: 2rem;
  display: flex;
  align-items: start;
}
@media (max-width: 480px) {
  .nav-container {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .nav-container {
    display: none;
  }
}

.link-nav-bar {
  margin: 0 2rem 0 2rem;
  color: white;
  font-weight: 300;
  text-decoration: none;
  transition: 1s;
}

.menu-vos-besoins {
  height: 3rem;
  width: 15rem;
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
  overflow: hidden;
}
.menu-vos-besoins:hover {
  height: 15rem;
  width: auto;
  min-width: 20.5rem;
}
.menu-vos-besoins:hover > .menu-vos-besoins-container {
  display: flex;
}
.menu-vos-besoins:hover > .vos-besoins {
  color: white;
  letter-spacing: 0.2rem;
}
.menu-vos-besoins:hover > .underline-0 {
  background: white;
}

.menu-vos-besoins-container {
  height: 13rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  transition: all 1s;
}

.menu-vos-besoins-container-active-1 {
  background: #000000;
}

.link-vos-besoins {
  position: relative;
  z-index: 0;
  transition: 1s;
}
.link-vos-besoins:hover {
  color: white;
  letter-spacing: 0.2rem;
}

.vos-besoins {
  margin: 0 0 1rem 0;
  cursor: pointer;
}

.menu-langue {
  height: 3rem;
  display: flex;
  width: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 1s;
  overflow: hidden;
}
.menu-langue:hover {
  height: 15rem;
  width: 6.2rem;
}
.menu-langue:hover > .container-menu-langue {
  display: flex;
}
.menu-langue:hover > .first-langue {
  letter-spacing: 0.2rem;
  color: white;
}
.menu-langue:hover > .underline-7 {
  background: white;
  height: 2px;
}

.container-menu-langue {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  overflow: hidden;
}

.container-menu-langue-active-1 {
  background: #000000;
}

.catala:hover > .link-langue {
  color: white;
}

.english:hover > .link-langue {
  color: white;
}

.spanish:hover > .link-langue {
  color: white;
}

.link-langue {
  color: white;
  width: 100%;
  display: flex;
  justify-content: start;
}

.first-langue {
  margin: 0;
  margin-bottom: 1rem;
}

.span-menu {
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-between;
}

.span-menu-1:hover > a {
  color: white;
  letter-spacing: 0.2rem;
}
.span-menu-1:hover > div {
  background: white;
}

.span-menu-2:hover > a {
  color: white;
  letter-spacing: 0.2rem;
}
.span-menu-2:hover > div {
  background: white;
}

.span-menu-3:hover > a {
  color: white;
  letter-spacing: 0.2rem;
}
.span-menu-3:hover > div {
  background: white;
}

.span-menu-4:hover > a {
  color: white;
}
.span-menu-4:hover > div {
  background: white;
}

.underline {
  background: white;
  height: 2px;
  width: 100%;
  transform: translateX(-120%);
  transition: 1s;
}

.underline-active-1 {
  transform: translateX(0%);
}

.underline-0 {
  background: white;
  height: 2px;
  width: 100%;
  transition: 1s;
}

.underline-0-active-1 {
  transform: translateX(120%);
}

.underline-4 {
  background: white;
  height: 1px;
  width: 100%;
  transition: 1s;
}

.underline-5 {
  background: white;
  height: 1px;
  width: 100%;
  transition: 1s;
}

.underline-6 {
  background: white;
  height: 2px;
  width: 100%;
  transition: 1s;
  transform: translateX(-120%);
}

.underline-6-active-1 {
  transform: translateX(0%);
}

.underline-7 {
  background: white;
  height: 1px;
  width: 100%;
  transition: 1s;
}

.underline-7-active-1 {
  transform: translateX(120%);
}

.fleche {
  rotate: 90deg;
  transition: 1s;
}

.angle-active-1 {
  rotate: 180deg;
}

.btn-en-savoir-plus {
  height: 4rem;
  width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: var(--blue);
  color: white;
  letter-spacing: 0.1rem;
  font-weight: 700;
  border-radius: 1rem;
  transition: all 1s;
  border: 2px solid var(--blue);
}
.btn-en-savoir-plus:hover {
  transition: all 1s;
  font-size: 1.8rem;
  color: var(--blue);
  background: white;
}

footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
}

.content-footer {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 5rem;
}
@media (max-width: 480px) {
  .content-footer {
    flex-direction: column;
  }
}

.elem-footer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 480px) {
  .elem-footer {
    align-items: center;
  }
}

.title-footer {
  color: white;
  font-weight: 700;
  letter-spacing: 0.2rem;
  font-size: 2rem;
}

.img-footer {
  height: 8rem;
  width: 24rem;
}

.auro-info {
  color: white;
  font-weight: 300;
  margin: 0.5rem;
}

.span-container-contact {
  height: 11.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.8rem;
}
@media (max-width: 480px) {
  .span-container-contact {
    align-items: center;
    margin: 0;
  }
}

.link-footer-contact {
  color: white;
  text-decoration: none;
  font-weight: 300;
}

.plan-du-site {
  margin-top: 1.8rem;
}
@media (max-width: 480px) {
  .plan-du-site {
    margin: 0;
  }
}

.link-footer-plan-du-site {
  color: white;
  text-decoration: none;
  font-weight: 300;
}
@media (max-width: 480px) {
  .link-footer-plan-du-site {
    margin: 1rem 0;
  }
}

.symbole-footer {
  color: white;
  font-size: 2rem;
}
@media (max-width: 480px) {
  .symbole-footer {
    margin: 1rem;
  }
}

.reseau {
  margin-top: 1.8rem;
}
@media (max-width: 480px) {
  .reseau {
    margin: 0;
  }
}

.separator-footer {
  height: 2px;
  width: 80%;
  background: white;
  margin-bottom: 5rem;
}

.separator-footer-xs {
  display: none;
  height: 2px;
  width: 80%;
  background: white;
  margin: 2rem;
}
@media (max-width: 480px) {
  .separator-footer-xs {
    display: block;
  }
}

.container-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}
@media (max-width: 480px) {
  .container-footer {
    flex-direction: column;
    align-items: center;
  }
}

.droit-auro {
  color: white;
  font-weight: 300;
  margin: 0 2.5rem;
  text-decoration: none;
}
@media (max-width: 480px) {
  .droit-auro {
    margin: 1rem;
  }
}

.grid-container {
  height: auto;
  display: grid;
  grid: "header-container" auto "main" auto "footer" auto/auto;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_base.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_media-queries.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_utils.scss","webpack://./src/assets/styles/_fonts.scss","webpack://./src/assets/styles/_header.scss","webpack://./src/assets/styles/_header-container.scss","webpack://./src/assets/styles/_menu-responsive.scss","webpack://./src/assets/styles/_menu.scss","webpack://./src/assets/styles/_btn.scss","webpack://./src/assets/styles/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n}\nbody {\n  font-family: var(--font-family);\n  color: var(--text);\n  font-size: 1.6rem;\n  width: 100%;\n}\n","@use \"base\" as *;\r\n@use \"classes\" as *;\r\n@use \"media-queries\" as *;\r\n@use \"reset\" as *;\r\n@use \"variables\" as *;\r\n@use \"utils\" as *;\r\n@use \"fonts\" as *;\r\n@use \"separator\" as *;\r\n@use \"header\" as *;\r\n@use \"header-container\" as *;\r\n@use \"nav-bar\" as *;\r\n@use \"menu-responsive\" as *;\r\n@use \"menu\" as *;\r\n@use \"main\" as *;\r\n@use \"btn\" as *;\r\n@use \"footer\" as *;\r\n.grid-container {\r\n  height: auto;\r\n  display: grid;\r\n  grid:\r\n    \"header-container\" auto\r\n    \"main\" auto\r\n    \"footer\" auto\r\n    / auto;\r\n}\r\n","/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 1099px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 1100px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n",":root {\r\n  // font-family\r\n  --font-family-strasua: \"strasua\";\r\n  --font-family: \"Raleway\", sans-serif;\r\n\r\n  // color\r\n  --text: #333;\r\n  --yellow: #efb800;\r\n  --orange: #eb5d0b;\r\n  --pink: #df427e;\r\n  --purple: #803d8f;\r\n  --blue: #009dd7;\r\n  --green: #7cba34;\r\n  --black: #000000;\r\n  --background: #000000;\r\n\r\n  // box-shadow\r\n  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),\r\n    0 1px 3px 1px rgba(60, 64, 67, 0.15);\r\n}\r\n",".title {\r\n  font-weight: 700;\r\n  font-size: 3.5rem;\r\n}\r\n.under-title {\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n}\r\n.text {\r\n  color: #333;\r\n  font-weight: 300;\r\n  font-size: 1.8rem;\r\n  margin: 0 2rem;\r\n}\r\n.under-text {\r\n  color: #333;\r\n  font-weight: 300;\r\n  font-size: 1.8rem;\r\n}\r\n.mb-3rem {\r\n  margin-bottom: 3rem;\r\n}\r\n.mb-2rem {\r\n  margin-bottom: 2rem !important;\r\n}\r\n.mt-5rem {\r\n  margin-top: 5rem !important;\r\n}\r\n.mx-2rem {\r\n  margin: 0 2rem !important;\r\n}\r\n.mr-2rem {\r\n  margin-right: 2rem !important;\r\n}\r\n.underline-widget {\r\n  text-decoration: underline;\r\n}\r\n","@font-face {\r\n  font-family: \"strasua\";\r\n  src: url(\"C:/Users/Azstras/OneDrive/Documents/polices/strasua.otf\")\r\n    format(opentype);\r\n}\r\n@font-face {\r\n  font-family: \"raleway\";\r\n  src: url(\"C:/Users/Azstras/OneDrive/Documents/polices/Raleway-Black.ttf\")\r\n    format(opentype);\r\n}\r\n","@use \"media-queries\" as *;\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  @include xs {\r\n    justify-content: space-between;\r\n    background: #000000;\r\n  }\r\n  @include sm {\r\n    justify-content: space-between;\r\n    background: #000000;\r\n  }\r\n  height: auto;\r\n  width: 100%;\r\n  background: transparent;\r\n  backdrop-filter: blur(10px);\r\n  z-index: 1000;\r\n}\r\n.header-active {\r\n  background: #000000;\r\n  // background: linear-gradient(\r\n  //   to right,\r\n  //   var(--yellow),\r\n  //   var(--orange),\r\n  //   var(--purple),\r\n  //   var(--blue),\r\n  //   var(--green)\r\n  // );\r\n}\r\n.header-logo {\r\n  height: 8rem;\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n.header-container {\r\n  height: 100vh;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: url(\"../images/1-img-header.jpg\") no-repeat center center;\r\n  background-size: cover;\r\n}\r\n\r\n.info-header-content {\r\n  margin-top: 8rem;\r\n  height: auto;\r\n  width: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.elem-info-header {\r\n  margin: 4rem;\r\n  @include xs {\r\n    margin: 2rem;\r\n  }\r\n  @include sm {\r\n    margin: 2rem;\r\n  }\r\n}\r\n\r\nh1 {\r\n  color: white;\r\n  font-size: 5rem;\r\n  @include xs {\r\n    font-size: 4rem;\r\n  }\r\n  @include sm {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: 3rem;\r\n  background: linear-gradient(\r\n    to right,\r\n    var(--yellow),\r\n    var(--orange),\r\n    var(--purple),\r\n    var(--blue),\r\n    var(--green)\r\n  );\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.container-link-header-info {\r\n  display: flex;\r\n  height: auto;\r\n  @include xs {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.link-header-info {\r\n  height: 5rem;\r\n  width: auto;\r\n  padding: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n  letter-spacing: 0.2rem;\r\n  margin: 0 5rem;\r\n  border: solid 2px white;\r\n  border-radius: 1rem;\r\n  transition: 1s font-size;\r\n  @include xs {\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  &:hover {\r\n    transition: 1s;\r\n    font-size: 1.8rem;\r\n    color: #333;\r\n    font-weight: 700;\r\n    background: white;\r\n    border: none;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n// nav bar\r\n.nav {\r\n  @include xs {\r\n    display: none;\r\n    position: absolute;\r\n    top: 8rem;\r\n    height: auto;\r\n    width: 100%;\r\n    animation: nav-xs-anim 1s;\r\n    transition: 1s;\r\n    background: var(--background);\r\n    @keyframes nav-xs-anim {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(0%);\r\n      }\r\n    }\r\n  }\r\n  @include sm {\r\n    display: none;\r\n    position: absolute;\r\n    top: 8rem;\r\n    height: auto;\r\n    width: 100%;\r\n    animation: nav-xs-anim 1s;\r\n    transition: 1s;\r\n    background: var(--background);\r\n    @keyframes nav-xs-anim {\r\n      0% {\r\n        transform: translateX(100%);\r\n      }\r\n      100% {\r\n        transform: translateX(0%);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.nav-container-xs {\r\n  display: none;\r\n  @include xs {\r\n    display: flex;\r\n  }\r\n  @include sm {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: start;\r\n    justify-content: space-around;\r\n    height: 4rem;\r\n  }\r\n  height: auto;\r\n  max-height: 17.9rem;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  transition: 1s;\r\n}\r\n.nav-container-xs-active-1 {\r\n  max-height: 27.8rem;\r\n}\r\n\r\n.link-nav-bar-xs {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n}\r\n\r\n.nav-active-1-xs {\r\n  transition: 1s;\r\n  transform: translateX(100%);\r\n}\r\n.nav-active-2-xs {\r\n  transition: 1s;\r\n  transform: translateX(0%);\r\n}\r\n.span-xs {\r\n  margin: 1rem;\r\n  border-bottom: 1px white solid;\r\n  @include sm {\r\n    margin: 1rem 0;\r\n    transition: 1s;\r\n  }\r\n}\r\n\r\n.qui-sommes-nous-xs {\r\n  margin-top: 2rem;\r\n  @include sm {\r\n    margin-top: 1rem;\r\n  }\r\n}\r\n\r\n.contact-xs {\r\n  margin-bottom: 2rem;\r\n  @include sm {\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n\r\n// menu vos besoins xs\r\n\r\n.menu-vos-besoins-xs {\r\n  width: auto;\r\n  @include sm {\r\n    width: 12.222rem;\r\n  }\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem;\r\n  @include sm {\r\n    margin: 1rem 0;\r\n  }\r\n  overflow: hidden;\r\n  transition: 0.8s;\r\n}\r\n.menu-vos-besoins-xs-active-1 {\r\n  @include sm {\r\n    width: 18rem;\r\n  }\r\n}\r\n\r\n.menu-vos-besoins-container-xs {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: var(--background);\r\n  @include sm {\r\n    animation: menu-vos-besoins-container-sm 1s;\r\n    @keyframes menu-vos-besoins-container-sm {\r\n      0% {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n  }\r\n}\r\n.menu-vos-besoins-container-xs-active-1 {\r\n  @include sm {\r\n    transition: 1s;\r\n    transform: translateX(100%);\r\n  }\r\n}\r\n\r\n.vos-besoins-xs {\r\n  margin: 0.5rem;\r\n  border-bottom: 1px white solid;\r\n  cursor: pointer;\r\n}\r\n.grand-comptes-xs {\r\n  margin-top: 1rem;\r\n}\r\n\r\n// menu langue xs\r\n\r\n.menu-langue-xs {\r\n  @include xs {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 1rem;\r\n  overflow: hidden;\r\n}\r\n.container-menu-langue-xs {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: var(--background);\r\n  animation: container-menu-langue-xs 1s;\r\n\r\n  @keyframes container-menu-langue-xs {\r\n    0% {\r\n      transform: translateY(-100%);\r\n    }\r\n  }\r\n}\r\n.container-menu-langue-xs-active-1 {\r\n  transition: 1s;\r\n  transform: translateX(100%);\r\n}\r\n\r\n.span-langue-xs {\r\n  margin: 0.5rem 0;\r\n}\r\n.margin-top {\r\n  margin-top: 1rem;\r\n}\r\n.link-nav-bar-xs-langue {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n}\r\n// btn nav bar xs\r\n\r\n.btn-xs {\r\n  display: none;\r\n}\r\n@include xs {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n@include sm {\r\n  .btn-xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.btn-xs {\r\n  position: absolute;\r\n  right: 0;\r\n  height: 2.5rem;\r\n  width: 3rem;\r\n\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  transition: all 2s;\r\n  cursor: pointer;\r\n  margin: 1rem;\r\n}\r\n\r\n.bar {\r\n  height: 2px;\r\n  width: 2.5rem;\r\n  background: white;\r\n  position: absolute;\r\n  transition: all 0.3s;\r\n}\r\n.bar-1 {\r\n  top: 0;\r\n}\r\n.bar-1-active-1 {\r\n  top: calc(50% - 1px);\r\n}\r\n.bar-1-active-2 {\r\n  rotate: 45deg;\r\n}\r\n\r\n.bar-2-active {\r\n  opacity: 0;\r\n}\r\n.bar-3 {\r\n  bottom: 0;\r\n}\r\n.bar-3-active-1 {\r\n  bottom: calc(50% - 1px);\r\n}\r\n.bar-3-active-2 {\r\n  rotate: -45deg;\r\n}\r\n\r\n.fleche-xs {\r\n  color: white;\r\n}\r\n.fleche-xs-active-1 {\r\n  rotate: 180deg;\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\n// nav bar\r\nnav {\r\n  height: 8rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.nav-container {\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: start;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n}\r\n.link-nav-bar {\r\n  margin: 0 2rem 0 2rem;\r\n  color: white;\r\n  font-weight: 300;\r\n  text-decoration: none;\r\n  transition: 1s;\r\n}\r\n\r\n// menu vos besoins\r\n\r\n.menu-vos-besoins {\r\n  height: 3rem;\r\n  width: 15rem;\r\n  min-width: 15rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  transition: 1s;\r\n  overflow: hidden;\r\n\r\n  &:hover {\r\n    height: 15rem;\r\n    width: auto;\r\n    min-width: 20.5rem;\r\n  }\r\n  &:hover > .menu-vos-besoins-container {\r\n    display: flex;\r\n  }\r\n  &:hover > .vos-besoins {\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n  &:hover > .underline-0 {\r\n    background: white;\r\n  }\r\n}\r\n.menu-vos-besoins-container {\r\n  height: 13rem;\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  overflow: hidden;\r\n  transition: all 1s;\r\n}\r\n.menu-vos-besoins-container-active-1 {\r\n  background: #000000;\r\n}\r\n\r\n.link-vos-besoins {\r\n  position: relative;\r\n  z-index: 0;\r\n  transition: 1s;\r\n  &:hover {\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n}\r\n.vos-besoins {\r\n  margin: 0 0 1rem 0;\r\n  cursor: pointer;\r\n}\r\n\r\n// menu langue\r\n\r\n.menu-langue {\r\n  height: 3rem;\r\n  display: flex;\r\n  width: 4rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  transition: 1s;\r\n  overflow: hidden;\r\n  &:hover {\r\n    height: 15rem;\r\n    width: 6.2rem;\r\n  }\r\n  &:hover > .container-menu-langue {\r\n    display: flex;\r\n  }\r\n  &:hover > .first-langue {\r\n    letter-spacing: 0.2rem;\r\n    color: white;\r\n  }\r\n  &:hover > .underline-7 {\r\n    background: white;\r\n    height: 2px;\r\n  }\r\n}\r\n\r\n.container-menu-langue {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n.container-menu-langue-active-1 {\r\n  background: #000000;\r\n}\r\n.catala {\r\n  &:hover > .link-langue {\r\n    color: white;\r\n  }\r\n}\r\n.english {\r\n  &:hover > .link-langue {\r\n    color: white;\r\n  }\r\n}\r\n.spanish {\r\n  &:hover > .link-langue {\r\n    color: white;\r\n  }\r\n}\r\n\r\n.link-langue {\r\n  color: white;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: start;\r\n}\r\n.first-langue {\r\n  margin: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n// span\r\n\r\n.span-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 3rem;\r\n  justify-content: space-between;\r\n}\r\n.span-menu-1 {\r\n  &:hover > a {\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n  &:hover > div {\r\n    background: white;\r\n  }\r\n}\r\n.span-menu-2 {\r\n  &:hover > a {\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n  &:hover > div {\r\n    background: white;\r\n  }\r\n}\r\n.span-menu-3 {\r\n  &:hover > a {\r\n    color: white;\r\n    letter-spacing: 0.2rem;\r\n  }\r\n  &:hover > div {\r\n    background: white;\r\n  }\r\n}\r\n.span-menu-4 {\r\n  &:hover > a {\r\n    color: white;\r\n  }\r\n  &:hover > div {\r\n    background: white;\r\n  }\r\n}\r\n// underline\r\n\r\n.underline {\r\n  background: white;\r\n  height: 2px;\r\n  width: 100%;\r\n  transform: translateX(-120%);\r\n  transition: 1s;\r\n}\r\n.underline-active-1 {\r\n  transform: translateX(0%);\r\n}\r\n.underline-0 {\r\n  background: white;\r\n  height: 2px;\r\n  width: 100%;\r\n  transition: 1s;\r\n}\r\n.underline-0-active-1 {\r\n  transform: translateX(120%);\r\n}\r\n.underline-4 {\r\n  background: white;\r\n  height: 1px;\r\n  width: 100%;\r\n  transition: 1s;\r\n}\r\n.underline-5 {\r\n  background: white;\r\n  height: 1px;\r\n  width: 100%;\r\n  transition: 1s;\r\n}\r\n.underline-6 {\r\n  background: white;\r\n  height: 2px;\r\n  width: 100%;\r\n  transition: 1s;\r\n  transform: translateX(-120%);\r\n}\r\n.underline-6-active-1 {\r\n  transform: translateX(0%);\r\n}\r\n.underline-7 {\r\n  background: white;\r\n  height: 1px;\r\n  width: 100%;\r\n  transition: 1s;\r\n}\r\n.underline-7-active-1 {\r\n  transform: translateX(120%);\r\n}\r\n\r\n// fleche / anim\r\n\r\n.fleche {\r\n  rotate: 90deg;\r\n  transition: 1s;\r\n}\r\n.angle-active-1 {\r\n  rotate: 180deg;\r\n}\r\n",".btn-en-savoir-plus {\r\n  height: 4rem;\r\n  width: 18rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  background: var(--blue);\r\n  color: white;\r\n  letter-spacing: 0.1rem;\r\n  font-weight: 700;\r\n  border-radius: 1rem;\r\n  transition: all 1s;\r\n  border: 2px solid var(--blue);\r\n  &:hover {\r\n    transition: all 1s;\r\n    font-size: 1.8rem;\r\n    color: var(--blue);\r\n    background: white;\r\n  }\r\n}\r\n","@use \"media-queries\" as *;\r\n\r\nfooter {\r\n  grid-area: footer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: var(--background);\r\n}\r\n\r\n.content-footer {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 5rem;\r\n  @include xs {\r\n    flex-direction: column;\r\n  }\r\n}\r\n.elem-footer {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  @include xs {\r\n    align-items: center;\r\n  }\r\n}\r\n.title-footer {\r\n  color: white;\r\n  font-weight: 700;\r\n  letter-spacing: 0.2rem;\r\n  font-size: 2rem;\r\n}\r\n// auro info\r\n\r\n.img-footer {\r\n  height: 8rem;\r\n  width: 24rem;\r\n}\r\n.auro-info {\r\n  color: white;\r\n  font-weight: 300;\r\n  margin: 0.5rem;\r\n}\r\n\r\n// footer contact\r\n.span-container-contact {\r\n  height: 11.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  margin-top: 1.8rem;\r\n  @include xs {\r\n    align-items: center;\r\n    margin: 0;\r\n  }\r\n}\r\n.link-footer-contact {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n}\r\n\r\n// plan du site\r\n.plan-du-site {\r\n  margin-top: 1.8rem;\r\n  @include xs {\r\n    margin: 0;\r\n  }\r\n}\r\n.link-footer-plan-du-site {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-weight: 300;\r\n  @include xs {\r\n    margin: 1rem 0;\r\n  }\r\n}\r\n\r\n// reseau\r\n.symbole-footer {\r\n  color: white;\r\n  font-size: 2rem;\r\n  @include xs {\r\n    margin: 1rem;\r\n  }\r\n}\r\n.reseau {\r\n  margin-top: 1.8rem;\r\n  @include xs {\r\n    margin: 0;\r\n  }\r\n}\r\n// separator\r\n.separator-footer {\r\n  height: 2px;\r\n  width: 80%;\r\n  background: white;\r\n  margin-bottom: 5rem;\r\n}\r\n.separator-footer-xs {\r\n  display: none;\r\n  @include xs {\r\n    display: block;\r\n  }\r\n  height: 2px;\r\n  width: 80%;\r\n  background: white;\r\n  margin: 2rem;\r\n}\r\n// container footer\r\n.container-footer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 5rem;\r\n  @include xs {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n.droit-auro {\r\n  color: white;\r\n  font-weight: 300;\r\n  margin: 0 2.5rem;\r\n  text-decoration: none;\r\n  @include xs {\r\n    margin: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/french/index.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/french/index.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/images/2-qui_sommes_nous.jpg */ "./src/assets/images/2-qui_sommes_nous.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/images/10-close-up-young-colleagues-having-meeting.jpg */ "./src/assets/images/10-close-up-young-colleagues-having-meeting.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/images/14-map.jpg */ "./src/assets/images/14-map.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/images/15-map-2.png */ "./src/assets/images/15-map-2.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Landscape phones and down */
/* Landscape phone to portrait tablet */
/* Portrait tablet to landscape and desktop */
/* Large desktop */
main {
  grid-area: main;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content-qui-sommes-nous {
  height: auto;
  min-height: 60rem;
  width: 100%;
  display: flex;
  flex-direction: row nowrap;
  justify-content: center;
  align-items: center;
  background: white;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .content-qui-sommes-nous {
    min-height: 40rem;
  }
}

.container-qui-sommes-nous {
  width: auto;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 2rem 5rem;
}
@media (max-width: 480px) {
  .container-qui-sommes-nous {
    align-items: center;
    text-align: center;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-qui-sommes-nous {
    max-width: 100rem;
    align-items: center;
    text-align: center;
  }
}

.img-qui-sommes-nous {
  height: 40rem;
  width: 60rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 2rem 5rem 2rem 0;
}
@media (max-width: 480px) {
  .img-qui-sommes-nous {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .img-qui-sommes-nous {
    display: none;
  }
}

.text-qui-sommes-nous {
  margin: 5rem 0;
}

.content-nos-expertise {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  padding: 5rem;
  text-align: center;
}

.container-nos-expertise {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row nowrap;
  justify-content: center;
  margin: 5rem;
}
@media (max-width: 480px) {
  .container-nos-expertise {
    flex-direction: column;
    align-items: center;
  }
}

.elem-nos-expertise {
  height: auto;
  min-height: 30rem;
  min-width: none;
  width: auto;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  margin-top: 2rem;
}

.under-title-nos-expertise {
  display: flex;
  align-items: center;
  height: 5.3rem;
}

.symbole-nos-expertise {
  margin-bottom: 5rem;
}

.symbole-nos-expertise-1 {
  height: 5rem;
  width: 5rem;
}

.symbole-nos-expertise-2 {
  height: 5rem;
  width: 5rem;
}

.symbole-nos-expertise-3 {
  height: 5rem;
  width: 5rem;
}

.symbole-nos-expertise-4 {
  height: 5rem;
  width: 3rem;
}

.separator-nos-expertise {
  height: 100%;
  width: 1px;
  border: 1px var(--blue) dashed;
  margin: 0rem 5rem;
}
@media (max-width: 480px) {
  .separator-nos-expertise {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .separator-nos-expertise {
    margin: 0 2.5rem;
  }
}

.text-nos-expertise {
  font-size: 2.2rem;
  margin: 5rem 0 0 0;
}

.content-nos-valeurs {
  position: relative;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
}
@media (max-width: 480px) {
  .content-nos-valeurs {
    height: auto;
  }
}

.content-nos-valeurs::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 1;
}

.content-nos-valeurs > * {
  position: relative;
  z-index: 2;
}

.container-nos-valeurs {
  width: 70%;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 480px) {
  .container-nos-valeurs {
    display: none;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-nos-valeurs {
    width: 100%;
    justify-content: space-around;
  }
}

.container-symbole-nos-valeurs {
  margin: 0 4rem;
}

.text-nos-valeurs {
  color: white;
  margin: 2rem 2rem 0 2rem;
}

.symbole-nos-valeurs {
  height: 8rem;
  width: auto;
}

.content-notre-equipe {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
}
@media (max-width: 480px) {
  .content-notre-equipe {
    display: none;
  }
}

.span-img-notre-equipe {
  display: flex;
}

.span-img-notre-equipe-1 {
  position: absolute;
  top: -3rem;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .span-img-notre-equipe-1 {
    top: -5rem;
  }
}

.span-img-notre-equipe-2 {
  position: absolute;
  top: 10rem;
  justify-content: space-between;
  width: 85%;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .span-img-notre-equipe-2 {
    width: 90%;
  }
}

.span-img-notre-equipe-3 {
  position: absolute;
  bottom: -1.2rem;
  justify-content: space-between;
  width: 110%;
}

.img-notre-equipe {
  height: 10rem;
  width: 10rem;
  border-radius: 30rem;
}

.img-notre-equipe-1 {
  height: 12rem;
  width: 12rem;
}

.demi-cercle-1 {
  position: relative;
  height: 42rem;
  width: 77.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 40rem 40rem 0 0;
  border-top: 2px dashed #ddd;
  border-left: 2px dashed #ddd;
  border-right: 2px dashed #ddd;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .demi-cercle-1 {
    height: 40rem;
    width: 70rem;
  }
}

.demi-cercle-1::before {
  content: "";
  height: 90%;
  width: 90%;
  border-radius: 40rem 40rem 0 0;
  border-top: 2px dashed #ddd;
  border-left: 2px dashed #ddd;
  border-right: 2px dashed #ddd;
}

.container-text-notre-equipe {
  position: absolute;
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  text-align: center;
}

.text-notre-equipe {
  font-weight: 300;
  font-style: italic;
}
@media (max-width: 480px) {
  .text-notre-equipe {
    margin: 2rem;
  }
}

.under-title-notre-equipe {
  font-size: 2.5rem;
  font-weight: 700;
}
@media (max-width: 480px) {
  .under-title-notre-equipe {
    margin: 1rem 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .under-title-notre-equipe {
    margin: 1rem 2rem;
  }
}

.info-post {
  font-weight: 700;
}
@media (min-width: 480px) and (max-width: 1099px) {
  .info-post {
    margin-bottom: 2rem;
  }
}

.guillemet {
  font-size: 2rem;
  background: linear-gradient(to right, #f9517b, #ffd990);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.title-notre-equipe {
  margin-bottom: 8rem;
}
@media (max-width: 480px) {
  .title-notre-equipe {
    margin: 2rem;
  }
}

.content-notre-equipe-xs {
  height: auto;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 480px) {
  .content-notre-equipe-xs {
    display: flex;
  }
}

.container-text-notre-equipe-xs {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

.content-votre-besoin {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  padding: 5rem;
}
@media (max-width: 480px) {
  .content-votre-besoin {
    padding: 2rem 0;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .content-votre-besoin {
    padding: 2rem 0;
  }
}

.container-votre-besoin {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 100%;
  margin: 5rem;
}
@media (max-width: 480px) {
  .container-votre-besoin {
    flex-direction: column;
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-votre-besoin {
    flex-direction: column;
  }
}

.span-votre-besoin {
  height: auto;
  width: auto;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  text-align: center;
  background: white;
  border-radius: 2rem;
}

.img-votre-besoin {
  height: 25rem;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 2rem 2rem 0 0;
}

.separator-votre-besoin {
  height: 2px;
  width: 80%;
  margin: 2rem;
  background: #eee;
}

.btn-votre-besoin {
  margin: 5rem 0;
}

.text-votre-besoin {
  font-weight: 300;
}

.content-notre-reseau {
  height: 54rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 480px) {
  .content-notre-reseau {
    background: none;
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .content-notre-reseau {
    background: none;
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
}

.container-notre-reseau {
  height: 70%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 2rem;
}
@media (max-width: 480px) {
  .container-notre-reseau {
    height: auto;
    width: 100%;
    align-items: center;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .container-notre-reseau {
    height: auto;
    width: 100%;
    align-items: center;
  }
}

.span-notre-reseau {
  width: auto;
  max-width: 40rem;
}
@media (max-width: 480px) {
  .span-notre-reseau {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .span-notre-reseau {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}

.text-notre-reseau {
  margin: 2rem 0;
}
@media (max-width: 480px) {
  .text-notre-reseau {
    margin: 2rem;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .text-notre-reseau {
    margin: 2rem;
  }
}

.text-notre-reseau-m {
  font-weight: 300;
}

.img-xs {
  display: none;
  height: 30rem;
  width: 100%;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 2rem;
}
@media (max-width: 480px) {
  .img-xs {
    display: flex;
  }
}
@media (min-width: 480px) and (max-width: 1099px) {
  .img-xs {
    display: flex;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/_media-queries.scss","webpack://./src/index/french/index.scss"],"names":[],"mappings":"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","sourcesContent":["/* Landscape phones and down */\r\n@mixin xs {\r\n  @media (max-width: 480px) {\r\n    @content;\r\n  }\r\n}\r\n/* Landscape phone to portrait tablet */\r\n@mixin sm {\r\n  @media (min-width: 480px) and (max-width: 1099px) {\r\n    @content;\r\n  }\r\n}\r\n/* Portrait tablet to landscape and desktop */\r\n@mixin md {\r\n  @media (min-width: 1100px) and (max-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n/* Large desktop */\r\n@mixin xl {\r\n  @media (min-width: 1200px) and (max-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin xxl {\r\n  @media (min-width: 2559px) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../../assets/styles/media-queries\" as *;\r\n\r\nmain {\r\n  grid-area: main;\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n// qui sommes nous\r\n\r\n.content-qui-sommes-nous {\r\n  height: auto;\r\n  min-height: 60rem;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: white;\r\n  @include sm {\r\n    min-height: 40rem;\r\n  }\r\n}\r\n.container-qui-sommes-nous {\r\n  width: auto;\r\n  max-width: 45rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  justify-content: center;\r\n  margin: 2rem 5rem;\r\n  @include xs {\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n  @include sm {\r\n    max-width: 100rem;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.img-qui-sommes-nous {\r\n  height: 40rem;\r\n  width: 60rem;\r\n  background-image: url(/src/assets/images/2-qui_sommes_nous.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  margin: 2rem 5rem 2rem 0;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    display: none;\r\n  }\r\n}\r\n.text-qui-sommes-nous {\r\n  margin: 5rem 0;\r\n}\r\n// nos expertises\r\n\r\n.content-nos-expertise {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #eee;\r\n  padding: 5rem;\r\n  text-align: center;\r\n}\r\n.container-nos-expertise {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row nowrap;\r\n  justify-content: center;\r\n  margin: 5rem;\r\n  @include xs {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n.elem-nos-expertise {\r\n  height: auto;\r\n  min-height: 30rem;\r\n  min-width: none;\r\n  width: auto;\r\n  max-width: 20rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: start;\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n}\r\n.under-title-nos-expertise {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 5.3rem;\r\n}\r\n.symbole-nos-expertise {\r\n  margin-bottom: 5rem;\r\n}\r\n.symbole-nos-expertise-1 {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n.symbole-nos-expertise-2 {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n.symbole-nos-expertise-3 {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n.symbole-nos-expertise-4 {\r\n  height: 5rem;\r\n  width: 3rem;\r\n}\r\n.separator-nos-expertise {\r\n  height: 100%;\r\n  width: 1px;\r\n  border: 1px var(--blue) dashed;\r\n  margin: 0rem 5rem;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    margin: 0 2.5rem;\r\n  }\r\n}\r\n.text-nos-expertise {\r\n  font-size: 2.2rem;\r\n  margin: 5rem 0 0 0;\r\n}\r\n\r\n// nos valeurs\r\n.content-nos-valeurs {\r\n  position: relative;\r\n  height: 55rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-image: url(/src/assets/images/10-close-up-young-colleagues-having-meeting.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  text-align: center;\r\n  @include xs {\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.content-nos-valeurs::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  pointer-events: none;\r\n  z-index: 1;\r\n}\r\n\r\n.content-nos-valeurs > * {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.container-nos-valeurs {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  @include sm {\r\n    width: 100%;\r\n    justify-content: space-around;\r\n  }\r\n}\r\n.container-symbole-nos-valeurs {\r\n  margin: 0 4rem;\r\n}\r\n\r\n.text-nos-valeurs {\r\n  color: white;\r\n  margin: 2rem 2rem 0 2rem;\r\n}\r\n.symbole-nos-valeurs {\r\n  height: 8rem;\r\n  width: auto;\r\n}\r\n\r\n// notre equipe\r\n\r\n.content-notre-equipe {\r\n  @include xs {\r\n    display: none;\r\n  }\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 5rem;\r\n}\r\n\r\n.span-img-notre-equipe {\r\n  display: flex;\r\n}\r\n.span-img-notre-equipe-1 {\r\n  position: absolute;\r\n  top: -3rem;\r\n  @include sm {\r\n    top: -5rem;\r\n  }\r\n}\r\n\r\n.span-img-notre-equipe-2 {\r\n  position: absolute;\r\n  top: 10rem;\r\n  justify-content: space-between;\r\n  width: 85%;\r\n  @include sm {\r\n    width: 90%;\r\n  }\r\n}\r\n.span-img-notre-equipe-3 {\r\n  position: absolute;\r\n  bottom: -1.2rem;\r\n  justify-content: space-between;\r\n  width: 110%;\r\n}\r\n.img-notre-equipe {\r\n  height: 10rem;\r\n  width: 10rem;\r\n  border-radius: 30rem;\r\n}\r\n.img-notre-equipe-1 {\r\n  height: 12rem;\r\n  width: 12rem;\r\n}\r\n.demi-cercle-1 {\r\n  position: relative;\r\n  height: 42rem;\r\n  width: 77.6rem;\r\n  @include sm {\r\n    height: 40rem;\r\n    width: 70rem;\r\n  }\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: end;\r\n  border-radius: 40rem 40rem 0 0;\r\n  border-top: 2px dashed #ddd;\r\n  border-left: 2px dashed #ddd;\r\n  border-right: 2px dashed #ddd;\r\n}\r\n.demi-cercle-1::before {\r\n  content: \"\";\r\n  height: 90%;\r\n  width: 90%;\r\n  border-radius: 40rem 40rem 0 0;\r\n  border-top: 2px dashed #ddd;\r\n  border-left: 2px dashed #ddd;\r\n  border-right: 2px dashed #ddd;\r\n}\r\n.container-text-notre-equipe {\r\n  position: absolute;\r\n  height: 80%;\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: end;\r\n  text-align: center;\r\n}\r\n.text-notre-equipe {\r\n  font-weight: 300;\r\n  font-style: italic;\r\n  @include xs {\r\n    margin: 2rem;\r\n  }\r\n}\r\n.under-title-notre-equipe {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n  @include xs {\r\n    margin: 1rem 2rem;\r\n  }\r\n  @include sm {\r\n    margin: 1rem 2rem;\r\n  }\r\n}\r\n.info-post {\r\n  font-weight: 700;\r\n  @include sm {\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n.guillemet {\r\n  font-size: 2rem;\r\n  background: linear-gradient(to right, #f9517b, #ffd990);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n.title-notre-equipe {\r\n  margin-bottom: 8rem;\r\n  @include xs {\r\n    margin: 2rem;\r\n  }\r\n}\r\n\r\n// notre equipe xs\r\n\r\n.content-notre-equipe-xs {\r\n  height: auto;\r\n  width: 100%;\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  @include xs {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.container-text-notre-equipe-xs {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  text-align: center;\r\n}\r\n\r\n// votre besoin\r\n\r\n.content-votre-besoin {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #eee;\r\n  padding: 5rem;\r\n  @include xs {\r\n    padding: 2rem 0;\r\n  }\r\n  @include sm {\r\n    padding: 2rem 0;\r\n  }\r\n}\r\n.container-votre-besoin {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  height: auto;\r\n  width: 100%;\r\n  margin: 5rem;\r\n  @include xs {\r\n    flex-direction: column;\r\n    margin: 2rem;\r\n  }\r\n  @include sm {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.span-votre-besoin {\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 40rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 2rem;\r\n  text-align: center;\r\n  background: white;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.img-votre-besoin {\r\n  height: 25rem;\r\n  width: 100%;\r\n  margin-bottom: 2rem;\r\n  border-radius: 2rem 2rem 0 0;\r\n}\r\n.separator-votre-besoin {\r\n  height: 2px;\r\n  width: 80%;\r\n  margin: 2rem;\r\n  background: #eee;\r\n}\r\n.btn-votre-besoin {\r\n  margin: 5rem 0;\r\n}\r\n.text-votre-besoin {\r\n  font-weight: 300;\r\n}\r\n\r\n// notre reseau\r\n\r\n.content-notre-reseau {\r\n  height: 54rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: start;\r\n  background: url(/src/assets/images/14-map.jpg);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  @include xs {\r\n    background: none;\r\n    height: auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n  @include sm {\r\n    background: none;\r\n    height: auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n}\r\n.container-notre-reseau {\r\n  height: 70%;\r\n  width: 45%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n\r\n  margin: 2rem;\r\n  @include xs {\r\n    height: auto;\r\n    width: 100%;\r\n    align-items: center;\r\n  }\r\n  @include sm {\r\n    height: auto;\r\n    width: 100%;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.span-notre-reseau {\r\n  width: auto;\r\n  max-width: 40rem;\r\n  @include xs {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  @include sm {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.text-notre-reseau {\r\n  margin: 2rem 0;\r\n  @include xs {\r\n    margin: 2rem;\r\n  }\r\n  @include sm {\r\n    margin: 2rem;\r\n  }\r\n}\r\n.text-notre-reseau-m {\r\n  font-weight: 300;\r\n}\r\n.img-xs {\r\n  display: none;\r\n  @include xs {\r\n    display: flex;\r\n  }\r\n  @include sm {\r\n    display: flex;\r\n  }\r\n  height: 30rem;\r\n  width: 100%;\r\n  background: url(/src/assets/images/15-map-2.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  margin: 2rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index/french/index.scss":
/*!*************************************!*\
  !*** ./src/index/french/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index/french/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/images/1-img-header.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/1-img-header.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3679818865d5594e8a1c.jpg";

/***/ }),

/***/ "./src/assets/images/10-close-up-young-colleagues-having-meeting.jpg":
/*!***************************************************************************!*\
  !*** ./src/assets/images/10-close-up-young-colleagues-having-meeting.jpg ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "183ccdd81289dc018f9e.jpg";

/***/ }),

/***/ "./src/assets/images/14-map.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/14-map.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52b9c61b195daf4a193b.jpg";

/***/ }),

/***/ "./src/assets/images/15-map-2.png":
/*!****************************************!*\
  !*** ./src/assets/images/15-map-2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e23ab4fe2ad7926a1b6d.png";

/***/ }),

/***/ "./src/assets/images/2-qui_sommes_nous.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/2-qui_sommes_nous.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00c1f5b183e07f552bcf.jpg";

/***/ }),

/***/ "../../Documents/polices/Raleway-Black.ttf":
/*!*************************************************!*\
  !*** ../../Documents/polices/Raleway-Black.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8326789442b4f02f449.ttf";

/***/ }),

/***/ "../../Documents/polices/strasua.otf":
/*!*******************************************!*\
  !*** ../../Documents/polices/strasua.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52bda089827a7b6a3336.otf";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main1": 0
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
/*!***********************************!*\
  !*** ./src/index/french/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/assets/styles/style.scss */ "./src/assets/styles/style.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index/french/index.scss");


var grandComptes = document.querySelector(".grand-comptes");
var pmeOrganisations = document.querySelector(".pme-organisations");
var tpeAssociations = document.querySelector(".tpe-associations");
var underline0 = document.querySelector(".underline-0");
var underline1 = document.querySelector(".underline-1");
var underline2 = document.querySelector(".underline-2");
var underline3 = document.querySelector(".underline-3");

// grand compte

grandComptes.addEventListener("mouseover", function () {
  underline0.classList.add("underline-0-active-1");
  underline1.classList.add("underline-active-1");
});
grandComptes.addEventListener("mouseout", function () {
  underline0.classList.remove("underline-0-active-1");
  underline1.classList.remove("underline-active-1");
});

// pme organisations

pmeOrganisations.addEventListener("mouseover", function () {
  underline0.classList.add("underline-0-active-1");
  underline2.classList.add("underline-active-1");
});
pmeOrganisations.addEventListener("mouseout", function () {
  underline0.classList.remove("underline-0-active-1");
  underline2.classList.remove("underline-active-1");
});

// tpe-associations

tpeAssociations.addEventListener("mouseover", function () {
  underline0.classList.add("underline-0-active-1");
  underline3.classList.add("underline-active-1");
});
tpeAssociations.addEventListener("mouseout", function () {
  underline0.classList.remove("underline-0-active-1");
  underline3.classList.remove("underline-active-1");
});
var catala = document.querySelector(".catala");
var english = document.querySelector(".english");
var spanish = document.querySelector(".spanish");
var underline7 = document.querySelector(".underline-7");
var underline8 = document.querySelector(".underline-8");
var underline9 = document.querySelector(".underline-9");
var underline10 = document.querySelector(".underline-10");

// catala

catala.addEventListener("mouseover", function () {
  underline8.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
catala.addEventListener("mouseout", function () {
  underline8.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// english

english.addEventListener("mouseover", function () {
  underline9.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
english.addEventListener("mouseout", function () {
  underline9.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// spanish

spanish.addEventListener("mouseover", function () {
  underline10.classList.add("underline-6-active-1");
  underline7.classList.add("underline-7-active-1");
});
spanish.addEventListener("mouseout", function () {
  underline10.classList.remove("underline-6-active-1");
  underline7.classList.remove("underline-7-active-1");
});

// fleche rotate

var menuVosBesoins = document.querySelector(".menu-vos-besoins");
var menuLangue = document.querySelector(".menu-langue");
var fleche1 = document.querySelector(".fleche-1");
var fleche2 = document.querySelector(".fleche-2");
menuVosBesoins.addEventListener("mouseover", function () {
  fleche1.classList.add("angle-active-1");
});
menuVosBesoins.addEventListener("mouseout", function () {
  fleche1.classList.remove("angle-active-1");
});
menuLangue.addEventListener("mouseover", function () {
  fleche2.classList.add("angle-active-1");
});
menuLangue.addEventListener("mouseout", function () {
  fleche2.classList.remove("angle-active-1");
});

// btn xs

var btn = document.querySelector(".btn-xs");
var bar1 = document.querySelector(".bar-1");
var bar2 = document.querySelector(".bar-2");
var bar3 = document.querySelector(".bar-3");
var nav = document.querySelector("nav");
var containerGeneral = document.querySelector(".container-general");
btn.addEventListener("click", function () {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    nav.classList.remove("nav-active-1-xs");
    nav.classList.remove("nav-active-2-xs");
    setTimeout(function () {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      nav.classList.add("nav-active-1-xs");
    }, 300);
    setTimeout(function () {
      nav.style.display = "none";
      nav.classList.add("nav-active-2-xs");
    }, 1000);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(function () {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      nav.style.display = "flex";
    }, 300);
  }
});

// menu vos besoins xs

var menuVosBesoinsXS = document.querySelector(".menu-vos-besoins-xs");
var menuVosBesoinsContainerXS = document.querySelector(".menu-vos-besoins-container-xs");
var navContainerXs = document.querySelector(".nav-container-xs");
var menuVosBesoinsContainerXs = document.querySelector(".menu-vos-besoins-container-xs");
var flecheXs2 = document.querySelector(".fleche-xs-2");
menuVosBesoinsXS.addEventListener("click", function () {
  if (flecheXs2.classList.contains("angle-active-1")) {
    flecheXs2.classList.remove("angle-active-1");
    navContainerXs.classList.remove("nav-container-xs-active-1");
    menuVosBesoinsContainerXS.classList.add("menu-vos-besoins-container-xs-active-1");
    menuVosBesoinsXS.classList.remove("menu-vos-besoins-xs-active-1");
    setTimeout(function () {
      menuVosBesoinsContainerXs.style.display = "none";
      menuVosBesoinsContainerXS.classList.remove("menu-vos-besoins-container-xs-active-1");
    }, 1000);
  } else {
    menuVosBesoinsXS.classList.add("menu-vos-besoins-xs-active-1");
    setTimeout(function () {
      flecheXs2.classList.add("angle-active-1");
      menuVosBesoinsContainerXs.style.display = "flex";
      navContainerXs.classList.add("nav-container-xs-active-1");
    }, 300);
  }
});

// menu langue xs

var menuLangueXs = document.querySelector(".menu-langue-xs");
var containerMenulangueXs = document.querySelector(".container-menu-langue-xs");
var flecheXs1 = document.querySelector(".fleche-xs-1");
menuLangueXs.addEventListener("click", function () {
  if (flecheXs1.classList.contains("angle-active-1")) {
    flecheXs1.classList.remove("angle-active-1");
    containerMenulangueXs.classList.add("container-menu-langue-xs-active-1");
    setTimeout(function () {
      containerMenulangueXs.style.display = "none";
      containerMenulangueXs.classList.remove("container-menu-langue-xs-active-1");
    }, 1000);
  } else {
    flecheXs1.classList.add("angle-active-1");
    containerMenulangueXs.style.display = "flex";
  }
});

// header scroll

var headerContainer = document.querySelector(".header-container");
var header = document.querySelector(".header");
var containerMenuLangue = document.querySelector(".container-menu-langue");
var menuVosBesoinsContainer = document.querySelector(".menu-vos-besoins-container");
window.addEventListener("scroll", function () {
  var _document$documentEle = document.documentElement,
    scrollTop = _document$documentEle.scrollTop,
    clientHeight = _document$documentEle.clientHeight;
  var topElementToTopViewport = headerContainer.getBoundingClientRect().top;
  if (scrollTop > scrollTop + topElementToTopViewport - clientHeight * -0.9) {
    header.classList.add("header-active");
    containerMenuLangue.classList.add("container-menu-langue-active-1");
    menuVosBesoinsContainer.classList.add("menu-vos-besoins-container-active-1");
  } else {
    header.classList.remove("header-active");
    containerMenuLangue.classList.remove("container-menu-langue-active-1");
    menuVosBesoinsContainer.classList.remove("menu-vos-besoins-container-active-1");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main1-bundle.js.map