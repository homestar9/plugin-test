(self["webpackChunkmyplugin"] = self["webpackChunkmyplugin"] || []).push([["/index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

(function () {
  $('#view').text('You are looking at myplugin!');

  // init the search field with typewatch
  var searchField = $('#pluginSearch').typeWatch({
    callback: function callback(value) {
      console.log('you typed ' + value);
    },
    wait: 0,
    highlight: true,
    captureLength: 2
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);