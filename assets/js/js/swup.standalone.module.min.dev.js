"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHistoryRecord = exports.toMs = exports.queryAll = exports.query = exports.nextTick = exports.markSwupElements = exports.getDataFromHtml = exports.getCurrentUrl = exports.fetch = exports.escapeCssIdentifier = exports.delegateEvent = exports["default"] = exports.createHistoryRecord = exports.cleanupAnimationClasses = exports.classify = exports.Location = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var t = new WeakMap();

function e(e, n, i, s) {
  var o, r;
  if (!e && !t.has(n)) return !1;
  var a = null !== (o = t.get(n)) && void 0 !== o ? o : new WeakMap();
  t.set(n, a);
  var l = null !== (r = a.get(i)) && void 0 !== r ? r : new Set();
  a.set(i, l);
  var c = l.has(s);
  return e ? l.add(s) : l["delete"](s), c && e;
}

function n(t, n, i) {
  var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var o = s.signal,
      _s$base = s.base,
      r = _s$base === void 0 ? document : _s$base;
  if (null != o && o.aborted) return;

  var a = s.once,
      l = _objectWithoutProperties(s, ["once"]),
      c = r instanceof Document ? r.documentElement : r,
      u = Boolean("object" == _typeof(s) ? s.capture : s),
      h = function h(s) {
    var o = function (t, e) {
      var n = t.target;

      if (n instanceof Text && (n = n.parentElement), n instanceof Element && t.currentTarget instanceof Element) {
        var _i = n.closest(e);

        if (_i && t.currentTarget.contains(_i)) return _i;
      }
    }(s, t);

    if (o) {
      var _t = Object.assign(s, {
        delegateTarget: o
      });

      i.call(c, _t), a && (c.removeEventListener(n, h, l), e(!1, c, i, d));
    }
  },
      d = JSON.stringify({
    selector: t,
    type: n,
    capture: u
  });

  e(!0, c, i, d) || c.addEventListener(n, h, l), null == o || o.addEventListener("abort", function () {
    e(!1, c, i, d);
  });
}

var i = function i(t, e) {
  return String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e || "";
},
    s = function s(t) {
  var _ref = void 0 === t ? {} : t,
      e = _ref.hash;

  return location.pathname + location.search + (e ? location.hash : "");
},
    o = function o(t, e) {
  void 0 === e && (e = {});

  var n = _objectSpread({
    url: t = t || s({
      hash: !0
    }),
    random: Math.random(),
    source: "swup"
  }, e);

  history.pushState(n, "", t);
},
    r = function r(t, e) {
  void 0 === t && (t = null), void 0 === e && (e = {}), t = t || s({
    hash: !0
  });

  var n = _objectSpread({}, history.state, {
    url: t,
    random: Math.random(),
    source: "swup"
  }, e);

  history.replaceState(n, "", t);
},
    a = function a(t, e, i, s) {
  var o = new AbortController();
  return n(t, e, i, s), {
    destroy: function destroy() {
      return o.abort();
    }
  };
},
    l = function l(t, e) {
  return void 0 === e && (e = document), e.querySelector(t);
},
    c = function c(t, e) {
  return void 0 === e && (e = document), Array.from(e.querySelectorAll(t));
},
    u = function u(t) {
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      t();
    });
  });
},
    h = function h(t) {
  return window.CSS && window.CSS.escape ? CSS.escape(t) : t;
},
    d = function d(t) {
  return 1e3 * Number(t.slice(0, -1).replace(",", "."));
},
    p = function p(t, e) {
  var n, i;
  var s = document.createElement("html");
  s.innerHTML = t;
  var o = [];
  e.forEach(function (t) {
    if (null == l(t, s)) return console.warn("[swup] Container ".concat(t, " not found on page.")), null;
    c(t).length !== c(t, s).length && console.warn("[swup] Mismatched number of containers found on new page."), c(t).forEach(function (e, n) {
      c(t, s)[n].setAttribute("data-swup", String(o.length)), o.push(c(t, s)[n].outerHTML);
    });
  });
  var r = (null === (n = l("title", s)) || void 0 === n ? void 0 : n.innerText) || "",
      a = null === (i = l("body", s)) || void 0 === i ? void 0 : i.className;
  return s.innerHTML = "", s = null, {
    title: r,
    pageClass: a,
    blocks: o,
    originalContent: t
  };
},
    g = function g(t, e) {
  var n = {
    url: window.location.pathname + window.location.search,
    method: "GET",
    data: null,
    headers: {}
  },
      _n$t = _objectSpread({}, n, {}, t),
      i = _n$t.url,
      s = _n$t.method,
      o = _n$t.headers,
      r = _n$t.data,
      a = new XMLHttpRequest();

  return a.onreadystatechange = function () {
    4 === a.readyState && e(a);
  }, a.open(s, i, !0), Object.entries(o).forEach(function (t) {
    var _t2 = _slicedToArray(t, 2),
        e = _t2[0],
        n = _t2[1];

    a.setRequestHeader(e, n);
  }), a.send(r), a;
};

exports.fetch = g;
exports.getDataFromHtml = p;
exports.toMs = d;
exports.escapeCssIdentifier = h;
exports.nextTick = u;
exports.queryAll = c;
exports.query = l;
exports.delegateEvent = a;
exports.updateHistoryRecord = r;
exports.createHistoryRecord = o;
exports.getCurrentUrl = s;
exports.classify = i;

var m =
/*#__PURE__*/
function (_URL) {
  _inherits(m, _URL);

  function m(t, e) {
    var _this;

    _classCallCheck(this, m);

    void 0 === e && (e = document.baseURI), _this = _possibleConstructorReturn(this, _getPrototypeOf(m).call(this, t.toString(), e));
    return _this;
  }

  _createClass(m, [{
    key: "url",
    get: function get() {
      return this.pathname + this.search;
    }
  }], [{
    key: "fromElement",
    value: function fromElement(t) {
      var e = t.getAttribute("href") || t.getAttribute("xlink:href");
      return new m(e);
    }
  }, {
    key: "fromUrl",
    value: function fromUrl(t) {
      return new m(t);
    }
  }]);

  return m;
}(_wrapNativeSuper(URL));

exports.Location = m;

var f = function f(t, e) {
  var n = 0;
  e.forEach(function (e) {
    null == l(e, t) ? console.warn("[swup] Container ".concat(e, " not found on page.")) : c(e).forEach(function (i, s) {
      c(e, t)[s].setAttribute("data-swup", String(n)), n++;
    });
  });
},
    v = function v(t) {
  return /^to-/.test(t) || ["is-changing", "is-rendering", "is-popstate"].includes(t);
},
    w = function w() {
  var _document$documentEle;

  var t = document.documentElement.className.split(" ").filter(v);

  (_document$documentEle = document.documentElement.classList).remove.apply(_document$documentEle, _toConsumableArray(t));
};

exports.cleanupAnimationClasses = w;
exports.markSwupElements = f;

var E =
/*#__PURE__*/
function () {
  function E(t) {
    _classCallCheck(this, E);

    this.pages = {}, this.last = null, this.swup = void 0, this.swup = t;
  }

  _createClass(E, [{
    key: "getCacheUrl",
    value: function getCacheUrl(t) {
      return this.swup.resolveUrl(m.fromUrl(t).url);
    }
  }, {
    key: "cacheUrl",
    value: function cacheUrl(t) {
      t.url = this.getCacheUrl(t.url), t.url in this.pages == 0 && (this.pages[t.url] = t), t.responseURL = this.getCacheUrl(t.responseURL), this.last = this.pages[t.url], this.swup.log("Cache (".concat(Object.keys(this.pages).length, ")"), this.pages);
    }
  }, {
    key: "getPage",
    value: function getPage(t) {
      return t = this.getCacheUrl(t), this.pages[t];
    }
  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      return this.getPage(s());
    }
  }, {
    key: "exists",
    value: function exists(t) {
      return (t = this.getCacheUrl(t)) in this.pages;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.pages = {}, this.last = null, this.swup.log("Cache cleared");
    }
  }, {
    key: "remove",
    value: function remove(t) {
      delete this.pages[this.getCacheUrl(t)];
    }
  }]);

  return E;
}();

var P = function P(t) {
  var _this2 = this;

  var _ref2 = void 0 === t ? {} : t,
      e = _ref2.event,
      n = _ref2.skipTransition;

  if (n) return this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses(), [Promise.resolve()];
  u(function () {
    _this2.triggerEvent("animationInStart"), document.documentElement.classList.remove("is-animating");
  });
  var i = this.getAnimationPromises("in");
  return Promise.all(i).then(function () {
    _this2.triggerEvent("animationInDone"), _this2.triggerEvent("transitionEnd", e), _this2.cleanupAnimationClasses();
  }), i;
},
    S = function S(t) {
  if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t) return null;
  var e = decodeURIComponent(t);
  var n = document.getElementById(t) || document.getElementById(e) || l("a[name='".concat(h(t), "']")) || l("a[name='".concat(h(e), "']"));
  return n || "top" !== t || (n = document.body), n;
};

var b = "transition",
    y = "transitionend",
    k = "animation",
    U = "animationend";

function L(t) {
  var e = this.options.animationSelector;
  if (!1 === e) return [Promise.resolve()];
  var n = c(e, document.body);
  if (!n.length) return console.warn("[swup] No elements found matching animationSelector `".concat(e, "`")), [Promise.resolve()];
  var i = n.map(function (t) {
    return function (t) {
      var _ref3 = function (t, e) {
        void 0 === e && (e = null);
        var n = window.getComputedStyle(t),
            i = "".concat(b, "Duration"),
            s = "".concat(k, "Delay"),
            o = "".concat(k, "Duration"),
            r = n["".concat(b, "Delay")].split(", "),
            a = (n[i] || "").split(", "),
            l = C(r, a),
            c = (n[s] || "").split(", "),
            u = (n[o] || "").split(", "),
            h = C(c, u);
        var d = "",
            p = 0,
            g = 0;
        return "transition" === e ? l > 0 && (d = "transition", p = l, g = a.length) : "animation" === e ? h > 0 && (d = "animation", p = h, g = u.length) : (p = Math.max(l, h), d = p > 0 ? l > h ? "transition" : "animation" : null, g = d ? "transition" === d ? a.length : u.length : 0), {
          type: d,
          timeout: p,
          propCount: g
        };
      }(t),
          e = _ref3.type,
          n = _ref3.timeout,
          i = _ref3.propCount;

      if (e && n) return new Promise(function (s) {
        var o = "transition" === e ? y : U,
            r = performance.now();
        var a = 0;

        var l = function l() {
          t.removeEventListener(o, c), s();
        },
            c = function c(e) {
          if (e.target === t) {
            if (!function (t) {
              return [y, U].includes(t.type);
            }(e)) throw new Error("Not a transition or animation event.");
            (performance.now() - r) / 1e3 < e.elapsedTime || ++a >= i && l();
          }
        };

        setTimeout(function () {
          a < i && l();
        }, n + 1), t.addEventListener(o, c);
      });
    }(t);
  }).filter(Boolean);
  return i.length ? i : (console.warn("[swup] No CSS animation duration defined on elements matching `".concat(e, "`")), [Promise.resolve()]);
}

function C(t, e) {
  for (; t.length < e.length;) {
    t = t.concat(t);
  }

  return Math.max.apply(Math, _toConsumableArray(e.map(function (e, n) {
    return d(e) + d(t[n]);
  })));
}

void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (b = "WebkitTransition", y = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (k = "WebkitAnimation", U = "webkitAnimationEnd");

var T = function T(t) {
  var e = p(t.responseText, this.options.containers);
  return e ? _objectSpread({}, e, {
    responseURL: t.responseURL || window.location.href
  }) : (console.warn("[swup] Received page is invalid."), null);
};

function H(t) {
  var _this3 = this;

  var e = this.options.requestHeaders,
      n = t.url;
  return this.cache.exists(n) ? (this.triggerEvent("pageRetrievedFromCache"), Promise.resolve(this.cache.getPage(n))) : new Promise(function (i, s) {
    g(_objectSpread({}, t, {
      headers: e
    }), function (t) {
      if (500 === t.status) return _this3.triggerEvent("serverError"), void s(n);

      var e = _this3.getPageData(t);

      if (!e || !e.blocks.length) return void s(n);

      var o = _objectSpread({}, e, {
        url: n
      });

      _this3.cache.cacheUrl(o), _this3.triggerEvent("pageLoaded"), i(o);
    });
  });
}

var R = function R(t) {
  var _this4 = this;

  var _ref4 = void 0 === t ? {} : t,
      e = _ref4.event,
      n = _ref4.skipTransition;

  var i = e instanceof PopStateEvent;
  if (n) return this.triggerEvent("animationSkipped"), [Promise.resolve()];
  this.triggerEvent("animationOutStart"), document.documentElement.classList.add("is-changing", "is-leaving", "is-animating"), i && document.documentElement.classList.add("is-popstate");
  var s = this.getAnimationPromises("out");
  return Promise.all(s).then(function () {
    _this4.triggerEvent("animationOutDone");
  }), s;
};

function A(t) {
  var e = t.url;
  this.shouldIgnoreVisit(e) ? window.location.href = e : this.performPageLoad(t);
}

function $(t) {
  var _this5 = this;

  var _ref5 = null != t ? t : {},
      e = _ref5.url,
      n = _ref5.event,
      a = _ref5.customTransition,
      _ref5$history = _ref5.history,
      l = _ref5$history === void 0 ? "push" : _ref5$history,
      c = n instanceof PopStateEvent,
      u = this.shouldSkipTransition({
    url: e,
    event: n
  });

  this.triggerEvent("transitionStart", n), this.updateTransition(s(), e, a), null != a && document.documentElement.classList.add("to-".concat(i(a)));
  var h = this.leavePage({
    event: n,
    skipTransition: u
  }),
      d = this.fetchPage(t);

  if (!c) {
    var _t3 = e + (this.scrollToElement || "");

    "replace" === l ? r(_t3) : o(_t3);
  }

  this.currentPageUrl = s(), Promise.all([d].concat(_toConsumableArray(h))).then(function (t) {
    var _t4 = _slicedToArray(t, 1),
        e = _t4[0];

    _this5.renderPage(e, {
      event: n,
      skipTransition: u
    });
  })["catch"](function (t) {
    void 0 !== t && (_this5.options.skipPopStateHandling = function () {
      return window.location = t, !0;
    }, history.go(-1));
  });
}

var _ = function _(t) {
  var e = t.blocks,
      n = t.title;
  return e.forEach(function (t, e) {
    document.body.querySelector("[data-swup=\"".concat(e, "\"]")).outerHTML = t;
  }), document.title = n, Promise.resolve();
};

function x(t, e) {
  var n = this._handlers[t];
  n ? n.push(e) : console.warn("Unsupported event ".concat(t, "."));
}

function I(t, e) {
  var _this6 = this;

  if (t && e) {
    var _n2 = this._handlers[t];
    _n2.includes(e) ? this._handlers[t] = _n2.filter(function (t) {
      return t !== e;
    }) : console.warn("Handler for event '".concat(t, "' not found."));
  } else t ? this._handlers[t] = [] : Object.keys(this._handlers).forEach(function (t) {
    _this6._handlers[t] = [];
  });
}

function M(t, e) {
  this._handlers[t].forEach(function (t) {
    try {
      t(e);
    } catch (t) {
      console.error(t);
    }
  });

  var n = new CustomEvent("swup:".concat(t), {
    detail: t
  });
  document.dispatchEvent(n);
}

var q = function q(t) {
  if (null != t && t.isSwupPlugin) {
    if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
  } else console.error("Not a swup plugin instance", t);
};

function D(t) {
  var e = this.findPlugin(t);
  if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter(function (t) {
    return t !== e;
  }), this.plugins;
  console.error("No such plugin", e);
}

function N(t) {
  return this.plugins.find(function (e) {
    return e === t || e.name === t;
  });
}

var W = function W(t, e) {
  var _this7 = this;

  var _ref6 = void 0 === e ? {} : e,
      n = _ref6.event,
      i = _ref6.skipTransition;

  if (document.documentElement.classList.remove("is-leaving"), !this.isSameResolvedUrl(s(), t.url)) return;

  var _m$fromUrl = m.fromUrl(t.responseURL),
      o = _m$fromUrl.url;

  this.isSameResolvedUrl(s(), o) || (this.cache.cacheUrl(_objectSpread({}, t, {
    url: o
  })), this.currentPageUrl = s(), r(o)), i || document.documentElement.classList.add("is-rendering"), this.triggerEvent("willReplaceContent", n), this.replaceContent(t).then(function () {
    _this7.triggerEvent("contentReplaced", n), _this7.triggerEvent("pageView", n), _this7.options.cache || _this7.cache.empty(), _this7.enterPage({
      event: n,
      skipTransition: i
    }), _this7.scrollToElement = null;
  });
};

function O(t, e, n) {
  this.transition = {
    from: t,
    to: e,
    custom: n
  };
}

function V(t) {
  var e = t.event;
  return !(!(e instanceof PopStateEvent) || this.options.animateHistoryBrowsing);
}

var B =
/*#__PURE__*/
function () {
  function B(t) {
    _classCallCheck(this, B);

    void 0 === t && (t = {}), this.version = "3.1.1", this._handlers = {
      animationInDone: [],
      animationInStart: [],
      animationOutDone: [],
      animationOutStart: [],
      animationSkipped: [],
      clickLink: [],
      contentReplaced: [],
      disabled: [],
      enabled: [],
      openPageInNewTab: [],
      pageLoaded: [],
      pageRetrievedFromCache: [],
      pageView: [],
      popState: [],
      samePage: [],
      samePageWithHash: [],
      serverError: [],
      transitionStart: [],
      transitionEnd: [],
      willReplaceContent: []
    }, this.scrollToElement = null, this.options = void 0, this.plugins = [], this.transition = {}, this.cache = void 0, this.currentPageUrl = s(), this.delegatedListeners = {}, this.boundPopStateHandler = void 0, this.loadPage = A, this.performPageLoad = $, this.leavePage = R, this.renderPage = W, this.replaceContent = _, this.enterPage = P, this.triggerEvent = M, this.delegateEvent = a, this.on = x, this.off = I, this.updateTransition = O, this.shouldSkipTransition = V, this.getAnimationPromises = L, this.getPageData = T, this.fetchPage = H, this.getAnchorElement = S, this.log = function () {}, this.use = q, this.unuse = D, this.findPlugin = N, this.getCurrentUrl = s, this.cleanupAnimationClasses = w, this.defaults = {
      animateHistoryBrowsing: !1,
      animationSelector: '[class*="transition-"]',
      cache: !0,
      containers: ["#swup"],
      ignoreVisit: function ignoreVisit(t, e) {
        var _ref7 = void 0 === e ? {} : e,
            n = _ref7.el;

        return !(null == n || !n.closest("[data-no-swup]"));
      },
      linkSelector: "a[href]",
      plugins: [],
      resolveUrl: function resolveUrl(t) {
        return t;
      },
      requestHeaders: {
        "X-Requested-With": "swup",
        Accept: "text/html, application/xhtml+xml"
      },
      skipPopStateHandling: function skipPopStateHandling(t) {
        var e;
        return "swup" !== (null === (e = t.state) || void 0 === e ? void 0 : e.source);
      }
    }, this.options = _objectSpread({}, this.defaults, {}, t), this.boundPopStateHandler = this.popStateHandler.bind(this), this.cache = new E(this), this.enable();
  }

  _createClass(B, [{
    key: "enable",
    value: function enable() {
      var _this8 = this;

      "undefined" != typeof Promise ? (this.delegatedListeners.click = a(this.options.linkSelector, "click", this.linkClickHandler.bind(this)), window.addEventListener("popstate", this.boundPopStateHandler), f(document.documentElement, this.options.containers), this.options.plugins.forEach(function (t) {
        return _this8.use(t);
      }), r(), this.triggerEvent("enabled"), document.documentElement.classList.add("swup-enabled"), this.triggerEvent("pageView")) : console.warn("Promise is not supported");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this9 = this;

      this.delegatedListeners.click.destroy(), window.removeEventListener("popstate", this.boundPopStateHandler), this.cache.empty(), this.options.plugins.forEach(function (t) {
        _this9.unuse(t);
      }), c("[data-swup]").forEach(function (t) {
        t.removeAttribute("data-swup");
      }), this.off(), this.triggerEvent("disabled"), document.documentElement.classList.remove("swup-enabled");
    }
  }, {
    key: "shouldIgnoreVisit",
    value: function shouldIgnoreVisit(t, e) {
      var _ref8 = void 0 === e ? {} : e,
          n = _ref8.el,
          i = _ref8.event;

      var _m$fromUrl2 = m.fromUrl(t),
          s = _m$fromUrl2.origin,
          o = _m$fromUrl2.url,
          r = _m$fromUrl2.hash;

      return s !== window.location.origin || !(!n || !this.triggerWillOpenNewWindow(n)) || !!this.options.ignoreVisit(o + r, {
        el: n,
        event: i
      });
    }
  }, {
    key: "linkClickHandler",
    value: function linkClickHandler(t) {
      var e = t.delegateTarget,
          _m$fromElement = m.fromElement(e),
          n = _m$fromElement.href,
          i = _m$fromElement.url,
          o = _m$fromElement.hash;

      if (this.shouldIgnoreVisit(n, {
        el: e,
        event: t
      })) return;
      if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return void this.triggerEvent("openPageInNewTab", t);
      if (0 !== t.button) return;
      if (this.triggerEvent("clickLink", t), t.preventDefault(), !i || i === s()) return void this.handleLinkToSamePage(i, o, t);
      if (this.isSameResolvedUrl(i, s())) return;
      this.scrollToElement = o || null;
      var r = e.getAttribute("data-swup-transition") || void 0;
      var a;
      var l = e.getAttribute("data-swup-history");
      l && ["push", "replace"].includes(l) && (a = l), this.performPageLoad({
        url: i,
        customTransition: r,
        history: a
      });
    }
  }, {
    key: "handleLinkToSamePage",
    value: function handleLinkToSamePage(t, e, n) {
      if (e) {
        if (this.triggerEvent("samePageWithHash", n), !S(e)) return console.warn("Element for offset not found (#".concat(e, ")"));
        r(t + e);
      } else this.triggerEvent("samePage", n);
    }
  }, {
    key: "triggerWillOpenNewWindow",
    value: function triggerWillOpenNewWindow(t) {
      return !!t.matches('[download], [target="_blank"]');
    }
  }, {
    key: "popStateHandler",
    value: function popStateHandler(t) {
      var e, n;
      if (this.options.skipPopStateHandling(t)) return;
      if (this.isSameResolvedUrl(s(), this.currentPageUrl)) return;
      var i = null !== (e = null === (n = t.state) || void 0 === n ? void 0 : n.url) && void 0 !== e ? e : location.href;
      if (this.shouldIgnoreVisit(i, {
        event: t
      })) return;

      var _m$fromUrl3 = m.fromUrl(i),
          o = _m$fromUrl3.url,
          r = _m$fromUrl3.hash;

      r ? this.scrollToElement = r : t.preventDefault(), this.triggerEvent("popState", t), this.options.animateHistoryBrowsing || (document.documentElement.classList.remove("is-animating"), w()), this.performPageLoad({
        url: o,
        event: t
      });
    }
  }, {
    key: "resolveUrl",
    value: function resolveUrl(t) {
      if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
      var e = this.options.resolveUrl(t);
      return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
    }
  }, {
    key: "isSameResolvedUrl",
    value: function isSameResolvedUrl(t, e) {
      return this.resolveUrl(t) === this.resolveUrl(e);
    }
  }]);

  return B;
}();

exports["default"] = B;