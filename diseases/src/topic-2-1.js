/* Generated from topic-2-1.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Topic 2.1 Homeostasis */
function Topic21(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  var items = [{
    id: "2.1.1",
    title: "Identify the importance of maintaining stable internal conditions in the body"
  }, {
    id: "2.1.2",
    title: "Investigate examples of an organism's observable response to a stimulus"
  }, {
    id: "2.1.3",
    title: "Identify the role of feedback loops in maintaining homeostasis"
  }, {
    id: "2.1.4",
    title: "Compare and contrast the responses of the nervous and endocrine systems"
  }, {
    id: "2.1.5",
    title: "Describe how the nervous and endocrine systems coordinate the body's response to stimuli"
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
    "data-topic": "2.1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, "Sub-topic 2.1"), /*#__PURE__*/React.createElement("h1", null, "Homeostasis"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "All living organisms must keep their internal conditions within a narrow range in order to survive. This section looks at how the body senses change, what it does about it, and which two control systems carry the signals.")), /*#__PURE__*/React.createElement(SubNav, {
    items: items,
    progress: progress,
    activeId: active
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.1.1",
    title: items[0].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The cells of the human body are delicate chemical factories. The ", /*#__PURE__*/React.createElement(G, null, "enzymes"), " that drive metabolism only work within a narrow range of temperature and pH. If conditions drift too far from their set point, cells stop working and the organism can become very unwell, very quickly."), /*#__PURE__*/React.createElement("p", null, "The process of keeping internal conditions stable is called ", /*#__PURE__*/React.createElement(G, {
    term: "homeostasis"
  }, "homeostasis"), " (from Greek ", /*#__PURE__*/React.createElement("em", null, "homoios"), " \u2014 same, and ", /*#__PURE__*/React.createElement("em", null, "stasis"), " \u2014 standing still). 'Stable' doesn't mean 'never changing'; conditions always fluctuate a little. Homeostasis means the fluctuations stay within a safe range."), /*#__PURE__*/React.createElement("h3", null, "Key variables controlled by homeostasis"), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Variable"), /*#__PURE__*/React.createElement("th", null, "Set point"), /*#__PURE__*/React.createElement("th", null, "What happens if it drifts too far"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Core body temperature"), /*#__PURE__*/React.createElement("td", null, "~37 \xB0C"), /*#__PURE__*/React.createElement("td", null, "<35 \xB0C: hypothermia. >40 \xB0C: heat stroke (confusion, seizures); above about 42 \xB0C proteins and enzymes start to denature.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Blood glucose"), /*#__PURE__*/React.createElement("td", null, "4\u20138 mmol/L"), /*#__PURE__*/React.createElement("td", null, "Low: confusion, coma. High: thirst, long-term organ damage.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Blood pH"), /*#__PURE__*/React.createElement("td", null, "7.35\u20137.45"), /*#__PURE__*/React.createElement("td", null, "Small changes disrupt enzymes; life-threatening below 6.9 or above 7.8.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Water / salt balance"), /*#__PURE__*/React.createElement("td", null, "~60% body mass water"), /*#__PURE__*/React.createElement("td", null, "Dehydration or over-hydration can both be dangerous.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Blood O\u2082 / CO\u2082"), /*#__PURE__*/React.createElement("td", null, "O\u2082 saturation \u2265 95%"), /*#__PURE__*/React.createElement("td", null, "Low O\u2082: cells can't respire. High CO\u2082: blood acidic.")))), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "The big idea:"), " every organ is working together to keep the internal environment constant enough for cells to survive. When this system breaks down, disease can result."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.1",
    src: "images/raw-01.jpg",
    alt: "Homeostasis infographic showing body temperature, blood glucose and water balance regulation",
    caption: "The body controls many variables at once \u2014 temperature, blood glucose, and water balance are three of the most important. Each has its own set point and its own correction mechanism, but they all share the same basic feedback-loop design."
  }), /*#__PURE__*/React.createElement(Questions, {
    title: "2.1.1"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which best defines homeostasis?",
    correct: 2,
    options: ["The body staying exactly the same at all times", "The body reacting only to external danger", "Maintaining stable internal conditions within a safe range", "The process of digesting food"],
    explain: "Homeostasis means stable \u2014 not unchanging. Values fluctuate within a safe range."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "C2",
    question: "Normal core body temperature is approximately:",
    correct: 1,
    options: ["35 °C", "37 °C", "39 °C", "41 °C"],
    explain: "37 \xB0C is the set point; the normal range is about 36\u201337.5 \xB0C."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "A marathon runner's core temp rises to 38.5 \xB0C during a race but returns to 37 \xB0C overnight. Does this count as homeostasis?",
    model: "Yes. Homeostasis means fluctuations return to the set point. Temperature rose briefly with exercise, then effectors (sweating, vasodilation) and rest brought it back \u2014 a successful negative feedback response."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "R1",
    question: "Research: name one disease that occurs when homeostasis fails (e.g. Type 1 diabetes, heat stroke). Describe the variable that is no longer being controlled.",
    model: "Type 1 diabetes: the pancreas stops producing insulin, so blood glucose is no longer controlled. Glucose stays high after meals, damaging blood vessels, kidneys and nerves over time."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.1.2",
    title: items[1].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(G, {
    term: "stimulus"
  }, "stimulus"), " is any detectable change in the environment. An organism's response is anything observable it does as a result. Both plants and animals respond to stimuli \u2014 plants more slowly."), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Stimulus"), /*#__PURE__*/React.createElement("th", null, "Receptor"), /*#__PURE__*/React.createElement("th", null, "Observable response"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Bright light"), /*#__PURE__*/React.createElement("td", null, "Photoreceptors in retina"), /*#__PURE__*/React.createElement("td", null, "Pupil constricts")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Loud sound"), /*#__PURE__*/React.createElement("td", null, "Hair cells in cochlea"), /*#__PURE__*/React.createElement("td", null, "Head turns; startle")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Cold air on skin"), /*#__PURE__*/React.createElement("td", null, "Thermoreceptors in skin"), /*#__PURE__*/React.createElement("td", null, "Shivering; goose bumps; vasoconstriction")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Pinprick"), /*#__PURE__*/React.createElement("td", null, "Nociceptors"), /*#__PURE__*/React.createElement("td", null, "Hand pulls away (reflex arc)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Light on leaves (plant)"), /*#__PURE__*/React.createElement("td", null, "Phototropins (light-sensitive proteins)"), /*#__PURE__*/React.createElement("td", null, "Stem grows towards light (phototropism)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Touch on Venus flytrap"), /*#__PURE__*/React.createElement("td", null, "Trigger hairs"), /*#__PURE__*/React.createElement("td", null, "Leaf snaps shut (a touch response called thigmonasty)")))), /*#__PURE__*/React.createElement("h3", null, "Reflexes vs. conscious responses"), /*#__PURE__*/React.createElement("p", null, "Some responses are ", /*#__PURE__*/React.createElement(G, {
    term: "reflex"
  }, "reflexes"), ": fast, automatic, handled by the spinal cord \u2014 touching something sharp and pulling your hand away. Others are conscious: you see a ball coming and decide to catch it. Different pathways, both still triggered by a stimulus."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.2",
    src: "images/raw-02.jpg",
    alt: "Two students doing the ruler-drop reaction-time experiment in a science lab",
    caption: "The ruler-drop practical. A shorter catch distance means a faster reaction. Catching the ruler is a conscious response, not a reflex: the stimulus is seeing the ruler move, the receptor is the retina, the brain decides, and the effector is the muscles of the hand."
  }), /*#__PURE__*/React.createElement(Interactive, {
    title: "Practical 2.1.2 \u2014 Reaction time tester",
    subtitle: "Measures your conscious response to a visual stimulus \u2014 just like the ruler-drop practical."
  }, /*#__PURE__*/React.createElement(ReactionTimer, null)), /*#__PURE__*/React.createElement(Questions, {
    title: "2.1.2"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "A stimulus is best described as:",
    correct: 1,
    options: ["A muscle contraction", "A detectable change in the environment", "An organ that produces hormones", "A disease"],
    explain: "A stimulus is any detectable environmental change \u2014 something a receptor can detect."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "A1",
    question: "Which is FASTER?",
    correct: 0,
    options: ["Reflex response (spinal cord)", "Conscious response (brain)", "They are identical", "Conscious is always faster"],
    explain: "Reflexes skip the brain, so they're faster \u2014 the signal only travels to the spinal cord and back."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A2",
    question: "A jellyfish has no brain, yet responds to touch. How is this possible?",
    model: "Jellyfish have a nerve net \u2014 a diffuse network of nerve cells that can trigger muscle contraction in response to touch without needing a central brain. Simple reflex-like behaviour is possible with distributed nervous tissue."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.1.3",
    title: items[2].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(G, {
    term: "feedback loop"
  }, "feedback loop"), " uses information about the result of a change to adjust its behaviour. Almost every homeostatic process relies on one."), /*#__PURE__*/React.createElement("h3", null, "Negative feedback"), /*#__PURE__*/React.createElement("p", null, "In ", /*#__PURE__*/React.createElement(G, {
    term: "negative feedback"
  }, "negative feedback"), ", a change away from the set point triggers a response that ", /*#__PURE__*/React.createElement("strong", null, "reverses"), " the change. 'Negative' means 'opposing', not 'bad'. Negative feedback keeps variables stable: temperature, blood glucose, blood pressure, water balance."), /*#__PURE__*/React.createElement("h3", null, "Positive feedback"), /*#__PURE__*/React.createElement("p", null, "In ", /*#__PURE__*/React.createElement(G, {
    term: "positive feedback"
  }, "positive feedback"), ", a change triggers a response that ", /*#__PURE__*/React.createElement("strong", null, "amplifies"), " it. Rare in the body \u2014 used to drive a process to completion (blood clotting, childbirth contractions)."), /*#__PURE__*/React.createElement("div", {
    className: "figure-row"
  }, /*#__PURE__*/React.createElement(Figure, {
    num: "2.3a",
    src: "images/raw-03.jpg",
    alt: "Negative feedback loop diagram with stimulus, receptor, control centre, effector, response, return to set point",
    caption: "Negative feedback: the response reduces the original change. The body uses this to hold temperature, glucose and water balance near their set points."
  }), /*#__PURE__*/React.createElement(Figure, {
    num: "2.3b",
    src: "images/raw-04.jpg",
    alt: "Positive feedback loop diagram using childbirth as an example",
    caption: "Positive feedback: the response amplifies the original change. Rare in the body \u2014 used to drive processes like childbirth to completion."
  })), /*#__PURE__*/React.createElement(Interactive, {
    title: "Negative feedback simulator",
    subtitle: "Change the ambient temperature and see the body defend 37 \xB0C. Toggle homeostasis OFF to see what would happen without it."
  }, /*#__PURE__*/React.createElement(FeedbackLoopSim, null)), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Feature"), /*#__PURE__*/React.createElement("th", null, "Negative feedback"), /*#__PURE__*/React.createElement("th", null, "Positive feedback"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Effect"), /*#__PURE__*/React.createElement("td", null, "Reverses the change"), /*#__PURE__*/React.createElement("td", null, "Amplifies the change")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Purpose"), /*#__PURE__*/React.createElement("td", null, "Restore stable conditions"), /*#__PURE__*/React.createElement("td", null, "Drive a process to completion")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Common?"), /*#__PURE__*/React.createElement("td", null, "Very common"), /*#__PURE__*/React.createElement("td", null, "Rare")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Example"), /*#__PURE__*/React.createElement("td", null, "Temperature regulation"), /*#__PURE__*/React.createElement("td", null, "Blood clotting, childbirth")))), /*#__PURE__*/React.createElement(Questions, {
    title: "2.1.3"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Negative feedback means:",
    correct: 1,
    options: ["A bad response", "A response that opposes the change", "A response that speeds up the change", "Feedback from a disease"],
    explain: "Negative here means 'opposing'. A response opposes the change to restore stability."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "A1",
    question: "Why would it be DANGEROUS if body temperature used positive feedback?",
    correct: 2,
    options: ["Positive feedback is too slow", "Positive feedback can't detect heat", "Any small change would amplify until cells were destroyed", "It would use too much energy"],
    explain: "Positive feedback amplifies the change. A small rise in temperature would spiral upward, denaturing enzymes and killing cells."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A2",
    question: "A thermostat keeps a house at 22 \xB0C. Identify the stimulus, receptor, control centre, effector and response.",
    model: "Stimulus: air drops below 22 \xB0C. Receptor: thermometer inside thermostat. Control centre: thermostat's switching circuit. Effector: the heater. Response: heater turns on, warming air back to 22 \xB0C."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.1.4",
    title: items[3].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The body has two systems that carry signals from receptors to effectors: the ", /*#__PURE__*/React.createElement(G, {
    term: "nervous system"
  }, "nervous system"), " and the ", /*#__PURE__*/React.createElement(G, {
    term: "endocrine system"
  }, "endocrine system"), ". They work together but are very different."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.4",
    src: "images/raw-07.jpg",
    alt: "Nervous system and endocrine system comparison poster",
    caption: "Two communication networks running in parallel. The nervous system is the body's 'internet' \u2014 fast, electrical, dedicated wiring. The endocrine system is the body's 'mail service' \u2014 slower, chemical, delivered through the bloodstream."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--emerald-soft)",
      borderRadius: "var(--radius)",
      color: "var(--emerald-ink)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14
    }
  }, "\u26A1 Nervous system"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "8px 0 0",
      paddingLeft: 18,
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Electrical signals (nerve impulses)"), /*#__PURE__*/React.createElement("li", null, "Extremely fast \u2014 milliseconds"), /*#__PURE__*/React.createElement("li", null, "Travels along dedicated 'wires' (neurons)"), /*#__PURE__*/React.createElement("li", null, "Short-lived effect"), /*#__PURE__*/React.createElement("li", null, "Reaches only the muscle/gland the nerve connects to"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--orange-soft)",
      borderRadius: "var(--radius)",
      color: "var(--orange-ink)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14
    }
  }, "\uD83E\uDDEA Endocrine system"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "8px 0 0",
      paddingLeft: 18,
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Chemical signals (", /*#__PURE__*/React.createElement(G, {
    term: "hormone"
  }, "hormones"), ")"), /*#__PURE__*/React.createElement("li", null, "Slower \u2014 seconds to hours"), /*#__PURE__*/React.createElement("li", null, "Travels through the bloodstream"), /*#__PURE__*/React.createElement("li", null, "Long-lasting effect"), /*#__PURE__*/React.createElement("li", null, "Only cells with matching receptors respond")))), /*#__PURE__*/React.createElement(Questions, {
    title: "2.1.4"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which system uses chemical messengers?",
    correct: 1,
    options: ["Nervous system", "Endocrine system", "Digestive system", "Both use chemicals equally"],
    explain: "Endocrine = chemicals (hormones) through the blood. Nervous = electrical signals through neurons."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "A1",
    question: "Hormones travel everywhere in the blood but only affect certain cells. Why?",
    correct: 2,
    options: ["The blood filters them out", "Only some cells are alive", "Only cells with matching receptors respond", "Hormones disappear quickly"],
    explain: "Each hormone fits a specific receptor \u2014 like a key in a lock. Cells without the right receptor ignore the signal."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.1.5",
    title: items[4].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The two systems rarely work alone. Nervous = fast initial response; endocrine = longer sustained response."), /*#__PURE__*/React.createElement("h3", null, "Worked example: fight-or-flight"), /*#__PURE__*/React.createElement("p", null, "A car swerves towards you. Your eyes signal your brain via the nervous system. Within a fraction of a second, motor neurons make your legs leap away (", /*#__PURE__*/React.createElement("strong", null, "nervous"), "). Simultaneously, the brain signals the adrenal glands to release ", /*#__PURE__*/React.createElement("strong", null, "adrenaline"), " \u2014 heart beats faster, breathing speeds up, blood is diverted to muscles (", /*#__PURE__*/React.createElement("strong", null, "endocrine"), "). Immediate escape + sustained energy boost."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.5",
    src: "images/raw-09.jpg",
    alt: "Fight or flight response diagram \u2014 threat, brain detects, adrenaline, body responses",
    caption: "The fight-or-flight sequence. Nervous signals trigger instant responses (leaping out of the way). Endocrine signals \u2014 adrenaline \u2014 sustain the body in a heightened state for longer."
  }), /*#__PURE__*/React.createElement("h3", null, "Worked example: blood glucose"), /*#__PURE__*/React.createElement("p", null, "After a meal, blood glucose rises. The pancreas (endocrine) releases ", /*#__PURE__*/React.createElement("strong", null, "insulin"), ", telling cells to absorb glucose. Between meals, glucose drops; the pancreas releases ", /*#__PURE__*/React.createElement("strong", null, "glucagon"), ", telling the liver to release stored glucose. The two hormones act as opposites, holding glucose in a safe range."), /*#__PURE__*/React.createElement("h3", null, "Worked example: body temperature"), /*#__PURE__*/React.createElement("p", null, "Temperature receptors in the skin and brain send nerve impulses to the hypothalamus, which acts as the control centre. If you are too hot, it signals sweat glands to release sweat and skin blood vessels to widen (vasodilation). If you are too cold, it triggers shivering and narrows skin blood vessels (vasoconstriction). Over longer periods, hormones such as thyroxine adjust how much heat your cells produce."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.6",
    src: "images/raw-08.jpg",
    alt: "Thermoregulation diagram showing too hot and too cold responses meeting at set point",
    caption: "Thermoregulation \u2014 two negative-feedback branches that both aim at the same 37 \xB0C set point. Too hot: sweat + vasodilation. Too cold: shiver + vasoconstriction."
  }), /*#__PURE__*/React.createElement(Questions, {
    title: "2.1.5"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which hormone is released when blood glucose is HIGH?",
    correct: 0,
    options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
    explain: "Insulin tells cells to absorb glucose and the liver to store it as glycogen, lowering blood glucose."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "C2",
    question: "Fight-or-flight hormone?",
    correct: 2,
    options: ["Insulin", "Thyroxine", "Adrenaline", "Glucagon"],
    explain: "Adrenaline from the adrenal glands triggers the fight-or-flight response."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Why wouldn't an endocrine-only response be fast enough to dodge a swerving car?",
    model: "Endocrine responses take seconds to hours because hormones must travel through the bloodstream. Dodging a car needs a response in a fraction of a second \u2014 only the nervous system's electrical impulses are fast enough."
  }))));
}
window.Topic21 = Topic21;
