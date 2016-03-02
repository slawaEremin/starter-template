/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _widget = __webpack_require__(1);\n\nvar _widget2 = _interopRequireDefault(_widget);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nalert(_widget2.default);\n\nconsole.log('slawa');//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9zY3JpcHRzL3BhZ2VzL2hvbWUtcGFnZS5qcz9lNzkyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHRlc3QgZnJvbSAnLi8uLi9jb21tb24vd2lkZ2V0LmpzJztcblxuYWxlcnQodGVzdCk7XG5cbmNvbnNvbGUubG9nKCdzbGF3YScpO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9zY3JpcHRzL3BhZ2VzL2hvbWUtcGFnZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar test = '12';\n\nexports.default = test;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9zY3JpcHRzL2NvbW1vbi93aWRnZXQuanM/MTRmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCB0ZXN0ID0gJzEyJztcblxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9zY3JpcHRzL2NvbW1vbi93aWRnZXQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);