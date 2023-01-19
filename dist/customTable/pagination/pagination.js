"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */

/**
 *
 * The Pagination part of the custom table component
 *
 * @function Pagination
 *
 * @returns the Pagination component
 *
 */

function Pagination(_ref) {
  var firstItemIndex = _ref.firstItemIndex,
    lastItemIndex = _ref.lastItemIndex,
    _ref$total = _ref.total,
    total = _ref$total === void 0 ? 0 : _ref$total,
    _ref$itemsPerPage = _ref.itemsPerPage,
    itemsPerPage = _ref$itemsPerPage === void 0 ? 10 : _ref$itemsPerPage,
    _ref$currentPage = _ref.currentPage,
    currentPage = _ref$currentPage === void 0 ? 1 : _ref$currentPage,
    onPageChange = _ref.onPageChange;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    totalPages = _useState2[0],
    setTotalPages = _useState2[1];
  (0, _react.useEffect)(function () {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
    if (total == 0) {
      setTotalPages(1);
    }
  }, [total, itemsPerPage]);
  var createPaginationItem = function createPaginationItem(i, currentPage) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: i === currentPage ? 'pagination-indexNumber pagination-active' : 'pagination-indexNumber',
      key: i,
      onClick: function onClick() {
        return onPageChange(i);
      }
    }, i);
  };
  var paginationItems = (0, _react.useMemo)(function () {
    var pages = [];
    if (totalPages === 1) {
      return '';
    } else if (totalPages < 6) {
      for (var i = 1; i <= totalPages; i++) {
        pages.push(createPaginationItem(i, currentPage));
      }
    } else if (currentPage < 4) {
      for (var _i = 1; _i <= 4; _i++) {
        pages.push(createPaginationItem(_i, currentPage));
      }
      pages.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination-indexNumber pagination-dots",
        key: "..."
      }, "..."));
      pages.push(createPaginationItem(totalPages, currentPage));
    } else if (currentPage > totalPages - 3) {
      pages.push(createPaginationItem(1, currentPage));
      pages.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination-indexNumber pagination-dots",
        key: "..."
      }, "..."));
      for (var _i2 = totalPages - 3; _i2 <= totalPages; _i2++) {
        pages.push(createPaginationItem(_i2, currentPage));
      }
    } else if (totalPages > 1) {
      pages.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination-indexNumber",
        key: 1,
        onClick: function onClick() {
          return onPageChange(1);
        }
      }, 1));
      pages.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination-indexNumber pagination-dots",
        key: "...1"
      }, "..."));
      for (var _i3 = currentPage - 1; _i3 <= currentPage + 1; _i3++) {
        pages.push(createPaginationItem(_i3, currentPage));
      }
      pages.push( /*#__PURE__*/_react.default.createElement("div", {
        className: "pagination-indexNumber pagination-dots",
        key: "...2"
      }, "..."));
      pages.push(createPaginationItem(totalPages, currentPage));
    }
    return pages;
  }, [totalPages, currentPage]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-container"
  }, total > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-index"
  }, "Showing ", firstItemIndex, " to ", lastItemIndex, " of ", total, " entries") : /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-index pagination-index-error"
  }, "No results available"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination-nav"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    },
    hidden: currentPage === 1
  }, "Previous"), paginationItems, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    },
    hidden: currentPage === totalPages
  }, "Next")));
}