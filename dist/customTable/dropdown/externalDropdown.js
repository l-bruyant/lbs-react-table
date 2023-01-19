"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExternalDropDown;
require("react-dropdown/style.css");
require("./react-dropdown.css");
var _react = _interopRequireDefault(require("react"));
var _reactDropdown2 = _interopRequireDefault(require("react-dropdown"));
/**
 *
 * The goal of this wrapper is to setup the external library component
 * in a single place for easier maintenance
 *
 * @function ExternalDropDown
 *
 * @returns a wrapper that contains the react-dropdown library component
 *
 */

function ExternalDropDown(_ref) {
  var name = _ref.name,
    id = _ref.id,
    onChange = _ref.onChange,
    options = _ref.options,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? options[0] : _ref$value;
  return /*#__PURE__*/_react.default.createElement(_reactDropdown2.default, {
    name: name,
    id: id,
    onChange: onChange,
    options: options,
    value: value
  });
}