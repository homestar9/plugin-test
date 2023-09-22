(self["webpackChunkcore"] = self["webpackChunkcore"] || []).push([["/app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // <-- Make jquery global
__webpack_require__(/*! jquery.typewatch */ "./node_modules/jquery.typewatch/jquery.typewatch.js");

// init the search field with typewatch
var searchField = $('#search').typeWatch({
  callback: function callback(value) {
    console.log('you typed ' + value);
  },
  wait: 0,
  highlight: true,
  captureLength: 2
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/vendor"], () => (__webpack_exec__("./src/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);