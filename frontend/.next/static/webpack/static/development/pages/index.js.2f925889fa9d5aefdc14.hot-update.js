webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InvoiceListItem.js":
/*!***************************************!*\
  !*** ./components/InvoiceListItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InvoiceListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DeleteInvoice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DeleteInvoice */ "./components/DeleteInvoice.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/Button */ "./components/styles/Button.js");
/* harmony import */ var _lib_FormatMoney__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/FormatMoney */ "./lib/FormatMoney.js");
/* harmony import */ var _CreateCreditNote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CreateCreditNote */ "./components/CreateCreditNote.js");






var _jsxFileName = "/home/marin/Desktop/invoicing-solutions/frontend/components/InvoiceListItem.js";








var StyledInvoice = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "InvoiceListItem__StyledInvoice",
  componentId: "cz93s9-0"
})(["margin:5px;border:1px solid black;border-radius:2px;display:flex;width:25%;height:20rem;flex-direction:column;justify-content:space-around;div{margin-bottom:4px;}"]);

var InvoiceListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InvoiceListItem, _Component);

  function InvoiceListItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InvoiceListItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InvoiceListItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InvoiceListItem, [{
    key: "render",
    value: function render() {
      var _this$props$invoice = this.props.invoice,
          id = _this$props$invoice.id,
          name = _this$props$invoice.name,
          currency = _this$props$invoice.currency,
          items = _this$props$invoice.items,
          status = _this$props$invoice.status,
          creditnote = _this$props$invoice.creditnote;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledInvoice, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Invoice INV-", name.yearIssued, "-", name.sfx), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Number of items: ", items.length, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), "Currency: ", Object(_lib_FormatMoney__WEBPACK_IMPORTED_MODULE_12__["formatCurrency"])(currency)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: {
          pathname: '/invoice',
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styles_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Details"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DeleteInvoice__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Remove"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CreateCreditNote__WEBPACK_IMPORTED_MODULE_13__["default"], {
        invoice: this.props.invoice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Credit note")));
    }
  }]);

  return InvoiceListItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(InvoiceListItem, "propTypes", {
  invoice: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
});



/***/ })

})
//# sourceMappingURL=index.js.2f925889fa9d5aefdc14.hot-update.js.map