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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/app.jsx":
/*!**************************************!*\
  !*** ./app/javascript/packs/app.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/qusai/joShop/app/javascript/packs/app.jsx: Unexpected token (11:2)\n\n   9 | \n  10 | const App = props => (\n> 11 |   return {\n     |   ^\n  12 |     <Shops />  \n  13 |   }\n  14 | \n    at Object._raise (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:748:17)\n    at Object.raiseWithData (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.raise (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.unexpected (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9101:16)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10575:20)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Object.parseMaybeConditional (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Object.parseMaybeAssign (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9893:39\n    at Object.allowInAnd (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Object.parseMaybeAssignAllowIn (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Object.parseParenAndDistinguishExpression (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10752:28)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10470:21)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Object.parseMaybeUnary (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Object.parseExprOps (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Object.parseMaybeConditional (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Object.parseMaybeAssign (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Object.parseFunctionBody (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:11214:24)\n    at Object.parseArrowExpression (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:11193:10)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10428:25)\n    at Object.parseExprAtom (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:4763:20)\n    at Object.parseExprSubscripts (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Object.parseUpdate (/home/qusai/joShop/node_modules/@babel/parser/lib/index.js:10130:21)");

/***/ })

/******/ });
//# sourceMappingURL=app-333a8d9185b95331fbc5.js.map