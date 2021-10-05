(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PokemonSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PokemonSearch */ "./components/PokemonSearch.tsx");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/commons.module.css */ "./styles/commons.module.css");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\pages\\index.tsx";







const Home = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Pokehub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: "Tune your pokemons with ease"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      children: "Welcome to Pokehub"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PokemonSearch__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
      children: "All Pokemons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      className: (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_5___default().secondaryButton),
      onClick: () => router.push("/pokemon"),
      children: "Pokemons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9jb21wb25lbnRzL1Bva2Vtb25TZWFyY2gudHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2Z1dHVkZW15Ly4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tbW9ucyBmcm9tIFwiLi4vc3R5bGVzL2NvbW1vbnMubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBQb2tlbW9uU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gdXJsLnRyaW0oKTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByb3V0ZXIucHVzaChgL3Bva2Vtb24vJHtpZCA/IGlkICsgXCIsXCIgOiBcIlwifSR7dXJsfWApO1xuICAgIHNldFVybChcIlwiKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoYW5kbGVDbGljaygpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9uc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgcG9rZW1vblwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGhhbmRsZUtleVByZXNzKGUpfVxuICAgICAgICB2YWx1ZT17dXJsfVxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjb21tb25zLmJ1dHRvbn1cbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4oIXVybCl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9XG4gICAgICA+XG4gICAgICAgIExldCYjMzk7cyBmbHkhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25TZWFyY2g7XG4iLCJpbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2tlbW9uU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL1Bva2Vtb25TZWFyY2hcIjtcbmltcG9ydCBjb21tb25zIGZyb20gXCIuLi9zdHlsZXMvY29tbW9ucy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QWxsIH0gZnJvbSBcIi4vYXBpL3Bva2Vtb24vcG9rZWFwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tbW9ucy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2tlaHViPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlR1bmUgeW91ciBwb2tlbW9ucyB3aXRoIGVhc2VcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDE+V2VsY29tZSB0byBQb2tlaHViPC9oMT5cbiAgICAgIDxQb2tlbW9uU2VhcmNoIC8+XG4gICAgICA8aDM+QWxsIFBva2Vtb25zPC9oMz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjb21tb25zLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcG9rZW1vblwiKX1cbiAgICAgID5cbiAgICAgICAgUG9rZW1vbnNcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImNvbW1vbnNfYnV0dG9uX18zUHBVUVwiLFxuXHRcInNlY29uZGFyeUJ1dHRvblwiOiBcImNvbW1vbnNfc2Vjb25kYXJ5QnV0dG9uX18zOXFOc1wiLFxuXHRcImRpc2FibGVkXCI6IFwiY29tbW9uc19kaXNhYmxlZF9fMWVjMVZcIixcblx0XCJwYWdlQ29udGFpbmVyXCI6IFwiY29tbW9uc19wYWdlQ29udGFpbmVyX18xekI4X1wiLFxuXHRcIm1haW5cIjogXCJjb21tb25zX21haW5fXzNiVzdEXCIsXG5cdFwiaGVhZGVyLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfaGVhZGVyLWNvbnRhaW5lcl9fMmRtR21cIixcblx0XCJwcm9maWxlLWNvbnRhaW5lclwiOiBcImNvbW1vbnNfcHJvZmlsZS1jb250YWluZXJfXzN3alBnXCIsXG5cdFwiY29udGFpbmVyLWZsZXhcIjogXCJjb21tb25zX2NvbnRhaW5lci1mbGV4X18xcDNsSVwiLFxuXHRcInByb2ZpbGUtcGljXCI6IFwiY29tbW9uc19wcm9maWxlLXBpY19fM2dYeUhcIixcblx0XCJwcm9maWxlU3ViXCI6IFwiY29tbW9uc19wcm9maWxlU3ViX18xT0VDSVwiLFxuXHRcInByb2ZpbGVcIjogXCJjb21tb25zX3Byb2ZpbGVfXzJXVTJhXCIsXG5cdFwib3BlbkRvd25cIjogXCJjb21tb25zX29wZW5Eb3duX18zNFhYZVwiLFxuXHRcImNsb3NlZFwiOiBcImNvbW1vbnNfY2xvc2VkX18xTnY3N1wiLFxuXHRcImhpZGRlblwiOiBcImNvbW1vbnNfaGlkZGVuX18zU1YwdlwiLFxuXHRcImhvbWUtYnV0dG9uXCI6IFwiY29tbW9uc19ob21lLWJ1dHRvbl9fRE52cDZcIixcblx0XCJzZWFyY2gtY29udGFpbmVyXCI6IFwiY29tbW9uc19zZWFyY2gtY29udGFpbmVyX19ZNnFRTVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbW1vbnNfY29udGFpbmVyX19fQTFxR1wiLFxuXHRcImVuZFwiOiBcImNvbW1vbnNfZW5kX18zR3dwblwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJjb21tb25zIiwiUG9rZW1vblNlYXJjaCIsInVybCIsInNldFVybCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJoYW5kbGVDbGljayIsInBhcnNlZCIsInRyaW0iLCJwdXNoIiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJCb29sZWFuIiwiSGVhZCIsIlJlYWN0IiwiSG9tZSIsImNvbnRhaW5lciIsInNlY29uZGFyeUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=