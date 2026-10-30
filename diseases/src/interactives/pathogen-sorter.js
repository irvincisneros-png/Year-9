/* Generated from pathogen-sorter.jsx by tools/build.js. Edit the .jsx, not this file. */
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
/* Drag-and-drop pathogen / disease sorter */
function PathogenSorter() {
  var diseases = [{
    id: "measles",
    name: "Measles",
    cat: "infectious",
    why: "Caused by measles virus."
  }, {
    id: "asthma",
    name: "Asthma",
    cat: "noninfectious",
    why: "Environmental + genetic, not a pathogen."
  }, {
    id: "malaria",
    name: "Malaria",
    cat: "infectious",
    why: "Protozoan (Plasmodium) spread by mosquitoes."
  }, {
    id: "diabetes2",
    name: "Type 2 diabetes",
    cat: "noninfectious",
    why: "Lifestyle + genetic risk factors."
  }, {
    id: "chickenpox",
    name: "Chickenpox",
    cat: "infectious",
    why: "Varicella-zoster virus."
  }, {
    id: "cancer",
    name: "Most cancers",
    cat: "noninfectious",
    why: "Genetic / environmental / lifestyle."
  }, {
    id: "hiv",
    name: "HIV/AIDS",
    cat: "infectious",
    why: "Human immunodeficiency virus."
  }, {
    id: "chd",
    name: "Coronary heart disease",
    cat: "noninfectious",
    why: "Chronic, lifestyle-related."
  }, {
    id: "flu",
    name: "Influenza",
    cat: "infectious",
    why: "Influenza virus, droplet spread."
  }, {
    id: "dementia",
    name: "Dementia",
    cat: "noninfectious",
    why: "Age / degenerative."
  }];
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    placed = _useState2[0],
    setPlaced = _useState2[1]; // id -> "infectious" | "noninfectious"
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dragging = _useState4[0],
    setDragging = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    feedback = _useState6[0],
    setFeedback = _useState6[1]; // id -> correct?

  var unplaced = diseases.filter(function (d) {
    return !placed[d.id];
  });
  var drop = function drop(cat) {
    if (!dragging) return;
    var disease = diseases.find(function (d) {
      return d.id === dragging;
    });
    var correct = disease.cat === cat;
    setPlaced(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, dragging, cat));
    });
    setFeedback(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, dragging, correct));
    });
    setDragging(null);
  };
  var reset = function reset() {
    setPlaced({});
    setFeedback({});
  };
  var score = Object.values(feedback).filter(Boolean).length;
  var total = Object.keys(placed).length;
  var Bucket = function Bucket(_ref) {
    var cat = _ref.cat,
      label = _ref.label,
      color = _ref.color;
    var inBucket = diseases.filter(function (d) {
      return placed[d.id] === cat;
    });
    return /*#__PURE__*/React.createElement("div", {
      onDragOver: function onDragOver(e) {
        return e.preventDefault();
      },
      onDrop: function onDrop() {
        return drop(cat);
      },
      onClick: function onClick() {
        return drop(cat);
      },
      style: {
        flex: 1,
        minHeight: 180,
        padding: 14,
        background: dragging ? color + "22" : "var(--bg-elev)",
        border: "2px dashed ".concat(dragging ? color : "var(--border-strong)"),
        borderRadius: "var(--radius)",
        transition: "all 0.15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: color,
        marginBottom: 10,
        fontSize: 14
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, inBucket.map(function (d) {
      return /*#__PURE__*/React.createElement("div", {
        key: d.id,
        style: {
          padding: "6px 10px",
          borderRadius: 8,
          fontSize: 13,
          background: feedback[d.id] ? "var(--emerald-soft)" : "#fef2f2",
          color: feedback[d.id] ? "var(--emerald-ink)" : "#7f1d1d",
          border: "1px solid ".concat(feedback[d.id] ? "var(--emerald)" : "#dc2626")
        }
      }, feedback[d.id] ? "✓" : "✗", " ", d.name);
    })));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 12,
      minHeight: 40
    }
  }, unplaced.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      key: d.id,
      draggable: true,
      onDragStart: function onDragStart() {
        return setDragging(d.id);
      },
      onDragEnd: function onDragEnd() {
        return setDragging(null);
      },
      onClick: function onClick() {
        return setDragging(dragging === d.id ? null : d.id);
      },
      style: {
        padding: "8px 12px",
        background: dragging === d.id ? "var(--accent)" : "var(--bg-elev)",
        color: dragging === d.id ? "white" : "var(--ink)",
        border: "1px solid var(--border-strong)",
        borderRadius: 8,
        cursor: "grab",
        fontSize: 13,
        fontWeight: 500,
        userSelect: "none"
      }
    }, d.name);
  }), unplaced.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ink-muted)"
    }
  }, "All sorted! Score: ", score, "/", total, ". ", score === total ? "🎉 Perfect." : "Reset to try again.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Bucket, {
    cat: "infectious",
    label: "Infectious (caused by a pathogen)",
    color: "var(--orange)"
  }), /*#__PURE__*/React.createElement(Bucket, {
    cat: "noninfectious",
    label: "Non-infectious (no pathogen)",
    color: "var(--blue)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: reset
  }, "Reset"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)"
    }
  }, "Drag a card into a bucket, or click a card then click a bucket. Mobile-friendly.")), Object.keys(placed).length > 0 && /*#__PURE__*/React.createElement("details", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 500
    }
  }, "Why is each one in that group?"), /*#__PURE__*/React.createElement("ul", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      paddingLeft: 18
    }
  }, diseases.map(function (d) {
    return /*#__PURE__*/React.createElement("li", {
      key: d.id
    }, /*#__PURE__*/React.createElement("strong", null, d.name, ":"), " ", d.why);
  }))));
}
window.PathogenSorter = PathogenSorter;
