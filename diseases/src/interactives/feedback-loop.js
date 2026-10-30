/* Generated from feedback-loop.jsx by tools/build.js. Edit the .jsx, not this file. */
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
/* Negative feedback loop — body temperature simulator */
function FeedbackLoopSim() {
  var _useState = useState(20),
    _useState2 = _slicedToArray(_useState, 2),
    ambient = _useState2[0],
    setAmbient = _useState2[1];
  var _useState3 = useState(37),
    _useState4 = _slicedToArray(_useState3, 2),
    bodyTemp = _useState4[0],
    setBodyTemp = _useState4[1];
  var _useState5 = useState(true),
    _useState6 = _slicedToArray(_useState5, 2),
    feedbackOn = _useState6[0],
    setFeedbackOn = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    running = _useState8[0],
    setRunning = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    history = _useState0[0],
    setHistory = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    activeResponse = _useState10[0],
    setActiveResponse = _useState10[1];
  useEffect(function () {
    if (!running) return;
    var id = setInterval(function () {
      setBodyTemp(function (t) {
        // heat exchange with environment (small drift toward ambient)
        var drift = (ambient - t) * 0.01;
        var corr = 0;
        var response = null;
        if (feedbackOn) {
          if (t < 36.8) {
            // too cold: shiver, constrict → warm up
            corr = (37 - t) * 0.5;
            response = "cold";
          } else if (t > 37.2) {
            // too hot: sweat, vasodilate → cool down
            corr = (37 - t) * 0.5;
            response = "hot";
          } else {
            response = "stable";
          }
        }
        setActiveResponse(response);
        var next = +(t + drift + corr).toFixed(3);
        setHistory(function (h) {
          return [].concat(_toConsumableArray(h.slice(-199)), [next]);
        });
        return next;
      });
    }, 100);
    return function () {
      return clearInterval(id);
    };
  }, [ambient, feedbackOn, running]);

  // chart
  var W = 480,
    H = 140;
  var minT = 32,
    maxT = 42;
  var y = function y(t) {
    return H - (t - minT) / (maxT - minT) * H;
  };
  var path = history.map(function (t, i) {
    return "".concat(i === 0 ? "M" : "L", " ").concat(i / 200 * W, " ").concat(y(t));
  }).join(" ");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 6
    }
  }, "Ambient temperature: ", /*#__PURE__*/React.createElement("strong", null, ambient, "\xB0C")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "-10",
    max: "45",
    step: "1",
    value: ambient,
    onChange: function onChange(e) {
      return setAmbient(+e.target.value);
    },
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u221210"), /*#__PURE__*/React.createElement("span", null, "20"), /*#__PURE__*/React.createElement("span", null, "45")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: feedbackOn,
    onChange: function onChange(e) {
      return setFeedbackOn(e.target.checked);
    }
  }), "Homeostasis ON (negative feedback active)")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: function onClick() {
      return setRunning(function (r) {
        return !r;
      });
    }
  }, running ? "Pause" : "Resume"), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: function onClick() {
      setBodyTemp(37);
      setHistory([]);
    }
  }, "Reset"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, "Core body temp"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums",
      color: bodyTemp < 35 || bodyTemp > 39 ? "#dc2626" : "var(--ink)"
    }
  }, bodyTemp.toFixed(1), "\xB0C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      minHeight: 18
    }
  }, activeResponse === "cold" && "🥶 Shivering · vasoconstriction · thyroxine released", activeResponse === "hot" && "🥵 Sweating · vasodilation · respiratory loss", activeResponse === "stable" && "✓ Within safe range", !feedbackOn && "⚠ No response — drifting to ambient")))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      height: 150,
      marginTop: 16,
      background: "var(--bg-elev)",
      borderRadius: 8,
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: y(37.5),
    width: W,
    height: y(35.5) - y(37.5),
    fill: "var(--emerald-soft)",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: W,
    y1: y(37),
    y2: y(37),
    stroke: "var(--emerald)",
    strokeWidth: "1",
    strokeDasharray: "4 4",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: W,
    y1: y(35),
    y2: y(35),
    stroke: "#dc2626",
    strokeWidth: "0.5",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: W,
    y1: y(40),
    y2: y(40),
    stroke: "#dc2626",
    strokeWidth: "0.5",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: y(37) - 4,
    fontSize: "10",
    fill: "var(--emerald)",
    fontFamily: "var(--font-mono)"
  }, "set 37\xB0C"), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: y(35) - 4,
    fontSize: "9",
    fill: "#dc2626",
    fontFamily: "var(--font-mono)"
  }, "hypothermia"), /*#__PURE__*/React.createElement("text", {
    x: "6",
    y: y(40) - 4,
    fontSize: "9",
    fill: "#dc2626",
    fontFamily: "var(--font-mono)"
  }, "enzymes denature")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      marginTop: 6
    }
  }, "Try: drop ambient to \u22125\xB0C and watch the body defend 37\xB0C. Now turn homeostasis OFF \u2014 see how fast cells would be in trouble."));
}
window.FeedbackLoopSim = FeedbackLoopSim;
