/* Generated from content.jsx by tools/build.js. Edit the .jsx, not this file. */
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
/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useMemo = _React.useMemo;

/* ============================================================
   SECTION 1 INTERACTIVES: Sustainability Pillars Explorer
   ============================================================ */
function PillarsExplorer() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var pillars = [{
    id: "env",
    label: "Environmental",
    colour: "#22c55e",
    icon: "🌿",
    desc: "Maintaining healthy ecosystems, biodiversity, and natural resources so they can support life now and in the future.",
    examples: ["Protecting native bushland", "Reducing greenhouse gas emissions", "Treating wastewater before discharge", "Conserving biodiversity hotspots"]
  }, {
    id: "eco",
    label: "Economic",
    colour: "#f59e0b",
    icon: "⚙️",
    desc: "Using resources efficiently so economic activity can continue without destroying the resource base it depends on.",
    examples: ["Transitioning to renewable energy jobs", "Sustainable agriculture", "Circular economy manufacturing", "Green building design"]
  }, {
    id: "soc",
    label: "Social",
    colour: "#3b82f6",
    icon: "🤝",
    desc: "Ensuring all communities have equitable access to resources, opportunities, and a healthy environment now and in future.",
    examples: ["Clean water access for all", "Affordable energy programs", "Community land rights", "Education about sustainability"]
  }];
  var sel = active ? pillars.find(function (p) {
    return p.id === active;
  }) : null;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Three Pillars of Sustainability",
    subtitle: "Tap a pillar to explore its goals and examples.",
    takeaway: "True sustainability requires balancing environmental, economic, and social goals together, because neglecting any one pillar undermines the others."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, pillars.map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        return setActive(active === p.id ? null : p.id);
      },
      style: {
        padding: "14px 22px",
        borderRadius: 14,
        border: "3px solid ".concat(p.colour),
        background: active === p.id ? p.colour : "var(--surface)",
        color: active === p.id ? "#fff" : "var(--ink)",
        fontWeight: 700,
        fontSize: 15,
        cursor: "pointer",
        transition: "all .2s",
        minWidth: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 28
      }
    }, p.icon), p.label);
  })), sel && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 12,
      padding: 18,
      border: "2px solid ".concat(sel.colour)
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 8,
      color: sel.colour
    }
  }, sel.label, " Sustainability"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 12
    }
  }, sel.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      marginBottom: 6
    }
  }, "Real-world examples:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20
    }
  }, sel.examples.map(function (e, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        marginBottom: 4
      }
    }, e);
  }))), !sel && /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      textAlign: "center"
    }
  }, "Select a pillar above to see details."));
}

/* Solution Evaluator */
function SolutionEvaluator() {
  var scenarios = [{
    label: "Coal to Solar Power",
    env: 5,
    eco: 4,
    soc: 3,
    envNote: "Near-zero direct emissions; greatly reduces air pollution.",
    ecoNote: "Solar costs have fallen over 90% since 2010; creates new jobs.",
    socNote: "Intermittent supply needs storage; may affect energy prices short-term."
  }, {
    label: "Drip Irrigation",
    env: 4,
    eco: 4,
    soc: 4,
    envNote: "Reduces water extraction by up to 50%; protects river ecosystems.",
    ecoNote: "Capital cost recovered by water savings over time.",
    socNote: "Farmers need training and support; widely accepted when benefits clear."
  }, {
    label: "Deforestation for Mining",
    env: 1,
    eco: 3,
    soc: 2,
    envNote: "Destroys habitat; reduces biodiversity; removes carbon storage.",
    ecoNote: "Short-term profit; long-term ecosystem service losses may exceed gains.",
    socNote: "Local communities lose forest access; cultural and livelihood impacts."
  }, {
    label: "Kerbside Recycling",
    env: 4,
    eco: 3,
    soc: 4,
    envNote: "Diverts waste from landfill; recovers raw materials.",
    ecoNote: "Saves energy vs virgin production; contamination reduces viability.",
    socNote: "Widely accepted; easy for households; requires public education."
  }];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    idx = _useState4[0],
    setIdx = _useState4[1];
  var s = scenarios[idx];
  var barColour = function barColour(v) {
    return v >= 4 ? "#22c55e" : v >= 3 ? "#f59e0b" : "#ef4444";
  };
  var Bar = function Bar(_ref) {
    var value = _ref.value,
      label = _ref.label,
      note = _ref.note;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: barColour(value)
      }
    }, value, "/5")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 14,
        background: "var(--bg-2)",
        borderRadius: 7,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(value * 20, "%"),
        background: barColour(value),
        borderRadius: 7,
        transition: "width .5s"
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--ink-muted)",
        marginTop: 4
      }
    }, note));
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sustainability Solution Evaluator",
    subtitle: "Pick a real-world scenario and see how it scores across all three pillars.",
    takeaway: "A valid sustainability solution must score reasonably well across environmental, economic, and social criteria, not just one of them."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 18,
      justifyContent: "center"
    }
  }, scenarios.map(function (sc, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setIdx(i);
      },
      style: {
        padding: "8px 14px",
        borderRadius: 8,
        border: "2px solid var(--accent)",
        cursor: "pointer",
        background: i === idx ? "var(--accent)" : "var(--surface)",
        color: i === idx ? "#fff" : "var(--ink)",
        fontWeight: 600,
        fontSize: 13
      }
    }, sc.label);
  })), /*#__PURE__*/React.createElement(Bar, {
    value: s.env,
    label: "Environmental",
    note: s.envNote
  }), /*#__PURE__*/React.createElement(Bar, {
    value: s.eco,
    label: "Economic",
    note: s.ecoNote
  }), /*#__PURE__*/React.createElement(Bar, {
    value: s.soc,
    label: "Social",
    note: s.socNote
  }));
}

/* ============================================================
   SECTION 1
   ============================================================ */
function Section1(_ref2) {
  var progress = _ref2.progress,
    setProgress = _ref2.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "4.1 Sustainability"), /*#__PURE__*/React.createElement("h1", null, "Principles and Goals of Sustainability"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "What does it actually mean to live sustainably, and how does science help us get there?")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.1.1",
    title: "Identify the principles and goals of sustainability",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The capacity of natural and human systems to continue functioning over the long term, meeting present needs without reducing the ability of future generations to meet theirs."
  }, "Sustainability"), " was given its most widely used definition by the 1987 Brundtland Report: development that meets the needs of the present without compromising the ability of future generations to meet their own needs. This means recognising that humans depend on Earth's natural systems for food, clean water, air, materials, and energy, and those systems have limits."), /*#__PURE__*/React.createElement("p", null, "Scientists and policymakers use a framework of three interconnected pillars. ", /*#__PURE__*/React.createElement(Term, {
    def: "Maintaining the health and resilience of ecosystems and natural resources."
  }, "Environmental sustainability"), " focuses on keeping ecosystems healthy. ", /*#__PURE__*/React.createElement(Term, {
    def: "Using resources efficiently so economic activity can continue without exhausting its own resource base."
  }, "Economic sustainability"), " ensures long-term productive capacity. ", /*#__PURE__*/React.createElement(Term, {
    def: "Ensuring communities have equitable access to resources and opportunities now and in the future."
  }, "Social sustainability"), " means fairness across communities. These pillars reinforce each other: healthy ecosystems underpin economic activity, and equitable societies are better placed to protect their environments."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Brundtland Definition"
  }, "Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs."), /*#__PURE__*/React.createElement("p", null, "Several key principles guide sustainability decisions. The ", /*#__PURE__*/React.createElement(Term, {
    def: "When an action risks environmental harm, precautionary measures should be taken even if the science is not fully established."
  }, "precautionary principle"), " means acting to prevent harm even before certainty. ", /*#__PURE__*/React.createElement(Term, {
    def: "The current generation must not use resources at a rate that prevents future generations from meeting their own needs."
  }, "Intergenerational equity"), " means today's choices must leave something for tomorrow. Biodiversity conservation, waste reduction, and renewable energy transitions round out the core principles. All decisions should consider environmental, economic, and social factors together."), /*#__PURE__*/React.createElement(PillarsExplorer, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which definition of sustainability comes from the 1987 Brundtland Report?",
    options: ["Using resources as efficiently as possible today", "Meeting present needs without compromising future generations' ability to meet theirs", "Protecting biodiversity in all ecosystems", "Switching from fossil fuels to renewable energy"],
    correct: 1,
    explain: "The Brundtland Report defined sustainable development as meeting today's needs without reducing future generations' ability to meet theirs."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "The precautionary principle states that:",
    options: ["All environmental risks must be proven before action", "Protective measures should be taken even when scientific evidence is incomplete", "Biodiversity must always take priority over economic growth", "Economic sustainability is more important than environmental sustainability"],
    correct: 1,
    explain: "The precautionary principle supports taking action to prevent environmental harm even when certainty does not yet exist."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 3,
    question: "Explain why scientists say the three pillars of sustainability reinforce each other. Give one specific example.",
    model: "Healthy ecosystems underpin economic activity by providing resources such as clean water and fertile soil. Equitable societies are better positioned to protect and manage environments. For example, a community with secure land rights and income is more likely to invest in sustainable land management than one facing poverty."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.1.2",
    title: "Apply scientific understanding to propose valid solutions to identified problems",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Scientists play a central role in identifying sustainability problems and developing evidence-based solutions. A valid scientific solution must be supported by data, feasible with available technology, and evaluated for both benefits and ", /*#__PURE__*/React.createElement(Term, {
    def: "Effects of a solution that were not intended and may create new problems."
  }, "unintended consequences"), ". The process starts with defining the problem clearly, gathering data, generating possible solutions, then evaluating each against environmental, economic, and social criteria, and finally implementing the best option and monitoring the results."), /*#__PURE__*/React.createElement("p", null, "Take over-extraction of freshwater as an example. Monitoring shows many rivers worldwide no longer reach the sea during dry seasons. Valid solutions include ", /*#__PURE__*/React.createElement(Term, {
    def: "A method of delivering water directly to plant roots through small tubes, reducing evaporation and runoff by up to 50% compared with flood irrigation."
  }, "drip irrigation"), ", treating and reusing wastewater, rainwater harvesting, and restoring ", /*#__PURE__*/React.createElement(Term, {
    def: "Vegetation growing along river banks that slows runoff and recharges groundwater."
  }, "riparian vegetation"), ". Each involves trade-offs between cost, ease of implementation, and effectiveness, which is why evidence-based comparison is essential."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Evaluating solutions"
  }, "Ask: Does it reduce the problem? Can it be done with current technology? Is the cost reasonable long-term? Is it fair to communities? Can it scale up? Does it create new problems?"), /*#__PURE__*/React.createElement(SolutionEvaluator, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "What makes a proposed sustainability solution 'valid'?",
    options: ["It is the cheapest option available", "It is supported by evidence, is technically feasible, and has been evaluated for unintended consequences", "It addresses only the environmental pillar", "It was developed by a government agency"],
    correct: 1,
    explain: "A valid solution must be evidence-based, technically achievable, and carefully evaluated for benefits and potential new problems."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 5,
    question: "A coastal town is losing fish stocks due to overfishing. Using the five-step scientific process, outline how scientists might develop a valid solution.",
    model: "Step 1: Define the problem by quantifying declining fish stocks and identifying the species and areas affected. Step 2: Gather data on catch rates, population trends, and ecosystem impacts. Step 3: Generate solutions such as fishing quotas, marine reserves, and seasonal bans. Step 4: Evaluate each for effectiveness, economic impact, and social equity. Step 5: Implement the best combination and monitor fish populations annually to adjust."
  }))));
}

/* ============================================================
   SECTION 2 INTERACTIVES: Climate Science
   ============================================================ */
function WeatherClimateSorter() {
  var items = [{
    id: "a",
    label: "It is 34 °C in Sydney today",
    bucket: "weather"
  }, {
    id: "b",
    label: "Darwin has a tropical climate with a distinct wet season",
    bucket: "climate"
  }, {
    id: "c",
    label: "A thunderstorm hit Melbourne this afternoon",
    bucket: "weather"
  }, {
    id: "d",
    label: "Perth receives about 730 mm of rain per year on average",
    bucket: "climate"
  }, {
    id: "e",
    label: "It snowed in the Blue Mountains last night",
    bucket: "weather"
  }, {
    id: "f",
    label: "Central Australia has an arid climate with hot summers",
    bucket: "climate"
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Weather or Climate?",
    subtitle: "Sort each statement into the correct category.",
    takeaway: "Weather describes short-term conditions at a specific place and time, while climate is the long-term average pattern built from at least 30 years of data."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: items,
    buckets: [{
      id: "weather",
      label: "Weather"
    }, {
      id: "climate",
      label: "Climate"
    }]
  }));
}
function GreenhouseSimulator() {
  var _useState5 = useState(280),
    _useState6 = _slicedToArray(_useState5, 2),
    co2Level = _useState6[0],
    setCo2Level = _useState6[1];
  var withoutGHE = -18;
  var naturalGHE = 33;
  var extraWarming = (co2Level - 280) / 280 * 2.5;
  var surfaceTemp = (withoutGHE + naturalGHE + extraWarming).toFixed(1);
  var anomaly = (surfaceTemp - 15).toFixed(1);
  var col = anomaly > 0.5 ? "#ef4444" : anomaly > 0 ? "#f59e0b" : "#22c55e";
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Greenhouse Effect Simulator",
    subtitle: "Drag the CO\u2082 slider and see how atmospheric concentration affects surface temperature.",
    takeaway: "Increasing CO\u2082 above the pre-industrial level of 280 ppm enhances the natural greenhouse effect and raises Earth's surface temperature above its natural baseline."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Atmospheric CO\u2082",
    min: 180,
    max: 560,
    step: 10,
    value: co2Level,
    onChange: setCo2Level,
    unit: " ppm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: co2Level,
    label: "CO\u2082 (ppm)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: surfaceTemp,
    label: "Surface Temp (\xB0C)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: anomaly > 0 ? "+" + anomaly : anomaly,
    label: "Anomaly vs +15 \xB0C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 10,
      padding: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Pre-industrial CO\u2082 was ", /*#__PURE__*/React.createElement("strong", null, "280 ppm"), ". Without any greenhouse effect Earth would be ", /*#__PURE__*/React.createElement("strong", null, "-18 \xB0C"), ". The natural greenhouse effect adds ", /*#__PURE__*/React.createElement("strong", null, "+33 \xB0C"), " of warming. Each additional 280 ppm above baseline adds roughly ", /*#__PURE__*/React.createElement("strong", null, "+2.5 \xB0C"), " of enhanced warming in this model."), co2Level > 280 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: col
    }
  }, "At ", co2Level, " ppm, the enhanced greenhouse effect adds approximately ", extraWarming.toFixed(1), " C above natural baseline."), co2Level === 180 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "#3b82f6"
    }
  }, "180 ppm corresponds to glacial (ice age) conditions in ice core records.")));
}
function EmissionsBreakdown() {
  var sectors = [{
    name: "Energy (electricity/heat)",
    pct: 34,
    col: "#ef4444"
  }, {
    name: "Industry",
    pct: 24,
    col: "#f97316"
  }, {
    name: "Transport",
    pct: 16,
    col: "#eab308"
  }, {
    name: "Agriculture",
    pct: 11,
    col: "#22c55e"
  }, {
    name: "Other",
    pct: 9,
    col: "#6366f1"
  }, {
    name: "Buildings",
    pct: 6,
    col: "#3b82f6"
  }];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    hover = _useState8[0],
    setHover = _useState8[1];
  var total = sectors.reduce(function (s, x) {
    return s + x.pct;
  }, 0);
  var cumAngle = 0;
  var cx = 90,
    cy = 90,
    r = 75;
  var slices = sectors.map(function (s, i) {
    var angle = s.pct / total * 360;
    var startAngle = cumAngle;
    cumAngle += angle;
    var r2a = function r2a(deg) {
      return (deg - 90) * Math.PI / 180;
    };
    var x1 = cx + r * Math.cos(r2a(startAngle));
    var y1 = cy + r * Math.sin(r2a(startAngle));
    var x2 = cx + r * Math.cos(r2a(cumAngle));
    var y2 = cy + r * Math.sin(r2a(cumAngle));
    var large = angle > 180 ? 1 : 0;
    return _objectSpread(_objectSpread({}, s), {}, {
      d: "M".concat(cx, ",").concat(cy, " L").concat(x1, ",").concat(y1, " A").concat(r, ",").concat(r, " 0 ").concat(large, " 1 ").concat(x2, ",").concat(y2, " Z"),
      idx: i
    });
  });
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Global Emissions by Sector",
    subtitle: "Hover or tap a slice to see the sector's contribution. Energy and industry together account for 58% of emissions.",
    takeaway: "Energy generation and industry together produce more than half of all global greenhouse gas emissions, making these sectors the highest priority for reducing the enhanced greenhouse effect."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 180 180",
    width: 180,
    height: 180,
    style: {
      flexShrink: 0
    }
  }, slices.map(function (sl) {
    return /*#__PURE__*/React.createElement("path", {
      key: sl.name,
      d: sl.d,
      fill: sl.col,
      opacity: hover === null || hover === sl.idx ? 1 : 0.4,
      stroke: "#fff",
      strokeWidth: 2,
      style: {
        cursor: "pointer",
        transition: "opacity .2s"
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(sl.idx);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      onClick: function onClick() {
        return setHover(hover === sl.idx ? null : sl.idx);
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 160
    }
  }, sectors.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 7,
        opacity: hover === null || hover === i ? 1 : 0.4,
        transition: "opacity .2s",
        cursor: "pointer"
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      onClick: function onClick() {
        return setHover(hover === i ? null : i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 3,
        background: s.col,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontWeight: 700,
        fontSize: 13
      }
    }, s.pct, "%"));
  }))), hover !== null && /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: sectors[hover].name
  }, "Contributes ", sectors[hover].pct, "% of global greenhouse gas emissions. ", hover === 0 ? "The single largest source globally." : hover === 2 ? "Includes cars, trucks, ships, and aviation." : hover === 3 ? "Includes livestock, rice, and fertilisers." : ""));
}

/* ============================================================
   SECTION 2
   ============================================================ */
function Section2(_ref3) {
  var progress = _ref3.progress,
    setProgress = _ref3.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "4.2 Climate Science"), /*#__PURE__*/React.createElement("h1", null, "Climate Science and the Greenhouse Effect"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "From daily weather to centuries of warming, the atmosphere shapes life on Earth.")), /*#__PURE__*/React.createElement(Figure, {
    caption: "The natural greenhouse effect. Sunlight (mostly short-wavelength visible light) passes through the atmosphere and warms Earth's surface. The warm surface gives off longer-wavelength infrared radiation. Some escapes to space, but greenhouse gases absorb some and re-emit it in all directions, including back down to the surface, keeping Earth about 33 \xB0C warmer than it would otherwise be.",
    maxWidth: 620
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 320",
    width: "100%",
    role: "img",
    "aria-label": "Diagram of the greenhouse effect: sunlight passes through the atmosphere to the surface; the surface emits infrared; some infrared escapes to space; greenhouse gases absorb some infrared and re-emit it, partly back down to the surface."
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "95",
    width: "640",
    height: "115",
    fill: "var(--blue-soft)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "262",
    width: "640",
    height: "58",
    fill: "var(--green)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "630",
    y: "22",
    textAnchor: "end",
    fontSize: "14",
    fill: "var(--ink-muted)"
  }, "Space"), /*#__PURE__*/React.createElement("text", {
    x: "630",
    y: "160",
    textAnchor: "end",
    fontSize: "13",
    fontWeight: "700",
    fill: "#34589c"
  }, "Atmosphere with"), /*#__PURE__*/React.createElement("text", {
    x: "630",
    y: "176",
    textAnchor: "end",
    fontSize: "13",
    fontWeight: "700",
    fill: "#34589c"
  }, "greenhouse gases"), /*#__PURE__*/React.createElement("text", {
    x: "630",
    y: "194",
    textAnchor: "end",
    fontSize: "12",
    fill: "#34589c"
  }, "(CO\u2082, H\u2082O, CH\u2084, N\u2082O)"), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "298",
    fontSize: "15",
    fontWeight: "700",
    fill: "#fff"
  }, "Earth's surface"), /*#__PURE__*/React.createElement("g", {
    fill: "#4b7bc9",
    opacity: "0.75"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "150",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "185",
    cy: "118",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "220",
    cy: "190",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "318",
    cy: "128",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "376",
    cy: "158",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "470",
    cy: "122",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "545",
    cy: "112",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "190",
    r: "5"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "48",
    r: "32",
    fill: "var(--amber)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "98",
    y1: "74",
    x2: "209",
    y2: "246",
    stroke: "var(--amber)",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M215.0,258.0 L196.2,248.6 L214.5,237.0 Z",
    fill: "var(--amber)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M255.0,262.0 L257.9,259.2 L260.4,256.3 L262.2,253.4 L263.0,250.4 L262.7,247.3 L261.4,244.1 L259.4,240.9 L257.0,237.6 L254.6,234.3 L252.6,231.1 L251.3,227.9 L251.0,224.8 L251.8,221.8 L253.6,218.9 L256.1,216.0 L259.0,213.2 L261.9,210.4 L264.4,207.5 L266.2,204.6 L267.0,201.6 L266.7,198.5 L265.4,195.3 L263.4,192.1 L261.0,188.8 L258.6,185.5 L256.6,182.3 L255.3,179.1 L255.0,176.0 L255.8,173.0 L257.6,170.1 L260.1,167.2 L263.0,164.4 L265.9,161.6 L268.4,158.7 L270.2,155.8 L271.0,152.8 L270.7,149.7 L269.4,146.5 L267.4,143.3 L265.0,140.0 L262.6,136.7 L260.6,133.5 L259.3,130.3 L259.0,127.2 L259.8,124.2 L261.6,121.3 L264.1,118.4 L267.0,115.6 L269.9,112.8 L272.4,109.9 L274.2,107.0 L275.0,104.0 L274.7,100.9 L273.4,97.7 L271.4,94.5 L269.0,91.2 L266.6,87.9 L264.6,84.7 L263.3,81.5 L263.0,78.4 L263.8,75.4 L265.6,72.5 L268.1,69.6 L271.0,66.8 L273.9,64.0 L276.4,61.1 L278.2,58.2 L279.0,55.2 L278.7,52.1 L277.4,48.9 L275.4,45.7 L273.0,42.4 L270.6,39.1 L268.9,35.9 L268.7,32.8 L269.6,29.8 L271.2,26.9 L273.0,24.0 L274.3,21.0 L275.0,18.0",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M275.0,18.0 L281.2,30.5 L266.8,29.4 Z",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M362.0,262.0 L364.8,261.1 L367.1,260.1 L368.7,259.0 L369.4,257.9 L368.9,256.7 L367.5,255.4 L365.4,254.0 L362.8,252.6 L360.2,251.2 L358.1,249.8 L356.7,248.5 L356.2,247.3 L356.9,246.2 L358.5,245.1 L360.8,244.1 L363.6,243.2 L366.4,242.3 L368.7,241.3 L370.3,240.2 L371.0,239.1 L370.5,237.9 L369.1,236.6 L367.0,235.2 L364.4,233.8 L361.8,232.4 L359.7,231.0 L358.3,229.7 L357.8,228.5 L358.5,227.4 L360.1,226.3 L362.4,225.3 L365.2,224.4 L368.0,223.5 L370.3,222.5 L371.9,221.4 L372.6,220.3 L372.1,219.1 L370.7,217.8 L368.6,216.4 L366.0,215.0 L363.4,213.6 L361.3,212.2 L359.9,210.9 L359.4,209.7 L360.1,208.6 L361.7,207.5 L364.0,206.5 L366.8,205.6 L369.6,204.7 L371.9,203.7 L373.5,202.6 L374.2,201.5 L373.7,200.3 L372.3,199.0 L370.2,197.6 L367.6,196.2 L365.0,194.8 L362.9,193.4 L361.5,192.1 L361.0,190.9 L361.7,189.8 L363.3,188.7 L365.6,187.7 L368.4,186.8 L371.2,185.9 L373.5,184.9 L375.1,183.8 L375.8,182.7 L375.3,181.5 L373.9,180.2 L371.8,178.8 L369.2,177.4 L366.6,176.0 L364.8,174.7 L364.5,173.4 L365.2,172.3 L366.7,171.3 L368.3,170.2 L369.5,169.1 L370.0,168.0",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M370.0,168.0 L376.2,180.6 L361.8,179.3 Z",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M382.0,146.0 L385.0,145.0 L387.5,144.0 L389.4,142.8 L390.2,141.3 L390.1,139.7 L388.9,137.8 L387.1,135.7 L384.8,133.6 L382.5,131.5 L380.7,129.4 L379.5,127.5 L379.4,125.9 L380.2,124.4 L382.1,123.2 L384.6,122.2 L387.6,121.2 L390.6,120.2 L393.1,119.2 L395.0,118.0 L395.8,116.5 L395.7,114.9 L394.5,113.0 L392.7,110.9 L390.4,108.8 L388.1,106.7 L386.3,104.6 L385.1,102.7 L385.0,101.1 L385.8,99.6 L387.7,98.4 L390.2,97.4 L393.2,96.4 L396.2,95.4 L398.7,94.4 L400.6,93.2 L401.4,91.7 L401.3,90.1 L400.1,88.2 L398.3,86.1 L396.0,84.0 L393.7,81.9 L391.9,79.8 L390.7,77.9 L390.6,76.3 L391.4,74.8 L393.3,73.6 L395.8,72.6 L398.8,71.6 L401.8,70.6 L404.3,69.6 L406.2,68.4 L407.0,66.9 L406.9,65.3 L405.7,63.4 L403.9,61.3 L401.6,59.2 L399.3,57.1 L397.5,55.0 L396.3,53.1 L396.2,51.5 L397.0,50.0 L398.9,48.8 L401.4,47.8 L404.4,46.8 L407.4,45.8 L409.9,44.8 L411.8,43.6 L412.6,42.1 L412.5,40.5 L411.3,38.6 L409.5,36.5 L407.2,34.4 L404.9,32.3 L403.4,30.3 L403.3,28.6 L404.3,27.2 L406.0,26.0 L407.8,24.8 L409.2,23.5 L410.0,22.0",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M410.0,22.0 L414.4,35.3 L400.3,32.1 Z",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M386.0,170.0 L384.6,172.7 L383.6,175.2 L383.2,177.2 L383.6,178.7 L384.9,179.5 L386.9,179.8 L389.6,179.6 L392.6,179.2 L395.6,178.8 L398.3,178.6 L400.3,178.9 L401.6,179.7 L402.0,181.2 L401.6,183.2 L400.6,185.7 L399.2,188.4 L397.8,191.1 L396.8,193.6 L396.4,195.6 L396.8,197.1 L398.1,197.9 L400.1,198.2 L402.8,198.0 L405.8,197.6 L408.8,197.2 L411.5,197.0 L413.5,197.3 L414.8,198.1 L415.2,199.6 L414.8,201.6 L413.8,204.1 L412.4,206.8 L411.0,209.5 L410.0,212.0 L409.6,214.0 L410.0,215.5 L411.3,216.3 L413.3,216.6 L416.0,216.4 L419.0,216.0 L422.0,215.6 L424.7,215.4 L426.7,215.7 L428.0,216.5 L428.4,218.0 L428.0,220.0 L427.0,222.5 L425.6,225.2 L424.2,227.9 L423.2,230.4 L422.8,232.4 L423.2,233.9 L424.5,234.7 L426.5,235.0 L429.2,234.8 L432.2,234.4 L435.2,234.0 L437.9,233.8 L439.9,234.1 L441.2,234.9 L441.6,236.4 L441.2,238.4 L440.2,240.9 L438.8,243.6 L437.4,246.3 L436.4,248.8 L436.0,250.8 L436.4,252.3 L437.7,253.1 L439.7,253.4 L442.4,253.2 L445.4,252.8 L448.4,252.4 L450.8,252.4 L452.0,253.3 L452.3,254.8 L452.0,256.8 L451.6,258.8 L451.5,260.6 L452.0,262.0",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M452.0,262.0 L439.2,256.4 L450.9,248.1 Z",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "104",
    y: "40",
    fontSize: "13",
    fontWeight: "700",
    fill: "var(--ink)"
  }, "1. Sunlight in"), /*#__PURE__*/React.createElement("text", {
    x: "104",
    y: "56",
    fontSize: "12",
    fill: "var(--ink-muted)"
  }, "(short wavelength)"), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "236",
    fontSize: "12",
    fill: "var(--ink)"
  }, "2. Surface warms and"), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "250",
    fontSize: "12",
    fill: "var(--ink)"
  }, "gives off infrared"), /*#__PURE__*/React.createElement("text", {
    x: "284",
    y: "40",
    fontSize: "12",
    fill: "var(--ink)"
  }, "3. Some infrared"), /*#__PURE__*/React.createElement("text", {
    x: "284",
    y: "54",
    fontSize: "12",
    fill: "var(--ink)"
  }, "escapes to space"), /*#__PURE__*/React.createElement("text", {
    x: "420",
    y: "40",
    fontSize: "12",
    fill: "var(--ink)"
  }, "4. Greenhouse gases absorb"), /*#__PURE__*/React.createElement("text", {
    x: "420",
    y: "54",
    fontSize: "12",
    fill: "var(--ink)"
  }, "and re-emit infrared"), /*#__PURE__*/React.createElement("text", {
    x: "462",
    y: "236",
    fontSize: "12",
    fill: "var(--ink)"
  }, "5. Some comes back down"), /*#__PURE__*/React.createElement("text", {
    x: "462",
    y: "250",
    fontSize: "12",
    fill: "var(--ink)"
  }, "and warms the surface"))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.1",
    title: "Distinguish between climate and weather",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The short-term atmospheric conditions at a specific place and time, including temperature, rainfall, wind, and cloud cover. Changes hour to hour."
  }, "Weather"), " is what is happening in the atmosphere right now or over the next few days. It is often unpredictable beyond about two weeks. ", /*#__PURE__*/React.createElement(Term, {
    def: "The long-term average pattern of weather conditions typical for a region, calculated over at least 30 years of data."
  }, "Climate"), " is the long-term pattern built from decades of weather records. A handy way to remember: weather is what you wear today; climate is what you keep in your wardrobe."), /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The World Meteorological Organization, which sets international standards for climate data collection and analysis."
  }, "World Meteorological Organization (WMO)"), " defines the standard climate period as 30 years (currently 1991 to 2020). Australia has diverse climate zones: tropical in the north, arid across the interior, temperate in the south-east and south-west, and alpine in the Australian Alps. Climate data comes from weather stations, ocean buoys, weather balloons, satellites, and ", /*#__PURE__*/React.createElement(Term, {
    def: "Indirect records of past climate stored in ice cores, tree rings, coral, and sediments."
  }, "climate proxies"), " such as ice cores."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Common misconception"
  }, "A single cold winter does not disprove global warming. Weather events at one location do not contradict long-term global climate trends based on decades of data from thousands of locations."), /*#__PURE__*/React.createElement(WeatherClimateSorter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "How many years of data does the WMO use to define a standard climate period?",
    options: ["10 years", "30 years", "50 years", "100 years"],
    correct: 1,
    explain: "The WMO uses a 30-year standard climate period, currently 1991 to 2020."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "A student says 'It was very cold last winter, so global warming cannot be real.' Explain the scientific error in this statement.",
    model: "The student is confusing weather with climate. A single cold winter at one location is a short-term weather event. Global warming describes a long-term upward trend in average global temperatures based on decades of data from thousands of locations worldwide. One regional weather event does not contradict a global climate trend."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.2",
    title: "Investigate data to determine what trends are evident in the world's climate",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Analysis of global temperature records reveals clear trends. Global average surface temperature has risen by approximately 1.1 degrees Celsius above ", /*#__PURE__*/React.createElement(Term, {
    def: "The average temperature calculated from 1850 to 1900, before large-scale industrial greenhouse gas emissions began."
  }, "pre-industrial levels"), ". The 2011 to 2020 decade was the warmest on record. Sea surface temperatures have also risen, contributing to more intense tropical cyclones and coral bleaching events. ", /*#__PURE__*/React.createElement(Term, {
    def: "The phenomenon where polar regions warm two to four times faster than the global average."
  }, "Polar amplification"), " means the Arctic is warming fastest of all."), /*#__PURE__*/React.createElement("p", null, "Beyond temperature, scientists have documented sea levels rising approximately 20 centimetres since 1900, Arctic summer sea ice declining about 13 percent per decade since satellite records began in 1979, and extreme heat events increasing in frequency. These changes appear consistently across multiple ", /*#__PURE__*/React.createElement(Term, {
    def: "Sets of data collected and analysed independently by different organisations, which strengthen confidence when they show the same result."
  }, "independent data sets"), " from organisations worldwide."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Global average surface temperature anomaly by decade above the 1850 to 1900 pre-industrial baseline (approximate values), showing an accelerating warming trend."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 200",
    width: "100%",
    style: {
      maxWidth: 520
    }
  }, function () {
    var data = [{
      label: "1880s",
      val: 0.0
    }, {
      label: "1910s",
      val: -0.10
    }, {
      label: "1940s",
      val: 0.20
    }, {
      label: "1970s",
      val: 0.20
    }, {
      label: "1990s",
      val: 0.55
    }, {
      label: "2010s",
      val: 1.10
    }];
    var pad = {
      l: 52,
      r: 16,
      t: 20,
      b: 36
    };
    var W = 520 - pad.l - pad.r;
    var H = 200 - pad.t - pad.b;
    var minV = -0.3,
      maxV = 1.2;
    var scaleY = function scaleY(v) {
      return pad.t + H - (v - minV) / (maxV - minV) * H;
    };
    var bw = W / data.length - 8;
    var zero = scaleY(0);
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: pad.t,
      x2: pad.l,
      y2: pad.t + H,
      stroke: "var(--border)",
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("line", {
      x1: pad.l,
      y1: zero,
      x2: pad.l + W,
      y2: zero,
      stroke: "var(--ink-muted)",
      strokeWidth: 1,
      strokeDasharray: "4 3"
    }), [-0.2, 0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2].map(function (v) {
      return /*#__PURE__*/React.createElement("text", {
        key: v,
        x: pad.l - 4,
        y: scaleY(v) + 4,
        textAnchor: "end",
        fontSize: 10,
        fill: "var(--ink-muted)"
      }, v.toFixed(1));
    }), /*#__PURE__*/React.createElement("text", {
      x: 12,
      y: pad.t + H / 2,
      textAnchor: "middle",
      fontSize: 10,
      fill: "var(--ink-muted)",
      transform: "rotate(-90,12,".concat(pad.t + H / 2, ")")
    }, "Anomaly (\xB0C)"), data.map(function (d, i) {
      var x = pad.l + i * (W / data.length) + 4;
      var col = d.val >= 0 ? "#ef4444" : "#3b82f6";
      var barH = Math.abs(d.val) / (maxV - minV) * H;
      var y = d.val >= 0 ? zero - barH : zero;
      return /*#__PURE__*/React.createElement("g", {
        key: d.label
      }, /*#__PURE__*/React.createElement("rect", {
        x: x,
        y: y,
        width: bw,
        height: barH,
        fill: col,
        rx: 3,
        opacity: 0.85
      }), /*#__PURE__*/React.createElement("text", {
        x: x + bw / 2,
        y: pad.t + H + 16,
        textAnchor: "middle",
        fontSize: 10,
        fill: "var(--ink)"
      }, d.label));
    }));
  }())), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Key data point"
  }, "The 2010s had a temperature anomaly of about +1.1 \xB0C above pre-industrial levels, the warmest decade on record at the time."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "By approximately how much has global average temperature risen above pre-industrial levels?",
    options: ["0.3 °C", "1.1 °C", "2.0 °C", "3.5 °C"],
    correct: 1,
    explain: "Global average surface temperature has risen approximately 1.1 degrees Celsius above the pre-industrial (1850 to 1900) baseline."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Explain why scientists use multiple independent data sets to confirm climate trends.",
    model: "If the same trend appears in data sets collected by different organisations using different methods, it is very unlikely to be caused by an error in one data set. Agreement across independent sources provides strong scientific confidence that the observed trend is real."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.3",
    title: "Explain how the natural greenhouse effect influences global climate",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The warming of Earth's surface caused by greenhouse gases in the atmosphere absorbing outgoing infrared radiation and re-emitting it back toward the surface."
  }, "natural greenhouse effect"), " is essential for life. Without it, Earth's average surface temperature would be approximately -18 degrees Celsius rather than the current +15 degrees Celsius, a difference of 33 degrees. The Sun emits short-wavelength visible light that passes through the atmosphere and warms Earth's surface. The warmed surface then re-emits energy as longer-wavelength ", /*#__PURE__*/React.createElement(Term, {
    def: "Electromagnetic radiation emitted by warm objects, detected as heat."
  }, "infrared radiation"), " directed upward."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "Gases in the atmosphere, including water vapour, CO\u2082, CH\u2084, N\u2082O, and ozone, that absorb outgoing infrared radiation and re-emit it in all directions, keeping Earth's surface warm."
  }, "Greenhouse gases"), " including water vapour (H\u2082O), carbon dioxide (CO\u2082), methane (CH\u2084), and nitrous oxide (N\u2082O) absorb this outgoing infrared radiation. They then re-emit energy in all directions, including back toward Earth's surface. This is not quite the same as a garden greenhouse: a real greenhouse traps warm air physically, while the atmospheric process involves absorption and re-emission of radiation."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Greenhouse gases at a glance"
  }, "Water vapour is the most abundant greenhouse gas but acts as a feedback amplifier. CO\u2082 is the main long-lived driver. Methane (CH\u2084) has a warming potential about 28 times that of CO\u2082 over 100 years."), /*#__PURE__*/React.createElement(GreenhouseSimulator, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "What would Earth's average surface temperature be without the natural greenhouse effect?",
    options: ["-18 °C", "+5 °C", "+15 °C", "+33 °C"],
    correct: 0,
    explain: "Without the natural greenhouse effect, Earth would average approximately -18 \xB0C rather than the current +15 \xB0C."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "Explain in your own words how greenhouse gases warm Earth's surface.",
    model: "Greenhouse gases absorb the long-wavelength infrared radiation emitted by Earth's surface, preventing it from escaping directly to space. The gases then re-emit this energy in all directions, including downward toward Earth's surface, keeping it warmer than it would otherwise be."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.4",
    title: "Analyse data on global emissions and temperatures to explain the enhanced greenhouse effect",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The intensification of the natural greenhouse warming caused by human activities increasing greenhouse gas concentrations beyond their natural levels."
  }, "enhanced greenhouse effect"), " occurs when human activities raise greenhouse gas concentrations above natural levels. Since 1750, atmospheric CO\u2082 has risen from approximately 280 ppm to over 420 ppm, an increase of about 50 percent, driven mainly by ", /*#__PURE__*/React.createElement(Term, {
    def: "The burning of coal, oil, and natural gas, which releases stored carbon as CO\u2082."
  }, "fossil fuel combustion"), ", deforestation, cement production, and agriculture."), /*#__PURE__*/React.createElement("p", null, "The impacts extend across climate and ecosystems. More intense and frequent extreme heat events, altered rainfall patterns, accelerating glacier melt, and rising sea levels are all measured consequences. In ecosystems, species ranges are shifting poleward, seasonal events are shifting in timing (", /*#__PURE__*/React.createElement(Term, {
    def: "Changes in the timing of seasonal biological events such as flowering, migration, and breeding, caused by climate change."
  }, "phenological shifts"), "), and mass coral bleaching events are increasing. ", /*#__PURE__*/React.createElement(Term, {
    def: "The reduction in ocean pH caused by CO\u2082 dissolving in seawater to form carbonic acid, which harms marine organisms that build calcium carbonate shells."
  }, "Ocean acidification"), " is a separate chemical threat from CO\u2082 dissolving into seawater."), /*#__PURE__*/React.createElement(EmissionsBreakdown, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "By approximately how much has atmospheric CO2 increased since pre-industrial times?",
    options: ["10 percent", "50 percent", "100 percent", "200 percent"],
    correct: 1,
    explain: "CO\u2082 has risen from about 280 ppm to over 420 ppm, an increase of approximately 50 percent."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 8,
    question: "Explain why ocean acidification is a separate concern from warming, even though both are caused by rising CO2.",
    model: "Warming affects organisms through thermal stress and habitat change. Acidification directly reduces the concentration of carbonate ions in seawater, chemically preventing shell and skeleton formation in corals, molluscs, and sea urchins. Even if temperatures were controlled, continued CO\u2082 emissions would still acidify the ocean. The two effects harm different sets of organisms through completely different mechanisms."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.5",
    title: "Identify the advantages and limitations of methods used to reduce greenhouse gas emissions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Reducing emissions requires multiple strategies. ", /*#__PURE__*/React.createElement(Term, {
    def: "Energy sources that are naturally replenished, such as solar, wind, and hydro, producing near-zero direct emissions."
  }, "Renewable energy"), " technologies have seen solar PV costs fall over 90 percent since 2010, making it the cheapest source of new electricity generation in most countries. However, solar and wind are ", /*#__PURE__*/React.createElement(Term, {
    def: "Energy sources that only generate when the natural resource (sun or wind) is available, not continuously."
  }, "intermittent"), ", requiring battery storage, pumped hydro, or grid interconnection to maintain reliable supply."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "Technology that captures CO\u2082 from industrial exhaust gases or directly from the air and stores it permanently underground."
  }, "Carbon capture and storage (CCS)"), " can decarbonise heavy industry but is expensive and unproven at large scale. Reforestation sequesters CO\u2082 cheaply and boosts biodiversity, but is slow, requires land, and forests are vulnerable to fire and drought. Improving energy efficiency reduces how much energy is needed in the first place, cutting emissions without requiring new infrastructure."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "No single solution is enough"
  }, "Reducing emissions fast enough requires combining renewable energy, efficiency, electrifying transport, better land use, and where necessary, CCS. Each method has genuine trade-offs."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Emission Reduction Method Comparison",
    subtitle: "Compare four key strategies by their key strengths and weaknesses.",
    takeaway: "Each emission reduction method has genuine trade-offs, so reducing emissions fast enough requires combining multiple strategies rather than relying on one alone."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      gap: 12
    }
  }, [{
    name: "Solar PV",
    pro: "Cheapest new electricity; rapidly scalable; near-zero emissions.",
    con: "Intermittent; needs storage or backup to be reliable around the clock."
  }, {
    name: "Wind Power",
    pro: "Large capacity available offshore and onshore; commercially proven.",
    con: "Intermittent; visual impact; requires grid integration and transmission."
  }, {
    name: "Carbon Capture (CCS)",
    pro: "Can decarbonise hard-to-abate industry like steel and cement.",
    con: "Very expensive; large-scale geological storage not yet proven reliably."
  }, {
    name: "Reforestation",
    pro: "Low cost; biodiversity co-benefits; widely deployable.",
    con: "Slow; land competition; forests can burn, releasing stored carbon."
  }].map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        background: "var(--bg-2)",
        borderRadius: 10,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 700,
        marginBottom: 6
      }
    }, m.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#22c55e",
        fontWeight: 600
      }
    }, "Advantage:"), " ", m.pro), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#ef4444",
        fontWeight: 600
      }
    }, "Limitation:"), " ", m.con));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 9,
    question: "What is the main limitation of solar and wind power as electricity sources?",
    options: ["They produce too many greenhouse gases", "Their supply is intermittent and depends on weather conditions", "They are more expensive than coal", "They can only be installed in remote areas"],
    correct: 1,
    explain: "Solar and wind are intermittent sources. They only generate when sunlight or wind is available, requiring storage or backup for 24-hour supply."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.2.6",
    title: "Analyse data showing the relationship between industrialisation and the rise in global temperatures",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The period beginning around 1750 in Britain, during which coal-powered machinery and large-scale fossil fuel combustion began, producing a steep rise in CO\u2082 emissions."
  }, "Industrial Revolution"), " began the steep rise in fossil fuel use. Ice core records show CO\u2082 stayed between about 180 and 300 ppm for the 800,000 years before 1750. The rapid increase to over 420 ppm today is entirely outside the natural range for at least 800,000 years and coincides precisely with industrial civilisation."), /*#__PURE__*/React.createElement("p", null, "Global temperature records from NASA, NOAA, the UK Met Office, and the Japan Meteorological Agency all show the same pattern: stable temperatures from 1850 to roughly 1900, then slow rise, then accelerating warming from the mid-20th century as post-war industrial expansion and fossil fuel use surged. Cumulative CO\u2082 emissions and global mean temperature since 1850 show a very strong, almost straight-line ", /*#__PURE__*/React.createElement(Term, {
    def: "A statistical measure of how closely two variables are related. A value close to 1 indicates a very strong positive relationship."
  }, "correlation"), ". Climate models that include only natural forcing factors cannot reproduce the observed warming; adding human emissions does."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Ice core evidence"
  }, "Antarctic ice cores extend climate records back approximately 800,000 years. Trapped air bubbles preserve ancient atmosphere, allowing scientists to measure past CO\u2082 concentrations and infer past temperature from the ratios of hydrogen and oxygen isotopes in the ice itself."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 10,
    question: "Which line of evidence most directly shows that post-industrial CO2 levels are unusual in Earth's recent history?",
    options: ["Coral bleaching records", "Ice core data showing CO₂ stayed between about 180 and 300 ppm for 800,000 years", "Weather station temperature records since 1850", "Satellite sea level measurements"],
    correct: 1,
    explain: "Ice core records covering 800,000 years show CO\u2082 stayed between about 180 and 300 ppm before the Industrial Revolution. The rapid rise to over 420 ppm is entirely outside this natural range."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 11,
    question: "Explain why correlation between CO2 and temperature, on its own, does not prove causation, and what additional evidence scientists use to establish a causal link.",
    model: "Correlation alone does not prove causation because the relationship might be coincidental or driven by a third factor. Additional evidence includes: the atmospheric physics mechanism by which CO\u2082 absorbs infrared radiation (understood since the 19th century); isotopic analysis showing the CO\u2082 increase is from burning ancient fossil carbon; climate models that only reproduce observed warming when human emissions are included; and the agreement of multiple independent lines of evidence."
  }))));
}

/* ============================================================
   SECTION 3 INTERACTIVES: Climate Change Impacts
   ============================================================ */
function SeaLevelRiseModel() {
  var _useState9 = useState(0),
    _useState0 = _slicedToArray(_useState9, 2),
    landIceMelt = _useState0[0],
    setLandIceMelt = _useState0[1];
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    tempRise = _useState10[0],
    setTempRise = _useState10[1];
  var thermalExpansion = (tempRise * 0.65).toFixed(2);
  var meltContrib = (landIceMelt / 361).toFixed(2); // about 361 Gt of ice melt raises global sea level by 1 mm
  var total = (parseFloat(thermalExpansion) + parseFloat(meltContrib)).toFixed(2);
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sea Level Rise Mechanisms",
    subtitle: "Adjust the two main drivers of sea level rise and see how each contributes to the total.",
    takeaway: "Sea level rise has two causes: melting land ice adds water to the ocean, while thermal expansion occurs because warmer water takes up more space."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Land ice melt (Gt/yr)",
    min: 0,
    max: 500,
    step: 10,
    value: landIceMelt,
    onChange: setLandIceMelt,
    unit: " Gt/yr"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Ocean warming",
    min: 0,
    max: 2,
    step: 0.1,
    value: tempRise,
    onChange: setTempRise,
    unit: " \xB0C"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: meltContrib,
    label: "Meltwater rise (mm/yr)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: thermalExpansion,
    label: "Thermal expansion (mm/yr)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: total,
    label: "Total rise (mm/yr)"
  })), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 13,
      marginBottom: 0
    }
  }, "Currently the world loses about 280 Gt of land ice per year from Greenland and 150 Gt from Antarctica. Ocean warming has contributed roughly 1 mm/yr of thermal expansion. Mountain glaciers and changes in land water storage (not modelled here) add to this. Today's observed total is about 3.7 mm/yr."));
}
function WaterCycleImpact() {
  var _useState11 = useState(1.1),
    _useState12 = _slicedToArray(_useState11, 2),
    warming = _useState12[0],
    setWarming = _useState12[1];
  var evapIncrease = (warming * 7).toFixed(0);
  var wetterIntensity = (warming * 7).toFixed(0);
  var drierRisk = (warming * 15).toFixed(0);
  var glacierLoss = (warming * 12).toFixed(0);
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Climate Change and the Water Cycle",
    subtitle: "As global temperature rises, the water cycle intensifies. Explore the impacts.",
    takeaway: "Warming intensifies the water cycle: evaporation increases, wet regions receive more intense rainfall, and dry regions face greater drought risk, following the principle that 'wet gets wetter, dry gets drier'."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Global temperature rise",
    min: 0.5,
    max: 4,
    step: 0.1,
    value: warming,
    onChange: setWarming,
    unit: " \xB0C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginTop: 8
    }
  }, [{
    label: "Water vapour in the air",
    val: "+" + evapIncrease + "%",
    col: "#f97316",
    desc: "Warmer air can hold about 7% more water vapour for each 1 °C of warming."
  }, {
    label: "Heavy rain intensity",
    val: "+" + wetterIntensity + "%",
    col: "#3b82f6",
    desc: "More atmospheric moisture fuels intense storms."
  }, {
    label: "Drought risk (subtropical)",
    val: "+" + drierRisk + "%",
    col: "#eab308",
    desc: "Increased evaporation dries soils in mid-latitudes."
  }, {
    label: "Glacier retreat risk",
    val: glacierLoss + "%",
    col: "#06b6d4",
    desc: "Reduced dry-season river flows downstream."
  }].map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.label,
      style: {
        background: "var(--bg-2)",
        borderRadius: 10,
        padding: 12,
        borderLeft: "4px solid ".concat(item.col)
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        margin: "0 0 2px",
        color: item.col
      }
    }, item.val), /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 600,
        fontSize: 12,
        margin: "0 0 4px"
      }
    }, item.label), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        margin: 0,
        color: "var(--ink-muted)"
      }
    }, item.desc));
  })), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 12,
      marginTop: 8
    }
  }, "Water vapour follows the measured rule of about 7% per 1 \xB0C. The drought and glacier figures are illustrative only, to show the direction of change. Actual impacts vary a lot by region."));
}

/* ============================================================
   SECTION 3
   ============================================================ */
function Section3(_ref4) {
  var progress = _ref4.progress,
    setProgress = _ref4.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "4.3 Impacts of Present-Day Climate Change"), /*#__PURE__*/React.createElement("h1", null, "Climate Change Impacts Today"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Climate change is not a future problem. Its fingerprints are already on ecosystems, water supplies, and communities worldwide.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.3.1",
    title: "Identify the characteristics of climate change",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Climate change today refers primarily to the long-term shifts in global climate patterns driven by the ", /*#__PURE__*/React.createElement(Term, {
    def: "The intensification of the natural greenhouse effect caused by human greenhouse gas emissions."
  }, "enhanced greenhouse effect"), ". Its key measurable characteristics include rising average global temperatures, changes in precipitation patterns, rising sea levels, changes in extreme weather frequency and intensity, shifting seasons, and loss of sea ice and glaciers."), /*#__PURE__*/React.createElement("p", null, "A defining characteristic is the speed: past natural climate transitions between ice ages and warm periods took thousands of years, while current warming is occurring over decades. The warming is also global, occurring across all continents and ocean basins simultaneously. The pattern of faster warming over land and in polar regions matches the predicted ", /*#__PURE__*/React.createElement(Term, {
    def: "The specific spatial and temporal pattern of changes expected from a particular climate forcing, used to identify the cause."
  }, "fingerprint"), " of greenhouse gas forcing, not solar variation or volcanic activity."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Four key climate change characteristics"
  }, "Rising temperatures (global, +1.1 \xB0C). Sea level rise (+20 cm since 1900, now 3.7 mm/yr). Declining Arctic sea ice (13% per decade since 1979). More frequent and intense extreme heat events."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Climate Change Characteristics Summary",
    subtitle: "Key measurable indicators of current climate change and their observed trends.",
    takeaway: "Multiple independent indicators, including rising temperatures, sea level, and declining Arctic ice, all show the same direction of change, providing strong evidence that climate change is real and ongoing."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "data-table",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Characteristic"), /*#__PURE__*/React.createElement("th", null, "Observed Change"), /*#__PURE__*/React.createElement("th", null, "Rate"))), /*#__PURE__*/React.createElement("tbody", null, [["Global average temperature", "+1.1 °C above pre-industrial", "Fastest in past 50 years"], ["Sea level", "+20 cm since 1900", "3.7 mm/yr currently"], ["Arctic sea ice (summer)", "13% decline per decade", "Consistent since 1979"], ["Ocean heat content", "Increasing all basins", "Continuous since 1960s"], ["Extreme heat events", "More frequent, hotter", "Increasing in most regions since 1950 (IPCC)"]].map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 3),
      c = _ref6[0],
      o = _ref6[1],
      r = _ref6[2];
    return /*#__PURE__*/React.createElement("tr", {
      key: c
    }, /*#__PURE__*/React.createElement("td", null, c), /*#__PURE__*/React.createElement("td", null, o), /*#__PURE__*/React.createElement("td", null, r));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "What is 'polar amplification' in the context of climate change?",
    options: ["Polar regions cool faster than the tropics", "Polar regions warm two to four times faster than the global average", "Polar ice acts to amplify storms", "Polar oceans absorb most CO₂"],
    correct: 1,
    explain: "Polar amplification describes the phenomenon where polar regions, especially the Arctic, warm two to four times faster than the global average due to feedback mechanisms including ice-albedo feedback."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.3.2",
    title: "Investigate and report on the consequences of climate change",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Consequences span natural and human systems. In natural systems, the Greenland Ice Sheet contains enough ice to raise sea levels by approximately 7 metres if completely melted. Mountain glaciers that supply freshwater to rivers used by hundreds of millions of people in Asia and South America are shrinking. ", /*#__PURE__*/React.createElement(Term, {
    def: "Permanently frozen ground found in Arctic and sub-Arctic regions. When it thaws, it releases stored carbon as CO\u2082 and methane, accelerating warming."
  }, "Permafrost"), " thawing in Siberia, Alaska, and Canada is destabilising infrastructure and releasing stored carbon."), /*#__PURE__*/React.createElement("p", null, "For human communities, the IPCC estimates sea levels could rise 0.6 to 1.0 metres by 2100 under high-emission scenarios, potentially displacing hundreds of millions of people. Food security is threatened as heat stress and changing rainfall reduce crop yields in many regions. Human health faces increased heat mortality, expanding ranges of disease vectors such as mosquitoes carrying dengue fever and malaria, and air pollution from more intense wildfires."), /*#__PURE__*/React.createElement(SeaLevelRiseModel, null), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Floating vs land ice"
  }, "Melting Arctic sea ice (floating) does NOT significantly raise sea levels because it already displaces ocean water. Melting land ice (Greenland, Antarctica) DOES raise sea levels because it adds new water to the ocean."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "Why does melting Arctic sea ice NOT significantly raise global sea levels?",
    options: ["Arctic ice is too small to matter", "Floating ice already displaces its equivalent volume of water, so melting it adds no net water", "Arctic ice melts too slowly to affect sea levels", "The Arctic Ocean absorbs the extra water"],
    correct: 1,
    explain: "Floating ice already displaces an equivalent volume of ocean water. When it melts, it simply replaces the displaced volume with liquid water of the same mass, causing no net change in sea level."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 3,
    question: "Explain why permafrost thawing is described as a 'positive feedback' for climate change.",
    model: "Permafrost contains vast amounts of carbon stored for thousands of years. When temperatures rise and it thaws, it releases this carbon as CO\u2082 and methane, which are potent greenhouse gases. This increases greenhouse gas concentrations, which causes further warming, which thaws more permafrost, releasing more carbon. This self-reinforcing cycle is a positive (amplifying) feedback that accelerates climate change."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.3.3",
    title: "Investigate the effects of climate change on the water cycle and ecosystems",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The continuous movement of water between the ocean, atmosphere, and land through evaporation, condensation, precipitation, and runoff."
  }, "water cycle (hydrological cycle)"), " is being altered by climate change. Higher temperatures increase evaporation rates, putting more water vapour into the atmosphere. More atmospheric water vapour means more energy is available for intense precipitation events. However, in regions where evaporation exceeds precipitation, soils become drier, leading to drought. The principle of ", /*#__PURE__*/React.createElement(Term, {
    def: "The tendency for wet regions to receive more rainfall and dry regions to receive less as the climate warms, amplifying existing rainfall patterns."
  }, "\"wet gets wetter, dry gets drier\""), " broadly describes this redistribution."), /*#__PURE__*/React.createElement("p", null, "Coral reef ecosystems are especially vulnerable. When ocean temperatures rise even 1 to 2 degrees above normal seasonal maxima for several weeks, corals expel their ", /*#__PURE__*/React.createElement(Term, {
    def: "Microscopic photosynthetic algae that live in coral tissue, providing up to 90% of coral energy through photosynthesis and giving coral its colour."
  }, "zooxanthellae"), ", causing bleaching. Australia's Great Barrier Reef has experienced seven mass bleaching events since 1998, with five of them between 2016 and 2024. Freshwater ecosystems, alpine meadows, and Arctic tundra are also being transformed as temperature and moisture patterns shift."), /*#__PURE__*/React.createElement(WaterCycleImpact, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "What is coral bleaching and what triggers it?",
    options: ["Coral turning white due to paint-like algae covering it", "Mass expulsion of zooxanthellae when ocean temperature rises 1 to 2 °C above normal for several weeks", "Coral dying due to ocean acidification dissolving its skeleton", "Coral decolourisation caused by reduced sunlight"],
    correct: 1,
    explain: "Coral bleaching is the mass expulsion of zooxanthellae from coral tissue triggered by ocean temperatures rising 1 to 2 \xB0C above seasonal maxima for several weeks. The coral turns white and loses its main energy source."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 5,
    question: "Explain how a prolonged drought caused by climate change could affect multiple levels of a freshwater river ecosystem.",
    model: "Reduced river flow lowers water levels and concentrates pollutants. Lower water volume warms faster and holds less dissolved oxygen. Aquatic invertebrates die or decrease, removing a key food source. Fish face reduced food and may not reach upstream breeding habitats. Waterbirds, platypus, and other wildlife dependent on the river face starvation and displacement. Riparian vegetation may die, causing bank erosion and further degrading habitat. These cascading effects can collapse the whole freshwater ecosystem."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.3.4",
    title: "Investigate how satellites collect global data and how this data evaluates climate change impact",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Satellites are among the most powerful climate monitoring tools because they observe the entire planet repeatedly from a consistent vantage point. Unlike ground-based stations, satellites provide continuous data over oceans, polar regions, rainforests, and other areas where ground monitoring is impossible. They use infrared radiometers to measure sea surface temperature, radar altimeters to measure sea level, microwave sensors to map sea ice, and spectrometers to detect vegetation, gases, and ocean colour."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "Sea surface temperature, measured by infrared sensors on satellites, providing daily global maps used to track coral bleaching risk and marine heat waves."
  }, "Sea surface temperature (SST)"), " data from MODIS satellites lets scientists issue coral bleaching alerts weeks in advance. ", /*#__PURE__*/React.createElement(Term, {
    def: "Radar altimetry satellites that measure ocean surface height by timing how long radar pulses take to bounce back, detecting sea level change to within about 1 centimetre."
  }, "Radar altimetry"), " satellites (Jason series, Sentinel-6) measure global sea level rise. The Landsat series has tracked deforestation since 1972 using ", /*#__PURE__*/React.createElement(Term, {
    def: "Normalised Difference Vegetation Index, a measure of vegetation health calculated from near-infrared and visible light reflectance detected by satellites."
  }, "NDVI"), ". The GRACE mission detects ice mass loss by measuring tiny changes in Earth's gravitational field as ice sheets shrink."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Why satellites beat ground stations"
  }, "A single satellite pass can cover more ground in minutes than thousands of weather stations. Passive microwave sensors can even detect sea ice through clouds, which are often present over polar regions."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Satellite Climate Monitoring: Key Missions",
    subtitle: "Satellites measure variables that cannot be observed globally from the ground.",
    takeaway: "Satellites can continuously monitor the entire planet's temperature, sea level, ice, and CO\u2082 in ways that ground-based stations cannot, making them essential tools for tracking climate change."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "data-table",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Mission"), /*#__PURE__*/React.createElement("th", null, "Variable"), /*#__PURE__*/React.createElement("th", null, "Use"))), /*#__PURE__*/React.createElement("tbody", null, [["Landsat series (NASA/USGS)", "Forest and land cover", "Tracks deforestation globally since 1972"], ["Jason-3 / Sentinel-6", "Sea level", "Measures global sea level rise to 1 cm accuracy"], ["MODIS (Terra/Aqua)", "Sea surface temperature", "Daily global SST; coral bleaching alerts"], ["CryoSat-2 (ESA)", "Ice sheet and sea ice thickness", "Monitors Greenland and Antarctic mass changes"], ["OCO-2 (NASA)", "Atmospheric CO₂", "Maps global CO₂ sources and sinks"], ["GRACE/GRACE-FO", "Ice mass and groundwater", "Detects ice sheet loss by gravity changes"]].map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 3),
      m = _ref8[0],
      v = _ref8[1],
      u = _ref8[2];
    return /*#__PURE__*/React.createElement("tr", {
      key: m
    }, /*#__PURE__*/React.createElement("td", null, m), /*#__PURE__*/React.createElement("td", null, v), /*#__PURE__*/React.createElement("td", null, u));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 6,
    question: "How does a radar altimeter satellite measure sea level?",
    options: ["It photographs the ocean surface and compares colour bands", "It emits radar pulses toward the ocean and measures the return time to calculate distance", "It measures gravitational pull from ice sheets", "It uses infrared sensors to detect heat emitted by ocean water"],
    correct: 1,
    explain: "A radar altimeter emits pulses of radar toward the ocean surface and precisely measures the return time. Using the known speed of radio waves, this converts to a distance between satellite and ocean surface, from which sea level is calculated."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 7,
    question: "Explain why passive microwave sensors are used to monitor sea ice, rather than optical or infrared sensors.",
    model: "Clouds are perpetually present over polar regions, blocking optical (visible) and infrared sensors. Microwave radiation passes through clouds, so passive microwave sensors can detect sea ice regardless of cloud cover. They detect differences in the microwave emission characteristics of sea ice versus open water, allowing continuous monitoring through polar winter and overcast conditions."
  }))));
}

/* ============================================================
   SECTION 4 INTERACTIVES
   ============================================================ */
function PollutionChain() {
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    step = _useState14[0],
    setStep = _useState14[1];
  var steps = [{
    icon: "🌾",
    title: "Nitrogen fertiliser applied to paddock",
    desc: "Farmer applies excess nitrogen fertiliser to crops near a river."
  }, {
    icon: "🌧",
    title: "Rain washes nitrates into river",
    desc: "Runoff carries dissolved nitrates from the paddock into the waterway."
  }, {
    icon: "🦠",
    title: "Algal bloom develops (eutrophication)",
    desc: "Elevated nutrients cause rapid algae growth, blocking sunlight to plants below."
  }, {
    icon: "💀",
    title: "Bacteria decompose algae; oxygen depletes",
    desc: "When algae die, bacteria multiply rapidly and consume dissolved oxygen."
  }, {
    icon: "🐟",
    title: "Fish kill: hypoxia in the river",
    desc: "Dissolved oxygen drops to near zero. Fish and other aerobic organisms suffocate and die."
  }, {
    icon: "🔬",
    title: "Scientists measure: eutrophication confirmed",
    desc: "Water sampling confirms elevated nutrients, depleted oxygen, and ecological collapse."
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Eutrophication: From Farm to Fish Kill",
    subtitle: "Step through the sequence of events linking agricultural pollution to ecosystem collapse.",
    takeaway: "Eutrophication is a chain reaction: excess nutrients from fertiliser runoff trigger algal blooms, whose decomposition depletes dissolved oxygen and can cause a complete fish kill."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setStep(i);
      },
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "2px solid var(--accent)",
        background: i <= step ? "var(--accent)" : "var(--surface)",
        color: i <= step ? "#fff" : "var(--ink-muted)",
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer"
      }
    }, i + 1);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 12,
      padding: 20,
      textAlign: "center",
      minHeight: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, steps[step].icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, steps[step].title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, steps[step].desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: function onClick() {
      return setStep(Math.max(0, step - 1));
    },
    disabled: step === 0
  }, "Previous"), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      alignSelf: "center"
    }
  }, step + 1, " of ", steps.length), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    onClick: function onClick() {
      return setStep(Math.min(steps.length - 1, step + 1));
    },
    disabled: step === steps.length - 1
  }, "Next")));
}
function WasteHierarchyGame() {
  var items = [{
    id: "a",
    label: "Buy a reusable coffee cup instead of disposable",
    bucket: "reduce"
  }, {
    id: "b",
    label: "Donate old clothes to an op shop",
    bucket: "reuse"
  }, {
    id: "c",
    label: "Put aluminium cans in the recycling bin",
    bucket: "recycle"
  }, {
    id: "d",
    label: "Use waste-to-energy incineration for unsorted rubbish",
    bucket: "recover"
  }, {
    id: "e",
    label: "Send unsorted general waste to landfill",
    bucket: "dispose"
  }, {
    id: "f",
    label: "Choose a product with less packaging",
    bucket: "reduce"
  }, {
    id: "g",
    label: "Repair a broken bicycle instead of buying a new one",
    bucket: "reuse"
  }, {
    id: "h",
    label: "Sort glass bottles into the recycling bin",
    bucket: "recycle"
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Waste Hierarchy Sorter",
    subtitle: "Sort each action into its correct level of the waste hierarchy, from most to least preferred.",
    takeaway: "The waste hierarchy ranks strategies from most preferred (reduce) to least preferred (dispose), because preventing waste at the source avoids more environmental impact than treating it later."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: items,
    buckets: [{
      id: "reduce",
      label: "Reduce"
    }, {
      id: "reuse",
      label: "Reuse"
    }, {
      id: "recycle",
      label: "Recycle"
    }, {
      id: "recover",
      label: "Recover"
    }, {
      id: "dispose",
      label: "Dispose"
    }]
  }));
}
function RecyclingEnergyComparison() {
  var materials = [{
    name: "Aluminium",
    saving: 95,
    col: "#6366f1"
  }, {
    name: "Steel",
    saving: 75,
    col: "#3b82f6"
  }, {
    name: "PET Plastic",
    saving: 60,
    col: "#22c55e"
  }, {
    name: "Paper",
    saving: 50,
    col: "#f59e0b"
  }, {
    name: "Glass",
    saving: 25,
    col: "#06b6d4"
  }];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    sel = _useState16[0],
    setSel = _useState16[1];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Recycling Energy Savings",
    subtitle: "Energy saved by recycling versus producing from virgin raw materials. Tap a bar to see details.",
    takeaway: "Recycling materials like aluminium saves a large proportion of the energy needed to produce them from raw materials, which is why recycling has significant environmental and economic benefits."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 460 180",
    width: "100%",
    style: {
      maxWidth: 460
    }
  }, materials.map(function (m, i) {
    var barW = m.saving / 100 * 300;
    var y = i * 34 + 10;
    return /*#__PURE__*/React.createElement("g", {
      key: m.name,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setSel(sel === i ? null : i);
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: 80,
      y: y,
      width: barW,
      height: 26,
      rx: 4,
      fill: m.col,
      opacity: sel === null || sel === i ? 0.9 : 0.3
    }), /*#__PURE__*/React.createElement("text", {
      x: 76,
      y: y + 17,
      textAnchor: "end",
      fontSize: 12,
      fill: "var(--ink)",
      fontWeight: sel === i ? 700 : 400
    }, m.name), /*#__PURE__*/React.createElement("text", {
      x: 84 + barW,
      y: y + 17,
      fontSize: 12,
      fontWeight: 700,
      fill: m.col
    }, m.saving, "%"));
  }), /*#__PURE__*/React.createElement("line", {
    x1: 80,
    y1: 0,
    x2: 80,
    y2: 180,
    stroke: "var(--border)",
    strokeWidth: 1
  })), sel !== null && /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "".concat(materials[sel].name, " recycling")
  }, "Recycling ", materials[sel].name, " saves approximately ", materials[sel].saving, "% of the energy needed to produce it from virgin raw materials. ", materials[sel].name === "Aluminium" ? "Aluminium smelting from bauxite uses electrolysis, which is extremely energy-intensive. Melting recycled aluminium needs only a fraction of that energy." : materials[sel].name === "Glass" ? "Glass melting from sand requires less electrochemical processing than aluminium, so the energy saving from recycling is smaller in comparison." : ""));
}

/* ============================================================
   SECTION 4
   ============================================================ */
function Section4(_ref9) {
  var progress = _ref9.progress,
    setProgress = _ref9.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "4.4 Alternative Resource Use and Recycling"), /*#__PURE__*/React.createElement("h1", null, "Pollution, Resources, and Recycling"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "From eutrophication to enzyme-powered recycling, science is reshaping how we handle pollution and waste.")), /*#__PURE__*/React.createElement(Figure, {
    caption: "The waste hierarchy, from most preferred (reduce, at the top) to least preferred (dispose, at the bottom). Each level up avoids more environmental impact than the level below it.",
    maxWidth: 640
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 720 324",
    width: "100%",
    role: "img",
    "aria-label": "Inverted pyramid of the waste hierarchy: reduce at the wide top, then reuse, recycle, recover energy, and dispose (landfill) at the narrow bottom."
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "24",
    x2: "22",
    y2: "294",
    stroke: "var(--ink-muted)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22,306 L15,292 L29,292 Z",
    fill: "var(--ink-muted)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "34",
    y: "32",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--ink-muted)"
  }, "Most"), /*#__PURE__*/React.createElement("text", {
    x: "34",
    y: "46",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--ink-muted)"
  }, "preferred"), /*#__PURE__*/React.createElement("text", {
    x: "34",
    y: "290",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--ink-muted)"
  }, "Least"), /*#__PURE__*/React.createElement("text", {
    x: "34",
    y: "304",
    fontSize: "12",
    fontWeight: "700",
    fill: "var(--ink-muted)"
  }, "preferred"), /*#__PURE__*/React.createElement("polygon", {
    points: "100,18 500,18 467,72 133,72",
    fill: "var(--green)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "51",
    textAnchor: "middle",
    fontSize: "18",
    fontWeight: "800",
    fill: "#fff"
  }, "Reduce"), /*#__PURE__*/React.createElement("text", {
    x: "498",
    y: "50",
    fontSize: "14",
    fill: "var(--ink)"
  }, "Avoid waste: buy and use less"), /*#__PURE__*/React.createElement("polygon", {
    points: "133,77 467,77 434,131 166,131",
    fill: "var(--teal)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "110",
    textAnchor: "middle",
    fontSize: "18",
    fontWeight: "800",
    fill: "#fff"
  }, "Reuse"), /*#__PURE__*/React.createElement("text", {
    x: "464",
    y: "109",
    fontSize: "14",
    fill: "var(--ink)"
  }, "Use again: refill, repair, donate"), /*#__PURE__*/React.createElement("polygon", {
    points: "166,136 434,136 401,190 199,190",
    fill: "var(--blue)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "169",
    textAnchor: "middle",
    fontSize: "18",
    fontWeight: "800",
    fill: "#fff"
  }, "Recycle"), /*#__PURE__*/React.createElement("text", {
    x: "432",
    y: "168",
    fontSize: "14",
    fill: "var(--ink)"
  }, "Reprocess into new products"), /*#__PURE__*/React.createElement("polygon", {
    points: "199,195 401,195 368,249 232,249",
    fill: "var(--amber)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "228",
    textAnchor: "middle",
    fontSize: "18",
    fontWeight: "800",
    fill: "#1b1a17"
  }, "Recover"), /*#__PURE__*/React.createElement("text", {
    x: "398",
    y: "227",
    fontSize: "14",
    fill: "var(--ink)"
  }, "Burn waste to recover energy"), /*#__PURE__*/React.createElement("polygon", {
    points: "232,254 368,254 335,308 265,308",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "287",
    textAnchor: "middle",
    fontSize: "14",
    fontWeight: "800",
    fill: "#fff"
  }, "Dispose"), /*#__PURE__*/React.createElement("text", {
    x: "366",
    y: "286",
    fontSize: "14",
    fill: "var(--ink)"
  }, "Landfill: the last resort"))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.4.1",
    title: "Describe the causes of environmental pollution and discuss its implications",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The introduction of substances into the natural environment at concentrations or rates that cause harmful effects on living organisms, ecosystems, or human health."
  }, "Environmental pollution"), " occurs in air, water, and soil. Air pollution from burning fossil fuels produces ", /*#__PURE__*/React.createElement(Term, {
    def: "Sulfur dioxide, a gas produced by burning coal and smelting metals that reacts with water vapour to form acid rain."
  }, "sulfur dioxide (SO\u2082)"), ", nitrogen oxides (NOx), and ", /*#__PURE__*/React.createElement(Term, {
    def: "Fine particulate matter smaller than 2.5 micrometres that penetrates deep into the lungs and causes cardiovascular and respiratory disease."
  }, "PM2.5"), ". Water pollution comes from agricultural runoff containing fertilisers and pesticides, industrial discharge of heavy metals, sewage, and plastic waste. Soil contamination results from industrial spills, mining waste, and landfill leachate."), /*#__PURE__*/React.createElement("p", null, "The implications are wide-ranging. ", /*#__PURE__*/React.createElement(Term, {
    def: "The over-enrichment of a water body with nutrients (usually nitrogen and phosphorus from fertiliser runoff), causing algal blooms that deplete oxygen and kill aquatic life."
  }, "Eutrophication"), " of waterways from nitrogen runoff causes algal blooms, oxygen depletion, and fish kills. ", /*#__PURE__*/React.createElement(Term, {
    def: "Acidic precipitation formed when SO\u2082 and NOx react with water vapour in the atmosphere to produce sulfuric and nitric acid."
  }, "Acid rain"), " damages forests and acidifies lakes. Heavy metals such as lead and mercury ", /*#__PURE__*/React.createElement(Term, {
    def: "The build-up of a substance in an organism faster than it is broken down or removed. When it becomes more concentrated at each higher level of a food chain, this is called biomagnification."
  }, "bioaccumulate"), " in food chains. ", /*#__PURE__*/React.createElement(Term, {
    def: "Tiny plastic particles less than 5 mm in diameter, produced by fragmentation of larger plastic items or released directly from cosmetics and synthetic textiles."
  }, "Microplastics"), " are now found in marine organisms at every trophic level."), /*#__PURE__*/React.createElement(PollutionChain, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "What is eutrophication?",
    options: ["Acidification of rainwater by SO₂ and NOx", "Over-enrichment of water with nutrients causing algal blooms and oxygen depletion", "Bioaccumulation of heavy metals in food chains", "Particulate matter settling into waterways"],
    correct: 1,
    explain: "Eutrophication is the over-enrichment of a water body with nutrients, usually from agricultural fertiliser runoff, causing rapid algal growth. When algae die, decomposing bacteria deplete dissolved oxygen, causing fish kills."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Explain how acid rain forms and describe two types of damage it causes.",
    model: "Acid rain forms when SO\u2082 and NOx from burning fossil fuels react with water vapour, oxygen, and other chemicals in the atmosphere to form sulfuric acid and nitric acid. This falls as acidic rain or dry deposition. It damages conifer forests by leaching nutrients from soil and damaging leaf surfaces. It also acidifies lakes and rivers, reducing pH to levels that kill fish and aquatic invertebrates."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.4.2",
    title: "Research how Aboriginal and Torres Strait Islander Peoples have developed sustainable harvesting practices",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Aboriginal and Torres Strait Islander Peoples have lived in Australia for more than 65,000 years, developing detailed and sophisticated ", /*#__PURE__*/React.createElement(Term, {
    def: "The detailed long-term ecological understanding developed by Indigenous peoples through continuous observation and interaction with their environment over many generations."
  }, "Indigenous Ecological Knowledge (IEK)"), " through continuous observation of the natural environment. This knowledge encompasses seasonal cycles, plant and animal behaviour, ecological relationships, and sustainable resource management. It is embedded in language, ceremony, cultural protocols, and law, and has been refined and transmitted across many generations."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The practice of using carefully timed, low-intensity fires to manage landscapes, developed and practised by Aboriginal peoples for tens of thousands of years. Also called cool burning or fire-stick farming."
  }, "Cultural burning"), " is one of the most scientifically recognised examples. For tens of thousands of years, Aboriginal peoples used carefully timed, low-intensity burns to manage landscapes: clearing undergrowth, promoting food plants, creating ", /*#__PURE__*/React.createElement(Term, {
    def: "A landscape with patches at different stages of vegetation regrowth, created by mosaic burning, which supports greater biodiversity than uniform habitats."
  }, "habitat mosaics"), " for biodiversity, and reducing fuel loads that would otherwise allow catastrophic wildfires. Modern fire scientists and land managers increasingly incorporate cultural burning alongside scientific fire management."), /*#__PURE__*/React.createElement("p", null, "Sea country management by Torres Strait Islander communities involves cultural protocols about when, where, and how much of a species may be harvested, based on population knowledge accumulated over generations. Research comparing sea country managed under traditional protocols with adjacent unmanaged areas has found higher fish and invertebrate biomass under traditional management, providing scientific validation of practices developed through millennia of ecological observation."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "IEK and sustainability principles"
  }, "Cultural burning directly embodies intergenerational equity (practised for 65,000 years for future generations) and biodiversity conservation (habitat mosaics support greater species diversity than unmanaged land). IEK is not separate from science; it is a form of systematic, evidence-based knowledge accumulated over thousands of years."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Indigenous Sustainable Practices",
    subtitle: "Three key examples of Indigenous ecological knowledge applied to sustainable resource management.",
    takeaway: "Aboriginal and Torres Strait Islander peoples developed sustainable resource management practices over tens of thousands of years, and these embody the same principles of intergenerational equity and biodiversity conservation used in modern sustainability science."
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      gap: 12
    }
  }, [{
    title: "Cultural Burning",
    icon: "🔥",
    body: "Low-intensity, timed burns managed biodiversity and reduced fuel loads for tens of thousands of years. Now being reintegrated into modern land management across Australia."
  }, {
    title: "Sea Country Management",
    icon: "🌊",
    body: "Cultural protocols restrict when, where, and how much is harvested, protecting breeding populations. Research confirms higher fish biomass in traditionally managed areas."
  }, {
    title: "Plant Harvesting Protocols",
    icon: "🌱",
    body: "Rules about seasons, quantities, and methods of gathering ensure plant populations are not depleted and ecosystems remain productive."
  }, {
    title: "Caring for Country",
    icon: "🗺",
    body: "The obligation and practice of maintaining the physical and spiritual health of specific Country, aligning with goals of biodiversity conservation and sustainable resource use."
  }].map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.title,
      style: {
        background: "var(--bg-2)",
        borderRadius: 10,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 700,
        marginBottom: 6
      }
    }, item.icon, " ", item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        margin: 0
      }
    }, item.body));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "What is cultural burning?",
    options: ["Burning fossil fuels as a cultural practice", "Carefully timed, low-intensity burns used by Aboriginal peoples to manage landscapes for tens of thousands of years", "Industrial burning of waste materials in remote areas", "A ceremonial fire used during seasonal festivals"],
    correct: 1,
    explain: "Cultural burning (also called cool burning or fire-stick farming) is the use of carefully timed, low-intensity fires to manage landscapes, a practice developed and refined by Aboriginal peoples over tens of thousands of years."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Explain why it is important to respect Indigenous cultural sovereignty when IEK is used in scientific or land management contexts.",
    model: "IEK belongs to the communities that developed it and is linked to specific Country, spiritual obligations, and cultural identity. Using IEK without proper acknowledgement, consent, and benefit-sharing arrangements constitutes cultural appropriation. Proper protocols include seeking free, prior, and informed consent; acknowledging the source community; ensuring benefits flow back to knowledge holders; and respecting restrictions on what knowledge can be shared publicly. Respectful engagement builds trust, enables genuine collaboration, and ensures IEK is used in ways that strengthen rather than undermine Indigenous cultural authority."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.4.3",
    title: "Discuss alternatives to current resource use, including how to reduce, reuse and recycle",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The current global economic model is largely linear: raw materials are extracted, processed into products, used, and discarded as waste. This ", /*#__PURE__*/React.createElement(Term, {
    def: "A linear economic model in which raw materials are extracted, made into products, used, and discarded as waste. Unsustainable because it depends on continuous extraction of finite resources."
  }, "take-make-dispose"), " model is unsustainable. Global material consumption has more than doubled since 1980. The ", /*#__PURE__*/React.createElement(Term, {
    def: "An economic model that keeps materials and products in use as long as possible through design for durability, repairability, and recyclability, minimising waste and reducing the need for new resource extraction."
  }, "circular economy"), " aims to keep materials in use indefinitely by redesigning products for durability and recyclability."), /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "A framework prioritising actions to reduce waste's environmental impact: reduce (most preferred), reuse, recycle, recover energy, then dispose (least preferred)."
  }, "waste hierarchy"), " guides decision-making. Reduce means using fewer materials and less energy in the first place. Reuse extends product life without reprocessing. Recycle recovers materials. Recover extracts energy from waste. Dispose (landfill) is the last resort. Each step up the hierarchy avoids more environmental impact than the step below, because it prevents impacts closer to the source."), /*#__PURE__*/React.createElement(WasteHierarchyGame, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "Why is 'reduce' considered more beneficial than 'recycle' in the waste hierarchy?",
    options: ["Reduce is easier for consumers", "Reduce prevents the environmental impact of production in the first place, while recycling still uses energy and resources to reprocess materials", "Recycled materials are always lower quality", "Reduce applies only to packaging, while recycle applies to all materials"],
    correct: 1,
    explain: "Reducing prevents the creation of the product and all its associated impacts from the start. Recycling still requires energy to collect, sort, transport, and reprocess materials, and not all materials are fully recovered. Reduce eliminates impacts at the source."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "Explain the difference between 'reuse' and 'recycle' and give one example of each.",
    model: "Reuse means using a product or component again without reprocessing it. The item keeps its form and no energy is needed to break it down and remake it (example: donating clothing to an op shop). Recycle means collecting used materials, breaking them down by melting, pulping, or chemical processing, and remaking them into new products (example: aluminium cans being melted and cast into new cans). Reuse requires less energy and fewer resources than recycling."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.4.4",
    title: "Describe current processes for recycling materials",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Recycling involves collecting used materials, processing them to remove contaminants, and remanufacturing into new products. All processes start with collection, sorting at a ", /*#__PURE__*/React.createElement(Term, {
    def: "A specialised plant that receives, sorts, and processes recyclable materials collected from households and businesses, using mechanical systems, magnetic separators, and optical sorters."
  }, "materials recovery facility (MRF)"), ", cleaning, and reprocessing. ", /*#__PURE__*/React.createElement(Term, {
    def: "The presence of non-recyclable items or food-soiled materials in recycling bins, which can spoil entire batches of recyclable material and increase processing costs."
  }, "Contamination"), " is a significant challenge."), /*#__PURE__*/React.createElement("p", null, "Aluminium is the most economically and environmentally valuable recycling stream. Recycling aluminium uses only about 5 percent of the energy needed to produce new aluminium from bauxite ore, saving about 95 percent of the energy. An aluminium can can be recycled and back on a supermarket shelf within 60 days. Paper recycling involves pulping in water, removing inks, and reforming fibres, though fibre length degrades with each cycle. Glass is crushed into ", /*#__PURE__*/React.createElement(Term, {
    def: "Crushed, cleaned recycled glass used as feedstock in furnaces; melts at lower temperature than virgin materials, saving energy."
  }, "cullet"), ", melted, and reformed. Plastics are the most complex stream due to the many different polymer types that cannot be mixed."), /*#__PURE__*/React.createElement(RecyclingEnergyComparison, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "Why is recycling aluminium particularly valuable compared to producing it from raw materials?",
    options: ["Aluminium cans are the most common item in recycling bins", "Recycling aluminium saves approximately 95% of the energy needed to smelt it from bauxite ore", "Aluminium is the only metal that can be recycled indefinitely", "Aluminium is the most abundant metal in Earth's crust"],
    correct: 1,
    explain: "Aluminium smelting from bauxite uses energy-intensive electrolysis. Melting recycled aluminium requires only about 5% of that energy, saving approximately 95% of the energy and greatly reducing greenhouse gas emissions."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 8,
    question: "Explain why recycling plastics is more complex than recycling aluminium or glass.",
    model: "There are dozens of different plastic types (PET, HDPE, PVC, LDPE, PP, PS etc) with different melting points, chemical properties, and recyclability. Mixing types produces poor-quality contaminated material. Unlike aluminium or glass, different plastics cannot be melted together usefully. Many plastic types have no recycling market or cannot be collected by kerbside programs. Plastics also degrade in quality with each recycling cycle (downcycling), unlike aluminium which can be recycled indefinitely."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.4.5",
    title: "Investigate how scientists have developed innovative ways to recycle materials",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Traditional mechanical recycling has limitations: it cannot process all materials, often produces lower quality output than virgin inputs, and cannot handle highly mixed or contaminated waste. Scientists are developing new approaches. ", /*#__PURE__*/React.createElement(Term, {
    def: "A recycling process that breaks plastic polymers into their constituent monomers or smaller molecules using heat, solvents, or catalysts, without the limitations of mechanical sorting."
  }, "Chemical recycling"), " includes pyrolysis (heating mixed plastics without oxygen to produce oil and gas feedstocks) and depolymerisation (breaking PET back to its original monomers for virgin-quality output)."), /*#__PURE__*/React.createElement("p", null, "Biological approaches include the use of ", /*#__PURE__*/React.createElement(Term, {
    def: "An enzyme discovered in 2016 in bacteria found at a Japanese plastic recycling facility, which naturally breaks down PET plastic. Engineered versions can do this much faster."
  }, "PETase"), ", an enzyme that can break down PET plastic. Engineered PETase versions break down PET far faster than natural degradation and could enable industrial-scale enzymatic recycling that produces high-purity monomers. ", /*#__PURE__*/React.createElement(Term, {
    def: "The recovery of valuable metals (gold, silver, rare earth elements) from electronic waste using chemical processes. E-waste often contains metals at concentrations far exceeding natural ore grades."
  }, "Urban mining"), " recovers gold, silver, copper, and rare earth elements from e-waste, with circuit boards containing tens to hundreds of times more gold per tonne than natural ore."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Innovation does not replace reduction"
  }, "Even the best recycling technology cannot achieve 100% recovery. Innovative recycling complements but does not replace the reduce and reuse steps at the top of the waste hierarchy. If chemical recycling is used to justify continued single-use plastic production, total plastic waste may still increase."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Innovative Recycling: Comparison",
    subtitle: "Four emerging technologies that go beyond conventional mechanical recycling.",
    takeaway: "Emerging recycling technologies such as enzymatic and chemical recycling can process materials that conventional mechanical recycling cannot, but they complement rather than replace the higher-priority steps of reducing and reusing."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [{
    name: "Chemical Recycling (Pyrolysis)",
    detail: "Heats mixed plastics at 300 to 700 °C without oxygen. Breaks polymers into oil and gas. Can handle contaminated, mixed plastics that cannot be mechanically recycled. Products used as fuel or feedstocks for new plastic."
  }, {
    name: "Enzymatic Recycling (PETase)",
    detail: "PETase enzyme discovered 2016 breaks PET back to monomers at near room temperature. Engineered versions are faster. Produces virgin-quality PET monomers with lower energy than pyrolysis."
  }, {
    name: "Urban Mining (E-waste)",
    detail: "Circuit boards contain gold at 200 to 300 g/tonne versus 1 to 5 g/tonne in best gold ores. Chemical extraction recovers gold, silver, copper, and rare earth elements at higher efficiency than mining primary ores."
  }, {
    name: "Textile-to-Fibre Recycling",
    detail: "Chemical processes dissolve cotton into cellulose or break polyester back into monomers. This enables fibre-to-fibre recycling of clothing with little quality loss, addressing the fashion industry's large waste problem."
  }].map(function (item) {
    return /*#__PURE__*/React.createElement("details", {
      key: item.name,
      style: {
        background: "var(--bg-2)",
        borderRadius: 10,
        padding: "10px 14px"
      }
    }, /*#__PURE__*/React.createElement("summary", {
      style: {
        fontWeight: 700,
        cursor: "pointer"
      }
    }, item.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "8px 0 0",
        fontSize: 14
      }
    }, item.detail));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 9,
    question: "What is PETase and why is it scientifically significant?",
    options: ["A chemical solvent for dissolving aluminium cans", "An enzyme discovered in 2016 that naturally breaks down PET plastic, with engineered versions enabling potential industrial-scale enzymatic recycling", "A type of plastic resin used in soft drink bottles", "A catalyst used in pyrolysis to improve oil yield"],
    correct: 1,
    explain: "PETase is an enzyme discovered in 2016 in bacteria at a Japanese recycling facility. It breaks down PET plastic. Engineered versions are faster and could enable industrial enzymatic recycling producing virgin-quality monomers."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 10,
    question: "Explain why 'urban mining' of e-waste is described as more efficient than primary mining for some metals.",
    model: "Circuit boards from mobile phones may contain 200 to 300 g of gold per tonne and over 1 kg of silver per tonne, plus significant copper, palladium, and rare earth elements. By comparison, natural gold ore typically contains only 1 to 5 g per tonne. This means urban mining needs to process far less material to recover the same mass of metal, potentially using less energy and producing less waste than conventional mining."
  }))));
}

/* ============================================================
   SECTION 5 INTERACTIVES
   ============================================================ */
function PlasticPathwayMap() {
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    active = _useState18[0],
    setActive = _useState18[1];
  var nodes = [{
    id: 0,
    x: 60,
    y: 20,
    label: "Plastic\nProduction",
    icon: "🏭"
  }, {
    id: 1,
    x: 60,
    y: 50,
    label: "Consumer\nUse",
    icon: "🛍"
  }, {
    id: 2,
    x: 20,
    y: 75,
    label: "Landfill /\nLitter",
    icon: "🗑"
  }, {
    id: 3,
    x: 60,
    y: 75,
    label: "Stormwater\nDrains",
    icon: "🌧"
  }, {
    id: 4,
    x: 90,
    y: 65,
    label: "River\nRunoff",
    icon: "🌊"
  }, {
    id: 5,
    x: 55,
    y: 90,
    label: "Ocean\nEntry",
    icon: "🌏"
  }, {
    id: 6,
    x: 25,
    y: 90,
    label: "Microplastic\nFragmentation",
    icon: "🔬"
  }, {
    id: 7,
    x: 75,
    y: 90,
    label: "Ocean\nAccumulation",
    icon: "🐋"
  }];
  var edges = [[0, 1], [1, 2], [1, 3], [1, 4], [2, 5], [3, 5], [4, 5], [5, 6], [5, 7]];
  var infos = ["Humans produce approximately 400 million tonnes of plastic each year globally.", "Single-use plastic is often used for only minutes to hours before it is thrown away.", "Inadequate waste management; littering; plastic blown from landfill sites near waterways.", "Urban plastic waste is carried via stormwater drains directly to rivers and the coast.", "Agricultural plastic, industrial packaging, and containers enter rivers as floodwater runoff.", "An estimated 8 to 14 million tonnes of plastic enters the ocean annually.", "UV, waves, and abrasion fragment plastic into microplastics under 5 mm and nanoplastics.", "Ocean gyres concentrate plastic into accumulation zones including the Great Pacific Garbage Patch."];
  var W = 360,
    H = 220;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Marine Plastic Pollution Pathway",
    subtitle: "Tap a node to explore how plastic travels from production to ocean accumulation.",
    takeaway: "Marine plastic pollution follows a multi-step pathway from production to ocean accumulation, and intervening at any early stage, especially waste management, prevents far more harm than trying to clean up the ocean."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    width: "100%",
    style: {
      maxWidth: W
    }
  }, edges.map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 2),
      a = _ref1[0],
      b = _ref1[1];
    var n1 = nodes[a],
      n2 = nodes[b];
    return /*#__PURE__*/React.createElement("line", {
      key: "".concat(a, "-").concat(b),
      x1: n1.x * W / 100,
      y1: n1.y * H / 100,
      x2: n2.x * W / 100,
      y2: n2.y * H / 100,
      stroke: "var(--border)",
      strokeWidth: 2
    });
  }), nodes.map(function (n) {
    var cx = n.x * W / 100,
      cy = n.y * H / 100;
    var isActive = active === n.id;
    return /*#__PURE__*/React.createElement("g", {
      key: n.id,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setActive(active === n.id ? null : n.id);
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: 18,
      fill: isActive ? "var(--accent)" : "var(--bg-2)",
      stroke: "var(--accent)",
      strokeWidth: 2
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 5,
      textAnchor: "middle",
      fontSize: 14
    }, n.icon), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 26,
      textAnchor: "middle",
      fontSize: 9,
      fill: "var(--ink-muted)"
    }, n.label.split("\n")[0]));
  })), active !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 10,
      padding: 14,
      marginTop: 8,
      borderLeft: "4px solid var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      marginBottom: 4
    }
  }, nodes[active].icon, " ", nodes[active].label.replace("\n", " ")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, infos[active])));
}
function PlasticSolutionAnalyser() {
  var solutions = [{
    name: "Ban single-use plastics",
    env: 4,
    eco: 3,
    soc: 4,
    scale: 4,
    note: "Directly reduces one major plastic stream. Works best as part of a broader strategy."
  }, {
    name: "Improve waste management",
    env: 5,
    eco: 3,
    soc: 4,
    scale: 5,
    note: "Addresses root cause of ocean entry, especially in rapidly industrialising regions. High impact."
  }, {
    name: "Ocean cleanup (ships/booms)",
    env: 2,
    eco: 1,
    soc: 3,
    scale: 1,
    note: "Removes existing plastic but cannot keep pace with inputs. Very expensive. Cannot collect microplastics."
  }, {
    name: "Extended producer responsibility",
    env: 4,
    eco: 4,
    soc: 3,
    scale: 4,
    note: "Makes manufacturers responsible for end-of-life management, incentivising better design."
  }, {
    name: "International plastic treaty",
    env: 5,
    eco: 3,
    soc: 4,
    scale: 5,
    note: "Global coordination needed because plastic pollution crosses national borders. High potential impact."
  }];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    sel = _useState20[0],
    setSel = _useState20[1];
  var s = solutions[sel];
  var cols = {
    1: "#ef4444",
    2: "#f97316",
    3: "#eab308",
    4: "#22c55e",
    5: "#16a34a"
  };
  var ScoreDot = function ScoreDot(_ref10) {
    var v = _ref10.v;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3
      }
    }, [1, 2, 3, 4, 5].map(function (i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: i <= v ? cols[v] : "var(--border)"
        }
      });
    }));
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Marine Plastic: Solution Analyser",
    subtitle: "Select a solution strategy and see how it rates across four sustainability criteria.",
    takeaway: "Improving waste management infrastructure scores top marks on both environmental effectiveness and scalability, making it one of the most impactful single strategies for reducing marine plastic pollution."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, solutions.map(function (sol, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setSel(i);
      },
      style: {
        padding: "6px 12px",
        borderRadius: 8,
        border: "2px solid var(--accent)",
        cursor: "pointer",
        background: i === sel ? "var(--accent)" : "var(--surface)",
        color: i === sel ? "#fff" : "var(--ink)",
        fontWeight: 600,
        fontSize: 12
      }
    }, sol.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontStyle: "italic",
      fontSize: 13
    }
  }, s.note), [["Environmental Effectiveness", s.env], ["Economic Viability", s.eco], ["Social Acceptability", s.soc], ["Scalability", s.scale]].map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
      label = _ref12[0],
      val = _ref12[1];
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 14
      }
    }, label), /*#__PURE__*/React.createElement(ScoreDot, {
      v: val
    }));
  })));
}

/* ============================================================
   SECTION 5
   ============================================================ */
function Section5(_ref13) {
  var progress = _ref13.progress,
    setProgress = _ref13.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "4.5 Environmental Sustainability in Context"), /*#__PURE__*/React.createElement("h1", null, "Marine Plastic Pollution: A Case Study"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Plastic in the ocean is one of the clearest examples of human activity driving a measurable environmental crisis, and one that science can help us solve.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/marine-plastic.png",
    caption: "Marine plastic pollution threatens ocean life such as sea turtles."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "4.5.1",
    title: "Discuss the link between human activity and one specific environmental pollution concern",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Humans produce approximately 400 million tonnes of plastic each year globally, of which an estimated 8 to 14 million tonnes enters the ocean annually. The primary human activities responsible include single-use plastic production and consumption, inadequate waste management (uncollected plastic, landfill near waterways, stormwater drains), industrial ", /*#__PURE__*/React.createElement(Term, {
    def: "Small pre-production plastic pellets about 3 to 5 mm in diameter used as feedstock for manufacturing plastic products. Spilled during transport, they are mistaken for food by marine wildlife."
  }, "nurdle"), " spillage, and the washing of synthetic textiles which releases ", /*#__PURE__*/React.createElement(Term, {
    def: "Plastic fibres under 5 mm shed from synthetic clothing during washing, which pass through wastewater treatment and enter waterways."
  }, "microplastic fibres"), " into wastewater."), /*#__PURE__*/React.createElement("p", null, "Once in the ocean, plastics do not biodegrade. Instead they fragment progressively into ", /*#__PURE__*/React.createElement(Term, {
    def: "Plastic particles less than 5 mm in diameter formed by the fragmentation of larger plastic items under UV radiation, waves, and abrasion."
  }, "microplastics"), " and ", /*#__PURE__*/React.createElement(Term, {
    def: "Plastic particles less than 1 micrometre in diameter, formed by further fragmentation of microplastics."
  }, "nanoplastics"), " under UV radiation, waves, and abrasion. Ocean gyres concentrate floating debris into accumulation zones. The ", /*#__PURE__*/React.createElement(Term, {
    def: "A large region of elevated plastic concentration in the North Pacific Ocean, approximately 1.6 million km\xB2, formed by ocean gyres concentrating floating debris."
  }, "Great Pacific Garbage Patch"), " is the most well-known, estimated at approximately 1.6 million km\xB2. Marine animals at all levels are affected: sea turtles mistake bags for jellyfish; seabirds feed plastic to chicks; whales and whale sharks ingest microplastics while filter-feeding. Entanglement in discarded fishing nets and plastic bands injures or kills dolphins, seals, and turtles."), /*#__PURE__*/React.createElement(PlasticPathwayMap, null), /*#__PURE__*/React.createElement("p", null, "Scientists have established the link through multiple lines of evidence. Chemical analysis of plastic debris identifies polymer type, manufacturing additives, and geographic origin. Beach and ocean surveys by organisations such as CSIRO document quantities and types of plastic. Ingestion studies on seabirds, fish, and marine mammals demonstrate direct transfer from environment to wildlife tissue. Mass balance modelling estimates global plastic flows."), /*#__PURE__*/React.createElement("p", null, "Addressing marine plastic pollution requires action at multiple points: reducing single-use plastic production; improving waste collection globally; redesigning plastics to be more recyclable; ", /*#__PURE__*/React.createElement(Term, {
    def: "A policy framework making manufacturers financially responsible for the end-of-life collection and recycling of their products, incentivising better design."
  }, "extended producer responsibility (EPR)"), " schemes; and international agreements for coordinated global action."), /*#__PURE__*/React.createElement(PlasticSolutionAnalyser, null), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Prevention beats cleanup"
  }, "Ocean cleanup removes plastic already distributed across vast ocean areas, but cannot keep pace with new inputs or collect microplastics. Reducing production and improving waste management at the source is far more effective at solving the root cause."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Approximately how many million tonnes of plastic enter the ocean each year?",
    options: ["1 to 2 million", "8 to 14 million", "50 to 80 million", "200 to 300 million"],
    correct: 1,
    explain: "An estimated 8 to 14 million tonnes of plastic enters the ocean annually from various human activities."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "Why is ocean cleanup considered less effective than reducing plastic production at the source?",
    options: ["Ocean cleanup ships produce too many greenhouse gases", "Most plastic sinks to the ocean floor immediately", "Cleanup only addresses plastic already in the ocean, cannot keep pace with ongoing inputs, and cannot collect microplastics", "Ocean cleanup is too expensive for any government to fund"],
    correct: 2,
    explain: "Ocean cleanup addresses the symptom, not the cause. New plastic enters faster than it can be removed, and once plastic fragments into microplastics, it cannot be collected. Prevention at the source eliminates the problem before it enters the ocean pathway."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 3,
    question: "Using the causal pathway, explain why improving waste management infrastructure in rapidly industrialising regions is considered a high-priority solution to marine plastic pollution.",
    model: "The causal pathway shows that plastic must pass through multiple stages before reaching the ocean, including inadequate disposal, transport via stormwater and rivers, and ocean entry. Improving waste collection and management intercepts plastic early in the pathway before it enters waterways. Regions with high plastic production and poor waste collection are the main sources of ocean plastic inputs according to mass balance modelling. Addressing waste management at this stage prevents vast quantities of plastic from ever reaching the ocean, making it a high-impact, scalable solution."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Evaluate a proposed ban on single-use plastic bags using at least three sustainability solution criteria.",
    model: "Environmental effectiveness: directly reduces one major plastic stream; bag litter measurably declines. Score: good, though bags are a small fraction of total plastic by mass. Technical feasibility: alternatives such as reusable bags, paper bags, and compostable bags are commercially available. Score: high. Social acceptability: initial resistance from consumers; quickly normalised as seen in South Australia, Ireland, and the UK. Score: good after transition. Unintended consequences: thicker plastic bags may be classified as reusable but often are not; cotton totes have high water footprints if not used many times. Score: requires monitoring. Overall: a justified and effective policy but must be part of a broader strategy."
  }))));
}

/* ============================================================
   MOUNT
   ============================================================ */
mountTopicApp({
  year: 9,
  topicTitle: "Environmental Sustainability",
  branch: "environmental",
  heroImage: "img/hero.png",
  strand: "Stage 5 · NSW Science",
  accent: "green",
  storageKey: "y9.envsustainability",
  hubHref: "../",
  intro: "From the principles of sustainability to the science of climate change, from the water cycle to marine plastic pollution, this topic connects the systems that keep Earth liveable to the choices humans make every day. You will investigate real data, evaluate solutions, and build the scientific understanding needed to think clearly about the planet's future.",
  glossary: {
    "sustainability": "Meeting the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland, 1987).",
    "precautionary principle": "Taking protective measures to prevent environmental harm even when scientific evidence is not yet fully established.",
    "intergenerational equity": "The principle that the current generation must not use resources at a rate that prevents future generations from meeting their own needs.",
    "circular economy": "An economic model that keeps materials and products in use as long as possible through design for durability, repairability, and recyclability.",
    "waste hierarchy": "A framework ordering waste management strategies from most preferred (reduce) to least preferred (dispose), based on environmental impact.",
    "greenhouse gas": "A gas that absorbs and re-emits infrared radiation, warming Earth's surface. Includes water vapour, CO₂, methane, nitrous oxide, and ozone.",
    "enhanced greenhouse effect": "The intensification of natural greenhouse warming caused by human activities increasing greenhouse gas concentrations beyond their natural levels.",
    "climate": "The long-term average pattern of weather conditions for a region, calculated over at least 30 years.",
    "weather": "The short-term atmospheric conditions at a specific place and time, including temperature, rainfall, wind, and cloud cover.",
    "polar amplification": "The phenomenon where polar regions warm two to four times faster than the global average due to feedback mechanisms.",
    "temperature anomaly": "The difference between a measured temperature and the long-term average (baseline) for that period.",
    "ocean acidification": "The reduction in ocean pH caused by CO₂ dissolving in seawater to form carbonic acid, harming organisms that build calcium carbonate shells.",
    "eutrophication": "The over-enrichment of a water body with nutrients (usually nitrogen and phosphorus from fertiliser runoff), causing algal blooms and oxygen depletion.",
    "microplastics": "Plastic particles less than 5 mm in diameter, formed by fragmentation of larger plastics or released directly from cosmetics and synthetic textiles.",
    "permafrost": "Permanently frozen ground in Arctic and sub-Arctic regions that, when thawed, releases stored carbon as CO₂ and methane.",
    "zooxanthellae": "Microscopic photosynthetic algae living in coral tissue that provide up to 90% of coral energy and give coral its colour.",
    "coral bleaching": "Mass expulsion of zooxanthellae from coral tissue when ocean temperature rises 1 to 2 °C above seasonal maxima for several weeks, turning coral white.",
    "Indigenous Ecological Knowledge (IEK)": "The detailed, long-term ecological understanding developed by Indigenous peoples through continuous observation and interaction with their environment across generations.",
    "cultural burning": "The practice of using carefully timed, low-intensity fires to manage landscapes, developed and practised by Aboriginal Australians for tens of thousands of years.",
    "carbon capture and storage (CCS)": "Technology that captures CO₂ from industrial exhaust gases or directly from the air and stores it permanently underground in geological formations.",
    "urban mining": "The recovery of valuable metals and materials from electronic waste using chemical processes, taking advantage of high metal concentrations in e-waste.",
    "PETase": "An enzyme discovered in 2016 that naturally breaks down PET plastic; engineered versions can enable industrial-scale enzymatic recycling.",
    "drip irrigation": "A method delivering water directly to plant roots through small tubes, reducing evaporation and runoff by up to 50% compared with flood irrigation.",
    "extended producer responsibility (EPR)": "A policy framework making manufacturers financially responsible for end-of-life collection and recycling of their products.",
    "NDVI": "Normalised Difference Vegetation Index, a satellite-derived measure of vegetation health using near-infrared and visible light reflectance.",
    "radar altimetry": "A satellite technique that measures ocean surface height by timing radar pulse return, detecting sea level change to within about 1 centimetre.",
    "nurdle": "A small pre-production plastic pellet used as feedstock for manufacturing plastic products. Accidental spills release them into waterways where wildlife mistakes them for food.",
    "pyrolysis": "Heating plastics at high temperatures without oxygen to break polymer chains into oil and gas that can be used as fuel or feedstocks for new plastics."
  },
  sections: [{
    id: "4.1",
    label: "Sustainability",
    accent: "green",
    blurb: "Principles, goals, and scientific problem-solving for a sustainable future.",
    points: ["4.1.1", "4.1.2"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section1, p);
    }
  }, {
    id: "4.2",
    label: "Climate Science",
    accent: "teal",
    blurb: "Weather, climate, greenhouse effect, global warming, and emission reduction.",
    points: ["4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section2, p);
    }
  }, {
    id: "4.3",
    label: "Climate Impacts",
    accent: "blue",
    blurb: "Consequences of climate change for water, ecosystems, and communities.",
    points: ["4.3.1", "4.3.2", "4.3.3", "4.3.4"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section3, p);
    }
  }, {
    id: "4.4",
    label: "Resources and Recycling",
    accent: "amber",
    blurb: "Pollution, Indigenous ecological knowledge, the waste hierarchy, and innovative recycling.",
    points: ["4.4.1", "4.4.2", "4.4.3", "4.4.4", "4.4.5"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section4, p);
    }
  }, {
    id: "4.5",
    label: "In Context",
    accent: "cyan",
    blurb: "Marine plastic pollution as a case study linking human activity to ecosystem harm.",
    points: ["4.5.1"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section5, p);
    }
  }]
});
