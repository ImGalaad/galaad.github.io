"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ledger = new WeakMap();

function editLedger(e, t, n, r) {
  var a, o;
  if (!e && !ledger.has(t)) return !1;
  var s = null !== (a = ledger.get(t)) && void 0 !== a ? a : new WeakMap();
  ledger.set(t, s);
  var c = null !== (o = s.get(n)) && void 0 !== o ? o : new Set();
  s.set(n, c);
  var l = c.has(r);
  return e ? c.add(r) : c["delete"](r), l && e;
}

function safeClosest(e, t) {
  var n = e.target;

  if (n instanceof Text && (n = n.parentElement), n instanceof Element && e.currentTarget instanceof Element) {
    var r = n.closest(t);
    if (r && e.currentTarget.contains(r)) return r;
  }
}

function delegate(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var a = r.signal,
      _r$base = r.base,
      o = _r$base === void 0 ? document : _r$base;
  if (null != a && a.aborted) return;

  var s = r.once,
      c = _objectWithoutProperties(r, ["once"]),
      l = o instanceof Document ? o.documentElement : o,
      d = Boolean("object" == _typeof(r) ? r.capture : r),
      i = function i(r) {
    var a = safeClosest(r, e);

    if (a) {
      var _e = Object.assign(r, {
        delegateTarget: a
      });

      n.call(l, _e), s && (l.removeEventListener(t, i, c), editLedger(!1, l, n, g));
    }
  },
      g = JSON.stringify({
    selector: e,
    type: t,
    capture: d
  });

  editLedger(!0, l, n, g) || l.addEventListener(t, i, c), null == a || a.addEventListener("abort", function () {
    editLedger(!1, l, n, g);
  });
}

var _default = delegate;
exports["default"] = _default;