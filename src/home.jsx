/* Landing / Home page */
/* global React */
const { useMemo: useMemoH } = React;

function Home({ progress, goTo, topicIndex, allPoints }) {
  const doneCount = allPoints.filter(p => progress[p]).length;
  const pct = Math.round(100 * doneCount / allPoints.length);

  // Find where the student left off: first topic with any progress but not finished, else the first unfinished topic.
  const continueTopic = useMemoH(() => {
    const inProgress = topicIndex.find(t => {
      const done = t.points.filter(p => progress[p]).length;
      return done > 0 && done < t.points.length;
    });
    if (inProgress) return inProgress;
    const unstarted = topicIndex.find(t => t.points.every(p => !progress[p]));
    if (unstarted) return unstarted;
    return topicIndex[0];
  }, [progress, topicIndex]);

  const continueDone = continueTopic.points.filter(p => progress[p]).length;
  const ctaLabel = doneCount === 0
    ? "Start learning"
    : doneCount === allPoints.length
      ? "Review everything"
      : "Continue where you left off";

  return (
    <div className="home" data-screen-label="home">
      {/* ——— Hero ——— */}
      <section className="home-hero">
        <div className="home-hero-text">
          <div className="home-eyebrow">
            <span className="home-eyebrow-pill">Year 9 · Science</span>
            <span className="home-eyebrow-meta">Stage 5 · NSW Syllabus</span>
          </div>
          <h1 className="home-title">
            <span className="home-title-kicker">Module 2</span>
            Diseases<span className="home-title-dot">.</span>
          </h1>
          <p className="home-lede">
            How the body keeps itself stable, what goes wrong when pathogens get in, and how we stop them spreading. Four sub-topics, 17 dot points, and a lab's worth of interactive practicals — all self-paced.
          </p>

          <div className="home-cta-row">
            <button className={"home-cta primary accent-" + continueTopic.accent} onClick={() => goTo(continueTopic.id)}>
              <div className="home-cta-top">
                <span className="home-cta-label">{ctaLabel}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <div className="home-cta-bottom">
                <span className="home-cta-id">{continueTopic.id}</span>
                <span className="home-cta-topicname">{continueTopic.label}</span>
                <span className="home-cta-progress">{continueDone}/{continueTopic.points.length}</span>
              </div>
            </button>

            <div className="home-summary">
              <div className="home-summary-ring">
                <svg width="56" height="56" viewBox="0 0 56 56">
                  <circle cx="28" cy="28" r="24" fill="none" stroke="var(--border)" strokeWidth="5"/>
                  <circle cx="28" cy="28" r="24" fill="none" stroke="var(--emerald)" strokeWidth="5"
                    strokeDasharray={`${pct * 1.508} 150.8`}
                    transform="rotate(-90 28 28)"
                    strokeLinecap="round"/>
                </svg>
                <div className="home-summary-pct">{pct}%</div>
              </div>
              <div>
                <div className="home-summary-count">{doneCount} of {allPoints.length}</div>
                <div className="home-summary-sub">dot points complete</div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-hero-art">
          <img src="images/raw-00.jpg" alt="Year 9 Diseases topic booklet cover" loading="eager" />
          <div className="home-hero-art-tag">Topic booklet · NSW Science</div>
        </div>
      </section>

      {/* ——— Topic cards ——— */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Four sub-topics</h2>
          <p className="home-section-sub">Each one builds on the last. Work through them in order, or jump to any section.</p>
        </div>

        <div className="home-topic-grid">
          {topicIndex.map((t, i) => {
            const done = t.points.filter(p => progress[p]).length;
            const tPct = Math.round(100 * done / t.points.length);
            return (
              <button key={t.id} className={"home-topic-card accent-" + t.accent} onClick={() => goTo(t.id)}>
                <div className="home-topic-head">
                  <span className="home-topic-num">{t.id}</span>
                  <span className="home-topic-bar">
                    <span className="home-topic-bar-fill" style={{width: tPct + "%"}}/>
                  </span>
                  <span className="home-topic-count">{done}/{t.points.length}</span>
                </div>
                <h3 className="home-topic-title">{t.label}</h3>
                <p className="home-topic-desc">{HOME_DESCRIPTIONS[t.id]}</p>
                <div className="home-topic-tags">
                  {HOME_TAGS[t.id].map(tag => <span key={tag} className="home-topic-tag">{tag}</span>)}
                </div>
                <div className="home-topic-foot">
                  <span className="home-topic-open">Open sub-topic</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ——— What you'll do ——— */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>What you'll do</h2>
          <p className="home-section-sub">Every sub-topic mixes reading, simulations you can tinker with, and questions that give instant feedback.</p>
        </div>

        <div className="home-feature-grid">
          <div className="home-feature">
            <div className="home-feature-icon" style={{background:"var(--emerald-soft)", color:"var(--emerald)"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4>11 interactives</h4>
            <p>Reaction-time tester, outbreak simulator, three lines of defence, herd immunity slider, bush medicine map and more.</p>
          </div>

          <div className="home-feature">
            <div className="home-feature-icon" style={{background:"var(--orange-soft)", color:"var(--orange)"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h4>Instant-feedback quizzes</h4>
            <p>Multiple-choice checks your understanding immediately. Written-response questions have model answers you can reveal.</p>
          </div>

          <div className="home-feature">
            <div className="home-feature-icon" style={{background:"var(--blue-soft)", color:"var(--blue)"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h4>Glossary on tap</h4>
            <p>Hover any highlighted term for a definition, or open the full glossary from the top bar.</p>
          </div>

          <div className="home-feature">
            <div className="home-feature-icon" style={{background:"var(--violet-soft)", color:"var(--violet)"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h4>Your progress saves itself</h4>
            <p>Tick off dot points as you go. Everything stays in this browser — export your written answers any time.</p>
          </div>
        </div>
      </section>

      {/* ——— How to use ——— */}
      <section className="home-section">
        <div className="home-howto">
          <div className="home-howto-head">
            <div className="home-howto-badge">How to use this site</div>
            <h2>Read a little, do a little, check yourself.</h2>
          </div>
          <ol className="home-howto-steps">
            <li>
              <span className="home-howto-num">1</span>
              <div>
                <h4>Pick a sub-topic</h4>
                <p>Start at 2.1 or jump into whatever your teacher has set. The tabs are always at the top.</p>
              </div>
            </li>
            <li>
              <span className="home-howto-num">2</span>
              <div>
                <h4>Read, then play</h4>
                <p>Each dot point has a short explanation and an interactive to make it real. Don't just read — click things.</p>
              </div>
            </li>
            <li>
              <span className="home-howto-num">3</span>
              <div>
                <h4>Check understanding</h4>
                <p>Answer the questions. If you get stuck, the model answer is one click away.</p>
              </div>
            </li>
            <li>
              <span className="home-howto-num">4</span>
              <div>
                <h4>Tick it off</h4>
                <p>Use the checkbox beside each dot point. Your progress ring fills up as you go.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ——— Quick start strip ——— */}
      <section className="home-jumpstart">
        <div>
          <h3>Ready?</h3>
          <p>Jump straight into the first sub-topic — homeostasis.</p>
        </div>
        <button className="home-cta primary accent-emerald" onClick={() => goTo("2.1")}>
          <div className="home-cta-top">
            <span className="home-cta-label">Begin 2.1 · Homeostasis</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </button>
      </section>
    </div>
  );
}

const HOME_DESCRIPTIONS = {
  "2.1": "How the body senses change and defends its set points — temperature, glucose, water balance. The nervous system's speed, the endocrine system's reach.",
  "2.2": "Pathogens, risk factors, epidemics, and the three lines of defence. Why vaccines work, and what herd immunity actually is.",
  "2.3": "Breaking the chain of infection, everyday prevention, First Nations knowledge, and what Australia's immunisation data tells us.",
  "2.4": "Australian scientists and inventors who changed medicine — bionic ear, bionic eye, Gardasil, RFDS, and the stomach ulcer story.",
};
const HOME_TAGS = {
  "2.1": ["Feedback loops", "Reaction time", "Thermoregulation"],
  "2.2": ["Pathogens", "Immune response", "Herd immunity"],
  "2.3": ["Prevention", "Bush medicine", "Data analysis"],
  "2.4": ["Innovators", "Case studies"],
};

window.Home = Home;
