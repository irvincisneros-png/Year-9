/* Generated from topic-2-3.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Topic 2.3 Disease control and prevention */
function Topic23(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  var items = [{
    id: "2.3.1",
    title: "Describe ways to reduce the incidence of non-infectious diseases"
  }, {
    id: "2.3.2",
    title: "Assess ways to reduce the incidence and spread of infectious diseases"
  }, {
    id: "2.3.3",
    title: "Investigate Aboriginal and/or Torres Strait Islander Peoples' use of plants to prevent or control disease"
  }, {
    id: "2.3.4",
    title: "Analyse data about immunisation programs and the occurrence of infectious diseases"
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
    "data-topic": "2.3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, "Sub-topic 2.3"), /*#__PURE__*/React.createElement("h1", null, "Disease control & prevention"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "Preventing disease is almost always easier, cheaper and more effective than treating it. Individuals, governments, communities \u2014 and the long-established plant medicine knowledge of Aboriginal and Torres Strait Islander Peoples \u2014 all play a role.")), /*#__PURE__*/React.createElement(SubNav, {
    items: items,
    progress: progress,
    activeId: active
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.3.1",
    title: items[0].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A large share of the risk of the most common chronic diseases in Australia is linked to modifiable lifestyle factors. Genetic factors can't be changed; lifestyle and environmental ones can."), /*#__PURE__*/React.createElement("h3", null, "Individual action"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Eat a balanced diet"), " \u2014 vegetables, fruit, wholegrains; limit saturated fat, sugar, salt."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Be active"), " \u2014 Australian guidelines: \u226560 min moderate-vigorous activity per day for teens."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Avoid tobacco"), " \u2014 smoking is the single largest preventable cause of disease in Australia."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Limit alcohol"), " \u2014 none for under-18s; \u226410 standard drinks/week for adults."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Protect skin from UV"), " \u2014 hat, SPF 50+, shade, clothing."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Manage stress & sleep"), "."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Regular health checks"), " \u2014 early detection of BP, cholesterol, pre-cancerous changes.")), /*#__PURE__*/React.createElement("h3", null, "Community & government action"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Taxing tobacco & sugary drinks"), /*#__PURE__*/React.createElement("li", null, "Food labelling (Health Star Rating)"), /*#__PURE__*/React.createElement("li", null, "Campaigns (LiveLighter, Slip-Slop-Slap-Seek-Slide)"), /*#__PURE__*/React.createElement("li", null, "Bike lanes, parks, safe footpaths"), /*#__PURE__*/React.createElement("li", null, "Screening programs (BreastScreen, bowel, cervical)"), /*#__PURE__*/React.createElement("li", null, "Banning harmful substances (asbestos, lead in paint)")), /*#__PURE__*/React.createElement(Questions, {
    title: "2.3.1"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which is the single largest preventable cause of disease in Australia?",
    correct: 1,
    options: ["Inactivity", "Smoking", "Poor diet", "UV exposure"],
    explain: "Smoking causes the greatest disease burden in Australia \u2014 heart disease, lung cancer, COPD, stroke."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Justify the Australian government's heavy taxation of cigarettes.",
    model: "Smoking causes enormous preventable disease burden and health-system cost. Raising prices reduces uptake (especially in young people) and encourages quitting. Tax revenue can fund anti-smoking programs. Net public health and economic benefit."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.3.2",
    title: items[1].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "To reduce spread of an infectious disease we ", /*#__PURE__*/React.createElement("strong", null, "break the chain of infection"), ". Different actions target different links."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Break the chain of infection",
    subtitle: "Click any link to break it. Breaking any one link stops the chain."
  }, /*#__PURE__*/React.createElement(ChainOfInfection, null)), /*#__PURE__*/React.createElement("div", {
    className: "figure-row"
  }, /*#__PURE__*/React.createElement(Figure, {
    num: "2.11a",
    src: "images/raw-17.jpg",
    alt: "Break the chain of infection poster showing six prevention actions",
    caption: "Each everyday action targets a different link in the chain. You don't have to stop all of them \u2014 breaking any one link stops the spread."
  }), /*#__PURE__*/React.createElement(Figure, {
    num: "2.11b",
    src: "images/raw-22.jpg",
    alt: "Quarantine and isolation illustration with sick students going to an isolation area",
    caption: "Quarantine and isolation remove infected or exposed people from the transmission pathway. A small cost to the individual for a much bigger benefit to the community."
  })), /*#__PURE__*/React.createElement("h3", null, "Layers of defence"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Personal hygiene"), " \u2014 handwashing with soap (one of the most effective public-health measures ever)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Safe water & sanitation"), " \u2014 prevented more disease than any medical treatment."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Safe food"), " \u2014 refrigeration, cooking, handling rules."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Physical barriers"), " \u2014 masks, gloves, mosquito nets."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Isolation & quarantine"), "."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Vector control"), " \u2014 spraying, draining standing water, repellent."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Vaccination"), " \u2014 strongest long-term tool for most viral diseases."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Antibiotics & antivirals"), " \u2014 but resistance is a growing problem."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Contact tracing & surveillance"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "Effectiveness depends on the disease."), " Masks help for droplet/airborne diseases but not mosquito-borne ones. Vaccines work brilliantly for stable viruses (measles) but less well for rapidly mutating ones (flu). Antibiotics kill bacteria but are useless against viruses \u2014 and overuse drives resistance."), /*#__PURE__*/React.createElement(Questions, {
    title: "2.3.2"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which measure would be MOST effective against malaria?",
    correct: 2,
    options: ["A mask", "Handwashing", "Vector control (mosquito nets, draining water)", "An antibiotic"],
    explain: "Malaria is spread by mosquitoes \u2014 blocking the vector is the key intervention."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Why is overuse of antibiotics dangerous for public health?",
    model: "When antibiotics are overused, bacteria with resistant mutations survive and pass on resistance. Over time populations of resistant bacteria grow, and common infections become untreatable. Hospitals are particularly at risk of superbugs like MRSA."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.3.3",
    title: items[2].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Aboriginal and Torres Strait Islander Peoples have lived continuously on this continent for at least ", /*#__PURE__*/React.createElement("strong", null, "65,000 years"), ". Over that time, different Nations developed extensive and sophisticated knowledge of local plants and their medicinal uses. This knowledge is held by specific communities and passed down through generations \u2014 always name the specific Country and Peoples rather than referring to all Aboriginal and Torres Strait Islander Peoples as one group."), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "A note on cultural knowledge."), " Much traditional medicinal knowledge \u2014 in particular the exact methods of preparation \u2014 remains the cultural intellectual property of the relevant Nation. The examples here include only information that has been publicly shared by Traditional Custodians or is documented in published sources. Deeper study should be led by Aboriginal and Torres Strait Islander voices."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Bush medicine plants across Australia",
    subtitle: "Click a pin or a plant name to explore."
  }, /*#__PURE__*/React.createElement(BushMedicineMap, null)), /*#__PURE__*/React.createElement("h3", null, "What was special about this knowledge?"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Place-based"), " \u2014 each Nation developed detailed knowledge of the plants of their own Country."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Holistic"), " \u2014 'medicine' often included food, song, ceremony and care for Country, not only a chemical effect."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Empirical"), " \u2014 plants were selected and refined over many thousands of generations of observation."), /*#__PURE__*/React.createElement("li", null, "Many preparations have since been shown to contain genuinely active compounds \u2014 antimicrobial essential oils, anti-inflammatory saponins, wound-healing flavonoids.")), /*#__PURE__*/React.createElement(Questions, {
    title: "2.3.3"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Why is it important to name the specific Nation / Country when discussing traditional plant medicines?",
    correct: 1,
    options: ["Because each Nation owns all knowledge", "Because knowledge is place-based and belongs to specific Peoples, not a single group", "Because it makes the name easier to remember", "Because scientists need to know the location"],
    explain: "Aboriginal and Torres Strait Islander Peoples are many distinct Nations with their own Countries and knowledge. Respectful practice names the specific Nation."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Laboratory studies show that tea tree oil kills bacteria. Does this mean Bundjalung knowledge of tea tree is now 'scientific'?",
    model: "Bundjalung knowledge of tea tree was already empirical \u2014 developed over thousands of generations of careful observation of what worked. Laboratory science has since confirmed one mechanism (terpinen-4-ol's antimicrobial action), but the knowledge didn't become valid by being verified in a lab \u2014 it was always valid. Western science and Bundjalung knowledge are different traditions that can sit alongside each other."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.3.4",
    title: items[3].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Immunisation programs have transformed the pattern of infectious disease in Australia. Measles cases were very high before 1969, fell sharply after vaccination began, and dropped further once the MMR vaccine was added. High coverage (around 95% for two doses) is needed to stop the spread."), /*#__PURE__*/React.createElement(Figure, {
    num: "2.12",
    src: "images/raw-24.jpg",
    alt: "Stop Measles poster with vaccination and community protection",
    caption: "Measles is one of the most contagious diseases known. It spreads mainly through the air: the virus can hang in a room for up to two hours after an infected person leaves. Australia eliminated endemic measles in 2014, but outbreaks still happen when coverage falls below the herd-immunity threshold (~95%)."
  }), /*#__PURE__*/React.createElement("h3", null, "How to analyse disease-and-vaccination data"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Identify the variables (usually time on x-axis, cases and/or coverage on y-axis)."), /*#__PURE__*/React.createElement("li", null, "Describe the trend in cases ", /*#__PURE__*/React.createElement("em", null, "before"), " the vaccine."), /*#__PURE__*/React.createElement("li", null, "Identify when vaccination was introduced."), /*#__PURE__*/React.createElement("li", null, "Describe what happens to cases ", /*#__PURE__*/React.createElement("em", null, "after"), "."), /*#__PURE__*/React.createElement("li", null, "Describe the relationship between coverage and cases."), /*#__PURE__*/React.createElement("li", null, "Look for brief case rises \u2014 often linked to drops in coverage.")), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Disease"), /*#__PURE__*/React.createElement("th", null, "Before vaccination (Australia)"), /*#__PURE__*/React.createElement("th", null, "Now (Australia)"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Smallpox"), /*#__PURE__*/React.createElement("td", null, "Major epidemics 18\u201319th century"), /*#__PURE__*/React.createElement("td", null, "Eradicated globally (1980)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Polio"), /*#__PURE__*/React.createElement("td", null, "Hundreds of cases/year, many paralytic"), /*#__PURE__*/React.createElement("td", null, "No locally acquired wild polio since the 1970s; Australia declared polio-free in 2000")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Measles"), /*#__PURE__*/React.createElement("td", null, "Tens of thousands of cases/year"), /*#__PURE__*/React.createElement("td", null, "Usually under 300 cases/year (mostly travel-linked)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Diphtheria"), /*#__PURE__*/React.createElement("td", null, "A leading killer of children"), /*#__PURE__*/React.createElement("td", null, "< 10 cases/year")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Whooping cough"), /*#__PURE__*/React.createElement("td", null, "Thousands of cases; infant deaths"), /*#__PURE__*/React.createElement("td", null, "Outbreaks in unvaccinated communities")))), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "Data task:"), " write a 250\u2013400 word scientific report using data from the Australian Immunisation Handbook or AIHW. Identify the disease, describe trends before and after vaccination, describe the coverage\u2013cases relationship, explain using ideas from 2.2.7 and 2.3.2, and draw a clear conclusion."), /*#__PURE__*/React.createElement(Questions, {
    title: "2.3.4"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "What disease has been eradicated globally by vaccination?",
    correct: 2,
    options: ["Measles", "Polio", "Smallpox", "Influenza"],
    explain: "Smallpox was declared eradicated by WHO in 1980 \u2014 the only human disease eradicated by vaccination so far."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Predict what would happen if vaccination coverage in Australia fell to 50%. Justify.",
    model: "Herd immunity thresholds for most vaccine-preventable diseases are 75\u201395%. At 50% coverage, pathogens could circulate freely. Measles outbreaks would return (95% threshold); whooping cough deaths in infants would rise. Unvaccinated people and vulnerable groups (newborns, chemotherapy patients) would be at serious risk."
  }))));
}
window.Topic23 = Topic23;
