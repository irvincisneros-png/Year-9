/* global React, ReactDOM, Topic21, Topic22, Topic23, Topic24, Home */
const { useState: useS, useEffect: useE, useRef: useR, useMemo: useM } = React;

// ——— Dot points by topic (for counting progress) ———
const TOPIC_INDEX = [
  { id: "2.1", label: "Homeostasis",               points: ["2.1.1","2.1.2","2.1.3","2.1.4","2.1.5"], accent: "emerald" },
  { id: "2.2", label: "Infectious & non-infectious", points: ["2.2.1","2.2.2","2.2.3","2.2.4","2.2.5","2.2.6","2.2.7"], accent: "orange" },
  { id: "2.3", label: "Control & prevention",      points: ["2.3.1","2.3.2","2.3.3","2.3.4"], accent: "blue" },
  { id: "2.4", label: "Disease in context",        points: ["2.4.1"], accent: "violet" },
];
const ALL_POINTS = TOPIC_INDEX.flatMap(t => t.points);

function App() {
  const [progress, setProgress] = useLocalStorage(PROGRESS_KEY, {});
  const [size, setSize]         = useLocalStorage(SIZE_KEY, 1);        // 0=sm 1=md 2=lg
  const [dark, setDark]         = useLocalStorage(THEME_KEY, false);
  const [topic, setTopic]       = useState("home");
  const [settingsOpen, setSO]   = useState(false);
  const [glossaryOpen, setGO]   = useState(false);
  const [mobileNav, setMN]      = useState(false);
  const scrollerRef = useR(null);

  // Apply theme + size to root
  useE(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.dataset.size = ["sm","md","lg"][size] || "md";
  }, [dark, size]);

  // URL hash sync for topic
  useE(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#","");
      if (h === "home" || h === "") { setTopic("home"); return; }
      const m = h.match(/^(2\.[1-4])/);
      if (m && TOPIC_INDEX.find(t => t.id === m[1])) setTopic(m[1]);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // Scroll to top of new topic on change
  useE(() => {
    if (scrollerRef.current) scrollerRef.current.scrollTo({ top: 0, behavior: "instant" });
    // close mobile nav on topic change
    setMN(false);
  }, [topic]);

  const goTo = (id) => {
    window.location.hash = id;
    setTopic(id);
  };

  const topicDef = TOPIC_INDEX.find(t => t.id === topic) || { id: "home", accent: "slate" };
  const doneCount = ALL_POINTS.filter(p => progress[p]).length;
  const pct = Math.round(100 * doneCount / ALL_POINTS.length);

  return (
    <div className={"app accent-" + topicDef.accent} data-topic-accent={topicDef.accent}>
      {/* ——— Top bar ——— */}
      <header className="topbar">
        <div className="brand">
          <button className="brand-mark" aria-label="Home" onClick={() => goTo("home")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <div className="brand-text">
            <div className="brand-title">Diseases</div>
            <div className="brand-sub">Year 9 Science · Interactive</div>
          </div>
        </div>

        <nav className="tabs" aria-label="Topics">
          <button
            className={"tab tab-home" + (topic === "home" ? " active" : "")}
            onClick={() => goTo("home")}
            title="Home"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="tab-label">Home</span>
          </button>
          {TOPIC_INDEX.map(t => (
            <button
              key={t.id}
              className={"tab" + (topic === t.id ? " active" : "") + " accent-" + t.accent}
              onClick={() => goTo(t.id)}
            >
              <span className="tab-id">{t.id}</span>
              <span className="tab-label">{t.label}</span>
              <span className="tab-progress">{t.points.filter(p => progress[p]).length}/{t.points.length}</span>
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <div className="progress-chip" title={`${doneCount} of ${ALL_POINTS.length} dot points complete`}>
            <div className="progress-ring">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <circle cx="11" cy="11" r="9" fill="none" stroke="var(--border)" strokeWidth="2.5"/>
                <circle cx="11" cy="11" r="9" fill="none" stroke="var(--accent)" strokeWidth="2.5"
                  strokeDasharray={`${pct * 0.5654} 56.54`}
                  transform="rotate(-90 11 11)"
                  strokeLinecap="round"/>
              </svg>
            </div>
            <span className="progress-text">{doneCount}/{ALL_POINTS.length}</span>
          </div>

          <button className="icon-btn" aria-label="Glossary" title="Glossary" onClick={() => setGO(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </button>

          <button className="icon-btn" aria-label="Settings" title="Reading settings" onClick={() => setSO(s => !s)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>

          <button className="icon-btn mobile-only" aria-label="Menu" onClick={() => setMN(m => !m)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
          </button>
        </div>

        {settingsOpen && (
          <div className="settings-pop" onMouseLeave={() => setSO(false)}>
            <div className="settings-row">
              <label>Theme</label>
              <div className="seg">
                <button className={!dark ? "on" : ""} onClick={() => setDark(false)}>Light</button>
                <button className={dark ? "on" : ""} onClick={() => setDark(true)}>Dark</button>
              </div>
            </div>
            <div className="settings-row">
              <label>Text size</label>
              <div className="seg">
                <button className={size===0 ? "on" : ""} onClick={() => setSize(0)}>A</button>
                <button className={size===1 ? "on" : ""} onClick={() => setSize(1)} style={{fontSize:14}}>A</button>
                <button className={size===2 ? "on" : ""} onClick={() => setSize(2)} style={{fontSize:16}}>A</button>
              </div>
            </div>
            <div className="settings-row">
              <label>Reset progress</label>
              <button className="danger-btn" onClick={() => { if (confirm("Reset all progress?")) setProgress({}); }}>Reset</button>
            </div>
            <div className="settings-row">
              <label>Print this topic</label>
              <button className="ghost-btn" onClick={() => window.print()}>Print</button>
            </div>
            <div className="settings-row">
              <label>Export answers</label>
              <button className="ghost-btn" onClick={exportAnswers}>Export</button>
            </div>
          </div>
        )}
      </header>

      {/* ——— Mobile topic nav drawer ——— */}
      {mobileNav && (
        <div className="mobile-drawer" onClick={() => setMN(false)}>
          <div className="mobile-drawer-inner" onClick={e => e.stopPropagation()}>
            <button
              className={"mobile-tab mobile-tab-home" + (topic === "home" ? " active" : "")}
              onClick={() => goTo("home")}>
              <span className="tab-id">⌂</span>
              <span className="tab-label">Home</span>
              <span className="tab-progress"/>
            </button>
            {TOPIC_INDEX.map(t => (
              <button key={t.id}
                className={"mobile-tab accent-" + t.accent + (topic === t.id ? " active" : "")}
                onClick={() => goTo(t.id)}>
                <span className="tab-id">{t.id}</span>
                <span className="tab-label">{t.label}</span>
                <span className="tab-progress">{t.points.filter(p => progress[p]).length}/{t.points.length}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ——— Main content ——— */}
      <main className="main-scroll" ref={scrollerRef}>
        <div className="content-wrap">
          {topic === "home" && <Home progress={progress} goTo={goTo} topicIndex={TOPIC_INDEX} allPoints={ALL_POINTS} />}
          {topic === "2.1" && <Topic21 progress={progress} setProgress={setProgress} />}
          {topic === "2.2" && <Topic22 progress={progress} setProgress={setProgress} />}
          {topic === "2.3" && <Topic23 progress={progress} setProgress={setProgress} />}
          {topic === "2.4" && <Topic24 progress={progress} setProgress={setProgress} />}

          {/* inter-topic navigation */}
          {topic !== "home" && <TopicNav topic={topic} goTo={goTo} />}

          <footer className="site-footer">
            <div>Year 9 Science · Module: Diseases · Built for self-paced learning with UDL principles (multiple means of representation, engagement, and action &amp; expression).</div>
            <div>Your progress is saved automatically in this browser.</div>
          </footer>
        </div>
      </main>

      {/* ——— Glossary modal ——— */}
      {glossaryOpen && <GlossaryModal onClose={() => setGO(false)} />}
    </div>
  );
}

function TopicNav({ topic, goTo }) {
  const idx = TOPIC_INDEX.findIndex(t => t.id === topic);
  const prev = idx > 0 ? TOPIC_INDEX[idx-1] : null;
  const next = idx < TOPIC_INDEX.length - 1 ? TOPIC_INDEX[idx+1] : null;
  return (
    <nav className="topic-nav">
      {prev && <button className={"topic-nav-btn prev accent-" + prev.accent} onClick={() => goTo(prev.id)}>
        <span className="topic-nav-dir">← Previous</span>
        <span className="topic-nav-id">{prev.id}</span>
        <span className="topic-nav-label">{prev.label}</span>
      </button>}
      {!prev && <div/>}
      {next && <button className={"topic-nav-btn next accent-" + next.accent} onClick={() => goTo(next.id)}>
        <span className="topic-nav-dir">Next →</span>
        <span className="topic-nav-id">{next.id}</span>
        <span className="topic-nav-label">{next.label}</span>
      </button>}
    </nav>
  );
}

function GlossaryModal({ onClose }) {
  const [q, setQ] = useS("");
  const entries = useM(() => {
    const all = Object.entries(window.GLOSSARY).sort((a,b) => a[0].localeCompare(b[0]));
    if (!q.trim()) return all;
    const needle = q.toLowerCase();
    return all.filter(([term, def]) => term.includes(needle) || def.toLowerCase().includes(needle));
  }, [q]);
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Glossary</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <input className="gloss-search" placeholder="Search terms or definitions…"
          value={q} onChange={e => setQ(e.target.value)} autoFocus />
        <div className="gloss-list">
          {entries.map(([term, def]) => (
            <div className="gloss-entry" key={term}>
              <dt>{term}</dt>
              <dd>{def}</dd>
            </div>
          ))}
          {!entries.length && <div style={{padding:20,color:"var(--ink-muted)",textAlign:"center"}}>No matches.</div>}
        </div>
      </div>
    </div>
  );
}

function exportAnswers() {
  // Collect all written answers on the page and build a printable blob
  const areas = document.querySelectorAll(".response-box");
  if (!areas.length) { alert("No written answers to export on this topic. Visit each sub-topic to export all answers."); return; }
  const doc = [];
  doc.push("Year 9 Diseases — My Answers\nExported " + new Date().toLocaleString() + "\n");
  areas.forEach(a => {
    const card = a.closest(".quiz-card");
    const q = card ? card.querySelector(".quiz-q").innerText : "Question";
    const v = a.value.trim();
    if (v) {
      doc.push("\n— " + q + "\n" + v + "\n");
    }
  });
  if (doc.length === 1) { alert("No written answers to export yet."); return; }
  const blob = new Blob([doc.join("")], {type:"text/plain"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "diseases-answers.txt"; a.click();
  URL.revokeObjectURL(url);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
