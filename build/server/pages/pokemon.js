(() => {
var exports = {};
exports.id = "pages/pokemon";
exports.ids = ["pages/pokemon"];
exports.modules = {

/***/ "./components/PokemonIcon.tsx":
/*!************************************!*\
  !*** ./components/PokemonIcon.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonIcon": () => (/* binding */ PokemonIcon)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/pokemon/pokeapi */ "./pages/api/pokemon/pokeapi.ts");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pokemon.module.css */ "./styles/pokemon.module.css");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\components\\PokemonIcon.tsx";





const PokemonIcon = pokemon => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: iconUrl,
    1: setIconUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: iconId,
    1: setIconId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const addPokemonInfo = async pokemon => {
    const poke = await (0,_pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_2__.getPokemon)(pokemon);
    setIconUrl(poke.sprites.front_default);
    setIconId(poke.id);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    addPokemonInfo(pokemon.name);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_4___default().pokemonIcon),
    onClick: () => router.push(`/pokemon/${pokemon.name}`),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_4___default().iconText),
      children: ["#", String(iconId), " ", pokemon.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), iconUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
      width: 96,
      height: 96,
      src: iconUrl,
      alt: "sprite"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/api/pokemon/pokeapi.ts":
/*!**************************************!*\
  !*** ./pages/api/pokemon/pokeapi.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemons": () => (/* binding */ getPokemons),
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon),
/* harmony export */   "listAll": () => (/* binding */ listAll),
/* harmony export */   "unfavourite": () => (/* binding */ unfavourite)
/* harmony export */ });
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pokeapi-typescript */ "pokeapi-typescript");
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0__);

const getPokemons = async pokemonString => {
  const pokemons = [];
  pokemonString.split(',').forEach(async (p, i) => {
    const pokemon = await pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0___default().Pokemon.resolve(p.trim());
    pokemons[i] = pokemon;
  });
  console.log(pokemons);
  return pokemons;
};
const getPokemon = async pokestring => {
  const pokemon = await pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0___default().Pokemon.resolve(pokestring.trim());
  return pokemon;
};
const listAll = async () => {
  const all = await pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0___default().Pokemon.listAll();
  return all;
};
const unfavourite = async id => {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./pages/pokemon/index.tsx":
/*!*********************************!*\
  !*** ./pages/pokemon/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pokemon.module.css */ "./styles/pokemon.module.css");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/pokemon/pokeapi */ "./pages/api/pokemon/pokeapi.ts");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/commons.module.css */ "./styles/commons.module.css");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PokemonIcon */ "./components/PokemonIcon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\pages\\pokemon\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const PokemonHome = ({
  pokemons,
  pageSize = 100,
  startPage = 0,
  title = "Pokemons"
}) => {
  const {
    0: visiblePokemons,
    1: setPokemon
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pokemons.slice(startPage * pageSize, Math.min(startPage * pageSize + pageSize, pokemons.length))); //console.log("pokemons", pokemons, visiblePokemons, startPage, pageSize);

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startPage);
  const lastPageNumber = Math.floor(pokemons.length / pageSize);

  const handlePageChange = pageNumber => {
    const clamped = Math.max(0, Math.min(pageNumber, lastPageNumber));
    setPage(clamped);
    setPokemon(pokemons.slice(clamped * pageSize, clamped * pageSize + pageSize));
  };

  const NextPage = ({
    pageNumber,
    text,
    disabled
  }) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      onClick: () => handlePageChange(pageNumber),
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().button), {
        [(_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().disabled)]: disabled
      }),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined);
  };

  const PageChanger = () => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().flex), (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().pageContainer)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NextPage, {
        disabled: page <= 0,
        pageNumber: page - 1,
        text: "Previous Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: page
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(NextPage, {
        disabled: page >= lastPageNumber,
        pageNumber: page + 1,
        text: "Next Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    style: {
      display: "grid"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
      style: {
        justifySelf: "center",
        fontSize: "28px"
      },
      children: [" ", title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageChanger, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_6___default().iconContainer),
      children: visiblePokemons.map((pokemon, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PokemonIcon__WEBPACK_IMPORTED_MODULE_3__.PokemonIcon, _objectSpread({}, pokemon), i, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PageChanger, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};

const getStaticProps = async () => {
  const pokemon = await (0,_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_1__.listAll)();
  return {
    props: {
      pokemons: pokemon.results
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonHome);

/***/ }),

/***/ "./styles/commons.module.css":
/*!***********************************!*\
  !*** ./styles/commons.module.css ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "commons_button__3PpUQ",
	"secondaryButton": "commons_secondaryButton__39qNs",
	"disabled": "commons_disabled__1ec1V",
	"pageContainer": "commons_pageContainer__1zB8_",
	"main": "commons_main__3bW7D",
	"header-container": "commons_header-container__2dmGm",
	"profile-container": "commons_profile-container__3wjPg",
	"container-flex": "commons_container-flex__1p3lI",
	"profile-pic": "commons_profile-pic__3gXyH",
	"profileSub": "commons_profileSub__1OECI",
	"profile": "commons_profile__2WU2a",
	"openDown": "commons_openDown__34XXe",
	"closed": "commons_closed__1Nv77",
	"hidden": "commons_hidden__3SV0v",
	"home-button": "commons_home-button__DNvp6",
	"search-container": "commons_search-container__Y6qQM",
	"container": "commons_container___A1qG",
	"end": "commons_end__3Gwpn"
};


/***/ }),

/***/ "./styles/pokemon.module.css":
/*!***********************************!*\
  !*** ./styles/pokemon.module.css ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"pokemon-container": "pokemon_pokemon-container__2z-da",
	"abilitiesContainer": "pokemon_abilitiesContainer__3C-um",
	"abilities": "pokemon_abilities__wgqnn",
	"textActive": "pokemon_textActive__hrj18",
	"edit": "pokemon_edit__2SawQ",
	"type": "pokemon_type__3zc-I",
	"name": "pokemon_name__226KE",
	"index": "pokemon_index__27yo0",
	"height": "pokemon_height__1Hs4d",
	"weight": "pokemon_weight__BNwkw",
	"image": "pokemon_image__1EnJ0",
	"stats": "pokemon_stats__1EGcH",
	"fav": "pokemon_fav__2gY3a",
	"star": "pokemon_star__NbVIb",
	"scaleUp": "pokemon_scaleUp__2QVSj",
	"iconContainer": "pokemon_iconContainer__u5kGj",
	"pokemonIcon": "pokemon_pokemonIcon__3qjol",
	"iconText": "pokemon_iconText__bSshw",
	"pokefilter": "pokemon_pokefilter__3_hi5",
	"container": "pokemon_container__1JoWk"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "pokeapi-typescript":
/*!*************************************!*\
  !*** external "pokeapi-typescript" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("pokeapi-typescript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBUyxFQUFFMUMsaUZBQWhCO0FBQUEsZ0JBQ0cyQyxlQUFlLENBQUN5QixHQUFoQixDQUFvQixDQUFDbEUsT0FBRCxFQUFVdUIsQ0FBVixrQkFDbkIsOERBQUMsZ0VBQUQsb0JBQXlCdkIsT0FBekIsR0FBa0J1QixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQVNFLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBeEVEOztBQTBFTyxNQUFNNEMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1uRSxPQUFPLEdBQUcsTUFBTThCLDZEQUFPLEVBQTdCO0FBQ0EsU0FBTztBQUFFc0MsSUFBQUEsS0FBSyxFQUFFO0FBQUVqRCxNQUFBQSxRQUFRLEVBQUVuQixPQUFPLENBQUNxRTtBQUFwQjtBQUFULEdBQVA7QUFDRCxDQUhNO0FBS1AsaUVBQWVoQyxXQUFmOzs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9jb21wb25lbnRzL1Bva2Vtb25JY29uLnRzeCIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3BhZ2VzL2FwaS9wb2tlbW9uL3Bva2VhcGkudHMiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9wb2tlbW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3N0eWxlcy9jb21tb25zLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9zdHlsZXMvcG9rZW1vbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcInBva2VhcGktdHlwZXNjcmlwdFwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJTmFtZWRBcGlSZXNvdXJjZSwgSVBva2Vtb24gfSBmcm9tIFwicG9rZWFwaS10eXBlc2NyaXB0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0UG9rZW1vbiB9IGZyb20gXCIuLi9wYWdlcy9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb2tlbW9uSWNvbjogUmVhY3QuRkM8SU5hbWVkQXBpUmVzb3VyY2U8SVBva2Vtb24+PiA9IChwb2tlbW9uKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2ljb25VcmwsIHNldEljb25VcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ljb25JZCwgc2V0SWNvbklkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBhZGRQb2tlbW9uSW5mbyA9IGFzeW5jIChwb2tlbW9uOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBva2UgPSBhd2FpdCBnZXRQb2tlbW9uKHBva2Vtb24pO1xyXG4gICAgc2V0SWNvblVybChwb2tlLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCk7XHJcbiAgICBzZXRJY29uSWQocG9rZS5pZCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWRkUG9rZW1vbkluZm8ocG9rZW1vbi5uYW1lKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb2tlbW9uSWNvbn1cclxuICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wb2tlbW9uLyR7cG9rZW1vbi5uYW1lfWApfVxyXG4gICAgPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pY29uVGV4dH0+XHJcbiAgICAgICAgI3tTdHJpbmcoaWNvbklkKX0ge3Bva2Vtb24ubmFtZX1cclxuICAgICAgPC9wPlxyXG4gICAgICB7aWNvblVybCAmJiA8aW1nIHdpZHRoPXs5Nn0gaGVpZ2h0PXs5Nn0gc3JjPXtpY29uVXJsfSBhbHQ9XCJzcHJpdGVcIiAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIlxuaW1wb3J0IFBva2VBUEksIHsgSVBva2Vtb24gfSBmcm9tIFwicG9rZWFwaS10eXBlc2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQb2tlbW9ucyA9IGFzeW5jKCBwb2tlbW9uU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uczpJUG9rZW1vbltdID0gW11cbiAgICBwb2tlbW9uU3RyaW5nLnNwbGl0KCcsJykuZm9yRWFjaChhc3luYyAocCxpKSA9PiB7XG4gICAgICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBQb2tlQVBJLlBva2Vtb24ucmVzb2x2ZShwLnRyaW0oKSlcbiAgICAgICAgcG9rZW1vbnNbaV0gPSAocG9rZW1vbilcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHBva2Vtb25zKVxuICAgIHJldHVybiBwb2tlbW9uc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbiA9IGFzeW5jKHBva2VzdHJpbmc6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IFBva2VBUEkuUG9rZW1vbi5yZXNvbHZlKHBva2VzdHJpbmcudHJpbSgpKTtcbiAgICByZXR1cm4gcG9rZW1vblxufVxuXG5cbmV4cG9ydCBjb25zdCBsaXN0QWxsID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGF3YWl0IFBva2VBUEkuUG9rZW1vbi5saXN0QWxsKClcbiAgICByZXR1cm4gYWxsO1xufVxuXG5cbmV4cG9ydCBjb25zdCB1bmZhdm91cml0ZSA9IGFzeW5jIChpZDpudW1iZXIpID0+IHtcbiAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdC8ke2lkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbn1cblxuXG4iLCJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNSZXN1bHQsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IElOYW1lZEFwaVJlc291cmNlLCBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3Bva2Vtb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsaXN0QWxsIH0gZnJvbSBcIi4uL2FwaS9wb2tlbW9uL3Bva2VhcGlcIjtcclxuaW1wb3J0IGNvbW1vbnMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jb21tb25zLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUG9rZW1vbkljb24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb2tlbW9uSWNvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uUHJvcHMge1xyXG4gIHBva2Vtb25zOiBJTmFtZWRBcGlSZXNvdXJjZTxJUG9rZW1vbj5bXTtcclxuICBwYWdlU2l6ZT86IG51bWJlcjtcclxuICBzdGFydFBhZ2U/OiBudW1iZXI7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBva2Vtb25Ib21lOiBOZXh0UGFnZTxQb2tlbW9uUHJvcHM+ID0gKHtcclxuICBwb2tlbW9ucyxcclxuICBwYWdlU2l6ZSA9IDEwMCxcclxuICBzdGFydFBhZ2UgPSAwLFxyXG4gIHRpdGxlID0gXCJQb2tlbW9uc1wiLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGVQb2tlbW9ucywgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZTxJTmFtZWRBcGlSZXNvdXJjZTxJUG9rZW1vbj5bXT4oXHJcbiAgICBwb2tlbW9ucy5zbGljZShcclxuICAgICAgc3RhcnRQYWdlICogcGFnZVNpemUsXHJcbiAgICAgIE1hdGgubWluKHN0YXJ0UGFnZSAqIHBhZ2VTaXplICsgcGFnZVNpemUsIHBva2Vtb25zLmxlbmd0aClcclxuICAgIClcclxuICApO1xyXG4gIC8vY29uc29sZS5sb2coXCJwb2tlbW9uc1wiLCBwb2tlbW9ucywgdmlzaWJsZVBva2Vtb25zLCBzdGFydFBhZ2UsIHBhZ2VTaXplKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShzdGFydFBhZ2UpO1xyXG4gIGNvbnN0IGxhc3RQYWdlTnVtYmVyID0gTWF0aC5mbG9vcihwb2tlbW9ucy5sZW5ndGggLyBwYWdlU2l6ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZU51bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBjbGFtcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFnZU51bWJlciwgbGFzdFBhZ2VOdW1iZXIpKTtcclxuICAgIHNldFBhZ2UoY2xhbXBlZCk7XHJcbiAgICBzZXRQb2tlbW9uKFxyXG4gICAgICBwb2tlbW9ucy5zbGljZShjbGFtcGVkICogcGFnZVNpemUsIGNsYW1wZWQgKiBwYWdlU2l6ZSArIHBhZ2VTaXplKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpbnRlcmZhY2UgUGFnZVByb3BzIHtcclxuICAgIHBhZ2VOdW1iZXI6IG51bWJlcjtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB9XHJcbiAgY29uc3QgTmV4dFBhZ2U6IFJlYWN0LkZDPFBhZ2VQcm9wcz4gPSAoeyBwYWdlTnVtYmVyLCB0ZXh0LCBkaXNhYmxlZCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShwYWdlTnVtYmVyKX1cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY29tbW9ucy5idXR0b24sIHsgW2NvbW1vbnMuZGlzYWJsZWRdOiBkaXNhYmxlZCB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgUGFnZUNoYW5nZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjb21tb25zLmZsZXgsIGNvbW1vbnMucGFnZUNvbnRhaW5lcil9PlxyXG4gICAgICAgIDxOZXh0UGFnZVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPD0gMH1cclxuICAgICAgICAgIHBhZ2VOdW1iZXI9e3BhZ2UgLSAxfVxyXG4gICAgICAgICAgdGV4dD17XCJQcmV2aW91cyBQYWdlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD57cGFnZX08L3A+XHJcblxyXG4gICAgICAgIDxOZXh0UGFnZVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gbGFzdFBhZ2VOdW1iZXJ9XHJcbiAgICAgICAgICBwYWdlTnVtYmVyPXtwYWdlICsgMX1cclxuICAgICAgICAgIHRleHQ9e1wiTmV4dCBQYWdlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiIH19PlxyXG4gICAgICA8aDIgc3R5bGU9e3sganVzdGlmeVNlbGY6IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjI4cHhcIiB9fT4ge3RpdGxlfTwvaDI+XHJcbiAgICAgIDxQYWdlQ2hhbmdlciAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cclxuICAgICAgICB7dmlzaWJsZVBva2Vtb25zLm1hcCgocG9rZW1vbiwgaSkgPT4gKFxyXG4gICAgICAgICAgPFBva2Vtb25JY29uIGtleT17aX0gey4uLnBva2Vtb259IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGFnZUNoYW5nZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBsaXN0QWxsKCk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9rZW1vbnM6IHBva2Vtb24ucmVzdWx0cyB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uSG9tZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiY29tbW9uc19idXR0b25fXzNQcFVRXCIsXG5cdFwic2Vjb25kYXJ5QnV0dG9uXCI6IFwiY29tbW9uc19zZWNvbmRhcnlCdXR0b25fXzM5cU5zXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJjb21tb25zX2Rpc2FibGVkX18xZWMxVlwiLFxuXHRcInBhZ2VDb250YWluZXJcIjogXCJjb21tb25zX3BhZ2VDb250YWluZXJfXzF6QjhfXCIsXG5cdFwibWFpblwiOiBcImNvbW1vbnNfbWFpbl9fM2JXN0RcIixcblx0XCJoZWFkZXItY29udGFpbmVyXCI6IFwiY29tbW9uc19oZWFkZXItY29udGFpbmVyX18yZG1HbVwiLFxuXHRcInByb2ZpbGUtY29udGFpbmVyXCI6IFwiY29tbW9uc19wcm9maWxlLWNvbnRhaW5lcl9fM3dqUGdcIixcblx0XCJjb250YWluZXItZmxleFwiOiBcImNvbW1vbnNfY29udGFpbmVyLWZsZXhfXzFwM2xJXCIsXG5cdFwicHJvZmlsZS1waWNcIjogXCJjb21tb25zX3Byb2ZpbGUtcGljX18zZ1h5SFwiLFxuXHRcInByb2ZpbGVTdWJcIjogXCJjb21tb25zX3Byb2ZpbGVTdWJfXzFPRUNJXCIsXG5cdFwicHJvZmlsZVwiOiBcImNvbW1vbnNfcHJvZmlsZV9fMldVMmFcIixcblx0XCJvcGVuRG93blwiOiBcImNvbW1vbnNfb3BlbkRvd25fXzM0WFhlXCIsXG5cdFwiY2xvc2VkXCI6IFwiY29tbW9uc19jbG9zZWRfXzFOdjc3XCIsXG5cdFwiaGlkZGVuXCI6IFwiY29tbW9uc19oaWRkZW5fXzNTVjB2XCIsXG5cdFwiaG9tZS1idXR0b25cIjogXCJjb21tb25zX2hvbWUtYnV0dG9uX19ETnZwNlwiLFxuXHRcInNlYXJjaC1jb250YWluZXJcIjogXCJjb21tb25zX3NlYXJjaC1jb250YWluZXJfX1k2cVFNXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29tbW9uc19jb250YWluZXJfX19BMXFHXCIsXG5cdFwiZW5kXCI6IFwiY29tbW9uc19lbmRfXzNHd3BuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb2tlbW9uLWNvbnRhaW5lclwiOiBcInBva2Vtb25fcG9rZW1vbi1jb250YWluZXJfXzJ6LWRhXCIsXG5cdFwiYWJpbGl0aWVzQ29udGFpbmVyXCI6IFwicG9rZW1vbl9hYmlsaXRpZXNDb250YWluZXJfXzNDLXVtXCIsXG5cdFwiYWJpbGl0aWVzXCI6IFwicG9rZW1vbl9hYmlsaXRpZXNfX3dncW5uXCIsXG5cdFwidGV4dEFjdGl2ZVwiOiBcInBva2Vtb25fdGV4dEFjdGl2ZV9faHJqMThcIixcblx0XCJlZGl0XCI6IFwicG9rZW1vbl9lZGl0X18yU2F3UVwiLFxuXHRcInR5cGVcIjogXCJwb2tlbW9uX3R5cGVfXzN6Yy1JXCIsXG5cdFwibmFtZVwiOiBcInBva2Vtb25fbmFtZV9fMjI2S0VcIixcblx0XCJpbmRleFwiOiBcInBva2Vtb25faW5kZXhfXzI3eW8wXCIsXG5cdFwiaGVpZ2h0XCI6IFwicG9rZW1vbl9oZWlnaHRfXzFIczRkXCIsXG5cdFwid2VpZ2h0XCI6IFwicG9rZW1vbl93ZWlnaHRfX0JOd2t3XCIsXG5cdFwiaW1hZ2VcIjogXCJwb2tlbW9uX2ltYWdlX18xRW5KMFwiLFxuXHRcInN0YXRzXCI6IFwicG9rZW1vbl9zdGF0c19fMUVHY0hcIixcblx0XCJmYXZcIjogXCJwb2tlbW9uX2Zhdl9fMmdZM2FcIixcblx0XCJzdGFyXCI6IFwicG9rZW1vbl9zdGFyX19OYlZJYlwiLFxuXHRcInNjYWxlVXBcIjogXCJwb2tlbW9uX3NjYWxlVXBfXzJRVlNqXCIsXG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcInBva2Vtb25faWNvbkNvbnRhaW5lcl9fdTVrR2pcIixcblx0XCJwb2tlbW9uSWNvblwiOiBcInBva2Vtb25fcG9rZW1vbkljb25fXzNxam9sXCIsXG5cdFwiaWNvblRleHRcIjogXCJwb2tlbW9uX2ljb25UZXh0X19iU3Nod1wiLFxuXHRcInBva2VmaWx0ZXJcIjogXCJwb2tlbW9uX3Bva2VmaWx0ZXJfXzNfaGk1XCIsXG5cdFwiY29udGFpbmVyXCI6IFwicG9rZW1vbl9jb250YWluZXJfXzFKb1drXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBva2VhcGktdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UG9rZW1vbiIsInN0eWxlcyIsIlBva2Vtb25JY29uIiwicG9rZW1vbiIsInJvdXRlciIsImljb25VcmwiLCJzZXRJY29uVXJsIiwiaWNvbklkIiwic2V0SWNvbklkIiwiYWRkUG9rZW1vbkluZm8iLCJwb2tlIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJpZCIsIm5hbWUiLCJwb2tlbW9uSWNvbiIsInB1c2giLCJpY29uVGV4dCIsIlN0cmluZyIsIlBva2VBUEkiLCJnZXRQb2tlbW9ucyIsInBva2Vtb25TdHJpbmciLCJwb2tlbW9ucyIsInNwbGl0IiwiZm9yRWFjaCIsInAiLCJpIiwiUG9rZW1vbiIsInJlc29sdmUiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInBva2VzdHJpbmciLCJsaXN0QWxsIiwiYWxsIiwidW5mYXZvdXJpdGUiLCJmZXRjaCIsIm1ldGhvZCIsImNvbW1vbnMiLCJjbGFzc25hbWVzIiwiUG9rZW1vbkhvbWUiLCJwYWdlU2l6ZSIsInN0YXJ0UGFnZSIsInRpdGxlIiwidmlzaWJsZVBva2Vtb25zIiwic2V0UG9rZW1vbiIsInNsaWNlIiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsInBhZ2UiLCJzZXRQYWdlIiwibGFzdFBhZ2VOdW1iZXIiLCJmbG9vciIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwiY2xhbXBlZCIsIm1heCIsIk5leHRQYWdlIiwidGV4dCIsImRpc2FibGVkIiwiYnV0dG9uIiwiUGFnZUNoYW5nZXIiLCJmbGV4IiwicGFnZUNvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5U2VsZiIsImZvbnRTaXplIiwiaWNvbkNvbnRhaW5lciIsIm1hcCIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiLCJyZXN1bHRzIl0sInNvdXJjZVJvb3QiOiIifQ==