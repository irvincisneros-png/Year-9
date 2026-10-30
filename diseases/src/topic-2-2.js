/* Generated from topic-2-2.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Topic 2.2 Infectious and non-infectious diseases */
function Topic22(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  var items = [{
    id: "2.2.1",
    title: "Distinguish between infectious and non-infectious diseases"
  }, {
    id: "2.2.2",
    title: "Identify causes of non-infectious and infectious diseases"
  }, {
    id: "2.2.3",
    title: "Compare the features and incidences of epidemics, endemics and pandemics"
  }, {
    id: "2.2.4",
    title: "Investigate data relating to a common non-infectious disease affecting Australians today"
  }, {
    id: "2.2.5",
    title: "Use modelling to investigate how infectious diseases can be spread"
  }, {
    id: "2.2.6",
    title: "Identify how the body prevents the entry of pathogens and responds to those that enter"
  }, {
    id: "2.2.7",
    title: "Outline how a vaccination stimulates the body to produce antibodies"
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
    "data-topic": "2.2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, "Sub-topic 2.2"), /*#__PURE__*/React.createElement("h1", null, "Infectious & non-infectious diseases"), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "A disease is any condition that stops the body from functioning normally. Some can be passed between people (infectious); others cannot. Both are major health problems, but they are caused, spread and prevented in different ways.")), /*#__PURE__*/React.createElement(SubNav, {
    items: items,
    progress: progress,
    activeId: active
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.1",
    title: items[0].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(G, {
    term: "infectious disease"
  }, "Infectious diseases"), " are caused by a ", /*#__PURE__*/React.createElement(G, {
    term: "pathogen"
  }, "pathogen"), " \u2014 a living organism (or virus) that enters the body and causes harm. Because the pathogen can move to another person, infectious diseases can spread. Examples: influenza, COVID-19, chickenpox, tuberculosis, food poisoning."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(G, {
    term: "non-infectious disease"
  }, "Non-infectious diseases"), " are not caused by a pathogen and cannot be passed from person to person. They are caused by genetics, lifestyle, environment or age. Examples: type 2 diabetes, most cancers, cardiovascular disease, asthma, dementia. Most are ", /*#__PURE__*/React.createElement(G, {
    term: "chronic disease"
  }, "chronic"), " (long-lasting) and are also called non-communicable diseases (NCDs)."), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Feature"), /*#__PURE__*/React.createElement("th", null, "Infectious"), /*#__PURE__*/React.createElement("th", null, "Non-infectious"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Cause"), /*#__PURE__*/React.createElement("td", null, "Pathogen"), /*#__PURE__*/React.createElement("td", null, "Genetic, lifestyle, environment, age")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Contagious?"), /*#__PURE__*/React.createElement("td", null, "Yes"), /*#__PURE__*/React.createElement("td", null, "No")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Onset"), /*#__PURE__*/React.createElement("td", null, "Often sudden (hours\u2013days)"), /*#__PURE__*/React.createElement("td", null, "Often slow (months\u2013years)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Duration"), /*#__PURE__*/React.createElement("td", null, "Often short (days\u2013weeks)"), /*#__PURE__*/React.createElement("td", null, "Long-term or lifelong")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Examples"), /*#__PURE__*/React.createElement("td", null, "Influenza, COVID-19, measles"), /*#__PURE__*/React.createElement("td", null, "Heart disease, type 2 diabetes, asthma")))), /*#__PURE__*/React.createElement(Interactive, {
    title: "Pathogen sorter",
    subtitle: "Drag each disease into the correct bucket (or click-then-click on mobile)."
  }, /*#__PURE__*/React.createElement(PathogenSorter, null)), /*#__PURE__*/React.createElement(Figure, {
    num: "2.7",
    src: "images/raw-12.jpg",
    alt: "Immune system illustration showing white blood cells, antibodies, T cells defending against germs",
    caption: "The immune system as a defence team: white blood cells patrol for invaders, antibodies lock onto specific pathogens, and T cells coordinate the response. Non-infectious diseases sit outside this story \u2014 there is no pathogen to attack."
  }), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.1"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which disease is INFECTIOUS?",
    correct: 1,
    options: ["Type 2 diabetes", "Measles", "Asthma", "Dementia"],
    explain: "Measles is caused by the measles virus \u2014 a pathogen that spreads between people."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "A1",
    question: "Why do infectious diseases often appear suddenly?",
    correct: 0,
    options: ["The pathogen replicates rapidly once inside", "They are always genetic", "The immune system ignores them", "They are caused by old age"],
    explain: "Pathogens reproduce quickly; symptoms appear once the pathogen population is large enough to cause damage."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A2",
    question: "A student says 'all diseases can be caught from someone else.' Why is this wrong?",
    model: "Non-infectious diseases like cancer, heart disease and asthma are not caused by a pathogen and cannot be passed between people. Many of the most common diseases in Australia are non-infectious."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.2",
    title: items[1].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("h3", null, "Five main groups of pathogens"), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Pathogen"), /*#__PURE__*/React.createElement("th", null, "Living?"), /*#__PURE__*/React.createElement("th", null, "Example disease"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(G, {
    term: "bacteria"
  }, "Bacteria")), /*#__PURE__*/React.createElement("td", null, "Living, single-celled"), /*#__PURE__*/React.createElement("td", null, "Tuberculosis, strep throat, Salmonella food poisoning")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(G, {
    term: "virus"
  }, "Viruses")), /*#__PURE__*/React.createElement("td", null, "Non-living (need a host cell)"), /*#__PURE__*/React.createElement("td", null, "Influenza, COVID-19, measles, HIV")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Fungi"), /*#__PURE__*/React.createElement("td", null, "Living, uni/multicellular"), /*#__PURE__*/React.createElement("td", null, "Tinea (ringworm, athlete's foot), thrush")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Protozoa"), /*#__PURE__*/React.createElement("td", null, "Living, single-celled"), /*#__PURE__*/React.createElement("td", null, "Malaria, giardia")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Parasitic worms"), /*#__PURE__*/React.createElement("td", null, "Living, multicellular"), /*#__PURE__*/React.createElement("td", null, "Tapeworm, hookworm")))), /*#__PURE__*/React.createElement("h3", null, "Causes of non-infectious diseases"), /*#__PURE__*/React.createElement("p", null, "Non-infectious diseases have ", /*#__PURE__*/React.createElement("strong", null, "risk factors"), " rather than a single cause \u2014 conditions that make a person more likely to develop the disease. Most have more than one."), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Risk factors"), /*#__PURE__*/React.createElement("th", null, "Example diseases"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Genetic"), /*#__PURE__*/React.createElement("td", null, "Faulty gene, family history"), /*#__PURE__*/React.createElement("td", null, "Cystic fibrosis, haemophilia")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Lifestyle"), /*#__PURE__*/React.createElement("td", null, "Smoking, poor diet, inactivity, alcohol"), /*#__PURE__*/React.createElement("td", null, "Heart disease, type 2 diabetes, lung cancer")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Environmental"), /*#__PURE__*/React.createElement("td", null, "Air pollution, UV, chemicals"), /*#__PURE__*/React.createElement("td", null, "Skin cancer, asthma, mesothelioma")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Age / developmental"), /*#__PURE__*/React.createElement("td", null, "Ageing cells, hormonal change"), /*#__PURE__*/React.createElement("td", null, "Osteoporosis, dementia")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Nutritional"), /*#__PURE__*/React.createElement("td", null, "Missing nutrients"), /*#__PURE__*/React.createElement("td", null, "Anaemia, goitre, rickets")))), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.2"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Which pathogen group is NOT made of cells?",
    correct: 1,
    options: ["Bacteria", "Viruses", "Fungi", "Protozoa"],
    explain: "Viruses are not cellular \u2014 they are just genetic material in a protein coat, needing a host cell to reproduce."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Why are antibiotics useless against viruses?",
    model: "Antibiotics target features of bacterial cells (cell walls, bacterial ribosomes, bacterial DNA replication). Viruses don't have these \u2014 they hijack the host's own cells. So antibiotics have nothing to attack on a virus."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.3",
    title: items[2].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Three terms describe disease spread: ", /*#__PURE__*/React.createElement(G, {
    term: "endemic"
  }, "endemic"), ", ", /*#__PURE__*/React.createElement(G, {
    term: "epidemic"
  }, "epidemic"), ", ", /*#__PURE__*/React.createElement(G, {
    term: "pandemic"
  }, "pandemic"), ". The same disease can be described differently depending on where and when you look \u2014 flu is ", /*#__PURE__*/React.createElement("em", null, "endemic"), " in Australia most years, ", /*#__PURE__*/React.createElement("em", null, "epidemic"), " in a bad winter, and was ", /*#__PURE__*/React.createElement("em", null, "pandemic"), " in 2009 (H1N1)."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(G, {
    term: "incidence"
  }, "Incidence")), " = new cases in a period. ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(G, {
    term: "prevalence"
  }, "Prevalence")), " = total existing cases. In Australia, HIV has low incidence (few new cases each year) but a relatively high prevalence because people live with it for a long time."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Endemic vs epidemic vs pandemic",
    subtitle: "Watch the case curves evolve over time."
  }, /*#__PURE__*/React.createElement(EpidemicCurves, null)), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.3"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "An endemic disease is:",
    correct: 1,
    options: ["A disease that has disappeared", "Constantly present in a region at a low level", "A sudden spike in cases", "A disease that crosses continents"],
    explain: "Endemic = steady, constant presence in a population \u2014 like malaria in parts of sub-Saharan Africa."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "A1",
    question: "COVID-19 was declared a pandemic in March 2020 because:",
    correct: 2,
    options: ["It was very severe", "It originated in Asia", "It had spread across many countries and continents", "It was caused by a new virus"],
    explain: "The defining feature of a pandemic is geographic spread across many countries/continents."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.4",
    title: items[3].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Chronic diseases are responsible for roughly ", /*#__PURE__*/React.createElement("strong", null, "9 out of every 10 deaths"), " in Australia (AIHW). The big four: cardiovascular disease, cancer, type 2 diabetes, chronic respiratory disease."), /*#__PURE__*/React.createElement("h3", null, "Case study: cardiovascular disease (CVD)"), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Proportion of Australian deaths"), /*#__PURE__*/React.createElement("td", null, "~1 in 4")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Australians living with CVD"), /*#__PURE__*/React.createElement("td", null, "~1.2 million")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Annual cost to health system"), /*#__PURE__*/React.createElement("td", null, "> $12 billion")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Highest-risk age group"), /*#__PURE__*/React.createElement("td", null, "Over 65")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Modifiable risk factors"), /*#__PURE__*/React.createElement("td", null, "Smoking, BP, cholesterol, obesity, inactivity, diet")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Non-modifiable risk factors"), /*#__PURE__*/React.createElement("td", null, "Age, sex, family history")))), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("strong", null, "Data task:"), " using AIHW (aihw.gov.au) or ABS (abs.gov.au), investigate one non-infectious disease. Collect: number affected, age group, risk factors, 20-year trend, personal risk reduction. Present as a one-page poster or infographic."), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.4"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "CVD stands for:",
    correct: 1,
    options: ["Coronary viral disease", "Cardiovascular disease", "Chronic venous disorder", "Cell-vessel disease"],
    explain: "Cardiovascular disease \u2014 conditions of the heart and blood vessels."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Explain the difference between modifiable and non-modifiable risk factors.",
    model: "Modifiable risk factors can be changed by an individual's behaviour (smoking, diet, exercise). Non-modifiable risk factors cannot be changed (age, sex, family history). Public health focuses on modifiable factors."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.5",
    title: items[4].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("h3", null, "Modes of transmission"), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Mode"), /*#__PURE__*/React.createElement("th", null, "How it works"), /*#__PURE__*/React.createElement("th", null, "Example"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Droplet"), /*#__PURE__*/React.createElement("td", null, "Cough/sneeze droplets land on mucous membranes"), /*#__PURE__*/React.createElement("td", null, "Flu, COVID-19")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Airborne"), /*#__PURE__*/React.createElement("td", null, "Tiny particles remain in the air"), /*#__PURE__*/React.createElement("td", null, "TB, measles")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Direct contact"), /*#__PURE__*/React.createElement("td", null, "Skin-to-skin or fluid contact"), /*#__PURE__*/React.createElement("td", null, "Cold sores, Ebola")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Indirect (fomite)"), /*#__PURE__*/React.createElement("td", null, "Pathogen on a surface then touched"), /*#__PURE__*/React.createElement("td", null, "Gastro, flu")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Food / water"), /*#__PURE__*/React.createElement("td", null, "Contaminated food or water"), /*#__PURE__*/React.createElement("td", null, "Salmonella, cholera")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Vector-borne"), /*#__PURE__*/React.createElement("td", null, "Animal (often insect) carries pathogen"), /*#__PURE__*/React.createElement("td", null, "Malaria, dengue")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Mother to baby"), /*#__PURE__*/React.createElement("td", null, "Placenta, birth, breast milk"), /*#__PURE__*/React.createElement("td", null, "HIV, rubella")))), /*#__PURE__*/React.createElement(Interactive, {
    title: "Practical 2.2.5 \u2014 Model a disease outbreak",
    subtitle: "Like the NaOH-cup practical, but you can run it many times. Adjust vaccination and hygiene to see how spread changes."
  }, /*#__PURE__*/React.createElement(SpreadSim, null)), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.5"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "A vector is:",
    correct: 2,
    options: ["A person who is immune", "A surface that carries pathogens", "An organism (often insect) that carries a pathogen", "A type of antibody"],
    explain: "Vectors transport pathogens between hosts. Mosquitoes are the classic vector (malaria, dengue)."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Explain why 'vaccinating' 25% of students in the spread model reduced spread even for unvaccinated students.",
    model: "Vaccinated people don't pass on the pathogen, breaking chains of transmission. Even unvaccinated students become less likely to contact an infected person \u2014 this is the beginning of herd immunity."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.6",
    title: items[5].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The human body has ", /*#__PURE__*/React.createElement("strong", null, "three lines of defence"), ". The first keeps pathogens out. The second responds fast but non-specifically if they get in. The third mounts a specific, targeted attack \u2014 and remembers."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Three lines of defence",
    subtitle: "Click each line to explore what's happening."
  }, /*#__PURE__*/React.createElement(ThreeLines, null)), /*#__PURE__*/React.createElement(Figure, {
    num: "2.8",
    src: "images/raw-19.jpg",
    alt: "Phagocytosis diagram showing five steps: recognition, attachment, engulfment, digestion, elimination",
    caption: "Phagocytosis \u2014 the second line of defence in action. A white blood cell recognises a pathogen, engulfs it, digests it with enzymes, and expels the waste. This happens without any knowledge of which pathogen it is."
  }), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.6"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Phagocytosis is:",
    correct: 1,
    options: ["The making of antibodies", "White blood cells engulfing and digesting pathogens", "A type of vaccine", "The inflammation response"],
    explain: "Phagocytes (macrophages, neutrophils) engulf and digest pathogens. Part of the non-specific (second) line."
  }), /*#__PURE__*/React.createElement(MCQ, {
    num: "C2",
    question: "What does a B-cell do?",
    correct: 0,
    options: ["Produces antibodies", "Engulfs pathogens", "Raises body temperature", "Lines the airways"],
    explain: "B-cells produce antibodies \u2014 Y-shaped proteins that bind specifically to antigens."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "Why is swelling/redness/heat at a wound actually a sign the immune system is working?",
    model: "These are signs of inflammation \u2014 the second line of defence. Blood vessels widen (redness, heat) and become leaky (swelling), letting immune cells into the area to destroy pathogens and repair damage."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "2.2.7",
    title: items[6].title,
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(G, {
    term: "vaccine"
  }, "vaccine"), " contains a weakened, inactive or fragmentary form of a pathogen. The immune system mounts a full specific response and forms ", /*#__PURE__*/React.createElement(G, {
    term: "memory cell"
  }, "memory cells"), ", but the person doesn't get sick."), /*#__PURE__*/React.createElement(Interactive, {
    title: "Primary vs secondary immune response",
    subtitle: "Press play to see why the second response is much larger and faster."
  }, /*#__PURE__*/React.createElement(VaccineResponse, null)), /*#__PURE__*/React.createElement(Figure, {
    num: "2.9",
    src: "images/raw-14.jpg",
    alt: "Nurse giving a vaccination with posters showing vaccines are safe and effective",
    caption: "A vaccine is a controlled rehearsal \u2014 it gives the immune system a safe copy of the pathogen so it can build memory without you ever getting sick from the disease itself."
  }), /*#__PURE__*/React.createElement("h3", null, "Types of vaccines"), /*#__PURE__*/React.createElement("table", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "What's in it"), /*#__PURE__*/React.createElement("th", null, "Example"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Live attenuated"), /*#__PURE__*/React.createElement("td", null, "Weakened pathogen"), /*#__PURE__*/React.createElement("td", null, "MMR")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Inactivated"), /*#__PURE__*/React.createElement("td", null, "Killed pathogen"), /*#__PURE__*/React.createElement("td", null, "Hepatitis A, rabies")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Subunit"), /*#__PURE__*/React.createElement("td", null, "Part of the pathogen"), /*#__PURE__*/React.createElement("td", null, "Hep B, HPV (Gardasil)")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "mRNA"), /*#__PURE__*/React.createElement("td", null, "Instructions for body to build antigen"), /*#__PURE__*/React.createElement("td", null, "Pfizer & Moderna COVID vaccines")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Viral vector"), /*#__PURE__*/React.createElement("td", null, "Harmless virus carrying antigen gene"), /*#__PURE__*/React.createElement("td", null, "AstraZeneca COVID vaccine")))), /*#__PURE__*/React.createElement(Interactive, {
    title: "Herd immunity simulator",
    subtitle: "Try different vaccination rates for different diseases."
  }, /*#__PURE__*/React.createElement(HerdImmunity, null)), /*#__PURE__*/React.createElement("div", {
    className: "figure-row"
  }, /*#__PURE__*/React.createElement(Figure, {
    num: "2.10a",
    src: "images/raw-21.jpg",
    alt: "Herd immunity poster showing a ring of vaccinated people protecting a baby",
    caption: "Herd immunity: when enough of the surrounding population is immune, the pathogen cannot find enough susceptible hosts to spread. The vulnerable person in the middle is protected by the ring."
  }), /*#__PURE__*/React.createElement(Figure, {
    num: "2.10b",
    src: "images/raw-26.jpg",
    alt: "Graph showing vaccination rate rising while disease rate falls over time",
    caption: "The real-world evidence. As vaccination rate rises, the disease rate falls. This is the pattern seen for measles, polio, whooping cough and many others."
  })), /*#__PURE__*/React.createElement(Questions, {
    title: "2.2.7"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: "C1",
    question: "Herd immunity means:",
    correct: 2,
    options: ["Only herd animals can be immune", "Everyone must be vaccinated", "When enough of a population is immune, even unvaccinated people are protected", "A vaccine given to livestock"],
    explain: "When a high proportion is immune, the pathogen can't find enough hosts to spread \u2014 protecting people who can't be vaccinated."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: "A1",
    question: "A friend says 'I don't need the flu shot \u2014 I never get sick.' Give two reasons why they should still get vaccinated.",
    model: "1) They could still catch and spread flu to vulnerable people (newborns, elderly, immunocompromised). 2) Past luck doesn't guarantee future immunity \u2014 flu strains change every year, and a severe season could still make them seriously ill."
  }))));
}
window.Topic22 = Topic22;
