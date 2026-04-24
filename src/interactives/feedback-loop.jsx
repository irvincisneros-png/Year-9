/* Negative feedback loop — body temperature simulator */
function FeedbackLoopSim() {
  const [ambient, setAmbient] = useState(20);
  const [bodyTemp, setBodyTemp] = useState(37);
  const [feedbackOn, setFeedbackOn] = useState(true);
  const [running, setRunning] = useState(true);
  const [history, setHistory] = useState([]);
  const [activeResponse, setActiveResponse] = useState(null);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setBodyTemp(t => {
        // heat exchange with environment (small drift toward ambient)
        const drift = (ambient - t) * 0.04;
        let corr = 0;
        let response = null;
        if (feedbackOn) {
          if (t < 36.8) {
            // too cold: shiver, constrict → warm up
            corr = (37 - t) * 0.18;
            response = "cold";
          } else if (t > 37.2) {
            // too hot: sweat, vasodilate → cool down
            corr = (37 - t) * 0.18;
            response = "hot";
          } else {
            response = "stable";
          }
        }
        setActiveResponse(response);
        const next = +(t + drift + corr).toFixed(3);
        setHistory(h => [...h.slice(-199), next]);
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [ambient, feedbackOn, running]);

  // chart
  const W = 480, H = 140;
  const minT = 32, maxT = 42;
  const y = (t) => H - ((t - minT) / (maxT - minT)) * H;
  const path = history.map((t, i) => `${i === 0 ? "M" : "L"} ${(i / 200) * W} ${y(t)}`).join(" ");

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,alignItems:"start"}}>
        <div>
          <label style={{display:"block",fontSize:13,fontWeight:500,marginBottom:6}}>Ambient temperature: <strong>{ambient}°C</strong></label>
          <input type="range" min="-10" max="45" step="1" value={ambient} onChange={e => setAmbient(+e.target.value)} style={{width:"100%"}} />
          <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--ink-muted)"}}>
            <span>−10</span><span>20</span><span>45</span>
          </div>
          <div style={{marginTop:16}}>
            <label style={{display:"flex",alignItems:"center",gap:8,fontSize:13,cursor:"pointer"}}>
              <input type="checkbox" checked={feedbackOn} onChange={e => setFeedbackOn(e.target.checked)} />
              Homeostasis ON (negative feedback active)
            </label>
          </div>
          <div style={{marginTop:12,display:"flex",gap:8}}>
            <button className="btn ghost" onClick={() => setRunning(r => !r)}>{running ? "Pause" : "Resume"}</button>
            <button className="btn ghost" onClick={() => { setBodyTemp(37); setHistory([]); }}>Reset</button>
          </div>
        </div>
        <div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:11,color:"var(--ink-muted)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Core body temp</div>
            <div style={{fontSize:"2.5rem",fontWeight:700,fontVariantNumeric:"tabular-nums",color: bodyTemp < 35 || bodyTemp > 39 ? "#dc2626" : "var(--ink)"}}>
              {bodyTemp.toFixed(1)}°C
            </div>
            <div style={{fontSize:12,color:"var(--ink-muted)",minHeight:18}}>
              {activeResponse === "cold" && "🥶 Shivering · vasoconstriction · thyroxine released"}
              {activeResponse === "hot" && "🥵 Sweating · vasodilation · respiratory loss"}
              {activeResponse === "stable" && "✓ Within safe range"}
              {!feedbackOn && "⚠ No response — drifting to ambient"}
            </div>
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:150,marginTop:16,background:"var(--bg-elev)",borderRadius:8,border:"1px solid var(--border)"}}>
        {/* safe zone */}
        <rect x="0" y={y(37.5)} width={W} height={y(35.5) - y(37.5)} fill="var(--emerald-soft)" opacity="0.7"/>
        {/* set point */}
        <line x1="0" x2={W} y1={y(37)} y2={y(37)} stroke="var(--emerald)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"/>
        {/* danger lines */}
        <line x1="0" x2={W} y1={y(35)} y2={y(35)} stroke="#dc2626" strokeWidth="0.5" opacity="0.4"/>
        <line x1="0" x2={W} y1={y(40)} y2={y(40)} stroke="#dc2626" strokeWidth="0.5" opacity="0.4"/>
        <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round"/>
        <text x="6" y={y(37) - 4} fontSize="10" fill="var(--emerald)" fontFamily="var(--font-mono)">set 37°C</text>
        <text x="6" y={y(35) - 4} fontSize="9" fill="#dc2626" fontFamily="var(--font-mono)">hypothermia</text>
        <text x="6" y={y(40) - 4} fontSize="9" fill="#dc2626" fontFamily="var(--font-mono)">enzymes denature</text>
      </svg>
      <div style={{fontSize:12,color:"var(--ink-muted)",marginTop:6}}>Try: drop ambient to −5°C and watch the body defend 37°C. Now turn homeostasis OFF — see how fast cells would be in trouble.</div>
    </div>
  );
}
window.FeedbackLoopSim = FeedbackLoopSim;
