(() => {
var exports = {};
exports.id = "pages/favourites";
exports.ids = ["pages/favourites"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;

if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/favourites/index.tsx":
/*!************************************!*\
  !*** ./pages/favourites/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/commons.module.css */ "./styles/commons.module.css");
/* harmony import */ var _styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../lib/prisma */ "./lib/prisma.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\edcqw\\Desktop\\ty\xF6projektit\\pokehub\\pages\\favourites\\index.tsx";





const FavoritePage = ({
  favourites
}) => {
  var _session$user;

  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.useSession)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_commons_module_css__WEBPACK_IMPORTED_MODULE_3___default()["profile-container"]),
    children: [session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: ["Hello ", (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }, undefined), !session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Something went wrong"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }, undefined), favourites.map((f, i) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        children: f.pokemonName
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = async ({
  req,
  res
}) => {
  var _session$user2;

  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    res.statusCode = 403;
    return {
      props: {
        favourites: []
      }
    };
  }

  const favourites = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.favourite.findMany({
    where: {
      author: {
        email: (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.email
      }
    }
  });
  return {
    props: {
      favourites: favourites
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritePage);

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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/favourites/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZmF2b3VyaXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUssWUFBNkIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFvQjtBQUFBOztBQUN4RCxRQUFNLENBQUNDLE9BQUQsRUFBVUMsT0FBVixJQUFxQkwsNERBQVUsRUFBckM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsd0ZBQWhCO0FBQUEsZUFDR0csT0FBTyxpQkFBSTtBQUFBLDRDQUFXQSxPQUFPLENBQUNFLElBQW5CLGtEQUFXLGNBQWNDLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZCxFQUVHLENBQUNILE9BQUQsaUJBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmYsRUFHR0QsVUFBVSxDQUFDSyxHQUFYLENBQWUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDeEIsMEJBQU87QUFBQSxrQkFBYUQsQ0FBQyxDQUFDRTtBQUFmLFNBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELEtBRkEsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBWEQ7O0FBYU8sTUFBTUUsa0JBQXNDLEdBQUcsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9DLEVBQUFBO0FBQVAsQ0FBUCxLQUF3QjtBQUFBOztBQUM1RSxRQUFNVixPQUFPLEdBQUcsTUFBTUwsNERBQVUsQ0FBQztBQUFFYyxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7O0FBQ0EsTUFBSSxDQUFDVCxPQUFMLEVBQWM7QUFDWlUsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsV0FBTztBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBRWIsUUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFBVCxLQUFQO0FBQ0Q7O0FBRUQsUUFBTUEsVUFBVSxHQUFHLE1BQU1OLG1FQUFBLENBQTBCO0FBQ2pEc0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxLQUFLLG9CQUFFakIsT0FBTyxDQUFDRSxJQUFWLG1EQUFFLGVBQWNlO0FBQXZCO0FBREg7QUFEMEMsR0FBMUIsQ0FBekI7QUFLQSxTQUFPO0FBQUVMLElBQUFBLEtBQUssRUFBRTtBQUFFYixNQUFBQSxVQUFVLEVBQUVBO0FBQWQ7QUFBVCxHQUFQO0FBQ0QsQ0FiTTtBQWNQLGlFQUFlRCxZQUFmOzs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2Z1dHVkZW15Ly4vcGFnZXMvZmF2b3VyaXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9zdHlsZXMvY29tbW9ucy5tb2R1bGUuY3NzIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiLCJpbXBvcnQgeyBGYXZvdXJpdGUgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY29tbW9ucy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBmYXZvdXJpdGVzOiBGYXZvdXJpdGVbXTtcclxufVxyXG5cclxuY29uc3QgRmF2b3JpdGVQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBmYXZvdXJpdGVzIH0pID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwcm9maWxlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIHtzZXNzaW9uICYmIDxoMT5IZWxsbyB7c2Vzc2lvbi51c2VyPy5uYW1lfTwvaDE+fVxyXG4gICAgICB7IXNlc3Npb24gJiYgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMT59XHJcbiAgICAgIHtmYXZvdXJpdGVzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8aDEga2V5PXtpfT57Zi5wb2tlbW9uTmFtZX08L2gxPjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyBmYXZvdXJpdGVzOiBbXSB9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBmYXZvdXJpdGVzID0gYXdhaXQgcHJpc21hLmZhdm91cml0ZS5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBhdXRob3I6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZmF2b3VyaXRlczogZmF2b3VyaXRlcyB9IH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlUGFnZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiY29tbW9uc19idXR0b25fXzNQcFVRXCIsXG5cdFwic2Vjb25kYXJ5QnV0dG9uXCI6IFwiY29tbW9uc19zZWNvbmRhcnlCdXR0b25fXzM5cU5zXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJjb21tb25zX2Rpc2FibGVkX18xZWMxVlwiLFxuXHRcInBhZ2VDb250YWluZXJcIjogXCJjb21tb25zX3BhZ2VDb250YWluZXJfXzF6QjhfXCIsXG5cdFwibWFpblwiOiBcImNvbW1vbnNfbWFpbl9fM2JXN0RcIixcblx0XCJoZWFkZXItY29udGFpbmVyXCI6IFwiY29tbW9uc19oZWFkZXItY29udGFpbmVyX18yZG1HbVwiLFxuXHRcInByb2ZpbGUtY29udGFpbmVyXCI6IFwiY29tbW9uc19wcm9maWxlLWNvbnRhaW5lcl9fM3dqUGdcIixcblx0XCJjb250YWluZXItZmxleFwiOiBcImNvbW1vbnNfY29udGFpbmVyLWZsZXhfXzFwM2xJXCIsXG5cdFwicHJvZmlsZS1waWNcIjogXCJjb21tb25zX3Byb2ZpbGUtcGljX18zZ1h5SFwiLFxuXHRcInByb2ZpbGVTdWJcIjogXCJjb21tb25zX3Byb2ZpbGVTdWJfXzFPRUNJXCIsXG5cdFwicHJvZmlsZVwiOiBcImNvbW1vbnNfcHJvZmlsZV9fMldVMmFcIixcblx0XCJvcGVuRG93blwiOiBcImNvbW1vbnNfb3BlbkRvd25fXzM0WFhlXCIsXG5cdFwiY2xvc2VkXCI6IFwiY29tbW9uc19jbG9zZWRfXzFOdjc3XCIsXG5cdFwiaGlkZGVuXCI6IFwiY29tbW9uc19oaWRkZW5fXzNTVjB2XCIsXG5cdFwiaG9tZS1idXR0b25cIjogXCJjb21tb25zX2hvbWUtYnV0dG9uX19ETnZwNlwiLFxuXHRcInNlYXJjaC1jb250YWluZXJcIjogXCJjb21tb25zX3NlYXJjaC1jb250YWluZXJfX1k2cVFNXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29tbW9uc19jb250YWluZXJfX19BMXFHXCIsXG5cdFwiZW5kXCI6IFwiY29tbW9uc19lbmRfXzNHd3BuXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwiZ2V0U2Vzc2lvbiIsInVzZVNlc3Npb24iLCJzdHlsZXMiLCJGYXZvcml0ZVBhZ2UiLCJmYXZvdXJpdGVzIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VyIiwibmFtZSIsIm1hcCIsImYiLCJpIiwicG9rZW1vbk5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJzdGF0dXNDb2RlIiwicHJvcHMiLCJmYXZvdXJpdGUiLCJmaW5kTWFueSIsIndoZXJlIiwiYXV0aG9yIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9