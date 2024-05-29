self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/partials/home/top-brand.jsx":
/*!************************************************!*\
  !*** ./components/partials/home/top-brand.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOP_BRANDS": function() { return /* binding */ TOP_BRANDS; }
/* harmony export */ });
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* harmony import */ var _common_ALink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ALink */ "./components/common/ALink.jsx");
/* harmony import */ var _features_products_product_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/products/product-one */ "./components/features/products/product-one.jsx");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_data_keyframes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/data/keyframes */ "./utils/data/keyframes.js");
/* harmony import */ var _utils_data_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/data/slider */ "./utils/data/slider.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nabeel Hassan\\arabdeals\\ArabDeal-Web\\components\\partials\\home\\top-brand.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function _templateObject() {
  var data = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["query GetAllTopBrandRecords($input: BrandRecordsFilter) {\n  getAllTopBrandRecords(input: $input) {\n    maxRecords\n    message\n    records {\n      _id\n      brandName\n      logo {\n        fileType\n        originalName\n        fileURL\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Import Custom Component



 // Import Settigns






var TOP_BRANDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());

function TopBrand(_ref) {
  _s();

  var _data$getAllTopBrandR,
      _data$getAllTopBrandR2,
      _this = this,
      _sectionFourData$imag;

  var sectionFourData = _ref.sectionFourData;

  var _useQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery)(TOP_BRANDS),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var options = {
    items: 7,
    // Number of items to show
    // Space between items
    loop: true,
    // Enable loop
    // autoplay: true, // Autoplay the slider
    autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    dots: false,
    responsive: {
      0: {
        items: 4,
        loop: true,
        autoplay: true // Number of items to show on small screens

      },
      768: {
        items: 5 // Number of items to show on medium screens

      },
      992: {
        items: 7 // Number of items to show on large screens

      }
    },
    nav: false
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      startIndex = _useState[0],
      setStartIndex = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth < 700 ? 4 : 7),
      brandsPerPage = _useState2[0],
      setBrandsPerPage = _useState2[1]; // const brandsPerPage = 7;


  var totalBrands = (data === null || data === void 0 ? void 0 : (_data$getAllTopBrandR = data.getAllTopBrandRecords) === null || _data$getAllTopBrandR === void 0 ? void 0 : _data$getAllTopBrandR.records.length) || 0;

  var handleNext = function handleNext() {
    if (startIndex + brandsPerPage >= totalBrands) {
      setStartIndex(0); // If reaching the end, loop back to the beginning
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  var handlePrev = function handlePrev() {
    if (window.innerWidth > 700) {
      if (totalBrands > 7) {
        if (startIndex === 0) {
          setStartIndex(totalBrands - brandsPerPage); // If at the beginning, loop to the end
        } else {
          setStartIndex(startIndex - 1);
        }
      }
    } else {
      if (startIndex === 0) {
        setStartIndex(totalBrands - brandsPerPage); // If at the beginning, loop to the end
      } else {
        setStartIndex(startIndex - 1);
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      if (window.innerWidth < 700) {
        setBrandsPerPage(4); // If screen width is less than 700, set to 4
      } else {
        setBrandsPerPage(7); // Otherwise, set to default 7
      }
    };

    window.addEventListener('resize', handleResize); // Clean up event listener on unmount

    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx("div", {
    className: "container custom-brand-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "mb-4 mt-4",
    style: {
      borderBottom: "1px solid #EEE",
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "Top Brands"))), __jsx("div", {
    className: "mb-5 mt-5 custom-brandouter-container" // style={{display:"flex",alignItems:"center",padding:"0 60px"}}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "custom-top-prevbutton",
    onClick: handlePrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdKeyboardArrowLeft, {
    style: {
      color: "black",
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 69
    }
  })), __jsx("div", {
    className: "custom-topbrandcontainer container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, data && (data === null || data === void 0 ? void 0 : (_data$getAllTopBrandR2 = data.getAllTopBrandRecords) === null || _data$getAllTopBrandR2 === void 0 ? void 0 : _data$getAllTopBrandR2.records.slice(startIndex, startIndex + brandsPerPage).map(function (brand, index) {
    return __jsx("div", {
      key: index,
      className: "item  custom-brand",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, brand.logo && __jsx("img", {
      src: brand.logo.fileURL,
      alt: "Brand ".concat(startIndex + index + 1) // style={{ width: "128px", height: "128px" }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }));
  }))), __jsx("div", {
    className: "custom-top-prevbutton",
    onClick: handleNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdKeyboardArrowRight, {
    style: {
      color: "black",
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 69
    }
  }))), __jsx("div", {
    className: "custom-topbrand-img mt-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: sectionFourData === null || sectionFourData === void 0 ? void 0 : (_sectionFourData$imag = sectionFourData.images[0]) === null || _sectionFourData$imag === void 0 ? void 0 : _sectionFourData$imag.fileURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  })));
}

_s(TopBrand, "I3n9czQ+vphyIG9n397oYS1cXNQ=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__.useQuery];
});

_c = TopBrand;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(TopBrand));

var _c, _c2;

$RefreshReg$(_c, "TopBrand");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL3RvcC1icmFuZC5qc3giXSwibmFtZXMiOlsiVE9QX0JSQU5EUyIsImdxbCIsIlRvcEJyYW5kIiwic2VjdGlvbkZvdXJEYXRhIiwidXNlUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwib3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsImF1dG9wbGF5VGltZW91dCIsImRvdHMiLCJyZXNwb25zaXZlIiwiYXV0b3BsYXkiLCJuYXYiLCJ1c2VTdGF0ZSIsInN0YXJ0SW5kZXgiLCJzZXRTdGFydEluZGV4Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJyYW5kc1BlclBhZ2UiLCJzZXRCcmFuZHNQZXJQYWdlIiwidG90YWxCcmFuZHMiLCJnZXRBbGxUb3BCcmFuZFJlY29yZHMiLCJyZWNvcmRzIiwibGVuZ3RoIiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvcmRlckJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJjb2xvciIsImZvbnRTaXplIiwic2xpY2UiLCJtYXAiLCJicmFuZCIsImluZGV4IiwibG9nbyIsImZpbGVVUkwiLCJpbWFnZXMiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxVQUFVLEdBQUdDLG1EQUFILG1CQUFoQjs7QUFnQlAsU0FBU0MsUUFBVCxPQUF1QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUEsa0JBQ0pDLDZEQUFRLENBQUNKLFVBQUQsQ0FESjtBQUFBLE1BQzdCSyxJQUQ2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QUFFRixLQUFLLENBQUNFLElBQU4sQ0FBV0MsT0FEbEI7QUFFRSxTQUFHLGtCQUFXekIsVUFBVSxHQUFHdUIsS0FBYixHQUFxQixDQUFoQyxDQUZMLENBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FERztBQUFBLEdBRkUsQ0FBSixDQVpQLENBSkYsRUF5Q0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBdUMsV0FBTyxFQUFFYixVQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRELE1BQUMsaUVBQUQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVRLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE1RCxDQXpDRixDQU5GLEVBaURFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRWpDLGVBQUYsYUFBRUEsZUFBRixnREFBRUEsZUFBZSxDQUFFd0MsTUFBakIsQ0FBd0IsQ0FBeEIsQ0FBRiwwREFBRSxzQkFBNEJELE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpERixDQURGO0FBdUREOztHQXZJUXhDLFE7VUFDMEJFLHlEOzs7S0FEMUJGLFE7QUF5SVQsK0RBQWUsbUJBQUEwQyxpREFBQSxDQUFXMUMsUUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjNDFhZjI1Yjk0ODcxMDU4MjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmV2ZWFsIGZyb20gXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiO1xyXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuXHJcbi8vIEltcG9ydCBDdXN0b20gQ29tcG9uZW50XHJcbmltcG9ydCBBTGluayBmcm9tIFwiLi4vLi4vY29tbW9uL0FMaW5rXCI7XHJcbmltcG9ydCBQcm9kdWN0T25lIGZyb20gXCIuLi8uLi9mZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0LW9uZVwiO1xyXG5pbXBvcnQgT3dsQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW93bC1jYXJvdXNlbDJcIjtcclxuXHJcbi8vIEltcG9ydCBTZXR0aWduc1xyXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0YS9rZXlmcmFtZXNcIjtcclxuaW1wb3J0IHsgcHJvZHVjdFNsaWRlciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRhL3NsaWRlclwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24sIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dMZWZ0LCBNZEtleWJvYXJkQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUT1BfQlJBTkRTID0gZ3FsYHF1ZXJ5IEdldEFsbFRvcEJyYW5kUmVjb3JkcygkaW5wdXQ6IEJyYW5kUmVjb3Jkc0ZpbHRlcikge1xyXG4gIGdldEFsbFRvcEJyYW5kUmVjb3JkcyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICBtYXhSZWNvcmRzXHJcbiAgICBtZXNzYWdlXHJcbiAgICByZWNvcmRzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIGJyYW5kTmFtZVxyXG4gICAgICBsb2dvIHtcclxuICAgICAgICBmaWxlVHlwZVxyXG4gICAgICAgIG9yaWdpbmFsTmFtZVxyXG4gICAgICAgIGZpbGVVUkxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWA7XHJcblxyXG5mdW5jdGlvbiBUb3BCcmFuZCh7IHNlY3Rpb25Gb3VyRGF0YSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoVE9QX0JSQU5EUyk7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGl0ZW1zOiA3LCAvLyBOdW1iZXIgb2YgaXRlbXMgdG8gc2hvd1xyXG4gICAgLy8gU3BhY2UgYmV0d2VlbiBpdGVtc1xyXG4gICAgbG9vcDogdHJ1ZSwgLy8gRW5hYmxlIGxvb3BcclxuICAgIC8vIGF1dG9wbGF5OiB0cnVlLCAvLyBBdXRvcGxheSB0aGUgc2xpZGVyXHJcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAvLyBBdXRvcGxheSBpbnRlcnZhbCAoMyBzZWNvbmRzIGluIHRoaXMgZXhhbXBsZSlcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZS8vIE51bWJlciBvZiBpdGVtcyB0byBzaG93IG9uIHNtYWxsIHNjcmVlbnNcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgaXRlbXM6IDUsIC8vIE51bWJlciBvZiBpdGVtcyB0byBzaG93IG9uIG1lZGl1bSBzY3JlZW5zXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIGl0ZW1zOiA3LCAvLyBOdW1iZXIgb2YgaXRlbXMgdG8gc2hvdyBvbiBsYXJnZSBzY3JlZW5zXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IFtzdGFydEluZGV4LCBzZXRTdGFydEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFticmFuZHNQZXJQYWdlLCBzZXRCcmFuZHNQZXJQYWdlXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwID8gNCA6IDcpO1xyXG4gIC8vIGNvbnN0IGJyYW5kc1BlclBhZ2UgPSA3O1xyXG4gIGNvbnN0IHRvdGFsQnJhbmRzID0gZGF0YT8uZ2V0QWxsVG9wQnJhbmRSZWNvcmRzPy5yZWNvcmRzLmxlbmd0aCB8fCAwO1xyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCArIGJyYW5kc1BlclBhZ2UgPj0gdG90YWxCcmFuZHMpIHtcclxuICAgICAgc2V0U3RhcnRJbmRleCgwKTsgLy8gSWYgcmVhY2hpbmcgdGhlIGVuZCwgbG9vcCBiYWNrIHRvIHRoZSBiZWdpbm5pbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXJ0SW5kZXgoc3RhcnRJbmRleCArIDEpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzAwKSB7XHJcbiAgICAgIGlmICh0b3RhbEJyYW5kcyA+IDcpIHtcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IDApIHtcclxuICAgICAgICAgIHNldFN0YXJ0SW5kZXgodG90YWxCcmFuZHMgLSBicmFuZHNQZXJQYWdlKTsgLy8gSWYgYXQgdGhlIGJlZ2lubmluZywgbG9vcCB0byB0aGUgZW5kXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFN0YXJ0SW5kZXgoc3RhcnRJbmRleCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmIChzdGFydEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgc2V0U3RhcnRJbmRleCh0b3RhbEJyYW5kcyAtIGJyYW5kc1BlclBhZ2UpOyAvLyBJZiBhdCB0aGUgYmVnaW5uaW5nLCBsb29wIHRvIHRoZSBlbmRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdGFydEluZGV4KHN0YXJ0SW5kZXggLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3MDApIHtcclxuICAgICAgICBzZXRCcmFuZHNQZXJQYWdlKDQpOyAvLyBJZiBzY3JlZW4gd2lkdGggaXMgbGVzcyB0aGFuIDcwMCwgc2V0IHRvIDRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRCcmFuZHNQZXJQYWdlKDcpOyAvLyBPdGhlcndpc2UsIHNldCB0byBkZWZhdWx0IDdcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIC8vIENsZWFuIHVwIGV2ZW50IGxpc3RlbmVyIG9uIHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbd2luZG93LmlubmVyV2lkdGhdKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY3VzdG9tLWJyYW5kLXRpdGxlXCIgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItNCBtdC00XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjRUVFXCIsIHBhZGRpbmdCb3R0b206IFwiMjBweFwiIH19PlRvcCBCcmFuZHM8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IG10LTUgY3VzdG9tLWJyYW5kb3V0ZXItY29udGFpbmVyXCJcclxuICAgICAgLy8gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixwYWRkaW5nOlwiMCA2MHB4XCJ9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tdG9wLXByZXZidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVQcmV2fT48TWRLZXlib2FyZEFycm93TGVmdCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0gLz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS10b3BicmFuZGNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiA8T3dsQ2Fyb3VzZWwgb3B0aW9ucz17b3B0aW9uc30gYXV0b3BsYXk+IFxyXG4gICAgICAgICAgIHtkYXRhICYmIGRhdGE/LmdldEFsbFRvcEJyYW5kUmVjb3Jkcz8ucmVjb3Jkcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiIGl0ZW0gbWItNCBjdXN0b20tYnJhbmRcIiA+XHJcbiAgICAgICAgICAgICAgICB7YnJhbmQubG9nbyAmJiAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2JyYW5kLmxvZ28uZmlsZVVSTH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgQnJhbmQgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTI4cHhcIiwgaGVpZ2h0OiBcIjEyOHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX0gXHJcbiAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD4gKi99XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhPy5nZXRBbGxUb3BCcmFuZFJlY29yZHM/LnJlY29yZHNcclxuICAgICAgICAgICAgLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBicmFuZHNQZXJQYWdlKVxyXG4gICAgICAgICAgICAubWFwKChicmFuZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIml0ZW0gIGN1c3RvbS1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAge2JyYW5kLmxvZ28gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXticmFuZC5sb2dvLmZpbGVVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgQnJhbmQgJHtzdGFydEluZGV4ICsgaW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IHdpZHRoOiBcIjEyOHB4XCIsIGhlaWdodDogXCIxMjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIHsvKiB7ZGF0YSAmJiBkYXRhPy5nZXRBbGxUb3BCcmFuZFJlY29yZHM/LnJlY29yZHMubWFwKChicmFuZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIiBpdGVtIG1iLTQgY3VzdG9tLWJyYW5kXCIgPlxyXG4gICAgICAgICAgICAgICAge2JyYW5kLmxvZ28gJiYgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXticmFuZC5sb2dvLmZpbGVVUkx9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YEJyYW5kICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyOHB4XCIsIGhlaWdodDogXCIxMjhweFwifX1cclxuICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXRvcC1wcmV2YnV0dG9uXCIgb25DbGljaz17aGFuZGxlTmV4dH0+PE1kS2V5Ym9hcmRBcnJvd1JpZ2h0IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjIwcHhcIiB9fSAvPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tdG9wYnJhbmQtaW1nIG10LTlcIj5cclxuICAgICAgICA8aW1nIHNyYz17c2VjdGlvbkZvdXJEYXRhPy5pbWFnZXNbMF0/LmZpbGVVUkx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUb3BCcmFuZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=