"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortTable;
/**
 *
 * Orders a table according to the values of a specific field of the table
 *
 * @function sortTable
 *
 * @param table is the input data that needs to be ordered, it has to be an array of objects
 * @param sortOrder can take "asc" or "desc" to define the sorting order
 * @param sortField the field that needs to be used for sorting (example : firstName)
 *
 * @returns a new table with objects that are sortered according to the params
 *
 */

function sortTable(table, sortOrder, sortField) {
  var data = table;
  var reversed = sortOrder === 'asc' ? 1 : -1;
  data = data.sort(function (a, b) {
    return reversed * a[sortField].localeCompare(b[sortField]);
  });
  return data;
}