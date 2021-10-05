"use strict";
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./components/Pokemon.tsx":
/*!********************************!*\
  !*** ./components/Pokemon.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/pokemon.module.css */ "./styles/pokemon.module.css");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/api/pokemon/pokeapi */ "./pages/api/pokemon/pokeapi.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\components\\Pokemon.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Pokemon = function Pokemon(_ref) {
  _s();

  var pokemon = _ref.pokemon,
      barOptions = _ref.barOptions,
      editMode = _ref.editMode,
      favorited = _ref.favorited,
      session = _ref.session;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(pokemon),
      pokemonData = _useState[0],
      setPokemonData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(favorited),
      favorite = _useState2[0],
      setFavorited = _useState2[1];

  var changeValue = function changeValue(e, key) {
    if (!e) {
      return;
    }

    var keys = key.split(",").map(function (k) {
      return k.trim();
    });
    console.log(keys);
    console.log(e);
  };

  var setFavorite = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(fav) {
      var body;
      return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("setting favourite to ", fav);
              setFavorited(fav);

              if (!fav) {
                _context.next = 14;
                break;
              }

              _context.prev = 3;
              body = {
                id: pokemon.id,
                name: pokemon.name,
                url: ""
              };
              _context.next = 7;
              return fetch("/api/post", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              console.error(_context.t0);

            case 12:
              _context.next = 15;
              break;

            case 14:
              (0,_pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_6__.unfavourite)(pokemon.id);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 9]]);
    }));

    return function setFavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var statData = {
    label: "ability scores",
    data: pokemonData.stats.map(function (stat) {
      return stat.base_stat;
    }),
    backgroundColor: barOptions.barColors,
    borderColor: barOptions.barBorders
  };
  var labels = pokemonData.stats.map(function (stat) {
    return stat.stat.name;
  });
  var data = {
    labels: labels,
    datasets: [statData]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default()["pokemon-container"]),
    children: [session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().fav), (0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().star), favorite)),
      onClick: /*#__PURE__*/(0,C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_edcqw_Desktop_ty_projektit_pokehub_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return setFavorite(!favorite);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        onBlur: function onBlur(e) {
          return changeValue(e.currentTarget.textContent, "name");
        },
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().index),
      children: [" #", pokemonData.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().height),
      children: [" ", "Height:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this), "'"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().weight),
      children: [" ", "Weight:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.weight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, _this), " ", "lbs", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),
      src: pokemonData.sprites.front_default,
      alt: "sprite of the pokemon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().abilities),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
        children: "Abilities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
        children: ["*(", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
          children: "Hidden ability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().abilitiesContainer),
        children: pokemonData.abilities.map(function (a, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().textActive) : "",
              contentEditable: editMode,
              children: [a.ability.name, a.is_hidden && "*"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().type),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
        children: "Types"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().abilitiesContainer),
        children: pokemonData.types.map(function (t, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h4", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().textActive) : "",
              contentEditable: editMode,
              children: t.type.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_8___default().stats),
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(Pokemon, "CWTeXUjLP8lT+zx9p+U9UO8a9Sg=");

_c = Pokemon;
/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

var _c;

$RefreshReg$(_c, "Pokemon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9rZW1vbi9baWRdLjY5YTVjMjg0YWQwMWJmZmE2ZWJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYUEsSUFBTU0sT0FBZ0MsR0FBRyxTQUFuQ0EsT0FBbUMsT0FNbkM7QUFBQTs7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxTQUVJLFFBRkpBLFNBRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7O0FBQ0osa0JBQXNDVCwrQ0FBUSxDQUFXSyxPQUFYLENBQTlDO0FBQUEsTUFBT0ssV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBaUNYLCtDQUFRLENBQUNRLFNBQUQsQ0FBekM7QUFBQSxNQUFPSSxRQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBbUJDLEdBQW5CLEVBQW1DO0FBQ3JELFFBQUksQ0FBQ0QsQ0FBTCxFQUFRO0FBQ047QUFDRDs7QUFDRCxRQUFNRSxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLEdBQVYsRUFBZUMsR0FBZixDQUFtQixVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEVBQVA7QUFBQSxLQUFuQixDQUFiO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixDQUFaO0FBQ0QsR0FQRDs7QUFTQSxNQUFNUyxXQUFXO0FBQUEsNFVBQUcsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCSCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1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c0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgSVBva2Vtb24gfSBmcm9tIFwicG9rZWFwaS10eXBlc2NyaXB0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdW5mYXZvdXJpdGUgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL3Bva2Vtb24vcG9rZWFwaVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJPcHRpb25zIHtcclxuICBiYXJDb2xvcnM6IHN0cmluZ1tdO1xyXG4gIGJhckJvcmRlcnM/OiBzdHJpbmdbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBva2VWaWV3UHJvcHMge1xyXG4gIHNlc3Npb24/OiBTZXNzaW9uO1xyXG4gIHBva2Vtb246IElQb2tlbW9uO1xyXG4gIGJhck9wdGlvbnM6IEJhck9wdGlvbnM7XHJcbiAgZWRpdE1vZGU/OiBib29sZWFuO1xyXG4gIGZhdm9yaXRlZDogYm9vbGVhbjtcclxufVxyXG5jb25zdCBQb2tlbW9uOiBSZWFjdC5GQzxQb2tlVmlld1Byb3BzPiA9ICh7XHJcbiAgcG9rZW1vbixcclxuICBiYXJPcHRpb25zLFxyXG4gIGVkaXRNb2RlLFxyXG4gIGZhdm9yaXRlZCxcclxuICBzZXNzaW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Bva2Vtb25EYXRhLCBzZXRQb2tlbW9uRGF0YV0gPSB1c2VTdGF0ZTxJUG9rZW1vbj4ocG9rZW1vbik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlLCBzZXRGYXZvcml0ZWRdID0gdXNlU3RhdGUoZmF2b3JpdGVkKTtcclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCIsXCIpLm1hcCgoaykgPT4gay50cmltKCkpO1xyXG4gICAgY29uc29sZS5sb2coa2V5cyk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRGYXZvcml0ZSA9IGFzeW5jIChmYXY6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBmYXZvdXJpdGUgdG8gXCIsIGZhdik7XHJcbiAgICBzZXRGYXZvcml0ZWQoZmF2KTtcclxuICAgIGlmIChmYXYpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBpZDogcG9rZW1vbi5pZCwgbmFtZTogcG9rZW1vbi5uYW1lLCB1cmw6IFwiXCIgfTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuZmF2b3VyaXRlKHBva2Vtb24uaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXREYXRhID0ge1xyXG4gICAgbGFiZWw6IFwiYWJpbGl0eSBzY29yZXNcIixcclxuICAgIGRhdGE6IHBva2Vtb25EYXRhLnN0YXRzLm1hcCgoc3RhdCkgPT4gc3RhdC5iYXNlX3N0YXQpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYXJPcHRpb25zLmJhckNvbG9ycyxcclxuICAgIGJvcmRlckNvbG9yOiBiYXJPcHRpb25zLmJhckJvcmRlcnMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGFiZWxzID0gcG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0KSA9PiBzdGF0LnN0YXQubmFtZSk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgZGF0YXNldHM6IFtzdGF0RGF0YV0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBva2Vtb24tY29udGFpbmVyXCJdfT5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuZmF2LCB7XHJcbiAgICAgICAgICAgIFtzdHlsZXMuc3Rhcl06IGZhdm9yaXRlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBzZXRGYXZvcml0ZSghZmF2b3JpdGUpfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQmx1cj17KGUpID0+IGNoYW5nZVZhbHVlKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCwgXCJuYW1lXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLm5hbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXh9PiAje3Bva2Vtb25EYXRhLmlkfTwvaDE+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBIZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS5oZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYjMzk7XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy53ZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBXZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS53ZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfXtcIiBcIn1cclxuICAgICAgICBsYnN7XCIgXCJ9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICBzcmM9e3Bva2Vtb25EYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICBhbHQ9XCJzcHJpdGUgb2YgdGhlIHBva2Vtb25cIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc30+XHJcbiAgICAgICAgPGgyPkFiaWxpdGllczwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAqKDxpPkhpZGRlbiBhYmlsaXR5PC9pPilcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYmlsaXRpZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLmFiaWxpdGllcy5tYXAoKGEsIGkpID0+IChcclxuICAgICAgICAgICAgPGg0IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9e2VkaXRNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthLmFiaWxpdHkubmFtZX1cclxuICAgICAgICAgICAgICAgIHthLmlzX2hpZGRlbiAmJiBcIipcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZX0+XHJcbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cG9rZW1vbkRhdGEudHlwZXMubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxoNCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2VkaXRNb2RlID8gc3R5bGVzLnRleHRBY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dC50eXBlLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEJhciBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30gZGF0YT17ZGF0YX0+PC9CYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcclxuIl0sIm5hbWVzIjpbImNsYXNzbmFtZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiQmFyIiwic3R5bGVzIiwidW5mYXZvdXJpdGUiLCJQb2tlbW9uIiwicG9rZW1vbiIsImJhck9wdGlvbnMiLCJlZGl0TW9kZSIsImZhdm9yaXRlZCIsInNlc3Npb24iLCJwb2tlbW9uRGF0YSIsInNldFBva2Vtb25EYXRhIiwiZmF2b3JpdGUiLCJzZXRGYXZvcml0ZWQiLCJjaGFuZ2VWYWx1ZSIsImUiLCJrZXkiLCJrZXlzIiwic3BsaXQiLCJtYXAiLCJrIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRGYXZvcml0ZSIsImZhdiIsImJvZHkiLCJpZCIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0RGF0YSIsImxhYmVsIiwiZGF0YSIsInN0YXRzIiwic3RhdCIsImJhc2Vfc3RhdCIsImJhY2tncm91bmRDb2xvciIsImJhckNvbG9ycyIsImJvcmRlckNvbG9yIiwiYmFyQm9yZGVycyIsImxhYmVscyIsImRhdGFzZXRzIiwic3RhciIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInRleHRBY3RpdmUiLCJpbmRleCIsImhlaWdodCIsIndlaWdodCIsImltYWdlIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJhYmlsaXRpZXMiLCJhYmlsaXRpZXNDb250YWluZXIiLCJhIiwiaSIsImFiaWxpdHkiLCJpc19oaWRkZW4iLCJ0eXBlIiwidHlwZXMiLCJ0Il0sInNvdXJjZVJvb3QiOiIifQ==