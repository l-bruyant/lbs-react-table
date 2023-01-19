"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomReactTable;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
require("./customReactTable.css");
var _react = _interopRequireWildcard(require("react"));
var _externalDropdown = _interopRequireDefault(require("./dropdown/externalDropdown"));
var _pagination = _interopRequireDefault(require("./pagination/pagination"));
var _search = _interopRequireDefault(require("./search/search"));
var _tableHeader = _interopRequireDefault(require("./tableHeader/tableHeader"));
var _searchTable = _interopRequireDefault(require("./utils/searchTable"));
var _sortTable = _interopRequireDefault(require("./utils/sortTable"));
/* eslint-disable react-hooks/exhaustive-deps */

/**
 *
 * A complete table component with search, sort and pagination
 * See proptypes for more information about each prop
 *
 * @function CustomReactTable
 *
 * @returns the CustomReactTable component
 *
 */

function CustomReactTable(_ref) {
  var data = _ref.data,
    fieldsSetup = _ref.fieldsSetup,
    defaultSortingField = _ref.defaultSortingField,
    defaultSortingOrder = _ref.defaultSortingOrder,
    _ref$paginationOption = _ref.paginationOptions,
    paginationOptions = _ref$paginationOption === void 0 ? ['10'] : _ref$paginationOption,
    defaultPaginationOption = _ref.defaultPaginationOption;
  var _useState = (0, _react.useState)(1),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultPaginationOption),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    itemsPerPage = _useState4[0],
    setItemsPerPage = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = (0, _react.useState)({
      field: defaultSortingField,
      order: defaultSortingOrder
    }),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    sorting = _useState8[0],
    setSorting = _useState8[1];
  var unSlicedData = (0, _react.useMemo)(function () {
    var itemsTable = Object.assign([], data);
    if (search) {
      itemsTable = (0, _searchTable.default)(itemsTable, search);
    }
    if (sorting.field) {
      itemsTable = (0, _sortTable.default)(itemsTable, sorting.order, sorting.field);
    }
    return itemsTable;
  }, [data, search, sorting]);
  var slicedData = (0, _react.useMemo)(function () {
    var paginatedData = unSlicedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return paginatedData;
  }, [data, currentPage, itemsPerPage, search, sorting]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "react-pagination-table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-options-area"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-settings-container"
  }, "Show", /*#__PURE__*/_react.default.createElement(_externalDropdown.default, {
    onChange: function onChange(e) {
      setItemsPerPage(e.value);
      setCurrentPage(1);
    },
    name: "pagination-settings",
    id: "pagination-settings",
    options: paginationOptions,
    value: defaultPaginationOption
  }), "Results"), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-container"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search"
  }, "Search"), /*#__PURE__*/_react.default.createElement(_search.default, {
    onSearch: function onSearch(value) {
      setSearch(value);
      setCurrentPage(1);
    }
  }))), /*#__PURE__*/_react.default.createElement("table", {
    className: "items-table"
  }, /*#__PURE__*/_react.default.createElement(_tableHeader.default, {
    headers: fieldsSetup,
    onSorting: function onSorting(field, order) {
      setSorting({
        field: field,
        order: order
      });
      setCurrentPage(1);
    }
  }), /*#__PURE__*/_react.default.createElement("tbody", null, slicedData.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: 'row' + index
    }, fieldsSetup.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: item[field.fieldDisplay] + index
      }, item[field.fieldDisplay]);
    }));
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_pagination.default, {
    total: unSlicedData.length,
    itemsPerPage: itemsPerPage,
    currentPage: currentPage,
    onPageChange: function onPageChange(page) {
      return setCurrentPage(page);
    },
    firstItemIndex: (currentPage - 1) * itemsPerPage + 1,
    lastItemIndex: (currentPage - 1) * itemsPerPage + slicedData.length
  })));
}