"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 5324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;

if (true) {
  prisma = new client_namespaceObject.PrismaClient();
} else {}

/* harmony default export */ const lib_prisma = (prisma);

/***/ }),

/***/ 1529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/adapters"
const adapters_namespaceObject = require("next-auth/adapters");
var adapters_default = /*#__PURE__*/__webpack_require__.n(adapters_namespaceObject);
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(5324);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts





const authHandler = (req, res) => external_next_auth_default()(req, res, options);

/* harmony default export */ const _nextauth_ = (authHandler);
const options = {
  providers: [providers_default().GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;
      return Promise.resolve(session);
    }
  },
  adapter: adapters_default().Prisma.Adapter({
    prisma: prisma/* default */.Z
  }),
  secret: process.env.SECRET
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1529));
module.exports = __webpack_exports__;

})();