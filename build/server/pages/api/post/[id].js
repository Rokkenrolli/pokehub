"use strict";
(() => {
var exports = {};
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");
// pages/api/post/[id].ts
 // DELETE /api/post/:id

const handle = async (req, res) => {
  const id = req.query.id;

  if (req.method === 'DELETE') {
    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.favourite.deleteMany({
      where: {
        pokemonId: Number(id)
      }
    });
    res.json(post);
  } else {
    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handle);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Bvc3QvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQyxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxJQUFBQSxNQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUQsd0RBQUosRUFBaEI7QUFDRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRUQsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0NBS0E7O0FBQ0EsTUFBT0UsTUFBcUIsR0FBRyxPQUFNQyxHQUFOLEVBQVdDLEdBQVgsS0FBbUI7QUFDaEQsUUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUQsRUFBckI7O0FBQ0EsTUFBSUYsR0FBRyxDQUFDSSxNQUFKLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IsVUFBTUMsSUFBSSxHQUFHLE1BQU1SLHFFQUFBLENBQTRCO0FBQzdDVyxNQUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsU0FBUyxFQUFFQyxNQUFNLENBQUNSLEVBQUQ7QUFBbkI7QUFEc0MsS0FBNUIsQ0FBbkI7QUFHQUQsSUFBQUEsR0FBRyxDQUFDVSxJQUFKLENBQVNOLElBQVQ7QUFDRCxHQUxELE1BS087QUFDTCxVQUFNLElBQUlPLEtBQUosQ0FDSCxZQUFXWixHQUFHLENBQUNJLE1BQU8seUNBRG5CLENBQU47QUFHRDtBQUNGLENBWkQ7O0FBY0EsaUVBQWVMLE1BQWY7Ozs7Ozs7Ozs7QUNwQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXR1ZGVteS8uL2xpYi9wcmlzbWEudHMiLCJ3ZWJwYWNrOi8vZnV0dWRlbXkvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzIiwid2VicGFjazovL2Z1dHVkZW15L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7IiwiLy8gcGFnZXMvYXBpL3Bvc3QvW2lkXS50c1xyXG5cclxuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcclxuXHJcbi8vIERFTEVURSAvYXBpL3Bvc3QvOmlkXHJcbmNvbnN0ICBoYW5kbGU6TmV4dEFwaUhhbmRsZXIgPSBhc3luYyhyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkO1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5mYXZvdXJpdGUuZGVsZXRlTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHBva2Vtb25JZDogTnVtYmVyKGlkKSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbihwb3N0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgVGhlIEhUVFAgJHtyZXEubWV0aG9kfSBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHJvdXRlLmAsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsImhhbmRsZSIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJtZXRob2QiLCJwb3N0IiwiZmF2b3VyaXRlIiwiZGVsZXRlTWFueSIsIndoZXJlIiwicG9rZW1vbklkIiwiTnVtYmVyIiwianNvbiIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==