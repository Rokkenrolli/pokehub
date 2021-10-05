(() => {
var exports = {};
exports.id = "pages/pokemon/[id]";
exports.ids = ["pages/pokemon/[id]"];
exports.modules = {

/***/ "./components/Pokemon.tsx":
/*!********************************!*\
  !*** ./components/Pokemon.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pokemon.module.css */ "./styles/pokemon.module.css");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/pokemon/pokeapi */ "./pages/api/pokemon/pokeapi.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\components\\Pokemon.tsx";







const Pokemon = ({
  pokemon,
  barOptions,
  editMode,
  favorited,
  session
}) => {
  const {
    0: pokemonData,
    1: setPokemonData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pokemon);
  const {
    0: favorite,
    1: setFavorited
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(favorited);

  const changeValue = (e, key) => {
    if (!e) {
      return;
    }

    const keys = key.split(",").map(k => k.trim());
    console.log(keys);
    console.log(e);
  };

  const setFavorite = async fav => {
    console.log("setting favourite to ", fav);
    setFavorited(fav);

    if (fav) {
      try {
        const body = {
          id: pokemon.id,
          name: pokemon.name,
          url: ""
        };
        await fetch("/api/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      (0,_pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_3__.unfavourite)(pokemon.id);
    }
  };

  const statData = {
    label: "ability scores",
    data: pokemonData.stats.map(stat => stat.base_stat),
    backgroundColor: barOptions.barColors,
    borderColor: barOptions.barBorders
  };
  const labels = pokemonData.stats.map(stat => stat.stat.name);
  const data = {
    labels: labels,
    datasets: [statData]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default()["pokemon-container"]),
    children: [session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().fav), {
        [(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().star)]: favorite
      }),
      onClick: async () => await setFavorite(!favorite)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        onBlur: e => changeValue(e.currentTarget.textContent, "name"),
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().index),
      children: [" #", pokemonData.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().height),
      children: [" ", "Height:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, undefined), "'"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().weight),
      children: [" ", "Weight:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.weight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, undefined), " ", "lbs", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
      src: pokemonData.sprites.front_default,
      alt: "sprite of the pokemon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().abilities),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Abilities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["*(", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          children: "Hidden ability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, undefined), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().abilitiesContainer),
        children: pokemonData.abilities.map((a, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
            contentEditable: editMode,
            children: [a.ability.name, a.is_hidden && "*"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().type),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Types"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().abilitiesContainer),
        children: pokemonData.types.map((t, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
            contentEditable: editMode,
            children: t.type.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().stats),
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);

/***/ }),

/***/ "./components/PokemonSearch.tsx":
/*!**************************************!*\
  !*** ./components/PokemonSearch.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/commons.module.css */ "./styles/commons.module.css");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\components\\PokemonSearch.tsx";





const PokemonSearch = () => {
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    id
  } = router.query;

  const handleClick = () => {
    const parsed = url.trim();

    if (!url) {
      return;
    }

    router.push(`/pokemon/${id ? id + "," : ""}${url}`);
    setUrl("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3___default()["search-container"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "text",
      placeholder: "Search for a pokemon",
      onChange: e => setUrl(e.target.value),
      onKeyPress: e => handleKeyPress(e),
      value: url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      className: (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
      disabled: Boolean(!url),
      onClick: () => handleClick(),
      children: "Let's fly!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonSearch);

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

/***/ "./pages/pokemon/[id].tsx":
/*!********************************!*\
  !*** ./pages/pokemon/[id].tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/pokemon/pokeapi */ "./pages/api/pokemon/pokeapi.ts");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pokemon.module.css */ "./styles/pokemon.module.css");
/* harmony import */ var _styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Pokemon */ "./components/Pokemon.tsx");
/* harmony import */ var _components_PokemonSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PokemonSearch */ "./components/PokemonSearch.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\pages\\pokemon\\[id].tsx";









const PokeView = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    id
  } = router.query;
  const {
    0: pokemons,
    1: setPokemons
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!id) {
      return;
    }

    console.log(id);

    const inner = async () => {
      const pokes = await Promise.allSettled(String(id).split(",").map(async p => await (0,_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_2__.getPokemon)(String(p))));
      const filtered = [];
      pokes.forEach((p, i) => {
        if (p.status === "fulfilled") {
          filtered.push(p.value);
        }
      });
      setPokemons(filtered);
    };

    inner();
  }, [id]);
  const barColors = ["#e44141", "#e46f41", "#e4b341", "#4195e4", "#41e485", "#be41e4"];
  const borderColor = ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"];
  const foundPokemon = Boolean(pokemons && pokemons.length); // console.log(`foundpokemon ${foundPokemon}`);

  return foundPokemon ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      style: {
        padding: "1em"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_7___default().edit),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          id: "editToggle",
          type: "checkbox",
          onClick: () => setEdit(!edit)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
          htmlFor: "editToggle",
          children: "Toggle edit mode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_PokemonSearch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
      children: pokemons === null || pokemons === void 0 ? void 0 : pokemons.map((pokemon, i) => {
        if (!pokemon) {
          return;
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__.default, {
          session: session !== null && session !== void 0 ? session : undefined,
          favorited: false,
          editMode: edit,
          pokemon: pokemon,
          barOptions: {
            barColors: barColors,
            barBorders: borderColor
          }
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    style: {
      padding: "3em"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "We did not find any pokemon, please check your search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_PokemonSearch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeView);

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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-chartjs-2");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFzQ0QsQ0F2RkQ7O0FBeUZBLGlFQUFlZCxRQUFmOzs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9jb21wb25lbnRzL1Bva2Vtb24udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vY29tcG9uZW50cy9Qb2tlbW9uU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3BhZ2VzL2FwaS9wb2tlbW9uL3Bva2VhcGkudHMiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9wb2tlbW9uL1tpZF0udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicG9rZWFwaS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bva2Vtb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1bmZhdm91cml0ZSB9IGZyb20gXCIuLi9wYWdlcy9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhck9wdGlvbnMge1xyXG4gIGJhckNvbG9yczogc3RyaW5nW107XHJcbiAgYmFyQm9yZGVycz86IHN0cmluZ1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9rZVZpZXdQcm9wcyB7XHJcbiAgc2Vzc2lvbj86IFNlc3Npb247XHJcbiAgcG9rZW1vbjogSVBva2Vtb247XHJcbiAgYmFyT3B0aW9uczogQmFyT3B0aW9ucztcclxuICBlZGl0TW9kZT86IGJvb2xlYW47XHJcbiAgZmF2b3JpdGVkOiBib29sZWFuO1xyXG59XHJcbmNvbnN0IFBva2Vtb246IFJlYWN0LkZDPFBva2VWaWV3UHJvcHM+ID0gKHtcclxuICBwb2tlbW9uLFxyXG4gIGJhck9wdGlvbnMsXHJcbiAgZWRpdE1vZGUsXHJcbiAgZmF2b3JpdGVkLFxyXG4gIHNlc3Npb24sXHJcbn0pID0+IHtcclxuICBjb25zdCBbcG9rZW1vbkRhdGEsIHNldFBva2Vtb25EYXRhXSA9IHVzZVN0YXRlPElQb2tlbW9uPihwb2tlbW9uKTtcclxuICBjb25zdCBbZmF2b3JpdGUsIHNldEZhdm9yaXRlZF0gPSB1c2VTdGF0ZShmYXZvcml0ZWQpO1xyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gKGU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdChcIixcIikubWFwKChrKSA9PiBrLnRyaW0oKSk7XHJcbiAgICBjb25zb2xlLmxvZyhrZXlzKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEZhdm9yaXRlID0gYXN5bmMgKGZhdjogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXR0aW5nIGZhdm91cml0ZSB0byBcIiwgZmF2KTtcclxuICAgIHNldEZhdm9yaXRlZChmYXYpO1xyXG4gICAgaWYgKGZhdikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IGlkOiBwb2tlbW9uLmlkLCBuYW1lOiBwb2tlbW9uLm5hbWUsIHVybDogXCJcIiB9O1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9wb3N0XCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5mYXZvdXJpdGUocG9rZW1vbi5pZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhdERhdGEgPSB7XHJcbiAgICBsYWJlbDogXCJhYmlsaXR5IHNjb3Jlc1wiLFxyXG4gICAgZGF0YTogcG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0KSA9PiBzdGF0LmJhc2Vfc3RhdCksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhck9wdGlvbnMuYmFyQ29sb3JzLFxyXG4gICAgYm9yZGVyQ29sb3I6IGJhck9wdGlvbnMuYmFyQm9yZGVycyxcclxuICB9O1xyXG5cclxuICBjb25zdCBsYWJlbHMgPSBwb2tlbW9uRGF0YS5zdGF0cy5tYXAoKHN0YXQpID0+IHN0YXQuc3RhdC5uYW1lKTtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICBkYXRhc2V0czogW3N0YXREYXRhXSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9rZW1vbi1jb250YWluZXJcIl19PlxyXG4gICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5mYXYsIHtcclxuICAgICAgICAgICAgW3N0eWxlcy5zdGFyXTogZmF2b3JpdGUsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IGF3YWl0IHNldEZhdm9yaXRlKCFmYXZvcml0ZSl9XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25CbHVyPXsoZSkgPT4gY2hhbmdlVmFsdWUoZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LCBcIm5hbWVcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2VkaXRNb2RlID8gc3R5bGVzLnRleHRBY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cG9rZW1vbkRhdGEubmFtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5pbmRleH0+ICN7cG9rZW1vbkRhdGEuaWR9PC9oMT5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlaWdodH0+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIEhlaWdodDp7XCIgXCJ9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Bva2Vtb25EYXRhLmhlaWdodH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgJiMzOTtcclxuICAgICAgPC9oMz5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLndlaWdodH0+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIFdlaWdodDp7XCIgXCJ9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Bva2Vtb25EYXRhLndlaWdodH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB9e1wiIFwifVxyXG4gICAgICAgIGxic3tcIiBcIn1cclxuICAgICAgPC9oMz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgIHNyYz17cG9rZW1vbkRhdGEuc3ByaXRlcy5mcm9udF9kZWZhdWx0fVxyXG4gICAgICAgIGFsdD1cInNwcml0ZSBvZiB0aGUgcG9rZW1vblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJpbGl0aWVzfT5cclxuICAgICAgICA8aDI+QWJpbGl0aWVzPC9oMj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICooPGk+SGlkZGVuIGFiaWxpdHk8L2k+KVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cG9rZW1vbkRhdGEuYWJpbGl0aWVzLm1hcCgoYSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8aDQga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2EuYWJpbGl0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAge2EuaXNfaGlkZGVuICYmIFwiKlwifVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBlfT5cclxuICAgICAgICA8aDI+VHlwZXM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJpbGl0aWVzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtwb2tlbW9uRGF0YS50eXBlcy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgPGg0IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9e2VkaXRNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0LnR5cGUubmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QmFyIGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzfSBkYXRhPXtkYXRhfT48L0Jhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tbW9ucyBmcm9tIFwiLi4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBQb2tlbW9uU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gdXJsLnRyaW0oKTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByb3V0ZXIucHVzaChgL3Bva2Vtb24vJHtpZCA/IGlkICsgXCIsXCIgOiBcIlwifSR7dXJsfWApO1xuICAgIHNldFVybChcIlwiKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoYW5kbGVDbGljaygpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgcG9rZW1vblwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfVxuICAgICAgICB2YWx1ZT17dXJsfVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjb21tb25zLmJ1dHRvbn1cbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4oIXVybCl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9XG4gICAgICA+XG4gICAgICAgIExldCYjMzk7cyBmbHkhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25TZWFyY2g7XG4iLCJcbmltcG9ydCBQb2tlQVBJLCB7IElQb2tlbW9uIH0gZnJvbSBcInBva2VhcGktdHlwZXNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbnMgPSBhc3luYyggcG9rZW1vblN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbnM6SVBva2Vtb25bXSA9IFtdXG4gICAgcG9rZW1vblN0cmluZy5zcGxpdCgnLCcpLmZvckVhY2goYXN5bmMgKHAsaSkgPT4ge1xuICAgICAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLnJlc29sdmUocC50cmltKCkpXG4gICAgICAgIHBva2Vtb25zW2ldID0gKHBva2Vtb24pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9ucylcbiAgICByZXR1cm4gcG9rZW1vbnNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb24gPSBhc3luYyhwb2tlc3RyaW5nOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBQb2tlQVBJLlBva2Vtb24ucmVzb2x2ZShwb2tlc3RyaW5nLnRyaW0oKSk7XG4gICAgcmV0dXJuIHBva2Vtb25cbn1cblxuXG5leHBvcnQgY29uc3QgbGlzdEFsbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGwgPSBhd2FpdCBQb2tlQVBJLlBva2Vtb24ubGlzdEFsbCgpXG4gICAgcmV0dXJuIGFsbDtcbn1cblxuXG5leHBvcnQgY29uc3QgdW5mYXZvdXJpdGUgPSBhc3luYyAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSk7XG59XG5cblxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UG9rZW1vbiwgbGlzdEFsbCB9IGZyb20gXCIuLi9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcG9rZW1vbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBQb2tlbW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bva2Vtb25cIjtcbmltcG9ydCBQb2tlbW9uU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bva2Vtb25TZWFyY2hcIjtcblxuY29uc3QgUG9rZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGU8SVBva2Vtb25bXT4oW10pO1xuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY29uc3QgaW5uZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwb2tlcyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcbiAgICAgICAgU3RyaW5nKGlkKVxuICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAubWFwKGFzeW5jIChwKSA9PiBhd2FpdCBnZXRQb2tlbW9uKFN0cmluZyhwKSkpXG4gICAgICApO1xuICAgICAgY29uc3QgZmlsdGVyZWQ6IElQb2tlbW9uW10gPSBbXTtcbiAgICAgIHBva2VzLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICAgICAgaWYgKHAuc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChwLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNldFBva2Vtb25zKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIGlubmVyKCk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IGJhckNvbG9ycyA9IFtcbiAgICBcIiNlNDQxNDFcIixcbiAgICBcIiNlNDZmNDFcIixcbiAgICBcIiNlNGIzNDFcIixcbiAgICBcIiM0MTk1ZTRcIixcbiAgICBcIiM0MWU0ODVcIixcbiAgICBcIiNiZTQxZTRcIixcbiAgXTtcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBbXG4gICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMSlcIixcbiAgICBcInJnYmEoMjU1LCAxNTksIDY0LCAxKVwiLFxuICBdO1xuICBjb25zdCBmb3VuZFBva2Vtb24gPSBCb29sZWFuKHBva2Vtb25zICYmIHBva2Vtb25zLmxlbmd0aCk7XG4gIC8vIGNvbnNvbGUubG9nKGBmb3VuZHBva2Vtb24gJHtmb3VuZFBva2Vtb259YCk7XG4gIHJldHVybiBmb3VuZFBva2Vtb24gPyAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZWRpdFRvZ2dsZVwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCghZWRpdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRUb2dnbGVcIj5Ub2dnbGUgZWRpdCBtb2RlPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb2tlbW9uU2VhcmNoIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7cG9rZW1vbnM/Lm1hcCgocG9rZW1vbiwgaSkgPT4ge1xuICAgICAgICAgIGlmICghcG9rZW1vbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBva2Vtb25cbiAgICAgICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbiA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGZhdm9yaXRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgZWRpdE1vZGU9e2VkaXR9XG4gICAgICAgICAgICAgIHBva2Vtb249e3Bva2Vtb259XG4gICAgICAgICAgICAgIGJhck9wdGlvbnM9e3sgYmFyQ29sb3JzOiBiYXJDb2xvcnMsIGJhckJvcmRlcnM6IGJvcmRlckNvbG9yIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjNlbVwiIH19PlxuICAgICAgPGgxPldlIGRpZCBub3QgZmluZCBhbnkgcG9rZW1vbiwgcGxlYXNlIGNoZWNrIHlvdXIgc2VhcmNoPC9oMT5cbiAgICAgIDxQb2tlbW9uU2VhcmNoIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlVmlldztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImNvbW1vbnNfYnV0dG9uX18zUHBVUVwiLFxuXHRcInNlY29uZGFyeUJ1dHRvblwiOiBcImNvbW1vbnNfc2Vjb25kYXJ5QnV0dG9uX18zOXFOc1wiLFxuXHRcImRpc2FibGVkXCI6IFwiY29tbW9uc19kaXNhYmxlZF9fMWVjMVZcIixcblx0XCJwYWdlQ29udGFpbmVyXCI6IFwiY29tbW9uc19wYWdlQ29udGFpbmVyX18xekI4X1wiLFxuXHRcIm1haW5cIjogXCJjb21tb25zX21haW5fXzNiVzdEXCIsXG5cdFwiaGVhZGVyLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfaGVhZGVyLWNvbnRhaW5lcl9fMmRtR21cIixcblx0XCJwcm9maWxlLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfcHJvZmlsZS1jb250YWluZXJfXzN3alBnXCIsXG5cdFwiY29udGFpbmVyLWZsZXhcIjogXCJjb21tb25zX2NvbnRhaW5lci1mbGV4X18xcDNsSVwiLFxuXHRcInByb2ZpbGUtcGljXCI6IFwiY29tbW9uc19wcm9maWxlLXBpY19fM2dYeUhcIixcblx0XCJwcm9maWxlU3ViXCI6IFwiY29tbW9uc19wcm9maWxlU3ViX18xT0VDSVwiLFxuXHRcInByb2ZpbGVcIjogXCJjb21tb25zX3Byb2ZpbGVfXzJXVTJhXCIsXG5cdFwib3BlbkRvd25cIjogXCJjb21tb25zX29wZW5Eb3duX18zNFhYZVwiLFxuXHRcImNsb3NlZFwiOiBcImNvbW1vbnNfY2xvc2VkX18xTnY3N1wiLFxuXHRcImhpZGRlblwiOiBcImNvbW1vbnNfaGlkZGVuX18zU1YwdlwiLFxuXHRcImhvbWUtYnV0dG9uXCI6IFwiY29tbW9uc19ob21lLWJ1dHRvbl9fRE52cDZcIixcblx0XCJzZWFyY2gtY29udGFpbmVyXCI6IFwiY29tbW9uc19zZWFyY2gtY29udGFpbmVyX19ZNnFRTVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbW1vbnNfY29udGFpbmVyX19fQTFxR1wiLFxuXHRcImVuZFwiOiBcImNvbW1vbnNfZW5kX18zR3dwblwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9rZW1vbi1jb250YWluZXJcIjogXCJwb2tlbW9uX3Bva2Vtb24tY29udGFpbmVyX18yei1kYVwiLFxuXHRcImFiaWxpdGllc0NvbnRhaW5lclwiOiBcInBva2Vtb25fYWJpbGl0aWVzQ29udGFpbmVyX18zQy11bVwiLFxuXHRcImFiaWxpdGllc1wiOiBcInBva2Vtb25fYWJpbGl0aWVzX193Z3FublwiLFxuXHRcInRleHRBY3RpdmVcIjogXCJwb2tlbW9uX3RleHRBY3RpdmVfX2hyajE4XCIsXG5cdFwiZWRpdFwiOiBcInBva2Vtb25fZWRpdF9fMlNhd1FcIixcblx0XCJ0eXBlXCI6IFwicG9rZW1vbl90eXBlX18zemMtSVwiLFxuXHRcIm5hbWVcIjogXCJwb2tlbW9uX25hbWVfXzIyNktFXCIsXG5cdFwiaW5kZXhcIjogXCJwb2tlbW9uX2luZGV4X18yN3lvMFwiLFxuXHRcImhlaWdodFwiOiBcInBva2Vtb25faGVpZ2h0X18xSHM0ZFwiLFxuXHRcIndlaWdodFwiOiBcInBva2Vtb25fd2VpZ2h0X19CTndrd1wiLFxuXHRcImltYWdlXCI6IFwicG9rZW1vbl9pbWFnZV9fMUVuSjBcIixcblx0XCJzdGF0c1wiOiBcInBva2Vtb25fc3RhdHNfXzFFR2NIXCIsXG5cdFwiZmF2XCI6IFwicG9rZW1vbl9mYXZfXzJnWTNhXCIsXG5cdFwic3RhclwiOiBcInBva2Vtb25fc3Rhcl9fTmJWSWJcIixcblx0XCJzY2FsZVVwXCI6IFwicG9rZW1vbl9zY2FsZVVwX18yUVZTalwiLFxuXHRcImljb25Db250YWluZXJcIjogXCJwb2tlbW9uX2ljb25Db250YWluZXJfX3U1a0dqXCIsXG5cdFwicG9rZW1vbkljb25cIjogXCJwb2tlbW9uX3Bva2Vtb25JY29uX18zcWpvbFwiLFxuXHRcImljb25UZXh0XCI6IFwicG9rZW1vbl9pY29uVGV4dF9fYlNzaHdcIixcblx0XCJwb2tlZmlsdGVyXCI6IFwicG9rZW1vbl9wb2tlZmlsdGVyX18zX2hpNVwiLFxuXHRcImNvbnRhaW5lclwiOiBcInBva2Vtb25fY29udGFpbmVyX18xSm9Xa1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBva2VhcGktdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjbGFzc25hbWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJhciIsInN0eWxlcyIsInVuZmF2b3VyaXRlIiwiUG9rZW1vbiIsInBva2Vtb24iLCJiYXJPcHRpb25zIiwiZWRpdE1vZGUiLCJmYXZvcml0ZWQiLCJzZXNzaW9uIiwicG9rZW1vbkRhdGEiLCJzZXRQb2tlbW9uRGF0YSIsImZhdm9yaXRlIiwic2V0RmF2b3JpdGVkIiwiY2hhbmdlVmFsdWUiLCJlIiwia2V5Iiwia2V5cyIsInNwbGl0IiwibWFwIiwiayIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwic2V0RmF2b3JpdGUiLCJmYXYiLCJib2R5IiwiaWQiLCJuYW1lIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdERhdGEiLCJsYWJlbCIsImRhdGEiLCJzdGF0cyIsInN0YXQiLCJiYXNlX3N0YXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYXJDb2xvcnMiLCJib3JkZXJDb2xvciIsImJhckJvcmRlcnMiLCJsYWJlbHMiLCJkYXRhc2V0cyIsInN0YXIiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0ZXh0QWN0aXZlIiwiaW5kZXgiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJpbWFnZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiYWJpbGl0aWVzIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwiYSIsImkiLCJhYmlsaXR5IiwiaXNfaGlkZGVuIiwidHlwZSIsInR5cGVzIiwidCIsInVzZVJvdXRlciIsImNvbW1vbnMiLCJQb2tlbW9uU2VhcmNoIiwic2V0VXJsIiwicm91dGVyIiwicXVlcnkiLCJoYW5kbGVDbGljayIsInBhcnNlZCIsInB1c2giLCJoYW5kbGVLZXlQcmVzcyIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiQm9vbGVhbiIsIlBva2VBUEkiLCJnZXRQb2tlbW9ucyIsInBva2Vtb25TdHJpbmciLCJwb2tlbW9ucyIsImZvckVhY2giLCJwIiwicmVzb2x2ZSIsImdldFBva2Vtb24iLCJwb2tlc3RyaW5nIiwibGlzdEFsbCIsImFsbCIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJQb2tlVmlldyIsInNldFBva2Vtb25zIiwiZWRpdCIsInNldEVkaXQiLCJsb2FkaW5nIiwiaW5uZXIiLCJwb2tlcyIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwiU3RyaW5nIiwiZmlsdGVyZWQiLCJzdGF0dXMiLCJmb3VuZFBva2Vtb24iLCJsZW5ndGgiLCJwYWRkaW5nIiwiY29udGFpbmVyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==