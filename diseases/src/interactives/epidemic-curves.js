/* Generated from epidemic-curves.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Endemic / epidemic / pandemic animated case curves */
function EpidemicCurves() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    t = _useState2[0],
    setT = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    playing = _useState4[0],
    setPlaying = _useState4[1];
  useEffect(function () {
    if (!playing) return;
    var id = setInterval(function () {
      return setT(function (x) {
        return (x + 1) % 120;
      });
    }, 80);
    return function () {
      return clearInterval(id);
    };
  }, [playing]);
  var W = 520,
    H = 200,
    margin = 30;
  var curveW = W - margin * 2;
  var curveH = H - margin - 10;
  var endemic = function endemic(x) {
    return 12 + Math.sin(x * 0.15) * 3 + Math.sin(x * 0.4) * 2;
  };
  var epidemic = function epidemic(x) {
    var peak = 50;
    return 8 + 120 * Math.exp(-Math.pow((x - peak) / 14, 2));
  };
  var pandemic = function pandemic(x) {
    var peak = 55;
    return 5 + 180 * Math.exp(-Math.pow((x - peak) / 25, 2)) + (x > 80 ? 30 * Math.exp(-Math.pow((x - 95) / 10, 2)) : 0);
  };
  var buildPath = function buildPath(fn, upTo) {
    var d = "";
    for (var x = 0; x <= upTo; x++) {
      var px = margin + x / 120 * curveW;
      var py = margin + curveH - Math.min(fn(x), 200) / 200 * curveH;
      d += (x === 0 ? "M" : "L") + " " + px + " " + py + " ";
    }
    return d;
  };
  var Card = function Card(_ref) {
    var fn = _ref.fn,
      color = _ref.color,
      label = _ref.label,
      desc = _ref.desc,
      example = _ref.example;
    var d = buildPath(fn, t);
    var px = margin + t / 120 * curveW;
    var py = margin + curveH - Math.min(fn(t), 200) / 200 * curveH;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg-elev)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color
      }
    }), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: 14
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ink-muted)",
        marginBottom: 6,
        minHeight: 32
      }
    }, desc), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 ".concat(W, " ").concat(H),
      style: {
        width: "100%",
        height: 120,
        background: "var(--bg-sunken)",
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("line", {
      x1: margin,
      x2: W - 10,
      y1: margin + curveH,
      y2: margin + curveH,
      stroke: "var(--border)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: margin,
      x2: margin,
      y1: margin,
      y2: margin + curveH,
      stroke: "var(--border)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: color,
      strokeWidth: "2.5",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: px,
      cy: py,
      r: "4",
      fill: color
    }), /*#__PURE__*/React.createElement("text", {
      x: margin,
      y: H - 4,
      fontSize: "10",
      fill: "var(--ink-muted)",
      fontFamily: "var(--font-mono)"
    }, "time \u2192"), /*#__PURE__*/React.createElement("text", {
      x: "4",
      y: margin + 10,
      fontSize: "10",
      fill: "var(--ink-muted)",
      fontFamily: "var(--font-mono)",
      transform: "rotate(-90, 8, ".concat(margin + 10, ")")
    }, "cases")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-muted)",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("em", null, example)));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
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
      return setT(0);
    }
  }, "Restart"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "119",
    value: t,
    onChange: function onChange(e) {
      setT(+e.target.value);
      setPlaying(false);
    },
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    fn: endemic,
    color: "var(--emerald)",
    label: "Endemic",
    desc: "Constantly present at a low, predictable level.",
    example: "Malaria in sub-Saharan Africa"
  }), /*#__PURE__*/React.createElement(Card, {
    fn: epidemic,
    color: "var(--orange)",
    label: "Epidemic",
    desc: "A sudden spike above expected levels in a region.",
    example: "Measles in Samoa, 2019"
  }), /*#__PURE__*/React.createElement(Card, {
    fn: pandemic,
    color: "#dc2626",
    label: "Pandemic",
    desc: "An epidemic across many countries / continents.",
    example: "COVID-19, 2020\u201323"
  })));
}
window.EpidemicCurves = EpidemicCurves;
