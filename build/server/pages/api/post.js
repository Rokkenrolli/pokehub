"use strict";
(() => {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFavourite": () => (/* binding */ createFavourite),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
const handle = async (req, res) => {
  const {
    id,
    name,
    url
  } = req.body;
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });
  console.log(session);
  const result = await createFavourite(id, name, url, session);
  res.json(result);
};

const createFavourite = async (id, name, url, session) => {
  if (!session) {
    return {
      status: 403,
      text: "unauthenticated"
    };
  }

  const userId = Number(session['userId']);
  console.log(userId);
  const result = await prisma.favourite.create({
    data: {
      pokemonId: id,
      pokemonName: name,
      pokemonUrl: url,
      idUser: userId
    }
  });
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handle);

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQyxNQUFNQyxNQUFzQixHQUFHLE9BQU1DLEdBQU4sRUFBV0MsR0FBWCxLQUFtQjtBQUNqRCxRQUFNO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsSUFBTjtBQUFZQyxJQUFBQTtBQUFaLE1BQW9CSixHQUFHLENBQUNLLElBQTlCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1SLDREQUFVLENBQUM7QUFBQ0UsSUFBQUE7QUFBRCxHQUFELENBQWhDO0FBQ0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0EsUUFBTUcsTUFBTSxHQUFHLE1BQU1DLGVBQWUsQ0FBQ1IsRUFBRCxFQUFLQyxJQUFMLEVBQVdDLEdBQVgsRUFBZUUsT0FBZixDQUFwQztBQUNBTCxFQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBU0YsTUFBVDtBQUNELENBTkE7O0FBUU0sTUFBTUMsZUFBZSxHQUFHLE9BQU9SLEVBQVAsRUFBa0JDLElBQWxCLEVBQStCQyxHQUEvQixFQUEyQ0UsT0FBM0MsS0FBc0U7QUFDbkcsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFPO0FBQUNNLE1BQUFBLE1BQU0sRUFBQyxHQUFSO0FBQWFDLE1BQUFBLElBQUksRUFBRTtBQUFuQixLQUFQO0FBQ0Q7O0FBQ0QsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNULE9BQU8sQ0FBQyxRQUFELENBQVIsQ0FBckI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlNLE1BQVo7QUFDQSxRQUFNTCxNQUFNLEdBQUcsTUFBTU8sTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QjtBQUN6Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLFNBQVMsRUFBQ2xCLEVBRFI7QUFFRm1CLE1BQUFBLFdBQVcsRUFBQ2xCLElBRlY7QUFHRm1CLE1BQUFBLFVBQVUsRUFBQ2xCLEdBSFQ7QUFJRm1CLE1BQUFBLE1BQU0sRUFBRVQ7QUFKTjtBQURtQyxHQUF4QixDQUFyQjtBQVFBLFNBQU9MLE1BQVA7QUFDRCxDQWZNO0FBaUJQLGlFQUFlVixNQUFmOzs7Ozs7Ozs7O0FDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly9mdXR1ZGVteS9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdENvb2tpZXMgfSBmcm9tICduZXh0L2Rpc3Qvc2VydmVyL2FwaS11dGlscyc7XHJcblxyXG4vLyBQT1NUIC9hcGkvcG9zdFxyXG4vLyBSZXF1aXJlZCBmaWVsZHMgaW4gYm9keTogdGl0bGVcclxuLy8gT3B0aW9uYWwgZmllbGRzIGluIGJvZHk6IGNvbnRlbnRcclxuIGNvbnN0IGhhbmRsZTogTmV4dEFwaUhhbmRsZXIgPSBhc3luYyhyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIG5hbWUsIHVybCB9ID0gcmVxLmJvZHk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pO1xyXG4gIGNvbnNvbGUubG9nKHNlc3Npb24pXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlRmF2b3VyaXRlKGlkLCBuYW1lLCB1cmwsc2Vzc2lvbilcclxuICByZXMuanNvbihyZXN1bHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRmF2b3VyaXRlID0gYXN5bmMgKGlkOm51bWJlciwgbmFtZTpzdHJpbmcsIHVybDpzdHJpbmcsIHNlc3Npb246U2Vzc2lvbiB8IG51bGwpID0+IHtcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7c3RhdHVzOjQwMywgdGV4dDogXCJ1bmF1dGhlbnRpY2F0ZWRcIn1cclxuICB9XHJcbiAgY29uc3QgdXNlcklkID0gTnVtYmVyKHNlc3Npb25bJ3VzZXJJZCddKVxyXG4gIGNvbnNvbGUubG9nKHVzZXJJZClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuZmF2b3VyaXRlLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBva2Vtb25JZDppZCxcclxuICAgICAgICAgIHBva2Vtb25OYW1lOm5hbWUsXHJcbiAgICAgICAgICBwb2tlbW9uVXJsOnVybCxcclxuICAgICAgICAgIGlkVXNlcjogdXNlcklkXHJcbiAgICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImhhbmRsZSIsInJlcSIsInJlcyIsImlkIiwibmFtZSIsInVybCIsImJvZHkiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImNyZWF0ZUZhdm91cml0ZSIsImpzb24iLCJzdGF0dXMiLCJ0ZXh0IiwidXNlcklkIiwiTnVtYmVyIiwicHJpc21hIiwiZmF2b3VyaXRlIiwiY3JlYXRlIiwiZGF0YSIsInBva2Vtb25JZCIsInBva2Vtb25OYW1lIiwicG9rZW1vblVybCIsImlkVXNlciJdLCJzb3VyY2VSb290IjoiIn0=