"use strict";
(self["webpackChunkcore"] = self["webpackChunkcore"] || []).push([["/app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // <-- Make jquery global
__webpack_require__(/*! jquery.typewatch */ "./node_modules/jquery.typewatch/jquery.typewatch.js");

window.DataTable = datatables_net__WEBPACK_IMPORTED_MODULE_0__["default"];

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