"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;
var _react = _interopRequireDefault(require("react"));
/**
 *
 * The Search bar part of the custom table component
 *
 * @function Search
 *
 * @returns the Search component
 *
 */

function Search(_ref) {
  var onSearch = _ref.onSearch;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "search-field",
    placeholder: "Search the table",
    onChange: function onChange(e) {
      return onSearch(e.target.value);
    }
  });
}