"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _sortTable = _interopRequireDefault(require("./sortTable"));
/* eslint-disable no-undef */

describe('sortTable', function () {
  it('sorts the table by ascending order of a specific field value', function () {
    var dataTable = [{
      name: 'Jane',
      age: '24'
    }, {
      name: 'John',
      age: '32'
    }, {
      name: 'Bob',
      age: '28'
    }];
    var sortedTable = (0, _sortTable.default)(dataTable, 'asc', 'name');
    expect(sortedTable).toEqual([{
      name: 'Bob',
      age: '28'
    }, {
      name: 'Jane',
      age: '24'
    }, {
      name: 'John',
      age: '32'
    }]);
  });
  it('sorts the table by descending order of a specific field value', function () {
    var dataTable = [{
      name: 'Jane',
      age: '24'
    }, {
      name: 'John',
      age: '32'
    }, {
      name: 'Bob',
      age: '28'
    }];
    var sortedTable = (0, _sortTable.default)(dataTable, 'desc', 'age');
    expect(sortedTable).toEqual([{
      name: 'John',
      age: '32'
    }, {
      name: 'Bob',
      age: '28'
    }, {
      name: 'Jane',
      age: '24'
    }]);
  });
});