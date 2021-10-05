"use strict";
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./pages/api/pokemon/pokeapi.ts":
/*!**************************************!*\
  !*** ./pages/api/pokemon/pokeapi.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemons": function() { return /* binding */ getPokemons; },
/* harmony export */   "getPokemon": function() { return /* binding */ getPokemon; },
/* harmony export */   "listAll": function() { return /* binding */ listAll; },
/* harmony export */   "unfavourite": function() { return /* binding */ unfavourite; }
/* harmony export */ });
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pokeapi-typescript */ "./node_modules/pokeapi-typescript/dist/index.js");
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var getPokemons = /*#__PURE__*/function () {
  var _ref = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(pokemonString) {
    var pokemons;
    return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pokemons = [];
            pokemonString.split(',').forEach( /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(p, i) {
                var pokemon;
                return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2___default().Pokemon.resolve(p.trim());

                      case 2:
                        pokemon = _context.sent;
                        pokemons[i] = pokemon;

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            console.log(pokemons);
            return _context2.abrupt("return", pokemons);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPokemons(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getPokemon = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(pokestring) {
    var pokemon;
    return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2___default().Pokemon.resolve(pokestring.trim());

          case 2:
            pokemon = _context3.sent;
            return _context3.abrupt("return", pokemon);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPokemon(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var listAll = /*#__PURE__*/function () {
  var _ref4 = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
    var all;
    return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return pokeapi_typescript__WEBPACK_IMPORTED_MODULE_2___default().Pokemon.listAll();

          case 2:
            all = _context4.sent;
            return _context4.abrupt("return", all);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function listAll() {
    return _ref4.apply(this, arguments);
  };
}();
var unfavourite = /*#__PURE__*/function () {
  var _ref5 = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(id) {
    return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("http://localhost:3000/api/post/".concat(id), {
              method: 'DELETE'
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function unfavourite(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjU4YjQwZDU2YmM2MDQ2MGNiNjVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFTyxJQUFNQyxXQUFXO0FBQUEseVVBQUcsa0JBQU9DLGFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxZQUFBQSxRQURpQixHQUNLLEVBREw7QUFFdkJELFlBQUFBLGFBQWEsQ0FBQ0UsS0FBZCxDQUFvQixHQUFwQixFQUF5QkMsT0FBekI7QUFBQSxzVkFBaUMsaUJBQU9DLENBQVAsRUFBU0MsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNQUCx5RUFBQSxDQUF3Qk0sQ0FBQyxDQUFDSSxJQUFGLEVBQXhCLENBRE87O0FBQUE7QUFDdkJDLHdCQUFBQSxPQUR1QjtBQUU3QlIsd0JBQUFBLFFBQVEsQ0FBQ0ksQ0FBRCxDQUFSLEdBQWVJLE9BQWY7O0FBRjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUFDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixRQUFaO0FBTnVCLDhDQU9oQkEsUUFQZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEYsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjtBQVVBLElBQU1hLFVBQVU7QUFBQSwwVUFBRyxrQkFBTUMsVUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBZix5RUFBQSxDQUF3QmUsVUFBVSxDQUFDTCxJQUFYLEVBQXhCLENBREE7O0FBQUE7QUFDaEJDLFlBQUFBLE9BRGdCO0FBQUEsOENBRWZBLE9BRmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkcsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjtBQU1BLElBQU1FLE9BQU87QUFBQSwwVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEaEIseUVBQUEsRUFEQzs7QUFBQTtBQUNiaUIsWUFBQUEsR0FEYTtBQUFBLDhDQUVaQSxHQUZZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBELE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjtBQU1BLElBQU1FLFdBQVc7QUFBQSwwVUFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYkMsS0FBSywwQ0FBbUNELEVBQW5DLEdBQXlDO0FBQ2xERSxjQUFBQSxNQUFNLEVBQUU7QUFEMEMsYUFBekMsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYSCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9wb2tlbW9uL3Bva2VhcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUG9rZUFQSSwgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb25zID0gYXN5bmMoIHBva2Vtb25TdHJpbmc6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb25zOklQb2tlbW9uW10gPSBbXVxuICAgIHBva2Vtb25TdHJpbmcuc3BsaXQoJywnKS5mb3JFYWNoKGFzeW5jIChwLGkpID0+IHtcbiAgICAgICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IFBva2VBUEkuUG9rZW1vbi5yZXNvbHZlKHAudHJpbSgpKVxuICAgICAgICBwb2tlbW9uc1tpXSA9IChwb2tlbW9uKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocG9rZW1vbnMpXG4gICAgcmV0dXJuIHBva2Vtb25zXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb2tlbW9uID0gYXN5bmMocG9rZXN0cmluZzpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLnJlc29sdmUocG9rZXN0cmluZy50cmltKCkpO1xuICAgIHJldHVybiBwb2tlbW9uXG59XG5cblxuZXhwb3J0IGNvbnN0IGxpc3RBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLmxpc3RBbGwoKVxuICAgIHJldHVybiBhbGw7XG59XG5cblxuZXhwb3J0IGNvbnN0IHVuZmF2b3VyaXRlID0gYXN5bmMgKGlkOm51bWJlcikgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJQb2tlQVBJIiwiZ2V0UG9rZW1vbnMiLCJwb2tlbW9uU3RyaW5nIiwicG9rZW1vbnMiLCJzcGxpdCIsImZvckVhY2giLCJwIiwiaSIsIlBva2Vtb24iLCJyZXNvbHZlIiwidHJpbSIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0UG9rZW1vbiIsInBva2VzdHJpbmciLCJsaXN0QWxsIiwiYWxsIiwidW5mYXZvdXJpdGUiLCJpZCIsImZldGNoIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==