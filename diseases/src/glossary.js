/* Generated from glossary.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global React */
var GLOSSARY = {
  "homeostasis": "The maintenance of stable internal conditions in an organism.",
  "stimulus": "A detectable change in the environment.",
  "receptor": "A structure (cell or molecule) that detects a stimulus.",
  "effector": "A muscle or gland that carries out the body's response.",
  "feedback loop": "A system that uses the result of a change to control that same change.",
  "negative feedback": "A loop that reverses a change to restore stable conditions. Dominant in the body.",
  "positive feedback": "A loop that amplifies a change — used to drive a process to completion (e.g. blood clotting).",
  "nervous system": "Neurons carrying fast electrical signals between brain, spinal cord and body.",
  "endocrine system": "Glands releasing chemical hormones into the bloodstream.",
  "hormone": "A chemical messenger released into the blood by an endocrine gland.",
  "reflex": "A rapid, automatic response to a stimulus that doesn't require conscious thought.",
  "pathogen": "An organism or virus that can cause disease (bacterium, virus, fungus, protozoan, parasite).",
  "infectious disease": "A disease caused by a pathogen that can spread between hosts.",
  "non-infectious disease": "A disease not caused by a pathogen; cannot be passed between people.",
  "bacteria": "Single-celled living organisms; some cause disease.",
  "virus": "A non-cellular infectious agent that requires a host cell to reproduce.",
  "endemic": "A disease constantly present in a population at a low level.",
  "epidemic": "A sudden, larger-than-expected increase in cases of a disease in a region.",
  "pandemic": "An epidemic that spreads across many countries or continents.",
  "incidence": "The number of new cases of a disease in a period of time.",
  "prevalence": "The total number of existing cases of a disease at one time.",
  "antibody": "A Y-shaped protein made by B-cells that binds specifically to an antigen.",
  "antigen": "A molecule (often on a pathogen) that the immune system recognises as non-self.",
  "antibiotic": "A medicine that kills bacteria or slows their growth. Does not work on viruses.",
  "b-cell": "A white blood cell that produces antibodies.",
  "t-cell": "A white blood cell that helps coordinate the immune response or kills infected cells.",
  "memory cell": "A long-lived B- or T-cell that remembers a pathogen for a fast response on re-exposure.",
  "phagocyte": "A white blood cell that engulfs and digests pathogens.",
  "vaccine": "A preparation that stimulates the immune system to develop immunity to a specific pathogen.",
  "herd immunity": "Indirect protection when a high proportion of a population is immune.",
  "vector": "An organism (often an insect) that transmits a pathogen from one host to another.",
  "chronic disease": "A disease that lasts a long time (months to years or for life). Most non-infectious diseases are chronic, but some infections (e.g. HIV) can be too.",
  "cilia": "Tiny hair-like projections on cells lining the airways that sweep mucus out.",
  "lymphocyte": "A white blood cell (B-cell or T-cell) involved in specific immunity.",
  "adaptive immunity": "The specific immune response involving B- and T-cells that targets a specific pathogen and remembers it.",
  "innate immunity": "The body's general, rapid response to any pathogen (inflammation, phagocytes, fever)."
};
function G(_ref) {
  var term = _ref.term,
    children = _ref.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    pos = _useState2[0],
    setPos = _useState2[1];
  var ref = useRef(null);
  var key = (children || term).toString().toLowerCase();
  var def = GLOSSARY[key] || GLOSSARY[term === null || term === void 0 ? void 0 : term.toLowerCase()] || "";
  var onEnter = function onEnter() {
    if (!ref.current) return;
    var r = ref.current.getBoundingClientRect();
    setPos({
      x: r.left + r.width / 2,
      y: r.top - 8
    });
  };
  var onLeave = function onLeave() {
    return setPos(null);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "gloss",
    tabIndex: 0,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onFocus: onEnter,
    onBlur: onLeave
  }, children || term), pos && def && /*#__PURE__*/React.createElement("div", {
    className: "gloss-tooltip",
    style: {
      left: pos.x,
      top: pos.y,
      transform: "translate(-50%, -100%)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      textTransform: "capitalize"
    }
  }, term || children), " \u2014 ", def));
}
window.G = G;
window.GLOSSARY = GLOSSARY;
