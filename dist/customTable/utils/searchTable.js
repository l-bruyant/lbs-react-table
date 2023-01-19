"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchTable;
/**
 *
 * Searchs all the tables values for a specific expression
 *
 * @function searchTable
 *
 * @param table is the input data that needs to be searched, it has to be an array of objects
 * @param input is a string to look for in the table
 *
 * @returns a new table with only objects for which a value matches the input string
 *
 */

function searchTable(table, input) {
  var data = table;
  data = data.filter(function (item) {
    return Object.keys(item).some(function (key) {
      return item[key].toLowerCase().includes(input.toLowerCase());
    });
  });
  return data;
}