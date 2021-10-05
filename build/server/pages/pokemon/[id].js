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
      lineNumber: 82,
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
        lineNumber: 92,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().index),
      children: [" #", pokemonData.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().height),
      children: [" ", "Height:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, undefined), "'"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().weight),
      children: [" ", "Weight:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: editMode ? (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().textActive) : "",
        contentEditable: editMode,
        children: pokemonData.weight
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined), " ", "lbs", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
      src: pokemonData.sprites.front_default,
      alt: "sprite of the pokemon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().abilities),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Abilities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: ["*(", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          children: "Hidden ability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, undefined), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
            lineNumber: 140,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().type),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "Types"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
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
            lineNumber: 156,
            columnNumber: 15
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
      className: (_styles_pokemon_module_css__WEBPACK_IMPORTED_MODULE_5___default().stats),
      data: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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

const baseUrl = `https://pokehub-silk.vercel.app/`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcG9rZW1vbi9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYUEsTUFBTVEsT0FBZ0MsR0FBRyxDQUFDO0FBQ3hDQyxFQUFBQSxPQUR3QztBQUV4Q0MsRUFBQUEsVUFGd0M7QUFHeENDLEVBQUFBLFFBSHdDO0FBSXhDQyxFQUFBQSxTQUp3QztBQUt4Q0MsRUFBQUE7QUFMd0MsQ0FBRCxLQU1uQztBQUNKLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1osK0NBQVEsQ0FBV00sT0FBWCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDTyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEyQmQsK0NBQVEsQ0FBQ1MsU0FBRCxDQUF6QztBQUVBVixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNZ0IsU0FBUyxHQUFHLFlBQVk7QUFDNUIsWUFBTUMsR0FBRyxHQUFHLE1BQU1iLHVFQUFXLENBQUNHLE9BQU8sQ0FBQ1csRUFBVCxDQUE3QjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBRixNQUFBQSxZQUFZLENBQUNFLEdBQUQsQ0FBWjtBQUNELEtBSkQ7O0FBS0FELElBQUFBLFNBQVM7QUFDVixHQVBRLENBQVQ7O0FBU0EsUUFBTUssV0FBVyxHQUFHLENBQUNDLENBQUQsRUFBbUJDLEdBQW5CLEtBQW1DO0FBQ3JELFFBQUksQ0FBQ0QsQ0FBTCxFQUFRO0FBQ047QUFDRDs7QUFDRCxVQUFNRSxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLEdBQVYsRUFBZUMsR0FBZixDQUFvQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLElBQUYsRUFBMUIsQ0FBYjtBQUNBVCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBWjtBQUNBTCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBWjtBQUNELEdBUEQ7O0FBU0EsUUFBTU8sV0FBVyxHQUFHLE1BQU9aLEdBQVAsSUFBd0I7QUFDMUNFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDSCxHQUFyQztBQUNBRixJQUFBQSxZQUFZLENBQUNFLEdBQUQsQ0FBWjs7QUFDQSxRQUFJQSxHQUFKLEVBQVM7QUFDUCxVQUFJO0FBQ0YsY0FBTWEsSUFBSSxHQUFHO0FBQUVaLFVBQUFBLEVBQUUsRUFBRVgsT0FBTyxDQUFDVyxFQUFkO0FBQWtCYSxVQUFBQSxJQUFJLEVBQUV4QixPQUFPLENBQUN3QixJQUFoQztBQUFzQ0MsVUFBQUEsR0FBRyxFQUFFO0FBQTNDLFNBQWI7QUFDQSxjQUFNQyxLQUFLLENBQUMsV0FBRCxFQUFjO0FBQ3ZCQyxVQUFBQSxNQUFNLEVBQUUsTUFEZTtBQUV2QkMsVUFBQUEsT0FBTyxFQUFFO0FBQUUsNEJBQWdCO0FBQWxCLFdBRmM7QUFHdkJMLFVBQUFBLElBQUksRUFBRU0sSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFIaUIsU0FBZCxDQUFYO0FBS0QsT0FQRCxDQU9FLE9BQU9RLEtBQVAsRUFBYztBQUNkbkIsUUFBQUEsT0FBTyxDQUFDbUIsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixLQVhELE1BV087QUFDTGpDLE1BQUFBLHVFQUFXLENBQUNFLE9BQU8sQ0FBQ1csRUFBVCxDQUFYO0FBQ0Q7QUFDRixHQWpCRDs7QUFtQkEsUUFBTXFCLFFBQVEsR0FBRztBQUNmQyxJQUFBQSxLQUFLLEVBQUUsZ0JBRFE7QUFFZkMsSUFBQUEsSUFBSSxFQUFFN0IsV0FBVyxDQUFDOEIsS0FBWixDQUFrQmhCLEdBQWxCLENBQXVCaUIsSUFBRCxJQUFVQSxJQUFJLENBQUNDLFNBQXJDLENBRlM7QUFHZkMsSUFBQUEsZUFBZSxFQUFFckMsVUFBVSxDQUFDc0MsU0FIYjtBQUlmQyxJQUFBQSxXQUFXLEVBQUV2QyxVQUFVLENBQUN3QztBQUpULEdBQWpCO0FBT0EsUUFBTUMsTUFBTSxHQUFHckMsV0FBVyxDQUFDOEIsS0FBWixDQUFrQmhCLEdBQWxCLENBQXVCaUIsSUFBRCxJQUFVQSxJQUFJLENBQUNBLElBQUwsQ0FBVVosSUFBMUMsQ0FBZjtBQUNBLFFBQU1VLElBQUksR0FBRztBQUNYUSxJQUFBQSxNQUFNLEVBQUVBLE1BREc7QUFFWEMsSUFBQUEsUUFBUSxFQUFFLENBQUNYLFFBQUQ7QUFGQyxHQUFiO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVwQyx3RkFBaEI7QUFBQSxlQUNHUSxPQUFPLGlCQUNOO0FBQ0UsZUFBUyxFQUFFYixpREFBVSxDQUFDSyx1RUFBRCxFQUFhO0FBQ2hDLFNBQUNBLHdFQUFELEdBQWVXO0FBRGlCLE9BQWIsQ0FEdkI7QUFJRSxhQUFPLEVBQUUsWUFBWSxNQUFNZSxXQUFXLENBQUMsQ0FBQ2YsUUFBRjtBQUp4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBVUU7QUFBSSxlQUFTLEVBQUVYLHdFQUFmO0FBQUEsaUJBQ0csR0FESCxlQUVFO0FBQ0UsY0FBTSxFQUFHbUIsQ0FBRCxJQUFPRCxXQUFXLENBQUNDLENBQUMsQ0FBQzhCLGFBQUYsQ0FBZ0JDLFdBQWpCLEVBQThCLE1BQTlCLENBRDVCO0FBRUUsaUJBQVMsRUFBRTVDLFFBQVEsR0FBR04sOEVBQUgsR0FBdUIsRUFGNUM7QUFHRSx1QkFBZSxFQUFFTSxRQUhuQjtBQUFBLGtCQUtHRyxXQUFXLENBQUNtQjtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBb0JFO0FBQUksZUFBUyxFQUFFNUIseUVBQWY7QUFBQSx1QkFBZ0NTLFdBQVcsQ0FBQ00sRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRixlQXFCRTtBQUFJLGVBQVMsRUFBRWYsMEVBQWY7QUFBQSxpQkFDRyxHQURILGFBRVUsR0FGVixlQUlJO0FBQ0UsaUJBQVMsRUFBRU0sUUFBUSxHQUFHTiw4RUFBSCxHQUF1QixFQUQ1QztBQUVFLHVCQUFlLEVBQUVNLFFBRm5CO0FBQUEsa0JBSUdHLFdBQVcsQ0FBQzRDO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGLGVBa0NFO0FBQUksZUFBUyxFQUFFckQsMEVBQWY7QUFBQSxpQkFDRyxHQURILGFBRVUsR0FGVixlQUlJO0FBQ0UsaUJBQVMsRUFBRU0sUUFBUSxHQUFHTiw4RUFBSCxHQUF1QixFQUQ1QztBQUVFLHVCQUFlLEVBQUVNLFFBRm5CO0FBQUEsa0JBSUdHLFdBQVcsQ0FBQzZDO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixFQVVJLEdBVkosU0FXTSxHQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQ0YsZUErQ0U7QUFDRSxlQUFTLEVBQUV0RCx5RUFEYjtBQUVFLFNBQUcsRUFBRVMsV0FBVyxDQUFDK0MsT0FBWixDQUFvQkMsYUFGM0I7QUFHRSxTQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9DRixlQW9ERTtBQUFLLGVBQVMsRUFBRXpELDZFQUFoQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFLRTtBQUFLLGlCQUFTLEVBQUVBLHNGQUFoQjtBQUFBLGtCQUNHUyxXQUFXLENBQUNpRCxTQUFaLENBQXNCbkMsR0FBdEIsQ0FBMEIsQ0FBQ3FDLENBQUQsRUFBSUMsQ0FBSixrQkFDekI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUV2RCxRQUFRLEdBQUdOLDhFQUFILEdBQXVCLEVBRDVDO0FBRUUsMkJBQWUsRUFBRU0sUUFGbkI7QUFBQSx1QkFJR3NELENBQUMsQ0FBQ0UsT0FBRixDQUFVbEMsSUFKYixFQUtHZ0MsQ0FBQyxDQUFDRyxTQUFGLElBQWUsR0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU0YsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcERGLGVBdUVFO0FBQUssZUFBUyxFQUFFN0Qsd0VBQWhCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVBLHNGQUFoQjtBQUFBLGtCQUNHUyxXQUFXLENBQUN3RCxLQUFaLENBQWtCMUMsR0FBbEIsQ0FBc0IsQ0FBQzJDLENBQUQsRUFBSUwsQ0FBSixrQkFDckI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUV2RCxRQUFRLEdBQUdOLDhFQUFILEdBQXVCLEVBRDVDO0FBRUUsMkJBQWUsRUFBRU0sUUFGbkI7QUFBQSxzQkFJRzRELENBQUMsQ0FBQ0YsSUFBRixDQUFPcEM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBU2lDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZFRixlQXVGRSw4REFBQyxnREFBRDtBQUFLLGVBQVMsRUFBRTdELHlFQUFoQjtBQUE4QixVQUFJLEVBQUVzQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTJGRCxDQXRKRDs7QUF3SkEsaUVBQWVuQyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNa0UsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBTTtBQUFBLE9BQUN4QyxHQUFEO0FBQUEsT0FBTXlDO0FBQU4sTUFBZ0J4RSwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFNeUUsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRXBELElBQUFBO0FBQUYsTUFBU3dELE1BQU0sQ0FBQ0MsS0FBdEI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEIsVUFBTUMsTUFBTSxHQUFHN0MsR0FBRyxDQUFDSixJQUFKLEVBQWY7O0FBQ0EsUUFBSSxDQUFDSSxHQUFMLEVBQVU7QUFDUjtBQUNEOztBQUNEMEMsSUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQWEsWUFBVzVELEVBQUUsR0FBR0EsRUFBRSxHQUFHLEdBQVIsR0FBYyxFQUFHLEdBQUVjLEdBQUksRUFBakQ7QUFDQXlDLElBQUFBLE1BQU0sQ0FBQyxFQUFELENBQU47QUFDRCxHQVBEOztBQVFBLFFBQU1NLGNBQWMsR0FBSXpELENBQUQsSUFBOEM7QUFDbkUsUUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQnFELE1BQUFBLFdBQVc7QUFDWjtBQUNGLEdBSkQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVMLHVGQUFoQjtBQUFBLDRCQUNFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBVyxFQUFDLHNCQUZkO0FBR0UsY0FBUSxFQUFHakQsQ0FBRCxJQUFPbUQsTUFBTSxDQUFDbkQsQ0FBQyxDQUFDMEQsTUFBRixDQUFTQyxLQUFWLENBSHpCO0FBSUUsZ0JBQVUsRUFBRzNELENBQUQsSUFBT3lELGNBQWMsQ0FBQ3pELENBQUQsQ0FKbkM7QUFLRSxXQUFLLEVBQUVVO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQ0UsZUFBUyxFQUFFdUMsMEVBRGI7QUFFRSxjQUFRLEVBQUVZLE9BQU8sQ0FBQyxDQUFDbkQsR0FBRixDQUZuQjtBQUdFLGFBQU8sRUFBRSxNQUFNNEMsV0FBVyxFQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQXBDRDs7QUFzQ0EsaUVBQWVKLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVBLE1BQU1hLE9BQU8sR0FBSSxrQ0FBakI7QUFFTyxNQUFNQyxXQUFXLEdBQUcsTUFBT0MsYUFBUCxJQUFpQztBQUN4RCxRQUFNQyxRQUFtQixHQUFHLEVBQTVCO0FBQ0FELEVBQUFBLGFBQWEsQ0FBQzlELEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUJnRSxPQUF6QixDQUFpQyxPQUFPQyxDQUFQLEVBQVMxQixDQUFULEtBQWU7QUFDNUMsVUFBTXpELE9BQU8sR0FBRyxNQUFNNkUseUVBQUEsQ0FBd0JNLENBQUMsQ0FBQzlELElBQUYsRUFBeEIsQ0FBdEI7QUFDQTRELElBQUFBLFFBQVEsQ0FBQ3hCLENBQUQsQ0FBUixHQUFlekQsT0FBZjtBQUNILEdBSEQ7QUFJQVksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlvRSxRQUFaO0FBQ0EsU0FBT0EsUUFBUDtBQUNILENBUk07QUFVQSxNQUFNSSxVQUFVLEdBQUcsTUFBTUMsVUFBTixJQUE0QjtBQUNsRCxRQUFNdEYsT0FBTyxHQUFHLE1BQU02RSx5RUFBQSxDQUF3QlMsVUFBVSxDQUFDakUsSUFBWCxFQUF4QixDQUF0QjtBQUNBLFNBQU9yQixPQUFQO0FBQ0gsQ0FITTtBQU1BLE1BQU11RixPQUFPLEdBQUcsWUFBWTtBQUMvQixRQUFNQyxHQUFHLEdBQUcsTUFBTVgseUVBQUEsRUFBbEI7QUFDQSxTQUFPVyxHQUFQO0FBQ0gsQ0FITTtBQU1BLE1BQU0xRixXQUFXLEdBQUcsTUFBT2EsRUFBUCxJQUFxQjtBQUN4QyxRQUFNZSxLQUFLLENBQUUsR0FBRW9ELE9BQVEsWUFBV25FLEVBQUcsRUFBMUIsRUFBNkI7QUFDdENnQixJQUFBQSxNQUFNLEVBQUU7QUFEOEIsR0FBN0IsQ0FBWDtBQUdQLENBSk07QUFNQSxNQUFNOUIsV0FBVyxHQUFHLE1BQU9jLEVBQVAsSUFBcUI7QUFDNUMsUUFBTThFLEdBQUcsR0FBRyxNQUFNL0QsS0FBSyxDQUFFLEdBQUVvRCxPQUFRLGlCQUFnQm5FLEVBQUcsRUFBL0IsQ0FBdkI7QUFDQSxRQUFNWSxJQUFJLEdBQUcsTUFBTWtFLEdBQUcsQ0FBQ0MsSUFBSixFQUFuQjtBQUdBLFNBQU9uRSxJQUFJLENBQUMxQixXQUFaO0FBQ0gsQ0FOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ1A7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU0rRixRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNekIsTUFBTSxHQUFHSixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRXBELElBQUFBO0FBQUYsTUFBU3dELE1BQU0sQ0FBQ0MsS0FBdEI7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsUUFBRDtBQUFBLE9BQVdZO0FBQVgsTUFBMEJuRywrQ0FBUSxDQUFhLEVBQWIsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29HLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCckcsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTSxDQUFDVSxPQUFELEVBQVU0RixPQUFWLElBQXFCTCw0REFBVSxFQUFyQztBQUVBbEcsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxDQUFDa0IsRUFBTCxFQUFTO0FBQ1A7QUFDRDs7QUFFREMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEVBQVo7O0FBQ0EsVUFBTXNGLEtBQUssR0FBRyxZQUFZO0FBQ3hCLFlBQU1DLEtBQUssR0FBRyxNQUFNQyxPQUFPLENBQUNDLFVBQVIsQ0FDbEJDLE1BQU0sQ0FBQzFGLEVBQUQsQ0FBTixDQUNHTyxLQURILENBQ1MsR0FEVCxFQUVHQyxHQUZILENBRU8sTUFBT2dFLENBQVAsSUFBYSxNQUFNRSxnRUFBVSxDQUFDZ0IsTUFBTSxDQUFDbEIsQ0FBRCxDQUFQLENBRnBDLENBRGtCLENBQXBCO0FBS0EsWUFBTW1CLFFBQW9CLEdBQUcsRUFBN0I7QUFDQUosTUFBQUEsS0FBSyxDQUFDaEIsT0FBTixDQUFjLENBQUNDLENBQUQsRUFBSTFCLENBQUosS0FBVTtBQUN0QixZQUFJMEIsQ0FBQyxDQUFDb0IsTUFBRixLQUFhLFdBQWpCLEVBQThCO0FBQzVCRCxVQUFBQSxRQUFRLENBQUMvQixJQUFULENBQWNZLENBQUMsQ0FBQ1QsS0FBaEI7QUFDRDtBQUNGLE9BSkQ7QUFNQW1CLE1BQUFBLFdBQVcsQ0FBQ1MsUUFBRCxDQUFYO0FBQ0QsS0FkRDs7QUFlQUwsSUFBQUEsS0FBSztBQUNOLEdBdEJRLEVBc0JOLENBQUN0RixFQUFELENBdEJNLENBQVQ7QUF3QkEsUUFBTTRCLFNBQVMsR0FBRyxDQUNoQixTQURnQixFQUVoQixTQUZnQixFQUdoQixTQUhnQixFQUloQixTQUpnQixFQUtoQixTQUxnQixFQU1oQixTQU5nQixDQUFsQjtBQVFBLFFBQU1DLFdBQVcsR0FBRyxDQUNsQix1QkFEa0IsRUFFbEIsdUJBRmtCLEVBR2xCLHVCQUhrQixFQUlsQix1QkFKa0IsRUFLbEIsd0JBTGtCLEVBTWxCLHVCQU5rQixDQUFwQjtBQVFBLFFBQU1nRSxZQUFZLEdBQUc1QixPQUFPLENBQUNLLFFBQVEsSUFBSUEsUUFBUSxDQUFDd0IsTUFBdEIsQ0FBNUIsQ0EvQ3FCLENBZ0RyQjs7QUFDQSxTQUFPRCxZQUFZLGdCQUNqQjtBQUFBLDRCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVFLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQVo7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUU5Ryx3RUFBaEI7QUFBQSxnQ0FDRTtBQUNFLFlBQUUsRUFBQyxZQURMO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxpQkFBTyxFQUFFLE1BQU1tRyxPQUFPLENBQUMsQ0FBQ0QsSUFBRjtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBTyxpQkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFhRTtBQUFLLGVBQVMsRUFBRWxHLDZFQUFoQjtBQUFBLGdCQUNHcUYsUUFESCxhQUNHQSxRQURILHVCQUNHQSxRQUFRLENBQUU5RCxHQUFWLENBQWMsQ0FBQ25CLE9BQUQsRUFBVXlELENBQVYsS0FBZ0I7QUFDN0IsWUFBSSxDQUFDekQsT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFDRCw0QkFDRSw4REFBQyx3REFBRDtBQUNFLGlCQUFPLEVBQUVJLE9BQUYsYUFBRUEsT0FBRixjQUFFQSxPQUFGLEdBQWF3RyxTQUR0QjtBQUdFLGtCQUFRLEVBQUVkLElBSFo7QUFJRSxpQkFBTyxFQUFFOUYsT0FKWDtBQUtFLG9CQUFVLEVBQUU7QUFBRXVDLFlBQUFBLFNBQVMsRUFBRUEsU0FBYjtBQUF3QkUsWUFBQUEsVUFBVSxFQUFFRDtBQUFwQztBQUxkLFdBRU9pQixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFTRCxPQWJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaUIsZ0JBZ0NqQjtBQUFLLFNBQUssRUFBRTtBQUFFaUQsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBWjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0Y7QUFxQ0QsQ0F0RkQ7O0FBd0ZBLGlFQUFlZCxRQUFmOzs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9jb21wb25lbnRzL1Bva2Vtb24udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vY29tcG9uZW50cy9Qb2tlbW9uU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3BhZ2VzL2FwaS9wb2tlbW9uL3Bva2VhcGkudHMiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9wb2tlbW9uL1tpZF0udHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdXR1ZGVteS8uL3N0eWxlcy9wb2tlbW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicG9rZWFwaS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9rZW1vbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGlzRmF2b3VyaXRlLCB1bmZhdm91cml0ZSB9IGZyb20gXCIuLi9wYWdlcy9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhck9wdGlvbnMge1xyXG4gIGJhckNvbG9yczogc3RyaW5nW107XHJcbiAgYmFyQm9yZGVycz86IHN0cmluZ1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9rZVZpZXdQcm9wcyB7XHJcbiAgc2Vzc2lvbj86IFNlc3Npb247XHJcbiAgcG9rZW1vbjogSVBva2Vtb247XHJcbiAgYmFyT3B0aW9uczogQmFyT3B0aW9ucztcclxuICBlZGl0TW9kZT86IGJvb2xlYW47XHJcbiAgZmF2b3JpdGVkPzogYm9vbGVhbjtcclxufVxyXG5jb25zdCBQb2tlbW9uOiBSZWFjdC5GQzxQb2tlVmlld1Byb3BzPiA9ICh7XHJcbiAgcG9rZW1vbixcclxuICBiYXJPcHRpb25zLFxyXG4gIGVkaXRNb2RlLFxyXG4gIGZhdm9yaXRlZCxcclxuICBzZXNzaW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Bva2Vtb25EYXRhLCBzZXRQb2tlbW9uRGF0YV0gPSB1c2VTdGF0ZTxJUG9rZW1vbj4ocG9rZW1vbik7XHJcbiAgY29uc3QgW2Zhdm9yaXRlLCBzZXRGYXZvcml0ZWRdID0gdXNlU3RhdGUoZmF2b3JpdGVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmF2ID0gYXdhaXQgaXNGYXZvdXJpdGUocG9rZW1vbi5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZhdik7XHJcbiAgICAgIHNldEZhdm9yaXRlZChmYXYpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCIsXCIpLm1hcCgoaykgPT4gay50cmltKCkpO1xyXG4gICAgY29uc29sZS5sb2coa2V5cyk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRGYXZvcml0ZSA9IGFzeW5jIChmYXY6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBmYXZvdXJpdGUgdG8gXCIsIGZhdik7XHJcbiAgICBzZXRGYXZvcml0ZWQoZmF2KTtcclxuICAgIGlmIChmYXYpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBpZDogcG9rZW1vbi5pZCwgbmFtZTogcG9rZW1vbi5uYW1lLCB1cmw6IFwiXCIgfTtcclxuICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvcG9zdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuZmF2b3VyaXRlKHBva2Vtb24uaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXREYXRhID0ge1xyXG4gICAgbGFiZWw6IFwiYWJpbGl0eSBzY29yZXNcIixcclxuICAgIGRhdGE6IHBva2Vtb25EYXRhLnN0YXRzLm1hcCgoc3RhdCkgPT4gc3RhdC5iYXNlX3N0YXQpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYXJPcHRpb25zLmJhckNvbG9ycyxcclxuICAgIGJvcmRlckNvbG9yOiBiYXJPcHRpb25zLmJhckJvcmRlcnMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGFiZWxzID0gcG9rZW1vbkRhdGEuc3RhdHMubWFwKChzdGF0KSA9PiBzdGF0LnN0YXQubmFtZSk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgZGF0YXNldHM6IFtzdGF0RGF0YV0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBva2Vtb24tY29udGFpbmVyXCJdfT5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuZmF2LCB7XHJcbiAgICAgICAgICAgIFtzdHlsZXMuc3Rhcl06IGZhdm9yaXRlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiBhd2FpdCBzZXRGYXZvcml0ZSghZmF2b3JpdGUpfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQmx1cj17KGUpID0+IGNoYW5nZVZhbHVlKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCwgXCJuYW1lXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtlZGl0TW9kZSA/IHN0eWxlcy50ZXh0QWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLm5hbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXh9PiAje3Bva2Vtb25EYXRhLmlkfTwvaDE+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBIZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS5oZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYjMzk7XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy53ZWlnaHR9PlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICBXZWlnaHQ6e1wiIFwifVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwb2tlbW9uRGF0YS53ZWlnaHR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgfXtcIiBcIn1cclxuICAgICAgICBsYnN7XCIgXCJ9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICBzcmM9e3Bva2Vtb25EYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICBhbHQ9XCJzcHJpdGUgb2YgdGhlIHBva2Vtb25cIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc30+XHJcbiAgICAgICAgPGgyPkFiaWxpdGllczwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAqKDxpPkhpZGRlbiBhYmlsaXR5PC9pPilcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYmlsaXRpZXNDb250YWluZXJ9PlxyXG4gICAgICAgICAge3Bva2Vtb25EYXRhLmFiaWxpdGllcy5tYXAoKGEsIGkpID0+IChcclxuICAgICAgICAgICAgPGg0IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZWRpdE1vZGUgPyBzdHlsZXMudGV4dEFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9e2VkaXRNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthLmFiaWxpdHkubmFtZX1cclxuICAgICAgICAgICAgICAgIHthLmlzX2hpZGRlbiAmJiBcIipcIn1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZX0+XHJcbiAgICAgICAgPGgyPlR5cGVzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFiaWxpdGllc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cG9rZW1vbkRhdGEudHlwZXMubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxoNCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2VkaXRNb2RlID8gc3R5bGVzLnRleHRBY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXtlZGl0TW9kZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dC50eXBlLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEJhciBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30gZGF0YT17ZGF0YX0+PC9CYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbW1vbnMgZnJvbSBcIi4uL3N0eWxlcy9jb21tb25zLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUG9rZW1vblNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHVybC50cmltKCk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm91dGVyLnB1c2goYC9wb2tlbW9uLyR7aWQgPyBpZCArIFwiLFwiIDogXCJcIn0ke3VybH1gKTtcbiAgICBzZXRVcmwoXCJcIik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgaGFuZGxlQ2xpY2soKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbW1vbnNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIHBva2Vtb25cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcyhlKX1cbiAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y29tbW9ucy5idXR0b259XG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKCF1cmwpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfVxuICAgICAgPlxuICAgICAgICBMZXQmIzM5O3MgZmx5IVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uU2VhcmNoO1xuIiwiXG5pbXBvcnQgUG9rZUFQSSwgeyBJUG9rZW1vbiB9IGZyb20gXCJwb2tlYXBpLXR5cGVzY3JpcHRcIjtcblxuY29uc3QgYmFzZVVybCA9IGBodHRwczovL3Bva2VodWItc2lsay52ZXJjZWwuYXBwL2BcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb25zID0gYXN5bmMoIHBva2Vtb25TdHJpbmc6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb25zOklQb2tlbW9uW10gPSBbXVxuICAgIHBva2Vtb25TdHJpbmcuc3BsaXQoJywnKS5mb3JFYWNoKGFzeW5jIChwLGkpID0+IHtcbiAgICAgICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IFBva2VBUEkuUG9rZW1vbi5yZXNvbHZlKHAudHJpbSgpKVxuICAgICAgICBwb2tlbW9uc1tpXSA9IChwb2tlbW9uKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocG9rZW1vbnMpXG4gICAgcmV0dXJuIHBva2Vtb25zXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb2tlbW9uID0gYXN5bmMocG9rZXN0cmluZzpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLnJlc29sdmUocG9rZXN0cmluZy50cmltKCkpO1xuICAgIHJldHVybiBwb2tlbW9uXG59XG5cblxuZXhwb3J0IGNvbnN0IGxpc3RBbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsID0gYXdhaXQgUG9rZUFQSS5Qb2tlbW9uLmxpc3RBbGwoKVxuICAgIHJldHVybiBhbGw7XG59XG5cblxuZXhwb3J0IGNvbnN0IHVuZmF2b3VyaXRlID0gYXN5bmMgKGlkOm51bWJlcikgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfWFwaS9wb3N0LyR7aWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgaXNGYXZvdXJpdGUgPSBhc3luYyAoaWQ6bnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH1hcGkvZmF2b3VyaXRlLyR7aWR9YClcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgXG4gICAgcmV0dXJuIGJvZHkuaXNGYXZvdXJpdGVcbn1cblxuXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IElQb2tlbW9uIH0gZnJvbSBcInBva2VhcGktdHlwZXNjcmlwdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQb2tlbW9uLCBpc0Zhdm91cml0ZSwgbGlzdEFsbCB9IGZyb20gXCIuLi9hcGkvcG9rZW1vbi9wb2tlYXBpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcG9rZW1vbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBQb2tlbW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bva2Vtb25cIjtcbmltcG9ydCBQb2tlbW9uU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bva2Vtb25TZWFyY2hcIjtcblxuY29uc3QgUG9rZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGU8SVBva2Vtb25bXT4oW10pO1xuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgY29uc3QgaW5uZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwb2tlcyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcbiAgICAgICAgU3RyaW5nKGlkKVxuICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAubWFwKGFzeW5jIChwKSA9PiBhd2FpdCBnZXRQb2tlbW9uKFN0cmluZyhwKSkpXG4gICAgICApO1xuICAgICAgY29uc3QgZmlsdGVyZWQ6IElQb2tlbW9uW10gPSBbXTtcbiAgICAgIHBva2VzLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICAgICAgaWYgKHAuc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChwLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNldFBva2Vtb25zKGZpbHRlcmVkKTtcbiAgICB9O1xuICAgIGlubmVyKCk7XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IGJhckNvbG9ycyA9IFtcbiAgICBcIiNlNDQxNDFcIixcbiAgICBcIiNlNDZmNDFcIixcbiAgICBcIiNlNGIzNDFcIixcbiAgICBcIiM0MTk1ZTRcIixcbiAgICBcIiM0MWU0ODVcIixcbiAgICBcIiNiZTQxZTRcIixcbiAgXTtcbiAgY29uc3QgYm9yZGVyQ29sb3IgPSBbXG4gICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcbiAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxuICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDEpXCIsXG4gICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcbiAgICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMSlcIixcbiAgICBcInJnYmEoMjU1LCAxNTksIDY0LCAxKVwiLFxuICBdO1xuICBjb25zdCBmb3VuZFBva2Vtb24gPSBCb29sZWFuKHBva2Vtb25zICYmIHBva2Vtb25zLmxlbmd0aCk7XG4gIC8vIGNvbnNvbGUubG9nKGBmb3VuZHBva2Vtb24gJHtmb3VuZFBva2Vtb259YCk7XG4gIHJldHVybiBmb3VuZFBva2Vtb24gPyAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZWRpdFRvZ2dsZVwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdCghZWRpdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRUb2dnbGVcIj5Ub2dnbGUgZWRpdCBtb2RlPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb2tlbW9uU2VhcmNoIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7cG9rZW1vbnM/Lm1hcCgocG9rZW1vbiwgaSkgPT4ge1xuICAgICAgICAgIGlmICghcG9rZW1vbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBva2Vtb25cbiAgICAgICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbiA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgZWRpdE1vZGU9e2VkaXR9XG4gICAgICAgICAgICAgIHBva2Vtb249e3Bva2Vtb259XG4gICAgICAgICAgICAgIGJhck9wdGlvbnM9e3sgYmFyQ29sb3JzOiBiYXJDb2xvcnMsIGJhckJvcmRlcnM6IGJvcmRlckNvbG9yIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjNlbVwiIH19PlxuICAgICAgPGgxPldlIGRpZCBub3QgZmluZCBhbnkgcG9rZW1vbiwgcGxlYXNlIGNoZWNrIHlvdXIgc2VhcmNoPC9oMT5cbiAgICAgIDxQb2tlbW9uU2VhcmNoIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2tlVmlldztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImNvbW1vbnNfYnV0dG9uX18zUHBVUVwiLFxuXHRcInNlY29uZGFyeUJ1dHRvblwiOiBcImNvbW1vbnNfc2Vjb25kYXJ5QnV0dG9uX18zOXFOc1wiLFxuXHRcImRpc2FibGVkXCI6IFwiY29tbW9uc19kaXNhYmxlZF9fMWVjMVZcIixcblx0XCJwYWdlQ29udGFpbmVyXCI6IFwiY29tbW9uc19wYWdlQ29udGFpbmVyX18xekI4X1wiLFxuXHRcIm1haW5cIjogXCJjb21tb25zX21haW5fXzNiVzdEXCIsXG5cdFwiaGVhZGVyLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfaGVhZGVyLWNvbnRhaW5lcl9fMmRtR21cIixcblx0XCJwcm9maWxlLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfcHJvZmlsZS1jb250YWluZXJfXzN3alBnXCIsXG5cdFwiY29udGFpbmVyLWZsZXhcIjogXCJjb21tb25zX2NvbnRhaW5lci1mbGV4X18xcDNsSVwiLFxuXHRcInByb2ZpbGUtcGljXCI6IFwiY29tbW9uc19wcm9maWxlLXBpY19fM2dYeUhcIixcblx0XCJwcm9maWxlU3ViXCI6IFwiY29tbW9uc19wcm9maWxlU3ViX18xT0VDSVwiLFxuXHRcInByb2ZpbGVcIjogXCJjb21tb25zX3Byb2ZpbGVfXzJXVTJhXCIsXG5cdFwib3BlbkRvd25cIjogXCJjb21tb25zX29wZW5Eb3duX18zNFhYZVwiLFxuXHRcImNsb3NlZFwiOiBcImNvbW1vbnNfY2xvc2VkX18xTnY3N1wiLFxuXHRcImhpZGRlblwiOiBcImNvbW1vbnNfaGlkZGVuX18zU1YwdlwiLFxuXHRcImhvbWUtYnV0dG9uXCI6IFwiY29tbW9uc19ob21lLWJ1dHRvbl9fRE52cDZcIixcblx0XCJzZWFyY2gtY29udGFpbmVyXCI6IFwiY29tbW9uc19zZWFyY2gtY29udGFpbmVyX19ZNnFRTVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbW1vbnNfY29udGFpbmVyX19fQTFxR1wiLFxuXHRcImVuZFwiOiBcImNvbW1vbnNfZW5kX18zR3dwblwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9rZW1vbi1jb250YWluZXJcIjogXCJwb2tlbW9uX3Bva2Vtb24tY29udGFpbmVyX18yei1kYVwiLFxuXHRcImFiaWxpdGllc0NvbnRhaW5lclwiOiBcInBva2Vtb25fYWJpbGl0aWVzQ29udGFpbmVyX18zQy11bVwiLFxuXHRcImFiaWxpdGllc1wiOiBcInBva2Vtb25fYWJpbGl0aWVzX193Z3FublwiLFxuXHRcInRleHRBY3RpdmVcIjogXCJwb2tlbW9uX3RleHRBY3RpdmVfX2hyajE4XCIsXG5cdFwiZWRpdFwiOiBcInBva2Vtb25fZWRpdF9fMlNhd1FcIixcblx0XCJ0eXBlXCI6IFwicG9rZW1vbl90eXBlX18zemMtSVwiLFxuXHRcIm5hbWVcIjogXCJwb2tlbW9uX25hbWVfXzIyNktFXCIsXG5cdFwiaW5kZXhcIjogXCJwb2tlbW9uX2luZGV4X18yN3lvMFwiLFxuXHRcImhlaWdodFwiOiBcInBva2Vtb25faGVpZ2h0X18xSHM0ZFwiLFxuXHRcIndlaWdodFwiOiBcInBva2Vtb25fd2VpZ2h0X19CTndrd1wiLFxuXHRcImltYWdlXCI6IFwicG9rZW1vbl9pbWFnZV9fMUVuSjBcIixcblx0XCJzdGF0c1wiOiBcInBva2Vtb25fc3RhdHNfXzFFR2NIXCIsXG5cdFwiZmF2XCI6IFwicG9rZW1vbl9mYXZfXzJnWTNhXCIsXG5cdFwic3RhclwiOiBcInBva2Vtb25fc3Rhcl9fTmJWSWJcIixcblx0XCJzY2FsZVVwXCI6IFwicG9rZW1vbl9zY2FsZVVwX18yUVZTalwiLFxuXHRcImljb25Db250YWluZXJcIjogXCJwb2tlbW9uX2ljb25Db250YWluZXJfX3U1a0dqXCIsXG5cdFwicG9rZW1vbkljb25cIjogXCJwb2tlbW9uX3Bva2Vtb25JY29uX18zcWpvbFwiLFxuXHRcImljb25UZXh0XCI6IFwicG9rZW1vbl9pY29uVGV4dF9fYlNzaHdcIixcblx0XCJwb2tlZmlsdGVyXCI6IFwicG9rZW1vbl9wb2tlZmlsdGVyX18zX2hpNVwiLFxuXHRcImNvbnRhaW5lclwiOiBcInBva2Vtb25fY29udGFpbmVyX18xSm9Xa1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBva2VhcGktdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjbGFzc25hbWVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhciIsInN0eWxlcyIsImlzRmF2b3VyaXRlIiwidW5mYXZvdXJpdGUiLCJQb2tlbW9uIiwicG9rZW1vbiIsImJhck9wdGlvbnMiLCJlZGl0TW9kZSIsImZhdm9yaXRlZCIsInNlc3Npb24iLCJwb2tlbW9uRGF0YSIsInNldFBva2Vtb25EYXRhIiwiZmF2b3JpdGUiLCJzZXRGYXZvcml0ZWQiLCJmZXRjaERhdGEiLCJmYXYiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VWYWx1ZSIsImUiLCJrZXkiLCJrZXlzIiwic3BsaXQiLCJtYXAiLCJrIiwidHJpbSIsInNldEZhdm9yaXRlIiwiYm9keSIsIm5hbWUiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0RGF0YSIsImxhYmVsIiwiZGF0YSIsInN0YXRzIiwic3RhdCIsImJhc2Vfc3RhdCIsImJhY2tncm91bmRDb2xvciIsImJhckNvbG9ycyIsImJvcmRlckNvbG9yIiwiYmFyQm9yZGVycyIsImxhYmVscyIsImRhdGFzZXRzIiwic3RhciIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInRleHRBY3RpdmUiLCJpbmRleCIsImhlaWdodCIsIndlaWdodCIsImltYWdlIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJhYmlsaXRpZXMiLCJhYmlsaXRpZXNDb250YWluZXIiLCJhIiwiaSIsImFiaWxpdHkiLCJpc19oaWRkZW4iLCJ0eXBlIiwidHlwZXMiLCJ0IiwidXNlUm91dGVyIiwiY29tbW9ucyIsIlBva2Vtb25TZWFyY2giLCJzZXRVcmwiLCJyb3V0ZXIiLCJxdWVyeSIsImhhbmRsZUNsaWNrIiwicGFyc2VkIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJCb29sZWFuIiwiUG9rZUFQSSIsImJhc2VVcmwiLCJnZXRQb2tlbW9ucyIsInBva2Vtb25TdHJpbmciLCJwb2tlbW9ucyIsImZvckVhY2giLCJwIiwicmVzb2x2ZSIsImdldFBva2Vtb24iLCJwb2tlc3RyaW5nIiwibGlzdEFsbCIsImFsbCIsInJlcyIsImpzb24iLCJ1c2VTZXNzaW9uIiwiUG9rZVZpZXciLCJzZXRQb2tlbW9ucyIsImVkaXQiLCJzZXRFZGl0IiwibG9hZGluZyIsImlubmVyIiwicG9rZXMiLCJQcm9taXNlIiwiYWxsU2V0dGxlZCIsIlN0cmluZyIsImZpbHRlcmVkIiwic3RhdHVzIiwiZm91bmRQb2tlbW9uIiwibGVuZ3RoIiwicGFkZGluZyIsImNvbnRhaW5lciIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=