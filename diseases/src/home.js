/* Generated from home.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

/* Landing / Home page */
/* global React */
var _React = React,
  useMemoH = _React.useMemo;
function Home(_ref) {
  var progress = _ref.progress,
    goTo = _ref.goTo,
    topicIndex = _ref.topicIndex,
    allPoints = _ref.allPoints;
  var doneCount = allPoints.filter(function (p) {
    return progress[p];
  }).length;
  var pct = Math.round(100 * doneCount / allPoints.length);

  // Find where the student left off: first topic with any progress but not finished, else the first unfinished topic.
  var continueTopic = useMemoH(function () {
    var inProgress = topicIndex.find(function (t) {
      var done = t.points.filter(function (p) {
        return progress[p];
      }).length;
      return done > 0 && done < t.points.length;
    });
    if (inProgress) return inProgress;
    var unstarted = topicIndex.find(function (t) {
      return t.points.every(function (p) {
        return !progress[p];
      });
    });
    if (unstarted) return unstarted;
    return topicIndex[0];
  }, [progress, topicIndex]);
  var continueDone = continueTopic.points.filter(function (p) {
    return progress[p];
  }).length;
  var ctaLabel = doneCount === 0 ? "Start learning" : doneCount === allPoints.length ? "Review everything" : "Continue where you left off";
  return /*#__PURE__*/React.createElement("div", {
    className: "home",
    "data-screen-label": "home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "home-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-hero-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-eyebrow-pill"
  }, "Year 9 \xB7 Science"), /*#__PURE__*/React.createElement("span", {
    className: "home-eyebrow-meta"
  }, "Stage 5 \xB7 NSW Syllabus")), /*#__PURE__*/React.createElement("h1", {
    className: "home-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-title-kicker"
  }, "Module 2"), "Diseases", /*#__PURE__*/React.createElement("span", {
    className: "home-title-dot"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "home-lede"
  }, "How the body keeps itself stable, what goes wrong when pathogens get in, and how we stop them spreading. Four sub-topics, 17 dot points, and a lab's worth of interactive practicals \u2014 all self-paced."), /*#__PURE__*/React.createElement("div", {
    className: "home-cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "home-cta primary accent-" + continueTopic.accent,
    onClick: function onClick() {
      return goTo(continueTopic.id);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-cta-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-cta-label"
  }, ctaLabel), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "home-cta-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-cta-id"
  }, continueTopic.id), /*#__PURE__*/React.createElement("span", {
    className: "home-cta-topicname"
  }, continueTopic.label), /*#__PURE__*/React.createElement("span", {
    className: "home-cta-progress"
  }, continueDone, "/", continueTopic.points.length))), /*#__PURE__*/React.createElement("div", {
    className: "home-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-summary-ring"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "28",
    r: "24",
    fill: "none",
    stroke: "var(--border)",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "28",
    r: "24",
    fill: "none",
    stroke: "var(--emerald)",
    strokeWidth: "5",
    strokeDasharray: "".concat(pct * 1.508, " 150.8"),
    transform: "rotate(-90 28 28)",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "home-summary-pct"
  }, pct, "%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "home-summary-count"
  }, doneCount, " of ", allPoints.length), /*#__PURE__*/React.createElement("div", {
    className: "home-summary-sub"
  }, "dot points complete"))))), /*#__PURE__*/React.createElement("div", {
    className: "home-hero-art"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/raw-00.jpg",
    alt: "Year 9 Diseases topic booklet cover",
    loading: "eager"
  }), /*#__PURE__*/React.createElement("div", {
    className: "home-hero-art-tag"
  }, "Topic booklet \xB7 NSW Science"))), /*#__PURE__*/React.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Four sub-topics"), /*#__PURE__*/React.createElement("p", {
    className: "home-section-sub"
  }, "Each one builds on the last. Work through them in order, or jump to any section.")), /*#__PURE__*/React.createElement("div", {
    className: "home-topic-grid"
  }, topicIndex.map(function (t, i) {
    var done = t.points.filter(function (p) {
      return progress[p];
    }).length;
    var tPct = Math.round(100 * done / t.points.length);
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "home-topic-card accent-" + t.accent,
      onClick: function onClick() {
        return goTo(t.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "home-topic-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "home-topic-num"
    }, t.id), /*#__PURE__*/React.createElement("span", {
      className: "home-topic-bar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "home-topic-bar-fill",
      style: {
        width: tPct + "%"
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "home-topic-count"
    }, done, "/", t.points.length)), /*#__PURE__*/React.createElement("h3", {
      className: "home-topic-title"
    }, t.label), /*#__PURE__*/React.createElement("p", {
      className: "home-topic-desc"
    }, HOME_DESCRIPTIONS[t.id]), /*#__PURE__*/React.createElement("div", {
      className: "home-topic-tags"
    }, HOME_TAGS[t.id].map(function (tag) {
      return /*#__PURE__*/React.createElement("span", {
        key: tag,
        className: "home-topic-tag"
      }, tag);
    })), /*#__PURE__*/React.createElement("div", {
      className: "home-topic-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "home-topic-open"
    }, "Open sub-topic"), /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    }))));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-section-head"
  }, /*#__PURE__*/React.createElement("h2", null, "What you'll do"), /*#__PURE__*/React.createElement("p", {
    className: "home-section-sub"
  }, "Every sub-topic mixes reading, simulations you can tinker with, and questions that give instant feedback.")), /*#__PURE__*/React.createElement("div", {
    className: "home-feature-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-feature-icon",
    style: {
      background: "var(--emerald-soft)",
      color: "var(--emerald)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1 0 10 10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }))), /*#__PURE__*/React.createElement("h4", null, "11 interactives"), /*#__PURE__*/React.createElement("p", null, "Reaction-time tester, outbreak simulator, three lines of defence, herd immunity slider, bush medicine map and more.")), /*#__PURE__*/React.createElement("div", {
    className: "home-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-feature-icon",
    style: {
      background: "var(--orange-soft)",
      color: "var(--orange)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))), /*#__PURE__*/React.createElement("h4", null, "Instant-feedback quizzes"), /*#__PURE__*/React.createElement("p", null, "Multiple-choice checks your understanding immediately. Written-response questions have model answers you can reveal.")), /*#__PURE__*/React.createElement("div", {
    className: "home-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-feature-icon",
    style: {
      background: "var(--blue-soft)",
      color: "var(--blue)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }))), /*#__PURE__*/React.createElement("h4", null, "Glossary on tap"), /*#__PURE__*/React.createElement("p", null, "Hover any highlighted term for a definition, or open the full glossary from the top bar.")), /*#__PURE__*/React.createElement("div", {
    className: "home-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-feature-icon",
    style: {
      background: "var(--violet-soft)",
      color: "var(--violet)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }))), /*#__PURE__*/React.createElement("h4", null, "Your progress saves itself"), /*#__PURE__*/React.createElement("p", null, "Tick off dot points as you go. Everything stays in this browser \u2014 export your written answers any time.")))), /*#__PURE__*/React.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-howto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-howto-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-howto-badge"
  }, "How to use this site"), /*#__PURE__*/React.createElement("h2", null, "Read a little, do a little, check yourself.")), /*#__PURE__*/React.createElement("ol", {
    className: "home-howto-steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "home-howto-num"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pick a sub-topic"), /*#__PURE__*/React.createElement("p", null, "Start at 2.1 or jump into whatever your teacher has set. The tabs are always at the top."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "home-howto-num"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Read, then play"), /*#__PURE__*/React.createElement("p", null, "Each dot point has a short explanation and an interactive to make it real. Don't just read \u2014 click things."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "home-howto-num"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Check understanding"), /*#__PURE__*/React.createElement("p", null, "Answer the questions. If you get stuck, the model answer is one click away."))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "home-howto-num"
  }, "4"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Tick it off"), /*#__PURE__*/React.createElement("p", null, "Use the checkbox beside each dot point. Your progress ring fills up as you go.")))))), /*#__PURE__*/React.createElement("section", {
    className: "home-jumpstart"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Ready?"), /*#__PURE__*/React.createElement("p", null, "Jump straight into the first sub-topic \u2014 homeostasis.")), /*#__PURE__*/React.createElement("button", {
    className: "home-cta primary accent-emerald",
    onClick: function onClick() {
      return goTo("2.1");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-cta-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "home-cta-label"
  }, "Begin 2.1 \xB7 Homeostasis"), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))))));
}
var HOME_DESCRIPTIONS = {
  "2.1": "How the body senses change and defends its set points — temperature, glucose, water balance. The nervous system's speed, the endocrine system's reach.",
  "2.2": "Pathogens, risk factors, epidemics, and the three lines of defence. Why vaccines work, and what herd immunity actually is.",
  "2.3": "Breaking the chain of infection, everyday prevention, First Nations knowledge, and what Australia's immunisation data tells us.",
  "2.4": "Australian scientists and inventors who changed medicine — bionic ear, bionic eye, Gardasil, RFDS, and the stomach ulcer story."
};
var HOME_TAGS = {
  "2.1": ["Feedback loops", "Reaction time", "Thermoregulation"],
  "2.2": ["Pathogens", "Immune response", "Herd immunity"],
  "2.3": ["Prevention", "Bush medicine", "Data analysis"],
  "2.4": ["Innovators", "Case studies"]
};
window.Home = Home;
