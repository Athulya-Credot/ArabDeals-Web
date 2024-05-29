self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/partials/home/deal-section.jsx":
/*!***************************************************!*\
  !*** ./components/partials/home/deal-section.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var _features_products_product_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/products/product-one */ "./components/features/products/product-one.jsx");
/* harmony import */ var _features_products_product_four__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/products/product-four */ "./components/features/products/product-four.jsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _utils_data_keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/data/keyframes */ "./utils/data/keyframes.js");
/* harmony import */ var _common_ALink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ALink */ "./components/common/ALink.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Nabeel Hassan\\arabdeals\\ArabDeal-Web\\components\\partials\\home\\deal-section.jsx",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);

function _templateObject() {
  var data = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["query GetProducts($input: ProductFilters) {\n  getProducts(input: $input) {\n    maxRecords\n    records {\n      _id\n      attributes {\n        attributeValue\n        attributeName\n      }\n      brandId\n      brandName\n      categoryId\n      categoryIdPath\n      categoryNamePath\n      description\n      images {\n        fileURL\n        originalName\n        fileType\n      }\n      mrp\n      offerPrice\n      price\n      productCode\n      productInfo\n      productName\n      productShortInfo\n      rating\n      sellingPrice\n      shortDescription\n      skuId\n      status\n      stock\n      tags\n      vendorId\n      isBlocked\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import Custom Component



 // Import Settigns



var GET_PRODUCTS = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());

function DealSection() {
  _s();

  var _data$getProducts,
      _this = this;

  // const {data,loading,error}=useQuery(GET_PRODUCTS)
  var _useLazyQuery = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(GET_PRODUCTS),
      _useLazyQuery2 = (0,C_Users_Nabeel_Hassan_arabdeals_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useLazyQuery, 2),
      getProducts = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      data = _useLazyQuery2$.data,
      loading = _useLazyQuery2$.loading,
      error = _useLazyQuery2$.error;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getProducts({
      variables: {
        input: {
          discount: 10,
          size: 6
        }
      }
    });
  }, []);
  var products = data === null || data === void 0 ? void 0 : (_data$getProducts = data.getProducts) === null || _data$getProducts === void 0 ? void 0 : _data$getProducts.records;
  return __jsx("section", {
    className: "deal-products-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "deal-section-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "section-title d-flex align-items-center text-transform-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Deals of the day"), __jsx(_common_ALink__WEBPACK_IMPORTED_MODULE_6__.default, {
    href: "/shop?discount=10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, " ", __jsx("p", {
    style: {
      color: "rgba(0, 0, 0, 1)",
      fontWeight: "500",
      marginTop: '15px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 42
    }
  }, "View All Products"))), __jsx("h4", {
    className: "recommendmob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Deals of the day"), __jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__.default, {
    keyframes: _utils_data_keyframes__WEBPACK_IMPORTED_MODULE_5__.fadeInUpShorter,
    delay: 100,
    duration: 1000,
    triggerOnce: true // style={{ border: "1px solid rgba(185, 185, 185, 1)" }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-lg-4 col-md-5 mb-2 mb-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, products ? products.slice(0, 15) // .filter((item) => item.until && item.until !== null)
  .slice(0, 1).map(function (item, index) {
    return __jsx(_features_products_product_four__WEBPACK_IMPORTED_MODULE_4__.default, {
      adClass: "deal-product",
      product: item,
      key: "All Products:" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    });
  }) : [0].map(function (item, index) {
    return __jsx("div", {
      className: "skel-pro skel-pro-grid",
      key: "Skeleton:" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    });
  })), __jsx("div", {
    className: "col-lg-8 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "products-with-divide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row row-joined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, products ? products // .filter((item) => item.until === null)
  .slice(0, 6).map(function (item, index) {
    return __jsx("div", {
      className: "col-xl-4 col-sm-4 col-6 m-0 customdeal-border",
      key: "All Products:" + index // style={{ border: "1px solid rgba(185, 185, 185, 1)", borderRight:"none" }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 23
      }
    }, __jsx(_features_products_product_one__WEBPACK_IMPORTED_MODULE_3__.default // adClass="inner-quickview inner-icon"
    , {
      product: item // customStyle="65%"
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 25
      }
    }));
  }) : new Array(6).fill(1).map(function (item, index) {
    return __jsx("div", {
      className: "col-xl-3 col-sm-4 col-6",
      key: "All Products:" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "skel-pro skel-pro-grid",
      key: "Skeleton:" + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 23
      }
    }));
  })))))));
}

_s(DealSection, "OKHH4skUCsM3F9j2hhbsvGKhbLE=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery];
});

_c = DealSection;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(DealSection));

var _c, _c2;

$RefreshReg$(_c, "DealSection");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9ob21lL2RlYWwtc2VjdGlvbi5qc3giXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiRGVhbFNlY3Rpb24iLCJ1c2VMYXp5UXVlcnkiLCJnZXRQcm9kdWN0cyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRpc2NvdW50Iiwic2l6ZSIsInByb2R1Y3RzIiwicmVjb3JkcyIsImNvbG9yIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsImZhZGVJblVwU2hvcnRlciIsInNsaWNlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiQXJyYXkiLCJmaWxsIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUdDLHdEQUFILG1CQUFsQjs7QUF3Q0EsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUFBO0FBQUE7O0FBQ3JCO0FBRHFCLHNCQUUyQkMsaUVBQVksQ0FBQ0gsWUFBRCxDQUZ2QztBQUFBO0FBQUEsTUFFZEksV0FGYztBQUFBO0FBQUEsTUFFQ0MsSUFGRCxtQkFFQ0EsSUFGRDtBQUFBLE1BRU9DLE9BRlAsbUJBRU9BLE9BRlA7QUFBQSxNQUVnQkMsS0FGaEIsbUJBRWdCQSxLQUZoQjs7QUFHckJDLGtEQUFTLENBQUMsWUFBTTtBQUNkSixlQUFXLENBQUM7QUFDVkssZUFBUyxFQUFFO0FBQ1RDLGFBQUssRUFBRTtBQUNMQyxrQkFBUSxFQUFFLEVBREw7QUFFTEMsY0FBSSxFQUFFO0FBRkQ7QUFERTtBQURELEtBQUQsQ0FBWDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxNQUFNQyxRQUFRLEdBQUdSLElBQUgsYUFBR0EsSUFBSCw0Q0FBR0EsSUFBSSxDQUFFRCxXQUFU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QUFELEVBQU9DLEtBQVA7QUFBQSxXQUN6QjtBQUNFLGVBQVMsRUFBQyx5QkFEWjtBQUVFLFNBQUcsRUFBRSxrQkFBa0JBLEtBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUNFLGVBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUcsRUFBRSxjQUFjQSxLQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsQ0FEeUI7QUFBQSxHQUF6QixDQW5CTixDQURGLENBREYsQ0F6QkYsQ0FQRixDQVZGLENBREY7QUFrRkQ7O0dBakdRcEIsVztVQUV5Q0MsNkQ7OztLQUZ6Q0QsVztBQW1HVCwrREFBZSxtQkFBQXVCLGlEQUFBLENBQVd2QixXQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQ3YmM2NWQwMzEwYmJhNmY1MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJldmVhbCBmcm9tIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIjtcclxuXHJcbi8vSW1wb3J0IEN1c3RvbSBDb21wb25lbnRcclxuaW1wb3J0IFByb2R1Y3RPbmUgZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL3Byb2R1Y3RzL3Byb2R1Y3Qtb25lXCI7XHJcbmltcG9ydCBQcm9kdWN0Rm91ciBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1mb3VyXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwsIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XHJcbi8vIEltcG9ydCBTZXR0aWduc1xyXG5pbXBvcnQgeyBmYWRlSW5VcFNob3J0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0YS9rZXlmcmFtZXNcIjtcclxuaW1wb3J0IEFMaW5rIGZyb20gXCIuLi8uLi9jb21tb24vQUxpbmtcIjtcclxuY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYHF1ZXJ5IEdldFByb2R1Y3RzKCRpbnB1dDogUHJvZHVjdEZpbHRlcnMpIHtcclxuICBnZXRQcm9kdWN0cyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICBtYXhSZWNvcmRzXHJcbiAgICByZWNvcmRzIHtcclxuICAgICAgX2lkXHJcbiAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlXHJcbiAgICAgICAgYXR0cmlidXRlTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGJyYW5kSWRcclxuICAgICAgYnJhbmROYW1lXHJcbiAgICAgIGNhdGVnb3J5SWRcclxuICAgICAgY2F0ZWdvcnlJZFBhdGhcclxuICAgICAgY2F0ZWdvcnlOYW1lUGF0aFxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBpbWFnZXMge1xyXG4gICAgICAgIGZpbGVVUkxcclxuICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICBmaWxlVHlwZVxyXG4gICAgICB9XHJcbiAgICAgIG1ycFxyXG4gICAgICBvZmZlclByaWNlXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIHByb2R1Y3RDb2RlXHJcbiAgICAgIHByb2R1Y3RJbmZvXHJcbiAgICAgIHByb2R1Y3ROYW1lXHJcbiAgICAgIHByb2R1Y3RTaG9ydEluZm9cclxuICAgICAgcmF0aW5nXHJcbiAgICAgIHNlbGxpbmdQcmljZVxyXG4gICAgICBzaG9ydERlc2NyaXB0aW9uXHJcbiAgICAgIHNrdUlkXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBzdG9ja1xyXG4gICAgICB0YWdzXHJcbiAgICAgIHZlbmRvcklkXHJcbiAgICAgIGlzQmxvY2tlZFxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmZ1bmN0aW9uIERlYWxTZWN0aW9uKCkge1xyXG4gIC8vIGNvbnN0IHtkYXRhLGxvYWRpbmcsZXJyb3J9PXVzZVF1ZXJ5KEdFVF9QUk9EVUNUUylcclxuICBjb25zdCBbZ2V0UHJvZHVjdHMsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX1BST0RVQ1RTKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9kdWN0cyh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBkaXNjb3VudDogMTAsXHJcbiAgICAgICAgICBzaXplOiA2XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBwcm9kdWN0cyA9IGRhdGE/LmdldFByb2R1Y3RzPy5yZWNvcmRzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRlYWwtcHJvZHVjdHMtc2VjdGlvblwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWFsLXNlY3Rpb24taGVhZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC10cmFuc2Zvcm0tbm9uZVwiPlxyXG4gICAgICAgICAgRGVhbHMgb2YgdGhlIGRheVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEFMaW5rIGhyZWY9XCIvc2hvcD9kaXNjb3VudD0xMFwiPiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsIGZvbnRXZWlnaHQ6IFwiNTAwXCIsbWFyZ2luVG9wOicxNXB4JywgfX0+VmlldyBBbGwgUHJvZHVjdHM8L3A+PC9BTGluaz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwicmVjb21tZW5kbW9iXCI+RGVhbHMgb2YgdGhlIGRheTwvaDQ+XHJcbiAgICAgIDxSZXZlYWxcclxuICAgICAgICBrZXlmcmFtZXM9e2ZhZGVJblVwU2hvcnRlcn1cclxuICAgICAgICBkZWxheT17MTAwfVxyXG4gICAgICAgIGR1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgIHRyaWdnZXJPbmNlXHJcbiAgICAgIC8vIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgxODUsIDE4NSwgMTg1LCAxKVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNSBtYi0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAge3Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgPyBwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDE1KVxyXG4gICAgICAgICAgICAgICAgLy8gLmZpbHRlcigoaXRlbSkgPT4gaXRlbS51bnRpbCAmJiBpdGVtLnVudGlsICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIDEpXHJcbiAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Rm91clxyXG4gICAgICAgICAgICAgICAgICAgICAgYWRDbGFzcz1cImRlYWwtcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtcIkFsbCBQcm9kdWN0czpcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IFswXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNrZWwtcHJvIHNrZWwtcHJvLWdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e1wiU2tlbGV0b246XCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy13aXRoLWRpdmlkZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1qb2luZWRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICA/IHByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLmZpbHRlcigoaXRlbSkgPT4gaXRlbS51bnRpbCA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteGwtNCBjb2wtc20tNCBjb2wtNiBtLTAgY3VzdG9tZGVhbC1ib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wiQWxsIFByb2R1Y3RzOlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMTg1LCAxODUsIDE4NSwgMSlcIiwgYm9yZGVyUmlnaHQ6XCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RPbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZENsYXNzPVwiaW5uZXItcXVpY2t2aWV3IGlubmVyLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbVN0eWxlPVwiNjUlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICA6IG5ldyBBcnJheSg2KS5maWxsKDEpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtc20tNCBjb2wtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wiQWxsIFByb2R1Y3RzOlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2VsLXBybyBza2VsLXByby1ncmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcIlNrZWxldG9uOlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JldmVhbD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERlYWxTZWN0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==