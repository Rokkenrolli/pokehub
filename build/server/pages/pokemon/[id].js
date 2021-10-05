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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchData = async () => {
      const fav = await (0,_pages_api_pokemon_pokeapi__WEBPACK_IMPORTED_MODULE_3__.isFavourite)(pokemon.id);
      console.log(fav);
      setFavorited(fav);
    };

    fetchData();
  });

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
      lineNumber: 83,
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
        lineNumber: 93,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().index),
      children: [" #", pokemonData.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().height),
      children: [" ", "Height:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined), "'"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().weight),
      children: [" ", "Weight:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.weight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined), " ", "lbs", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
      src: pokemonData.sprites.front_default,
      alt: "sprite of the pokemon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().abilities),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Abilities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["*(", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          children: "Hidden ability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, undefined), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
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
            lineNumber: 141,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().type),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Types"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
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
            lineNumber: 157,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().stats),
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
/* harmony export */   "unfavourite": () => (/* binding */ unfavourite),
/* harmony export */   "isFavourite": () => (/* binding */ isFavourite)
/* harmony export */ });
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pokeapi-typescript */ "pokeapi-typescript");
/* harmony import */ var pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pokeapi_typescript__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = `http://localhost:3000/`;
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
  await fetch(`${baseUrl}api/post/${id}`, {
    method: 'DELETE'
  });
};
const isFavourite = async id => {
  const res = await fetch(`${baseUrl}api/favourite/${id}`);
  const body = await res.json();
  return body.isFavourite;
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
      lineNumber: 92,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_PokemonSearch__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9jb21wb25lbnRzL1Bva2Vtb24udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vY29tcG9uZW50cy9Qb2tlbW9uU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3BhZ2VzL2FwaS9wb2tlbW9uL3Bva2VhcGkudHMiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9wb2tlbW9uL1tpZF0udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicG9rZWFwaS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9rZW1vbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGlzRmF2b3VyaXRlLCB1bmZhdm91cml0ZSB9IGZyb20gXCIuLi9wYWdlcy9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhck9wdGlvbnMge1xyXG4gIGJhckNvbG9yczogc3RyaW5nW107XHJcbiAgYmFyQm9yZGVycz86IHN0cmluZ1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9rZVZpZXdQcm9wcyB7XHJcbiAgc2Vzc2lvbj86IFNlc3Npb247XHJcbiAgcG9rZW1vbjogSVBva2Vtb247XHJcbiAgYmFyT3B0aW9uczogQmFyT3B0aW9ucztcclxuICBlZGl0TW9kZT86IGJvb2xlYW47XHJcbiAgZmF2b3JpdGVkPzogYm9vbGVhbjtcclxufVxyXG5jb25zdCBQb2tlbW9uOiBSZWFjdC5GQzxQb2tlVmlld1Byb3BzPiA9ICh7XHJcbiAgcG9rZW1vbixcclxuICBiYXJPcHRpb25zLFxyXG4gIGVkaXRNb2RlLFxyXG4gIGZhdm9yaXRlZCxcclxuICBzZXNzaW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Bva2Vtb25EYXRhLCBzZXRQb2tlbW9uRGF0YV0gPSB1c2VTdGF0ZTxJUG9rZW1vbj4ocG9rZW1vbik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlLCBzZXRGYXZvcml0ZWRdID0gdXNlU3RhdGUoZmF2b3JpdGVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmF2ID0gYXdhaXQgaXNGYXZvdXJpdGUocG9rZW1vbi5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZhdik7XHJcbiAgICAgIHNldEZhdm9yaXRlZChmYXYpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCIsXCIpLm1hcCgoaykgPT4gay50cmltKCkpO1xyXG4gICAgY29uc29sZS5sb2coa2V5cyk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRGYXZvcml0ZSA9IGFzeW5jIChmYXY6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBmYXZvdXJpdGUgdG8gXCIsIGZhdik7XHJcbiAgICBzZXRGYXZvcml0ZWQoZmF2KTtcclxuICAgIGlmIChmYXYpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBpZDogcG9rZW1vbi5pZCwgbmFtZTogcG9rZW1vbi5uYW1lLCB1cmw6IFwiXCIgfTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuZmF2b3VyaXRlKHBva2Vtb24uaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXREYXRhID0ge1xyXG4gICAgbGFiZWw6IFwiYWJpbGl0eSBzY29yZXNcIixcclxuICAgIGRhdGE6IHBva2Vtb25EYXRhLnN0YXRzLm1hcCgoc3RhdCkgPT4gc3RhdC5iYXNlX3N0YXQpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYXJPcHRpb25zLmJhckNvbG9ycyxcclxuICAgIGJvcmRlckNvbG9yOiBiYXJPcHRpb25zLmJhckJvcmRlcnMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGFiZWxzID0gcG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0KSA9PiBzdGF0LnN0YXQubmFtZSk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgZGF0YXNldHM6IFtzdGF0RGF0YV0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBva2Vtb24tY29udGFpbmVyXCJdfT5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuZmF2LCB7XHJcbiAgICAgICAgICAgIFtzdHlsZXMuc3Rhcl06IGZhdm9yaXRlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBzZXRGYXZvcml0ZSghZmF2b3JpdGUpfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQmx1cj17KGUpID0+IGNoYW5nZVZhbHVlKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCwgXCJuYW1lXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLm5hbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXh9PiAje3Bva2Vtb25EYXRhLmlkfTwvaDE+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBIZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS5oZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYjMzk7XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy53ZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBXZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS53ZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfXtcIiBcIn1cclxuICAgICAgICBsYnN7XCIgXCJ9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICBzcmM9e3Bva2Vtb25EYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICBhbHQ9XCJzcHJpdGUgb2YgdGhlIHBva2Vtb25cIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc30+XHJcbiAgICAgICAgPGgyPkFiaWxpdGllczwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAqKDxpPkhpZGRlbiBhYmlsaXR5PC9pPilcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYmlsaXRpZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLmFiaWxpdGllcy5tYXAoKGEsIGkpID0+IChcclxuICAgICAgICAgICAgPGg0IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9e2VkaXRNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthLmFiaWxpdHkubmFtZX1cclxuICAgICAgICAgICAgICAgIHthLmlzX2hpZGRlbiAmJiBcIipcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZX0+XHJcbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cG9rZW1vbkRhdGEudHlwZXMubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxoNCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2VkaXRNb2RlID8gc3R5bGVzLnRleHRBY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dC50eXBlLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEJhciBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30gZGF0YT17ZGF0YX0+PC9CYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbW1vbnMgZnJvbSBcIi4uL3N0eWxlcy9jb21tb25zLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUG9rZW1vblNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybC50cmltKCk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm91dGVyLnB1c2goYC9wb2tlbW9uLyR7aWQgPyBpZCArIFwiLFwiIDogXCJcIn0ke3VybH1gKTtcbiAgICBzZXRVcmwoXCJcIik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaGFuZGxlQ2xpY2soKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbnNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIHBva2Vtb25cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlKX1cbiAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y29tbW9ucy5idXR0b259XG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKCF1cmwpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfVxuICAgICAgPlxuICAgICAgICBMZXQmIzM5O3MgZmx5IVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uU2VhcmNoO1xuIiwiXG5pbXBvcnQgUG9rZUFQSSwgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcblxuY29uc3QgYmFzZVVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYFxuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbnMgPSBhc3luYyggcG9rZW1vblN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbnM6SVBva2Vtb25bXSA9IFtdXG4gICAgcG9rZW1vblN0cmluZy5zcGxpdCgnLCcpLmZvckVhY2goYXN5bmMgKHAsaSkgPT4ge1xuICAgICAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLnJlc29sdmUocC50cmltKCkpXG4gICAgICAgIHBva2Vtb25zW2ldID0gKHBva2Vtb24pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9ucylcbiAgICByZXR1cm4gcG9rZW1vbnNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb24gPSBhc3luYyhwb2tlc3RyaW5nOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCBQb2tlQVBJLlBva2Vtb24ucmVzb2x2ZShwb2tlc3RyaW5nLnRyaW0oKSk7XG4gICAgcmV0dXJuIHBva2Vtb25cbn1cblxuXG5leHBvcnQgY29uc3QgbGlzdEFsbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGwgPSBhd2FpdCBQb2tlQVBJLlBva2Vtb24ubGlzdEFsbCgpXG4gICAgcmV0dXJuIGFsbDtcbn1cblxuXG5leHBvcnQgY29uc3QgdW5mYXZvdXJpdGUgPSBhc3luYyAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9YXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Zhdm91cml0ZSA9IGFzeW5jIChpZDpudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfWFwaS9mYXZvdXJpdGUvJHtpZH1gKVxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBcbiAgICByZXR1cm4gYm9keS5pc0Zhdm91cml0ZVxufVxuXG5cbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgSVBva2Vtb24gfSBmcm9tIFwicG9rZWFwaS10eXBlc2NyaXB0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFBva2Vtb24sIGlzRmF2b3VyaXRlLCBsaXN0QWxsIH0gZnJvbSBcIi4uL2FwaS9wb2tlbW9uL3Bva2VhcGlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9rZW1vblwiO1xuaW1wb3J0IFBva2Vtb25TZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9rZW1vblNlYXJjaFwiO1xuXG5jb25zdCBQb2tlVmlldyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3Bva2Vtb25zLCBzZXRQb2tlbW9uc10gPSB1c2VTdGF0ZTxJUG9rZW1vbltdPihbXSk7XG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBjb25zdCBpbm5lciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBva2VzID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuICAgICAgICBTdHJpbmcoaWQpXG4gICAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAgIC5tYXAoYXN5bmMgKHApID0+IGF3YWl0IGdldFBva2Vtb24oU3RyaW5nKHApKSlcbiAgICAgICk7XG4gICAgICBjb25zdCBmaWx0ZXJlZDogSVBva2Vtb25bXSA9IFtdO1xuICAgICAgcG9rZXMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgICBpZiAocC5zdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHAudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2V0UG9rZW1vbnMoZmlsdGVyZWQpO1xuICAgIH07XG4gICAgaW5uZXIoKTtcbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgYmFyQ29sb3JzID0gW1xuICAgIFwiI2U0NDE0MVwiLFxuICAgIFwiI2U0NmY0MVwiLFxuICAgIFwiI2U0YjM0MVwiLFxuICAgIFwiIzQxOTVlNFwiLFxuICAgIFwiIzQxZTQ4NVwiLFxuICAgIFwiI2JlNDFlNFwiLFxuICBdO1xuICBjb25zdCBib3JkZXJDb2xvciA9IFtcbiAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAxKVwiLFxuICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXG4gICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcbiAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAxKVwiLFxuICAgIFwicmdiYSgxNTMsIDEwMiwgMjU1LCAxKVwiLFxuICAgIFwicmdiYSgyNTUsIDE1OSwgNjQsIDEpXCIsXG4gIF07XG4gIGNvbnN0IGZvdW5kUG9rZW1vbiA9IEJvb2xlYW4ocG9rZW1vbnMgJiYgcG9rZW1vbnMubGVuZ3RoKTtcbiAgLy8gY29uc29sZS5sb2coYGZvdW5kcG9rZW1vbiAke2ZvdW5kUG9rZW1vbn1gKTtcbiAgcmV0dXJuIGZvdW5kUG9rZW1vbiA/IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJlZGl0VG9nZ2xlXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KCFlZGl0KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdFRvZ2dsZVwiPlRvZ2dsZSBlZGl0IG1vZGU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBva2Vtb25TZWFyY2ggLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtwb2tlbW9ucz8ubWFwKChwb2tlbW9uLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFwb2tlbW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UG9rZW1vblxuICAgICAgICAgICAgICBzZXNzaW9uPXtzZXNzaW9uID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBlZGl0TW9kZT17ZWRpdH1cbiAgICAgICAgICAgICAgcG9rZW1vbj17cG9rZW1vbn1cbiAgICAgICAgICAgICAgYmFyT3B0aW9ucz17eyBiYXJDb2xvcnM6IGJhckNvbG9ycywgYmFyQm9yZGVyczogYm9yZGVyQ29sb3IgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiM2VtXCIgfX0+XG4gICAgICA8aDE+V2UgZGlkIG5vdCBmaW5kIGFueSBwb2tlbW9uLCBwbGVhc2UgY2hlY2sgeW91ciBzZWFyY2g8L2gxPlxuICAgICAgPFBva2Vtb25TZWFyY2ggLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2VWaWV3O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiY29tbW9uc19idXR0b25fXzNQcFVRXCIsXG5cdFwic2Vjb25kYXJ5QnV0dG9uXCI6IFwiY29tbW9uc19zZWNvbmRhcnlCdXR0b25fXzM5cU5zXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJjb21tb25zX2Rpc2FibGVkX18xZWMxVlwiLFxuXHRcInBhZ2VDb250YWluZXJcIjogXCJjb21tb25zX3BhZ2VDb250YWluZXJfXzF6QjhfXCIsXG5cdFwibWFpblwiOiBcImNvbW1vbnNfbWFpbl9fM2JXN0RcIixcblx0XCJoZWFkZXItY29udGFpbmVyXCI6IFwiY29tbW9uc19oZWFkZXItY29udGFpbmVyX18yZG1HbVwiLFxuXHRcInByb2ZpbGUtY29udGFpbmVyXCI6IFwiY29tbW9uc19wcm9maWxlLWNvbnRhaW5lcl9fM3dqUGdcIixcblx0XCJjb250YWluZXItZmxleFwiOiBcImNvbW1vbnNfY29udGFpbmVyLWZsZXhfXzFwM2xJXCIsXG5cdFwicHJvZmlsZS1waWNcIjogXCJjb21tb25zX3Byb2ZpbGUtcGljX18zZ1h5SFwiLFxuXHRcInByb2ZpbGVTdWJcIjogXCJjb21tb25zX3Byb2ZpbGVTdWJfXzFPRUNJXCIsXG5cdFwicHJvZmlsZVwiOiBcImNvbW1vbnNfcHJvZmlsZV9fMldVMmFcIixcblx0XCJvcGVuRG93blwiOiBcImNvbW1vbnNfb3BlbkRvd25fXzM0WFhlXCIsXG5cdFwiY2xvc2VkXCI6IFwiY29tbW9uc19jbG9zZWRfXzFOdjc3XCIsXG5cdFwiaGlkZGVuXCI6IFwiY29tbW9uc19oaWRkZW5fXzNTVjB2XCIsXG5cdFwiaG9tZS1idXR0b25cIjogXCJjb21tb25zX2hvbWUtYnV0dG9uX19ETnZwNlwiLFxuXHRcInNlYXJjaC1jb250YWluZXJcIjogXCJjb21tb25zX3NlYXJjaC1jb250YWluZXJfX1k2cVFNXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29tbW9uc19jb250YWluZXJfX19BMXFHXCIsXG5cdFwiZW5kXCI6IFwiY29tbW9uc19lbmRfXzNHd3BuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb2tlbW9uLWNvbnRhaW5lclwiOiBcInBva2Vtb25fcG9rZW1vbi1jb250YWluZXJfXzJ6LWRhXCIsXG5cdFwiYWJpbGl0aWVzQ29udGFpbmVyXCI6IFwicG9rZW1vbl9hYmlsaXRpZXNDb250YWluZXJfXzNDLXVtXCIsXG5cdFwiYWJpbGl0aWVzXCI6IFwicG9rZW1vbl9hYmlsaXRpZXNfX3dncW5uXCIsXG5cdFwidGV4dEFjdGl2ZVwiOiBcInBva2Vtb25fdGV4dEFjdGl2ZV9faHJqMThcIixcblx0XCJlZGl0XCI6IFwicG9rZW1vbl9lZGl0X18yU2F3UVwiLFxuXHRcInR5cGVcIjogXCJwb2tlbW9uX3R5cGVfXzN6Yy1JXCIsXG5cdFwibmFtZVwiOiBcInBva2Vtb25fbmFtZV9fMjI2S0VcIixcblx0XCJpbmRleFwiOiBcInBva2Vtb25faW5kZXhfXzI3eW8wXCIsXG5cdFwiaGVpZ2h0XCI6IFwicG9rZW1vbl9oZWlnaHRfXzFIczRkXCIsXG5cdFwid2VpZ2h0XCI6IFwicG9rZW1vbl93ZWlnaHRfX0JOd2t3XCIsXG5cdFwiaW1hZ2VcIjogXCJwb2tlbW9uX2ltYWdlX18xRW5KMFwiLFxuXHRcInN0YXRzXCI6IFwicG9rZW1vbl9zdGF0c19fMUVHY0hcIixcblx0XCJmYXZcIjogXCJwb2tlbW9uX2Zhdl9fMmdZM2FcIixcblx0XCJzdGFyXCI6IFwicG9rZW1vbl9zdGFyX19OYlZJYlwiLFxuXHRcInNjYWxlVXBcIjogXCJwb2tlbW9uX3NjYWxlVXBfXzJRVlNqXCIsXG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcInBva2Vtb25faWNvbkNvbnRhaW5lcl9fdTVrR2pcIixcblx0XCJwb2tlbW9uSWNvblwiOiBcInBva2Vtb25fcG9rZW1vbkljb25fXzNxam9sXCIsXG5cdFwiaWNvblRleHRcIjogXCJwb2tlbW9uX2ljb25UZXh0X19iU3Nod1wiLFxuXHRcInBva2VmaWx0ZXJcIjogXCJwb2tlbW9uX3Bva2VmaWx0ZXJfXzNfaGk1XCIsXG5cdFwiY29udGFpbmVyXCI6IFwicG9rZW1vbl9jb250YWluZXJfXzFKb1drXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9rZWFwaS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNsYXNzbmFtZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFyIiwic3R5bGVzIiwiaXNGYXZvdXJpdGUiLCJ1bmZhdm91cml0ZSIsIlBva2Vtb24iLCJwb2tlbW9uIiwiYmFyT3B0aW9ucyIsImVkaXRNb2RlIiwiZmF2b3JpdGVkIiwic2Vzc2lvbiIsInBva2Vtb25EYXRhIiwic2V0UG9rZW1vbkRhdGEiLCJmYXZvcml0ZSIsInNldEZhdm9yaXRlZCIsImZldGNoRGF0YSIsImZhdiIsImlkIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVZhbHVlIiwiZSIsImtleSIsImtleXMiLCJzcGxpdCIsIm1hcCIsImsiLCJ0cmltIiwic2V0RmF2b3JpdGUiLCJib2R5IiwibmFtZSIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXREYXRhIiwibGFiZWwiLCJkYXRhIiwic3RhdHMiLCJzdGF0IiwiYmFzZV9zdGF0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFyQ29sb3JzIiwiYm9yZGVyQ29sb3IiLCJiYXJCb3JkZXJzIiwibGFiZWxzIiwiZGF0YXNldHMiLCJzdGFyIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwidGV4dEFjdGl2ZSIsImluZGV4IiwiaGVpZ2h0Iiwid2VpZ2h0IiwiaW1hZ2UiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImFiaWxpdGllcyIsImFiaWxpdGllc0NvbnRhaW5lciIsImEiLCJpIiwiYWJpbGl0eSIsImlzX2hpZGRlbiIsInR5cGUiLCJ0eXBlcyIsInQiLCJ1c2VSb3V0ZXIiLCJjb21tb25zIiwiUG9rZW1vblNlYXJjaCIsInNldFVybCIsInJvdXRlciIsInF1ZXJ5IiwiaGFuZGxlQ2xpY2siLCJwYXJzZWQiLCJwdXNoIiwiaGFuZGxlS2V5UHJlc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIkJvb2xlYW4iLCJQb2tlQVBJIiwiYmFzZVVybCIsImdldFBva2Vtb25zIiwicG9rZW1vblN0cmluZyIsInBva2Vtb25zIiwiZm9yRWFjaCIsInAiLCJyZXNvbHZlIiwiZ2V0UG9rZW1vbiIsInBva2VzdHJpbmciLCJsaXN0QWxsIiwiYWxsIiwicmVzIiwianNvbiIsInVzZVNlc3Npb24iLCJQb2tlVmlldyIsInNldFBva2Vtb25zIiwiZWRpdCIsInNldEVkaXQiLCJsb2FkaW5nIiwiaW5uZXIiLCJwb2tlcyIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwiU3RyaW5nIiwiZmlsdGVyZWQiLCJzdGF0dXMiLCJmb3VuZFBva2Vtb24iLCJsZW5ndGgiLCJwYWRkaW5nIiwiY29udGFpbmVyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==