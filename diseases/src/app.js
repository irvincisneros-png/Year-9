/* Generated from app.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global React, ReactDOM, Topic21, Topic22, Topic23, Topic24, Home */
var _React = React,
  useS = _React.useState,
  useE = _React.useEffect,
  useR = _React.useRef,
  useM = _React.useMemo;

// ——— Dot points by topic (for counting progress) ———
var TOPIC_INDEX = [{
  id: "2.1",
  label: "Homeostasis",
  points: ["2.1.1", "2.1.2", "2.1.3", "2.1.4", "2.1.5"],
  accent: "emerald"
}, {
  id: "2.2",
  label: "Infectious & non-infectious",
  points: ["2.2.1", "2.2.2", "2.2.3", "2.2.4", "2.2.5", "2.2.6", "2.2.7"],
  accent: "orange"
}, {
  id: "2.3",
  label: "Control & prevention",
  points: ["2.3.1", "2.3.2", "2.3.3", "2.3.4"],
  accent: "blue"
}, {
  id: "2.4",
  label: "Disease in context",
  points: ["2.4.1"],
  accent: "violet"
}];
var ALL_POINTS = TOPIC_INDEX.flatMap(function (t) {
  return t.points;
});
function App() {
  var _useLocalStorage = useLocalStorage(PROGRESS_KEY, {}),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    progress = _useLocalStorage2[0],
    setProgress = _useLocalStorage2[1];
  var _useLocalStorage3 = useLocalStorage(SIZE_KEY, 1),
    _useLocalStorage4 = _slicedToArray(_useLocalStorage3, 2),
    size = _useLocalStorage4[0],
    setSize = _useLocalStorage4[1]; // 0=sm 1=md 2=lg
  var _useLocalStorage5 = useLocalStorage(THEME_KEY, false),
    _useLocalStorage6 = _slicedToArray(_useLocalStorage5, 2),
    dark = _useLocalStorage6[0],
    setDark = _useLocalStorage6[1];
  var _useState = useState("home"),
    _useState2 = _slicedToArray(_useState, 2),
    topic = _useState2[0],
    setTopic = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    settingsOpen = _useState4[0],
    setSO = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    glossaryOpen = _useState6[0],
    setGO = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    mobileNav = _useState8[0],
    setMN = _useState8[1];
  var scrollerRef = useR(null);

  // Apply theme + size to root
  useE(function () {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.dataset.size = ["sm", "md", "lg"][size] || "md";
  }, [dark, size]);

  // URL hash sync for topic
  useE(function () {
    var fromHash = function fromHash() {
      var h = window.location.hash.replace("#", "");
      if (h === "home" || h === "") {
        setTopic("home");
        return;
      }
      var m = h.match(/^(2\.[1-4])/);
      if (m && TOPIC_INDEX.find(function (t) {
        return t.id === m[1];
      })) setTopic(m[1]);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return function () {
      return window.removeEventListener("hashchange", fromHash);
    };
  }, []);

  // Scroll to top of new topic on change
  useE(function () {
    if (scrollerRef.current) scrollerRef.current.scrollTo({
      top: 0,
      behavior: "instant"
    });
    // close mobile nav on topic change
    setMN(false);
  }, [topic]);
  var goTo = function goTo(id) {
    window.location.hash = id;
    setTopic(id);
  };
  var topicDef = TOPIC_INDEX.find(function (t) {
    return t.id === topic;
  }) || {
    id: "home",
    accent: "slate"
  };
  var doneCount = ALL_POINTS.filter(function (p) {
    return progress[p];
  }).length;
  var pct = Math.round(100 * doneCount / ALL_POINTS.length);
  return /*#__PURE__*/React.createElement("div", {
    className: "app accent-" + topicDef.accent,
    "data-topic-accent": topicDef.accent
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand-mark",
    "aria-label": "Home",
    onClick: function onClick() {
      return goTo("home");
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
    d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-title"
  }, "Diseases"), /*#__PURE__*/React.createElement("div", {
    className: "brand-sub"
  }, "Year 9 Science \xB7 Interactive"))), /*#__PURE__*/React.createElement("nav", {
    className: "tabs",
    "aria-label": "Topics"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tab tab-home" + (topic === "home" ? " active" : ""),
    onClick: function onClick() {
      return goTo("home");
    },
    title: "Home"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tab-label"
  }, "Home")), TOPIC_INDEX.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "tab" + (topic === t.id ? " active" : "") + " accent-" + t.accent,
      onClick: function onClick() {
        return goTo(t.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-id"
    }, t.id), /*#__PURE__*/React.createElement("span", {
      className: "tab-label"
    }, t.label), /*#__PURE__*/React.createElement("span", {
      className: "tab-progress"
    }, t.points.filter(function (p) {
      return progress[p];
    }).length, "/", t.points.length));
  })), /*#__PURE__*/React.createElement("div", {
    className: "topbar-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-chip",
    title: "".concat(doneCount, " of ").concat(ALL_POINTS.length, " dot points complete")
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-ring"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "9",
    fill: "none",
    stroke: "var(--border)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "9",
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeDasharray: "".concat(pct * 0.5654, " 56.54"),
    transform: "rotate(-90 11 11)",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "progress-text"
  }, doneCount, "/", ALL_POINTS.length)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    "aria-label": "Glossary",
    title: "Glossary",
    onClick: function onClick() {
      return setGO(true);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
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
  }))), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    "aria-label": "Settings",
    title: "Reading settings",
    onClick: function onClick() {
      return setSO(function (s) {
        return !s;
      });
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn mobile-only",
    "aria-label": "Menu",
    onClick: function onClick() {
      return setMN(function (m) {
        return !m;
      });
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "8",
    x2: "20",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "16",
    x2: "20",
    y2: "16"
  })))), settingsOpen && /*#__PURE__*/React.createElement("div", {
    className: "settings-pop",
    onMouseLeave: function onMouseLeave() {
      return setSO(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "settings-row"
  }, /*#__PURE__*/React.createElement("label", null, "Theme"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: !dark ? "on" : "",
    onClick: function onClick() {
      return setDark(false);
    }
  }, "Light"), /*#__PURE__*/React.createElement("button", {
    className: dark ? "on" : "",
    onClick: function onClick() {
      return setDark(true);
    }
  }, "Dark"))), /*#__PURE__*/React.createElement("div", {
    className: "settings-row"
  }, /*#__PURE__*/React.createElement("label", null, "Text size"), /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: size === 0 ? "on" : "",
    onClick: function onClick() {
      return setSize(0);
    }
  }, "A"), /*#__PURE__*/React.createElement("button", {
    className: size === 1 ? "on" : "",
    onClick: function onClick() {
      return setSize(1);
    },
    style: {
      fontSize: 14
    }
  }, "A"), /*#__PURE__*/React.createElement("button", {
    className: size === 2 ? "on" : "",
    onClick: function onClick() {
      return setSize(2);
    },
    style: {
      fontSize: 16
    }
  }, "A"))), /*#__PURE__*/React.createElement("div", {
    className: "settings-row"
  }, /*#__PURE__*/React.createElement("label", null, "Reset progress"), /*#__PURE__*/React.createElement("button", {
    className: "danger-btn",
    onClick: function onClick() {
      if (confirm("Reset all progress?")) setProgress({});
    }
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    className: "settings-row"
  }, /*#__PURE__*/React.createElement("label", null, "Print this topic"), /*#__PURE__*/React.createElement("button", {
    className: "ghost-btn",
    onClick: function onClick() {
      return window.print();
    }
  }, "Print")), /*#__PURE__*/React.createElement("div", {
    className: "settings-row"
  }, /*#__PURE__*/React.createElement("label", null, "Export answers"), /*#__PURE__*/React.createElement("button", {
    className: "ghost-btn",
    onClick: exportAnswers
  }, "Export")))), mobileNav && /*#__PURE__*/React.createElement("div", {
    className: "mobile-drawer",
    onClick: function onClick() {
      return setMN(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-drawer-inner",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-tab mobile-tab-home" + (topic === "home" ? " active" : ""),
    onClick: function onClick() {
      return goTo("home");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tab-id"
  }, "\u2302"), /*#__PURE__*/React.createElement("span", {
    className: "tab-label"
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "tab-progress"
  })), TOPIC_INDEX.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "mobile-tab accent-" + t.accent + (topic === t.id ? " active" : ""),
      onClick: function onClick() {
        return goTo(t.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-id"
    }, t.id), /*#__PURE__*/React.createElement("span", {
      className: "tab-label"
    }, t.label), /*#__PURE__*/React.createElement("span", {
      className: "tab-progress"
    }, t.points.filter(function (p) {
      return progress[p];
    }).length, "/", t.points.length));
  }))), /*#__PURE__*/React.createElement("main", {
    className: "main-scroll",
    ref: scrollerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-wrap"
  }, topic === "home" && /*#__PURE__*/React.createElement(Home, {
    progress: progress,
    goTo: goTo,
    topicIndex: TOPIC_INDEX,
    allPoints: ALL_POINTS
  }), topic === "2.1" && /*#__PURE__*/React.createElement(Topic21, {
    progress: progress,
    setProgress: setProgress
  }), topic === "2.2" && /*#__PURE__*/React.createElement(Topic22, {
    progress: progress,
    setProgress: setProgress
  }), topic === "2.3" && /*#__PURE__*/React.createElement(Topic23, {
    progress: progress,
    setProgress: setProgress
  }), topic === "2.4" && /*#__PURE__*/React.createElement(Topic24, {
    progress: progress,
    setProgress: setProgress
  }), topic !== "home" && /*#__PURE__*/React.createElement(TopicNav, {
    topic: topic,
    goTo: goTo
  }), /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", null, "Year 9 Science \xB7 Module: Diseases \xB7 Built for self-paced learning with UDL principles (multiple means of representation, engagement, and action & expression)."), /*#__PURE__*/React.createElement("div", null, "Your progress is saved automatically in this browser.")))), glossaryOpen && /*#__PURE__*/React.createElement(GlossaryModal, {
    onClose: function onClose() {
      return setGO(false);
    }
  }));
}
function TopicNav(_ref) {
  var topic = _ref.topic,
    goTo = _ref.goTo;
  var idx = TOPIC_INDEX.findIndex(function (t) {
    return t.id === topic;
  });
  var prev = idx > 0 ? TOPIC_INDEX[idx - 1] : null;
  var next = idx < TOPIC_INDEX.length - 1 ? TOPIC_INDEX[idx + 1] : null;
  return /*#__PURE__*/React.createElement("nav", {
    className: "topic-nav"
  }, prev && /*#__PURE__*/React.createElement("button", {
    className: "topic-nav-btn prev accent-" + prev.accent,
    onClick: function onClick() {
      return goTo(prev.id);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-dir"
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-id"
  }, prev.id), /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-label"
  }, prev.label)), !prev && /*#__PURE__*/React.createElement("div", null), next && /*#__PURE__*/React.createElement("button", {
    className: "topic-nav-btn next accent-" + next.accent,
    onClick: function onClick() {
      return goTo(next.id);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-dir"
  }, "Next \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-id"
  }, next.id), /*#__PURE__*/React.createElement("span", {
    className: "topic-nav-label"
  }, next.label)));
}
function GlossaryModal(_ref2) {
  var onClose = _ref2.onClose;
  var _useS = useS(""),
    _useS2 = _slicedToArray(_useS, 2),
    q = _useS2[0],
    setQ = _useS2[1];
  var entries = useM(function () {
    var all = Object.entries(window.GLOSSARY).sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });
    if (!q.trim()) return all;
    var needle = q.toLowerCase();
    return all.filter(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        term = _ref4[0],
        def = _ref4[1];
      return term.includes(needle) || def.toLowerCase().includes(needle);
    });
  }, [q]);
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h2", null, "Glossary"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("input", {
    className: "gloss-search",
    placeholder: "Search terms or definitions\u2026",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "gloss-list"
  }, entries.map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      term = _ref6[0],
      def = _ref6[1];
    return /*#__PURE__*/React.createElement("div", {
      className: "gloss-entry",
      key: term
    }, /*#__PURE__*/React.createElement("dt", null, term), /*#__PURE__*/React.createElement("dd", null, def));
  }), !entries.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      color: "var(--ink-muted)",
      textAlign: "center"
    }
  }, "No matches."))));
}
function exportAnswers() {
  // Collect all written answers on the page and build a printable blob
  var areas = document.querySelectorAll(".response-box");
  if (!areas.length) {
    alert("No written answers to export on this topic. Visit each sub-topic to export all answers.");
    return;
  }
  var doc = [];
  doc.push("Year 9 Diseases — My Answers\nExported " + new Date().toLocaleString() + "\n");
  areas.forEach(function (a) {
    var card = a.closest(".quiz-card");
    var q = card ? card.querySelector(".quiz-q").innerText : "Question";
    var v = a.value.trim();
    if (v) {
      doc.push("\n— " + q + "\n" + v + "\n");
    }
  });
  if (doc.length === 1) {
    alert("No written answers to export yet.");
    return;
  }
  var blob = new Blob([doc.join("")], {
    type: "text/plain"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "diseases-answers.txt";
  a.click();
  URL.revokeObjectURL(url);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
