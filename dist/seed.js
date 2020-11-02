"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _post = require("./entity/post");

// 注意这里的post路径是小写
(0, _typeorm.createConnection)().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var entityManager, post;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('恭喜你，连接成功！');
          entityManager = (0, _typeorm.getManager)(); // you can also get it via getConnection().manager

          _context.next = 4;
          return entityManager.create(_post.Post, {
            title: 'test',
            content: 'hi, this is my first file'
          });

        case 4:
          post = _context.sent;
          _context.next = 7;
          return entityManager.save(post);

        case 7:
          console.log('恭喜你，新增成功！');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});