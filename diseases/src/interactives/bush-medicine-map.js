/* Generated from bush-medicine-map.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Bush medicine plants — interactive map of Australia */
function BushMedicineMap() {
  var plants = [{
    id: "teatree",
    name: "Tea tree (Melaleuca alternifolia)",
    nation: "Bundjalung Peoples, coastal northern NSW",
    use: "Crushed leaves applied to cuts, wounds and infections; inhaled for coughs and colds.",
    science: "Essential oil contains terpinen-4-ol, antimicrobial against bacteria and some fungi.",
    x: 82,
    y: 38
  }, {
    id: "gumbi",
    name: "Gumbi gumbi (Pittosporum angustifolium)",
    nation: "Yuwaalaraay, Kamilaroi Peoples — inland northern NSW / southern Qld",
    use: "Leaves boiled as a tea for colds, skin complaints and wellness.",
    science: "Contains saponins and other anti-inflammatory and antimicrobial compounds.",
    x: 78,
    y: 40
  }, {
    id: "emu",
    name: "Emu bush (Eremophila spp.)",
    nation: "Arrernte Peoples — Mparntwe / Alice Springs",
    use: "Crushed leaves applied to sores and cuts; infusions for colds and chest complaints.",
    science: "Extracts show strong antibacterial activity in the lab, including against MRSA.",
    x: 55,
    y: 40
  }, {
    id: "eucalypt",
    name: "Stringybark (Eucalyptus tetrodonta)",
    nation: "Yolŋu Peoples — NE Arnhem Land, NT",
    use: "Leaves steamed/burned; vapour inhaled for colds, flu and blocked airways.",
    science: "Eucalyptus oil contains 1,8-cineole — active ingredient in many modern cold preparations.",
    x: 58,
    y: 20
  }, {
    id: "oldman",
    name: "Old man weed (Centipeda cunninghamii)",
    nation: "Yorta Yorta Peoples — Murray–Goulburn region",
    use: "Crushed whole plant used as a wash/poultice for skin complaints, sores and eye inflammation.",
    science: "Active compounds being investigated for anti-inflammatory and wound-healing properties.",
    x: 72,
    y: 66
  }, {
    id: "sandalwood",
    name: "Native sandalwood (Santalum lanceolatum)",
    nation: "Western Desert Peoples (e.g. Pintupi, Ngaanyatjarra)",
    use: "Leaves, bark, fruit in preparations for skin rash, rheumatism, chest infections.",
    science: "Essential oils contain antimicrobial terpenoids.",
    x: 44,
    y: 40
  }, {
    id: "lemonmyrtle",
    name: "Lemon myrtle (Backhousia citriodora)",
    nation: "Peoples of the subtropical rainforests — NSW north coast / SE Qld",
    use: "Leaves used as an antiseptic and in bush teas.",
    science: "High levels of citral — strong antimicrobial activity.",
    x: 84,
    y: 45
  }, {
    id: "mangrove",
    name: "Mangrove bark (Bruguiera spp.)",
    nation: "Bardi and Jawi Peoples — Dampier Peninsula, WA",
    use: "Bark preparations as washes for sores, boils and skin complaints.",
    science: "Contains tannins and other antimicrobial compounds.",
    x: 32,
    y: 20
  }];
  var _useState = useState(plants[0].id),
    _useState2 = _slicedToArray(_useState, 2),
    sel = _useState2[0],
    setSel = _useState2[1];
  var cur = plants.find(function (p) {
    return p.id === sel;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--bg-elev)",
      borderRadius: "var(--radius)",
      border: "1px solid var(--border)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 80",
    style: {
      width: "100%",
      height: "auto"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20,22 Q 25,12 40,14 L 60,12 Q 72,14 78,20 L 88,28 Q 92,40 86,50 L 80,60 Q 72,70 60,68 L 40,66 Q 28,68 22,60 L 15,50 Q 14,35 20,22 Z",
    fill: "var(--bg-sunken)",
    stroke: "var(--border-strong)",
    strokeWidth: "0.6"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "76",
    cy: "73",
    rx: "3",
    ry: "2",
    fill: "var(--bg-sunken)",
    stroke: "var(--border-strong)",
    strokeWidth: "0.4"
  }), plants.map(function (p) {
    return /*#__PURE__*/React.createElement("g", {
      key: p.id,
      onClick: function onClick() {
        return setSel(p.id);
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: sel === p.id ? 2.8 : 1.8,
      fill: sel === p.id ? "var(--accent)" : "var(--orange)",
      stroke: "white",
      strokeWidth: "0.5"
    }), sel === p.id && /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: "4.5",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "0.6",
      opacity: "0.6"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      marginTop: 8
    }
  }, plants.map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        return setSel(p.id);
      },
      style: {
        fontSize: 11,
        padding: "4px 8px",
        background: sel === p.id ? "var(--accent)" : "var(--bg-sunken)",
        color: sel === p.id ? "white" : "var(--ink-soft)",
        border: "1px solid var(--border)",
        borderRadius: 100,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, p.name.split(" (")[0]);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-elev)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 4px",
      fontSize: 15
    }
  }, cur.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--accent)",
      fontWeight: 600,
      marginBottom: 10
    }
  }, cur.nation), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "Traditional use"), cur.use), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "Modern science"), cur.science)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1/-1",
      padding: 12,
      background: "var(--accent-soft)",
      color: "var(--accent-ink)",
      borderRadius: 8,
      fontSize: 12,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", null, "A note on cultural knowledge."), " Traditional medicinal knowledge remains the cultural intellectual property of the relevant Aboriginal or Torres Strait Islander Nation. Always name the specific Country and Peoples when discussing these plants, and seek out sources authored or authorised by Aboriginal and Torres Strait Islander people. Deeper study should be led by Aboriginal and Torres Strait Islander voices."));
}
window.BushMedicineMap = BushMedicineMap;
