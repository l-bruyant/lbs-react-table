"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeader;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
/**
 *
 * The header part of the custom table component
 *
 * @function TableHeader
 *
 * @returns the TableHeader component
 *
 */

function TableHeader(_ref) {
  var headers = _ref.headers,
    onSorting = _ref.onSorting;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    sortingField = _useState2[0],
    setSortingField = _useState2[1];
  var _useState3 = (0, _react.useState)('asc'),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    sortingOrder = _useState4[0],
    setSortingOrder = _useState4[1];
  var onSortingChange = function onSortingChange(fieldValue) {
    var order = fieldValue === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc';
    setSortingField(fieldValue);
    setSortingOrder(order);
    onSorting(fieldValue, order);
  };
  return /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(function (_ref2) {
    var fieldName = _ref2.fieldName,
      fieldValue = _ref2.fieldValue;
    return /*#__PURE__*/_react.default.createElement("th", {
      className: "table-header-text",
      key: fieldName,
      onClick: function onClick() {
        return onSortingChange(fieldValue);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, fieldName), sortingField && sortingField === fieldValue && /*#__PURE__*/_react.default.createElement("div", {
      className: "sort-icon"
    }, sortingOrder === 'asc' ? '🔽' : '🔼'));
  })));
}