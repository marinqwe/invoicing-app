webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TogglePaid.js":
/*!**********************************!*\
  !*** ./components/TogglePaid.js ***!
  \**********************************/
/*! exports provided: default, Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _UpdateInvoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdateInvoice */ "./components/UpdateInvoice.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/home/marin/Desktop/invoicing-solutions/frontend/components/TogglePaid.js";




var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "TogglePaid__Toggle",
  componentId: "sc-1oscvil-0"
})(["cursor:pointer;font-size:18px;"]);

var TogglePaid = function TogglePaid(_ref) {
  var vars = _ref.vars;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
    mutation: _UpdateInvoice__WEBPACK_IMPORTED_MODULE_5__["UPDATE_INVOICE_MUTATION"],
    variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, vars, {
      isPaid: !vars.isPaid
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (updateInvoice, _ref2) {
    var error = _ref2.error,
        loading = _ref2.loading;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Toggle, {
      onClick:
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!vars.creditnote) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", null);

              case 2:
                _context.next = 4;
                return updateInvoice();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, vars.isPaid ? '✔ PAID' : '✘ NOT PAID');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TogglePaid);


/***/ })

})
//# sourceMappingURL=index.js.974261bf02d7345b7a05.hot-update.js.map