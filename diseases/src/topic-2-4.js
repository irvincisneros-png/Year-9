/* Generated from topic-2-4.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Topic 2.4 Disease in context */
function Topic24(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  var items = [{
    id: "2.4.1",
    title: "Research developments in understanding diseases that have been made by Australians"
  }];
  var _useState = useState(items[0].id),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  useEffect(function () {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id.replace("dp-", ""));
      });
    }, {
      rootMargin: "-100px 0px -60% 0px"
    });
    items.forEach(function (i) {
      var el = document.getElementById("dp-" + i.id);
      if (el) obs.observe(el);
    });
    return function () {
      return obs.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    "data-topic": "2.4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, "Sub-topic 2.4"), /*#__PURE__*/React.createElement("h1", null, "Disease in context"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "Australian researchers have made discoveries that changed global medicine \u2014 from the cause of stomach ulcers to one of the most widely used cancer vaccines in the world. This section is about the people, the evidence and the impact.")), /*#__PURE__*/React.createElement(SubNav, {
    items: items,
    progress: progress,
    activeId: active
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.4.1",
    title: items[0].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Science is a human activity. Australian researchers have been behind several transformational discoveries \u2014 often by challenging accepted wisdom and following the evidence."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Australian medical innovations explorer",
    subtitle: "Click any card to read the full story."
  }, /*#__PURE__*/React.createElement(AusInnovations, null)), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "Research task:"), " choose one Australian contribution to understanding or treating disease. Produce a 400\u2013600 word scientific biography covering: the problem, the person(s), the evidence they gathered, how the discovery was received, and its impact today. Cite at least three sources."), /*#__PURE__*/React.createElement(Questions, {
    title: "2.4.1"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which Australians won a Nobel Prize for showing that a bacterium (H. pylori) causes most stomach ulcers?",
    correct: 2,
    options: ["Frank Fenner & Macfarlane Burnet", "Ian Frazer & Jian Zhou", "Barry Marshall & Robin Warren", "Howard Florey & Ernst Chain"],
    explain: "Marshall and Warren won the 2005 Nobel Prize in Physiology or Medicine. Marshall famously drank a culture of H. pylori himself to prove the link."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "C2",
    question: "Which cancer does the HPV vaccine (Gardasil) mainly prevent?",
    correct: 1,
    options: ["Lung cancer", "Cervical cancer", "Skin cancer", "Stomach cancer"],
    explain: "HPV causes most cervical cancers. The Gardasil vaccine, co-invented by Ian Frazer and Jian Zhou at UQ, has dramatically reduced rates worldwide."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Why was Marshall's discovery initially rejected by the medical community?",
    model: "The accepted view was that stomach ulcers were caused by stress and diet, and that no bacterium could survive in stomach acid. Marshall and Warren's idea contradicted both. It took years \u2014 and Marshall drinking a dose of H. pylori to give himself gastritis \u2014 before the mainstream accepted the evidence. It's a classic example of how scientific consensus updates: slowly, but in response to reproducible evidence."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "R1",
    question: "Research: choose one Australian researcher listed in the explorer (or find another) and write a 200-word summary of their work and why it matters.",
    model: "Good answers name the person, the specific problem they worked on, their key method or evidence, when the work happened, and one concrete impact it has today (lives saved, a vaccine used, a treatment that exists because of them)."
  }))));
}
window.Topic24 = Topic24;
