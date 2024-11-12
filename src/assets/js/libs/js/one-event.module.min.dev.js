"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _delegateModuleMin = _interopRequireDefault(require("./delegate.module.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function oneEvent(e, n) {
  var o,
      _args = arguments;
  return regeneratorRuntime.async(function oneEvent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          o = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          return _context.abrupt("return", new Promise(function (t) {
            var d, a;
            o.once = !0, null !== (d = o.signal) && void 0 !== d && d.aborted && t(void 0), null === (a = o.signal) || void 0 === a || a.addEventListener("abort", function () {
              t(void 0);
            }), (0, _delegateModuleMin["default"])(e, n, t, o);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

var _default = oneEvent;
exports["default"] = _default;