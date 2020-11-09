"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.User = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _Post = require("./Post");

var _Comment = require("./Comment");

var _getDatabaseConnection = _interopRequireDefault(require("../../lib/getDatabaseConnection"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

var User = (_dec = (0, _typeorm.Entity)('users'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec3 = (0, _typeorm.Index)({
  unique: true
}), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = (0, _typeorm.Column)('varchar'), _dec6 = (0, _typeorm.CreateDateColumn)({
  type: 'timestamp without time zone'
}), _dec7 = (0, _typeorm.UpdateDateColumn)({
  type: 'timestamp without time zone'
}), _dec8 = (0, _typeorm.OneToMany)(function (type) {
  return _Post.Post;
}, function (post) {
  return post.author;
}), _dec9 = (0, _typeorm.OneToMany)(function (type) {
  return _Comment.Comment;
}, function (comment) {
  return comment.user;
}), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
    (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "updatedAt", _descriptor5, this);
    (0, _initializerDefineProperty2["default"])(this, "posts", _descriptor6, this);
    (0, _initializerDefineProperty2["default"])(this, "comments", _descriptor7, this);
    (0, _defineProperty2["default"])(this, "errors", {
      username: [],
      password: [],
      passwordConfirm: []
    });
    (0, _defineProperty2["default"])(this, "password_input", void 0);
    (0, _defineProperty2["default"])(this, "passwordConfirm_input", void 0);
  }

  (0, _createClass2["default"])(User, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this = this;

        var foundIfExist;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                foundIfExist = /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _getDatabaseConnection["default"])();

                          case 2:
                            return _context.abrupt("return", _context.sent.manager.findOne(User, {
                              username: _this.username
                            }));

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function foundIfExist() {
                    return _ref.apply(this, arguments);
                  };
                }();

                if (this.username) {
                  _context2.next = 5;
                  break;
                }

                this.errors.username.push('用户名不能为空');
                _context2.next = 16;
                break;

              case 5:
                if (/\w+/.test(this.username)) {
                  _context2.next = 9;
                  break;
                }

                this.errors.username.push('用户名不合法');
                _context2.next = 16;
                break;

              case 9:
                _context2.next = 11;
                return foundIfExist();

              case 11:
                if (!_context2.sent) {
                  _context2.next = 15;
                  break;
                }

                this.errors.username.push('用户名重复');
                _context2.next = 16;
                break;

              case 15:
                if (!this.password_input) {
                  this.errors.password.push('密码不能为空');
                } else if (this.passwordConfirm_input !== this.password_input) {
                  this.errors.passwordConfirm.push('两次密码不相同');
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function validate() {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "hasError",
    value: function hasError() {
      console.log('errors', this.errors);
      return !!Object.values(this.errors).find(function (v) {
        return v.length > 0;
      });
    }
  }]);
  return User;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updatedAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "posts", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.User = User;
var _default = User;
exports["default"] = _default;