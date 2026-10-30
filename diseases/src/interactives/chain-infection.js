/* Generated from chain-infection.jsx by tools/build.js. Edit the .jsx, not this file. */
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
/* Chain of infection — click to break links */
function ChainOfInfection() {
  var links = [{
    id: "pathogen",
    name: "Pathogen",
    desc: "The organism that causes disease.",
    "break": "Antibiotics, disinfectants, pasteurising milk."
  }, {
    id: "reservoir",
    name: "Reservoir",
    desc: "Where the pathogen lives — sick humans, animals, water.",
    "break": "Isolate patients, control mosquito populations."
  }, {
    id: "exit",
    name: "Portal of exit",
    desc: "How pathogen leaves the host — coughs, blood, faeces.",
    "break": "Cover coughs, safe waste disposal."
  }, {
    id: "transmission",
    name: "Transmission",
    desc: "How pathogen travels — droplet, contact, vector.",
    "break": "Masks, handwashing, mosquito nets."
  }, {
    id: "entry",
    name: "Portal of entry",
    desc: "How pathogen enters new host — mouth, wounds, eyes.",
    "break": "Gloves, bandages, safe food handling."
  }, {
    id: "host",
    name: "Susceptible host",
    desc: "A person who can be infected.",
    "break": "Vaccination, good nutrition, rest."
  }];
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    broken = _useState2[0],
    setBroken = _useState2[1];
  var toggle = function toggle(id) {
    return setBroken(function (b) {
      return _objectSpread(_objectSpread({}, b), {}, _defineProperty({}, id, !b[id]));
    });
  };
  var breakCount = Object.values(broken).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      marginBottom: 12,
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Click any link to break it."), " Breaking ", /*#__PURE__*/React.createElement("em", null, "any one"), " stops the chain \u2014 that's the core idea. \xA0Links broken: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--accent)"
    }
  }, breakCount, "/6"), breakCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--emerald)",
      fontWeight: 600
    }
  }, " \u2014 chain stopped \u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 0,
      justifyContent: "center",
      alignItems: "center"
    }
  }, links.map(function (link, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: link.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggle(link.id);
      },
      style: {
        background: broken[link.id] ? "var(--bg-sunken)" : "var(--accent)",
        color: broken[link.id] ? "var(--ink-faint)" : "white",
        border: "2px solid " + (broken[link.id] ? "var(--border-strong)" : "var(--accent)"),
        borderRadius: "50%",
        width: 90,
        height: 90,
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 11,
        fontWeight: 600,
        padding: 4,
        textAlign: "center",
        transition: "all 0.2s",
        opacity: broken[link.id] ? 0.5 : 1,
        textDecoration: broken[link.id] ? "line-through" : "none",
        lineHeight: 1.2
      }
    }, link.name), i < links.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 4,
        background: broken[links[i].id] || broken[links[i + 1].id] ? "transparent" : "var(--accent)",
        position: "relative",
        borderTop: broken[links[i].id] || broken[links[i + 1].id] ? "2px dashed var(--border-strong)" : "none"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 8
    }
  }, links.map(function (link) {
    return /*#__PURE__*/React.createElement("div", {
      key: link.id,
      style: {
        padding: 10,
        background: broken[link.id] ? "var(--accent-soft)" : "var(--bg-elev)",
        border: "1px solid ".concat(broken[link.id] ? "var(--accent)" : "var(--border)"),
        borderRadius: 8,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("strong", null, link.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--ink-muted)",
        marginTop: 2
      }
    }, link.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--accent-ink)",
        marginTop: 4,
        fontWeight: 500
      }
    }, "Break with: ", link["break"]));
  })));
}
window.ChainOfInfection = ChainOfInfection;
