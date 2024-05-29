self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMS": function() { return /* binding */ CMS; }
/* harmony export */ });
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/apollo */ "./server/apollo.js");
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/queries */ "./server/queries.js");
/* harmony import */ var _components_partials_home_brand_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/partials/home/brand-section */ "./components/partials/home/brand-section.jsx");
/* harmony import */ var _components_partials_home_category_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/partials/home/category-section */ "./components/partials/home/category-section.jsx");
/* harmony import */ var _components_partials_home_category_filter_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/partials/home/category-filter-section */ "./components/partials/home/category-filter-section.jsx");
/* harmony import */ var _components_partials_home_home_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/partials/home/home-section */ "./components/partials/home/home-section.jsx");
/* harmony import */ var _components_features_modals_newsletter_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/features/modals/newsletter-modal */ "./components/features/modals/newsletter-modal.jsx");
/* harmony import */ var _components_partials_home_promo_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/partials/home/promo-section */ "./components/partials/home/promo-section.jsx");
/* harmony import */ var _components_partials_home_info_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/partials/home/info-section */ "./components/partials/home/info-section.jsx");
/* harmony import */ var _components_partials_home_banner_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/partials/home/banner-section */ "./components/partials/home/banner-section.jsx");
/* harmony import */ var _components_partials_home_deal_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/partials/home/deal-section */ "./components/partials/home/deal-section.jsx");
/* harmony import */ var _components_partials_home_electronic_collection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/partials/home/electronic-collection */ "./components/partials/home/electronic-collection.jsx");
/* harmony import */ var _components_partials_home_gift_collection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/partials/home/gift-collection */ "./components/partials/home/gift-collection.jsx");
/* harmony import */ var _components_partials_home_garden_collection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/partials/home/garden-collection */ "./components/partials/home/garden-collection.jsx");
/* harmony import */ var _components_partials_home_selected_collection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/partials/home/selected-collection */ "./components/partials/home/selected-collection.jsx");
/* harmony import */ var _components_partials_home_recent_collection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/partials/home/recent-collection */ "./components/partials/home/recent-collection.jsx");
/* harmony import */ var _components_partials_home_top_brand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/partials/home/top-brand */ "./components/partials/home/top-brand.jsx");
/* harmony import */ var _components_partials_home_footerbanner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/partials/home/footerbanner */ "./components/partials/home/footerbanner.jsx");
/* harmony import */ var _components_partials_home_apple_products__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/partials/home/apple-products */ "./components/partials/home/apple-products.jsx");
/* harmony import */ var _components_common_partials_main_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/common/partials/main-menu */ "./components/common/partials/main-menu.jsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nabeel Hassan\\arabdeals\\ArabDeal-Web\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function _templateObject() {
  var data = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  query getCmsRecord($input: cmsRecordFilter!) {\n    getCmsRecord(input: $input) {\n      record {\n        _id\n        images {\n          fileType\n          fileURL\n          originalName\n        }\n        buttons {\n          buttonText\n          redirectionURL\n        }\n        sectionName\n        pageName\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import { useQuery } from "@apollo/react-hooks";
// Import Apollo Server and Query

 // Import Custom Component






















var CMS = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.gql)(_templateObject());

function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionOneDatastate = _useState[0],
      setSectionOneDataState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionTwoDatastate = _useState2[0],
      setSectionTwoDataStae = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionThreeDatastate = _useState3[0],
      setSectionThreeDataState = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionFourDatastate = _useState4[0],
      setSectionFourDataState = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionFiveDatastate = _useState5[0],
      setSectionFiveDataState = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      sectionSixDatastate = _useState6[0],
      setSectionSixDataState = _useState6[1];

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery)(CMS, {
    variables: {
      input: {
        pageName: "Home",
        sectionName: "SECTION-1"
      }
    }
  }),
      sectionOneData = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useQuery2 = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery)(CMS, {
    variables: {
      input: {
        pageName: "Home",
        sectionName: "SECTION-2"
      }
    }
  }),
      sectionTwoData = _useQuery2.data,
      loading2 = _useQuery2.loading,
      error2 = _useQuery2.error;

  var _useQuery3 = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery)(CMS, {
    variables: {
      input: {
        pageName: "Home",
        sectionName: "SECTION-3"
      }
    }
  }),
      sectionThreeData = _useQuery3.data,
      loading3 = _useQuery3.loading,
      error3 = _useQuery3.error;

  var _useQuery4 = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery)(CMS, {
    variables: {
      input: {
        pageName: "Home",
        sectionName: "SECTION-4"
      }
    }
  }),
      sectionFourData = _useQuery4.data,
      loading4 = _useQuery4.loading,
      error4 = _useQuery4.error;

  var _useQuery5 = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery)(CMS, {
    variables: {
      input: {
        pageName: "Home",
        sectionName: "SECTION-5"
      }
    }
  }),
      sectionFiveData = _useQuery5.data,
      loading5 = _useQuery5.loading,
      error5 = _useQuery5.error;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (sectionOneData) {
      var _sectionOneData$getCm;

      setSectionOneDataState(sectionOneData === null || sectionOneData === void 0 ? void 0 : (_sectionOneData$getCm = sectionOneData.getCmsRecord) === null || _sectionOneData$getCm === void 0 ? void 0 : _sectionOneData$getCm.record);
    }

    if (sectionTwoData) {
      var _sectionTwoData$getCm;

      setSectionTwoDataStae(sectionTwoData === null || sectionTwoData === void 0 ? void 0 : (_sectionTwoData$getCm = sectionTwoData.getCmsRecord) === null || _sectionTwoData$getCm === void 0 ? void 0 : _sectionTwoData$getCm.record);
    }

    if (sectionThreeData) {
      var _sectionThreeData$get;

      setSectionThreeDataState(sectionThreeData === null || sectionThreeData === void 0 ? void 0 : (_sectionThreeData$get = sectionThreeData.getCmsRecord) === null || _sectionThreeData$get === void 0 ? void 0 : _sectionThreeData$get.record);
    }

    if (sectionFourData) {
      var _sectionFourData$getC;

      setSectionFourDataState(sectionFourData === null || sectionFourData === void 0 ? void 0 : (_sectionFourData$getC = sectionFourData.getCmsRecord) === null || _sectionFourData$getC === void 0 ? void 0 : _sectionFourData$getC.record);
    }

    if (sectionFiveData) {
      var _sectionFiveData$getC;

      setSectionFiveDataState(sectionFiveData === null || sectionFiveData === void 0 ? void 0 : (_sectionFiveData$getC = sectionFiveData.getCmsRecord) === null || _sectionFiveData$getC === void 0 ? void 0 : _sectionFiveData$getC.record);
    }
  }, [sectionOneData, sectionTwoData, sectionThreeData, sectionFourData, sectionFiveData]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_22__.Helmet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Home | Arab Deals")), __jsx("main", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-bottom d-flex",
    style: {
      position: "relative",
      width: "100%",
      marginBottom: "-20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(_components_common_partials_main_menu__WEBPACK_IMPORTED_MODULE_21__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "homebannerpadding",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, !loading && __jsx(_components_partials_home_home_section__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "pb-5",
    data: sectionOneDatastate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 26
    }
  }))), __jsx("div", {
    className: "container skeleton-body skel-shop-products my-sm-1 ".concat( false ? 0 : "loaded"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, !loading2 && !loading3 && __jsx(_components_partials_home_banner_section__WEBPACK_IMPORTED_MODULE_11__.default, {
    sectionTwoData: sectionTwoDatastate,
    sectionThreeData: sectionThreeDatastate,
    sectionSixData: sectionSixDatastate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx(_components_partials_home_deal_section__WEBPACK_IMPORTED_MODULE_12__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "container skeleton-body skel-shop-products ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, !loading4 && __jsx(_components_partials_home_brand_section__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  })), __jsx(_components_partials_home_footerbanner__WEBPACK_IMPORTED_MODULE_19__.default, {
    data: sectionFourDatastate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: " skeleton-body skel-shop-products ".concat( false ? 0 : "loaded"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(_components_partials_home_electronic_collection__WEBPACK_IMPORTED_MODULE_13__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  })), !loading5 && __jsx(_components_partials_home_footerbanner__WEBPACK_IMPORTED_MODULE_19__.default, {
    data: sectionFiveDatastate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  })));
}

_s(Home, "gQNXMpjmPkfrjR4tpRQGCdaKg7c=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery, _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_23__.useQuery];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_2__.default)({
  ssr: false
})(Home));

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ01TIiwiZ3FsIiwiSG9tZSIsInVzZVN0YXRlIiwic2VjdGlvbk9uZURhdGFzdGF0ZSIsInNldFNlY3Rpb25PbmVEYXRhU3RhdGUiLCJzZWN0aW9uVHdvRGF0YXN0YXRlIiwic2V0U2VjdGlvblR3b0RhdGFTdGFlIiwic2VjdGlvblRocmVlRGF0YXN0YXRlIiwic2V0U2VjdGlvblRocmVlRGF0YVN0YXRlIiwic2VjdGlvbkZvdXJEYXRhc3RhdGUiLCJzZXRTZWN0aW9uRm91ckRhdGFTdGF0ZSIsInNlY3Rpb25GaXZlRGF0YXN0YXRlIiwic2V0U2VjdGlvbkZpdmVEYXRhU3RhdGUiLCJzZWN0aW9uU2l4RGF0YXN0YXRlIiwic2V0U2VjdGlvblNpeERhdGFTdGF0ZSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJwYWdlTmFtZSIsInNlY3Rpb25OYW1lIiwic2VjdGlvbk9uZURhdGEiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwic2VjdGlvblR3b0RhdGEiLCJsb2FkaW5nMiIsImVycm9yMiIsInNlY3Rpb25UaHJlZURhdGEiLCJsb2FkaW5nMyIsImVycm9yMyIsInNlY3Rpb25Gb3VyRGF0YSIsImxvYWRpbmc0IiwiZXJyb3I0Iiwic2VjdGlvbkZpdmVEYXRhIiwibG9hZGluZzUiLCJlcnJvcjUiLCJ1c2VFZmZlY3QiLCJnZXRDbXNSZWNvcmQiLCJyZWNvcmQiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QStCRSxNQUFDLDRFQUFEO0FBQXFCLFFBQUksRUFBRXRCLG9CQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JGLEVBaUNFO0FBQUssYUFBUyw4Q0FBdUMsTUFBSyxHQUFHLENBQVIsR0FBYSxRQUFwRCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpDRixFQXdDRyxDQUFDeUIsUUFBRCxJQUFhLE1BQUMsNEVBQUQ7QUFBcUIsUUFBSSxFQUFFdkIsb0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q2hCLENBSkYsQ0FERjtBQW1ERDs7R0FySFFWLEk7VUFZSGMsMEQsRUFRQUEsMEQsRUFRQUEsMEQsRUFRQUEsMEQsRUFRQUEsMEQ7OztLQTVDR2QsSTtBQXVIVCwrREFBZXlDLHVEQUFVLENBQUM7QUFBRUMsS0FBRztBQUFMLENBQUQsQ0FBVixDQUFtRDFDLElBQW5ELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNiNjc1NzI1MmEwMWNiZjljYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuXHJcbi8vIEltcG9ydCBBcG9sbG8gU2VydmVyIGFuZCBRdWVyeVxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vc2VydmVyL2Fwb2xsb1wiO1xyXG5pbXBvcnQgeyBHRVRfSE9NRV9EQVRBIH0gZnJvbSBcIi4uL3NlcnZlci9xdWVyaWVzXCI7XHJcblxyXG4vLyBJbXBvcnQgQ3VzdG9tIENvbXBvbmVudFxyXG5pbXBvcnQgQnJhbmRTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvYnJhbmQtc2VjdGlvblwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvY2F0ZWdvcnktc2VjdGlvblwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlGaWx0ZXJTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvY2F0ZWdvcnktZmlsdGVyLXNlY3Rpb25cIjtcclxuaW1wb3J0IEhvbWVTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvaG9tZS1zZWN0aW9uXCI7XHJcbmltcG9ydCBOZXdzbGV0dGVyTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL25ld3NsZXR0ZXItbW9kYWxcIjtcclxuaW1wb3J0IFByb21vU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3Byb21vLXNlY3Rpb25cIjtcclxuaW1wb3J0IEluZm9TZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvaW5mby1zZWN0aW9uXCI7XHJcbmltcG9ydCBCYW5uZXJTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvYmFubmVyLXNlY3Rpb25cIjtcclxuaW1wb3J0IERlYWxTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvZGVhbC1zZWN0aW9uXCI7XHJcbmltcG9ydCBFbGVjdHJvbmljQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2VsZWN0cm9uaWMtY29sbGVjdGlvblwiO1xyXG5pbXBvcnQgR2lmdENvbGxlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS9naWZ0LWNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IEdhcmRlbkNvbGxlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFydGlhbHMvaG9tZS9nYXJkZW4tY29sbGVjdGlvblwiO1xyXG5pbXBvcnQgU2VsZWN0ZWRDb2xsZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRpYWxzL2hvbWUvc2VsZWN0ZWQtY29sbGVjdGlvblwiO1xyXG5pbXBvcnQgUmVjZW50Q29sbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3JlY2VudC1jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBUb3BCcmFuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3RvcC1icmFuZFwiO1xyXG5pbXBvcnQgRm9vdGVyQmFubmVyU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2Zvb3RlcmJhbm5lclwiO1xyXG5pbXBvcnQgQXBwbGVQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2FwcGxlLXByb2R1Y3RzXCI7XHJcbmltcG9ydCBNYWluTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGFydGlhbHMvbWFpbi1tZW51XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ01TID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldENtc1JlY29yZCgkaW5wdXQ6IGNtc1JlY29yZEZpbHRlciEpIHtcclxuICAgIGdldENtc1JlY29yZChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHJlY29yZCB7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgICAgaW1hZ2VzIHtcclxuICAgICAgICAgIGZpbGVUeXBlXHJcbiAgICAgICAgICBmaWxlVVJMXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ucyB7XHJcbiAgICAgICAgICBidXR0b25UZXh0XHJcbiAgICAgICAgICByZWRpcmVjdGlvblVSTFxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uTmFtZVxyXG4gICAgICAgIHBhZ2VOYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzZWN0aW9uT25lRGF0YXN0YXRlLCBzZXRTZWN0aW9uT25lRGF0YVN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc2VjdGlvblR3b0RhdGFzdGF0ZSwgc2V0U2VjdGlvblR3b0RhdGFTdGFlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc2VjdGlvblRocmVlRGF0YXN0YXRlLCBzZXRTZWN0aW9uVGhyZWVEYXRhU3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWN0aW9uRm91ckRhdGFzdGF0ZSwgc2V0U2VjdGlvbkZvdXJEYXRhU3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWN0aW9uRml2ZURhdGFzdGF0ZSwgc2V0U2VjdGlvbkZpdmVEYXRhU3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWN0aW9uU2l4RGF0YXN0YXRlLCBzZXRTZWN0aW9uU2l4RGF0YVN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogc2VjdGlvbk9uZURhdGEsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgfSA9IHVzZVF1ZXJ5KENNUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2VOYW1lOiBcIkhvbWVcIiwgc2VjdGlvbk5hbWU6IFwiU0VDVElPTi0xXCIgfSB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzZWN0aW9uVHdvRGF0YSxcclxuICAgIGxvYWRpbmc6IGxvYWRpbmcyLFxyXG4gICAgZXJyb3I6IGVycm9yMixcclxuICB9ID0gdXNlUXVlcnkoQ01TLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgcGFnZU5hbWU6IFwiSG9tZVwiLCBzZWN0aW9uTmFtZTogXCJTRUNUSU9OLTJcIiB9IH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IHNlY3Rpb25UaHJlZURhdGEsXHJcbiAgICBsb2FkaW5nOiBsb2FkaW5nMyxcclxuICAgIGVycm9yOiBlcnJvcjMsXHJcbiAgfSA9IHVzZVF1ZXJ5KENNUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2VOYW1lOiBcIkhvbWVcIiwgc2VjdGlvbk5hbWU6IFwiU0VDVElPTi0zXCIgfSB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzZWN0aW9uRm91ckRhdGEsXHJcbiAgICBsb2FkaW5nOiBsb2FkaW5nNCxcclxuICAgIGVycm9yOiBlcnJvcjQsXHJcbiAgfSA9IHVzZVF1ZXJ5KENNUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2VOYW1lOiBcIkhvbWVcIiwgc2VjdGlvbk5hbWU6IFwiU0VDVElPTi00XCIgfSB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzZWN0aW9uRml2ZURhdGEsXHJcbiAgICBsb2FkaW5nOiBsb2FkaW5nNSxcclxuICAgIGVycm9yOiBlcnJvcjUsXHJcbiAgfSA9IHVzZVF1ZXJ5KENNUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2VOYW1lOiBcIkhvbWVcIiwgc2VjdGlvbk5hbWU6IFwiU0VDVElPTi01XCIgfSB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlY3Rpb25PbmVEYXRhKSB7XHJcbiAgICAgIHNldFNlY3Rpb25PbmVEYXRhU3RhdGUoc2VjdGlvbk9uZURhdGE/LmdldENtc1JlY29yZD8ucmVjb3JkKTtcclxuICAgIH1cclxuICAgIGlmIChzZWN0aW9uVHdvRGF0YSkge1xyXG4gICAgICBzZXRTZWN0aW9uVHdvRGF0YVN0YWUoc2VjdGlvblR3b0RhdGE/LmdldENtc1JlY29yZD8ucmVjb3JkKTtcclxuICAgIH1cclxuICAgIGlmIChzZWN0aW9uVGhyZWVEYXRhKSB7XHJcbiAgICAgIHNldFNlY3Rpb25UaHJlZURhdGFTdGF0ZShzZWN0aW9uVGhyZWVEYXRhPy5nZXRDbXNSZWNvcmQ/LnJlY29yZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VjdGlvbkZvdXJEYXRhKSB7XHJcbiAgICAgIHNldFNlY3Rpb25Gb3VyRGF0YVN0YXRlKHNlY3Rpb25Gb3VyRGF0YT8uZ2V0Q21zUmVjb3JkPy5yZWNvcmQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlY3Rpb25GaXZlRGF0YSkge1xyXG4gICAgICBzZXRTZWN0aW9uRml2ZURhdGFTdGF0ZShzZWN0aW9uRml2ZURhdGE/LmdldENtc1JlY29yZD8ucmVjb3JkKTtcclxuICAgIH1cclxuICB9LCBbc2VjdGlvbk9uZURhdGEsIHNlY3Rpb25Ud29EYXRhLCBzZWN0aW9uVGhyZWVEYXRhLCBzZWN0aW9uRm91ckRhdGEsIHNlY3Rpb25GaXZlRGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8dGl0bGU+SG9tZSB8IEFyYWIgRGVhbHM8L3RpdGxlPlxyXG4gICAgICA8L0hlbG1ldD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbSBkLWZsZXhcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTpcIi0yMHB4XCJ9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID4gIFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TWFpbk1lbnUgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZWJhbm5lcnBhZGRpbmdcIj5cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxIb21lU2VjdGlvbiBjbGFzc05hbWU9XCJwYi01XCIgZGF0YT17c2VjdGlvbk9uZURhdGFzdGF0ZX0gLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBza2VsZXRvbi1ib2R5IHNrZWwtc2hvcC1wcm9kdWN0cyBteS1zbS0xICR7ZmFsc2UgPyBcIlwiIDogXCJsb2FkZWRcIn1gfT5cclxuICAgICAgICAgIHshbG9hZGluZzIgJiYgIWxvYWRpbmczICYmIChcclxuICAgICAgICAgICAgPEJhbm5lclNlY3Rpb25cclxuICAgICAgICAgICAgICBzZWN0aW9uVHdvRGF0YT17c2VjdGlvblR3b0RhdGFzdGF0ZX1cclxuICAgICAgICAgICAgICBzZWN0aW9uVGhyZWVEYXRhPXtzZWN0aW9uVGhyZWVEYXRhc3RhdGV9XHJcbiAgICAgICAgICAgICAgc2VjdGlvblNpeERhdGE9e3NlY3Rpb25TaXhEYXRhc3RhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPERlYWxTZWN0aW9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIHNrZWxldG9uLWJvZHkgc2tlbC1zaG9wLXByb2R1Y3RzIGB9PlxyXG4gICAgICAgICAgeyFsb2FkaW5nNCAmJiA8QnJhbmRTZWN0aW9uIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Rm9vdGVyQmFubmVyU2VjdGlvbiBkYXRhPXtzZWN0aW9uRm91ckRhdGFzdGF0ZX0gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Agc2tlbGV0b24tYm9keSBza2VsLXNob3AtcHJvZHVjdHMgJHtmYWxzZSA/IFwiXCIgOiBcImxvYWRlZFwifWB9PlxyXG4gICAgICAgICAgPEVsZWN0cm9uaWNDb2xsZWN0aW9uIC8+XHJcblxyXG4gICAgICAgICAgey8qIDxSZWNlbnRDb2xsZWN0aW9uIGJlc3RTZWxsaW5nPXtiZXN0U2VsbGluZ30gLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxDYXRlZ29yeUZpbHRlclNlY3Rpb24gLz4gKi99XHJcbiAgICAgICAgey8qIDxBcHBsZVByb2R1Y3RzIHByb2R1Y3RzPXtiZXN0U2VsbGluZ30vPiAqL31cclxuICAgICAgICB7IWxvYWRpbmc1ICYmIDxGb290ZXJCYW5uZXJTZWN0aW9uIGRhdGE9e3NlY3Rpb25GaXZlRGF0YXN0YXRlfSAvPn1cclxuICAgICAgPC9tYWluPiBcclxuXHJcbiAgICAgIHsvKiA8TmV3c2xldHRlck1vZGFsIC8+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB9KShIb21lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==