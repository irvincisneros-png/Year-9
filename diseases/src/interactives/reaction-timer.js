/* Generated from reaction-timer.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Reaction time tester — measures user's reaction to visual stimulus */
function ReactionTimer() {
  var _useState = useState("idle"),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1]; // idle, waiting, go, result, tooEarly
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    startT = _useState4[0],
    setStartT = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    rt = _useState6[0],
    setRt = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    history = _useState8[0],
    setHistory = _useState8[1];
  var timerRef = useRef(null);
  var start = function start() {
    setState("waiting");
    setRt(null);
    var delay = 1200 + Math.random() * 2500;
    timerRef.current = setTimeout(function () {
      setStartT(performance.now());
      setState("go");
    }, delay);
  };
  var click = function click() {
    if (state === "idle" || state === "result" || state === "tooEarly") {
      start();
      return;
    }
    if (state === "waiting") {
      clearTimeout(timerRef.current);
      setState("tooEarly");
      return;
    }
    if (state === "go") {
      var dt = performance.now() - startT;
      setRt(dt);
      setHistory(function (h) {
        return [].concat(_toConsumableArray(h), [dt]);
      });
      setState("result");
    }
  };
  useEffect(function () {
    return function () {
      return clearTimeout(timerRef.current);
    };
  }, []);
  var avg = history.length ? history.reduce(function (a, b) {
    return a + b;
  }, 0) / history.length : 0;
  var best = history.length ? Math.min.apply(Math, _toConsumableArray(history)) : 0;
  var cls = {
    idle: {
      bg: "var(--bg-sunken)",
      txt: "Click to start"
    },
    waiting: {
      bg: "#fee2e2",
      txt: "Wait for green…"
    },
    go: {
      bg: "#bbf7d0",
      txt: "CLICK NOW!"
    },
    result: {
      bg: "var(--emerald-soft)",
      txt: "".concat(rt === null || rt === void 0 ? void 0 : rt.toFixed(0), " ms \u2014 click to try again")
    },
    tooEarly: {
      bg: "#fef3c7",
      txt: "Too early! Click to retry"
    }
  }[state];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: click,
    style: {
      width: "100%",
      minHeight: 160,
      borderRadius: "var(--radius)",
      border: "2px solid var(--border)",
      background: cls.bg,
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "var(--ink)",
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "background 0.1s"
    }
  }, cls.txt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12,
      marginTop: 12,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "Last"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.25rem",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, rt ? "".concat(rt.toFixed(0), " ms") : "—")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "Average (", history.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.25rem",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, history.length ? "".concat(avg.toFixed(0), " ms") : "—")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "Best"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.25rem",
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums"
    }
  }, history.length ? "".concat(best.toFixed(0), " ms") : "—"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      marginTop: 12,
      padding: 10,
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Typical results:"), " conscious visual response \u2248 200\u2013270 ms; elite athletes \u2248 150 ms; reflex (spinal cord only, e.g. knee-jerk) \u2248 50 ms. The signal here has to travel eye \u2192 optic nerve \u2192 visual cortex \u2192 motor cortex \u2192 spinal cord \u2192 arm \u2014 much further than a reflex."), history.length > 1 && /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    style: {
      marginTop: 8
    },
    onClick: function onClick() {
      return setHistory([]);
    }
  }, "Clear history"));
}
window.ReactionTimer = ReactionTimer;
