/* Generated from content.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

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
   SECTION 3.1 RESOURCES -- Custom Interactive: Resource Explorer
   ============================================================ */
function ResourceExplorer() {
  var _r$mt;
  var resources = [{
    name: "Iron ore",
    location: "Pilbara, WA",
    product: "Steel",
    prod: 895,
    unit: "Mt/yr",
    colour: "#b45309",
    fact: "Australia exports more iron ore than any other nation on Earth."
  }, {
    name: "Bauxite",
    location: "Qld, NT, WA",
    product: "Aluminium",
    prod: 101,
    unit: "Mt/yr",
    colour: "#92400e",
    fact: "Bauxite must be refined twice before it becomes aluminium metal."
  }, {
    name: "Coal",
    location: "NSW, Qld",
    product: "Electricity + steel",
    prod: 480,
    unit: "Mt/yr",
    colour: "#374151",
    fact: "Coal is a finite fossil fuel, formed from plant material that was buried about 300 million years ago."
  }, {
    name: "Copper",
    location: "SA, Qld",
    product: "Wiring + pipes",
    prod: 0.8,
    unit: "Mt/yr",
    colour: "#b45309",
    fact: "Copper has been used by humans for over 10,000 years."
  }, {
    name: "Lithium",
    location: "WA",
    product: "EV batteries",
    prod: 0.09,
    unit: "Mt/yr",
    colour: "#6d28d9",
    fact: "Lithium demand is surging due to electric vehicles and phones."
  }, {
    name: "Gold",
    location: "WA, Vic, NSW",
    product: "Electronics + jewellery",
    prod: 320,
    unit: "t/yr",
    mt: 0.00032,
    colour: "#d97706",
    fact: "Gold is an excellent electrical conductor and resists corrosion."
  }];
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    sel = _useState2[0],
    setSel = _useState2[1];
  var r = resources[sel];
  var maxProd = 895;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Australian Resource Explorer",
    subtitle: "Tap a resource to see where it comes from, what it makes, and how much is produced.",
    takeaway: "Australia's mineral resources are finite: each deposit formed over millions of years and cannot be replaced on a human timescale, making responsible use and recycling essential."
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16
    }
  }, resources.map(function (res, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: res.name,
      onClick: function onClick() {
        return setSel(i);
      },
      className: "chip".concat(i === sel ? " accent" : ""),
      style: {
        cursor: "pointer"
      }
    }, res.name);
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "1rem",
      borderLeft: "4px solid ".concat(r.colour)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "1.15rem",
      marginBottom: 4
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      marginBottom: 8
    }
  }, "Location: ", r.location), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, "Key product: ", /*#__PURE__*/React.createElement("strong", null, r.product)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      marginBottom: 4
    },
    className: "muted"
  }, "Annual production: ", r.prod, " ", r.unit), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 8,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(Math.max(2, ((_r$mt = r.mt) !== null && _r$mt !== void 0 ? _r$mt : r.prod) / maxProd * 100), "%"),
      height: "100%",
      background: r.colour,
      borderRadius: 8,
      transition: "width 0.5s"
    }
  }))), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Did you know?"
  }, r.fact)));
}

/* ============================================================
   SECTION 3.2 BONDING -- Custom Interactive: Atom Shell Builder
   ============================================================ */
function AtomShellBuilder() {
  var elements = [{
    sym: "H",
    name: "Hydrogen",
    z: 1,
    shells: [1],
    group: 1,
    valency: 1,
    bond: "loses/shares 1"
  }, {
    sym: "He",
    name: "Helium",
    z: 2,
    shells: [2],
    group: 18,
    valency: 0,
    bond: "already stable"
  }, {
    sym: "Li",
    name: "Lithium",
    z: 3,
    shells: [2, 1],
    group: 1,
    valency: 1,
    bond: "loses 1"
  }, {
    sym: "C",
    name: "Carbon",
    z: 6,
    shells: [2, 4],
    group: 14,
    valency: 4,
    bond: "shares 4"
  }, {
    sym: "N",
    name: "Nitrogen",
    z: 7,
    shells: [2, 5],
    group: 15,
    valency: 3,
    bond: "gains/shares 3"
  }, {
    sym: "O",
    name: "Oxygen",
    z: 8,
    shells: [2, 6],
    group: 16,
    valency: 2,
    bond: "gains/shares 2"
  }, {
    sym: "F",
    name: "Fluorine",
    z: 9,
    shells: [2, 7],
    group: 17,
    valency: 1,
    bond: "gains 1"
  }, {
    sym: "Ne",
    name: "Neon",
    z: 10,
    shells: [2, 8],
    group: 18,
    valency: 0,
    bond: "already stable"
  }, {
    sym: "Na",
    name: "Sodium",
    z: 11,
    shells: [2, 8, 1],
    group: 1,
    valency: 1,
    bond: "loses 1"
  }, {
    sym: "Mg",
    name: "Magnesium",
    z: 12,
    shells: [2, 8, 2],
    group: 2,
    valency: 2,
    bond: "loses 2"
  }, {
    sym: "Al",
    name: "Aluminium",
    z: 13,
    shells: [2, 8, 3],
    group: 13,
    valency: 3,
    bond: "loses 3"
  }, {
    sym: "Cl",
    name: "Chlorine",
    z: 17,
    shells: [2, 8, 7],
    group: 17,
    valency: 1,
    bond: "gains 1"
  }, {
    sym: "Ar",
    name: "Argon",
    z: 18,
    shells: [2, 8, 8],
    group: 18,
    valency: 0,
    bond: "already stable"
  }, {
    sym: "Ca",
    name: "Calcium",
    z: 20,
    shells: [2, 8, 8, 2],
    group: 2,
    valency: 2,
    bond: "loses 2"
  }];
  var _useState3 = useState(8),
    _useState4 = _slicedToArray(_useState3, 2),
    selIdx = _useState4[0],
    setSelIdx = _useState4[1];
  var el = elements[selIdx];
  var radii = [30, 54, 78, 102];
  var cx = 110,
    cy = 110;
  var colours = ["#7c3aed", "#2563eb", "#059669", "#d97706"];
  function electronPositions(count, r) {
    return Array.from({
      length: count
    }, function (_, i) {
      var angle = 2 * Math.PI * i / count - Math.PI / 2;
      return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle)
      };
    });
  }
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Atom Shell Builder",
    subtitle: "Select an element to see its electron shells and valency.",
    takeaway: "An element's valency is determined by the number of electrons in its outer shell, and atoms bond to gain, lose, or share electrons until they reach the stable full-shell arrangement of a noble gas."
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 12
    }
  }, elements.map(function (e, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: e.sym,
      onClick: function onClick() {
        return setSelIdx(i);
      },
      className: "chip".concat(i === selIdx ? " accent" : ""),
      style: {
        cursor: "pointer",
        minWidth: 42
      }
    }, e.sym);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 220",
    width: "220",
    height: "220",
    style: {
      flexShrink: 0
    }
  }, el.shells.map(function (_, si) {
    return /*#__PURE__*/React.createElement("circle", {
      key: si,
      cx: cx,
      cy: cy,
      r: radii[si],
      fill: "none",
      stroke: "var(--border)",
      strokeWidth: "1",
      strokeDasharray: "4 3"
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: 18,
    fill: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 1,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#fff"
  }, el.sym), el.shells.map(function (count, si) {
    return electronPositions(count, radii[si]).map(function (pos, ei) {
      return /*#__PURE__*/React.createElement("circle", {
        key: "".concat(si, "-").concat(ei),
        cx: pos.x,
        cy: pos.y,
        r: 6,
        fill: colours[si % colours.length],
        stroke: "#fff",
        strokeWidth: "1.5"
      });
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "1.1rem"
    }
  }, el.name, " (", el.sym, ")"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: "0.85rem",
      marginBottom: 8
    }
  }, "Atomic number: ", el.z), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Electron config: "), /*#__PURE__*/React.createElement("strong", null, el.shells.join(", "))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Group: "), /*#__PURE__*/React.createElement("strong", null, el.group)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Valency: "), /*#__PURE__*/React.createElement("strong", null, el.valency)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "To bond it: "), /*#__PURE__*/React.createElement("strong", null, el.bond))))));
}

/* ============================================================
   SECTION 3.2 BONDING -- Custom Interactive: Bond Type Visualiser
   ============================================================ */
function BondVisualiser() {
  var _useState5 = useState("ionic"),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var scenes = {
    ionic: {
      label: "Ionic: NaCl",
      desc: "The sodium atom (1 outer electron) transfers that electron to chlorine (7 outer electrons). Each ion now has a full outer shell. Opposite charges attract, forming a crystal lattice.",
      colours: ["#7c3aed", "#16a34a"],
      labels: ["Na⁺", "Cl⁻"],
      arrow: true
    },
    covalent: {
      label: "Covalent: H₂O",
      desc: "Oxygen shares one electron pair with each hydrogen. Both shared pairs count for each atom, giving oxygen 8 outer electrons and each hydrogen 2 (matching helium).",
      colours: ["#2563eb", "#e11d48", "#e11d48"],
      labels: ["O", "H", "H"],
      arrow: false
    },
    metallic: {
      label: "Metallic: Copper",
      desc: "Positive copper ions sit in a regular lattice. Outer electrons are delocalised, forming a 'sea' of free electrons. This sea holds the lattice together and makes copper an excellent conductor.",
      colours: ["#d97706", "#d97706", "#d97706", "#d97706"],
      labels: ["Cu⁺", "Cu⁺", "Cu⁺", "Cu⁺"],
      arrow: false
    }
  };
  var sc = scenes[type];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Bond Type Visualiser",
    subtitle: "Switch between bond types to compare electron behaviour.",
    takeaway: "Ionic bonds transfer electrons between metal and non-metal atoms, covalent bonds share electrons between non-metals, and metallic bonds involve a 'sea' of delocalised electrons. Each bond type produces materials with very different properties."
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: [{
      value: "ionic",
      label: "Ionic"
    }, {
      value: "covalent",
      label: "Covalent"
    }, {
      value: "metallic",
      label: "Metallic"
    }],
    value: type,
    onChange: setType
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 140",
    width: "100%",
    style: {
      maxWidth: 360
    }
  }, type === "ionic" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 90,
    cy: 70,
    r: 32,
    fill: "#7c3aed",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("text", {
    x: 90,
    y: 68,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "16",
    fontWeight: "700",
    fill: "#fff"
  }, "Na"), /*#__PURE__*/React.createElement("text", {
    x: 90,
    y: 88,
    textAnchor: "middle",
    fontSize: "11",
    fill: "#fff"
  }, "2,8,1"), /*#__PURE__*/React.createElement("circle", {
    cx: 90,
    cy: 38,
    r: 7,
    fill: "#fbbf24",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 140,
    y: 74,
    textAnchor: "middle",
    fontSize: "22",
    fill: "var(--accent-deep)"
  }, "\u2192"), /*#__PURE__*/React.createElement("circle", {
    cx: 270,
    cy: 70,
    r: 36,
    fill: "#16a34a",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("text", {
    x: 270,
    y: 68,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "16",
    fontWeight: "700",
    fill: "#fff"
  }, "Cl"), /*#__PURE__*/React.createElement("text", {
    x: 270,
    y: 88,
    textAnchor: "middle",
    fontSize: "11",
    fill: "#fff"
  }, "2,8,7"), /*#__PURE__*/React.createElement("circle", {
    cx: 270,
    cy: 34,
    r: 7,
    fill: "#fbbf24",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 90,
    y: 118,
    textAnchor: "middle",
    fontSize: "13",
    fill: "var(--ink)"
  }, "Na\u207A"), /*#__PURE__*/React.createElement("text", {
    x: 270,
    y: 118,
    textAnchor: "middle",
    fontSize: "13",
    fill: "var(--ink)"
  }, "Cl\u207B"), /*#__PURE__*/React.createElement("text", {
    x: 180,
    y: 118,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "electron transferred")), type === "covalent" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: 180,
    cy: 65,
    r: 38,
    fill: "#e11d48",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("text", {
    x: 180,
    y: 63,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "16",
    fontWeight: "700",
    fill: "#fff"
  }, "O"), /*#__PURE__*/React.createElement("text", {
    x: 180,
    y: 82,
    textAnchor: "middle",
    fontSize: "11",
    fill: "#fff"
  }, "2,6"), /*#__PURE__*/React.createElement("circle", {
    cx: 80,
    cy: 65,
    r: 24,
    fill: "#2563eb",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("text", {
    x: 80,
    y: 65,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "15",
    fontWeight: "700",
    fill: "#fff"
  }, "H"), /*#__PURE__*/React.createElement("circle", {
    cx: 280,
    cy: 65,
    r: 24,
    fill: "#2563eb",
    opacity: 0.85
  }), /*#__PURE__*/React.createElement("text", {
    x: 280,
    y: 65,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "15",
    fontWeight: "700",
    fill: "#fff"
  }, "H"), /*#__PURE__*/React.createElement("line", {
    x1: 104,
    y1: 65,
    x2: 142,
    y2: 65,
    stroke: "#fbbf24",
    strokeWidth: "5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: 218,
    y1: 65,
    x2: 256,
    y2: 65,
    stroke: "#fbbf24",
    strokeWidth: "5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: 180,
    y: 118,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "shared electron pairs (bonds)")), type === "metallic" && /*#__PURE__*/React.createElement(React.Fragment, null, [[80, 50], [180, 50], [280, 50], [80, 110], [180, 110], [280, 110]].map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 2),
      cx = _ref2[0],
      cy = _ref2[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: 22,
      fill: "#d97706",
      opacity: 0.9
    });
  }), [[80, 50], [180, 50], [280, 50], [80, 110], [180, 110], [280, 110]].map(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      cx = _ref4[0],
      cy = _ref4[1];
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: cx,
      y: cy,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: "13",
      fontWeight: "700",
      fill: "#fff"
    }, "Cu\u207A");
  }), [50, 110, 170, 230, 290, 130, 195, 255, 145, 245].map(function (x, i) {
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: 20 + i % 3 * 40,
      r: 4,
      fill: "#fbbf24",
      opacity: 0.9
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: 180,
    y: 134,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "delocalised electrons (sea)"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "0.9rem"
    }
  }, sc.desc)));
}

/* ============================================================
   SECTION 3.3 ORGANIC -- Custom Interactive: Fractional Distillation Column
   ============================================================ */
function FractionColumn() {
  var fractions = [{
    name: "Refinery gas (LPG)",
    bp: "Below 40 °C",
    chain: "C₁ to C₄",
    use: "Cooking, plastics",
    y: 12,
    height: 22,
    colour: "#e11d48"
  }, {
    name: "Petrol",
    bp: "40 to 175 °C",
    chain: "C₅ to C₁₀",
    use: "Car fuel",
    y: 36,
    height: 26,
    colour: "#f97316"
  }, {
    name: "Naphtha",
    bp: "40 to 180 °C",
    chain: "C₅ to C₁₀",
    use: "Chemical feedstock",
    y: 64,
    height: 20,
    colour: "#eab308"
  }, {
    name: "Kerosene",
    bp: "175 to 325 °C",
    chain: "C₁₀ to C₁₆",
    use: "Aviation fuel",
    y: 86,
    height: 24,
    colour: "#84cc16"
  }, {
    name: "Diesel",
    bp: "250 to 350 °C",
    chain: "C₁₄ to C₂₀",
    use: "Trucks, trains",
    y: 112,
    height: 24,
    colour: "#22d3ee"
  }, {
    name: "Fuel oil",
    bp: "350 to 500 °C",
    chain: "C₂₀ to C₅₀",
    use: "Ships, boilers",
    y: 138,
    height: 24,
    colour: "#6366f1"
  }, {
    name: "Bitumen",
    bp: "Above 500 °C",
    chain: "Above C₇₀",
    use: "Road surfaces",
    y: 164,
    height: 28,
    colour: "#374151"
  }];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    sel = _useState8[0],
    setSel = _useState8[1];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Fractional Distillation Column",
    subtitle: "Tap a fraction to learn its boiling point range, chain length and uses.",
    takeaway: "Fractional distillation separates crude oil by boiling point: shorter carbon chains have lower boiling points and condense near the top of the column, while longer chains condense lower down."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 160,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 -10 160 232",
    width: "160",
    height: "232"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 40,
    y: 8,
    width: 80,
    height: 196,
    rx: "6",
    fill: "var(--bg-2)",
    stroke: "var(--border)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 80,
    y: 2,
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--ink-muted)"
  }, "Cooler top"), /*#__PURE__*/React.createElement("text", {
    x: 80,
    y: 217,
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--ink-muted)"
  }, "Hotter bottom"), fractions.map(function (f, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: f.name,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setSel(i === sel ? null : i);
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: 42,
      y: f.y,
      width: 76,
      height: f.height,
      rx: "3",
      fill: f.colour,
      opacity: i === sel ? 1 : 0.65,
      stroke: i === sel ? "#fff" : "none",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: 80,
      y: f.y + f.height / 2 + 1,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: "9",
      fill: "#fff",
      fontWeight: "600"
    }, f.name.split(" ")[0]));
  }), /*#__PURE__*/React.createElement("text", {
    x: 20,
    y: 110,
    textAnchor: "middle",
    fontSize: "9",
    fill: "var(--ink-muted)",
    transform: "rotate(-90,20,110)"
  }, "Temperature"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, sel !== null ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.75rem",
      borderLeft: "4px solid ".concat(fractions[sel].colour)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 4
    }
  }, fractions[sel].name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Boiling point: "), fractions[sel].bp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Chain length: "), fractions[sel].chain), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.85rem",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Uses: "), fractions[sel].use)) : /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "Tap a fraction on the column to see its details."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "0.85rem"
    }
  }, "Shorter chains (fewer carbons) rise higher because they have lower boiling points. Longer chains collect at the bottom.")), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key idea",
    style: {
      marginTop: 12
    }
  }, "Fractional distillation separates crude oil using differences in boiling point, not chemical reactions."))));
}

/* ============================================================
   SECTION 3.3 ORGANIC -- Custom Interactive: Alkane Builder
   ============================================================ */
function AlkaneBuilder() {
  var alkanes = [{
    n: 1,
    name: "Methane",
    bp: -161,
    state: "Gas",
    use: "Natural gas fuel"
  }, {
    n: 2,
    name: "Ethane",
    bp: -89,
    state: "Gas",
    use: "Natural gas component; used to make ethene for plastics"
  }, {
    n: 3,
    name: "Propane",
    bp: -42,
    state: "Gas",
    use: "BBQ gas"
  }, {
    n: 4,
    name: "Butane",
    bp: -1,
    state: "Gas",
    use: "Lighter fuel"
  }, {
    n: 5,
    name: "Pentane",
    bp: 36,
    state: "Liquid",
    use: "Solvent"
  }, {
    n: 6,
    name: "Hexane",
    bp: 69,
    state: "Liquid",
    use: "Solvent"
  }, {
    n: 7,
    name: "Heptane",
    bp: 98,
    state: "Liquid",
    use: "Fuel testing"
  }, {
    n: 8,
    name: "Octane",
    bp: 126,
    state: "Liquid",
    use: "Petrol component"
  }];
  var _useState9 = useState(1),
    _useState0 = _slicedToArray(_useState9, 2),
    n = _useState0[0],
    setN = _useState0[1];
  var al = alkanes[n - 1];
  var sub = function sub(v) {
    return String(v).split("").map(function (c) {
      return "₀₁₂₃₄₅₆₇₈₉"[+c];
    }).join("");
  };
  var formula = "C".concat(n > 1 ? sub(n) : "", "H").concat(sub(2 * n + 2));
  var bpMin = -161,
    bpMax = 126;
  var pct = (al.bp - bpMin) / (bpMax - bpMin);
  var cx = 20 + pct * 280;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Alkane Builder",
    subtitle: "Use the slider to build alkanes from C\u2081 (methane) to C\u2088 (octane) and watch the formula, boiling point and state change.",
    takeaway: "As alkane chain length increases, boiling point rises and state changes from gas to liquid because larger molecules have stronger intermolecular forces."
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Carbon atoms (n)",
    min: 1,
    max: 8,
    step: 1,
    value: n,
    onChange: function onChange(v) {
      return setN(v);
    },
    unit: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: al.name,
    label: "IUPAC name"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: formula,
    label: "Molecular formula"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "".concat(al.bp, " \xB0C"),
    label: "Boiling point"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: al.state,
    label: "State at 25 \xB0C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      marginBottom: 4
    },
    className: "muted"
  }, "Boiling point trend: methane to octane"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 56",
    width: "100%",
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: 20,
    y: 20,
    width: 280,
    height: 16,
    rx: 8,
    fill: "var(--bg-2)",
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "bpGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#60a5fa"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#f97316"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: 20,
    y: 20,
    width: pct * 280,
    height: 16,
    rx: 8,
    fill: "url(#bpGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: 28,
    r: 9,
    fill: "var(--accent-deep)",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: 52,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink)"
  }, al.bp, " \xB0C"), /*#__PURE__*/React.createElement("text", {
    x: 20,
    y: 12,
    fontSize: "10",
    fill: "var(--ink-muted)"
  }, "-161 \xB0C"), /*#__PURE__*/React.createElement("text", {
    x: 280,
    y: 12,
    textAnchor: "end",
    fontSize: "10",
    fill: "var(--ink-muted)"
  }, "126 \xB0C"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "0.85rem"
    }
  }, "Use: ", al.use));
}

/* ============================================================
   SECTION 3.4 POLYMERS -- Custom Interactive: Polymer Properties Comparison
   ============================================================ */
function PolymerComparison() {
  var polymers = [{
    name: "LDPE",
    full: "Low-density polyethylene",
    flex: 5,
    strength: 2,
    heatRes: 2,
    waterRes: 5,
    conduct: 1,
    recyclable: true,
    type: "Thermoplastic",
    use: "Plastic bags, squeeze bottles"
  }, {
    name: "HDPE",
    full: "High-density polyethylene",
    flex: 3,
    strength: 4,
    heatRes: 3,
    waterRes: 5,
    conduct: 1,
    recyclable: true,
    type: "Thermoplastic",
    use: "Milk bottles, pipes"
  }, {
    name: "PET",
    full: "Polyethylene terephthalate",
    flex: 3,
    strength: 4,
    heatRes: 3,
    waterRes: 5,
    conduct: 1,
    recyclable: true,
    type: "Thermoplastic",
    use: "Drink bottles, food trays"
  }, {
    name: "PP",
    full: "Polypropylene",
    flex: 3,
    strength: 4,
    heatRes: 4,
    waterRes: 5,
    conduct: 1,
    recyclable: true,
    type: "Thermoplastic",
    use: "Food containers, rope"
  }, {
    name: "Nylon",
    full: "Polyamide (Nylon)",
    flex: 4,
    strength: 5,
    heatRes: 4,
    waterRes: 3,
    conduct: 1,
    recyclable: true,
    type: "Thermoplastic",
    use: "Clothing fibres, gears"
  }, {
    name: "PLA",
    full: "Polylactic acid",
    flex: 2,
    strength: 3,
    heatRes: 2,
    waterRes: 3,
    conduct: 1,
    recyclable: false,
    type: "Bio-based",
    use: "Compostable packaging"
  }, {
    name: "Epoxy",
    full: "Epoxy resin (thermoset)",
    flex: 1,
    strength: 5,
    heatRes: 5,
    waterRes: 5,
    conduct: 1,
    recyclable: false,
    type: "Thermoset",
    use: "Adhesives, circuit boards"
  }];
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    sel = _useState10[0],
    setSel = _useState10[1];
  var p = polymers[sel];
  var props = [{
    key: "flex",
    label: "Flexibility"
  }, {
    key: "strength",
    label: "Strength"
  }, {
    key: "heatRes",
    label: "Heat resistance"
  }, {
    key: "waterRes",
    label: "Water resistance"
  }];
  var colours = ["#7c3aed", "#2563eb", "#059669", "#d97706", "#e11d48", "#84cc16", "#374151"];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Polymer Properties Comparison",
    subtitle: "Select a polymer to compare its key properties.",
    takeaway: "Different polymers have very different combinations of flexibility, strength, heat resistance, and recyclability depending on their chain structure, so selecting the right polymer requires matching its properties to the intended use."
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 12
    }
  }, polymers.map(function (po, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: po.name,
      onClick: function onClick() {
        return setSel(i);
      },
      className: "chip".concat(i === sel ? " accent" : ""),
      style: {
        cursor: "pointer"
      }
    }, po.name);
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "0.75rem",
      borderLeft: "4px solid ".concat(colours[sel])
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "1.05rem",
      marginBottom: 2
    }
  }, p.full), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      marginBottom: 10
    },
    className: "muted"
  }, "Type: ", p.type, " | ", p.recyclable ? "Recyclable by melting" : "Not easily recycled"), props.map(function (pr) {
    return /*#__PURE__*/React.createElement("div", {
      key: pr.key,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.8rem",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", null, pr.label), /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, p[pr.key], "/5")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg-2)",
        borderRadius: 6,
        height: 10,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(p[pr.key] * 20, "%"),
        height: "100%",
        background: colours[sel],
        borderRadius: 6,
        transition: "width 0.4s"
      }
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Common use: "), p.use)));
}

/* ============================================================
   SECTION 3.5 MATERIALS IN CONTEXT -- Custom Interactive: Life Cycle Assessment Tool
   ============================================================ */
function LCATool() {
  var pairs = [{
    label: "Cotton bag vs Polyethylene bag",
    alt: "Cotton bag",
    conv: "Polyethylene bag",
    stages: [{
      stage: "Raw materials",
      alt: 3,
      conv: 1,
      note: "Cotton uses land and water; PE uses crude oil."
    }, {
      stage: "Manufacturing",
      alt: 4,
      conv: 2,
      note: "Cotton processing is energy and water intensive."
    }, {
      stage: "Transport",
      alt: 2,
      conv: 2,
      note: "Similar distances for both."
    }, {
      stage: "Use",
      alt: 1,
      conv: 3,
      note: "Cotton bag replaces 100+ single-use bags."
    }, {
      stage: "End of life",
      alt: 1,
      conv: 4,
      note: "Cotton biodegrades; PE persists for centuries."
    }]
  }, {
    label: "Glass bottle vs PET bottle",
    alt: "Glass bottle",
    conv: "PET bottle",
    stages: [{
      stage: "Raw materials",
      alt: 2,
      conv: 2,
      note: "Sand/limestone vs crude oil feedstock."
    }, {
      stage: "Manufacturing",
      alt: 4,
      conv: 2,
      note: "Glass melting is very energy intensive."
    }, {
      stage: "Transport",
      alt: 4,
      conv: 2,
      note: "Glass is much heavier, raising transport emissions."
    }, {
      stage: "Use",
      alt: 1,
      conv: 2,
      note: "Glass reusable; PET single-use typically."
    }, {
      stage: "End of life",
      alt: 1,
      conv: 3,
      note: "Glass infinitely recyclable; PET recycling loses quality."
    }]
  }, {
    label: "PLA cup vs Polystyrene cup",
    alt: "PLA cup",
    conv: "Polystyrene cup",
    stages: [{
      stage: "Raw materials",
      alt: 2,
      conv: 3,
      note: "PLA from plant sugars; PS from crude oil."
    }, {
      stage: "Manufacturing",
      alt: 2,
      conv: 2,
      note: "Both require processing; PLA uses fermentation."
    }, {
      stage: "Transport",
      alt: 2,
      conv: 2,
      note: "Both lightweight; similar distances."
    }, {
      stage: "Use",
      alt: 2,
      conv: 2,
      note: "Both single-use; similar function."
    }, {
      stage: "End of life",
      alt: 2,
      conv: 4,
      note: "PLA composts industrially; PS is rarely recycled."
    }]
  }];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    pairIdx = _useState12[0],
    setPairIdx = _useState12[1];
  var pair = pairs[pairIdx];
  var colours = {
    alt: "#7c3aed",
    conv: "#e11d48"
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Life Cycle Assessment (LCA) Tool",
    subtitle: "Compare the environmental impact of two packaging options at each life cycle stage. Lower score = lower impact.",
    takeaway: "A material that looks environmentally friendly at one stage, such as end-of-life, may have much higher impacts at another stage such as manufacturing, so a full life cycle assessment across all stages is needed for an honest comparison."
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: pairs.map(function (p, i) {
      return {
        value: i,
        label: p.label.split(" vs ")[0] + " vs..."
      };
    }),
    value: pairIdx,
    onChange: function onChange(v) {
      return setPairIdx(Number(v));
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontWeight: 600,
      fontSize: "0.9rem",
      marginBottom: 8
    }
  }, pair.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colours.alt,
      fontWeight: 600,
      fontSize: "0.85rem"
    }
  }, "Purple: ", pair.alt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colours.conv,
      fontWeight: 600,
      fontSize: "0.85rem"
    }
  }, "Red: ", pair.conv)), pair.stages.map(function (st) {
    return /*#__PURE__*/React.createElement("div", {
      key: st.stage,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.8rem",
        fontWeight: 600,
        marginBottom: 3
      }
    }, st.stage), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        alignItems: "center",
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.7rem",
        width: 80,
        color: colours.alt
      }
    }, pair.alt), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: "var(--bg-2)",
        borderRadius: 4,
        height: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(st.alt * 20, "%"),
        height: "100%",
        background: colours.alt,
        borderRadius: 4,
        transition: "width 0.4s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.7rem",
        width: 20,
        textAlign: "right"
      }
    }, st.alt, "/5")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        alignItems: "center",
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.7rem",
        width: 80,
        color: colours.conv
      }
    }, pair.conv), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: "var(--bg-2)",
        borderRadius: 4,
        height: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(st.conv * 20, "%"),
        height: "100%",
        background: colours.conv,
        borderRadius: 4,
        transition: "width 0.4s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.7rem",
        width: 20,
        textAlign: "right"
      }
    }, st.conv, "/5")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.75rem"
      },
      className: "muted"
    }, st.note));
  }));
}

/* ============================================================
   SECTION 3.1: RESOURCES
   ============================================================ */
function Section31(_ref5) {
  var progress = _ref5.progress,
    setProgress = _ref5.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "3.1 Resources"), /*#__PURE__*/React.createElement("h1", null, "Earth's finite treasure"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Australia sits on enormous mineral wealth, but every deposit is finite and every tonne extracted carries a cost to the environment.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.1.1",
    title: "Finite nature of minerals and resources",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Australia is one of the world's great mining nations. You would know the red iron ore dust of the Pilbara, the bauxite red soils of Queensland, and the coal seams threading through the Hunter Valley. These resources underpin Australia's economy, but they all share one critical feature: they are ", /*#__PURE__*/React.createElement(Term, {
    def: "A resource that exists in a limited, fixed quantity and cannot be replenished on a human timescale."
  }, "finite"), "."), /*#__PURE__*/React.createElement("p", null, "Every mineral deposit was created over millions to billions of years through ", /*#__PURE__*/React.createElement(Term, {
    def: "Geological processes including heat, pressure, volcanic activity and sedimentation that form rocks and minerals."
  }, "geological processes"), ". Once a deposit is mined, it is gone. Companies mine the richest, most accessible ores first. As those run out, they must dig deeper and process lower-grade rock, using more energy and generating more waste for every tonne of metal recovered."), /*#__PURE__*/React.createElement("p", null, "The table below summarises major Australian resources. Notice that all of them are listed as finite. Even lithium, in high demand for electric vehicle batteries, exists in fixed quantities. Understanding this drives decisions about recycling, substitution, and how quickly we use these materials."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Major Australian mineral resources and their finite nature."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.88rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "6px 10px",
      textAlign: "left"
    }
  }, "Resource"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "6px 10px",
      textAlign: "left"
    }
  }, "Main location"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "6px 10px",
      textAlign: "left"
    }
  }, "Primary use"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "6px 10px",
      textAlign: "left"
    }
  }, "Finite?"))), /*#__PURE__*/React.createElement("tbody", null, [["Iron ore", "Pilbara, WA", "Steel production", "Yes"], ["Bauxite", "Qld, NT, WA", "Aluminium production", "Yes"], ["Coal (black)", "NSW, Qld", "Electricity, steel", "Yes"], ["Copper", "SA, Qld", "Wiring, pipes", "Yes"], ["Lithium", "WA", "EV batteries", "Yes"], ["Gold", "WA, Vic, NSW", "Electronics, jewellery", "Yes"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "5px 10px"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key idea"
  }, "Finite resources cannot be replenished on a human timescale. Once extracted and used, they are gone. This is why recycling, efficiency and finding alternatives all matter."), /*#__PURE__*/React.createElement(ResourceExplorer, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "What does it mean to say a mineral resource is 'finite'?",
    options: ["It is very valuable", "It exists in a limited quantity and cannot be replenished on a human timescale", "It can be recycled indefinitely", "It only occurs in Australia"],
    correct: 1,
    explain: "Finite means the total quantity in the Earth is fixed. It forms over millions of years, far too slow to replace what we extract."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Explain why mining companies must use more energy per tonne of metal as high-grade deposits run out.",
    model: "High-grade deposits contain a higher concentration of the useful mineral. As these are exhausted, companies must process more rock to obtain the same amount of metal, which requires more crushing, refining and chemical treatment, increasing energy use and waste per tonne produced."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.1.2",
    title: "Products produced from Australian minerals and resources",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Raw minerals are rarely useful as dug from the ground. They must pass through a chain of chemical and physical steps before they become the steel in a building or the aluminium in a can. Iron ore, for example, is ", /*#__PURE__*/React.createElement(Term, {
    def: "The chemical removal of oxygen from an ore using carbon or hydrogen at high temperatures."
  }, "smelted"), " with ", /*#__PURE__*/React.createElement(Term, {
    def: "A nearly pure form of carbon made by heating coal without air; used as a reducing agent in blast furnaces."
  }, "coke"), " and limestone in a blast furnace at temperatures above 1500 degrees Celsius to produce molten iron, which is then refined to produce steel."), /*#__PURE__*/React.createElement("p", null, "Bauxite follows a different path. First the ", /*#__PURE__*/React.createElement(Term, {
    def: "A process that dissolves aluminium oxide from bauxite using hot sodium hydroxide solution, leaving impurities behind."
  }, "Bayer process"), " purifies it into alumina (aluminium oxide, Al\u2082O\u2083). Then electrolysis, using enormous amounts of electricity, reduces alumina to aluminium metal. Because this second step is so energy-hungry, recycling aluminium cans saves about 95% of the energy compared with making aluminium from scratch."), /*#__PURE__*/React.createElement("p", null, "Lithium is processed into ", /*#__PURE__*/React.createElement(Term, {
    def: "A lithium compound used to make the cathodes of lithium-ion batteries."
  }, "lithium hydroxide"), " or lithium carbonate, exported to battery manufacturers, and ends up in the phone in your pocket. Every step from mine to product involves chemistry you are learning in this course."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Energy saving"
  }, "Recycling aluminium uses about 95% less energy than producing aluminium from bauxite. Recycling a single can saves enough energy to run a TV for about 3 hours."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "Which process converts bauxite (aluminium ore) into alumina (Al2O3)?",
    options: ["Blast furnace smelting", "The Bayer process", "Fractional distillation", "The Haber process"],
    correct: 1,
    explain: "The Bayer process uses hot sodium hydroxide to dissolve aluminium oxide out of bauxite. Blast furnaces are used for iron."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Trace the journey of lithium from an Australian mine to a battery in a smartphone.",
    model: "Lithium spodumene ore is mined in Western Australia, then chemically processed to produce battery-grade lithium hydroxide or lithium carbonate. These compounds are exported (commonly to East Asia), where they are used to manufacture cathode materials for lithium-ion cells. The cells are assembled into battery packs and placed inside smartphones by device manufacturers."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.1.3",
    title: "Aboriginal and Torres Strait Islander Peoples' use of minerals and resources",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Aboriginal and Torres Strait Islander Peoples developed deep, sophisticated knowledge of minerals, rocks and natural materials over tens of thousands of years. This knowledge was grounded in careful observation of Country and passed across generations through oral tradition, ceremony and practical teaching. ", /*#__PURE__*/React.createElement(Term, {
    def: "Earth pigments made mostly of iron oxide minerals (haematite and goethite), occurring in shades of red and yellow."
  }, "Ochres"), " were among the most widely used minerals: ground to fine powder and mixed with water, animal fats or plant resins to create pigments for body decoration, rock art and ceremony. Evidence of ochre use in Australia extends back at least 50,000 years, making it one of the earliest known uses of a mineral pigment anywhere on Earth."), /*#__PURE__*/React.createElement("p", null, "Hard, fine-grained rocks such as ", /*#__PURE__*/React.createElement(Term, {
    def: "A fine-grained silica-rich rock that fractures with a sharp, curved (conchoidal) surface, ideal for making cutting tools."
  }, "silcrete"), ", chert and quartzite were ", /*#__PURE__*/React.createElement(Term, {
    def: "The process of shaping stone by striking it with another stone or hard object to produce sharp-edged flakes."
  }, "knapped"), " into cutting tools, scrapers and spear points. Quarry sites were culturally significant places where groups met, traded tools and maintained relationships over hundreds of kilometres. Clay was used for waterproofing, cooking methods and skin treatments. Torres Strait Islander Peoples used coral and shell for tools, ornaments and navigational purposes. This knowledge represents a rich scientific tradition built on millennia of systematic observation."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Cultural respect"
  }, "When learning about traditional uses of minerals, recognise these as part of living cultures, not historical artefacts. Many communities continue these practices today."), /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "a",
      label: "Ochre (ground iron oxide)",
      bucket: "pigment"
    }, {
      id: "b",
      label: "Silcrete (fine-grained rock)",
      bucket: "tool"
    }, {
      id: "c",
      label: "Clay (waterproofing)",
      bucket: "other"
    }, {
      id: "d",
      label: "Chert (knapped flakes)",
      bucket: "tool"
    }, {
      id: "e",
      label: "Red ochre (body decoration)",
      bucket: "pigment"
    }, {
      id: "f",
      label: "Shell (Torres Strait Islander)",
      bucket: "other"
    }],
    buckets: [{
      id: "pigment",
      label: "Pigment use"
    }, {
      id: "tool",
      label: "Stone tool"
    }, {
      id: "other",
      label: "Other use"
    }]
  }), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "What property makes silcrete and chert ideal for making sharp cutting tools?",
    options: ["They are the hardest minerals known", "They fracture in a predictable, sharp-edged (conchoidal) way when struck", "They are found only in Australia", "They do not corrode in water"],
    correct: 1,
    explain: "Both rocks fracture conchoidally, producing very sharp edges that hold a cutting edge. This made them perfect for knapping into tools."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.1.4",
    title: "Environmental impact of extracting and using a named resource",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Extracting minerals causes impacts at every scale. ", /*#__PURE__*/React.createElement(Term, {
    def: "Mining that removes the surface layer of soil and rock to expose ore below."
  }, "Open-cut mining"), " destroys local habitat, removes soil and vegetation, and leaves behind huge volumes of ", /*#__PURE__*/React.createElement(Term, {
    def: "The waste rock and crushed material remaining after the valuable ore has been extracted."
  }, "tailings"), ". When sulfide minerals in exposed rock react with water and oxygen, they produce sulfuric acid, creating ", /*#__PURE__*/React.createElement(Term, {
    def: "The flow of acidic, metal-contaminated water from exposed mine waste that leaches into streams and groundwater."
  }, "acid mine drainage"), ", which poisons local waterways."), /*#__PURE__*/React.createElement("p", null, "The use of extracted resources also has consequences. Burning coal releases ", /*#__PURE__*/React.createElement(Term, {
    def: "A greenhouse gas produced by burning fossil fuels; a major driver of climate change."
  }, "carbon dioxide"), " and sulfur dioxide. Steel production accounts for approximately 7 to 9 percent of global CO\u2082 emissions. Aluminium smelting, if powered by coal-fired electricity, has a very large carbon footprint. These downstream impacts extend the environmental assessment far beyond the mine gate. In Australia, mining companies must legally rehabilitate mined land after closure, restoring topsoil and replanting native vegetation, though full ecological recovery takes decades."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Life cycle thinking"
  }, "Assessing only extraction impacts misses the full picture. A complete evaluation covers raw material extraction, processing, use, and disposal or recycling. This is called a life cycle approach."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 6,
    question: "What is acid mine drainage?",
    options: ["Water used to cool blast furnace equipment", "Acidic, metal-contaminated water formed when sulfide minerals in exposed rock react with water and oxygen", "Rainwater that collects in open-cut mine pits", "The wastewater from aluminium smelting"],
    correct: 1,
    explain: "Acid mine drainage forms when sulfide minerals oxidise in air and water, producing sulfuric acid that dissolves heavy metals from surrounding rock and flows into waterways."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 7,
    question: "Evaluate whether the environmental cost of coal mining and use outweighs the economic benefit. Use evidence from both sides.",
    model: "Economic benefits include export income, jobs, taxes, and energy generation. Environmental costs include habitat destruction from open-cut mining, acid mine drainage, large CO\u2082 and SO\u2082 emissions from combustion, and contribution to climate change. Both are real and significant. The weight given to each depends on values and time frame, but the accumulating environmental damage and international pressure to reduce emissions suggest the costs are becoming harder to justify economically in the long term."
  }))));
}

/* ============================================================
   SECTION 3.2: BONDING
   ============================================================ */
function Section32(_ref6) {
  var progress = _ref6.progress,
    setProgress = _ref6.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "3.2 Bonding"), /*#__PURE__*/React.createElement("h1", null, "How atoms stick together"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Valency, noble gas configurations and three types of chemical bond explain the properties of every material from table salt to diamond.")), /*#__PURE__*/React.createElement(Figure, {
    caption: "Two ways atoms bond to reach a full outer shell. Left: in a covalent bond two non-metal atoms share a pair of electrons. Right: in an ionic bond a metal atom (sodium) transfers its outer electron to a non-metal atom (chlorine), forming oppositely charged ions.",
    maxWidth: 640
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 620 240",
    width: "100%",
    role: "img",
    "aria-label": "Electron shell diagrams. Covalent: two hydrogen atoms share a pair of electrons. Ionic: sodium, with electrons 2,8,1, gives its one outer electron to chlorine, 2,8,7, forming Na plus (2,8) and Cl minus (2,8,8)."
  }, /*#__PURE__*/React.createElement("line", {
    x1: "250",
    y1: "20",
    x2: "250",
    y2: "230",
    stroke: "var(--border)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "95",
    cy: "125",
    r: "38",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.5",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "95",
    cy: "125",
    r: "12",
    fill: "var(--teal)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "95",
    y: "130",
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#fff"
  }, "H"), /*#__PURE__*/React.createElement("circle", {
    cx: "155",
    cy: "125",
    r: "38",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.5",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "155",
    cy: "125",
    r: "12",
    fill: "var(--teal)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "155",
    y: "130",
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#fff"
  }, "H"), /*#__PURE__*/React.createElement("circle", {
    cx: "125",
    cy: "115",
    r: "5",
    fill: "var(--amber)",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "125",
    cy: "135",
    r: "5",
    fill: "var(--amber)",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330",
    cy: "125",
    r: "16",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "125",
    r: "16",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330",
    cy: "125",
    r: "30",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "125",
    r: "30",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330",
    cy: "125",
    r: "44",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "125",
    r: "44",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330",
    cy: "125",
    r: "10",
    fill: "var(--purple)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "129",
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "#fff"
  }, "Na"), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "125",
    r: "10",
    fill: "var(--green)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "520",
    y: "129",
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "#fff"
  }, "Cl"), /*#__PURE__*/React.createElement("circle", {
    cx: "330.0",
    cy: "141.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330.0",
    cy: "109.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "357.7",
    cy: "136.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "341.5",
    cy: "152.7",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "318.5",
    cy: "152.7",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "302.3",
    cy: "136.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "302.3",
    cy: "113.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "318.5",
    cy: "97.3",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "341.5",
    cy: "97.3",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "357.7",
    cy: "113.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520.0",
    cy: "141.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520.0",
    cy: "109.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "547.7",
    cy: "136.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "531.5",
    cy: "152.7",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "508.5",
    cy: "152.7",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "492.3",
    cy: "136.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "492.3",
    cy: "113.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "508.5",
    cy: "97.3",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "531.5",
    cy: "97.3",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "547.7",
    cy: "113.5",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "374",
    cy: "125",
    r: "5.5",
    fill: "var(--red)",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "564.0",
    cy: "125.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "551.1",
    cy: "156.1",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520.0",
    cy: "169.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "488.9",
    cy: "156.1",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "488.9",
    cy: "93.9",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520.0",
    cy: "81.0",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "551.1",
    cy: "93.9",
    r: "4.5",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "476",
    cy: "125",
    r: "5.5",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "2",
    strokeDasharray: "3 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M382,119 Q425.0,75 466,117",
    fill: "none",
    stroke: "var(--red)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M470,123 L456,119 L465,108 Z",
    fill: "var(--red)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "125",
    y: "30",
    textAnchor: "middle",
    fontSize: "15",
    fontWeight: "800",
    fill: "var(--ink)"
  }, "Sharing (covalent): H\u2082"), /*#__PURE__*/React.createElement("text", {
    x: "125",
    y: "196",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "The two atoms share a pair"), /*#__PURE__*/React.createElement("text", {
    x: "125",
    y: "212",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "of electrons (yellow), so each"), /*#__PURE__*/React.createElement("text", {
    x: "125",
    y: "228",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "H has 2, like helium."), /*#__PURE__*/React.createElement("text", {
    x: "425",
    y: "30",
    textAnchor: "middle",
    fontSize: "15",
    fontWeight: "800",
    fill: "var(--ink)"
  }, "Transfer (ionic): NaCl"), /*#__PURE__*/React.createElement("text", {
    x: "425",
    y: "66",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--red)"
  }, "1 electron moves"), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "196",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "Na 2,8,1 \u2192 Na\u207A 2,8"), /*#__PURE__*/React.createElement("text", {
    x: "520",
    y: "196",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "Cl 2,8,7 \u2192 Cl\u207B 2,8,8"), /*#__PURE__*/React.createElement("text", {
    x: "425",
    y: "222",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--ink)"
  }, "The oppositely charged ions attract: an ionic bond."))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.1",
    title: "Valency and electron configuration",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The number of electrons an atom must gain, lose or share to reach a stable (full outer shell) electron configuration."
  }, "valency"), " of an element tells you how many electrons it needs to gain, lose or share to become stable. Stability means reaching a full outer shell, matching the electron arrangement of a noble gas. This is called the ", /*#__PURE__*/React.createElement(Term, {
    def: "The tendency of atoms to seek 8 electrons in their outer shell, matching noble gas configurations."
  }, "octet rule"), " (or the duet rule for hydrogen, which needs only 2 electrons to match helium)."), /*#__PURE__*/React.createElement("p", null, "Valency is directly linked to an element's group in the periodic table. Group 1 elements (like sodium) have one outer electron and a valency of 1. Group 17 elements (like chlorine) have seven outer electrons and also a valency of 1, but they gain rather than lose electrons. Carbon, in Group 14, has four outer electrons and a valency of 4. It shares all four to form covalent bonds with other atoms."), /*#__PURE__*/React.createElement(AtomShellBuilder, null), /*#__PURE__*/React.createElement(Figure, {
    caption: "Valency of selected elements, showing electrons gained or lost to reach a full outer shell."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Element"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Group"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Outer electrons"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Electrons gained/lost/shared"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Valency"))), /*#__PURE__*/React.createElement("tbody", null, [["H", "1", "1", "Loses or shares 1", "1"], ["Na", "1", "1", "Loses 1", "1"], ["Mg", "2", "2", "Loses 2", "2"], ["Al", "13", "3", "Loses 3", "3"], ["C", "14", "4", "Shares 4", "4"], ["O", "16", "6", "Gains or shares 2", "2"], ["Cl", "17", "7", "Gains or shares 1", "1"], ["Ne", "18", "8", "None (already stable)", "0"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px",
          textAlign: i === 0 ? "left" : "center"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Oxygen has 6 outer electrons. What is its valency?",
    options: ["6", "4", "2", "0"],
    correct: 2,
    explain: "Oxygen needs to gain 2 electrons to complete its outer shell to 8, so its valency is 2."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.2",
    title: "Noble gas configuration and chemical bonding",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Noble gases (Group 18: helium, neon, argon, krypton, xenon and radon) are almost completely unreactive. Their outer electron shells are already full, helium with 2 electrons and all others with 8. This complete arrangement is the most stable possible for any element. Because they are already stable, noble gases have virtually no tendency to gain, lose or share electrons, which is why they rarely form compounds under normal conditions."), /*#__PURE__*/React.createElement("p", null, "When other atoms bond, they rearrange their electrons to reach these same ", /*#__PURE__*/React.createElement(Term, {
    def: "An electron arrangement identical to that of a noble gas, with a completely filled outer electron shell."
  }, "noble gas configurations"), ". Sodium (configuration 2, 8, 1) loses its one outer electron to become Na\u207A with the configuration 2, 8 (matching neon). Chlorine (2, 8, 7) gains that electron to become Cl\u207B with configuration 2, 8, 8 (matching argon). In covalent bonding, atoms share electrons rather than transfer them, but each atom counts the shared electrons as its own, giving the same stable full-shell result."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key idea"
  }, "All chemical bonding is driven by atoms trying to reach the stable, full-shell electron arrangement of a noble gas."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "When sodium bonds with chlorine, the resulting Na+ ion has the same electron configuration as which noble gas?",
    options: ["Helium", "Neon", "Argon", "Krypton"],
    correct: 1,
    explain: "Na\u207A has 10 electrons arranged as 2, 8. Neon also has 10 electrons in a 2, 8 arrangement. Na\u207A matches neon."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.3",
    title: "Types of chemical bonds: ionic, covalent and metallic",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A force of attraction between atoms or ions that holds them together in a substance."
  }, "chemical bond"), " is an electrostatic attraction that holds atoms together. Three main bond types arise depending on which elements are involved. ", /*#__PURE__*/React.createElement(Term, {
    def: "A bond formed by the complete transfer of electrons from a metal atom to a non-metal atom, creating oppositely charged ions that attract each other."
  }, "Ionic bonds"), " form between metal and non-metal atoms. ", /*#__PURE__*/React.createElement(Term, {
    def: "A bond formed when two non-metal atoms share one or more pairs of electrons."
  }, "Covalent bonds"), " form between non-metal atoms. ", /*#__PURE__*/React.createElement(Term, {
    def: "A bond formed in metals where positive metal ions are held together by a surrounding sea of delocalised (mobile) electrons."
  }, "Metallic bonds"), " form between metal atoms."), /*#__PURE__*/React.createElement("p", null, "Each bond type creates structures with very different physical properties. Ionic compounds form rigid crystal lattices with high melting points. Covalent molecules are often gases or liquids at room temperature with low melting points, though giant covalent networks (like diamond) have extremely high melting points. Metals are malleable, ductile and conduct electricity well because of their mobile electron sea."), /*#__PURE__*/React.createElement(BondVisualiser, null), /*#__PURE__*/React.createElement(Figure, {
    caption: "Summary of three bond types, the elements involved, electron behaviour and typical properties."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Bond type"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Elements"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Electron behaviour"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Example"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Typical properties"))), /*#__PURE__*/React.createElement("tbody", null, [["Ionic", "Metal + non-metal", "Transferred", "NaCl, MgO", "High melting point; conducts when dissolved"], ["Covalent (molecular)", "Non-metal + non-metal", "Shared", "H₂O, CO₂, CH₄", "Low melting point; poor conductor"], ["Covalent (network)", "Non-metal + non-metal", "Shared throughout", "Diamond, SiO₂", "Very high melting point; very hard"], ["Metallic", "Metal + metal", "Delocalised (sea)", "Cu, Fe, Al", "Conducts; malleable; ductile"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "Which bond type forms between metal and non-metal atoms?",
    options: ["Covalent", "Metallic", "Ionic", "Hydrogen"],
    correct: 2,
    explain: "Ionic bonds form when a metal atom transfers electrons to a non-metal, creating oppositely charged ions that attract each other."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Explain why metals can conduct electricity but solid sodium chloride cannot, using your knowledge of bonding.",
    model: "Metals contain delocalised electrons that move freely throughout the structure, carrying charge and enabling electrical conduction. In solid NaCl, all ions are fixed in the crystal lattice and cannot move, so there is no charge flow. When dissolved in water or melted, the ions become free to move and carry charge."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.4",
    title: "Formation of cations and anions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "When atoms undergo ionic bonding, they form charged particles called ", /*#__PURE__*/React.createElement(Term, {
    def: "Charged atoms or groups of atoms formed by gaining or losing electrons."
  }, "ions"), ". A ", /*#__PURE__*/React.createElement(Term, {
    def: "A positively charged ion formed when an atom loses one or more electrons."
  }, "cation"), " forms when an atom loses electrons. Because electrons carry negative charge, removing them leaves more protons than electrons, giving a net positive charge. Metal atoms typically form cations. Sodium (11 protons, 11 electrons) loses one electron to become Na\u207A with 11 protons and 10 electrons."), /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, {
    def: "A negatively charged ion formed when an atom gains one or more electrons."
  }, "anion"), " forms when an atom gains electrons. Extra electrons mean more negative charge than protons, giving a net negative charge. Non-metal atoms typically form anions. Chlorine (17 protons, 17 electrons) gains one electron to become Cl\u207B with 17 protons and 18 electrons."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "A diagram using dots and crosses to represent outer-shell electrons, showing which electrons are transferred in ionic bonding."
  }, "Dot-and-cross diagrams"), " are models that make this process visible. They show which electrons belong to which atom and how the charges on the resulting ions arise from the electron transfers. The key point is that the positive charge on Na\u207A comes not from gaining protons, but from losing electrons."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Cation and anion formation showing proton and electron counts, resulting charge and noble gas configuration achieved."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Atom"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Protons"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Electrons (atom)"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Change"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Ion"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Electrons (ion)"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Charge"))), /*#__PURE__*/React.createElement("tbody", null, [["Na", "11", "11", "Loses 1", "Na⁺", "10", "+1"], ["Mg", "12", "12", "Loses 2", "Mg²⁺", "10", "+2"], ["Al", "13", "13", "Loses 3", "Al³⁺", "10", "+3"], ["Cl", "17", "17", "Gains 1", "Cl⁻", "18", "-1"], ["O", "8", "8", "Gains 2", "O²⁻", "10", "-2"], ["N", "7", "7", "Gains 3", "N³⁻", "10", "-3"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px",
          textAlign: "center"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "A magnesium atom has 12 protons and 12 electrons. How many electrons does the Mg2+ ion have?",
    options: ["14", "12", "10", "8"],
    correct: 2,
    explain: "Mg\xB2\u207A loses 2 electrons: 12 minus 2 equals 10 electrons. The ion still has 12 protons, giving a net charge of plus 2."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.5",
    title: "Diatomic elements",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Under standard conditions, seven non-metal elements exist as molecules made of two atoms joined together. These ", /*#__PURE__*/React.createElement(Term, {
    def: "Molecules consisting of exactly two atoms of the same element bonded by a covalent bond."
  }, "diatomic elements"), " are hydrogen (H\u2082), nitrogen (N\u2082), oxygen (O\u2082), fluorine (F\u2082), chlorine (Cl\u2082), bromine (Br\u2082) and iodine (I\u2082). A handy mnemonic is \"Have No Fear Of Ice Cold Bears\" for H, N, F, O, I, Cl, Br."), /*#__PURE__*/React.createElement("p", null, "Each pair shares electron pairs so both atoms achieve a full outer shell. Nitrogen (N\u2082) forms a triple bond (three shared pairs), making it exceptionally stable and unreactive. This is why nitrogen makes up 78% of the atmosphere but rarely takes part in reactions under normal conditions. Recognising diatomic elements is essential for writing correct chemical equations: when oxygen is involved, write O\u2082, not O, or your equations will not balance."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Mnemonic"
  }, "Have No Fear Of Ice Cold Bears: H\u2082, N\u2082, F\u2082, O\u2082, I\u2082, Cl\u2082, Br\u2082. Learn this list and you will never forget a diatomic element."), /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "h2",
      label: "H₂ (hydrogen)",
      bucket: "diatomic"
    }, {
      id: "na",
      label: "Na (sodium)",
      bucket: "monatomic"
    }, {
      id: "o2",
      label: "O₂ (oxygen)",
      bucket: "diatomic"
    }, {
      id: "fe",
      label: "Fe (iron)",
      bucket: "monatomic"
    }, {
      id: "cl",
      label: "Cl₂ (chlorine)",
      bucket: "diatomic"
    }, {
      id: "cu",
      label: "Cu (copper)",
      bucket: "monatomic"
    }, {
      id: "n2",
      label: "N₂ (nitrogen)",
      bucket: "diatomic"
    }],
    buckets: [{
      id: "diatomic",
      label: "Diatomic element"
    }, {
      id: "monatomic",
      label: "Not diatomic (written as one symbol)"
    }]
  }), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 6,
    question: "Which of the following is the correct formula for chlorine gas?",
    options: ["Cl", "Cl₂", "2Cl", "Cl₃"],
    correct: 1,
    explain: "Chlorine is a diatomic element. Its correct formula is Cl\u2082, showing two chlorine atoms bonded together."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.6",
    title: "Chemical formulas of ionic compounds and covalent molecules",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A representation using element symbols and subscript numbers showing the types and ratios of atoms in a substance."
  }, "chemical formula"), " tells you what atoms are in a substance and in what ratio. For ionic compounds, you must balance the charges of each ion so the overall compound is electrically neutral. The ", /*#__PURE__*/React.createElement(Term, {
    def: "A method for finding the formula of an ionic compound by swapping the charge numbers of each ion to become the subscript of the other."
  }, "cross-over rule"), " makes this straightforward: write the charge of each ion as the subscript of the other, then simplify."), /*#__PURE__*/React.createElement("p", null, "For example, calcium (Ca\xB2\u207A) and chloride (Cl\u207B): swap to get CaCl\u2082. Check: +2 + 2(-1) = 0. For aluminium oxide: Al\xB3\u207A and O\xB2\u207B, swap to get Al\u2082O\u2083. Check: 2(+3) + 3(-2) = 0. For covalent molecules, the formula reflects how many atoms share electrons to satisfy each element's valency. Water (H\u2082O) has two hydrogen atoms (valency 1) and one oxygen atom (valency 2). For ", /*#__PURE__*/React.createElement(Term, {
    def: "Charged groups of atoms that act as a single unit in a formula, such as sulfate (SO\u2084\xB2\u207B) and nitrate (NO\u2083\u207B)."
  }, "polyatomic ions"), " like nitrate (NO\u2083\u207B), use brackets when more than one group is needed: calcium nitrate is Ca(NO\u2083)\u2082."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Cross-over rule"
  }, "To find an ionic formula: write the charge of the cation as the subscript of the anion, and the charge of the anion as the subscript of the cation. Simplify if both subscripts share a common factor. Always check that charges sum to zero."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Applying the cross-over rule to derive common ionic compound formulas."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Compound"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Cation"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Anion"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Formula"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Type"))), /*#__PURE__*/React.createElement("tbody", null, [["Sodium chloride", "Na⁺ (+1)", "Cl⁻ (-1)", "NaCl", "Ionic"], ["Magnesium oxide", "Mg²⁺ (+2)", "O²⁻ (-2)", "MgO", "Ionic"], ["Calcium chloride", "Ca²⁺ (+2)", "Cl⁻ (-1)", "CaCl₂", "Ionic"], ["Aluminium oxide", "Al³⁺ (+3)", "O²⁻ (-2)", "Al₂O₃", "Ionic"], ["Water", "H (val. 1)", "O (val. 2)", "H₂O", "Covalent"], ["Carbon dioxide", "C (val. 4)", "O (val. 2)", "CO₂", "Covalent"], ["Ammonia", "N (val. 3)", "H (val. 1)", "NH₃", "Covalent"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px",
          textAlign: i === 0 ? "left" : "center"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "Using the cross-over rule, what is the formula for the ionic compound formed between aluminium (Al3+) and oxide (O2-)?",
    options: ["AlO", "Al₂O₃", "Al₃O₂", "AlO₃"],
    correct: 1,
    explain: "Al\xB3\u207A has charge +3 and O\xB2\u207B has charge -2. Cross over: Al\u2082O\u2083. Check: 2(+3) + 3(-2) = +6 - 6 = 0."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.2.7",
    title: "Properties of ionic, covalent and metallic substances",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The bond type in a substance directly determines its properties. Ionic compounds form rigid ", /*#__PURE__*/React.createElement(Term, {
    def: "A regular three-dimensional arrangement of ions held together by electrostatic forces."
  }, "crystal lattices"), " with strong attractions between every ion and its neighbours. This gives them high melting points, hardness, brittleness (the lattice shatters when like-charged ions align after shifting), and the ability to conduct electricity when dissolved or melted (free ions carry charge). In the solid state, ionic compounds are non-conductors because ions are fixed in place."), /*#__PURE__*/React.createElement("p", null, "Covalent molecular substances (water, sugar, carbon dioxide) have only weak forces between their molecules, giving low melting points and poor conductivity. Covalent network solids (diamond, silicon dioxide) are exceptions: covalent bonds extend throughout the whole structure, requiring enormous energy to break, giving very high melting points. Metals are ", /*#__PURE__*/React.createElement(Term, {
    def: "The ability of a material to be beaten or pressed into thin sheets without breaking."
  }, "malleable"), " and ", /*#__PURE__*/React.createElement(Term, {
    def: "The ability of a material to be drawn into thin wires without breaking."
  }, "ductile"), " because metal ion layers can slide without breaking the metallic bond, and conduct electricity and heat well because of their mobile electron sea."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 8,
    question: "Why is diamond extremely hard with a very high melting point, even though it contains only covalent bonds?",
    options: ["Diamond contains ionic bonds that are very strong", "Diamond is a giant covalent network where every carbon atom is bonded to four others throughout the whole structure, requiring huge energy to break all bonds", "Diamond's intermolecular forces are exceptionally strong", "Diamond contains metallic bonds that make it hard"],
    correct: 1,
    explain: "Diamond is a giant covalent network lattice. Every carbon bonds to four others in 3D. To melt diamond you must break ALL these covalent bonds simultaneously, requiring enormous energy."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 9,
    question: "A technician needs a material that conducts electricity, can be drawn into a thin wire, and resists corrosion. Using bonding theory, suggest the best material type and a specific example.",
    model: "A metal is the best choice. Metals contain delocalised electrons that conduct electricity, and metal ion layers can slide past each other (making them ductile, so they can be drawn into wire). For corrosion resistance, copper or gold would work well. Copper is the standard choice for electrical wiring because it is an excellent conductor, highly ductile and only slowly corrodes."
  }))));
}

/* ============================================================
   SECTION 3.3: ORGANIC CHEMISTRY
   ============================================================ */
function Section33(_ref7) {
  var progress = _ref7.progress,
    setProgress = _ref7.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "3.3 Chemistry of Organic Compounds"), /*#__PURE__*/React.createElement("h1", null, "Carbon: the backbone of life and fuel"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Organic chemistry explains the fuels in your car, the plastics around you, and the molecules in every living cell.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.1",
    title: "Organic vs inorganic compounds",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Modern chemistry defines ", /*#__PURE__*/React.createElement(Term, {
    def: "Compounds that contain carbon atoms bonded to hydrogen (C-H bonds), often also bonded to oxygen, nitrogen and other elements."
  }, "organic compounds"), " as those containing carbon bonded to hydrogen. The carbon skeleton can chain, branch and ring in countless ways because carbon has a valency of 4. This structural flexibility explains why many millions of organic compounds are known. By contrast, ", /*#__PURE__*/React.createElement(Term, {
    def: "Compounds that generally do not contain C-H bonds; includes minerals, salts, oxides and most acids."
  }, "inorganic compounds"), " do not contain C-H bonds. Sodium chloride, iron oxide, and water are all inorganic."), /*#__PURE__*/React.createElement("p", null, "A few carbon-containing compounds are classified as inorganic because they lack C-H bonds: carbon dioxide (CO\u2082), carbon monoxide (CO) and carbonates are treated as inorganic by convention. All living organisms are built from organic molecules, and so are most fuels and plastics, making organic chemistry central to understanding both life and modern materials."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Why so many organic compounds?"
  }, "Carbon's valency of 4 lets it chain to itself in straight lines, branches, and rings of almost any length. No other element matches this versatility, which is why life is carbon-based."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which of the following is classified as an organic compound?",
    options: ["NaCl", "CO₂", "CH₄", "H₂O"],
    correct: 2,
    explain: "CH\u2084 (methane) contains C-H bonds, making it organic. CO\u2082 has no C-H bonds and is classified as inorganic by convention."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.2",
    title: "Hydrocarbons from crude oil and their uses",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "A complex mixture of hydrocarbons (compounds of carbon and hydrogen only) formed from ancient marine organisms over millions of years."
  }, "Crude oil"), " is a mixture of hundreds of ", /*#__PURE__*/React.createElement(Term, {
    def: "Compounds containing only carbon and hydrogen atoms."
  }, "hydrocarbons"), " with different chain lengths. Because chain length determines ", /*#__PURE__*/React.createElement(Term, {
    def: "The temperature at which a liquid turns to gas."
  }, "boiling point"), ", the components can be separated by ", /*#__PURE__*/React.createElement(Term, {
    def: "An industrial process that separates crude oil into fractions based on their different boiling points in a tall fractionating column."
  }, "fractional distillation"), ". Crude oil is heated to around 350 to 400 degrees Celsius. Vapours rise up the column, which is cooler at the top, and each fraction condenses at the height matching its boiling point. Short chains condense near the top (low boiling points) and long chains near the bottom (high boiling points)."), /*#__PURE__*/React.createElement("p", null, "Each fraction has different properties and uses. Short-chain fractions (petrol, LPG) are volatile and flammable, making them ideal vehicle and cooking fuels. Longer fractions (fuel oil, bitumen) are thicker, less volatile, and used for ships, power stations and road surfaces. Demand for short-chain fuels often exceeds what distillation alone provides, so longer chains are chemically broken down in a process called ", /*#__PURE__*/React.createElement(Term, {
    def: "An industrial process that breaks long-chain hydrocarbons into shorter, more useful ones by heating with a catalyst."
  }, "cracking"), "."), /*#__PURE__*/React.createElement(FractionColumn, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "Why do shorter-chain hydrocarbons condense near the top of the fractionating column?",
    options: ["They are heavier and rise more slowly", "They have lower boiling points and only condense at the cooler temperatures found higher in the column", "They are produced last in the distillation", "They have the most carbon atoms"],
    correct: 1,
    explain: "Shorter chains have weaker intermolecular forces and lower boiling points, so they remain as vapour until reaching the cooler upper section of the column."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.3",
    title: "IUPAC naming of organic compounds",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The International Union of Pure and Applied Chemistry, which developed the systematic naming rules for chemical compounds used worldwide."
  }, "IUPAC"), " developed a universal naming system so every organic compound has one unique, internationally recognised name. Without it, the same compound might have dozens of trivial names in different countries, causing confusion in science."), /*#__PURE__*/React.createElement("p", null, "IUPAC names combine a ", /*#__PURE__*/React.createElement(Term, {
    def: "A word fragment indicating the number of carbon atoms in the longest chain: meth=1, eth=2, prop=3, but=4, pent=5, hex=6, hept=7, oct=8."
  }, "carbon-count prefix"), " with a family suffix: \"-ane\" for ", /*#__PURE__*/React.createElement(Term, {
    def: "Hydrocarbons with only single carbon-carbon bonds; general formula C\u2099H\u2082\u2099\u208A\u2082."
  }, "alkanes"), ", \"-ene\" for ", /*#__PURE__*/React.createElement(Term, {
    def: "Hydrocarbons containing at least one carbon-carbon double bond."
  }, "alkenes"), ", and \"-ol\" for alcohols. So the alkane with three carbons is propane (prop- + -ane), the two-carbon alcohol is ethanol (eth- + -anol). These rules work internationally for anyone who knows them."), /*#__PURE__*/React.createElement(Figure, {
    caption: "IUPAC naming: carbon-count prefixes and family suffixes for simple organic compounds."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "IUPAC name"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Formula"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Family"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Common use"))), /*#__PURE__*/React.createElement("tbody", null, [["Methane", "CH₄", "Alkane", "Natural gas, heating"], ["Ethane", "C₂H₆", "Alkane", "Natural gas component; makes ethene"], ["Propane", "C₃H₈", "Alkane", "BBQ gas"], ["Butane", "C₄H₁₀", "Alkane", "Lighter fuel"], ["Ethene", "C₂H₄", "Alkene", "Plastics feedstock"], ["Methanol", "CH₃OH", "Alcohol", "Solvent, antifreeze"], ["Ethanol", "C₂H₅OH", "Alcohol", "Beverages, sanitiser"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px",
          textAlign: i === 0 || i === 3 ? "left" : "center"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "What is the IUPAC name for a 4-carbon alkane (C4H10)?",
    options: ["Butene", "Propane", "Butane", "Pentane"],
    correct: 2,
    explain: "4 carbons = but-; single bonds only = -ane; so butane (C\u2084H\u2081\u2080)."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.4",
    title: "Structures of simple alkanes C\u2081 to C\u2088",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Alkanes are a ", /*#__PURE__*/React.createElement(Term, {
    def: "A family of organic compounds with the same general formula and similar chemical properties, where each member differs by one CH\u2082 unit."
  }, "homologous series"), " following the general formula C\u2099H\u2082\u2099\u208A\u2082. All carbon-carbon bonds are single, and each carbon forms exactly four bonds. As chain length increases by one CH\u2082 unit, boiling point rises because larger molecules have stronger ", /*#__PURE__*/React.createElement(Term, {
    def: "Weak attractive forces between molecules that arise from temporary uneven distribution of electrons; stronger in larger molecules."
  }, "London dispersion forces"), " between them. Methane to butane are gases at 25 degrees Celsius; pentane upwards are liquids."), /*#__PURE__*/React.createElement("p", null, "From butane (C\u2084H\u2081\u2080) onward, alkanes can also be ", /*#__PURE__*/React.createElement(Term, {
    def: "Molecules with the same molecular formula but different arrangements of atoms, giving different structures and slightly different properties."
  }, "structural isomers"), ". n-Butane has a straight chain while isobutane has a branched structure. Both are C\u2084H\u2081\u2080 but isobutane's more compact shape means slightly weaker intermolecular forces and a lower boiling point."), /*#__PURE__*/React.createElement(AlkaneBuilder, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "Using the general formula CnH(2n+2), how many hydrogen atoms are in octane (C8H18)?",
    options: ["16", "18", "20", "10"],
    correct: 1,
    explain: "For n=8: H = 2(8)+2 = 18. Octane is C\u2088H\u2081\u2088 with 18 hydrogen atoms."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.5",
    title: "Complete and incomplete combustion of hydrocarbons",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The chemical reaction between a fuel and oxygen that releases energy as heat and light."
  }, "Combustion"), " of a hydrocarbon in a plentiful oxygen supply produces only carbon dioxide and water. This is ", /*#__PURE__*/React.createElement(Term, {
    def: "Combustion in excess oxygen; produces only CO\u2082 and H\u2082O; releases maximum energy."
  }, "complete combustion"), " and it releases the maximum possible energy from the fuel. The complete combustion of methane is: CH\u2084 + 2O2 produces CO\u2082 + 2H2O. Complete combustion gives a blue flame in a Bunsen burner or gas stove."), /*#__PURE__*/React.createElement("p", null, "When oxygen is limited, ", /*#__PURE__*/React.createElement(Term, {
    def: "Combustion in a restricted oxygen supply; produces carbon monoxide (CO) and/or soot (C) as well as water; releases less energy."
  }, "incomplete combustion"), " occurs. Instead of all carbon becoming CO\u2082, some becomes ", /*#__PURE__*/React.createElement(Term, {
    def: "A colourless, odourless, highly toxic gas that prevents oxygen transport in the blood by binding to haemoglobin 200 times more strongly than oxygen."
  }, "carbon monoxide (CO)"), " or solid carbon (soot). Incomplete combustion releases less energy, produces a yellow or orange flame, and deposits black soot. Carbon monoxide is particularly dangerous: it is colourless, odourless, and binds to haemoglobin 200 times more strongly than oxygen, preventing oxygen delivery to cells."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Comparison of complete and incomplete combustion: oxygen supply, products, energy and safety."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Feature"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Complete combustion"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px"
    }
  }, "Incomplete combustion"))), /*#__PURE__*/React.createElement("tbody", null, [["Oxygen supply", "Plentiful", "Limited"], ["Carbon products", "CO₂ only", "CO and/or soot (C)"], ["Hydrogen products", "H₂O", "H₂O"], ["Energy released", "Maximum", "Less than maximum"], ["Flame colour", "Blue", "Yellow/orange"], ["Safety concern", "CO₂ (greenhouse gas)", "CO (toxic); soot (air pollution)"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px",
          textAlign: "center"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Carbon monoxide danger"
  }, "An unflued gas heater in a small, poorly ventilated room can accumulate CO to dangerous levels as oxygen in the room is consumed and combustion becomes increasingly incomplete. Always ensure adequate ventilation."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "What are the only products of the complete combustion of a hydrocarbon?",
    options: ["Carbon monoxide and water", "Carbon dioxide and water", "Carbon and water", "Carbon monoxide and carbon dioxide"],
    correct: 1,
    explain: "Complete combustion (in excess oxygen) oxidises all carbon to CO\u2082 and all hydrogen to H\u2082O. No CO or soot is produced."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "Write a balanced chemical equation for the complete combustion of propane (C3H8) and explain how you know it is balanced.",
    model: "Balanced equation: C\u2083H\u2088 + 5O2 produces 3CO2 + 4H2O. Check: C: 3=3; H: 8=8; O: 10=10. The equation is balanced because the number of each type of atom is the same on both sides."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.3.6",
    title: "Changing uses of hydrocarbon compounds over time",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The dominant uses of hydrocarbons have changed dramatically over 200 years. In the 19th century, coal powered steam engines and heated homes. The discovery of petroleum and invention of the internal combustion engine shifted demand toward liquid fuels in the 20th century. By mid-century, ", /*#__PURE__*/React.createElement(Term, {
    def: "Chemicals derived from petroleum or natural gas, used as feedstocks to manufacture plastics, pharmaceuticals, fertilisers and synthetic fibres."
  }, "petrochemicals"), " became feedstocks for plastics, pharmaceuticals, synthetic fibres and fertilisers, transforming everyday life."), /*#__PURE__*/React.createElement("p", null, "In the 21st century, growing awareness of climate change is reshaping these uses again. Renewable energy sources are replacing coal in electricity generation. Electric vehicles are beginning to displace petrol and diesel cars. Natural gas (methane) is used as a ", /*#__PURE__*/React.createElement(Term, {
    def: "A fuel that produces fewer greenhouse gas emissions than coal or oil, used during the transition from fossil fuels to renewables."
  }, "transition fuel"), " while renewable capacity grows. However, hydrocarbons remain essential as chemical feedstocks for materials where no direct renewable substitute yet exists. The challenge ahead is reducing combustion of hydrocarbons while retaining access to their chemical versatility."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Timeline of changing hydrocarbon uses from coal-dominated 19th century to renewables-transitioning 21st century."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 70",
    width: "100%",
    style: {
      maxWidth: 560
    }
  }, [{
    x: 20,
    label: "1800s",
    desc: "Coal, steam"
  }, {
    x: 155,
    label: "1900s",
    desc: "Petroleum, cars"
  }, {
    x: 290,
    label: "1950s",
    desc: "Petrochemicals"
  }, {
    x: 420,
    label: "2000s",
    desc: "Renewables begin"
  }, {
    x: 530,
    label: "Now",
    desc: "EVs, solar"
  }].map(function (step, i, arr) {
    return /*#__PURE__*/React.createElement("g", {
      key: step.label
    }, i < arr.length - 1 && /*#__PURE__*/React.createElement("line", {
      x1: step.x + 20,
      y1: 26,
      x2: arr[i + 1].x - 10,
      y2: 26,
      stroke: "var(--accent-deep)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: step.x,
      cy: 26,
      r: 9,
      fill: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: step.x,
      y: 48,
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "600",
      fill: "var(--ink)"
    }, step.label), /*#__PURE__*/React.createElement("text", {
      x: step.x,
      y: 62,
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--ink-muted)"
    }, step.desc));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "Why is natural gas sometimes called a 'transition fuel'?",
    options: ["It can be converted directly into solar energy", "It produces less CO₂ per unit of energy than coal or oil, making it a bridging fuel while renewable capacity is built", "It is a renewable resource", "It produces no greenhouse gases at all"],
    correct: 1,
    explain: "Natural gas (methane) releases less CO\u2082 per unit of energy than coal or oil when burned, but it is still a fossil fuel. It is a short-term bridge while renewable energy capacity is developed."
  }))));
}

/* ============================================================
   SECTION 3.4: POLYMERS
   ============================================================ */
function Section34(_ref8) {
  var progress = _ref8.progress,
    setProgress = _ref8.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "3.4 Polymers"), /*#__PURE__*/React.createElement("h1", null, "Giant molecules in everyday life"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "From the bag in your lunch box to the fibres in your sportswear, polymers are built from thousands of repeating small units called monomers.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/polymers.png",
    caption: "Many small monomers join into a long polymer chain."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.4.1",
    title: "Raw materials for polymer production",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A large molecule made of many repeating smaller units (monomers) joined by covalent bonds."
  }, "polymer"), " is a giant molecule built from thousands of small, identical (or similar) units called ", /*#__PURE__*/React.createElement(Term, {
    def: "The small, reactive molecules that join together to form a polymer chain."
  }, "monomers"), ". Most synthetic polymers come from monomers derived from crude oil. Cracking of petroleum produces reactive alkenes, especially ", /*#__PURE__*/React.createElement(Term, {
    def: "The simplest alkene, CH\u2082=CH\u2082, used as the monomer for polyethylene."
  }, "ethene"), ", which polymerises to make polyethylene (PE), one of the world's most-used plastics. Propene becomes polypropylene (PP), vinyl chloride becomes PVC, and styrene becomes polystyrene."), /*#__PURE__*/React.createElement("p", null, "Not all polymers come from petroleum. Natural polymers have always existed in living organisms: ", /*#__PURE__*/React.createElement(Term, {
    def: "A natural polymer of glucose forming the structural material in plant cell walls."
  }, "cellulose"), ", starch, proteins, DNA and natural rubber are all biological polymers. Bio-based synthetic polymers are a growing category. ", /*#__PURE__*/React.createElement(Term, {
    def: "Polylactic acid: a bio-based, potentially compostable polymer made from lactic acid derived from fermenting plant sugars."
  }, "PLA (polylactic acid)"), " is made from sugarcane or corn starch. As society moves away from petroleum dependency, these renewable monomers offer lower-carbon alternatives."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key idea"
  }, "A polymer is named by adding \"poly-\" to the monomer name: ethene becomes polyethylene, propene becomes polypropylene, styrene becomes polystyrene."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "What is the monomer used to make polyethylene?",
    options: ["Propene", "Ethene", "Styrene", "Vinyl chloride"],
    correct: 1,
    explain: "Polyethylene is made by polymerising ethene (CH\u2082=CH\u2082). The name confirms this: poly + ethene = polyethylene."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.4.2",
    title: "Properties of a range of polymers",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Polymer properties depend on chain length, degree of branching, cross-linking, and additives. ", /*#__PURE__*/React.createElement(Term, {
    def: "Plastics that soften when heated and can be re-moulded; chains are held by weak intermolecular forces."
  }, "Thermoplastics"), " (polyethylene, polypropylene, PET) soften when heated because heat overcomes the weak intermolecular forces between chains. They can be recycled by melting. ", /*#__PURE__*/React.createElement(Term, {
    def: "Plastics that form permanent covalent cross-links between chains when first cured; cannot be re-melted."
  }, "Thermosets"), " (Bakelite, epoxy resin) form permanent covalent cross-links when cured; heating decomposes rather than melts them. This makes thermosets harder and more heat-resistant, but non-recyclable by melting."), /*#__PURE__*/React.createElement("p", null, "Within thermoplastics, branching matters. ", /*#__PURE__*/React.createElement(Term, {
    def: "Low-density polyethylene: a branched polymer with chains that cannot pack tightly, giving a soft, flexible material."
  }, "LDPE"), " (low-density polyethylene) has more branched chains that cannot pack tightly, giving a soft, flexible material used for plastic bags. ", /*#__PURE__*/React.createElement(Term, {
    def: "High-density polyethylene: an unbranched polymer whose tightly packed chains give a stiff, strong material."
  }, "HDPE"), " (high-density polyethylene) has mostly unbranched chains that pack closely together, giving stiffness and strength for milk bottles and pipes. Nylon has strong hydrogen bonds between chains, giving it high tensile strength for fibres and ropes."), /*#__PURE__*/React.createElement(PolymerComparison, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 2,
    question: "Why can thermoplastics be recycled by melting but thermosets cannot?",
    options: ["Thermosets are made from more expensive monomers", "Thermoplastic chains are held by weak intermolecular forces that heat can overcome; thermoset chains are joined by permanent covalent cross-links that decompose rather than melt", "Thermoplastics contain more carbon", "Thermosets are always coloured"],
    correct: 1,
    explain: "Thermoplastic chains are held by weak intermolecular forces disrupted by heat, allowing flow. Thermoset chains are joined by permanent covalent bonds; heating destroys the material chemically."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.4.3",
    title: "Survey of polymer waste in the local environment",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Plastic pollution is one of the most visible environmental issues in Australia. Most common plastics are not ", /*#__PURE__*/React.createElement(Term, {
    def: "The ability of a material to be broken down by microorganisms into simpler natural substances within a reasonable timeframe."
  }, "biodegradable"), ". Discarded items persist for decades to centuries, gradually fragmenting through UV exposure, weathering and abrasion into smaller pieces, but retaining their chemical structure. A physical survey of a local area provides direct evidence of the scale and types of polymer waste present."), /*#__PURE__*/React.createElement("p", null, "Surveys should be conducted systematically. Using a ", /*#__PURE__*/React.createElement(Term, {
    def: "A defined straight-line path along which observations or collections are made."
  }, "transect"), " (a set path with items collected within a defined width) or a ", /*#__PURE__*/React.createElement(Term, {
    def: "A defined rectangular area within which all items are counted."
  }, "quadrat"), " (a defined area fully searched) makes results comparable between locations and times. Items are identified by the ", /*#__PURE__*/React.createElement(Term, {
    def: "The number (1 to 7) in a recycling triangle stamped on plastic products to identify the polymer type."
  }, "Resin Identification Code"), " (recycling number) where visible, or by appearance and flexibility. Data expressed as items per 100 square metres can be compared between sites and over time."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Small fragments matter"
  }, "Fragments smaller than 5 mm are called microplastics. They are too small to collect easily, can be ingested by a wide range of animals, and are nearly impossible to remove once they enter soil or water. Preventing large plastic items from entering the environment is far more effective than trying to remove fragments later."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "What does a high proportion of very small plastic fragments (below 2 cm) in a survey suggest?",
    options: ["The plastic arrived recently", "The plastic has been in the environment a long time and has been weathered and broken down from larger items", "There is a recycling facility nearby", "The survey was conducted in winter"],
    correct: 1,
    explain: "Small fragments form when larger plastic items are broken down by UV, weathering and abrasion over months or years. A high proportion of fragments indicates chronic, persistent, long-term pollution."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.4.4",
    title: "Biodegradability of packaging materials",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Biodegradability is the ability of a material to be broken down by microorganisms (bacteria and fungi) into water, carbon dioxide and organic matter within a reasonable timeframe. Paper and cardboard biodegrade in weeks to months in moist soil because microorganisms have enzymes to break down cellulose. Most synthetic plastics take decades to centuries because their long carbon-chain structure is not recognised by most natural enzymes."), /*#__PURE__*/React.createElement("p", null, "A classroom biodegradation investigation buries samples of different packaging materials in moist soil and measures percentage mass loss over 2 to 4 weeks. Controlling variables such as soil moisture and temperature ensures differences in mass loss reflect the material's properties, not the conditions. Photographing samples before and after burial provides qualitative evidence alongside the quantitative mass data."), /*#__PURE__*/React.createElement("p", null, "PLA is marketed as biodegradable, but only under ", /*#__PURE__*/React.createElement(Term, {
    def: "Industrial composting conditions: sustained temperatures above 58 degrees Celsius with high humidity and specific microbial populations."
  }, "industrial composting"), " conditions (above 58 degrees Celsius). In home compost bins, normal soil or seawater, PLA degrades very slowly. Labelling a material \"biodegradable\" without specifying the conditions needed can mislead consumers and policy makers."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Biodegradation needs conditions"
  }, "PLA will not biodegrade usefully in landfill, cold soil or seawater. It needs an industrial composting facility. Always ask: biodegradable WHERE and HOW FAST?"), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "Why does a synthetic plastic bag show little or no mass loss when buried in moist soil for 4 weeks?",
    options: ["It is too wet in the soil", "Soil microorganisms do not have the enzymes needed to break down the long carbon-chain polymer backbone", "It is too cold for any reaction", "The bag floats to the surface"],
    correct: 1,
    explain: "Synthetic plastics like LDPE have a long carbon-chain backbone with almost no sites that common soil microbes' enzymes can attack. Without microbial degradation, negligible mass is lost in a short period."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.4.5",
    title: "Bioaccumulation of microplastics in the environment",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "Plastic particles smaller than 5 mm in diameter."
  }, "Microplastics"), " enter the environment from two sources. Primary microplastics are manufactured at small size: nurdles (industrial plastic pellets), microbeads in cosmetics, and fibres shed from synthetic clothing during washing. Secondary microplastics form when larger plastic items break down through UV exposure, weathering and abrasion. Microplastics are now found everywhere: ocean water, deep sea sediments, freshwater, soil, air, and even in human blood, lungs and placentas."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The buildup of a substance in an organism's tissues at a concentration higher than in its surrounding environment."
  }, "Bioaccumulation"), " occurs when an organism takes in microplastics faster than it can eliminate them. ", /*#__PURE__*/React.createElement(Term, {
    def: "The increase in concentration of a pollutant at each successive level of a food chain."
  }, "Biomagnification"), " can amplify the chemical pollutants carried by microplastics at each level of a food chain: plankton ingest microplastics, small fish eat many plankton and accumulate higher concentrations, larger fish eat many small fish, and apex predators (including humans) at the top can face the highest concentrations. The chemicals that stick to plastic surfaces (persistent organic pollutants, or POPs) biomagnify up food chains, and many are known toxins."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Biomagnification of microplastic-associated pollutants through a simplified marine food chain."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 80",
    width: "100%",
    style: {
      maxWidth: 560
    }
  }, [{
    x: 20,
    w: 60,
    label: "Ocean water",
    sub: "Low conc.",
    colour: "#bfdbfe"
  }, {
    x: 110,
    w: 70,
    label: "Zooplankton",
    sub: "Higher",
    colour: "#93c5fd"
  }, {
    x: 210,
    w: 80,
    label: "Small fish",
    sub: "Higher still",
    colour: "#60a5fa"
  }, {
    x: 320,
    w: 90,
    label: "Large fish",
    sub: "Much higher",
    colour: "#2563eb"
  }, {
    x: 440,
    w: 100,
    label: "Apex predator",
    sub: "Highest",
    colour: "#1e40af"
  }].map(function (s, i, arr) {
    return /*#__PURE__*/React.createElement("g", {
      key: s.label
    }, /*#__PURE__*/React.createElement("rect", {
      x: s.x,
      y: 20,
      width: s.w,
      height: 30,
      rx: "6",
      fill: s.colour
    }), /*#__PURE__*/React.createElement("text", {
      x: s.x + s.w / 2,
      y: 38,
      textAnchor: "middle",
      fontSize: "9.5",
      fontWeight: "600",
      fill: i > 2 ? "#fff" : "#1e40af"
    }, s.label), /*#__PURE__*/React.createElement("text", {
      x: s.x + s.w / 2,
      y: 62,
      textAnchor: "middle",
      fontSize: "8.5",
      fill: "var(--ink-muted)"
    }, s.sub), i < arr.length - 1 && /*#__PURE__*/React.createElement("text", {
      x: s.x + s.w + 4,
      y: 38,
      fontSize: "13",
      fill: "var(--accent-deep)"
    }, "\u2192"));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "Why are apex predators such as large tuna or dolphins potentially more exposed to microplastic-associated pollutants than small fish?",
    options: ["They live deeper in the ocean", "They eat many individuals from lower trophic levels, each already containing accumulated pollutants, so concentration multiplies up the food chain", "They are larger and absorb more through their skin", "They drink more water"],
    correct: 1,
    explain: "Biomagnification means that at each step in the food chain, a predator eats many prey, each already containing the pollutant. By the time you reach apex predators, concentrations can be thousands of times higher than in the surrounding water."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "A scientist argues that microplastics are not directly toxic; it is the chemicals on their surfaces that cause harm. Explain why this distinction matters for environmental management.",
    model: "If physical particles cause most harm, the priority is reducing plastic litter and preventing fragmentation. If adsorbed chemicals (POPs) cause most harm, the priority also includes reducing industrial chemical pollution. In reality, both physical (gut blockage, reduced feeding) and chemical (toxic POPs) effects occur. The distinction matters because different management strategies are needed to address each, so both must be tackled together."
  }))));
}

/* ============================================================
   SECTION 3.5: MATERIALS IN CONTEXT
   ============================================================ */
function Section35(_ref9) {
  var progress = _ref9.progress,
    setProgress = _ref9.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "3.5 Materials in Context"), /*#__PURE__*/React.createElement("h1", null, "Beyond crude oil"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Every alternative to a petroleum-derived material comes with its own set of trade-offs. Life cycle thinking is the only honest way to compare them.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "3.5.1",
    title: "Environmental impacts of alternatives to petroleum-derived materials",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Materials derived from crude oil include conventional plastics (polyethylene, PET, PVC, polystyrene), synthetic fibres (nylon, polyester) and synthetic rubber. Growing concerns about plastic pollution, greenhouse gas emissions and the finite nature of oil have driven development of alternatives: bio-based plastics and fibres, natural materials (cotton, wool, bamboo), recycled materials, and entirely new material classes. However, every alternative also has environmental impacts that must be honestly evaluated."), /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A systematic evaluation of the environmental impacts of a product or material at every stage from raw material extraction through manufacturing, transport, use, and end-of-life."
  }, "life cycle assessment (LCA)"), " evaluates impact across five stages: raw material extraction, manufacturing, transport, use, and end of life. LCA considers multiple impact categories: greenhouse gas emissions, water consumption, land use, biodiversity impacts, energy use and pollution. A material might have a lower carbon footprint than petroleum plastic but require far more water or land. Focusing on a single measure like biodegradability alone gives a misleading picture."), /*#__PURE__*/React.createElement(LCATool, null), /*#__PURE__*/React.createElement(Figure, {
    caption: "Selected alternative materials compared with their petroleum-derived equivalents across key environmental impact categories."
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Alternative"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Replaces"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Environmental advantage"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "5px 8px",
      textAlign: "left"
    }
  }, "Environmental concern"))), /*#__PURE__*/React.createElement("tbody", null, [["PLA", "PET plastic", "Bio-based; potentially compostable", "Needs industrial composting; land and water for crops"], ["Recycled polyester", "Virgin polyester", "Reduces oil use; diverts plastic waste", "Still releases microplastic fibres in washing"], ["Cotton fabric", "Synthetic fleece", "Biodegradable; renewable", "High water and pesticide use"], ["Bamboo products", "Timber and plastic", "Rapid growth; sequesters CO₂", "Processing chemicals; transport emissions"], ["Glass (reusable)", "Single-use plastic", "Infinitely recyclable; no microplastics", "Heavier; more energy to manufacture"], ["Aluminium (reusable)", "Single-use plastic", "Highly recyclable; durable", "Energy-intensive primary production"]].map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row[0],
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, row.map(function (cell, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "4px 8px"
        }
      }, cell);
    }));
  }))))), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "LCA principle"
  }, "Always evaluate alternatives across their entire life cycle, not just one stage. A material that biodegrades easily at end-of-life might have a very high water or carbon footprint during production."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "A supermarket claims its bamboo packaging is 'green'. Which of the following is the best question to ask before accepting this claim?",
    options: ["What colour is the packaging?", "How much does it cost?", "What are the environmental impacts at every life cycle stage, including how it was processed and what happens at end of life?", "Is it waterproof?"],
    correct: 2,
    explain: "A life cycle approach asks about all stages: raw material extraction (was the bamboo sustainably grown?), manufacturing (what chemicals and energy were used?), transport, use and end-of-life (does it actually biodegrade in available conditions?)."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Using life cycle thinking, explain why a reusable cotton shopping bag must be used many times before its total environmental impact becomes less than that of using single-use polyethylene bags.",
    model: "Manufacturing a cotton bag requires significantly more energy and water than manufacturing one polyethylene bag, because cotton growing and processing are resource-intensive. This gives the cotton bag a higher environmental 'debt' at the start. Only after the bag has replaced hundreds of single-use bags does its accumulated saving (avoiding production of those bags) outweigh its initial manufacturing cost. Studies suggest a cotton bag may need to replace 100 or more single-use bags before its life cycle climate impact becomes comparable."
  }))));
}

/* ============================================================
   MOUNT
   ============================================================ */
mountTopicApp({
  year: 9,
  topicTitle: "Materials",
  branch: "chemistry",
  heroImage: "img/hero.png",
  strand: "Stage 5 · NSW Science",
  accent: "violet",
  storageKey: "y9.materials",
  hubHref: "../",
  intro: "Matter is made of atoms, and the way atoms bond together determines the properties of every material on Earth. In this topic you will explore Australia's finite mineral resources and their environmental costs, investigate how ionic, covalent and metallic bonds explain material properties, dive into organic chemistry and the hydrocarbons that fuel and feed modern society, examine the polymers that have transformed everyday life, and critically evaluate alternatives to petroleum-derived materials using life cycle thinking.",
  glossary: {
    "finite resource": "A resource that exists in a limited quantity and cannot be replenished on a human timescale.",
    "smelting": "The chemical removal of oxygen from an ore at high temperatures, usually using carbon or hydrogen as a reducing agent.",
    "tailings": "The waste rock and crushed material remaining after the valuable ore has been extracted from mined rock.",
    "acid mine drainage": "Acidic, metal-contaminated water formed when sulfide minerals in exposed rock react with water and oxygen.",
    "valency": "The number of electrons an atom must gain, lose or share to reach a stable (full outer shell) electron configuration.",
    "octet rule": "The tendency of atoms to seek 8 electrons in their outer shell, matching the electron configuration of the nearest noble gas.",
    "noble gas configuration": "An electron arrangement identical to that of a noble gas, with a completely filled outer electron shell.",
    "ionic bond": "A bond formed by the complete transfer of electrons from a metal atom to a non-metal atom, creating oppositely charged ions that attract each other.",
    "covalent bond": "A bond formed when two non-metal atoms share one or more pairs of electrons.",
    "metallic bond": "A bond in metals where positive metal ions are held together by a surrounding sea of delocalised (mobile) electrons.",
    "cation": "A positively charged ion formed when an atom loses one or more electrons.",
    "anion": "A negatively charged ion formed when an atom gains one or more electrons.",
    "diatomic molecule": "A molecule consisting of exactly two atoms of the same element bonded by a covalent bond; e.g. H₂, N₂, O₂.",
    "cross-over rule": "A method for finding the formula of an ionic compound: swap the charge numbers of each ion to become the subscripts of the other, then simplify.",
    "crystal lattice": "A regular three-dimensional arrangement of ions or atoms held together by electrostatic forces.",
    "organic compound": "A compound containing carbon atoms bonded to hydrogen (C-H bonds), often also bonded to other elements.",
    "hydrocarbon": "A compound containing only carbon and hydrogen atoms.",
    "crude oil": "A complex mixture of hydrocarbons formed from ancient marine organisms over millions of years.",
    "fractional distillation": "An industrial process that separates crude oil into fractions based on their different boiling points in a tall fractionating column.",
    "alkane": "A hydrocarbon with only single carbon-carbon bonds; follows the general formula CₙH₂ₙ₊₂.",
    "IUPAC": "The International Union of Pure and Applied Chemistry, which develops systematic naming rules for chemical compounds.",
    "complete combustion": "Combustion in excess oxygen producing only CO₂ and H₂O; releases maximum energy.",
    "incomplete combustion": "Combustion in restricted oxygen producing CO and/or soot as well as H₂O; releases less energy.",
    "carbon monoxide": "A colourless, odourless, highly toxic gas produced by incomplete combustion; binds to haemoglobin preventing oxygen transport.",
    "polymer": "A large molecule made of many repeating smaller units (monomers) joined by covalent bonds.",
    "monomer": "The small, reactive molecule that joins with many others to form a polymer chain.",
    "thermoplastic": "A plastic that softens when heated and can be re-moulded; chains held by weak intermolecular forces.",
    "thermoset": "A plastic with permanent covalent cross-links between chains; cannot be re-melted once cured.",
    "microplastic": "A plastic particle smaller than 5 mm in diameter, either manufactured at that size or formed by breakdown of larger plastics.",
    "bioaccumulation": "The buildup of a substance in an organism's tissues at a concentration higher than in its surrounding environment.",
    "biomagnification": "The increase in concentration of a pollutant at each successive level of a food chain.",
    "life cycle assessment": "A systematic evaluation of the total environmental impacts of a product or material from raw material extraction through to end-of-life disposal or recycling."
  },
  sections: [{
    id: "3.1",
    label: "Resources",
    accent: "amber",
    blurb: "Australia's finite minerals: what they are, how they are used, and what they cost the environment.",
    points: ["3.1.1", "3.1.2", "3.1.3", "3.1.4"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section31, p);
    }
  }, {
    id: "3.2",
    label: "Bonding",
    accent: "violet",
    blurb: "Valency, noble gas configurations, and three types of chemical bond that explain material properties.",
    points: ["3.2.1", "3.2.2", "3.2.3", "3.2.4", "3.2.5", "3.2.6", "3.2.7"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section32, p);
    }
  }, {
    id: "3.3",
    label: "Organic Chemistry",
    accent: "orange",
    blurb: "Carbon compounds: crude oil fractions, IUPAC naming, alkane structures, and combustion.",
    points: ["3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section33, p);
    }
  }, {
    id: "3.4",
    label: "Polymers",
    accent: "teal",
    blurb: "Monomers to polymers: properties, plastic pollution surveys, biodegradability, and microplastics.",
    points: ["3.4.1", "3.4.2", "3.4.3", "3.4.4", "3.4.5"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section34, p);
    }
  }, {
    id: "3.5",
    label: "Materials in Context",
    accent: "green",
    blurb: "Life cycle assessment and evaluating alternatives to petroleum-derived materials.",
    points: ["3.5.1"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section35, p);
    }
  }]
});
