/* global React */
const { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } = React;

// ——— Progress tracking via localStorage ———
const PROGRESS_KEY = "y9diseases.progress.v1";
const SIZE_KEY = "y9diseases.size.v1";
const THEME_KEY = "y9diseases.theme.v1";

function useLocalStorage(key, initial) {
  const [v, setV] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initial;
    } catch { return initial; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key, v]);
  return [v, setV];
}

// ——— Dot point wrapper with checkbox ———
function DotPoint({ id, title, children, progress, setProgress }) {
  const done = !!progress[id];
  const toggle = () => setProgress(p => ({ ...p, [id]: !p[id] }));
  return (
    <section className="dot-point" id={"dp-" + id} data-screen-label={id}>
      <header className="dp-header">
        <span className="dp-id">{id}</span>
        <h2 className="dp-title">{title}</h2>
        <button
          className={"dp-check" + (done ? " done" : "")}
          onClick={toggle}
          aria-label={done ? "Mark as not done" : "Mark as done"}
          title={done ? "Mark as not done" : "Mark as done"}
        >
          {done && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
        </button>
      </header>
      <div className="dp-body">{children}</div>
    </section>
  );
}

// ——— Interactive wrapper ———
function Interactive({ title, subtitle, children }) {
  return (
    <div className="interactive">
      <div className="interactive-label">Interactive</div>
      <div className="interactive-title">{title}</div>
      {subtitle && <div className="interactive-sub">{subtitle}</div>}
      {children}
    </div>
  );
}

// ——— Figure with image + caption ———
function Figure({ num, caption, src, alt, maxWidth, children }) {
  return (
    <figure className="figure" style={maxWidth ? { maxWidth } : undefined}>
      {src ? <img src={src} alt={alt || caption} loading="lazy" /> : children}
      <figcaption className="figure-caption">{num && <><strong>Figure {num}</strong> — </>}{caption}</figcaption>
    </figure>
  );
}

// ——— Quiz: multiple choice ———
function MCQ({ num, question, options, correct, explain }) {
  const [chosen, setChosen] = useState(null);
  const locked = chosen !== null;
  return (
    <div className="quiz-card">
      <div className="quiz-q"><span className="quiz-q-num">{num}</span><span>{question}</span></div>
      <div className="quiz-options">
        {options.map((o, i) => {
          const isCorrect = i === correct;
          const isChosen = chosen === i;
          let cls = "quiz-opt";
          if (locked && isCorrect) cls += " correct";
          else if (locked && isChosen && !isCorrect) cls += " wrong";
          return (
            <button key={i} className={cls} onClick={() => !locked && setChosen(i)} disabled={locked}>
              <span style={{fontFamily:"var(--font-mono)",fontSize:11,opacity:0.6,minWidth:16}}>{String.fromCharCode(65+i)}</span>
              <span>{o}</span>
              {locked && isCorrect && <svg style={{marginLeft:"auto"}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
              {locked && isChosen && !isCorrect && <svg style={{marginLeft:"auto"}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>}
            </button>
          );
        })}
      </div>
      {locked && <div className="quiz-feedback">{chosen === correct ? "✓ Correct. " : "Not quite. "}{explain}</div>}
    </div>
  );
}

// ——— Short-answer prompt with model answer reveal ———
function WrittenQ({ num, question, model }) {
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="quiz-card">
      <div className="quiz-q"><span className="quiz-q-num">{num}</span><span>{question}</span></div>
      <textarea className="response-box" value={val} onChange={e => setVal(e.target.value)} placeholder="Type your answer here…" />
      {model && <>
        <button className="reveal-btn" onClick={() => setShow(s => !s)}>{show ? "Hide model answer" : "Show model answer"}</button>
        {show && <div className="model-answer"><strong>Model answer: </strong>{model}</div>}
      </>}
    </div>
  );
}

// ——— Question group wrapper ———
function Questions({ title, children }) {
  return (
    <div style={{marginTop: 24}}>
      <h3 style={{display:"flex",alignItems:"center",gap:10,margin:"0 0 12px"}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--ink-muted)",fontWeight:500}}>Questions</span>
        <span>{title}</span>
      </h3>
      {children}
    </div>
  );
}

// ——— Sub-nav within a topic (list of dot points) ———
function SubNav({ items, progress, activeId }) {
  const scrollTo = (id) => {
    const el = document.getElementById("dp-" + id);
    if (!el) return;
    const scroller = document.querySelector(".main-scroll") || document.scrollingElement || document.documentElement;
    const rect = el.getBoundingClientRect();
    const sRect = scroller.getBoundingClientRect();
    const offset = scroller === document.scrollingElement || scroller === document.documentElement
      ? window.scrollY + rect.top - 88
      : scroller.scrollTop + (rect.top - sRect.top) - 16;
    scroller.scrollTo({ top: offset, behavior: "smooth" });
  };
  return (
    <nav className="sub-nav" aria-label="Dot point navigation">
      {items.map(item => {
        const done = !!progress[item.id];
        const active = activeId === item.id;
        return (
          <button
            key={item.id}
            className={"sub-nav-btn" + (done ? " done" : "") + (active ? " active" : "")}
            onClick={() => scrollTo(item.id)}
            title={item.title}
          >
            {item.id}{done && " ✓"}
          </button>
        );
      })}
    </nav>
  );
}

Object.assign(window, {
  useLocalStorage, DotPoint, Interactive, Figure, MCQ, WrittenQ, Questions, SubNav,
  PROGRESS_KEY, SIZE_KEY, THEME_KEY,
});
