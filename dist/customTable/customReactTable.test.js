"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _customReactTable = _interopRequireDefault(require("./customReactTable"));
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */

describe('CustomReactTable', function () {
  it('should display the data', function () {
    var data = [{
      name: 'John',
      age: '25'
    }, {
      name: 'Jane',
      age: '30'
    }];
    var fieldsSetup = [{
      fieldName: 'NAME',
      fieldValue: 'name',
      fieldDisplay: 'name'
    }, {
      fieldName: 'AGE',
      fieldValue: 'age',
      fieldDisplay: 'age'
    }];
    var paginationOptions = ['2', '5', '10'];
    var defaultPaginationOption = '5';
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_customReactTable.default, {
        data: data,
        fieldsSetup: fieldsSetup,
        paginationOptions: paginationOptions,
        defaultPaginationOption: defaultPaginationOption
      })),
      getByText = _render.getByText;
    expect(getByText('NAME')).toBeTruthy();
    expect(getByText('AGE')).toBeTruthy();
    expect(getByText('John')).toBeTruthy();
    expect(getByText('Jane')).toBeTruthy();
    expect(getByText('25')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
    expect(getByText('5')).toBeTruthy();
    expect(getByText('Showing 1 to 2 of 2 entries')).toBeTruthy();
  });
});