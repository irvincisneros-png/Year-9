/* Reaction time tester — measures user's reaction to visual stimulus */
function ReactionTimer() {
  const [state, setState] = useState("idle"); // idle, waiting, go, result, tooEarly
  const [startT, setStartT] = useState(0);
  const [rt, setRt] = useState(null);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    setState("waiting");
    setRt(null);
    const delay = 1200 + Math.random() * 2500;
    timerRef.current = setTimeout(() => {
      setStartT(performance.now());
      setState("go");
    }, delay);
  };

  const click = () => {
    if (state === "idle" || state === "result" || state === "tooEarly") { start(); return; }
    if (state === "waiting") {
      clearTimeout(timerRef.current);
      setState("tooEarly");
      return;
    }
    if (state === "go") {
      const dt = performance.now() - startT;
      setRt(dt);
      setHistory(h => [...h, dt]);
      setState("result");
    }
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const avg = history.length ? history.reduce((a,b)=>a+b,0) / history.length : 0;
  const best = history.length ? Math.min(...history) : 0;

  const cls = {
    idle: {bg:"var(--bg-sunken)",txt:"Click to start"},
    waiting: {bg:"#fee2e2",txt:"Wait for green…"},
    go: {bg:"#bbf7d0",txt:"CLICK NOW!"},
    result: {bg:"var(--emerald-soft)",txt:`${rt?.toFixed(0)} ms — click to try again`},
    tooEarly: {bg:"#fef3c7",txt:"Too early! Click to retry"},
  }[state];

  return (
    <div>
      <button
        onClick={click}
        style={{
          width:"100%",
          minHeight:160,
          borderRadius:"var(--radius)",
          border:"2px solid var(--border)",
          background:cls.bg,
          fontSize:"1.5rem",
          fontWeight:600,
          color:"var(--ink)",
          cursor:"pointer",
          fontFamily:"inherit",
          transition:"background 0.1s",
        }}
      >
        {cls.txt}
      </button>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginTop:12,textAlign:"center"}}>
        <div>
          <div style={{fontSize:11,color:"var(--ink-muted)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Last</div>
          <div style={{fontSize:"1.25rem",fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{rt ? `${rt.toFixed(0)} ms` : "—"}</div>
        </div>
        <div>
          <div style={{fontSize:11,color:"var(--ink-muted)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Average ({history.length})</div>
          <div style={{fontSize:"1.25rem",fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{history.length ? `${avg.toFixed(0)} ms` : "—"}</div>
        </div>
        <div>
          <div style={{fontSize:11,color:"var(--ink-muted)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Best</div>
          <div style={{fontSize:"1.25rem",fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{history.length ? `${best.toFixed(0)} ms` : "—"}</div>
        </div>
      </div>
      <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:12,padding:10,background:"var(--bg-elev)",border:"1px solid var(--border)",borderRadius:8}}>
        <strong>Typical results:</strong> conscious visual response ≈ 200–270 ms; elite athletes ≈ 150 ms; reflex (spinal cord only, e.g. knee-jerk) ≈ 50 ms.
        The signal here has to travel eye → optic nerve → visual cortex → motor cortex → spinal cord → arm — much further than a reflex.
      </div>
      {history.length > 1 && <button className="btn ghost" style={{marginTop:8}} onClick={() => setHistory([])}>Clear history</button>}
    </div>
  );
}
window.ReactionTimer = ReactionTimer;
