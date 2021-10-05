(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./styles/commons.module.css
var commons_module = __webpack_require__(3926);
var commons_module_default = /*#__PURE__*/__webpack_require__.n(commons_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Profile.tsx








const Profile = ({
  profile
}) => {
  var _profile$user, _profile$user2;

  const router = (0,router_.useRouter)();
  const {
    0: isOpen,
    1: toggleOpen
  } = (0,external_react_.useState)(false);
  const {
    0: firstTimeClicked,
    1: setClicked
  } = (0,external_react_.useState)(false);

  const isActive = pathname => router.pathname === pathname;

  const handleToggle = () => {
    !firstTimeClicked && setClicked(true);
    toggleOpen(!isOpen);
  };

  (0,external_react_.useEffect)(() => {
    setClicked(false);
    toggleOpen(false);
  }, [router.pathname]);

  const SignOut = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: external_classnames_default()((commons_module_default()).button, (commons_module_default()).end),
      onClick: () => (0,client_.signOut)(),
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Log out"
      })
    });
  };

  const ProfileScreen = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()((commons_module_default()).profile, {
        [(commons_module_default()).closed]: !isOpen,
        [(commons_module_default()).hidden]: !firstTimeClicked
      }),
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/favourites",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "Favourites"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(SignOut, {})]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (commons_module_default()).profileSub,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "profile-picture",
      children: (_profile$user = profile.user) === null || _profile$user === void 0 ? void 0 : _profile$user.name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (commons_module_default())["profile-container"],
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        id: "profile-picture",
        onClick: () => handleToggle(),
        className: (commons_module_default())["profile-pic"],
        src: ((_profile$user2 = profile.user) === null || _profile$user2 === void 0 ? void 0 : _profile$user2.image) || "",
        alt: "Profile picture"
      }), /*#__PURE__*/jsx_runtime_.jsx(ProfileScreen, {})]
    })]
  });
};
;// CONCATENATED MODULE: ./components/buttons/HomeButton.tsx





const HomeButton = ({
  additionalClassname
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: external_classnames_default()((commons_module_default()).button, additionalClassname && (commons_module_default())[additionalClassname]),
    onClick: () => router.push("/"),
    children: "Home"
  });
};

/* harmony default export */ const buttons_HomeButton = (HomeButton);
;// CONCATENATED MODULE: ./components/buttons/BackButton.tsx





const BackButton = ({
  additionalClassname
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: external_classnames_default()((commons_module_default()).button, additionalClassname && (commons_module_default())[additionalClassname]),
    onClick: () => router.back(),
    children: "Back"
  });
};

/* harmony default export */ const buttons_BackButton = (BackButton);
;// CONCATENATED MODULE: ./components/PageTools.tsx






const PageTools = ({
  children
}) => {
  const router = (0,router_.useRouter)();

  const isActive = pathname => router.pathname === pathname;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (commons_module_default())["container-flex"],
    children: [!isActive("/") && /*#__PURE__*/jsx_runtime_.jsx(buttons_HomeButton, {
      additionalClassname: "home-button"
    }), !isActive("/") && /*#__PURE__*/jsx_runtime_.jsx(buttons_BackButton, {}), children]
  });
};
;// CONCATENATED MODULE: ./components/Header.tsx










const Header = () => {
  const router = (0,router_.useRouter)();

  const isActive = pathname => router.pathname === pathname;

  const [session, loading] = (0,client_.useSession)();

  const SignIn = () => {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/api/auth/signin",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (commons_module_default()).button,
        "data-active": isActive("/signup"),
        children: "Log in"
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (commons_module_default())["header-container"],
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTools, {}), session && /*#__PURE__*/jsx_runtime_.jsx(Profile, {
      profile: session
    }), !session && /*#__PURE__*/jsx_runtime_.jsx(SignIn, {})]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Layout.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (commons_module_default()).main,
      children: children
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 3926:
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

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8104:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(7930)));
module.exports = __webpack_exports__;

})();