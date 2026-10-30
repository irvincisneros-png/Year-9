/* Generated from vaccine-response.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Vaccine / immune response — primary vs secondary response graph */
function VaccineResponse() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    phase = _useState2[0],
    setPhase = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    playing = _useState4[0],
    setPlaying = _useState4[1];
  useEffect(function () {
    if (!playing) return;
    var id = setInterval(function () {
      return setPhase(function (p) {
        return p >= 120 ? 120 : p + 1;
      });
    }, 80);
    return function () {
      return clearInterval(id);
    };
  }, [playing]);
  var W = 540,
    H = 240,
    margin = 36;

  // First exposure (vaccine or infection) at t=10, second at t=70
  var primary = function primary(x) {
    if (x < 10) return 0;
    var t = x - 10;
    return t < 20 ? 25 * (1 - Math.exp(-t / 8)) : 25 * Math.exp(-(t - 20) / 25);
  };
  var secondary = function secondary(x) {
    if (x < 70) return 0;
    var t = x - 70;
    return t < 8 ? 90 * (1 - Math.exp(-t / 3)) : 90 * Math.exp(-(t - 8) / 30);
  };
  var total = function total(x) {
    return primary(x) + secondary(x);
  };
  var y = function y(v) {
    return H - margin - v / 100 * (H - margin * 2);
  };
  var xx = function xx(t) {
    return margin + t / 120 * (W - margin * 2);
  };
  var buildPath = function buildPath(fn, upTo) {
    var d = "";
    for (var t = 0; t <= upTo; t += 0.5) {
      d += (d ? "L" : "M") + " " + xx(t) + " " + y(fn(t)) + " ";
    }
    return d;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      maxHeight: 280,
      background: "var(--bg-elev)",
      borderRadius: 8,
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: margin,
    x2: W - 10,
    y1: H - margin,
    y2: H - margin,
    stroke: "var(--ink-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: margin,
    x2: margin,
    y1: margin,
    y2: H - margin,
    stroke: "var(--ink-soft)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: W / 2,
    y: H - 6,
    fontSize: "11",
    fill: "var(--ink-muted)",
    textAnchor: "middle"
  }, "Time \u2192"), /*#__PURE__*/React.createElement("text", {
    x: "10",
    y: H / 2,
    fontSize: "11",
    fill: "var(--ink-muted)",
    textAnchor: "middle",
    transform: "rotate(-90, 10, ".concat(H / 2, ")")
  }, "Antibody level"), phase >= 10 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: xx(10),
    x2: xx(10),
    y1: margin,
    y2: H - margin,
    stroke: "var(--accent)",
    strokeDasharray: "3 3",
    strokeWidth: "1",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: xx(10),
    y: margin - 6,
    fontSize: "10",
    fill: "var(--accent)",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)"
  }, "1st exposure (vaccine)")), phase >= 70 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: xx(70),
    x2: xx(70),
    y1: margin,
    y2: H - margin,
    stroke: "#dc2626",
    strokeDasharray: "3 3",
    strokeWidth: "1",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: xx(70),
    y: margin - 6,
    fontSize: "10",
    fill: "#dc2626",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)"
  }, "2nd exposure (real pathogen)")), /*#__PURE__*/React.createElement("path", {
    d: buildPath(total, phase),
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), phase > 30 && /*#__PURE__*/React.createElement("text", {
    x: xx(25),
    y: y(28),
    fontSize: "11",
    fill: "var(--ink-soft)"
  }, "Primary response (slow, small)"), phase > 85 && /*#__PURE__*/React.createElement("text", {
    x: xx(80),
    y: y(92),
    fontSize: "11",
    fill: "#dc2626",
    fontWeight: "600"
  }, "Secondary response (fast, large)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: function onClick() {
      return setPlaying(function (p) {
        return !p;
      });
    }
  }, playing ? "Pause" : "Play"), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: function onClick() {
      setPhase(0);
      setPlaying(true);
    }
  }, "Restart"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "120",
    value: phase,
    onChange: function onChange(e) {
      setPhase(+e.target.value);
      setPlaying(false);
    },
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      marginTop: 10,
      padding: 10,
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: 8
    }
  }, "The first exposure (a vaccine, or an infection) triggers a slow, small ", /*#__PURE__*/React.createElement(G, {
    term: "b-cell"
  }, "B-cell"), " response. Crucially, some B-cells become ", /*#__PURE__*/React.createElement(G, {
    term: "memory cell"
  }, "memory cells"), ". If the real pathogen arrives later, the memory cells recognise it instantly \u2014 the second response is ", /*#__PURE__*/React.createElement("strong", null, "much bigger and faster"), ", so the person either doesn't get sick or has only mild symptoms."));
}
window.VaccineResponse = VaccineResponse;
