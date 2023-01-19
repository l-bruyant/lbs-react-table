"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _searchTable = _interopRequireDefault(require("./searchTable"));
/* eslint-disable no-undef */

describe('searchTable', function () {
  test('returns the expected filtered data according to input', function () {
    var dataTable = [{
      name: 'John',
      age: '25'
    }, {
      name: 'Jane',
      age: '30'
    }, {
      name: 'Bob',
      age: '35'
    }];
    var userInput = 'j';
    var expectedOutput = [{
      name: 'John',
      age: '25'
    }, {
      name: 'Jane',
      age: '30'
    }];
    expect((0, _searchTable.default)(dataTable, userInput)).toEqual(expectedOutput);
  });
});