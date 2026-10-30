/* Generated from three-lines.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Three lines of defence — clickable body diagram */
function ThreeLines() {
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    line = _useState2[0],
    setLine = _useState2[1];
  var info = {
    1: {
      title: "First line: physical & chemical barriers",
      color: "var(--emerald)",
      desc: "Stops pathogens getting in. Most pathogens never get past this line.",
      items: [{
        name: "Skin",
        detail: "Waterproof, multi-layered physical barrier."
      }, {
        name: "Mucus & cilia",
        detail: "Line airways; trap and sweep out pathogens."
      }, {
        name: "Stomach acid",
        detail: "Kills most bacteria in swallowed food."
      }, {
        name: "Tears & saliva",
        detail: "Contain lysozyme, which destroys bacterial cell walls."
      }, {
        name: "Sweat",
        detail: "Slightly acidic — slows bacterial growth."
      }, {
        name: "Good bacteria",
        detail: "Out-compete pathogens in gut, skin, mouth."
      }]
    },
    2: {
      title: "Second line: non-specific (innate) immune response",
      color: "var(--orange)",
      desc: "Works the same way for every pathogen. Fast but not targeted.",
      items: [{
        name: "Inflammation",
        detail: "Blood vessels widen; area goes red, warm, swollen — packed with immune cells."
      }, {
        name: "Phagocytosis",
        detail: "White blood cells (macrophages, neutrophils) engulf and digest pathogens."
      }, {
        name: "Fever",
        detail: "Hypothalamus raises body temp to slow bacterial growth."
      }, {
        name: "Natural killer cells",
        detail: "Destroy virus-infected and cancerous body cells."
      }]
    },
    3: {
      title: "Third line: specific (adaptive) immune response",
      color: "#dc2626",
      desc: "Specifically targets that one pathogen — and remembers it.",
      items: [{
        name: "B-cells",
        detail: "Produce antibodies that bind to a specific antigen."
      }, {
        name: "Helper T-cells",
        detail: "Activate other immune cells."
      }, {
        name: "Killer T-cells",
        detail: "Destroy body cells infected with a virus."
      }, {
        name: "Memory cells",
        detail: "Persist for years — why you usually only get chickenpox once."
      }]
    }
  };
  var cur = info[line];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 220",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "25",
    rx: "18",
    ry: "22",
    fill: "var(--bg-elev)",
    stroke: "var(--ink-soft)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30 50 Q 30 45 42 45 L 78 45 Q 90 45 90 50 L 95 120 Q 95 140 85 145 L 85 200 L 75 200 L 70 150 L 60 150 L 50 150 L 45 200 L 35 200 L 35 145 Q 25 140 25 120 Z",
    fill: "var(--bg-elev)",
    stroke: "var(--ink-soft)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30 50 Q 30 45 42 45 L 78 45 Q 90 45 90 50 L 95 120 Q 95 140 85 145 L 85 200 L 75 200 L 70 150 L 60 150 L 50 150 L 45 200 L 35 200 L 35 145 Q 25 140 25 120 Z",
    fill: "none",
    stroke: line >= 1 ? info[1].color : "transparent",
    strokeWidth: "3",
    opacity: line === 1 ? 0.8 : 0.3,
    className: "pulse"
  }), line >= 2 && /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "95",
    r: "8",
    fill: "none",
    stroke: info[2].color,
    strokeWidth: "2",
    opacity: line === 2 ? 0.9 : 0.3
  }), line >= 2 && /*#__PURE__*/React.createElement("circle", {
    cx: "45",
    cy: "110",
    r: "5",
    fill: "none",
    stroke: info[2].color,
    strokeWidth: "2",
    opacity: line === 2 ? 0.9 : 0.3
  }), line >= 2 && /*#__PURE__*/React.createElement("circle", {
    cx: "75",
    cy: "108",
    r: "5",
    fill: "none",
    stroke: info[2].color,
    strokeWidth: "2",
    opacity: line === 2 ? 0.9 : 0.3
  }), line >= 3 && /*#__PURE__*/React.createElement("path", {
    d: "M 50 95 L 55 100 L 65 90 L 70 95",
    fill: "none",
    stroke: info[3].color,
    strokeWidth: "2",
    opacity: line === 3 ? 0.9 : 0.3
  }), line >= 3 && /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "125",
    r: "3",
    fill: info[3].color,
    opacity: line === 3 ? 0.9 : 0.3
  }), line >= 3 && /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "135",
    r: "3",
    fill: info[3].color,
    opacity: line === 3 ? 0.9 : 0.3
  }), line >= 3 && /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "130",
    r: "3",
    fill: info[3].color,
    opacity: line === 3 ? 0.9 : 0.3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      marginTop: 8
    }
  }, [1, 2, 3].map(function (n) {
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: function onClick() {
        return setLine(n);
      },
      style: {
        padding: "8px 12px",
        border: "1.5px solid " + (line === n ? info[n].color : "var(--border)"),
        background: line === n ? info[n].color : "var(--bg-elev)",
        color: line === n ? "white" : "var(--ink)",
        borderRadius: 8,
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        textAlign: "left"
      }
    }, "Line ", n);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-elev)",
      border: "2px solid ".concat(cur.color),
      borderRadius: "var(--radius)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: cur.color,
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Line ", line), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 6px",
      fontSize: 16
    }
  }, cur.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-muted)",
      margin: "0 0 12px"
    }
  }, cur.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8
    }
  }, cur.items.map(function (it) {
    return /*#__PURE__*/React.createElement("div", {
      key: it.name,
      style: {
        padding: 10,
        background: "var(--bg-sunken)",
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: 13
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ink-muted)",
        marginTop: 2
      }
    }, it.detail));
  })))));
}
window.ThreeLines = ThreeLines;
