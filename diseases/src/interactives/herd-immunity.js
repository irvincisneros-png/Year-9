/* Generated from herd-immunity.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Herd immunity simulator */
function HerdImmunity() {
  var _useState = useState(60),
    _useState2 = _slicedToArray(_useState, 2),
    cov = _useState2[0],
    setCov = _useState2[1];
  var _useState3 = useState("measles"),
    _useState4 = _slicedToArray(_useState3, 2),
    disease = _useState4[0],
    setDisease = _useState4[1];
  var N = 200;
  var diseases = {
    measles: {
      name: "Measles",
      r0: 15,
      thresh: 95
    },
    covid: {
      name: "COVID-19 (original strain)",
      r0: 3,
      thresh: 67
    },
    flu: {
      name: "Influenza",
      r0: 1.5,
      thresh: 33
    },
    polio: {
      name: "Polio",
      r0: 6,
      thresh: 85
    }
  };
  var d = diseases[disease];
  var protected_ = cov >= d.thresh;
  var people = useMemo(function () {
    var arr = Array.from({
      length: N
    }, function (_, i) {
      var vax = i < Math.floor(N * cov / 100);
      return {
        vax: vax,
        x: Math.random() * 380 + 10,
        y: Math.random() * 180 + 10
      };
    });
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }, [cov]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 4,
      maxWidth: "100%"
    }
  }, "Disease:", /*#__PURE__*/React.createElement("select", {
    value: disease,
    onChange: function onChange(e) {
      return setDisease(e.target.value);
    },
    style: {
      marginLeft: 6,
      maxWidth: "100%",
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--border)",
      background: "var(--bg-elev)",
      color: "var(--ink)",
      fontFamily: "inherit"
    }
  }, Object.entries(diseases).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return /*#__PURE__*/React.createElement("option", {
      key: k,
      value: k
    }, v.name, " (R\u2080 \u2248 ", v.r0, ", needs ", v.thresh, "%)");
  })))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: "block",
      marginBottom: 4
    }
  }, "Vaccination coverage: ", /*#__PURE__*/React.createElement("strong", null, cov, "%"), " \u2014 ", d.name, " needs ", /*#__PURE__*/React.createElement("strong", null, d.thresh, "%"), " for herd immunity"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: cov,
    onChange: function onChange(e) {
      return setCov(+e.target.value);
    },
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 200",
    style: {
      width: "100%",
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: 8,
      marginTop: 12
    }
  }, people.map(function (p, i) {
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.x,
      cy: p.y,
      r: "5",
      fill: p.vax ? "#059669" : "#f59e0b",
      opacity: p.vax ? 1 : 0.9
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 12,
      borderRadius: 8,
      background: protected_ ? "var(--emerald-soft)" : "#fef3c7",
      color: protected_ ? "var(--emerald-ink)" : "#78350f",
      fontSize: 13
    }
  }, protected_ ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u2713 Herd immunity achieved."), " The pathogen cannot find enough hosts to spread \u2014 even unvaccinated people (orange) are indirectly protected. This is why vaccination programs protect newborns, chemo patients, and people with severe allergies who can't be vaccinated.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u26A0 Below threshold."), " An outbreak is possible. Unvaccinated people (orange) are at risk, and so are vulnerable people who can't be vaccinated. Slide up to ", d.thresh, "%.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-muted)",
      marginTop: 8
    }
  }, "R\u2080 = the average number of people one infected person would infect in a fully susceptible population. Higher R\u2080 needs higher coverage for herd immunity (threshold \u2248 1 \u2212 1/R\u2080; measles is rounded up to the 95% target because the vaccine is not 100% effective)."));
}
window.HerdImmunity = HerdImmunity;
