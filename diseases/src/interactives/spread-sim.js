/* Generated from spread-sim.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
/* Disease spread simulation (based on NaOH cup practical) */
function SpreadSim() {
  var GRID = 12;
  var total = GRID * GRID;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    vaxRate = _useState2[0],
    setVaxRate = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    hygiene = _useState4[0],
    setHygiene = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    step = _useState6[0],
    setStep = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    people = _useState8[0],
    setPeople = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    running = _useState0[0],
    setRunning = _useState0[1];
  var init = function init() {
    var vaxN = Math.floor(total * (vaxRate / 100));
    var arr = Array.from({
      length: total
    }, function () {
      return {
        state: "s",
        vax: false
      };
    });
    var shuffled = _toConsumableArray(Array(total).keys()).sort(function () {
      return Math.random() - 0.5;
    });
    for (var i = 0; i < vaxN; i++) arr[shuffled[i]].vax = true;
    // patient zero - random unvaxed
    var unvaxed = arr.map(function (p, i) {
      return !p.vax ? i : -1;
    }).filter(function (i) {
      return i >= 0;
    });
    if (unvaxed.length) arr[unvaxed[Math.floor(Math.random() * unvaxed.length)]].state = "i";
    setPeople(arr);
    setStep(0);
  };
  useEffect(function () {
    init();
  }, []);
  var doStep = useCallback(function () {
    setPeople(function (prev) {
      if (!prev) return prev;
      var next = prev.map(function (p) {
        return _objectSpread({}, p);
      });
      // each infected person contacts a random neighbor-ish
      prev.forEach(function (p, i) {
        if (p.state !== "i") return;
        // pick a random partner
        var partnerI = Math.floor(Math.random() * total);
        if (partnerI === i) return;
        var partner = next[partnerI];
        if (partner.state !== "s") return;
        if (partner.vax) return;
        // hygiene reduces transmission
        if (Math.random() < hygiene / 100) return;
        partner.state = "i";
      });
      return next;
    });
    setStep(function (s) {
      return s + 1;
    });
  }, [hygiene]);
  useEffect(function () {
    if (!running) return;
    var id = setInterval(function () {
      return doStep();
    }, 600);
    return function () {
      return clearInterval(id);
    };
  }, [running, doStep]);
  useEffect(function () {
    if (step >= 8) setRunning(false);
  }, [step]);
  var infected = (people === null || people === void 0 ? void 0 : people.filter(function (p) {
    return p.state === "i";
  }).length) || 0;
  var vaxCount = (people === null || people === void 0 ? void 0 : people.filter(function (p) {
    return p.vax;
  }).length) || 0;
  var pctInfected = people ? (infected / total * 100).toFixed(0) : 0;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: "block",
      marginBottom: 4
    }
  }, "Vaccination rate: ", /*#__PURE__*/React.createElement("strong", null, vaxRate, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: vaxRate,
    onChange: function onChange(e) {
      return setVaxRate(+e.target.value);
    },
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: "block",
      margin: "12px 0 4px"
    }
  }, "Handwashing effectiveness: ", /*#__PURE__*/React.createElement("strong", null, hygiene, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: hygiene,
    onChange: function onChange(e) {
      return setHygiene(+e.target.value);
    },
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn accent",
    onClick: function onClick() {
      init();
      setRunning(true);
    }
  }, "Reset & run"), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: function onClick() {
      return setRunning(function (r) {
        return !r;
      });
    },
    disabled: step >= 8
  }, running ? "Pause" : "Play"), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: doStep,
    disabled: step >= 8 || running
  }, "Step")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 13,
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, "Round: ", /*#__PURE__*/React.createElement("strong", null, step, "/8")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#dc2626"
    }
  }, "Infected: ", /*#__PURE__*/React.createElement("strong", null, infected), " (", pctInfected, "%)"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--emerald)"
    }
  }, "Vaccinated: ", /*#__PURE__*/React.createElement("strong", null, vaxCount)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(".concat(GRID, ",1fr)"),
      gap: 3,
      background: "var(--bg-elev)",
      padding: 8,
      borderRadius: 8,
      border: "1px solid var(--border)"
    }
  }, people === null || people === void 0 ? void 0 : people.map(function (p, i) {
    var bg = "#d6d3cc";
    if (p.vax) bg = "#059669";
    if (p.state === "i") bg = "#dc2626";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        aspectRatio: "1",
        background: bg,
        borderRadius: 3,
        transition: "background 0.3s"
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      marginTop: 10,
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      background: "#d6d3cc",
      borderRadius: 2,
      marginRight: 4,
      verticalAlign: "middle"
    }
  }), "Susceptible"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      background: "#dc2626",
      borderRadius: 2,
      marginRight: 4,
      verticalAlign: "middle"
    }
  }), "Infected"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 10,
      height: 10,
      background: "#059669",
      borderRadius: 2,
      marginRight: 4,
      verticalAlign: "middle"
    }
  }), "Vaccinated")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-muted)",
      marginTop: 10,
      padding: 10,
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Try it:"), " run the sim at 0% vax, then at 70%, then at 95%. Notice how even unvaccinated people are protected at high vax rates \u2014 that's ", /*#__PURE__*/React.createElement(G, {
    term: "herd immunity"
  }, "herd immunity"), ". This is the same idea as the NaOH cup practical, but we can run it many times."));
}
window.SpreadSim = SpreadSim;
