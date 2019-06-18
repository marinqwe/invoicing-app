webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InvoiceList.js":
/*!***********************************!*\
  !*** ./components/InvoiceList.js ***!
  \***********************************/
/*! exports provided: default, QUERY_ALL_INVOICES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ALL_INVOICES", function() { return QUERY_ALL_INVOICES; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _InvoiceListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InvoiceListItem */ "./components/InvoiceListItem.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/home/marin/Desktop/invoicing-solutions/frontend/components/InvoiceList.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query QUERY_ALL_INVOICES($skip: Int = 0, $first: Int = ", ", $currency: String, $status: String) {\n    invoices(orderBy: createdAt_DESC, first: $first, skip: $skip, where: { currency: $currency, status: $status }) {\n      id\n      status\n      currency\n      isPaid\n      createdAt\n      name {\n        id\n        sfx\n        yearIssued\n      }\n      items {\n        id\n        description\n        price\n      }\n      creditnote {\n        id \n        name\n        prices\n        descriptions\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var QUERY_ALL_INVOICES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "InvoiceList__Center",
  componentId: "icrp3f-0"
})(["text-align:center;"]);
var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "InvoiceList__StyledList",
  componentId: "icrp3f-1"
})(["display:flex;flex-wrap:wrap;"]);

var InvoiceList = function InvoiceList(_ref) {
  var page = _ref.page,
      currency = _ref.currency,
      status = _ref.status;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: QUERY_ALL_INVOICES,
    variables: {
      status: status,
      currency: currency,
      skip: page * _config__WEBPACK_IMPORTED_MODULE_7__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        loading = _ref2.loading;
    // console.log('INVOICE LIST: ', data.invoices);
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
    if (!data.invoices.length) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "CLICK CREATE NEW OR THE BEAR GETS IT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "(\u2310\u25A0_\u25A0)--\uFE3B\u2566\u2564\u2500 \u0295\u2299\u1D25\u2299\u0294"));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, data.invoices.map(function (invoice) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InvoiceListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: invoice.id,
        invoice: invoice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InvoiceList);


/***/ })

})
//# sourceMappingURL=index.js.e5965be40a55199e5327.hot-update.js.map