self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/header.jsx":
/*!**************************************!*\
  !*** ./components/common/header.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _ALink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ALink */ "./components/common/ALink.jsx");
/* harmony import */ var _partials_cart_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/cart-menu */ "./components/common/partials/cart-menu.jsx");
/* harmony import */ var _partials_main_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/main-menu */ "./components/common/partials/main-menu.jsx");
/* harmony import */ var _partials_search_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/search-form */ "./components/common/partials/search-form.jsx");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header.module.css */ "./components/common/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _server_apollo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../server/apollo.js */ "./server/apollo.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Nabeel Hassan\\arabdeals\\ArabDeal-Web\\components\\common\\header.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_4___default().createElement);

function _templateObject2() {
  var data = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["mutation LogoutUser {\n  logoutUser {\n    _id\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["query Products {\n  getWishListProducts {\n    products {\n      image\n      productId\n      productName\n      sellingPrice\n      shortDescription\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // Import Actions

 // Import Custom Component








 // import offer from "../../public/images/ticket-discount.svg";




var GET_WISH_LIST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.gql)(_templateObject());
var LOG_OUT_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.gql)(_templateObject2());

function Header(_ref) {
  _s();

  var _ref$adClass = _ref.adClass,
      adClass = _ref$adClass === void 0 ? "" : _ref$adClass,
      wishlist = _ref.wishlist;

  // get current path
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)(),
      pathname = _useRouter.pathname;

  function openMobileMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-active");
    e.currentTarget.classList.toggle("active");
  }

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(LOG_OUT_USER),
      _useMutation2 = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 2),
      logout = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();

  var handleLog = function handleLog() {
    // console.log("click");
    if (localStorage.getItem("arabtoken")) {
      // console.log("ccc");
      router.push("/pages/account");
    } else {
      router.push("/pages/login");
    }
  };

  var token = localStorage.getItem("arabtoken");

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__.useQuery)(GET_WISH_LIST, {
    skip: !token
  }),
      wishListData = _useQuery.data,
      wishListLoading = _useQuery.loading,
      wishListError = _useQuery.error,
      wishListRefetch = _useQuery.refetch;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      showDropdown = _useState[0],
      setShowDropdown = _useState[1];

  var handleToggleDropdown = function handleToggleDropdown() {
    setShowDropdown(function (prevState) {
      return !prevState;
    });
  }; // <div className="header-top">
  //   {/* <div className="container">
  //     <div className="header-left d-none d-sm-block">
  //       <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
  //         <i className="icon-shipping"></i>
  //         <div className="info-box-content">
  //           <h4 className="text-transform-none">
  //             FREE Express Shipping On Orders $99+
  //           </h4>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
  //       <div className="header-dropdown">
  //         <ALink href="#">USD</ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="#">EUR</ALink>
  //             </li>
  //             <li>
  //               <ALink href="#">USD</ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
  //         <ALink href="#">
  //           <i className="flag-us flag"></i>ENG
  //         </ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="#">
  //                 <i className="flag-us flag mr-2"></i>ENG
  //               </ALink>
  //             </li>
  //             <li>
  //               <ALink href="#">
  //                 <i className="flag-fr flag mr-2"></i>FRA
  //               </ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="header-dropdown dropdown-expanded d-none d-lg-block">
  //         <ALink href="#">Links</ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="/pages/account">My account</ALink>
  //             </li>
  //             <li>
  //               <ALink href="/pages/cart">Cart</ALink>
  //             </li>
  //             <li>
  //               <ALink href="/pages/login" className="login-link">
  //                 Log In
  //               </ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="social-icons">
  //         <ALink
  //           href="#"
  //           className="social-icon social-facebook icon-facebook"
  //         ></ALink>
  //         <ALink
  //           href="#"
  //           className="social-icon social-twitter icon-twitter"
  //         ></ALink>
  //         <ALink
  //           href="#"
  //           className="social-icon social-instagram icon-instagram"
  //         ></ALink>
  //       </div>
  //     </div>
  //   </div> */}
  // </div>


  var handleLogout = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              localStorage.clear();
              _context.next = 4;
              return logout();

            case 4:
              router.push('/pages/login');
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Logout error:", _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, __jsx("header", {
    className: "header ".concat(adClass, " sticky-header mobile-sticky desktop-sticky"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-middle",
    style: {
      paddingTop: "3rem",
      paddingBottom: "3rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container innercontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-left col-lg-2 w-auto pl-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "/",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images/ArabDeal.png",
    className: "w-100",
    width: "111",
    height: "44",
    alt: "Porto Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "header-right w-lg-max",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(_partials_search_form__WEBPACK_IMPORTED_MODULE_10__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "d-flex justify-content-center align-items-center ".concat((_header_module_css__WEBPACK_IMPORTED_MODULE_15___default().offerdiv)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }, __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "/pages/offers",
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "images/ticket-discount.svg",
    alt: "Offer",
    width: "30",
    height: "30",
    style: {
      marginRight: "8px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  })), __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "/pages/offers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 45
    }
  }, "OFFERZONE"))), !token ? __jsx("div", {
    className: "header-user custom_userborder header-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_15___default().circle),
    onClick: handleLog,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_16__.BiSolidUser, {
    style: {
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 21
    }
  }))) : __jsx("div", {
    className: "header-dropdown  custom_userborder header-icon" // style={{ marginLeft:"20px"}}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_15___default().circle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 19
    }
  }, __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_16__.BiSolidUser, {
    style: {
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "images/icon/vuesax/bold/frame.svg",
    style: {
      width: "25px",
      height: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 27
    }
  }), "My Account")), __jsx("li", {
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 23
    }
  }, __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "images/icon/vuesax/bold/key.svg",
    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_15___default().flagimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 27
    }
  }), "Log Out"))))), token && __jsx(_ALink__WEBPACK_IMPORTED_MODULE_7__.default, {
    href: "/pages/wishlist",
    className: "header-icon position-relative",
    title: "wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_15___default().circle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.AiFillHeart, {
    style: {
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: "wishlist-count badge-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }, wishListData === null || wishListData === void 0 ? void 0 : wishListData.getWishListProducts.products.length)), __jsx(_partials_cart_menu__WEBPACK_IMPORTED_MODULE_8__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 15
    }
  }))))));
}

_s(Header, "KpfmGp7wBoJjlP2xIMxuVpHQQLw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation, next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_14__.useQuery];
});

_c = Header;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : []
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo_js__WEBPACK_IMPORTED_MODULE_12__.default)({
  ssr: false
})((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__.actions)(Header)));

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJHRVRfV0lTSF9MSVNUIiwiZ3FsIiwiTE9HX09VVF9VU0VSIiwiSGVhZGVyIiwiYWRDbGFzcyIsIndpc2hsaXN0IiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJvcGVuTW9iaWxlTWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImN1cnJlbnRUYXJnZXQiLCJ1c2VNdXRhdGlvbiIsImxvZ291dCIsImxvYWRpbmciLCJlcnJvciIsInJvdXRlciIsImhhbmRsZUxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwidG9rZW4iLCJ1c2VRdWVyeSIsInNraXAiLCJ3aXNoTGlzdERhdGEiLCJkYXRhIiwid2lzaExpc3RMb2FkaW5nIiwid2lzaExpc3RFcnJvciIsIndpc2hMaXN0UmVmZXRjaCIsInJlZmV0Y2giLCJ1c2VTdGF0ZSIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsImhhbmRsZVRvZ2dsZURyb3Bkb3duIiwicHJldlN0YXRlIiwiaGFuZGxlTG9nb3V0IiwiY2xlYXIiLCJjb25zb2xlIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJzdHlsZXMiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRXaXNoTGlzdFByb2R1Y3RzIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJ3aXRoQXBvbGxvIiwic3NyIiwiY29ubmVjdCIsIldpc2hsaXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtB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QUFhLFNBQUssRUFBRTtBQUFFRSxjQUFRLEVBQUU7QUFBWixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVNFO0FBQU0sYUFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dsQixZQURILGFBQ0dBLFlBREgsdUJBQ0dBLFlBQVksQ0FBRXFCLG1CQUFkLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFEOUMsQ0FURixDQTNKSixFQXlLRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6S0YsQ0F2QkYsQ0FERixDQUhGLENBREYsQ0FERjtBQW9ORDs7R0FoV1FoRCxNO1VBRWNHLG1ELEVBT2dCVSx3RCxFQUl0QlYsbUQsRUFxQlhvQiwwRDs7O0tBbENHdkIsTTs7QUFpV1QsSUFBTWlELGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTGhELFlBQVEsRUFBRWdELEtBQUssQ0FBQ2hELFFBQU4sQ0FBZWlELElBQWYsR0FBc0JELEtBQUssQ0FBQ2hELFFBQU4sQ0FBZWlELElBQXJDLEdBQTRDO0FBRGpELEdBQVA7QUFHRCxDQUpEOztBQU1BLCtEQUFlQywyREFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FBbURDLG9EQUFPLENBQUNMLGVBQUQsRUFBa0JNLG9EQUFsQixDQUFQLENBQXlDdkQsTUFBekMsQ0FBbkQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ1NDQzOTc2ODUyMDc1MmI1Zjk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBJbXBvcnQgQWN0aW9uc1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIFdpc2hsaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3dpc2hsaXN0XCI7XHJcblxyXG4vLyBJbXBvcnQgQ3VzdG9tIENvbXBvbmVudFxyXG5pbXBvcnQgQUxpbmsgZnJvbSBcIi4vQUxpbmtcIjtcclxuaW1wb3J0IENhcnRNZW51IGZyb20gXCIuL3BhcnRpYWxzL2NhcnQtbWVudVwiO1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSBcIi4vcGFydGlhbHMvbWFpbi1tZW51XCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuL3BhcnRpYWxzL3NlYXJjaC1mb3JtXCI7XHJcbmltcG9ydCB7IEJpU29saWRVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCB7IEFpRmlsbEhlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBvZmZlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy90aWNrZXQtZGlzY291bnQuc3ZnXCI7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi8uLi9zZXJ2ZXIvYXBvbGxvLmpzXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5cclxuY29uc3QgR0VUX1dJU0hfTElTVCA9IGdxbGBxdWVyeSBQcm9kdWN0cyB7XHJcbiAgZ2V0V2lzaExpc3RQcm9kdWN0cyB7XHJcbiAgICBwcm9kdWN0cyB7XHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICBwcm9kdWN0TmFtZVxyXG4gICAgICBzZWxsaW5nUHJpY2VcclxuICAgICAgc2hvcnREZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5cclxuY29uc3QgTE9HX09VVF9VU0VSID0gZ3FsYG11dGF0aW9uIExvZ291dFVzZXIge1xyXG4gIGxvZ291dFVzZXIge1xyXG4gICAgX2lkXHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyBhZENsYXNzID0gXCJcIiwgd2lzaGxpc3QgfSkge1xyXG4gIC8vIGdldCBjdXJyZW50IHBhdGhcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwibW1lbnUtYWN0aXZlXCIpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbbG9nb3V0LCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oTE9HX09VVF9VU0VSKTtcclxuXHJcblxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVMb2cgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXJhYnRva2VuXCIpKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2NjXCIpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wYWdlcy9hY2NvdW50XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3BhZ2VzL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFyYWJ0b2tlblwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogd2lzaExpc3REYXRhLFxyXG4gICAgbG9hZGluZzogd2lzaExpc3RMb2FkaW5nLFxyXG4gICAgZXJyb3I6IHdpc2hMaXN0RXJyb3IsXHJcbiAgICByZWZldGNoOiB3aXNoTGlzdFJlZmV0Y2gsXHJcbiAgfSA9IHVzZVF1ZXJ5KEdFVF9XSVNIX0xJU1QsIHtcclxuICAgIHNraXA6ICF0b2tlbixcclxuICB9KTtcclxuICBjb25zdCBbc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcGRvd25dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0Ryb3Bkb3duKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcbiAgLy8gICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdCBkLW5vbmUgZC1zbS1ibG9ja1wiPlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3ggaW5mby1ib3gtaWNvbi1sZWZ0IHRleHQtcHJpbWFyeSBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgcC0wXCI+XHJcbiAgLy8gICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXNoaXBwaW5nXCI+PC9pPlxyXG5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3gtY29udGVudFwiPlxyXG4gIC8vICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC10cmFuc2Zvcm0tbm9uZVwiPlxyXG4gIC8vICAgICAgICAgICAgIEZSRUUgRXhwcmVzcyBTaGlwcGluZyBPbiBPcmRlcnMgJDk5K1xyXG4gIC8vICAgICAgICAgICA8L2g0PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHQgaGVhZGVyLWRyb3Bkb3ducyBtbC0wIG1sLXNtLWF1dG8gdy1zbS0xMDBcIj5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93blwiPlxyXG4gIC8vICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+VVNEPC9BTGluaz5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cclxuICAvLyAgICAgICAgICAgPHVsPlxyXG4gIC8vICAgICAgICAgICAgIDxsaT5cclxuICAvLyAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPkVVUjwvQUxpbms+XHJcbiAgLy8gICAgICAgICAgICAgPC9saT5cclxuICAvLyAgICAgICAgICAgICA8bGk+XHJcbiAgLy8gICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5VU0Q8L0FMaW5rPlxyXG4gIC8vICAgICAgICAgICAgIDwvbGk+XHJcbiAgLy8gICAgICAgICAgIDwvdWw+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuXHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd24gbXItYXV0byBtci1zbS0zIG1yLW1kLTBcIj5cclxuICAvLyAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gIC8vICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLXVzIGZsYWdcIj48L2k+RU5HXHJcbiAgLy8gICAgICAgICA8L0FMaW5rPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gIC8vICAgICAgICAgICA8dWw+XHJcbiAgLy8gICAgICAgICAgICAgPGxpPlxyXG4gIC8vICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYWctdXMgZmxhZyBtci0yXCI+PC9pPkVOR1xyXG4gIC8vICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAvLyAgICAgICAgICAgICA8L2xpPlxyXG4gIC8vICAgICAgICAgICAgIDxsaT5cclxuICAvLyAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGFnLWZyIGZsYWcgbXItMlwiPjwvaT5GUkFcclxuICAvLyAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgLy8gICAgICAgICAgICAgPC9saT5cclxuICAvLyAgICAgICAgICAgPC91bD5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93biBkcm9wZG93bi1leHBhbmRlZCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gIC8vICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+TGlua3M8L0FMaW5rPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gIC8vICAgICAgICAgICA8dWw+XHJcbiAgLy8gICAgICAgICAgICAgPGxpPlxyXG4gIC8vICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IGFjY291bnQ8L0FMaW5rPlxyXG4gIC8vICAgICAgICAgICAgIDwvbGk+XHJcbiAgLy8gICAgICAgICAgICAgPGxpPlxyXG4gIC8vICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvY2FydFwiPkNhcnQ8L0FMaW5rPlxyXG4gIC8vICAgICAgICAgICAgIDwvbGk+XHJcbiAgLy8gICAgICAgICAgICAgPGxpPlxyXG4gIC8vICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvbG9naW5cIiBjbGFzc05hbWU9XCJsb2dpbi1saW5rXCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIExvZyBJblxyXG4gIC8vICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAvLyAgICAgICAgICAgICA8L2xpPlxyXG4gIC8vICAgICAgICAgICA8L3VsPlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcblxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zXCI+XHJcbiAgLy8gICAgICAgICA8QUxpbmtcclxuICAvLyAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbiBzb2NpYWwtZmFjZWJvb2sgaWNvbi1mYWNlYm9va1wiXHJcbiAgLy8gICAgICAgICA+PC9BTGluaz5cclxuICAvLyAgICAgICAgIDxBTGlua1xyXG4gIC8vICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC10d2l0dGVyIGljb24tdHdpdHRlclwiXHJcbiAgLy8gICAgICAgICA+PC9BTGluaz5cclxuICAvLyAgICAgICAgIDxBTGlua1xyXG4gIC8vICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1pY29uIHNvY2lhbC1pbnN0YWdyYW0gaWNvbi1pbnN0YWdyYW1cIlxyXG4gIC8vICAgICAgICAgPjwvQUxpbms+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgPC9kaXY+ICovfVxyXG4gIC8vIDwvZGl2PlxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgYXdhaXQgbG9nb3V0KCk7IFxyXG4gICAgICByb3V0ZXIucHVzaCgnL3BhZ2VzL2xvZ2luJyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ291dCBlcnJvcjpcIiwgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YGhlYWRlciAke2FkQ2xhc3N9IHN0aWNreS1oZWFkZXIgbW9iaWxlLXN0aWNreSBkZXNrdG9wLXN0aWNreWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1taWRkbGVcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjNyZW1cIiwgcGFkZGluZ0JvdHRvbTogXCIzcmVtXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbm5lcmNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcmNvbnRhaW5lcn0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sZWZ0IGNvbC1sZy0yIHctYXV0byBwbC0wXCI+XHJcbiAgICAgICAgICAgICAgey8qIHtwYXRobmFtZSAhPT0gXCIvcGFnZXMvbG9naW5cIiAmJlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS10b2dnbGVyIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj59ICovfVxyXG5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9BcmFiRGVhbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTExXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDRcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQb3J0byBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0IHctbGctbWF4XCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgJHtzdHlsZXMub2ZmZXJkaXZ9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9vZmZlcnNcIiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvdGlja2V0LWRpc2NvdW50LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiT2ZmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQUxpbms+IFxyXG5cclxuICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29mZmVyc1wiPjxzcGFuPk9GRkVSWk9ORTwvc3Bhbj48L0FMaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2MSBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd24taGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd24gbXItYXV0byBtci1zbS0zIG1yLW1kLTIgZC1zbS1ub25lIGQtbWQtZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwicmdiYSgyNDksIDI0OSwgMjQ5LCAxKVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91YWUuc3ZnXCI+PC9pbWc+VUFFXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL29tbi5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5mbGFnaW1nfSA+PC9pbWc+T01OXHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3VhZS5zdmdcIj48L2ltZz5VQUVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbmQuc3ZnXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ2ltZ30+PC9pbWc+SU5EXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvb21uLnBuZ1wiY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ2ltZ30gPjwvaW1nPk9NTlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Nhci5wbmdcImNsYXNzTmFtZT17c3R5bGVzLmZsYWdpbWd9ID48L2ltZz5TQVJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXYxPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxkaXYxIGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93bi1oaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1kcm9wZG93biBtci1hdXRvIG1yLXNtLTMgbXItbWQtMCBkLXNtLW5vbmUgZC1tZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJyZ2JhKDI0OSwgMjQ5LCAyNDksIDEpXCIsIHBhZGRpbmc6IFwiMTFweCAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9sYW5ndWFnZS5zdmdcIiBzdHlsZT17eyB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCIxNXB4XCIgfX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4IDVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI0VCRUJFQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PiBFbmdsaXNoPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2JyaXRpc2guc3ZnXCJzdHlsZT17e3dpZHRoOlwiMjVweFwiLGhlaWdodDpcIjI1cHhcIn19PjwvaW1nPkVuZ2xpc2hcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91YWUuc3ZnXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmxhZ2ltZ30+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIEFyYWJpY1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2RpdjE+ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCIgY2xhc3NOYW1lPVwiZC1sZy1ibG9jayBkLW5vbmVcInN0eWxlPXt7Ym9yZGVyTGVmdDpcIjFweCBzb2xpZCAjRUJFQkVCXCIsbWFyZ2luTGVmdDogXCIyMHB4XCJ9fT4gKi99XHJcbiAgICAgICAgICAgICAgeyF0b2tlbiA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci11c2VyIGN1c3RvbV91c2VyYm9yZGVyIGhlYWRlci1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlfSBvbkNsaWNrPXtoYW5kbGVMb2d9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QmlTb2xpZFVzZXIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPldlbGNvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0wXCI+TXkgQWNjb3VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItZHJvcGRvd24gIGN1c3RvbV91c2VyYm9yZGVyIGhlYWRlci1pY29uXCJcclxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1hcmdpbkxlZnQ6XCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPEFMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9icml0aXNoLnN2Z1wic3R5bGU9e3t3aWR0aDpcIjI1cHhcIixoZWlnaHQ6XCIyNXB4XCJ9fT48L2ltZz5FbmdsaXNoXHJcbiAgICAgICAgICAgICAgICA8L0FMaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGV9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QmlTb2xpZFVzZXIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaWNvbi92dWVzYXgvYm9sZC9mcmFtZS5zdmdcIiBzdHlsZT17eyB3aWR0aDogXCIyNXB4XCIsIGhlaWdodDogXCIyNXB4XCIgfX0+PC9pbWc+TXkgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIiNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixnYXA6XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIzNXB4XCIsaGVpZ2h0OlwiMzVweFwiLGJvcmRlclJhZGl1czpcIjUwJVwiLG92ZXJmbG93OlwiaGlkZGVuXCJ9fT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ljb24vdnVlc2F4L2JvbGQva2V5LnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmZsYWdpbWd9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgey8qIDwvQUxpbms+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdXNlciBoZWFkZXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgIDxCaVNvbGlkVXNlciBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3Nob3dEcm9wZG93biAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudSBcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6XCIxMjBweFwifX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgPlByb2ZpbGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgPkxvZ291dDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICB7dG9rZW4gJiZcclxuICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3BhZ2VzL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWljb24gcG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIndpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxIZWFydCBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJpY29uLXdpc2hsaXN0LTJcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aXNobGlzdC1jb3VudCBiYWRnZS1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7d2lzaExpc3REYXRhPy5nZXRXaXNoTGlzdFByb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPENhcnRNZW51IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1ib3R0b20gZC1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TWFpbk1lbnUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5saXN0ID8gc3RhdGUud2lzaGxpc3QubGlzdCA6IFtdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIH0pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBXaXNobGlzdEFjdGlvbikoSGVhZGVyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=