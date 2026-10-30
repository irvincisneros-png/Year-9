/* Generated from innovations-explorer.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Australian medical innovations explorer */
function InnovationsExplorer() {
  var items = [{
    id: "cochlear",
    name: "Cochlear implant ('bionic ear')",
    dev: "Prof. Graeme Clark, University of Melbourne",
    year: 1978,
    color: "var(--blue)",
    summary: "Electronic device that bypasses damaged hair cells in the inner ear and stimulates the auditory nerve directly.",
    impact: "Restores hearing to over 700,000 profoundly deaf people worldwide.",
    problem: "Sensorineural deafness — when hair cells in the cochlea are damaged, sound can't reach the brain.",
    next: "Better music/speech-in-noise clarity; fully implantable versions.",
    icon: "🦻"
  }, {
    id: "recell",
    name: "Spray-on skin (ReCell®)",
    dev: "Prof. Fiona Wood & Marie Stoner, Perth",
    year: 1993,
    color: "#dc2626",
    summary: "Patient's healthy skin is processed into a cell suspension and sprayed onto burn wounds.",
    impact: "Dramatically cuts healing time and scarring vs traditional skin grafts. Widely used after the 2002 Bali bombings.",
    problem: "Severe burns — skin grafts need large areas of donor skin, heal slowly and leave significant scars.",
    next: "Treating other skin conditions; 3D-printed skin.",
    icon: "🧴"
  }, {
    id: "gardasil",
    name: "Gardasil (HPV vaccine)",
    dev: "Prof. Ian Frazer & Dr Jian Zhou, UQ",
    year: 2006,
    color: "var(--emerald)",
    summary: "Subunit vaccine against human papillomavirus — the cause of almost all cervical cancers.",
    impact: "Australia's HPV program led the world; cervical cancer in young Australian women has fallen dramatically.",
    problem: "Cervical cancer — caused by HPV, previously killed hundreds of Australian women each year.",
    next: "Single-dose programs in low-income countries; elimination of cervical cancer.",
    icon: "💉"
  }, {
    id: "bioniceye",
    name: "Bionic eye prototype",
    dev: "Bionic Vision Australia consortium",
    year: 2012,
    color: "var(--violet)",
    summary: "Device implanted behind the retina receives signals from camera glasses and stimulates remaining retinal cells.",
    impact: "Early prototypes restored partial vision to patients with retinitis pigmentosa.",
    problem: "Degenerative retinal diseases — photoreceptors die but the optic nerve is intact.",
    next: "Higher-resolution arrays; colour vision.",
    icon: "👁️"
  }, {
    id: "rfds",
    name: "Royal Flying Doctor Service",
    dev: "Founded by Rev. John Flynn, 1928",
    year: 1928,
    color: "var(--orange)",
    summary: "Aeromedical service delivering emergency and routine health care across remote Australia.",
    impact: "Over 300,000 patient contacts per year across the country.",
    problem: "Access to medical care in remote Australia — distances of hundreds to thousands of km.",
    next: "Telehealth expansion; more aircraft and remote clinics.",
    icon: "✈️"
  }, {
    id: "hpylori",
    name: "H. pylori as the cause of ulcers",
    dev: "Robin Warren & Barry Marshall, Perth",
    year: 1982,
    color: "#0891b2",
    summary: "Discovered that most stomach ulcers are caused by Helicobacter pylori bacteria, not stress.",
    impact: "Ulcers now cured with a course of antibiotics. 2005 Nobel Prize in Medicine.",
    problem: "Stomach ulcers were thought to be caused by stress and treated with lifelong medication.",
    next: "Understanding links to stomach cancer.",
    icon: "🦠"
  }];
  var _useState = useState(items[0].id),
    _useState2 = _slicedToArray(_useState, 2),
    sel = _useState2[0],
    setSel = _useState2[1];
  var cur = items.find(function (i) {
    return i.id === sel;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
      gap: 8,
      marginBottom: 12
    }
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: function onClick() {
        return setSel(it.id);
      },
      style: {
        padding: 12,
        border: "1.5px solid " + (sel === it.id ? it.color : "var(--border)"),
        background: sel === it.id ? "var(--bg-elev)" : "var(--bg-sunken)",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        fontFamily: "inherit",
        textAlign: "left",
        transform: sel === it.id ? "translateY(-2px)" : "none",
        transition: "all 0.15s",
        boxShadow: sel === it.id ? "var(--shadow)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginBottom: 4
      }
    }, it.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.3
      }
    }, it.name.split(" (")[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-muted)",
        fontFamily: "var(--font-mono)",
        marginTop: 2
      }
    }, it.year));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      background: "var(--bg-elev)",
      border: "2px solid ".concat(cur.color),
      borderRadius: "var(--radius)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32
    }
  }, cur.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 18
    }
  }, cur.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: cur.color,
      fontWeight: 600
    }
  }, cur.dev, " \xB7 ", cur.year))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: 12,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "Problem addressed"), cur.problem), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "How it works"), cur.summary), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "Impact"), cur.impact), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink-muted)",
      marginBottom: 2
    }
  }, "What's next"), cur.next))));
}
window.InnovationsExplorer = InnovationsExplorer;
window.AusInnovations = InnovationsExplorer;
