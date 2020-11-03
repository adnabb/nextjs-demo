"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _User = require("./entity/User");

var _Comment = require("./entity/Comment");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, u1, p1, c1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('恭喜你，连接成功！');
            manager = connection.manager;
            u1 = new _User.User();
            u1.username = 'vivi';
            u1.password = '123456';
            _context.next = 7;
            return manager.save(u1);

          case 7:
            console.info('u1 保存成功');
            p1 = new _Post.Post();
            p1.title = 'haha';
            p1.content = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhh';
            p1.auther = u1;
            _context.next = 14;
            return manager.save(p1);

          case 14:
            console.info('p1 保存成功');
            c1 = new _Comment.Comment();
            c1.content = 'good';
            c1.user = u1;
            c1.post = p1;
            _context.next = 21;
            return manager.save(c1);

          case 21:
            console.log('恭喜你，新增成功！');
            console.info('c1 保存成功');
            connection.close();

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});