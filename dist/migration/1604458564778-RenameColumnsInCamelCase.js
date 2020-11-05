"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenameColumnsInCamelCase1604458564778 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RenameColumnsInCamelCase1604458564778 = /*#__PURE__*/function () {
  function RenameColumnsInCamelCase1604458564778() {
    (0, _classCallCheck2["default"])(this, RenameColumnsInCamelCase1604458564778);
  }

  (0, _createClass2["default"])(RenameColumnsInCamelCase1604458564778, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.renameColumn('users', 'created_at', 'createdAt');

              case 2:
                _context.next = 4;
                return queryRunner.renameColumn('users', 'updated_at', 'updatedAt');

              case 4:
                _context.next = 6;
                return queryRunner.renameColumn('posts', 'created_at', 'createdAt');

              case 6:
                _context.next = 8;
                return queryRunner.renameColumn('posts', 'updated_at', 'updatedAt');

              case 8:
                _context.next = 10;
                return queryRunner.renameColumn('posts', 'author_id', 'authorId');

              case 10:
                _context.next = 12;
                return queryRunner.renameColumn('comments', 'created_at', 'createdAt');

              case 12:
                _context.next = 14;
                return queryRunner.renameColumn('comments', 'updated_at', 'updatedAt');

              case 14:
                _context.next = 16;
                return queryRunner.renameColumn('comments', 'author_id', 'authorId');

              case 16:
                _context.next = 18;
                return queryRunner.renameColumn('comments', 'post_id', 'postId');

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return queryRunner.renameColumn('users', 'createdAt', 'created_at');

              case 2:
                _context2.next = 4;
                return queryRunner.renameColumn('users', 'updatedAt', 'updated_at');

              case 4:
                _context2.next = 6;
                return queryRunner.renameColumn('posts', 'createdAt', 'created_at');

              case 6:
                _context2.next = 8;
                return queryRunner.renameColumn('posts', 'updatedAt', 'updated_at');

              case 8:
                _context2.next = 10;
                return queryRunner.renameColumn('posts', 'authorId', 'author_id');

              case 10:
                _context2.next = 12;
                return queryRunner.renameColumn('comments', 'createdAt', 'created_at');

              case 12:
                _context2.next = 14;
                return queryRunner.renameColumn('comments', 'updatedAt', 'updated_at');

              case 14:
                _context2.next = 16;
                return queryRunner.renameColumn('comments', 'authorId', 'author_id');

              case 16:
                _context2.next = 18;
                return queryRunner.renameColumn('comments', 'postId', 'post_id');

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return RenameColumnsInCamelCase1604458564778;
}();

exports.RenameColumnsInCamelCase1604458564778 = RenameColumnsInCamelCase1604458564778;