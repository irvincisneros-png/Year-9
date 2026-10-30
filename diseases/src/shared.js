/* Generated from shared.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global React */
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback,
  useMemo = _React.useMemo,
  createContext = _React.createContext,
  useContext = _React.useContext;

// ——— Progress tracking via localStorage ———
var PROGRESS_KEY = "y9diseases.progress.v1";
var SIZE_KEY = "y9diseases.size.v1";
var THEME_KEY = "y9diseases.theme.v1";
function useLocalStorage(key, initial) {
  var _useState = useState(function () {
      try {
        var raw = localStorage.getItem(key);
        return raw !== null ? JSON.parse(raw) : initial;
      } catch (_unused) {
        return initial;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    v = _useState2[0],
    setV = _useState2[1];
  useEffect(function () {
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch (_unused2) {}
  }, [key, v]);
  return [v, setV];
}

// ——— Dot point wrapper with checkbox ———
function DotPoint(_ref) {
  var id = _ref.id,
    title = _ref.title,
    children = _ref.children,
    progress = _ref.progress,
    setProgress = _ref.setProgress;
  var done = !!progress[id];
  var toggle = function toggle() {
    return setProgress(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, id, !p[id]));
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "dot-point",
    id: "dp-" + id,
    "data-screen-label": id
  }, /*#__PURE__*/React.createElement("header", {
    className: "dp-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dp-id"
  }, id), /*#__PURE__*/React.createElement("h2", {
    className: "dp-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "dp-check" + (done ? " done" : ""),
    onClick: toggle,
    "aria-label": done ? "Mark as not done" : "Mark as done",
    title: done ? "Mark as not done" : "Mark as done"
  }, done && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "dp-body"
  }, children));
}

// ——— Interactive wrapper ———
function Interactive(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "interactive"
  }, /*#__PURE__*/React.createElement("div", {
    className: "interactive-label"
  }, "Interactive"), /*#__PURE__*/React.createElement("div", {
    className: "interactive-title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "interactive-sub"
  }, subtitle), children);
}

// ——— Figure with image + caption ———
function Figure(_ref3) {
  var num = _ref3.num,
    caption = _ref3.caption,
    src = _ref3.src,
    alt = _ref3.alt,
    maxWidth = _ref3.maxWidth,
    children = _ref3.children;
  return /*#__PURE__*/React.createElement("figure", {
    className: "figure",
    style: maxWidth ? {
      maxWidth: maxWidth
    } : undefined
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || caption,
    loading: "lazy"
  }) : children, /*#__PURE__*/React.createElement("figcaption", {
    className: "figure-caption"
  }, num && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Figure ", num), " \u2014 "), caption));
}

// ——— Quiz: multiple choice ———
function MCQ(_ref4) {
  var num = _ref4.num,
    question = _ref4.question,
    options = _ref4.options,
    correct = _ref4.correct,
    explain = _ref4.explain;
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    chosen = _useState4[0],
    setChosen = _useState4[1];
  var locked = chosen !== null;
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quiz-q"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quiz-q-num"
  }, num), /*#__PURE__*/React.createElement("span", null, question)), /*#__PURE__*/React.createElement("div", {
    className: "quiz-options"
  }, options.map(function (o, i) {
    var isCorrect = i === correct;
    var isChosen = chosen === i;
    var cls = "quiz-opt";
    if (locked && isCorrect) cls += " correct";else if (locked && isChosen && !isCorrect) cls += " wrong";
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: cls,
      onClick: function onClick() {
        return !locked && setChosen(i);
      },
      disabled: locked
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        opacity: 0.6,
        minWidth: 16
      }
    }, String.fromCharCode(65 + i)), /*#__PURE__*/React.createElement("span", null, o), locked && isCorrect && /*#__PURE__*/React.createElement("svg", {
      style: {
        marginLeft: "auto"
      },
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })), locked && isChosen && !isCorrect && /*#__PURE__*/React.createElement("svg", {
      style: {
        marginLeft: "auto"
      },
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })));
  })), locked && /*#__PURE__*/React.createElement("div", {
    className: "quiz-feedback"
  }, chosen === correct ? "✓ Correct. " : "Not quite. ", explain));
}

// ——— Short-answer prompt with model answer reveal ———
function WrittenQ(_ref5) {
  var num = _ref5.num,
    question = _ref5.question,
    model = _ref5.model;
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    val = _useState6[0],
    setVal = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    show = _useState8[0],
    setShow = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quiz-q"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quiz-q-num"
  }, num), /*#__PURE__*/React.createElement("span", null, question)), /*#__PURE__*/React.createElement("textarea", {
    className: "response-box",
    value: val,
    onChange: function onChange(e) {
      return setVal(e.target.value);
    },
    placeholder: "Type your answer here\u2026"
  }), model && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "reveal-btn",
    onClick: function onClick() {
      return setShow(function (s) {
        return !s;
      });
    }
  }, show ? "Hide model answer" : "Show model answer"), show && /*#__PURE__*/React.createElement("div", {
    className: "model-answer"
  }, /*#__PURE__*/React.createElement("strong", null, "Model answer: "), model)));
}

// ——— Question group wrapper ———
function Questions(_ref6) {
  var title = _ref6.title,
    children = _ref6.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "0 0 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--ink-muted)",
      fontWeight: 500
    }
  }, "Questions"), /*#__PURE__*/React.createElement("span", null, title)), children);
}

// ——— Sub-nav within a topic (list of dot points) ———
function SubNav(_ref7) {
  var items = _ref7.items,
    progress = _ref7.progress,
    activeId = _ref7.activeId;
  var scrollTo = function scrollTo(id) {
    var el = document.getElementById("dp-" + id);
    if (!el) return;
    var scroller = document.querySelector(".main-scroll") || document.scrollingElement || document.documentElement;
    var rect = el.getBoundingClientRect();
    var sRect = scroller.getBoundingClientRect();
    var offset = scroller === document.scrollingElement || scroller === document.documentElement ? window.scrollY + rect.top - 88 : scroller.scrollTop + (rect.top - sRect.top) - 16;
    scroller.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "sub-nav",
    "aria-label": "Dot point navigation"
  }, items.map(function (item) {
    var done = !!progress[item.id];
    var active = activeId === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      className: "sub-nav-btn" + (done ? " done" : "") + (active ? " active" : ""),
      onClick: function onClick() {
        return scrollTo(item.id);
      },
      title: item.title
    }, item.id, done && " ✓");
  }));
}
Object.assign(window, {
  useLocalStorage: useLocalStorage,
  DotPoint: DotPoint,
  Interactive: Interactive,
  Figure: Figure,
  MCQ: MCQ,
  WrittenQ: WrittenQ,
  Questions: Questions,
  SubNav: SubNav,
  PROGRESS_KEY: PROGRESS_KEY,
  SIZE_KEY: SIZE_KEY,
  THEME_KEY: THEME_KEY
});
