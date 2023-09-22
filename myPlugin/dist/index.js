(self["webpackChunkmyplugin"] = self["webpackChunkmyplugin"] || []).push([["/index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

(function () {
  // init the search field with typewatch
  var searchField = $('#pluginSearch').typeWatch({
    callback: function callback(value) {
      console.log('you typed ' + value + ' in the plugin search field');
    },
    wait: 0,
    highlight: true,
    captureLength: 2
  });

  // init the datatable
  new DataTable('#pluginExample');
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);